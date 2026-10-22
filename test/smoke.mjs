/**
 * Veteran Property Tax Exemption Navigator headless smoke test (house pattern from vre-approval-prep).
 * Run from tbv-tools/:  node property-tax/test/smoke.mjs   (port 8918)
 * Serves tbv-tools/ so the cross-tool script (/state-benefits/data/normalized-data.js) and the lazy
 * ZIP crosswalk (/property-tax/data/zip-county.js) resolve like production.
 */
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, extname } from 'node:path';
import process from 'node:process';

const execFileP = promisify(execFile);
const PORT = 8918;
const BASE = `http://localhost:${PORT}/property-tax/`;
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
// Real keys from buildShareUrl.
const SHARE = '?m=rated&st=TX&r=100&pt=1&hv=350000&own=yes&z=78701&ry=2021&ty=2018&source=property-tax';
const SHARE_NEVER = '?m=never&st=NJ&r=100&pt=1&hv=500000&own=yes&z=07030&ry=2019&ty=2015&source=property-tax';
const SHARE_AS = '?m=rated&st=AS&r=100&pt=1&hv=200000&own=yes&source=property-tax';

let failures = 0;
const check = (ok, label, extra = '') => { if (!ok) failures++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${extra ? ' — ' + extra : ''}`); };
async function chrome(url, extra = []) {
  const { stdout, stderr } = await execFileP(CHROME, ['--headless', '--disable-gpu', '--no-sandbox', '--enable-logging=stderr', '--v=0', '--virtual-time-budget=9000', '--dump-dom', ...extra, url], { maxBuffer: 60 * 1024 * 1024 }).catch(e => e);
  const errors = (stderr || '').split('\n').filter(l => /Uncaught|ReferenceError|TypeError|SyntaxError|Failed to load module/.test(l));
  return { dom: stdout || '', errors };
}

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml' };
const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p.endsWith('/')) p += 'index.html';
    const body = await readFile(join(ROOT, p));
    res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404).end('not found'); }
});
await new Promise(r => server.listen(PORT, r));
process.on('exit', () => server.close());

try {
  const first = await chrome(BASE);
  check(first.errors.length === 0, 'first visit: no console errors', first.errors.slice(0, 3).join(' | '));
  check(/id="tour-root"(?![^>]*hidden)/.test(first.dom), 'tour auto-starts on first visit');
  check(/Step 1 of 7/.test(first.dom), 'tour step label renders');
  check(/__ptxArrivalHadParams/.test(first.dom), 'arrival-params snippet present');
  check(/"FAQPage"/.test(first.dom) && /"WebApplication"/.test(first.dom), 'JSON-LD present');
  check(/G-HG7N8F337G/.test(first.dom), 'GA4 present');
  check(/<h1>Veteran Property Tax Exemption Navigator<\/h1>/.test(first.dom), 'static h1');
  check(/id="about-this-tool"/.test(first.dom) && /id="how-it-works"/.test(first.dom), 'GEO sections present');
  check(/<option value="TX">Texas<\/option>/.test(first.dom) && /<option value="AS">American Samoa<\/option>/.test(first.dom), 'state select filled from the dataset incl. territories');
  check((first.dom.match(/<option value="[A-Z]{2}">/g) || []).length === 55, '55 jurisdictions in the select', String((first.dom.match(/<option value="[A-Z]{2}">/g) || []).length));
  check(/id="results-container"[^>]*style="display:none;"/.test(first.dom), 'results gated on first visit');
  check(/Required to run/.test(first.dom), 'live strip shows the gate message');
  check(/More Free Veteran Tools/.test(first.dom), 'footer present');
  check(/Is the disabled veteran property tax exemption automatic\?/.test(first.dom), 'visible FAQ rendered');

  const share = await chrome(BASE + SHARE);
  check(share.errors.length === 0, 'share link (TX, ZIP): no console errors', share.errors.slice(0, 3).join(' | '));
  check(/id="tour-root"[^>]*hidden/.test(share.dom), 'tour does NOT auto-run for share arrivals');
  check(/id="results-container"[^>]*style="display:\s*block;"/.test(share.dom), 'share link reveals results');
  check(/Travis County/.test(share.dom), 'ZIP 78701 resolved to Travis County via the lazy crosswalk');
  check(/File here: Travis County Appraisal District/.test(share.dom) && /tcadcentral\.org/.test(share.dom), 'Texas appraisal district contacts rendered from the Comptroller snapshot');
  check(/id="ics-btn"/.test(share.dom), 'add-to-calendar button present on the deadline card');
  check(/id="card-value"/.test(share.dom) && /id="card-file"/.test(share.dom) && /id="card-deadline"/.test(share.dom) && /id="card-checklist"/.test(share.dom), 'cards rendered');
  check(/PROPERTY TAX EXEMPTION FILING CHECKLIST/.test(share.dom), 'checklist sheet rendered');
  check(!/undefined|NaN|\[object Object\]/.test(share.dom.replace(/<script[\s\S]*?<\/script>/g, '')), 'no undefined/NaN in rendered DOM');
  check(/id="hero-capture"[^>]*style="display:\s*block;"/.test(share.dom), 'hero capture shown at the result moment');

  const never = await chrome(BASE + SHARE_NEVER);
  check(never.errors.length === 0, 'share link (NJ, never filed): no console errors', never.errors.slice(0, 3).join(' | '));
  check(/Hudson County/.test(never.dom), 'ZIP 07030 resolved to Hudson County');
  check(/id="card-missed"/.test(never.dom), 'missed-years card present');

  const as = await chrome(BASE + SHARE_AS);
  check(as.errors.length === 0, 'share link (AS): no console errors', as.errors.slice(0, 3).join(' | '));
  check(/No veteran property-tax program here/.test(as.dom), 'American Samoa renders the no-program verdict');
} finally { server.close(); }

console.log(failures === 0 ? 'ALL SMOKE CHECKS PASSED' : `${failures} smoke check(s) failed`);
process.exitCode = failures === 0 ? 0 : 1;
