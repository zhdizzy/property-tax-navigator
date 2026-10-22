// Snapshot the Texas Comptroller's per-county appraisal district directory into data/tx-offices.js.
//   node tools/snapshot-tx-offices.mjs        (run from tbv-tools/property-tax; ~254 fetches, a few minutes)
// Source: https://comptroller.texas.gov/taxes/property-tax/county-directory/<slug>.php (public, official).
// Each page has an "Appraisal District" block (where exemption applications are filed) and a
// "Tax Assessor/Collector" block (vehicle registration and bill collection; NOT where exemptions go).
// Re-run each January; the Comptroller stamps each page with its own "Last Updated" date, kept here.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const DIR = fileURLToPath(new URL('../data/', import.meta.url));
const zc = readFileSync(DIR + 'zip-county.js', 'utf8');
const sb = { window: {} }; vm.createContext(sb); vm.runInContext(zc, sb);
const counties = Object.entries(sb.window.COUNTY_NAMES).filter(([f]) => f.startsWith('48')).map(([fips, name]) => ({ fips, name }));
// The Comptroller's page names follow the county name lowercased with spaces removed, with one known exception.
const SLUG_OVERRIDE = { 'Dimmit County': 'dimmitt' };
const slug = n => SLUG_OVERRIDE[n] || n.replace(/\s+County$/i, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36';
const strip = s => String(s || '').replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim();
const field = (block, label) => { const m = block.match(new RegExp(`<strong>\\s*${label}:\\s*</strong>\\s*([^<]*(?:<a[^>]*>[^<]*</a>)?[^<]*)`, 'i')); return m ? strip(m[1]) : ''; };
const href = (block, label) => { const m = block.match(new RegExp(`<strong>\\s*${label}:\\s*</strong>\\s*<a href="([^"]+)"`, 'i')); return m ? m[1].replace(/^mailto:|^tel:/, '') : ''; };
function parseBlock(html, heading) {
  const i = html.search(new RegExp(`<h3>\\s*${heading}\\s*</h3>`)); if (i < 0) return null;
  const sec = html.slice(i, i + 6000);
  const updated = (sec.match(/Last Updated:\s*([\d/]+)/) || [])[1] || '';
  const head = (sec.match(/<h4>\s*([^<]+?)\s*<\/h4>/) || [])[1] || '';
  const [role, person] = head.split(/:\s*/);
  const mailing = (sec.match(/<h4>\s*Mailing Address\s*<\/h4>\s*<p>([\s\S]*?)<\/p>/) || [])[1];
  const street = (sec.match(/<h4>\s*Street Address\s*<\/h4>\s*<p>([\s\S]*?)<\/p>/) || [])[1];
  return { updated, role: (role || '').trim(), person: (person || '').trim(), liaison: field(sec, 'Taxpayer Liaison'), phone: href(sec, 'Phone') || field(sec, 'Phone'), tollFree: field(sec, 'Toll Free'), fax: field(sec, 'Fax'), email: href(sec, 'Email') || field(sec, 'Email'), website: href(sec, 'Website') || field(sec, 'Website'), mailing: strip(mailing), street: strip(street) };
}
const out = {}; const problems = [];
let i = 0; const POOL = 4;
await Promise.all(Array.from({ length: POOL }, async () => {
  while (i < counties.length) {
    const c = counties[i++]; const s = slug(c.name); const url = `https://comptroller.texas.gov/taxes/property-tax/county-directory/${s}.php`;
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA } });
      if (res.status !== 200) { problems.push(`${c.name} (${s}): HTTP ${res.status}`); continue; }
      const html = await res.text();
      const cad = parseBlock(html, 'Appraisal District'), tac = parseBlock(html, 'Tax Assessor\\/Collector');
      if (!cad || !cad.phone && !cad.website) problems.push(`${c.name}: appraisal district block not parsed`);
      out[c.fips] = { county: c.name, slug: s, url, cad, tac };
    } catch (e) { problems.push(`${c.name} (${s}): ${e.message}`); }
    await new Promise(r => setTimeout(r, 150));
  }
}));
const stamp = new Date().toISOString().slice(0, 10);
const sorted = Object.fromEntries(Object.entries(out).sort());
writeFileSync(DIR + 'tx-offices.js', `// Texas appraisal district + tax assessor-collector contacts by county FIPS, snapshot ${stamp} from the Texas\n// Comptroller county directory (comptroller.texas.gov/taxes/property-tax/county-directory/). Each entry keeps the\n// Comptroller's own "Last Updated" date. Regenerate with tools/snapshot-tx-offices.mjs (each January).\nwindow.TX_OFFICES_STAMP = ${JSON.stringify(stamp)};\nwindow.TX_OFFICES = ${JSON.stringify(sorted)};\n`);
console.log(`wrote ${Object.keys(out).length} of ${counties.length} counties${problems.length ? `; ${problems.length} problems:` : ''}`);
problems.forEach(p => console.log('  ' + p));
