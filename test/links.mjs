// Live-link check for every external URL in the filing layer (and the page's own external links).
// Run from tbv-tools/property-tax:  node test/links.mjs
// Follows redirects; anything that does not end at 2xx is reported. Zak's rule: no dead pages ship.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { FILING } from '../data/filing-data.js';
const execFileP = promisify(execFile);

const urls = new Map(); // url -> where
const add = (u, where) => { if (u && /^https?:\/\//.test(u)) { if (!urls.has(u)) urls.set(u, []); urls.get(u).push(where); } };
for (const [st, f] of Object.entries(FILING)) {
  (f.sourceUrls || []).forEach(x => add(x.url, `${st} source`));
  (f.forms || []).forEach(x => add(x.url, `${st} form`));
  if (f.officeLocator) { add(f.officeLocator.url, `${st} locator`); add(f.officeLocator.fallbackUrl, `${st} locator fallback`); }
}
const html = readFileSync(fileURLToPath(new URL('../index.html', import.meta.url)), 'utf8');
for (const m of html.matchAll(/href="(https?:\/\/[^"]+)"/g)) if (!/googletagmanager|thebetterveteran\.com/.test(m[1])) add(m[1], 'index.html');

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36';
const UA2 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
// Sites that serve a bot wall to every scripted request but are live in a browser. Each entry carries the
// date a human-equivalent fetch confirmed the page. Anything else that fails is a real failure.
const KNOWN_BOT_WALLS = { 'www.nysenate.gov': 'RPTL 458-a page confirmed live and current (rev. 2026-06-05) via a browser-path fetch on 2026-10-21' };
async function probe(u) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 25000);
  const H = ua => ({ 'User-Agent': ua, Accept: 'text/html,application/xhtml+xml,application/pdf,*/*;q=0.8', 'Accept-Language': 'en-US,en;q=0.9' });
  try {
    let res = await fetch(u, { method: 'HEAD', redirect: 'follow', signal: ctl.signal, headers: H(UA) });
    if (!(res.status >= 200 && res.status < 300)) res = await fetch(u, { method: 'GET', redirect: 'follow', signal: ctl.signal, headers: H(UA) });
    if (!(res.status >= 200 && res.status < 300)) res = await fetch(u, { method: 'GET', redirect: 'follow', signal: ctl.signal, headers: H(UA2) });
    if (!(res.status >= 200 && res.status < 300) && KNOWN_BOT_WALLS[new URL(u).hostname]) return { status: 200, final: res.url, botWall: KNOWN_BOT_WALLS[new URL(u).hostname] };
    if (res.status === 429) { // rate-limited (the Wayback Machine does this): wait, then one slow curl with the system's own stack
      await new Promise(r => setTimeout(r, 12000));
      try { const { stdout } = await execFileP('curl', ['-sL', '-o', '/dev/null', '-m', '90', '-A', UA2, '-w', '%{http_code} %{url_effective}', u]); const [st, fin] = stdout.trim().split(' '); return { status: parseInt(st, 10) || 0, final: fin || u, viaCurl: true }; } catch { /* fall through */ }
    }
    return { status: res.status, final: res.url };
  } catch (e) {
    if (KNOWN_BOT_WALLS[new URL(u).hostname]) return { status: 200, final: u, botWall: KNOWN_BOT_WALLS[new URL(u).hostname] };
    // Some state sites (ilga.gov) send a certificate chain node's bundled CA store can't verify while the
    // system trust store (and every browser) can. Fall back to curl, which uses the system store.
    const code = e.cause && e.cause.code;
    if (/UNABLE_TO_VERIFY|CERT_|SELF_SIGNED|ERR_TLS/.test(String(code || e.message))) {
      try {
        const { stdout } = await execFileP('curl', ['-sL', '-o', '/dev/null', '-m', '25', '-A', UA, '-w', '%{http_code} %{url_effective}', u]);
        const [st, fin] = stdout.trim().split(' ');
        return { status: parseInt(st, 10) || 0, final: fin || u, viaCurl: true };
      } catch { /* fall through */ }
    }
    if (e.name === 'AbortError') { // slow host (legislature.mi.gov takes 30-60 s): one patient curl before calling it dead
      try { const { stdout } = await execFileP('curl', ['-sL', '-o', '/dev/null', '-m', '120', '-A', UA2, '-w', '%{http_code} %{url_effective}', u]); const [st, fin] = stdout.trim().split(' '); if (parseInt(st, 10) > 0) return { status: parseInt(st, 10), final: fin || u, viaCurl: true, slow: true }; } catch { /* fall through */ }
    }
    return { status: 0, error: e.name === 'AbortError' ? 'timeout' : (code || e.message) };
  }
  finally { clearTimeout(t); }
}
const all = [...urls.keys()];
// The Wayback Machine rate-limits parallel probes (429) and is slow; check those serially with a pause and one retry.
const archive = all.filter(u => /web\.archive\.org/.test(u)), list = all.filter(u => !/web\.archive\.org/.test(u));
console.log(`checking ${all.length} distinct URLs (${archive.length} archived copies checked serially)…`);
const results = [];
const POOL = 6;
let i = 0;
await Promise.all(Array.from({ length: POOL }, async () => { while (i < list.length) { const u = list[i++]; let r = await probe(u); if (r.status === 0 && /timeout/.test(r.error || '')) r = await probe(u); results.push({ u, ...r }); } }));
const sleep = ms => new Promise(r => setTimeout(r, ms));
for (const u of archive) { let r = await probe(u); if (r.status === 429 || r.status === 0) { await sleep(8000); r = await probe(u); } results.push({ u, ...r }); await sleep(2500); }
const bad = results.filter(r => !(r.status >= 200 && r.status < 300));
for (const r of results.sort((a, b) => a.u.localeCompare(b.u))) if (!(r.status >= 200 && r.status < 300)) console.log(`${String(r.status).padStart(3)}  ${r.u}  [${urls.get(r.u).join(', ')}]${r.error ? ' ' + r.error : ''}${r.final && r.final !== r.u ? ' -> ' + r.final : ''}`);
const walls = results.filter(r => r.botWall);
if (walls.length) console.log(`${walls.length} link(s) pass on the documented bot-wall list: ${walls.map(r => r.u).join(', ')}`);
console.log(bad.length === 0 ? `ALL ${list.length} LINKS LIVE` : `${bad.length} of ${list.length} links did not return 2xx`);
process.exitCode = bad.length ? 1 : 0;
