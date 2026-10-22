// Veteran Property Tax Exemption Navigator — UI wiring on the house template (forked from
// vre-approval-prep 10/21/26). Dollar data is the Best State dataset loaded as a classic script
// (NORMALIZED_DATA, a global lexical binding); the filing layer is this tool's own module.
import { FILING, FILING_STAMP } from './data/filing-data.js';
import { MODE_BRIEF, BTN_TEXT, OFFICE_EXPLAIN, DEFAULT_DOCUMENTS, KIND_LABEL, CONFIDENCE, ASK_SCRIPTS, ONE_ON_ONE, FAQ } from './data/copy.js';
import { solve, buildChecklist, countBrackets, checklistToText, checklistToHtml, buildIcs, DATA_STAMP, MODES } from './engine.js';
import { buildDocxBytes, DOCX_MIME } from './docx.js';

/* global NORMALIZED_DATA */
const STATES = typeof NORMALIZED_DATA !== 'undefined' ? NORMALIZED_DATA : {};
const $ = id => document.getElementById(id);
const fmtUSD = n => '$' + Math.round(n).toLocaleString('en-US');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const SOURCE = 'property-tax';
const FIPS_STATE = { '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA', '08': 'CO', '09': 'CT', '10': 'DE', '11': 'DC', '12': 'FL', '13': 'GA', '15': 'HI', '16': 'ID', '17': 'IL', '18': 'IN', '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME', '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS', '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH', '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND', '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI', '45': 'SC', '46': 'SD', '47': 'TN', '48': 'TX', '49': 'UT', '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV', '55': 'WI', '56': 'WY', '60': 'AS', '66': 'GU', '72': 'PR', '78': 'VI' };

const state = { mode: 'rated', revealed: false, last: null, docs: new Set(), steps: new Set(), counties: [], county: null };
$('data-stamp').textContent = `${DATA_STAMP} (filing layer ${FILING_STAMP})`;
$('data-stamp-2').textContent = `${DATA_STAMP} (filing layer ${FILING_STAMP})`;

/* ─── Elements ─────────────────────────────────────────────────────────── */
const stateEl = $('state'), ratingEl = $('rating'), ptEl = $('is-pt'), tdiuEl = $('is-tdiu'), valueEl = $('home-value'), ownsEl = $('owns'), zipEl = $('zip'), countyEl = $('county');
const ratingYearEl = $('rating-year'), titleYearEl = $('title-year'), ageEl = $('age'), incomeEl = $('income'), wartimeEl = $('wartime'), sahEl = $('sah'), remarriedEl = $('remarried'), dicEl = $('dic');

// State select from the dataset itself (no typos): states, then DC, then the territories.
{
  const entries = Object.values(STATES).map(s => ({ ab: s.abbreviation, name: s.name, terr: !!s.isTerritory, dc: s.abbreviation === 'DC' }));
  const sortName = (a, b) => a.name.localeCompare(b.name);
  const groups = [['States', entries.filter(e => !e.terr && !e.dc).sort(sortName)], ['District', entries.filter(e => e.dc)], ['Territories', entries.filter(e => e.terr).sort(sortName)]];
  stateEl.innerHTML = '<option value="">Choose one</option>' + groups.map(([g, list]) => `<optgroup label="${g}">${list.map(e => `<option value="${e.ab}">${esc(e.name)}</option>`).join('')}</optgroup>`).join('');
}

/* ─── Mode pills ───────────────────────────────────────────────────────── */
function setMode(m, opts = {}) {
  if (!MODES.includes(m)) m = 'rated';
  state.mode = m;
  document.querySelectorAll('.mode-pill').forEach(p => { p.classList.toggle('active', p.dataset.mode === m); p.setAttribute('aria-pressed', p.dataset.mode === m ? 'true' : 'false'); });
  $('mode-briefing').textContent = MODE_BRIEF[m];
  $('compare-btn').textContent = BTN_TEXT[m];
  const spouseCard = $('card-spouse');
  spouseCard.hidden = m !== 'spouse';
  if (m === 'spouse') { if (spouseCard.parentElement !== $('input-section')) $('input-section').appendChild(spouseCard); }
  else if (spouseCard.parentElement !== $('drawer-grid')) $('drawer-grid').appendChild(spouseCard);
  $('rating-label').innerHTML = m === 'spouse' ? 'The veteran’s VA rating at death <span class="req-tag">required</span>' : 'VA disability rating <span class="req-tag">required</span>';
  $('rating-year-label').textContent = m === 'spouse' ? 'Year the veteran died' : 'Year your rating took effect';
  if (m === 'home' && ownsEl.value === 'yes' && !opts.fromUrl) { /* leave as is; the user may already own */ }
  if (state.revealed) reveal({ silent: true });
  updateLiveStrip();
}
document.querySelectorAll('.mode-pill').forEach(p => p.addEventListener('click', () => {
  setMode(p.dataset.mode);
  if (isTourActive() && tourState.steps[tourState.i]?.id === 'pills') showTourStep(tourState.i + 1);
}));

/* ─── Conditional fields ───────────────────────────────────────────────── */
function ratingInfo() {
  const v = ratingEl.value;
  const unrated = v === 'unrated';
  const num = (v !== '' && !unrated) ? parseInt(v, 10) : null;
  return { raw: v, unrated, num, rated: num !== null };
}
function syncConditionalFields() {
  const r = ratingInfo();
  const rl = $('rating-line');
  const st = STATES[stateEl.value];
  if (r.unrated) { rl.hidden = false; rl.innerHTML = '<strong>The exemption starts with a rating.</strong> File the claim first (an Intent to File locks the effective date). Everything below still shows what a rating unlocks where you live.'; }
  else if (r.rated && r.num === 0) { rl.hidden = false; rl.innerHTML = '<strong>0% rarely opens a property exemption.</strong> A handful of states (Puerto Rico, some wartime programs) give something at any rating; most start at 10%, 50%, or 100%.'; }
  else if (r.rated && r.num === 100) { rl.hidden = false; rl.innerHTML = `<strong>100%.</strong> ${ptEl.checked ? 'With P&T you clear every state’s top tier.' : 'Check P&T if your decision letter says permanent and total; several states require it for the full exemption.'}`; }
  else if (r.rated && st) { rl.hidden = false; rl.innerHTML = `<strong>${r.num}%.</strong> Partial exemptions start at ${lowestThreshold(st)} in ${esc(st.name)}; the full exemption is usually a 100% / P&T benefit.`; }
  else rl.hidden = true;
  $('field-pt').hidden = !(r.rated && r.num >= 100) && !(r.rated && r.num >= 60);
  // Income field only where this state has an income-gated program
  const progs = (st && st.propertyTax && st.propertyTax.programs) || [];
  const incomeProgs = progs.filter(p => p.incomeLimit);
  $('field-income').hidden = incomeProgs.length === 0;
  $('income-hint').textContent = incomeProgs.length ? `${esc(st.name)} income-gates ${incomeProgs.length === 1 ? 'one program' : incomeProgs.length + ' programs'} (limit ${incomeProgs.map(p => fmtUSD(p.incomeLimit)).join(' / ')}). Leave blank and we’ll flag it as a condition.` : '';
  $('value-hint').textContent = st ? `Turns the exemption into dollars using ${st.name}’s typical effective rate (${((st.propertyTaxRate || 0.011) * 100).toFixed(2)}%). Your bill uses assessed value and your local rate; the office computes the exact figure.` : 'Turns the exemption into dollars using your state’s typical effective rate. Your bill uses assessed value and your local rate; the office computes the exact figure.';
}
function lowestThreshold(st) {
  const progs = ((st.propertyTax && st.propertyTax.programs) || []).filter(p => p.ratingRequired != null && p.type !== 'full');
  const mins = progs.map(p => p.ratingRequired).concat(progs.flatMap(p => (p.tiers || []).map(t => t.minRating)));
  return mins.length ? Math.min(...mins) + '%' : 'the full-exemption threshold';
}
[stateEl, ratingEl, ptEl, tdiuEl].forEach(el => { el.addEventListener('change', syncConditionalFields); el.addEventListener('input', syncConditionalFields); });

/* ─── ZIP → county (lazy-loads the 2020 Census crosswalk the first time a ZIP is typed) ── */
let zipLoad = null;
function loadZip() {
  if (window.ZIP_COUNTY) return Promise.resolve();
  if (zipLoad) return zipLoad;
  zipLoad = new Promise((res, rej) => { const s = document.createElement('script'); s.src = '/property-tax/data/zip-county.js'; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
  return zipLoad;
}
async function onZip() {
  const z = zipEl.value.replace(/\D/g, '').slice(0, 5);
  if (zipEl.value !== z) zipEl.value = z;
  const line = $('zip-line');
  state.counties = []; state.county = null; $('field-county').hidden = true;
  if (z.length < 5) { line.hidden = true; onFormChange(); return; }
  try { await loadZip(); } catch { line.hidden = false; line.textContent = 'Could not load the ZIP lookup. The county field is optional; the office links still work.'; return; }
  const fips = (window.ZIP_COUNTY[z] || '').split(',').filter(Boolean);
  if (!fips.length) { line.hidden = false; line.textContent = 'That ZIP isn’t in the Census crosswalk (PO-box-only ZIPs aren’t). Try the ZIP of the home itself.'; onFormChange(); return; }
  state.counties = fips.map(f => ({ fips: f, name: window.COUNTY_NAMES[f] || f, state: FIPS_STATE[f.slice(0, 2)] }));
  const zipState = state.counties[0].state;
  if (zipState && stateEl.value && zipState !== stateEl.value) { line.hidden = false; line.innerHTML = `<strong>Heads up:</strong> ZIP ${z} is in ${esc(STATES[zipState]?.name || zipState)}, but you chose ${esc(STATES[stateEl.value]?.name || stateEl.value)}. The state you pick drives the rules.`; }
  else if (zipState && !stateEl.value) { stateEl.value = zipState; syncConditionalFields(); line.hidden = true; }
  else line.hidden = true;
  if (state.counties.length > 1) {
    countyEl.innerHTML = state.counties.map((c, i) => `<option value="${c.fips}"${i === 0 ? ' selected' : ''}>${esc(c.name)}</option>`).join('');
    $('field-county').hidden = false;
    state.county = state.counties[0];
  } else state.county = state.counties[0];
  if (state.county && state.county.state === 'TX') { try { await ensureTxOffices(); } catch { /* card falls back to the directory link */ } }
  onFormChange();
}
zipEl.addEventListener('input', onZip);
countyEl.addEventListener('change', () => { state.county = state.counties.find(c => c.fips === countyEl.value) || null; onFormChange(); });

/* ─── Inputs → model ───────────────────────────────────────────────────── */
function buildInput() {
  const r = ratingInfo();
  const num = v => (v === '' || v == null) ? null : (parseFloat(v) || 0);
  return {
    mode: state.mode, state: stateEl.value || null, ratingRaw: r.raw, rating: r.num, unrated: r.unrated,
    isPT: ptEl.checked, isTDIU: tdiuEl.checked, homeValue: num(valueEl.value) || 0, owns: ownsEl.value,
    zip: zipEl.value || null, county: state.county,
    ratingYear: parseInt(ratingYearEl.value, 10) || null, titleYear: parseInt(titleYearEl.value, 10) || null,
    age: parseInt(ageEl.value, 10) || null, income: num(incomeEl.value), wartime: wartimeEl.value === '' ? null : wartimeEl.value === 'yes', sah: sahEl.checked,
    remarried: remarriedEl.value === 'yes', dic: dicEl.value === '' ? null : dicEl.value === 'yes',
    docs: [...state.docs],
  };
}
const CTX = { states: STATES, filing: FILING, defaultDocuments: DEFAULT_DOCUMENTS, txOffices: null, txOfficesStamp: null };
const run = () => solve(buildInput(), CTX);
// Texas appraisal-district contacts (snapshot of the Comptroller directory), loaded only when a Texas county is known.
let txLoad = null;
function ensureTxOffices() {
  if (CTX.txOffices || txLoad) return txLoad || Promise.resolve();
  txLoad = new Promise((res, rej) => { const el = document.createElement('script'); el.src = '/property-tax/data/tx-offices.js'; el.onload = () => { CTX.txOffices = window.TX_OFFICES || null; CTX.txOfficesStamp = window.TX_OFFICES_STAMP || null; res(); }; el.onerror = rej; document.head.appendChild(el); });
  return txLoad;
}

/* ─── Live strip ───────────────────────────────────────────────────────── */
let liveTimer = null;
function updateLiveStrip() {
  clearTimeout(liveTimer);
  liveTimer = setTimeout(() => {
    const el = $('live-strip');
    const s = buildInput();
    if (!s.state || !s.ratingRaw) { el.innerHTML = '<strong>Required to run:</strong> the state and the rating. Your estimate builds here as you answer.'; return; }
    const r = run();
    if (r.noProgram) { el.innerHTML = `<strong>${esc(r.stateRec?.name || s.state)}</strong> has no veteran property-tax program on record. Press the button for what that means and what still applies.`; return; }
    const val = s.homeValue > 0 ? (r.savings > 0 ? `<span class="stake">${fmtUSD(r.savings)}</span> a year at stake` : 'no dollar program at this rating') : 'add a home value for the dollar figure';
    const f = r.filing;
    el.innerHTML = `${val} · file with <strong>${esc(f?.officeType || 'the local assessing office')}</strong>${state.county ? ` (${esc(state.county.name)})` : ''}${r.deadline.type === 'fixed-date' ? ` · next deadline <strong>${esc(r.deadline.headline.split(':')[0])}</strong>` : ''}. Press the button for the form, the deadline, and the checklist.`;
  }, 150);
}
let rerenderTimer = null;
function onFormChange() {
  updateLiveStrip();
  if (!state.revealed) return;
  clearTimeout(rerenderTimer);
  rerenderTimer = setTimeout(() => reveal({ silent: true }), 250);
}
document.querySelectorAll('#calc-form input, #calc-form select').forEach(el => { if (el.id === 'zip' || el.id === 'county') return; el.addEventListener('input', onFormChange); el.addEventListener('change', onFormChange); });

/* ─── Validation (novalidate + JS, house rule) ─────────────────────────── */
function clearMissing() { document.querySelectorAll('.field-missing, .field-error').forEach(el => el.classList.remove('field-missing', 'field-error')); }
function validate() {
  clearMissing();
  if (!stateEl.value) { stateEl.closest('.fg-field').classList.add('field-missing'); stateEl.classList.add('field-error'); return { message: 'Required: the state or territory where the home is (the red field).', focusEl: stateEl }; }
  if (!ratingEl.value) { ratingEl.closest('.fg-field').classList.add('field-missing'); ratingEl.classList.add('field-error'); return { message: 'Required: the VA rating. “Not rated yet” is a fine answer.', focusEl: ratingEl }; }
  return { message: '', focusEl: null };
}
[stateEl, ratingEl].forEach(el => el.addEventListener('change', () => { if (el.value) { clearMissing(); $('form-error').textContent = ''; } }));

/* ─── Submit gate ──────────────────────────────────────────────────────── */
$('calc-form').addEventListener('submit', e => { e.preventDefault(); reveal(); });
function reveal(opts = {}) {
  const v = validate();
  if (opts.silent && v.message) { clearMissing(); return; }
  $('form-error').textContent = v.message;
  if (v.message) { if (!isTourActive()) v.focusEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); v.focusEl.focus({ preventScroll: true }); return; }
  const r = run();
  state.last = r;
  renderHero(r);
  renderCards(r);
  state.revealed = true;
  $('hero-verdict').style.display = 'block';
  $('hero-capture').style.display = 'block';
  $('results-container').style.display = 'block';
  $('action-bar').style.display = 'flex';
  if (opts.silent) return;
  if (typeof gtag === 'function') gtag('event', 'show_results', { mode: state.mode, state: r.s.state, rating: r.s.ratingRaw, confidence: r.confidence });
  if (isTourActive() && tourState.steps[tourState.i]?.id === 'gate') endTour();
  if (!isTourActive()) $('hero-verdict').scrollIntoView({ behavior: 'smooth', block: 'start' });
  let resultsSeen = true;
  try { resultsSeen = localStorage.getItem(RESULTS_TOUR_KEY) === '1'; } catch {}
  if (!resultsSeen && !window.__ptxArrivalHadParams) setTimeout(() => startTourWith(RESULTS_TOUR, RESULTS_TOUR_KEY), 800);
}
$('retake-btn').addEventListener('click', () => {
  state.revealed = false;
  ['hero-verdict', 'hero-capture', 'results-container'].forEach(id => $(id).style.display = 'none');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── Hero ─────────────────────────────────────────────────────────────── */
const confChip = c => `<span class="chip ${c === 'verified' ? 'chip-green' : c === 'reported' ? 'chip-gold' : 'chip-red'}">${esc(CONFIDENCE[c]?.label || c)}</span>`;
function renderHero(r) {
  const el = $('hero-verdict');
  const s = r.s, st = r.stateRec, f = r.filing || {};
  const name = st ? st.name : s.state;
  const office = f.officeType || 'the local assessing office';
  const cty = s.county ? ` (${esc(s.county.name)})` : '';
  let kicker, line;
  if (r.noProgram) {
    kicker = 'No veteran property-tax program here';
    line = `<strong>${esc(name)}</strong> has no veteran property tax exemption on record${f.text ? ': ' + esc(f.text) : '.'} Your rating still carries the federal side (compensation, VA health care, the home loan funding-fee waiver) and whatever ${esc(name)} offers elsewhere; <a href="/state-benefits/">Best State for Veterans</a> lists it.`;
  } else if (s.owns === 'renting') {
    kicker = 'This one needs a deed';
    line = `Property tax exemptions attach to a home you own and live in. Renters don’t file them. When you buy, come back: in <strong>${esc(name)}</strong> a ${s.rating != null ? s.rating + '%' : ''} rating ${r.savings > 0 ? `is worth about <strong>${fmtUSD(r.savings)}</strong> a year on a ${fmtUSD(s.homeValue)} home` : 'opens the programs below'}, and the <a href="/va-affordability/">VA Loan Affordability Calculator</a> can carry the exemption into your monthly payment.`;
  } else if (s.unrated) {
    kicker = 'Start with the rating';
    line = `The exemption needs a service-connected rating. File the claim first; an Intent to File locks the effective date. In <strong>${esc(name)}</strong>${r.ptUpside ? ` a 100% P&T rating would be worth about <strong>${fmtUSD(r.ptUpside.savings)}</strong> a year on a ${fmtUSD(s.homeValue)} home` : ' the programs below show what each rating level unlocks'}. The <a href="/va-combined/">VA Combined Rating Calculator</a> and <a href="/cp-exam-prep/">C&P Exam Prep</a> are where that starts.`;
  } else if (!r.best) {
    kicker = 'Not at this rating, yet';
    line = `At <strong>${s.rating}%</strong> no ${esc(name)} property-tax program applies${s.mode === 'spouse' ? ' to a surviving spouse' : ''}. ${r.ptUpside ? `At 100% P&T the same home would save about <strong>${fmtUSD(r.ptUpside.savings)}</strong> a year (${esc(r.ptUpside.program)}).` : ''} The <a href="/secondary-conditions/">Secondary Conditions tool</a> shows the path most veterans use to get there.`;
  } else {
    const val = s.homeValue > 0 ? (r.savings > 0 ? `about <strong>${fmtUSD(r.savings)}</strong> a year` : 'a reduction the office computes from your assessed value') : 'a reduction (add a home value for the dollar figure)';
    const full = r.best.prog.type === 'full' && r.best.status === 'yes';
    if (s.mode === 'home') { kicker = full ? 'A new home, a new filing, a $0 bill' : 'A new home means a new filing'; line = `In <strong>${esc(name)}</strong> the exemption does not follow you; you file again for the new home with <strong>${esc(office)}</strong>${cty}. ${r.filing?.effective ? `When it takes effect: ${esc(r.filing.effective)}.` : ''} It’s worth ${val}${r.deadline.type === 'rolling' ? `, and every month you wait costs about ${fmtUSD(r.savings / 12)}` : ''}.`; }
    else if (s.mode === 'never') { kicker = r.lookback.estimate ? `You may be able to recover about ${fmtUSD(r.lookback.estimate)}` : 'Missed years: here is the rule'; line = `Going forward, <strong>${esc(r.best.prog.name)}</strong> is worth ${val}. Looking back, ${esc(name)}’s rule is: ${esc(r.lookback.text || 'not yet verified; ask the office in writing which prior years can be refunded')}${r.lookback.estimate ? ` For ${r.lookback.estimateYears} missed year${r.lookback.estimateYears === 1 ? '' : 's'} that is roughly <strong>${fmtUSD(r.lookback.estimate)}</strong>; the office computes the real figure.` : ''}`; }
    else if (s.mode === 'spouse') { kicker = s.remarried ? 'Remarriage usually ends it' : 'You keep it, with conditions'; line = `${s.remarried ? `Most states end the surviving spouse’s exemption on remarriage. ${esc(name)}’s rule: ` : `In <strong>${esc(name)}</strong> the exemption continues for an unremarried surviving spouse. `}${esc(r.filing?.survivingSpouse || 'see the program rule below and confirm the documents with the office.')} It is worth ${val}.`; }
    else { kicker = full ? `Your ${esc(name)} property tax bill: $0` : `Your ${esc(name)} exemption, in dollars`; line = `At <strong>${s.rating}%${s.isPT ? ' P&T' : s.isTDIU ? ' (TDIU)' : ''}</strong> you qualify for <strong>${esc(r.best.prog.name)}</strong>, worth ${val}${s.homeValue ? ` on a ${fmtUSD(s.homeValue)} home` : ''}. File with <strong>${esc(office)}</strong>${cty}. ${r.deadline.type === 'fixed-date' ? `Next deadline: <strong>${esc(r.deadline.headline)}</strong>.` : esc(r.deadline.headline) + '.'}`; }
  }
  const dl = r.deadline;
  const tiles = `<div class="three-num">
    <div class="num-card comfortable"><span class="nc-label">This year</span><span class="nc-amount">${r.savings > 0 ? fmtUSD(r.savings) : '—'}</span><span class="nc-sub">${r.savings > 0 ? `estimated savings${r.fullBill > 0 ? ` of a ${fmtUSD(r.fullBill)} bill` : ''}` : s.homeValue ? 'no dollar program at this rating' : 'enter a home value'}</span></div>
    <div class="num-card"><span class="nc-label">Where to file</span><span class="nc-amount nc-small">${esc(f.officeType || 'local assessor')}</span><span class="nc-sub">${s.county ? esc(s.county.name) : 'add your ZIP for the county'}</span></div>
    <div class="num-card ${dl.urgent ? 'urgent' : ''}"><span class="nc-label">Deadline</span><span class="nc-amount nc-small">${esc(dl.type === 'fixed-date' ? dl.headline.split(':')[0] : dl.type === 'rolling' ? 'File now' : dl.type === 'taxable-status-date' ? 'Town-set date' : dl.type === 'varies-by-county' ? 'County-set' : dl.type === 'calendar-year' ? 'Dec 31' : 'Ask the office')}</span><span class="nc-sub">${esc(dl.type === 'fixed-date' ? dl.headline.split(': ')[1] || '' : dl.type)}</span></div>
  </div>`;
  const sub = `<p class="v-sub">${confChip(r.confidence)} ${esc(CONFIDENCE[r.confidence]?.text || '')} ${r.ptUpside && !s.unrated ? `<span class="chip chip-navy">At 100% P&T</span> about <strong>${fmtUSD(r.ptUpside.savings)}</strong>/yr.` : ''}</p>`;
  el.innerHTML = `<p class="v-kicker">${kicker}</p><p class="v-line">${line}</p>${r.noProgram ? '' : tiles}${sub}`;
}

/* ─── Cards ────────────────────────────────────────────────────────────── */
function card(id, title, value, valueClass, body, open) {
  return `<details class="stack-card" id="card-${id}"${open ? ' open' : ''}><summary><span class="sc-title">${esc(title)}</span><span class="sc-value ${valueClass || ''}">${value}</span></summary><div class="sc-body">${body}</div></details>`;
}
const ext = (url, label) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} →</a>`;
function sourcesBlock(f) {
  if (!f) return `<p class="sc-src">${esc(CONFIDENCE.unverified.text)}</p>`;
  const prim = (f.sourceUrls || []);
  return `<p class="sc-src">${confChip(f.confidence)} ${f.statute ? esc(f.statute) + '. ' : ''}${prim.length ? 'Sources: ' + prim.map(x => ext(x.url, (x.title || x.url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]) + (x.archived ? ' (archived copy)' : ''))).join(' · ') + '. ' : ''}${f.verifiedDate ? `Verified ${esc(f.verifiedDate)}.` : ''}${f.notes ? ' ' + esc(f.notes) : ''}</p>`;
}
const askBlock = (title, text) => `<div class="callout callout-gold"><h3>${esc(title)}</h3><p>“${esc(text)}”</p></div>`;
// Texas: the actual appraisal district (file here) and the tax assessor-collector (not here), from the Comptroller snapshot.
function localOfficeHtml(o) {
  const c = o.cad, t = o.tac || {};
  const addr = a => esc(a || '').replace(/\n/g, '<br>');
  const site = u => u ? `<a href="${esc(/^https?:/.test(u) ? u : 'http://' + u)}" target="_blank" rel="noopener">${esc(u.replace(/^https?:\/\//, ''))}</a>` : '';
  return `<div class="money-grid">
    <div class="money-tile" style="text-align:left"><span class="mt-l" style="font-weight:800;color:var(--primary)">File here: ${esc(o.county)} Appraisal District</span><span class="mt-l">${c.person ? 'Chief Appraiser ' + esc(c.person) + (c.liaison ? ' · Taxpayer liaison ' + esc(c.liaison) : '') + '<br>' : ''}${c.phone ? '<a href="tel:' + esc(c.phone.replace(/[^\d+]/g, '')) + '">' + esc(c.phone) + '</a>' : ''}${c.email ? ' · <a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>' : ''}${c.website ? ' · ' + site(c.website) : ''}${c.street ? '<br><strong>Street:</strong> ' + addr(c.street) : ''}${c.mailing && c.mailing !== c.street ? '<br><strong>Mail:</strong> ' + addr(c.mailing) : ''}</span></div>
    <div class="money-tile" style="text-align:left;opacity:.85"><span class="mt-l" style="font-weight:800">Not here: Tax Assessor-Collector</span><span class="mt-l">${t.person ? esc(t.person) + '<br>' : ''}${t.phone ? esc(t.phone) : ''}${t.website ? ' · ' + site(t.website) : ''}<br>Registers vehicles and collects the bill. Exemption applications do not go here.</span></div>
  </div>
  <p class="sc-src">Contacts from the Texas Comptroller county directory (snapshot ${esc(o.stamp || '')}; the Comptroller’s page for this county was last updated ${esc(c.updated || 'n/a')}). <a href="${esc(o.url)}" target="_blank" rel="noopener">Comptroller page for ${esc(o.county)} →</a></p>`;
}
const statusTag = p => p.status === 'yes' ? '<span class="rs rs-doc">You qualify</span>' : p.status === 'conditional' ? '<span class="rs rs-thin">If</span>' : '<span class="rs rs-miss">Not at this rating</span>';

function renderCards(r) {
  const s = r.s, st = r.stateRec, f = r.filing || {};
  const name = st ? st.name : s.state;
  const cards = {};
  // 1 Value
  {
    const listed = r.programs.filter(p => p.status !== 'skip');
    const rows = listed.map(p => `<li>${statusTag(p)}<div><p class="r-t">${esc(p.prog.name)}${p === r.best ? ' <span class="chip chip-gold">best for you</span>' : ''}</p><p class="r-w">${esc(p.prog.summary || p.prog.details || '')}</p>${p.status !== 'skip' && p.savings > 0 ? `<p class="r-a">About ${fmtUSD(p.savings)} a year on your home. ${esc(KIND_LABEL[p.kind] || '')}.</p>` : ''}${p.reasons.length ? `<p class="r-a">${esc(p.reasons.join('; '))}.</p>` : ''}${p.conditions.length ? `<p class="r-a">Condition: ${esc(p.conditions.join('; '))}.</p>` : ''}</div></li>`).join('');
    const note = st?.propertyTax?.note ? `<div class="warn-line">${esc(st.propertyTax.note)}</div>` : '';
    // Research-pass findings that disagree with the dollar rows: shown, never hidden, until the dataset is corrected.
    const corr = (f.dataCorrections || []).filter(c => c && c.issue);
    const corrHtml = corr.length ? `<div class="warn-line"><strong>Data note${corr.length === 1 ? '' : 's'} from the ${esc(f.verifiedDate || 'latest')} verification pass:</strong><ul style="margin:6px 0 0 18px;padding:0">${corr.map(c => `<li>${esc(c.issue)}${c.source ? ` ${ext(c.source, 'source')}` : ''}</li>`).join('')}</ul></div>` : '';
    cards.value = card('value', 'What it’s worth', r.savings > 0 ? fmtUSD(r.savings) + '/yr' : r.best ? 'see rule' : 'none at this rating', r.best ? '' : 'off', `
      ${r.best ? `<p><strong>${esc(r.best.prog.name)}</strong>: ${esc(KIND_LABEL[r.best.kind] || '')}. ${s.homeValue > 0 && r.savings > 0 ? `On a ${fmtUSD(s.homeValue)} home at ${esc(name)}’s typical effective rate of ${(r.rate * 100).toFixed(2)}%, that is about <strong>${fmtUSD(r.savings)}</strong> this year and <strong>${fmtUSD(r.tenYear)}</strong> over ten years. The office computes the real figure from your assessed value and local rate.` : s.homeValue > 0 ? 'The amount depends on local figures the state does not fix; the office computes it.' : 'Add a home value in the form for the dollar figure.'}</p>` : `<p>No ${esc(name)} program applies at ${s.unrated ? 'no rating' : s.rating + '%'}${s.mode === 'spouse' ? ' for a surviving spouse' : ''}. The list below shows every program and its threshold.</p>`}
      ${note}${corrHtml}
      <ul class="ready-list">${rows}</ul>
      ${r.ptUpside ? `<p class="one-line">At 100% P&T the same home would save about <strong>${fmtUSD(r.ptUpside.savings)}</strong> a year (${esc(r.ptUpside.program)}). <a href="/secondary-conditions/">What to claim next →</a> <a href="/100-pt/">What 100% P&T is worth in total →</a></p>` : ''}
      <p class="sc-src">Program data shared with <a href="/state-benefits/">Best State for Veterans</a> (55 jurisdictions, 120 programs). One exemption per home is the usual rule; the verdict uses your best single program.</p>`, false);
  }
  // 2 How to file
  {
    const officeKey = /appraisal district/i.test(f.officeType || '') ? 'texas' : /town|municipal|city/i.test(f.officeType || '') ? 'town' : f.kind === 'income-tax-credit' ? 'incomeTax' : /department of revenue|state/i.test(f.officeType || '') && !/county/i.test(f.officeType || '') ? 'stateAgency' : 'default';
    const LK = { official: ['rs-doc', 'Official'], map: ['rs-thin', 'Map'], state: ['rs-doc', 'State'], index: ['rs-thin', 'Third-party'] };
    const links = r.locator.links.map(l => `<li><span class="rs ${LK[l.kind][0]}">${LK[l.kind][1]}</span><div><p class="r-t">${ext(l.url, l.label)}</p>${l.kind === 'map' ? '<p class="r-w">A map search, not an official directory. Confirm the office on its own government site.</p>' : l.kind === 'index' ? '<p class="r-w">A free commercial directory that links each county’s assessor site. Not a government page; use it to find the office, then confirm there.</p>' : l.county ? '<p class="r-w">Your county’s page in the state’s official directory.</p>' : ''}</div></li>`).join('');
    const forms = (r.best && r.best.forms.length ? r.best.forms : (f.forms || []));
    const formRows = forms.length ? forms.map(fm => `<li><span class="rs rs-doc">Form</span><div><p class="r-t">${fm.url ? ext(fm.url, `${fm.name || 'Application'}${fm.number ? ' (' + fm.number + ')' : ''}`) : esc(`${fm.name || 'Application'}${fm.number ? ' (' + fm.number + ')' : ''}`)}${fm.archived ? ' <span class="chip chip-gold">archived copy</span>' : ''}</p><p class="r-w">${fm.filedWith ? 'Filed with ' + esc(fm.filedWith) + '. ' : ''}${fm.revision ? 'Revision ' + esc(fm.revision) + '. ' : ''}${fm.archived ? 'The office’s site blocks automated checks, so this links to an archived copy of the county’s own form; confirm the current edition with the office. ' : ''}${fm.note ? esc(fm.note) : ''}</p></div></li>`).join('') : `<li><span class="rs rs-miss">Not verified</span><div><p class="r-t">Form not yet verified for ${esc(name)}</p><p class="r-w">Ask the office for the disabled-veteran exemption application by name. Never pay a third party for a form; every one is free.</p></div></li>`;
    const docs = r.documents.map((d, i) => `<li><label><input type="checkbox" data-doc="${i}"${state.docs.has(String(i)) ? ' checked' : ''}> ${esc(d)}</label></li>`).join('');
    cards.file = card('file', 'How to file', esc(f.officeType || 'local assessor'), r.locator.tier === 1 ? '' : 'door', `
      <p>${esc(OFFICE_EXPLAIN[officeKey])}${f.officeTypeNote ? ' ' + esc(f.officeTypeNote) : ''}</p>
      <p><strong>Your office:</strong> ${esc(f.officeType || 'the local assessing office')}${s.county ? ` for <strong>${esc(s.county.name)}</strong>` : ' (add your ZIP in the form and we’ll name the county)'}.</p>
      ${r.localOffice && r.localOffice.cad ? localOfficeHtml(r.localOffice) : ''}
      <ul class="ready-list">${links}</ul>
      <p class="chk-label"><strong>The form</strong></p>
      <ul class="ready-list">${formRows}</ul>
      ${f.onlineFiling && f.onlineFiling.text ? `<p><strong>Mail or online:</strong> ${esc(f.onlineFiling.text)}</p>` : '<p><strong>Mail or online:</strong> ask the office; most accept mail, many accept email or an online portal, and some county offices take paper only.</p>'}
      <p class="chk-label"><strong>Attach</strong> <span class="optional-tag">(tick as you gather them; the checklist card tracks it)</span></p>
      <ul class="ev-list">${docs}</ul>
      ${askBlock('Ask for a receipt', ASK_SCRIPTS.receipt)}
      ${sourcesBlock(r.filing)}`, false);
  }
  // 3 Deadline
  {
    const dl = r.deadline;
    cards.deadline = card('deadline', 'Your deadline', esc(dl.type === 'fixed-date' ? dl.headline.split(':')[0] : dl.type === 'rolling' ? 'no fixed date' : dl.type === 'taxable-status-date' ? 'town-set' : dl.type === 'varies-by-county' ? 'county-set' : dl.type === 'calendar-year' ? 'Dec 31' : 'unverified'), dl.urgent ? 'door' : '', `
      <p><strong>${esc(dl.headline)}.</strong> ${esc(dl.text)}</p>
      ${f.effective ? `<p><strong>When it takes effect:</strong> ${esc(f.effective)}</p>` : ''}
      ${f.lateFiling && f.lateFiling !== 'n/a' ? `<p><strong>If you file late:</strong> ${esc(f.lateFiling)}</p>` : ''}
      ${dl.type === 'taxable-status-date' || dl.type === 'varies-by-county' ? `<p>Your date is set locally, so the office link in the How to File card is the one that answers it. Write the date down; it recurs every year.</p>` : ''}
      ${s.mode === 'home' ? `<p><strong>Moving in or out:</strong> ${esc(f.move || 'in most states an exemption does not transfer to a new home, and the buyer of your old home cannot keep yours. File at the new address; tell the old office you’ve moved.')}</p>` : ''}
      <div class="letter-tools no-print"><button type="button" id="ics-btn" class="action-btn secondary">${dl.date ? 'Add this deadline to my calendar' : 'Add a reminder to confirm the deadline'}</button><span class="bracket-count">${dl.date ? 'reminders 30 and 7 days before' : 'two weeks out, with the office and the question to ask'}</span></div>
      ${askBlock('What to ask the office', ASK_SCRIPTS.deadline)}
      ${sourcesBlock(r.filing)}`, false);
  }
  // 4 Missed years
  {
    const lb = r.lookback;
    const est = lb.estimate ? `<div class="money-grid"><div class="money-tile"><span class="mt-n">${fmtUSD(lb.estimate)}</span><span class="mt-l">rough value of ${lb.estimateYears} missed year${lb.estimateYears === 1 ? '' : 's'} at today’s rate; the office computes the real figure from each year’s assessment</span></div></div>` : '';
    const sinceLine = lb.since != null ? `<p>You entered a rating effective ${s.ratingYear}${s.titleYear ? ` and a purchase in ${s.titleYear}` : ''}: <strong>${lb.since} year${lb.since === 1 ? '' : 's'}</strong> since the later of the two.</p>` : `<p>Enter the year your rating took effect${s.mode === 'spouse' ? '' : ' and the year you bought the home'} in “Adjust the details” and this card counts the years.</p>`;
    cards.missed = card('missed', 'Missed years', lb.estimate ? fmtUSD(lb.estimate) : lb.type === 'fixed' ? `${lb.years} yr lookback` : lb.type === 'none' ? 'no refunds' : lb.type === 'local-option' ? 'town decides' : 'ask the office', lb.type === 'none' ? 'off' : lb.estimate ? 'door' : '', `
      <p><strong>${esc(name)}’s rule:</strong> ${esc(lb.text || 'not yet verified. Most offices will tell you in writing; the question below is the one to send.')}</p>
      ${sinceLine}${est}
      ${lb.type === 'none' ? '<p>Where the state does not refund prior years, the exemption starts with the first filing. The money going forward is the win; file now.</p>' : askBlock('Send this in writing', ASK_SCRIPTS.retro)}
      ${s.mode === 'never' ? `<p class="one-line">${esc(ONE_ON_ONE.never)} <a href="${ONE_ON_ONE.url}">Work With Me →</a></p>` : ''}
      ${sourcesBlock(r.filing)}`, false);
  }
  // 5 Keep it
  {
    const ren = f.renewal || {};
    cards.keep = card('keep', 'Keeping it', esc(ren.type === 'none' ? 'no annual re-file' : ren.type === 'annual' ? 'annual renewal' : ren.type === 'on-change' ? 're-file on changes' : ren.type === 'varies' ? 'varies' : 'ask the office'), ren.type === 'annual' ? 'door' : '', `
      <p><strong>Renewal:</strong> ${esc(ren.text || 'Not yet verified. Ask whether the exemption renews on its own or needs a form each year; a missed renewal is the most common way veterans lose an exemption already granted.')}</p>
      ${f.ratingChange ? `<p><strong>If the rating changes:</strong> ${esc(f.ratingChange)}</p>` : '<p><strong>If the rating changes:</strong> tell the office. An increase can move you to a higher tier; in a few states a decrease has to be reported.</p>'}
      ${f.move ? `<p><strong>If you move:</strong> ${esc(f.move)}</p>` : ''}
      <p><strong>Surviving spouse:</strong> ${esc(f.survivingSpouse || (r.best && r.best.prog.survivingSpouse ? 'This program carries over to an unremarried surviving spouse; the office will want the death certificate and the VA letter.' : 'Check the program rule above; not every program carries over.'))}</p>
      ${askBlock('Ask once, write it down', ASK_SCRIPTS.renewal)}
      ${sourcesBlock(r.filing)}`, false);
  }
  // 6 Denied or ignored
  cards.denied = card('denied', 'If you’re denied or the bill doesn’t change', f.appeal ? 'appeal path' : 'ask in writing', 'off', `
    <p>${esc(f.appeal || `Ask the office for the written denial and the appeal procedure. Most states route exemption disputes to a local board (a value adjustment board, board of assessment review, or county board of review) with its own deadline, often 30 to 60 days from the notice.`)}</p>
    <p>If the next tax bill arrives without the exemption, call before you pay: a granted exemption applied to the wrong parcel or the wrong year is a clerical fix, not an appeal. Keep your receipt with the received date.</p>
    <p class="sc-src">A county veterans service officer (CVSO) or an accredited VSO can help at no cost; many assessing offices have a veterans liaison.</p>
    ${sourcesBlock(r.filing)}`, false);
  // 7 Checklist
  cards.checklist = card('checklist', 'Your filing checklist', 'print or Word', 'door', renderChecklistCard(r), true);

  const ORDER = {
    rated: ['value', 'file', 'deadline', 'checklist', 'keep', 'missed', 'denied'],
    home: ['deadline', 'file', 'value', 'checklist', 'keep', 'missed', 'denied'],
    never: ['missed', 'value', 'file', 'deadline', 'checklist', 'keep', 'denied'],
    spouse: ['keep', 'value', 'file', 'deadline', 'checklist', 'missed', 'denied'],
  };
  const order = r.noProgram ? ['value', 'denied'] : ORDER[s.mode];
  const html = order.map((id, i) => { let h = cards[id]; if (i === 0 && !h.includes(' open>')) h = h.replace('<details class="stack-card"', '<details class="stack-card" open'); return h; }).join('');
  $('cards-panel').innerHTML = html;
  wireChecklistCard();
  $('ics-btn')?.addEventListener('click', async () => {
    const ics = buildIcs(state.last || run(), buildShareUrl());
    if (typeof gtag === 'function') gtag('event', 'deadline_calendar', { source: SOURCE, state: r.s.state, dated: ics.hasDate });
    const touch = matchMedia('(pointer: coarse)').matches;
    if (touch && typeof File === 'function' && navigator.canShare) {
      try { const file = new File([ics.text], ics.filename, { type: 'text/calendar' }); if (navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Property tax exemption deadline' }); return; } }
      catch (err) { if (err && err.name === 'AbortError') return; }
    }
    const url = URL.createObjectURL(new Blob([ics.text], { type: 'text/calendar;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = ics.filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 4000);
    const b = $('ics-btn'); if (b) { const o = b.textContent; b.textContent = '✓ Calendar file downloaded'; setTimeout(() => { b.textContent = o; }, 2500); }
  });
  document.querySelectorAll('[data-doc]').forEach(cb => cb.addEventListener('change', () => { cb.checked ? state.docs.add(cb.dataset.doc) : state.docs.delete(cb.dataset.doc); reveal({ silent: true }); }));
}

/* ─── Checklist card ───────────────────────────────────────────────────── */
function currentChecklist() { const r = state.last || run(); const doc = buildChecklist(r); doc.howToTitle = 'HOW TO USE THIS CHECKLIST'; return doc; }
function renderChecklistCard(r) {
  return `
    <p>One page: what you’re claiming, where, the form, your deadline, what to attach, the refund question, and how to keep it. Print it or open it in Word and fill the brackets. The checklist is built from your answers; nothing you type is sent anywhere.</p>
    <div class="letter-tools no-print">
      <button type="button" id="letter-copy" class="action-btn secondary">Copy checklist</button>
      <button type="button" id="letter-print" class="action-btn secondary">Print checklist only</button>
      <button type="button" id="letter-download" class="action-btn secondary">Download for Word</button>
      <span class="bracket-count" id="bracket-count"></span>
    </div>
    <p class="phone-hint no-print">On a phone, <strong>Download for Word</strong> opens your share menu: pick Pages, Word, Google Docs, or Save to Files. If a different app opens instead, use <strong>Copy checklist</strong> and paste it wherever you write.</p>
    <div id="cl-grid" class="cl-grid no-print" aria-label="Filing steps"></div>
    <div id="letter-sheet" class="sheet-print-only"></div>`;
}
// Plain text with URLs → escaped HTML with real links (the checklist doc keeps URLs as text so the
// Word and copy versions carry them verbatim).
function linkify(parts) {
  return parts.map(p => {
    if (p.b) return `<mark class="br">[${esc(p.b)}]</mark>`;
    return esc(p.t.replace(/^☐\s*/, '')).replace(/(https?:\/\/[^\s<]+[^\s<.,;:)])/g, u => `<a href="${u}" target="_blank" rel="noopener">${u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</a>`);
  }).join('');
}
// Cards are capped at a fixed height so the two rows stay short; a card whose text overflows gets a
// Show more toggle. Runs after the grid is in the DOM.
function fitChecklistCards() {
  document.querySelectorAll('#cl-grid .cl-card').forEach(card => {
    const body = card.querySelector('.cl-body'); if (!body) return;
    card.querySelector('.cl-more')?.remove();
    card.classList.remove('expanded', 'overflow');
    if (body.scrollHeight <= body.clientHeight + 4) return;
    card.classList.add('overflow');
    const b = document.createElement('button'); b.type = 'button'; b.className = 'cl-more'; b.textContent = 'Show more';
    b.addEventListener('click', () => { const open = card.classList.toggle('expanded'); b.textContent = open ? 'Show less' : 'Show more'; });
    card.appendChild(b);
  });
}
function paintChecklist() {
  const sheet = $('letter-sheet'); if (!sheet) return;
  const doc = currentChecklist();
  sheet.innerHTML = checklistToHtml(doc, esc);
  const grid = $('cl-grid');
  if (grid) grid.innerHTML = doc.sections.map(sec => {
    const done = state.steps.has(String(sec.n));
    const body = sec.blocks.map(b => b.type === 'p' ? `<p>${linkify(b.items[0])}</p>` : `<ul>${b.items.map(it => `<li>${linkify(it)}</li>`).join('')}</ul>`).join('');
    return `<div class="cl-card${done ? ' done' : ''}"><label class="cl-head"><input type="checkbox" data-step="${sec.n}"${done ? ' checked' : ''}><span class="cl-n">${sec.n}</span><span class="cl-t">${esc(sec.title)}</span></label><div class="cl-body">${body}</div></div>`;
  }).join('');
  const n = countBrackets(doc);
  const bc = $('bracket-count'); if (bc) { bc.textContent = `${n} bracket${n === 1 ? '' : 's'} to fill · ${state.steps.size} of ${doc.sections.length} steps done`; bc.classList.toggle('done', n === 0); }
  if (grid) requestAnimationFrame(fitChecklistCards);
}
addEventListener('resize', () => { if (state.revealed) fitChecklistCards(); });
function wireChecklistCard() {
  paintChecklist();
  $('cl-grid')?.addEventListener('change', e => {
    const cb = e.target.closest('[data-step]'); if (!cb) return;
    cb.checked ? state.steps.add(cb.dataset.step) : state.steps.delete(cb.dataset.step);
    cb.closest('.cl-card').classList.toggle('done', cb.checked);
    const doc = currentChecklist(); const bc = $('bracket-count'); if (bc) bc.textContent = `${countBrackets(doc)} bracket${countBrackets(doc) === 1 ? '' : 's'} to fill · ${state.steps.size} of ${doc.sections.length} steps done`;
  });
  $('letter-copy')?.addEventListener('click', async () => {
    const btn = $('letter-copy'), text = checklistToText(currentChecklist());
    try { await navigator.clipboard.writeText(text); const o = btn.textContent; btn.textContent = '✓ Copied'; setTimeout(() => { btn.textContent = o; }, 2000); } catch { prompt('Copy your checklist:', text); }
    if (typeof gtag === 'function') gtag('event', 'checklist_copy', { source: SOURCE });
  });
  $('letter-download')?.addEventListener('click', async () => {
    const name = 'property-tax-exemption-filing-checklist.docx';
    const bytes = buildDocxBytes(currentChecklist());
    if (typeof gtag === 'function') gtag('event', 'checklist_download', { source: SOURCE });
    const touch = matchMedia('(pointer: coarse)').matches;
    if (touch && typeof File === 'function' && navigator.canShare) {
      try {
        const file = new File([bytes], name, { type: DOCX_MIME });
        if (navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Property Tax Exemption Filing Checklist' }); return; }
      } catch (err) { if (err && err.name === 'AbortError') return; }
    }
    const url = URL.createObjectURL(new Blob([bytes], { type: DOCX_MIME }));
    const a = document.createElement('a'); a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 4000);
  });
  $('letter-print')?.addEventListener('click', () => {
    document.body.classList.add('print-letter-only');
    const done = () => { document.body.classList.remove('print-letter-only'); removeEventListener('afterprint', done); };
    addEventListener('afterprint', done);
    window.print();
    setTimeout(done, 1500);
    if (typeof gtag === 'function') gtag('event', 'checklist_print', { source: SOURCE });
  });
}

/* ─── FAQ (visible; mirrors FAQPage JSON-LD) ───────────────────────────── */
$('faq-items').innerHTML = FAQ.map(([q, a]) => `<details class="faq-item"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');

/* ─── Share URL ────────────────────────────────────────────────────────── */
const URL_FIELDS = [['st', stateEl], ['r', ratingEl], ['hv', valueEl], ['own', ownsEl], ['z', zipEl], ['ry', ratingYearEl], ['ty', titleYearEl], ['age', ageEl], ['inc', incomeEl], ['war', wartimeEl], ['rm', remarriedEl], ['dic', dicEl]];
const SHARE_KEYS = new Set(['m', ...URL_FIELDS.map(([k]) => k), 'pt', 'iu', 'sah', 'cty', 'docs', 'done']);
function buildShareUrl() {
  const p = new URLSearchParams();
  p.set('m', state.mode);
  for (const [k, el] of URL_FIELDS) if (el.value !== '' && el.value != null) p.set(k, el.value);
  if (ptEl.checked) p.set('pt', '1'); if (tdiuEl.checked) p.set('iu', '1'); if (sahEl.checked) p.set('sah', '1');
  if (state.county) p.set('cty', state.county.fips);
  if (state.docs.size) p.set('docs', [...state.docs].join('.'));
  if (state.steps.size) p.set('done', [...state.steps].join('.'));
  return location.origin + location.pathname + '?' + p.toString() + '&source=' + SOURCE;
}
function hasShareParams(p) { return [...p.keys()].some(k => SHARE_KEYS.has(k)); }
async function loadFromUrl() {
  const p = new URLSearchParams(location.search);
  if (!hasShareParams(p)) return false;
  setMode(MODE_BRIEF[p.get('m')] ? p.get('m') : 'rated', { fromUrl: true });
  for (const [k, el] of URL_FIELDS) if (p.has(k)) el.value = p.get(k);
  ptEl.checked = p.get('pt') === '1'; tdiuEl.checked = p.get('iu') === '1'; sahEl.checked = p.get('sah') === '1';
  if (p.has('docs')) p.get('docs').split('.').filter(Boolean).forEach(x => state.docs.add(x));
  if (p.has('done')) p.get('done').split('.').filter(Boolean).forEach(x => state.steps.add(x));
  if (!p.has('r') || !p.has('st')) { history.replaceState(null, '', location.pathname); syncConditionalFields(); return false; }
  syncConditionalFields();
  if (p.has('ry') || p.has('ty') || p.has('age') || p.has('inc')) $('assumptions-drawer').open = true;
  const cty = p.get('cty');
  history.replaceState(null, '', location.pathname);
  if (zipEl.value) { await onZip(); if (cty && state.counties.some(c => c.fips === cty)) { state.county = state.counties.find(c => c.fips === cty); countyEl.value = cty; } }
  reveal();
  return true;
}

/* ─── Email capture ────────────────────────────────────────────────────── */
async function sendResultsEmail(email, statusEl2, btn, placement) {
  if (!email || !email.includes('@')) { statusEl2.textContent = 'Please enter a valid email.'; statusEl2.className = 'email-status error'; return false; }
  btn.disabled = true;
  statusEl2.textContent = 'Sending…'; statusEl2.className = 'email-status';
  try {
    const res = await fetch('/api/email-results', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, resultsUrl: buildShareUrl(), source: SOURCE }) });
    const data = await res.json();
    if (res.ok && data.success) {
      statusEl2.textContent = '✓ Check your inbox: your filing plan link is on the way.'; statusEl2.className = 'email-status success';
      if (typeof gtag === 'function') gtag('event', 'email_capture', { placement, source: SOURCE });
      return true;
    }
    statusEl2.textContent = data.error || 'Something went wrong. Please try again.'; statusEl2.className = 'email-status error';
  } catch { statusEl2.textContent = 'Network error. Please try again.'; statusEl2.className = 'email-status error'; }
  finally { btn.disabled = false; }
  return false;
}
$('hero-capture-form').addEventListener('submit', async e => { e.preventDefault(); if (await sendResultsEmail($('hero-email-input').value.trim(), $('hero-email-status'), $('hero-email-btn'), 'hero')) $('hero-email-input').value = ''; });
$('email-results-form').addEventListener('submit', async e => { e.preventDefault(); if (await sendResultsEmail($('email-input').value.trim(), $('email-status'), $('email-submit-btn'), 'bottom')) $('email-input').value = ''; });
$('print-btn').addEventListener('click', () => window.print());
$('share-btn').addEventListener('click', async () => {
  const btn = $('share-btn');
  try { await navigator.clipboard.writeText(buildShareUrl()); const o = btn.textContent; btn.textContent = '✓ Link Copied!'; setTimeout(() => { btn.textContent = o; }, 2000); }
  catch { prompt('Copy this link:', buildShareUrl()); }
});

/* ─── Interactive tour (house standard, copied from VFI via vre-approval-prep) ── */
const INPUT_TOUR_KEY = 'ptx-tour-seen', RESULTS_TOUR_KEY = 'ptx-results-tour-seen';
const INPUT_TOUR = [
  { id: 'welcome', target: null, label: 'Step 1 of 7', title: 'Welcome: 60 seconds, then it’s all yours', text: 'Your rating can cut your property tax bill, sometimes to zero, but nobody files the form for you. This finds the form, the office, and the deadline where you live. Fill in your real answers as we go; exit anytime.' },
  { id: 'pills', target: '#mode-pills', label: 'Step 2 of 7', title: 'What brings you here?', text: 'Just rated, new home, never filed, or surviving spouse. The cards are the same; which one leads and how the verdict reads changes. Click one.' },
  { id: 'you', target: '#card-you', label: 'Step 3 of 7', title: 'Your state and your rating', text: 'The state sets the program; the rating sets the tier. Tick P&T if your decision letter says permanent and total: several states require it for the full exemption.' },
  { id: 'home', target: '#card-home', label: 'Step 4 of 7', title: 'The home and your ZIP', text: 'The value turns the exemption into dollars. The ZIP finds your county, which picks your office and, where the state publishes one, the exact directory page.' },
  { id: 'assumptions', target: '#assumptions-drawer', label: 'Step 5 of 7', title: 'Dates and details', text: 'All optional. The years let the Missed Years card count what you may be able to recover. Income, age, and wartime service matter only in the states that gate on them.' },
  { id: 'live', target: '#live-strip', label: 'Step 6 of 7', title: 'Your estimate, live', text: 'The dollar figure, the office, and the next deadline update as you answer.' },
  { id: 'gate', target: '#compare-btn', label: 'Step 7 of 7', title: 'Get the filing plan', text: 'Press it, and we’ll walk through the results and the checklist together.' },
];
const RESULTS_TOUR = [
  { id: 'r-hero', target: '#hero-verdict', label: 'Results 1 of 5', title: 'The verdict', text: 'What it’s worth this year, where to file, and the deadline. The label says how much of this we verified on official sources for your state.' },
  { id: 'r-lead', target: '#cards-panel > details:first-child', label: 'Results 2 of 5', title: 'The card that leads', text: 'For your situation, this is the one to read first. Open the others the same way; each carries its sources and the exact question to ask the office.' },
  { id: 'r-file', target: '#card-file', label: 'Results 3 of 5', title: 'How to file', text: 'The office, the official directory link for your county where the state has one, the form with its link, and the documents to attach. Tick documents as you gather them.' },
  { id: 'r-sheet', target: '#letter-sheet', label: 'Results 4 of 5', title: 'Your checklist', text: 'One printable page built from your answers. Download for Word opens the share sheet on a phone. Brackets are the things only you can fill in.' },
  { id: 'r-capture', target: '#email-results-container', label: 'Results 5 of 5', title: 'Don’t lose this', text: 'Email yourself the link; it rebuilds everything on any device. That’s the walkthrough.' },
];
const tourState = { active: false, i: 0, steps: INPUT_TOUR, seenKey: INPUT_TOUR_KEY, timer: null };
function isTourActive() { return tourState.active; }
function tourEls() { return { root: $('tour-root'), spot: $('tour-spotlight'), tip: $('tour-tooltip') }; }
function positionTour() {
  const step = tourState.steps[tourState.i]; if (!step) return;
  const { spot, tip } = tourEls();
  if (!step.target) {
    spot.style.cssText = `top:${scrollY + innerHeight / 2}px; left:50vw; width:0; height:0;`;
    if (!matchMedia('(max-width: 560px)').matches) {
      tip.style.left = Math.max(24, (innerWidth - Math.min(380, innerWidth - 48)) / 2) + 'px';
      tip.style.top = (scrollY + innerHeight / 2 - (tip.offsetHeight || 220) / 2) + 'px';
    }
    return;
  }
  const target = document.querySelector(step.target);
  if (!target || target.offsetParent === null) return;
  const r = target.getBoundingClientRect();
  if (r.width === 0 && r.height === 0) return;
  const pad = 8;
  Object.assign(spot.style, { top: (r.top + scrollY - pad) + 'px', left: (r.left + scrollX - pad) + 'px', width: (r.width + pad * 2) + 'px', height: (r.height + pad * 2) + 'px' });
  const tipH = tip.offsetHeight || 180;
  const below = r.bottom + 16 + tipH < innerHeight || r.top < tipH + 32;
  if (matchMedia('(max-width: 560px)').matches) { tip.style.top = ''; tip.style.left = ''; }
  else {
    tip.style.top = (below ? r.bottom + scrollY + 14 : r.top + scrollY - tipH - 14) + 'px';
    tip.style.left = Math.max(12, Math.min(r.left + scrollX, innerWidth - tip.offsetWidth - 12)) + 'px';
  }
}
function showTourStep(i, dir = 1) {
  if (i < 0 || i >= tourState.steps.length) return endTour();
  const step = tourState.steps[i];
  if (step.target) { const el = document.querySelector(step.target); if (!el || el.offsetParent === null) return showTourStep(i + dir, dir); }
  tourState.i = i;
  const visible = tourState.steps.filter(s => { if (!s.target) return true; const el = document.querySelector(s.target); return el && el.offsetParent !== null; });
  $('tour-step-label').textContent = `${step.label.split(' ')[0]} ${visible.indexOf(step) + 1} of ${visible.length}`;
  $('tour-title').textContent = step.title;
  $('tour-text').textContent = step.text;
  $('tour-next').textContent = i === tourState.steps.length - 1 ? 'Done ✓' : 'Next';
  $('tour-back').style.visibility = i === 0 ? 'hidden' : 'visible';
  if (step.id === 'assumptions') $('assumptions-drawer').open = true;
  if (step.id === 'r-file') { const c = $('card-file'); if (c) c.open = true; }
  if (!step.target) window.scrollTo({ top: 0, behavior: 'smooth' });
  else { const target = document.querySelector(step.target); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  setTimeout(positionTour, 350);
}
function startTourWith(steps, seenKey) {
  tourState.steps = steps; tourState.seenKey = seenKey; tourState.active = true; tourState.i = 0;
  $('tour-root').hidden = false;
  showTourStep(0);
  clearInterval(tourState.timer);
  tourState.timer = setInterval(positionTour, 400);
}
function endTour() {
  tourState.active = false;
  clearInterval(tourState.timer);
  $('tour-root').hidden = true;
  try { localStorage.setItem(tourState.seenKey, '1'); } catch {}
}
$('tour-next').addEventListener('click', () => showTourStep(tourState.i + 1, 1));
$('tour-back').addEventListener('click', () => showTourStep(tourState.i - 1, -1));
$('tour-exit').addEventListener('click', endTour);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && tourState.active) endTour(); });
document.addEventListener('click', e => {
  if (!tourState.active || e.detail === 0) return;
  if (e.target.closest('#tour-tooltip') || e.target.closest('#tour-restart')) return;
  if (e.target.closest('#compare-btn') || e.target.closest('.mode-pill')) return;
  const r = $('tour-spotlight').getBoundingClientRect();
  const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
  if (!inside) endTour();
});
$('tour-restart').addEventListener('click', () => startTourWith(INPUT_TOUR, INPUT_TOUR_KEY));
addEventListener('resize', positionTour);

/* ─── Intro: collapse on phones, one tap to expand (content stays in the HTML) ── */
{
  const about = $('about-this-tool');
  if (about && !about.querySelector('.about-more')) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'about-more no-print'; b.textContent = 'Read more';
    b.addEventListener('click', () => { const open = about.classList.toggle('open'); b.textContent = open ? 'Show less' : 'Read more'; });
    about.appendChild(b);
  }
}

/* ─── Init ─────────────────────────────────────────────────────────────── */
setMode('rated');
syncConditionalFields();
loadFromUrl().then(arrived => {
  let tourSeen = true;
  try { tourSeen = localStorage.getItem(INPUT_TOUR_KEY) === '1'; } catch {}
  if (!arrived && !window.__ptxArrivalHadParams && !tourSeen) setTimeout(() => startTourWith(INPUT_TOUR, INPUT_TOUR_KEY), 600);
  updateLiveStrip();
});
