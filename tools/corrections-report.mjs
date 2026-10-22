// Print every dataCorrection the filing-layer research logged against the Best State dollar rows, as
// markdown for the workspace audit list. Run from tbv-tools/property-tax:  node tools/corrections-report.mjs
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
const SRC = fileURLToPath(new URL('../data/filing-src', import.meta.url));
let n = 0;
for (const f of readdirSync(SRC).filter(x => /^[A-Z]{2}\.json$/.test(x)).sort()) {
  const j = JSON.parse(readFileSync(join(SRC, f), 'utf8'));
  const cs = (j.dataCorrections || []).filter(c => c && c.issue);
  if (!cs.length) continue;
  console.log(`\n### ${j.state} (${j.confidence}, verified ${j.verifiedDate})`);
  for (const c of cs) { n++; console.log(`- **${c.field || 'row'}**: ${c.issue}${c.source ? ` Source: ${c.source}` : ''}`); }
}
console.log(`\n${n} correction(s) across ${readdirSync(SRC).length} files.`);
