// Screenshots for a visual pass. Run from tbv-tools/:  node property-tax/test/shots.mjs <outdir>
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, extname } from 'node:path';
import process from 'node:process';
const execFileP = promisify(execFile);
const PORT = 8919, BASE = `http://localhost:${PORT}/property-tax/`;
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = process.argv[2] || '.';
const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
const server = createServer(async (req, res) => { try { let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html'; const body = await readFile(join(ROOT, p)); res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' }); res.end(body); } catch { res.writeHead(404).end(); } });
await new Promise(r => server.listen(PORT, r));
const shot = async (name, url, w, h) => { await execFileP(CHROME, ['--headless', '--disable-gpu', '--no-sandbox', '--hide-scrollbars', `--window-size=${w},${h}`, '--virtual-time-budget=8000', `--screenshot=${join(OUT, name)}`, url], { maxBuffer: 1e8 }).catch(e => console.log('shot failed', name, e.message)); console.log('wrote', name); };
try {
  await shot('ptx-first-desktop.png', BASE + '?utm_source=shot', 1280, 1800);
  await shot('ptx-first-mobile.png', BASE + '?utm_source=shot', 390, 2000);
  await shot('ptx-result-desktop.png', BASE + '?m=rated&st=TX&r=100&pt=1&hv=350000&own=yes&z=78701&ry=2021&ty=2018&source=property-tax', 1280, 2600);
  await shot('ptx-result-mobile.png', BASE + '?m=never&st=NJ&r=100&pt=1&hv=500000&own=yes&z=07030&ry=2019&ty=2015&source=property-tax', 390, 2400);
  await shot('vap-result-desktop.png', `http://localhost:${PORT}/vre-approval-prep/?m=first&r=70&st=applied&ed=bach&pl=mast&c=24000&source=vre-approval-prep`, 1280, 1800);
} finally { server.close(); }
