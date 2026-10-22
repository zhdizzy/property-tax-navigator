// Veteran Property Tax Exemption Navigator — the engine. No DOM in here; shared by the page
// (script.js) and the node harness (test/engine.mjs).
//
// Two data layers come in through `ctx`:
//   ctx.states  = NORMALIZED_DATA from /state-benefits/data/normalized-data.js (the DOLLAR layer:
//                 120 property-tax programs across 55 jurisdictions, rating tiers, P&T flags)
//   ctx.filing  = FILING from ./data/filing-data.js (the FILING layer: office, form, deadline,
//                 lookback, renewal, documents, source links, confidence) — new for this tool.
// The dollar math ports calcPropertyTax() from state-benefits/script.js so the two tools never
// disagree on what an exemption is worth. The one deliberate difference: this tool reports the
// tax actually avoided, not Best State's "vs. an average state" score.

export const DATA_STAMP = 'October 22, 2026';
export const DEFAULT_RATE = 0.011; // national average effective rate, used only when a state has no rate
export const MODES = ['rated', 'home', 'never', 'spouse'];

const fmtUSD = n => '$' + Math.round(n).toLocaleString('en-US');

/* ─── Program classification (ported from Best State, widened for the modes this tool has) ─── */
export function classifyProgram(prog) {
  const n = (prog.name || '').toLowerCase();
  if (/vehicle|sales tax|va grant vehicle|va.purchased/.test(n)) return 'vehicle';
  if (/\bpows?\b|prisoner of war|medal of honor/.test(n)) return 'pow';
  if (/killed in|line of duty|died in service|kia/.test(n)) return 'kia';
  if (/surviving spouse|widow/.test(n)) return 'spouse';
  if (/sah |specially adapted|va housing assistance|parapleg|amputee/.test(n)) return 'sah';
  return 'standard';
}

export function parseTierValue(val) {
  if (typeof val === 'number') return val;
  if (typeof val !== 'string') return 0;
  if (/total|100%|full/i.test(val)) return 'full';
  const m = val.replace(/,/g, '').match(/\$?(\d+(?:\.\d+)?)/);
  return m ? parseFloat(m[1]) : 0;
}

/* ─── Eligibility for one program ─────────────────────────────────────────── */
// Returns { status: 'yes' | 'conditional' | 'no' | 'skip', reasons: [], conditions: [] }
export function programEligibility(prog, s) {
  const kind = classifyProgram(prog);
  const reasons = [], conditions = [];
  if (kind === 'vehicle' || kind === 'pow' || prog.nonVeteran || prog.noCredit || prog.wwiiOnly) return { status: 'skip', reasons: ['not a home property-tax program for a rated veteran'], conditions, kind };
  if (kind === 'kia') return { status: 'skip', reasons: ['for survivors of a service member killed in the line of duty'], conditions, kind };
  if ((kind === 'spouse' || prog.survivorOnly) && s.mode !== 'spouse') return { status: 'skip', reasons: ['surviving-spouse program'], conditions, kind: prog.survivorOnly ? 'spouse' : kind };
  if (prog.requiresTDIU && !s.isTDIU) return { status: 'skip', reasons: ['TDIU-only program'], conditions, kind };
  if (prog.localOption) conditions.push('local option: only where your town or county has adopted it');
  if (kind === 'sah' && !s.sah) return { status: 'skip', reasons: ['requires a VA Specially Adapted Housing grant or a qualifying loss of use'], conditions, kind };
  if (s.mode === 'spouse' && kind === 'standard' && !prog.survivingSpouse) reasons.push('this program does not carry over to a surviving spouse');
  if (prog.ratingRequired != null) {
    if (s.rating == null) conditions.push(`needs a rating of ${prog.ratingRequired}% or more`);
    else if (s.rating < prog.ratingRequired) reasons.push(`requires a ${prog.ratingRequired}% rating; you entered ${s.rating}%`);
  }
  if (prog.ptRequired && !s.isPT && !(prog.tdiuQualifies && s.isTDIU)) reasons.push(prog.tdiuQualifies ? 'requires a Permanent & Total rating or a TDIU award, not a plain 100%' : 'requires a Permanent & Total rating, not a plain 100%');
  if (prog.requiresSchedular100 && s.isTDIU) reasons.push('requires a 100% combined schedular rating; TDIU is paid at 100% but rated below it');
  if (prog.wartimeRequired) { if (s.wartime === false) reasons.push('requires wartime-era service'); else if (s.wartime == null) conditions.push('requires wartime-era service'); }
  if (prog.minAge) { if (s.age != null && s.age < prog.minAge) reasons.push(`requires age ${prog.minAge}+`); else if (s.age == null) conditions.push(`requires age ${prog.minAge}+`); }
  if (prog.incomeLimit) {
    const lim = (prog.incomeLimitWithKids && s.hasChildren) ? prog.incomeLimitWithKids : prog.incomeLimit;
    if (s.income != null && s.income > lim) reasons.push(`household income limit ${fmtUSD(lim)}`);
    else if (s.income == null) conditions.push(`household income limit ${fmtUSD(lim)}`);
  }
  if (prog.nonRecurring) conditions.push('one-time or temporary, not an annual exemption');
  const status = reasons.length ? 'no' : conditions.length ? 'conditional' : 'yes';
  return { status, reasons, conditions, kind };
}

/* ─── Dollar value of one program for this household ──────────────────────── */
export function programSavings(prog, s, rate) {
  const homeValue = s.homeValue || 0;
  if (!homeValue) return 0;
  if (prog.type === 'full') return homeValue * rate * (prog.fraction || 1);
  if (prog.type === 'credit') return prog.exemptionValue || 0;
  if (prog.tiers && prog.tiers.length) {
    const r = s.rating == null ? 0 : (s.isTDIU && prog.schedularTiered ? Math.min(s.rating, 99) : s.rating);
    const tier = prog.tiers.filter(t => r >= t.minRating && r <= t.maxRating)
      .sort((a, b) => { const av = parseTierValue(a.value), bv = parseTierValue(b.value); if (bv === 'full') return 1; if (av === 'full') return -1; return (bv || 0) - (av || 0); })[0];
    if (!tier) return 0;
    if (tier.fraction) return homeValue * rate * tier.fraction;
    const v = parseTierValue(tier.value);
    if (v === 'full') return homeValue * rate;
    return v > 0 ? Math.min(v, homeValue) * rate : 0;
  }
  if (prog.exemptionValue) return Math.min(prog.exemptionValue, homeValue) * rate;
  return 0;
}

// What the program IS, for card copy: an assessed-value reduction, a credit off the bill, or a
// credit claimed on the state income-tax return (WV, WI). The filing layer can override.
export function programKind(prog, filing) {
  if (filing && filing.kind) return filing.kind;
  if (prog.type === 'credit') return 'credit';
  const n = (prog.name || '') + ' ' + (prog.summary || '');
  if (/income tax return|tax credit on your/i.test(n)) return 'income-tax-credit';
  if (/\bcredit\b/i.test(prog.name || '')) return 'credit';
  return 'assessment';
}

/* ─── Deadlines ───────────────────────────────────────────────────────────── */
// Next occurrence of an MM-DD date from `today`; returns { date, daysLeft, passedThisYear }
export function nextDate(mmdd, today = new Date()) {
  if (!mmdd || !/^\d{2}-\d{2}$/.test(mmdd)) return null;
  const [mm, dd] = mmdd.split('-').map(Number);
  const y = today.getFullYear();
  let d = new Date(y, mm - 1, dd);
  const passedThisYear = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (passedThisYear) d = new Date(y + 1, mm - 1, dd);
  const daysLeft = Math.round((d - new Date(today.getFullYear(), today.getMonth(), today.getDate())) / 86400000);
  return { date: d, daysLeft, passedThisYear };
}
const longDate = d => d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

// Floating dates like "the fourth Monday in May" (WY): { nth, weekday (0=Sun), month (1-12) }
export function floatingDate(rule, year) {
  if (!rule || !rule.nth || rule.weekday == null || !rule.month) return null;
  const first = new Date(year, rule.month - 1, 1);
  const offset = (rule.weekday - first.getDay() + 7) % 7;
  return new Date(year, rule.month - 1, 1 + offset + (rule.nth - 1) * 7);
}
export function nextFloating(rule, today = new Date()) {
  const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let d = floatingDate(rule, today.getFullYear()); if (!d) return null;
  const passedThisYear = d < t0;
  if (passedThisYear) d = floatingDate(rule, today.getFullYear() + 1);
  return { date: d, daysLeft: Math.round((d - t0) / 86400000), passedThisYear };
}
export function deadlineStatus(filing, today = new Date()) {
  const d = filing && filing.deadline;
  if (!d || !d.type || d.type === 'unverified') return { type: 'unverified', headline: 'Deadline not yet verified for this jurisdiction', text: (d && d.text) || 'Ask the assessing office for the filing deadline in writing; most states have one, and missing it usually costs a full year.', urgent: false };
  switch (d.type) {
    case 'fixed-date': {
      const n = d.floating ? nextFloating(d.floating, today) : nextDate(d.date, today);
      if (!n) return { type: d.type, headline: d.text, text: '', urgent: false };
      const headline = `${longDate(n.date)}: ${n.daysLeft} day${n.daysLeft === 1 ? '' : 's'} away`;
      const text = (n.passedThisYear ? `This year's filing date has passed. ` : '') + (d.text || '');
      return { type: d.type, headline, text, date: n.date, daysLeft: n.daysLeft, passedThisYear: n.passedThisYear, urgent: n.daysLeft <= 60 };
    }
    case 'taxable-status-date': return { type: d.type, headline: 'Your town sets the date (the "taxable status date")', text: d.text || '', urgent: true };
    case 'rolling': return { type: d.type, headline: 'No annual deadline: the clock runs from the day you file', text: d.text || '', urgent: true };
    case 'varies-by-county': return { type: d.type, headline: 'Set by your county', text: d.text || '', urgent: true };
    case 'calendar-year': { const date = new Date(today.getFullYear(), 11, 31); return { type: d.type, headline: `By December 31, ${today.getFullYear()} for this year's relief`, text: d.text || '', date, daysLeft: Math.round((date - today) / 86400000), urgent: (date - today) / 86400000 <= 60 }; }
    default: return { type: d.type, headline: d.text || 'See the filing office', text: '', urgent: false };
  }
}

/* ─── Office locator ──────────────────────────────────────────────────────── */
export function slugify(name, rule) {
  const base = String(name || '').replace(/\s+(county|parish|borough|municipio|census area|city and borough|municipality)$/i, '').trim();
  switch (rule) {
    case 'lower-nospace': return base.toLowerCase().replace(/[^a-z0-9]/g, '');
    case 'lower-underscore': return base.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    case 'as-is': return base;
    case 'lower-hyphen': default: return base.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
}
// Third-party national index (NETR Online), verified live 2026-10-21; shown only below tier-2/3 links
// and always labeled third-party. PropertyTax101 was NOT reachable on the check date and is not linked.
export const NATIONAL_INDEX = { label: 'NETR Online county directory (third-party)', pattern: 'https://publicrecords.netronline.com/state/{ST}' };
export function resolveLocator(filing, county, stateAbbr) {
  const loc = (filing && filing.officeLocator) || {};
  const officeType = (filing && filing.officeType) || 'local assessor';
  const out = { tier: loc.tier || 3, officeType, links: [] };
  const st = stateAbbr || (filing && filing.state) || null;
  if (loc.tier === 1 && loc.url) {
    let url = loc.url;
    if (county && loc.countyUrlPattern) url = loc.countyUrlPattern.replace('{county}', slugify(county.name, loc.slugRule));
    out.links.push({ kind: 'official', label: loc.label || 'Official office directory', url, county: !!(county && loc.countyUrlPattern) });
  }
  if (county) {
    const q = `${county.name} ${officeType}`;
    out.links.push({ kind: 'map', label: `Map search: ${q}`, url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}` });
  }
  if (loc.fallbackUrl && !(loc.tier === 1 && loc.url === loc.fallbackUrl)) out.links.push({ kind: 'state', label: loc.fallbackLabel || 'State property-tax page', url: loc.fallbackUrl });
  if (loc.tier !== 1 && loc.url) out.links.push({ kind: 'state', label: loc.label || 'State page', url: loc.url });
  if (loc.tier !== 1 && st && !(filing && filing.noProgram) && st !== 'AS') out.links.push({ kind: 'index', label: NATIONAL_INDEX.label, url: NATIONAL_INDEX.pattern.replace('{ST}', st) });
  return out;
}

/* ─── Missed years ────────────────────────────────────────────────────────── */
export function lookback(filing, s, savings, today = new Date()) {
  const r = (filing && filing.retroactivity) || { type: 'unverified' };
  const y = today.getFullYear();
  const since = s.ratingYear ? Math.max(0, y - Math.max(s.ratingYear, s.titleYear || s.ratingYear)) : null;
  const out = { type: r.type || 'unverified', text: r.text || '', years: r.years || null, since, estimate: null, estimateYears: null };
  if (r.type === 'fixed' && r.years && since != null && savings > 0) {
    out.estimateYears = Math.min(r.years, since);
    out.estimate = out.estimateYears * savings;
  }
  return out;
}

/* ─── Main solve ──────────────────────────────────────────────────────────── */
export function solve(s, ctx) {
  const today = ctx.today || new Date();
  const stateRec = ctx.states[s.state] || null;
  const filing = (ctx.filing && ctx.filing[s.state]) || null;
  const rate = (stateRec && stateRec.propertyTaxRate) || DEFAULT_RATE;
  const programs = ((stateRec && stateRec.propertyTax && stateRec.propertyTax.programs) || []).map(prog => {
    const e = programEligibility(prog, s);
    const savings = e.status === 'skip' || e.status === 'no' ? 0 : programSavings(prog, s, rate);
    const forms = filing ? (filing.forms || []).filter(f => f.programRef === '*' || (f.programRef && prog.name && prog.name.toLowerCase().includes(f.programRef.toLowerCase()))) : [];
    return { prog, ...e, savings, kind: programKind(prog, filing), forms };
  });
  const eligible = programs.filter(p => p.status === 'yes' || p.status === 'conditional');
  const ranked = [...eligible].sort((a, b) => (a.status === 'yes' ? 0 : 1) - (b.status === 'yes' ? 0 : 1) || b.savings - a.savings || (b.prog.type === 'full' ? 1 : 0) - (a.prog.type === 'full' ? 1 : 0));
  const best = ranked[0] || null;
  const savings = best ? best.savings : 0;
  const fullBill = (s.homeValue || 0) * rate;
  const noProgram = !!(filing && filing.noProgram) || !programs.length;
  // "What 100% P&T would unlock" for sub-100 users (the funnel working in reverse)
  let ptUpside = null;
  if (!noProgram && (s.rating == null || s.rating < 100 || !s.isPT)) {
    const s2 = { ...s, rating: 100, isPT: true, isTDIU: false };
    const alt = programs.map(p => ({ e: programEligibility(p.prog, s2), v: programSavings(p.prog, s2, rate), prog: p.prog })).filter(x => x.e.status !== 'skip' && x.e.status !== 'no').sort((a, b) => b.v - a.v)[0];
    if (alt && alt.v > savings + 1) ptUpside = { savings: alt.v, program: alt.prog.name };
  }
  const deadline = deadlineStatus(filing, today);
  const locator = resolveLocator(filing, s.county, s.state);
  const lb = lookback(filing, s, savings, today);
  const confidence = filing ? (filing.confidence || 'unverified') : 'unverified';
  const documents = (filing && filing.documents && filing.documents.length) ? filing.documents : ctx.defaultDocuments || [];
  // Local office details where we hold a snapshot (Texas: the Comptroller's per-county directory, keyed by county FIPS).
  const localOffice = (s.state === 'TX' && s.county && ctx.txOffices && ctx.txOffices[s.county.fips]) ? { source: 'Texas Comptroller county directory', stamp: ctx.txOfficesStamp || null, ...ctx.txOffices[s.county.fips] } : null;
  return { s, stateRec, filing, rate, programs, eligible, ranked, best, savings, tenYear: savings * 10, fullBill, noProgram, ptUpside, deadline, locator, lookback: lb, confidence, documents, localOffice, today };
}

/* ─── Calendar file for the deadline (RFC 5545; all-day event with 30-day and 7-day reminders) ─── */
const pad2 = n => String(n).padStart(2, '0');
const icsDate = d => `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}`;
const icsText = s => String(s || '').replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
const fold = line => { const out = []; let s = line; while (s.length > 73) { out.push(s.slice(0, 73)); s = ' ' + s.slice(73); } out.push(s); return out.join('\r\n'); };
export function buildIcs(r, shareUrl = '') {
  const s = r.s, st = r.stateRec, f = r.filing || {}, dl = r.deadline;
  const stateName = st ? st.name : s.state;
  const office = `${f.officeType || 'local assessing office'}${s.county ? ' (' + s.county.name + ')' : ''}`;
  const hasDate = !!dl.date;
  const when = hasDate ? new Date(dl.date) : new Date(r.today.getFullYear(), r.today.getMonth(), r.today.getDate() + 14);
  const end = new Date(when); end.setDate(end.getDate() + 1);
  const summary = hasDate ? `Property tax exemption deadline (${stateName}): file with the ${f.officeType || 'assessing office'}`
    : dl.type === 'rolling' ? `File your property tax exemption with the ${f.officeType || 'assessing office'} (${stateName}): no fixed deadline, it starts when you file`
    : `Confirm property tax exemption deadline with the ${f.officeType || 'assessing office'} (${stateName})`;
  const form = (r.best && r.best.forms[0]) || (f.forms || [])[0];
  const lines = [
    `What: ${r.best ? r.best.prog.name : 'disabled veteran property tax exemption'}`,
    `Where: ${office}`,
    form ? `Form: ${form.name || 'application'}${form.number ? ' (' + form.number + ')' : ''}${form.url ? ' ' + form.url : ''}` : 'Form: ask the office for the disabled-veteran exemption application',
    hasDate ? `Deadline: ${dl.headline}. ${dl.text || ''}` : `Deadline rule: ${dl.headline}. ${dl.text || ''}`,
    f.renewal && f.renewal.text ? `Renewal: ${f.renewal.text}` : '',
    shareUrl ? `Your filing plan: ${shareUrl}` : '',
    'Built with the Veteran Property Tax Exemption Navigator, tools.thebetterveteran.com/property-tax/. Confirm the date with the office; it recurs every year.',
  ].filter(Boolean).join('\n');
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
  const uid = `ptx-${s.state}-${icsDate(when)}-${Math.random().toString(36).slice(2, 8)}@tools.thebetterveteran.com`;
  const ev = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//The Better Veteran//Property Tax Exemption Navigator//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
    'BEGIN:VEVENT', `UID:${uid}`, `DTSTAMP:${stamp}`, `DTSTART;VALUE=DATE:${icsDate(when)}`, `DTEND;VALUE=DATE:${icsDate(end)}`,
    fold(`SUMMARY:${icsText(summary)}`), fold(`DESCRIPTION:${icsText(lines)}`), fold(`LOCATION:${icsText(office)}`),
    ...(hasDate ? ['BEGIN:VALARM', 'TRIGGER:-P30D', 'ACTION:DISPLAY', fold(`DESCRIPTION:${icsText('30 days to your property tax exemption deadline: ' + office)}`), 'END:VALARM'] : []),
    'BEGIN:VALARM', 'TRIGGER:-P7D', 'ACTION:DISPLAY', fold(`DESCRIPTION:${icsText('One week: ' + summary)}`), 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ];
  return { text: ev.join('\r\n') + '\r\n', date: when, hasDate, filename: `property-tax-exemption-deadline-${s.state}.ics` };
}

/* ─── The filing checklist (the take-artifact; shape matches docx.js) ─────── */
const T = t => ({ t }), B = b => ({ b });
export function buildChecklist(r) {
  const s = r.s, st = r.stateRec, f = r.filing || {};
  const stateName = st ? st.name : s.state;
  const county = s.county ? s.county.name : null;
  const bestName = r.best ? r.best.prog.name : 'the disabled-veteran property tax exemption';
  const header = [
    [T('PROPERTY TAX EXEMPTION FILING CHECKLIST')],
    [T(`${stateName}${county ? ', ' + county : ''}`)],
    [T(`Prepared ${longDate(r.today)} with the Veteran Property Tax Exemption Navigator, tools.thebetterveteran.com/property-tax/`)],
  ];
  const howTo = [
    'Everything in [brackets] is something only you can fill in. Confirm the deadline and the form with the office before you rely on either; forms get new revision dates and local offices set their own rules.',
    'Bring copies, keep the originals. Ask for a stamped or emailed receipt showing the date your application was received.',
  ];
  const sections = [];
  const n = () => sections.length + 1;
  // 1 Program
  const value = r.savings > 0 ? `${fmtUSD(r.savings)} a year on a ${fmtUSD(s.homeValue)} home (estimate; the bill uses your assessed value and local rate)` : 'depends on your assessed value and local rate';
  sections.push({ n: n(), title: 'What you are claiming', blocks: [{ type: 'p', items: [[T(`${bestName}. Estimated value: ${value}.`)]] }, ...(r.best && r.best.conditions.length ? [{ type: 'ul', items: r.best.conditions.map(c => [T('Confirm: ' + c)]) }] : [])] });
  // 2 Where
  const whereItems = [[T(`Office: ${f.officeType || 'the local assessing office'}${county ? ' for ' + county : ''}.`)]];
  if (r.localOffice && r.localOffice.cad) {
    const o = r.localOffice.cad;
    whereItems.push([T(`${county} Appraisal District${o.person ? ' (Chief Appraiser ' + o.person + ')' : ''}: ${[o.street && 'street ' + o.street.replace(/\n/g, ', '), o.mailing && 'mail ' + o.mailing.replace(/\n/g, ', '), o.phone && 'phone ' + o.phone, o.email && 'email ' + o.email, o.website && o.website].filter(Boolean).join('; ')}.`)]);
    whereItems.push([T(`Not the tax assessor-collector${r.localOffice.tac && r.localOffice.tac.phone ? ' (' + r.localOffice.tac.phone + ')' : ''}: that office registers vehicles and collects the bill; exemption applications go to the appraisal district.`)]);
  }
  if (f.officeTypeNote) whereItems.push([T(f.officeTypeNote)]);
  for (const l of r.locator.links) whereItems.push([T(`${l.label}: ${l.url}`)]);
  if (!county) whereItems.push([T('County or town: '), B('your county or municipality')]);
  sections.push({ n: n(), title: 'Where to file', blocks: [{ type: 'ul', items: whereItems }] });
  // 3 Form
  const forms = r.best && r.best.forms.length ? r.best.forms : (f.forms || []);
  sections.push({ n: n(), title: 'The form', blocks: [{ type: 'ul', items: forms.length ? forms.map(fm => [T(`${fm.name || 'Application'}${fm.number ? ' (' + fm.number + ')' : ''}${fm.revision ? ', rev. ' + fm.revision : ''}${fm.url ? ': ' + fm.url : ''}`)]) : [[T('Form not yet verified for this jurisdiction. Ask the office: '), B('form name and number')]] }, ...(f.onlineFiling && f.onlineFiling.text ? [{ type: 'p', items: [[T(f.onlineFiling.text)]] }] : [])] });
  // 4 Deadline
  const dl = [[T(`${r.deadline.headline}.`)]];
  if (r.deadline.text) dl.push([T(r.deadline.text)]);
  const tidy = s => String(s || '').trim().replace(/\.+$/, '');
  if (f.effective) dl.push([T(`When it takes effect: ${tidy(f.effective)}.`)]);
  if (f.lateFiling && f.lateFiling !== 'n/a') dl.push([T(`If you are late: ${tidy(f.lateFiling)}.`)]);
  sections.push({ n: n(), title: 'Your deadline', blocks: [{ type: 'ul', items: dl }] });
  // 5 Documents
  sections.push({ n: n(), title: 'Attach', blocks: [{ type: 'ul', items: r.documents.map(d => [T('☐ ' + d)]) }] });
  // 6 Missed years
  if (s.mode === 'never' || r.lookback.type !== 'none') {
    const items = [[T(r.lookback.text || 'Ask the office, in writing, whether prior years can be refunded and under which section of the law.')]];
    if (r.lookback.estimate) items.push([T(`Estimate for ${r.lookback.estimateYears} missed year${r.lookback.estimateYears === 1 ? '' : 's'}: about ${fmtUSD(r.lookback.estimate)}. The office computes the real figure from your assessed values.`)]);
    items.push([T('Ask in writing: "I was rated '), B('rating'), T(' effective '), B('month/year'), T(' and have owned and occupied this home since '), B('month/year'), T('. Please tell me which prior tax years can be refunded under '), B('the statute the office cites'), T(' and what you need from me."')]);
    sections.push({ n: n(), title: 'Missed years', blocks: [{ type: 'ul', items }] });
  }
  // 7 Keep it
  const keep = [];
  if (f.renewal && f.renewal.text) keep.push([T(`Renewal: ${f.renewal.text}`)]);
  if (f.ratingChange) keep.push([T(`If your rating changes: ${f.ratingChange}`)]);
  if (f.move) keep.push([T(`If you move: ${f.move}`)]);
  if (f.survivingSpouse) keep.push([T(`Surviving spouse: ${f.survivingSpouse}`)]);
  if (!keep.length) keep.push([T('Ask the office whether the exemption renews automatically or needs an annual form, and what to do if your rating changes or you move.')]);
  sections.push({ n: n(), title: 'Keeping it', blocks: [{ type: 'ul', items: keep }] });
  // 8 Follow up
  sections.push({ n: n(), title: 'Follow up', blocks: [{ type: 'ul', items: [[T('Date filed: '), B('date')], [T('Receipt or confirmation number: '), B('number')], [T('Check the next tax bill shows the exemption. If it does not, call the office before the appeal deadline'), T(f.appeal ? `: ${f.appeal}` : '.')]] }] });
  const closing = [[T(`Sources: ${(f.sourceUrls || []).filter(x => x.primary).map(x => x.url).join('  ') || 'see the tool page'}`)], [T(`Data verified ${f.verifiedDate || DATA_STAMP}. Confidence for this jurisdiction: ${r.confidence}. Educational, not legal or tax advice.`)]];
  return { header, howTo, sections, closing, title: 'Property Tax Exemption Filing Checklist' };
}
export function countBrackets(doc) { let n = 0; const walk = parts => parts.forEach(p => { if (p.b) n++; }); doc.header.forEach(walk); doc.sections.forEach(sec => sec.blocks.forEach(b => b.items.forEach(walk))); doc.closing.forEach(walk); return n; }
export function checklistToText(doc) {
  const line = parts => parts.map(p => p.b ? `[${p.b}]` : p.t).join('');
  const out = [...doc.header.map(line), '', 'HOW TO USE THIS CHECKLIST', ...doc.howTo.map(h => '- ' + h), ''];
  for (const sec of doc.sections) { out.push(`${sec.n}. ${sec.title.toUpperCase()}`); for (const b of sec.blocks) b.items.forEach((it, i) => out.push((b.type === 'p' ? '' : b.type === 'ol' ? `${i + 1}. ` : '- ') + line(it))); out.push(''); }
  out.push(...doc.closing.map(line));
  return out.join('\n');
}
export function checklistToHtml(doc, esc) {
  const line = parts => parts.map(p => p.b ? `<mark class="br">[${esc(p.b)}]</mark>` : esc(p.t)).join('');
  let h = doc.header.map((l, i) => `<p class="lh${i < 2 ? ' lh-title' : ''}">${line(l)}</p>`).join('');
  h += `<div class="l-howto"><p class="l-howto-t">How to use this checklist</p><ul>${doc.howTo.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`;
  for (const sec of doc.sections) {
    h += `<h4>${sec.n}. ${esc(sec.title)}</h4>`;
    for (const b of sec.blocks) h += b.type === 'p' ? `<p>${line(b.items[0])}</p>` : `<${b.type}>${b.items.map(it => `<li>${line(it)}</li>`).join('')}</${b.type}>`;
  }
  h += doc.closing.map(l => `<p class="l-close">${line(l)}</p>`).join('');
  return h;
}
