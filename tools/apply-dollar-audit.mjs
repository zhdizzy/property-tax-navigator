// Apply the October 21, 2026 dollar-layer re-verification to state-benefits/data/normalized-data.js.
//   node tools/apply-dollar-audit.mjs            → dry run: prints every change it WOULD make
//   node tools/apply-dollar-audit.mjs --apply    → writes the file (same formatting as the generator)
// Inputs: data/audit-2026-10/XX.json (the agents' reports). Rules: only schema fields with values of the
// right type are applied automatically; prose findings are logged; a short manual table below carries
// the judgment calls (modeling choices, tier conversions, new flags). Run from tbv-tools/property-tax.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const DATA = join(ROOT, 'state-benefits/data/normalized-data.js');
const AUDIT = fileURLToPath(new URL('../data/audit-2026-10/', import.meta.url));
const APPLY = process.argv.includes('--apply');
const STAMP = '2026-10-21';

const src = readFileSync(DATA, 'utf8');
const cut = src.indexOf('const NORMALIZED_DATA = ');
const head = src.slice(0, cut);
const nd = new Function(src.slice(cut) + '; return NORMALIZED_DATA;')();

const log = [], skipped = [], manualNeeded = [];
const change = (st, prog, field, from, to, why = '') => { log.push(`${st} | ${prog} | ${field}: ${JSON.stringify(from)} -> ${JSON.stringify(to)}${why ? ' (' + why + ')' : ''}`); };

const FLAGS = new Set(['ptRequired', 'requiresSchedular100', 'wartimeRequired', 'survivingSpouse', 'nonRecurring', 'nonVeteran', 'schedularTiered']);
const NUMS = new Set(['ratingRequired', 'exemptionValue', 'fraction', 'incomeLimit', 'incomeLimitWithKids', 'incomeLimitMarried', 'minAge']);
const TEXT = /^(summary|details|name)\b/;
const TYPES = new Set(['partial', 'full', 'credit']);
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function findProg(st, name) {
  const progs = nd[st]?.propertyTax?.programs || [];
  return progs.find(p => p.name === name) || progs.find(p => p.name.toLowerCase() === String(name).toLowerCase()) || progs.find(p => p.name.toLowerCase().startsWith(String(name).toLowerCase().slice(0, 30)));
}
function setText(st, p, base, current, correct) {
  const target = p[base] || '';
  if (base === 'name') { if (correct !== p.name) { change(st, p.name, 'name', p.name, correct); p.name = correct; } return; }
  if (target.includes(correct)) return; // already applied (keeps re-runs idempotent)
  if (typeof current === 'string' && current && target.includes(current)) { const nv = target.replace(current, correct); change(st, p.name, base, '…' + current.slice(0, 50), '…' + correct.slice(0, 70)); p[base] = nv; return; }
  if (!target) { change(st, p.name, base, '', correct.slice(0, 70)); p[base] = correct; return; }
  if (target.includes(correct)) return;
  const nv = target.replace(/\s*$/, '') + (/[.!?]$/.test(target.trim()) ? ' ' : '. ') + 'Update (Oct 2026): ' + correct;
  change(st, p.name, base, '(append)', correct.slice(0, 70)); p[base] = nv;
}

// ─── 1. Field-level corrections from the reports ───────────────────────────
const NO_TYPE_CHANGE = new Set(['TN|Disabled Veteran Exemption', 'WV|Disabled Veterans Residential Property Tax Credit', 'AL|Va Grant Vehicle']);
const SKIP_FIELD = new Set(['MT|Montana Disabled Veteran Assistance Program (MDV)|details', 'NY|Alternative Veterans Property Tax Exemption|exemptionValue', 'LA|Special Assessment Level|incomeLimit']);
for (const f of readdirSync(AUDIT).filter(x => /^[A-Z]{2}\.json$/.test(x)).sort()) {
  const j = JSON.parse(readFileSync(join(AUDIT, f), 'utf8')); const st = j.state;
  if (!nd[st]) { skipped.push(`${st}: not in dataset`); continue; }
  for (const ap of j.programs || []) {
    const p = findProg(st, ap.name);
    if (!p) { skipped.push(`${st}: program not found: ${ap.name}`); continue; }
    if (ap.status === 'obsolete') { manualNeeded.push(`${st}|${p.name}: obsolete (handled in manual table?)`); }
    for (const [key, v] of Object.entries(ap.fields || {})) {
      if (!v || typeof v !== 'object' || !('correct' in v)) continue;
      const correct = v.correct, current = v.current;
      if (SKIP_FIELD.has(`${st}|${p.name}|${key}`)) { skipped.push(`${st}|${p.name}|${key}: skipped by rule`); continue; }
      const t = key.match(TEXT);
      if (t) { if (typeof correct === 'string' && correct && !/^(confirmed|same)/i.test(correct)) setText(st, p, t[1], current, correct); else skipped.push(`${st}|${p.name}|${key}: non-text correct`); continue; }
      if (key === 'type') { if (TYPES.has(correct) && correct !== p.type && !NO_TYPE_CHANGE.has(`${st}|${p.name}`)) { change(st, p.name, 'type', p.type, correct); p.type = correct; } else if (correct !== p.type) skipped.push(`${st}|${p.name}|type: "${String(correct).slice(0, 60)}" (kept ${p.type})`); continue; }
      if (FLAGS.has(key)) { if (typeof correct === 'boolean') { if (!eq(p[key], correct) && !(p[key] == null && correct === false)) { change(st, p.name, key, p[key] ?? null, correct); p[key] = correct; } } else skipped.push(`${st}|${p.name}|${key}: "${String(correct).slice(0, 70)}"`); continue; }
      if (NUMS.has(key)) { if (typeof correct === 'number' || (correct === null && key.startsWith('incomeLimit'))) { if (!eq(p[key], correct)) { change(st, p.name, key, p[key] ?? null, correct); p[key] = correct; } } else skipped.push(`${st}|${p.name}|${key}: "${String(correct).slice(0, 70)}"`); continue; }
      if (key === 'tiers') { if (Array.isArray(correct) && correct.every(x => x && typeof x.minRating === 'number')) { if (!eq(p.tiers, correct)) { change(st, p.name, 'tiers', p.tiers, correct); p.tiers = correct; } } else skipped.push(`${st}|${p.name}|tiers: "${String(correct).slice(0, 70)}"`); continue; }
      skipped.push(`${st}|${p.name}|${key}: informational`);
    }
  }
  const jn = j.jurisdictionNote;
  if (jn && jn.status === 'corrected' && typeof jn.correct === 'string' && jn.correct.length > 20 && jn.correct !== nd[st].propertyTax.note) { change(st, '(note)', 'propertyTax.note', (nd[st].propertyTax.note || '').slice(0, 50) + '…', jn.correct.slice(0, 70) + '…'); nd[st].propertyTax.note = jn.correct; }
}

// ─── 2. Manual table: modeling choices, conversions, new flags ──────────────
// New flags (both engines honor them): tdiuQualifies (TDIU counts where ptRequired), requiresTDIU (TDIU-only
// programs), noCredit (never score toward a rated veteran's home), localOption (informational).
const M = (st, name, fn) => { const p = findProg(st, name); if (!p) { skipped.push(`${st}: manual target not found: ${name}`); return; } fn(p); };
const setF = (st, p, k, v) => { if (!eq(p[k], v)) { change(st, p.name, k, p[k] ?? null, v, 'manual'); p[k] = v; } };
M('TX', 'Partial Exemption for Partially Disabled Veterans', p => { const t = p.tiers.map(x => ({ ...x })); t[t.length - 1].maxRating = 100; setF('TX', p, 'tiers', t); });
M('TX', 'Homestead Tax Exemption for 100% Disabled or Unemployable Veterans', p => { setF('TX', p, 'tdiuQualifies', true); });
M('MI', 'Disabled Veteran Exemption', p => { setF('MI', p, 'ptRequired', true); setF('MI', p, 'tdiuQualifies', true); });
M('DC', 'Homestead Exemption', p => { setF('DC', p, 'ptRequired', true); setF('DC', p, 'tdiuQualifies', true); });
M('CO', 'Homestead Exemption', p => { setF('CO', p, 'tdiuQualifies', true); });
M('CO', 'Reserve Component Deferral', p => { setF('CO', p, 'noCredit', true); });
M('NJ', 'Active Service Deferment', p => { setF('NJ', p, 'noCredit', true); });
M('NJ', 'Disabled Veterans\' Full Property Tax Exemption', p => { setF('NJ', p, 'tdiuQualifies', true); });
M('UT', 'Veteran Exemption', p => { setF('UT', p, 'tdiuQualifies', true); });
M('WV', 'Disabled Veterans Residential Property Tax Credit', p => { setF('WV', p, 'tdiuQualifies', true); });
M('WI', 'Veterans and Surviving Spouses Property Tax Credit', p => { setF('WI', p, 'tdiuQualifies', true); });
M('GU', 'Veteran Exemption', p => { setF('GU', p, 'tdiuQualifies', true); setText('GU', p, 'details', 'Guam Code 10-3-67101', '11 GCA § 24401.1 (P.L. 34-106, 2018; 10 GCA § 67101 defines surviving spouse)'); });
M('NE', 'SC Totally Disabled Veterans and Surviving Spouses — 100% Exempt', p => { setF('NE', p, 'tdiuQualifies', true); });
M('DE', 'Disabled Veterans School + County Property Tax Credit', p => { setF('DE', p, 'tdiuQualifies', true); });
M('OR', 'Reserve Component Exemption', p => { setF('OR', p, 'noCredit', true); });
M('FL', 'Deployed Military Property Tax Exemption', p => { setF('FL', p, 'noCredit', true); });
M('VT', 'Combat Zone Benefits', p => { setF('VT', p, 'noCredit', true); });
M('MA', 'Clause 22H — Total Exemption (Parents/Guardians of KIA)', p => { setF('MA', p, 'nonVeteran', true); });
// LA: the report's null incomeLimit is superseded; the cap is constitutional ($100,000, CPI-indexed from TY2026).
M('LA', 'Special Assessment Level', p => { setF('LA', p, 'incomeLimit', 100000); setText('LA', p, 'summary', '~$102,700 (2026, CPI-indexed)', '$100,000 base, CPI-indexed from TY2026 (La. Const. art. VII, §18(G))'); });
M('WA', 'Veteran Exemption', p => { setF('WA', p, 'incomeLimit', 84000); setText('WA', p, 'summary', 'King Co. ≈ $89,000', 'King Co. $84,000 for 2024-2026 taxes, $101,000 for 2027-2029 under ESSB 6162'); });
M('CT', 'Standard Disabled Veteran Exemption (CGS 12-81(20))', p => {
  setF('CT', p, 'tiers', [{ minRating: 10, maxRating: 25, value: 2857 }, { minRating: 26, maxRating: 50, value: 3571 }, { minRating: 51, maxRating: 75, value: 4286 }, { minRating: 76, maxRating: 100, value: 5000 }]);
  setF('CT', p, 'summary', 'CGS 12-81(20) as amended by PA 25-168 (Oct 1, 2025 grand list): $2,000-$3,500 of assessed value (70% ratio → ~$2,857-$5,000 market-equivalent) exempt, tiered by VA rating; the top tier also applies at age 65+. Small but applies at any rating from 10%. 100% P&T veterans take 12-81(83) instead.');
  setF('CT', p, 'details', 'Assessed-value exemption tiers: $2,000 (10-25%), $2,500 (26-50%), $3,000 (51-75%), $3,500 (76%+ or age 65+). Converted to market-equivalent at CT\'s 70% assessment ratio. Unremarried surviving spouse continues.');
});
M('MT', 'Montana Disabled Veteran Assistance Program (MDV)', p => { setF('MT', p, 'details', 'Montana Disabled Veteran Assistance Program (MDV) reduces the property tax rate on the home (and, on agricultural/forest land, the home and 1-acre homesite) by 100%, 80%, 70% or 50% depending on income tier. TY2027 (apply by April 15, 2027, using 2025 federal AGI): caps of $64,551 single, $74,482 married, $56,276 surviving spouse; the 100% reduction applies up to $49,654 / $59,584 / $41,379. Full tier table in the DOR TY2027 MDV schedule.'); });
M('PR', 'Veteran Exemption', p => { setText('PR', p, 'summary', '(append)', 'The full tier is for a "veterano incapacitado o impedido" documented by a Social Security or government retirement-system disability determination (Ley 203-2007 Art. 4 Sec. C), not by a 100% VA rating; only the $50,000 tier is keyed to VA compensation.'); });
M('RI', 'Veterans Exemption', p => { setText('RI', p, 'details', '(append)', 'The $10,000 totally-disabled tier is a local option adopted by ordinance (RIGL 44-3-4); only the $1,000 wartime exemption is statewide.'); });
M('ME', 'Veteran Property Tax Exemption', p => { setText('ME', p, 'details', '(append)', 'From tax years beginning April 1, 2027, §653 is repealed (PL 2025 c. 650 Pt. M) and replaced by §683-A: a $25,000 homestead exemption plus a rating-tiered add-on of $10,000 (60%) to $50,000 (100%) with no wartime test.'); });
M('NY', 'Alternative Veterans Property Tax Exemption', p => { setText('NY', p, 'details', '', 'RPTL 458-a: 15% of assessed value for wartime service (basic cap $12,000), +10% for combat zone (cap $8,000), + half the disability rating (cap $40,000); localities may adopt higher or lower caps. Unremarried surviving spouse continues.'); });
M('CA', 'Disabled Veterans\' Exemption', p => { setText('CA', p, 'details', '(append)', 'SB 296 (signed Sept 28, 2026) changes the exemption from the January 1, 2027 lien date: 50% of the home\'s value exempt up to $1,000,000 (100% for low-income claimants, $83,474 for 2027).'); });

// Obsolete rows
for (const [st, name] of [['TN', 'Specially Adapted Housing'], ['VA', 'Specially Adapted Housing']]) {
  const progs = nd[st].propertyTax.programs; const i = progs.findIndex(p => p.name === name);
  if (i >= 0) { change(st, name, 'ROW', 'present', 'removed', 'no statutory basis / no separate program'); progs.splice(i, 1); }
}

// ─── 3. Missing programs (survivor-only rows carry survivorOnly so neither engine credits a living veteran) ──
const ADD = {
  TX: { name: 'Surviving Spouse — Veteran Who Died of a Presumed Service-Connected Condition (Tax Code 11.136)', type: 'full', ratingRequired: null, exemptionValue: null, tiers: null, survivingSpouse: true, survivorOnly: true, summary: 'Total residence-homestead exemption for the unremarried surviving spouse of a veteran who died of a condition presumed service-connected under federal law (e.g. PACT Act), even if the veteran was not rated 100% at death. Effective Jan 1, 2026 (Prop 7, HB 2508).', details: 'Tex. Const. art. VIII, §1-b(q)-(r); Tex. Tax Code 11.136. Survivor-only.' },
  VA: { name: 'Surviving Spouse of a Service Member Killed in Action or in the Line of Duty', type: 'full', ratingRequired: null, exemptionValue: null, tiers: null, survivingSpouse: true, survivorOnly: true, summary: 'Real property tax exemption on the dwelling (up to the locality\'s average assessed value; excess taxable) for the unremarried surviving spouse of a member killed in action or who died in the line of duty.', details: 'Va. Code 58.1-3219.9 and 58.1-3219.10; Va. Const. art. X, §6-B. Survivor-only.' },
  IL: [{ name: 'World War II Veterans Full Exemption', type: 'full', ratingRequired: null, exemptionValue: null, tiers: null, survivingSpouse: false, wwiiOnly: true, noCredit: true, summary: 'For taxable years 2024 and later, the home of a veteran who served in the U.S. Armed Forces during World War II is exempt regardless of disability level; no annual reapplication.', details: '35 ILCS 200/15-169(b-4), (e). Not modeled in the dollar estimate (service-era rule, not a rating).' },
    { name: 'Surviving Spouse (DIC) $250,000 EAV Exemption', type: 'partial', ratingRequired: null, exemptionValue: 750000, tiers: null, survivingSpouse: true, survivorOnly: true, summary: 'Surviving spouse of a veteran whose death was service-connected and who receives VA Dependency and Indemnity Compensation: the first $250,000 of equalized assessed value (about $750,000 market) is exempt, even if the veteran never held the exemption.', details: '35 ILCS 200/15-169(b-3.1)(4), (c). Survivor-only; market-equivalent shown at Illinois\'s 1/3 assessment level.' }],
  IA: [{ name: 'Surviving Spouse or Child Receiving DIC — Disabled Veteran Homestead Credit', type: 'full', ratingRequired: null, exemptionValue: null, tiers: null, survivingSpouse: true, survivorOnly: true, summary: 'A surviving spouse or child receiving VA Dependency and Indemnity Compensation gets the full disabled-veteran homestead tax credit in their own right; ends when DIC ends.', details: 'Iowa Code 425.15(1)(d), (2)(b). Survivor-only.' },
    { name: 'SAH-Acquired Homestead — Disabled Veteran Credit', type: 'full', ratingRequired: null, exemptionValue: null, tiers: null, survivingSpouse: true, summary: 'A veteran who acquired the homestead with a VA Specially Adapted Housing grant (38 U.S.C. 2101-2102) gets the full homestead tax credit regardless of rating.', details: 'Iowa Code 425.15(1)(a).' }],
  MS: [{ name: 'Homestead Exemption — Total (honorably discharged veteran age 90+)', type: 'full', ratingRequired: null, exemptionValue: null, tiers: null, survivingSpouse: true, minAge: 90, summary: 'Total ad valorem exemption on the homestead for an honorably discharged veteran age 90 or older on January 1; from Jan 1, 2026 the unremarried surviving spouse also qualifies. Age-based, not rating-based.', details: '35 Miss. Admin. Code Pt. VI, Subpart 3, implementing Miss. Code Ann. §27-33-67.' },
    { name: 'Homestead Exemption — Total (surviving spouse of service member killed on active duty)', type: 'full', ratingRequired: null, exemptionValue: null, tiers: null, survivingSpouse: true, survivorOnly: true, summary: 'Total exemption for the unremarried surviving spouse of a member of the Armed Forces killed or who died on active duty (including reserve/Guard on active duty for training).', details: '35 Miss. Admin. Code Pt. VI, Subpart 3. Survivor-only.' }],
  SC: { name: 'Paraplegic / Hemiplegic Dwelling Exemption', type: 'full', ratingRequired: null, exemptionValue: null, tiers: null, survivingSpouse: true, nonVeteran: true, summary: 'Full exemption of the dwelling and up to one acre for a paraplegic or hemiplegic person (the statute includes Parkinson\'s disease, multiple sclerosis, and ALS); passes to the unremarried surviving spouse. Not veteran-specific.', details: 'S.C. Code 12-37-220(B)(2).' },
  RI: { name: 'Specially Adapted Housing Exemption', type: 'partial', ratingRequired: null, exemptionValue: 10000, tiers: null, survivingSpouse: true, summary: '$10,000 exemption (towns may set more: Cranston up to $30,000, Narragansett up to $50,000, Westerly up to $40,500) for a totally disabled veteran, or unmarried widow or widower, who received VA specially adapted housing assistance and lives in the home.', details: 'RIGL 44-3-4(b).' },
  NH: { name: 'All Veterans\' Tax Credit (RSA 72:28-b)', type: 'credit', ratingRequired: null, exemptionValue: null, tiers: null, survivingSpouse: true, localOption: true, summary: 'Local-option credit equal to the town\'s RSA 72:28 standard or optional amount for any resident veteran with 90+ days of active service (no wartime test) who is not receiving the 72:28 or 72:35 credit; spouse and surviving spouse included.', details: 'RSA 72:28-b (2016, 217:1; amended 2026, 252:7). Amount set by each adopting town, so no dollar figure is modeled.' },
  CT: { name: 'Municipal-Option TDIU Dwelling Exemption (PA 25-168 §240)', type: 'full', ratingRequired: null, exemptionValue: null, tiers: null, survivingSpouse: true, requiresTDIU: true, localOption: true, fraction: 0.75, summary: 'In towns that adopt it (effective Oct 1, 2025), a veteran rated TDIU gets the same dwelling exemption as the 12-81(83) P&T exemption, in lieu of 12-81(20); the unremarried surviving spouse continues.', details: 'PA 25-168 §240. Local option; modeled like 12-81(83) (dwelling only, ~75% of the bill) where adopted.' },
};
for (const [st, rows] of Object.entries(ADD)) for (const row of [].concat(rows)) { const progs = nd[st].propertyTax.programs; if (!progs.some(p => p.name === row.name)) { change(st, row.name, 'ROW', 'absent', 'added'); progs.push(row); } }

// ─── 4. Effective rates: one series for all 50 states + DC, shared with 100-pt / va-loan / va-affordability ──
// Those three tools already carry Census ACS 2024 1-year aggregate ratios (B25090 / B25082), computed in the August 2026
// audit from the primary tables. Best State had the older Tax Foundation (2021-data) series. Reading the fork keeps all
// four tools on one number per state. (Tax Foundation's 2024-ACS table, checked 10/21/26, sits within ~0.1-0.2 pt of these.)
const forkSrc = readFileSync(join(ROOT, '100-pt/data/state-tax-data.js'), 'utf8').replace(/^export\s+/mg, '');
const fork = new Function(forkSrc + '; return stateTaxData;')();
for (const st of Object.keys(nd)) {
  if (['PR', 'GU', 'VI', 'AS'].includes(st)) continue; // territories keep their statutory / local figures
  const v = fork[st] && typeof fork[st].avgPropertyTaxRate === 'number' ? fork[st].avgPropertyTaxRate : null;
  if (v == null) { skipped.push(`${st}: no fork rate`); continue; }
  if (nd[st].propertyTaxRate !== v) { change(st, '(rate)', 'propertyTaxRate', nd[st].propertyTaxRate, v, 'ACS 2024 1-yr, same series as 100-pt'); nd[st].propertyTaxRate = v; }
}

// ─── Output ────────────────────────────────────────────────────────────────
console.log(`--- ${log.length} changes ---`); log.forEach(l => console.log(l));
console.log(`--- ${skipped.length} skipped (informational / needs a human) ---`); skipped.forEach(l => console.log('  ' + l));
if (manualNeeded.length) { console.log('--- manual ---'); manualNeeded.forEach(l => console.log('  ' + l)); }
if (APPLY) {
  const note = `// ${STAMP}: property-tax program rows re-verified against statutes and revenue-department sources (report:\n// tbv-workspace state-benefits-dollar-audit-2026-10.md; source JSON in property-tax/data/audit-2026-10/). propertyTaxRate for the\n// 50 states + DC now equals the series the 100-pt, va-loan, and va-affordability tools use (Census ACS 2024 1-year aggregate\n// B25090 / B25082, computed Aug 2026); territories keep statutory/local figures. New row flags: tdiuQualifies, requiresTDIU,\n// noCredit, survivorOnly, localOption, wwiiOnly (honored in state-benefits/script.js calcPropertyTax and property-tax/engine.js).\n`;
  const newHead = head.includes('2026-10-21:') ? head : head.replace(/\n(?=const NORMALIZED_DATA)/, '\n' + note).replace(/(\/\/ 2026-07-30:[^\n]*\n(?:\/\/[^\n]*\n)*)/, m => m) ;
  const out = (newHead.includes(note) ? newHead : head.trimEnd() + '\n' + note + '\n') + 'const NORMALIZED_DATA = ' + JSON.stringify(nd, null, 2) + ';\n';
  writeFileSync(DATA, out); console.log('WROTE', DATA);
}
