// Veteran Property Tax Exemption Navigator — node harness. Run from tbv-tools/property-tax:
//   node test/engine.mjs
// Loads the Best State dataset the way the browser does (classic script → global), then runs every
// jurisdiction × a grid of ratings/modes through solve() and buildChecklist(), asserting no NaN or
// undefined leaks into any output, a few named cases come out right, and the docx builds.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { solve, buildChecklist, checklistToText, checklistToHtml, countBrackets, nextDate, slugify, programEligibility } from '../engine.js';
import { FILING } from '../data/filing-data.js';
import { DEFAULT_DOCUMENTS } from '../data/copy.js';
import { buildDocxBytes } from '../docx.js';

const nd = readFileSync(fileURLToPath(new URL('../../state-benefits/data/normalized-data.js', import.meta.url)), 'utf8');
const sandbox = {}; vm.createContext(sandbox); vm.runInContext(nd + '\nthis.__ND = NORMALIZED_DATA;', sandbox);
const STATES = sandbox.__ND;
const CTX = { states: STATES, filing: FILING, defaultDocuments: DEFAULT_DOCUMENTS, today: new Date(2026, 9, 22) };
const esc = s => String(s ?? '');

let fails = 0, checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) { fails++; console.log('FAIL', msg); } };
const clean = (str, label) => { ok(!/undefined|NaN|\[object Object\]|\$NaN/.test(str), `${label}: leaked undefined/NaN`); };

const mk = o => ({ mode: 'rated', state: 'TX', ratingRaw: '100', rating: 100, unrated: false, isPT: true, isTDIU: false, homeValue: 350000, owns: 'yes', zip: null, county: null, ratingYear: 2021, titleYear: 2018, age: null, income: null, wartime: null, sah: false, remarried: false, dic: null, docs: [], ...o });

// Grid: every jurisdiction × ratings × modes
const RATINGS = [{ ratingRaw: 'unrated', rating: null, unrated: true, isPT: false }, { ratingRaw: '0', rating: 0, isPT: false }, { ratingRaw: '30', rating: 30, isPT: false }, { ratingRaw: '70', rating: 70, isPT: false }, { ratingRaw: '100', rating: 100, isPT: false }, { ratingRaw: '100', rating: 100, isPT: true }, { ratingRaw: '90', rating: 90, isPT: false, isTDIU: true }];
for (const st of Object.keys(STATES)) {
  for (const r of RATINGS) for (const mode of ['rated', 'home', 'never', 'spouse']) {
    const s = mk({ state: st, mode, ...r, county: st === 'TX' ? { fips: '48453', name: 'Travis County', state: 'TX' } : null });
    const res = solve(s, CTX);
    ok(Number.isFinite(res.savings) && res.savings >= 0, `${st} ${mode} ${r.ratingRaw}: savings finite`);
    ok(res.savings <= res.fullBill + 0.01 || res.best?.kind === 'credit' || res.best?.prog.type === 'credit', `${st} ${mode} ${r.ratingRaw}: savings ≤ full bill`);
    if (r.unrated) ok(!res.best || res.best.status !== 'yes' || res.best.prog.ratingRequired == null, `${st}: unrated never fully qualifies for a rated program`);
    const doc = buildChecklist(res);
    const txt = checklistToText(doc), html = checklistToHtml(doc, esc);
    clean(txt, `${st} ${mode} ${r.ratingRaw} checklist text`); clean(html, `${st} ${mode} ${r.ratingRaw} checklist html`);
    ok(countBrackets(doc) >= 0, 'brackets count');
  }
}
// docx builds and starts with the ZIP local-header signature, [Content_Types].xml first
{ const bytes = buildDocxBytes(buildChecklist(solve(mk({}), CTX))); ok(bytes[0] === 0x50 && bytes[1] === 0x4b, 'docx: zip signature'); ok(new TextDecoder().decode(bytes.slice(30, 49)) === '[Content_Types].xml', 'docx: content types first'); }

// Named cases
{
  const tx = solve(mk({}), CTX);
  ok(tx.best && tx.best.prog.type === 'full' && Math.abs(tx.savings - 350000 * STATES.TX.propertyTaxRate) < 1, `TX 100% P&T: full exemption ${tx.savings}`);
  const tx70 = solve(mk({ rating: 70, ratingRaw: '70', isPT: false }), CTX);
  ok(tx70.best && tx70.best.prog.type === 'partial' && tx70.savings > 0 && tx70.savings < tx.savings, `TX 70%: partial tier ${tx70.savings}`);
  ok(tx70.ptUpside && tx70.ptUpside.savings > tx70.savings, 'TX 70%: P&T upside shown');
  const ct100 = solve(mk({ state: 'CT', isPT: false }), CTX);
  const ctPT = solve(mk({ state: 'CT', isPT: true }), CTX);
  ok(ctPT.savings >= ct100.savings, 'CT: P&T ≥ plain 100%');
  const as = solve(mk({ state: 'AS' }), CTX);
  ok(as.noProgram === true, 'AS: no program');
  const pr0 = solve(mk({ state: 'PR', rating: 0, ratingRaw: '0', isPT: false }), CTX);
  ok(pr0.best && pr0.savings > 0, `PR 0%: any-veteran tier ${pr0.savings}`);
  const renter = solve(mk({ owns: 'renting' }), CTX);
  ok(Number.isFinite(renter.savings), 'renter: still computes');
  const spouse = solve(mk({ mode: 'spouse' }), CTX);
  ok(spouse.programs.some(p => p.kind === 'spouse' || p.prog.survivingSpouse), 'TX spouse mode: a program carries over');
  const wv = solve(mk({ state: 'WV' }), CTX);
  ok(wv.best ? ['assessment', 'credit', 'income-tax-credit'].includes(wv.best.kind) : true, 'WV: kind resolved');
}
// Deadline math
{
  const n = nextDate('03-01', new Date(2026, 9, 22)); ok(n && n.date.getFullYear() === 2027 && n.date.getMonth() === 2 && n.passedThisYear, 'nextDate rolls to next year');
  const n2 = nextDate('12-31', new Date(2026, 9, 22)); ok(n2 && n2.date.getFullYear() === 2026 && !n2.passedThisYear && n2.daysLeft === 70, `nextDate same year (${n2 && n2.daysLeft})`);
  ok(nextDate('bad') === null, 'nextDate rejects garbage');
}
// Slugs
ok(slugify('Fort Bend County', 'lower-hyphen') === 'fort-bend', 'slug hyphen'); ok(slugify('Fort Bend County', 'lower-nospace') === 'fortbend', 'slug nospace'); ok(slugify('San Juan Municipio', 'lower-hyphen') === 'san-juan', 'slug municipio');
// Eligibility gates
{
  const prog = { name: 'Test', type: 'full', ratingRequired: 100, ptRequired: true, incomeLimit: 50000 };
  ok(programEligibility(prog, mk({ isPT: false })).status === 'no', 'ptRequired blocks plain 100%');
  ok(programEligibility(prog, mk({})).status === 'conditional', 'income null → conditional');
  ok(programEligibility(prog, mk({ income: 60000 })).status === 'no', 'income over limit → no');
  ok(programEligibility({ name: 'Vehicle tax exemption', type: 'partial' }, mk({})).status === 'skip', 'vehicle skipped');
  ok(programEligibility({ name: 'Surviving Spouse of SM Killed in Line of Duty', type: 'full' }, mk({ mode: 'spouse' })).status === 'skip', 'KIA program skipped even in spouse mode');
}
// Filing layer coverage report
{
  const juris = Object.keys(STATES); const have = juris.filter(j => FILING[j]);
  const conf = { verified: 0, reported: 0, unverified: 0 }; have.forEach(j => conf[FILING[j].confidence] = (conf[FILING[j].confidence] || 0) + 1);
  console.log(`filing layer: ${have.length}/${juris.length} jurisdictions, ${JSON.stringify(conf)}; missing: ${juris.filter(j => !FILING[j]).join(' ') || 'none'}`);
}
console.log(`${checks} checks, ${fails} failures`);
process.exitCode = fails ? 1 : 0;
