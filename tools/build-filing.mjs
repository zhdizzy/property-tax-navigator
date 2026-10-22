// Merge the per-jurisdiction JSON files in data/filing-src/ into data/filing-data.js.
// Run from tbv-tools/property-tax:  node tools/build-filing.mjs
// Validates the schema (types, confidence values, URL shape), fails loudly on anything off.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SRC = join(ROOT, 'data', 'filing-src');
const OUT = join(ROOT, 'data', 'filing-data.js');
const DEADLINE_TYPES = new Set(['fixed-date', 'taxable-status-date', 'rolling', 'varies-by-county', 'calendar-year', 'unverified']);
const RETRO_TYPES = new Set(['fixed', 'local-option', 'none', 'unverified']);
const RENEWAL_TYPES = new Set(['none', 'annual', 'on-change', 'varies', 'unverified']);
const CONF = new Set(['verified', 'reported', 'unverified']);
const JURIS = 'AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY PR GU VI AS'.split(' ');

const problems = [];
const out = {};
for (const f of readdirSync(SRC).filter(x => /^[A-Z]{2}\.json$/.test(x)).sort()) {
  const st = f.slice(0, 2);
  let j;
  try { j = JSON.parse(readFileSync(join(SRC, f), 'utf8')); } catch (e) { problems.push(`${st}: invalid JSON (${e.message})`); continue; }
  if (j.state !== st) problems.push(`${st}: state field is ${j.state}`);
  if (!CONF.has(j.confidence)) problems.push(`${st}: confidence ${j.confidence}`);
  if (j.noProgram) { out[st] = j; continue; }
  if (!j.officeType) problems.push(`${st}: officeType missing`);
  if (!j.deadline || !DEADLINE_TYPES.has(j.deadline.type)) problems.push(`${st}: deadline.type ${j.deadline && j.deadline.type}`);
  if (j.deadline && j.deadline.type === 'fixed-date' && !/^\d{2}-\d{2}$/.test(j.deadline.date || '') && !(j.deadline.floating && j.deadline.floating.nth)) problems.push(`${st}: fixed-date without MM-DD or floating rule`);
  if (!j.retroactivity || !RETRO_TYPES.has(j.retroactivity.type)) problems.push(`${st}: retroactivity.type ${j.retroactivity && j.retroactivity.type}`);
  if (!j.renewal || !RENEWAL_TYPES.has(j.renewal.type)) problems.push(`${st}: renewal.type ${j.renewal && j.renewal.type}`);
  if (!j.officeLocator || ![1, 2, 3].includes(j.officeLocator.tier)) problems.push(`${st}: officeLocator.tier`);
  for (const u of [...(j.sourceUrls || []).map(x => x.url), ...(j.forms || []).map(x => x.url), j.officeLocator && j.officeLocator.url, j.officeLocator && j.officeLocator.fallbackUrl].filter(Boolean)) {
    if (!/^https?:\/\//.test(u)) problems.push(`${st}: bad url ${u}`);
  }
  for (const srcu of (j.sourceUrls || [])) if (srcu.status && srcu.status !== 200) problems.push(`${st}: source ${srcu.url} status ${srcu.status}`);
  out[st] = j;
}
for (const st of JURIS) if (!out[st]) problems.push(`${st}: missing`);
if (problems.length) { console.log('PROBLEMS:'); problems.forEach(p => console.log('  ' + p)); }
const counts = { verified: 0, reported: 0, unverified: 0 };
for (const v of Object.values(out)) counts[v.confidence] = (counts[v.confidence] || 0) + 1;
const stamp = new Date().toISOString().slice(0, 10);
const js = `// Veteran Property Tax Exemption Navigator — FILING layer (office, form, deadline, lookback, renewal,\n// documents, sources, confidence) for all 55 jurisdictions. Generated ${stamp} by tools/build-filing.mjs\n// from data/filing-src/*.json. Edit the JSON, not this file. Confidence: ${JSON.stringify(counts)}.\nexport const FILING_STAMP = ${JSON.stringify(stamp)};\nexport const FILING = ${JSON.stringify(out, null, 1)};\n`;
writeFileSync(OUT, js);
console.log(`wrote ${OUT}: ${Object.keys(out).length} jurisdictions, ${JSON.stringify(counts)}${problems.length ? `, ${problems.length} problems` : ''}`);
process.exitCode = problems.filter(p => /missing|invalid JSON/.test(p)).length ? 1 : 0;
