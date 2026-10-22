// Veteran Property Tax Exemption Navigator — FILING layer (office, form, deadline, lookback, renewal,
// documents, sources, confidence) for all 55 jurisdictions. Generated 2026-10-22 by tools/build-filing.mjs
// from data/filing-src/*.json. Edit the JSON, not this file. Confidence: {"verified":55,"reported":0,"unverified":0}.
export const FILING_STAMP = "2026-10-22";
export const FILING = {
 "AK": {
  "state": "AK",
  "officeType": "municipal assessor (borough or city)",
  "officeTypeNote": "Alaska has no counties and no statewide form. The exemption is a mandatory municipal exemption (AS 29.45.030(e)) administered by the assessor of the borough or city that levies property tax; roughly a third of the state (the unorganized borough outside taxing cities) levies no property tax at all, so there is nothing to claim there. File with the assessor's or finance office of the taxing municipality (e.g. Municipality of Anchorage Property Appraisal, Fairbanks North Star Borough Assessing, Kenai Peninsula Borough Assessing).",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": "Alaska DCCED Office of the State Assessor: Tax Jurisdictions (municipal assessor contacts)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://dcra-cdo-dcced.opendata.arcgis.com/",
   "note": "The state DOES publish an official directory: DCCED Office of the State Assessor 'Tax Jurisdictions' (https://www.commerce.alaska.gov/web/dcra/OfficeoftheStateAssessor/TaxJurisdictions) lists every property-taxing municipality's assessor with phone and email. Every commerce.alaska.gov HTML page returned HTTP 403 to automated checks on 2026-10-21 (bot protection), so per the sourcing rules it is not placed in url; a human browser should load it. The fallbackUrl is DCCED's Community Database Online (200), which carries local-government contacts per community but is not assessor-specific."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Senior Citizen / Disabled Veteran Property Tax Exemption Application (municipal form; each municipality issues its own)",
    "number": null,
    "url": "https://www.commerce.alaska.gov/web/Portals/4/pub/OSA/2023%20Senior%20Exemption.pdf",
    "revision": "Anchorage form rev 3.15.22 (2023 tax year), hosted by the Office of the State Assessor as a sample",
    "filedWith": "municipal assessor",
    "note": "AS 29.45.030(f): 'An exemption may not be granted under (e) of this section except upon written application for the exemption. Each municipality shall, by ordinance, establish procedures and deadlines for filing the application.' The linked PDF is the Municipality of Anchorage application as posted on the State Assessor's site; use the current form from your own municipality."
   }
  ],
  "deadline": {
   "type": "varies-by-county",
   "date": null,
   "text": "Set by each municipality by ordinance (AS 29.45.030(f)). The state regulation uses January 15 as the default: 3 AAC 135.040(a) 'Exemption applications filed after January 15 of the assessment year, or after a date provided by ordinance as specified in AS 29.45.030(f), must be accompanied by an affidavit stating the reason for the late filing.' Municipal examples seen on municipal forms: Anchorage March 15 (OSA-hosted form: 'received or postmarked on or before March 15'); North Slope Borough January 15; Dillingham February 15; Unalaska and Haines March 31; Mat-Su Borough April 30 (the non-Anchorage dates come from municipal PDFs surfaced in search and were not individually re-verified)."
  },
  "effective": "Assessment year for which the application is filed; the applicant must own and occupy the home as primary residence and permanent place of abode as of January 1 of that year (Anchorage form; AS 29.45.110 assessment date). Not prorated. AS 29.45.030(f): if approved 'after taxes have been paid, the amount of tax that the claimant has already paid for the property exempted shall be refunded.'",
  "lateFiling": "AS 29.45.030(f): 'The governing body of the municipality for good cause shown may waive the claimant's failure to make timely application for exemption and authorize the assessor to accept the application as if timely filed.' A late application must carry an affidavit stating the reason (3 AAC 135.040(a)). Municipal codes narrow 'good cause' (Anchorage: serious medical condition of the applicant or immediate family; Haines: medical condition or extraordinary event, with a July 31 hard stop).",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No statewide provision for prior-year refunds. The statute refunds only the current year's tax if the application is approved after payment (AS 29.45.030(f)); a late application for a past year depends entirely on the municipal governing body's good-cause waiver."
  },
  "renewal": {
   "type": "varies",
   "text": "Statute is silent on annual re-filing but lets the assessor 'require proof under this subsection at any time' (AS 29.45.030(f)); each municipality sets the rule by ordinance. Anchorage: 'A qualified senior citizen or disabled veteran need not file an application for successive tax years if there is no change in ownership, in residency or permanent place of abode, status of disability, or other factor affecting qualification.' Some municipalities (e.g. Unalaska per its form) require annual receipt. Anchorage requires a VA letter dated within one year on initial application."
  },
  "ratingChange": "Eligibility requires a rating of 50 percent or more (AS 29.45.030(i)(1)). The owner must 'notify the assessor of any change in ... status of disability or other factor affecting qualification' (Anchorage form); a drop below 50% ends the exemption, and failure to notify can mean back taxes, penalties and interest.",
  "move": "The exemption attaches to the primary residence and permanent place of abode; a new home means a new application with the assessor of the municipality where it sits, by that municipality's deadline. Only one exemption per property and (in Anchorage) the applicant may not hold a residential exemption on another property.",
  "onlineFiling": {
   "available": null,
   "text": "Varies by municipality. Anchorage accepts the application by mail, in person, or by email (propappcs@muni.org); no statewide portal exists."
  },
  "documents": [
   "Evidence of the VA (or branch-of-service) disability rating of 50 percent or more; statute requires the assessor to 'require a disabled veteran ... to provide evidence of the disability rating' (AS 29.45.030(f)); Anchorage wants a VA letter dated within one year",
   "Proof of separation 'under a condition that is not dishonorable' (AS 29.45.030(i)(1)(A)), typically DD-214",
   "Proof of Alaska residency / Permanent Fund Dividend eligibility if the municipality has adopted the PFD test under AS 29.45.030(f)",
   "Proof of ownership and occupancy as primary residence on January 1 (parcel ID; trust pages if held in trust, per Anchorage)",
   "Widow/widower claimants: marriage and death certificates (Anchorage)"
  ],
  "survivingSpouse": "AS 29.45.030(e): the widow or widower 'at least 60 years of age' of a person who qualified keeps the $150,000 exemption until remarriage. A municipality 'may by ordinance approved by the voters' extend it to a widow/widower under 60 of a disabled veteran, or of a service member who died from a service-connected cause. Statute does not require the veteran to have been receiving the exemption, only to have qualified.",
  "appeal": "AS 29.45.030(e): an assessor's determination that property was conveyed primarily to obtain the exemption 'may be appealed under AS 44.62.560 - 44.62.570' (superior court review). Denials on other grounds follow the municipality's board of equalization procedure (not verified here).",
  "statute": "AS 29.45.030(e)-(i); 3 AAC 135.040; AS 29.45.050 (optional municipal exemptions)",
  "sourceUrls": [
   {
    "url": "https://www.commerce.alaska.gov/web/Portals/4/pub/OSA/2023%20Senior%20Exemption.pdf",
    "title": "Office of the State Assessor hosted copy: Municipality of Anchorage Senior Citizen / Disabled Veteran Exemption Application (2023)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.muni.org/Departments/finance/property_appraisal/Pages/default.aspx",
    "title": "Municipality of Anchorage Property Appraisal (current forms)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://dcra-cdo-dcced.opendata.arcgis.com/",
    "title": "DCCED Community Database Online",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[Veteran Exemption].summary",
    "issue": "Rating basis is correct ($150,000; 50%+). Could add that the exemption is municipal-only (no tax in most of the unorganized borough), applies to the primary residence only, and that a widow/widower 60+ keeps it (survivingSpouse currently false). HB 169 (2025) to raise the cap to $250,000 had not advanced past committee referral as of the last action found.",
    "source": null
   }
  ],
  "notes": "Statute and regulation text pulled from the Legislature's print endpoint (the normal statutes.asp page is JS-rendered). The akleg 'basis' human-facing URLs are https://www.akleg.gov/basis/statutes.asp#29.45.030 and https://www.akleg.gov/basis/aac.asp#3.135.040 (both 200). All commerce.alaska.gov HTML pages, including the Office of the State Assessor and its Tax Jurisdictions directory, returned 403 to curl and WebFetch; only the Portals PDF path served 200. The 2026 Anchorage veteran application URL indexed by search (muni.org ... UPDATED 2026 Veteran Exemption.pdf) returned 404; the Property Appraisal landing page is 200. The only state-hosted municipal form found is the 2023 Anchorage form, so municipal deadline examples other than Anchorage are from search snippets of municipal PDFs and should be re-checked before display. Link note 2026-10-21: akleg.gov (AS 29.45.030, 3 AAC 135.040, HB 169) returns HTTP 403 to automated checks, so those three links were removed from this row; the statute cites stay in the text."
 },
 "AL": {
  "state": "AL",
  "officeType": "county tax assessing official (Revenue Commissioner or Tax Assessor)",
  "officeTypeNote": "Alabama has no VA-rating-based homestead break; a 100% P&T veteran claims the general permanent-and-total-disability principal residence exemption (Ala. Code 40-9-21, local 'H-3' homestead). File with the tax assessing official of the county where the home sits (in most counties the Revenue Commissioner; a few still split Tax Assessor / Tax Collector). The Specially Adapted Housing exemption (40-9-20) is claimed with the same office; the VA-grant vehicle exemption is a license-plate matter handled by the county license plate issuing official and is not covered by this filing block.",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.revenue.alabama.gov/property-tax/county-offices-appraisal-assessment-records/",
   "label": "Alabama Department of Revenue: County Offices (appraisal and assessment records), all 67 counties",
   "countyUrlPattern": "https://www.revenue.alabama.gov/property-tax/county-offices-appraisal-assessment-records/#{county}",
   "slugRule": "Single page with per-county anchors; {county} is the county name in Title Case with spaces removed (e.g. #Jefferson, #Mobile, #StClair as shown in the page anchors; verify multi-word anchors before relying on them).",
   "fallbackUrl": "https://www.revenue.alabama.gov/division/property-tax/",
   "note": "One page listing each county's Revenue Commissioner / Tax Assessor with address, phone, and links to the county's own assessment portal."
  },
  "forms": [
   {
    "programRef": "Homestead Exemption",
    "name": "Homestead / principal residence exemption form affidavit (county-issued; no statewide application form)",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "county tax assessing official",
    "note": "Ala. Code 40-9-21.1(a): the claimant 'shall initially claim the exemption in person or by mail on a form affidavit provided by the tax assessing official,' who may also accept it electronically. Each county issues its own affidavit."
   },
   {
    "programRef": "Homestead Exemption",
    "name": "Physician's Affidavit of Permanent and Total Disability",
    "number": "PT-PA-1",
    "url": "https://www.revenue.alabama.gov/wp-content/uploads/2022/05/PhysiciansAffidavit_PT-PA-1.pdf",
    "revision": null,
    "filedWith": "county tax assessing official",
    "note": "Only needed when the claimant is NOT receiving a disability pension or annuity. A veteran drawing VA disability compensation documents disability with the VA award letter instead (Rule 810-4-1-.23(7)(c): proof 'may include the receipt of a pension or annuity due to disability from ... a state or federal governmental agency'). Requires two Alabama-licensed physicians, one actively treating the disability."
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "12-31",
   "text": "Ala. Admin. Code r. 810-4-1-.23(8): 'Application may be made between October 1 and December 31 for the exemption to be applied for the current year or application may be made at any time during the year for the exemption to be applied for the following year.' Owner must hold and occupy the homestead as of the October 1 lien date. Ala. Code 40-7-2.1(b) also lets the assessor accept homestead applications Jan 1 to Sep 30, effective the following Oct 1."
  },
  "effective": "Tax year beginning October 1 of the year in which the claim is filed (Oct 1 to Dec 31 filings apply to the current tax year; filings at any other time apply to the following tax year). Not prorated.",
  "lateFiling": "A claim filed after December 31 simply applies to the following tax year (Rule 810-4-1-.23(8)). No separate late-filing petition or penalty process was found in the statute or ADOR rule.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "Neither Ala. Code 40-9-21 / 40-9-21.1 nor Rule 810-4-1-.23 provides for refunds of prior-year taxes; the rule only allows application 'for the current year' or 'for the following year.'"
  },
  "renewal": {
   "type": "none",
   "text": "HB155 (2026 Regular Session, enrolled, effective October 1, 2026) amended Ala. Code 40-9-21.1(b)(2): a veteran 'determined to be permanently and totally disabled by the United States Department of Veterans Affairs ... shall not be required to annually claim the exemption nor verify eligibility for the exemption after the initial qualification.' The release 'shall terminate immediately upon the death of the qualifying ... veteran or upon the establishment of a new homestead.' Before Oct 1, 2026 (and still for non-veteran P&T claimants) the county mails an annual verification affidavit to sign and return (40-9-21.1(b)(1); 40-7-2.1(b))."
  },
  "ratingChange": "The 40-9-21 exemption turns on permanent-and-total disability, not a percentage. If the VA removes P&T status the qualifying condition ceases and the exemption ends; the statute does not spell out a notice procedure for veterans, but 40-7-2.1(b) ties the exemption to continued eligibility ('until the eligibility ceases').",
  "move": "The HB155 release from annual verification ends 'upon the establishment of a new homestead'; a new claim must be filed with the assessing official of the county where the new home is located, by December 31 for that tax year.",
  "onlineFiling": {
   "available": null,
   "text": "Ala. Code 40-9-21.1(a) and (c) authorize each tax assessing official to 'establish a process to receive the form affidavit electronically' using a form approved by the Department of Revenue; availability varies by county."
  },
  "documents": [
   "VA award or rating letter establishing permanent and total disability (HB155 keys the no-reverification release to a VA P&T determination; VA disability compensation also satisfies the rule's 'pension or annuity due to disability from ... a federal governmental agency' proof)",
   "Form PT-PA-1 from two Alabama-licensed physicians, only if not receiving a disability pension or annuity",
   "Evidence the home is the owner-occupied single-family principal residence as of October 1 (county affidavit; counties set their own proof requirements, e.g. driver's license at the property address)",
   "Deed or other proof of ownership (county practice; not spelled out in the state rule)"
  ],
  "survivingSpouse": "The 40-9-21 P&T exemption is personal to the disabled taxpayer; HB155 ends the veteran's verification release at death. The Specially Adapted Housing exemption (Ala. Code 40-9-20) extends to the unremarried surviving spouse per the existing data layer; statute text not opened in this pass.",
  "appeal": "Not addressed in the ADOR rule or 40-9-21.1. Alabama assessment appeals generally run through the county Board of Equalization; not verified for exemption denials in this pass.",
  "statute": "Ala. Code 40-9-19, 40-9-21, 40-9-21.1 (as amended by HB155, 2026 RS, eff. 10/1/2026), 40-7-2.1; Ala. Admin. Code r. 810-4-1-.23; SAH: 40-9-20",
  "sourceUrls": [
   {
    "url": "https://www.revenue.alabama.gov/property-tax/homestead-exemptions/",
    "title": "Alabama Department of Revenue: Homestead Exemptions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://admincode.legislature.state.al.us/api/rule/810-4-1-.23",
    "title": "Ala. Admin. Code r. 810-4-1-.23 Homestead and Principal Residence Exemptions From Property Tax (PDF)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://alison.legislature.state.al.us/files/pdf/SearchableInstruments/2026RS/HB155-enr.pdf",
    "title": "HB155 (2026 RS) Enrolled: P&T disabled veterans released from annual homestead verification",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.alabama.gov/wp-content/uploads/2022/05/PhysiciansAffidavit_PT-PA-1.pdf",
    "title": "ADOR Form PT-PA-1 Physician's Affidavit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.alabama.gov/property-tax/county-offices-appraisal-assessment-records/",
    "title": "ADOR County Offices directory",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[Homestead Exemption].summary",
    "issue": "Summary could add that, effective Oct 1, 2026, VA-rated P&T veterans no longer get the annual mail-in verification affidavit (HB155, 2026 RS). Dollar layer unchanged.",
    "source": "https://alison.legislature.state.al.us/files/pdf/SearchableInstruments/2026RS/HB155-enr.pdf"
   }
  ],
  "notes": "Deadline and renewal were read directly from the ADOR rule PDF and the enrolled HB155 PDF (both extracted with pdftotext). The alison.legislature.state.al.us Code of Alabama pages return 200 but render client-side, so the current 40-9-20 and 40-9-21 statute text was not read; the rule and bill quote the operative language. HB155 shows House passage 2/10/26 and Senate passage 4/7/26 on the enrolled copy; an act number was not located on a primary source. PT-PA-1 PDF returned 200 but was not opened. No statewide homestead application form exists; the form is county-issued."
 },
 "AR": {
  "state": "AR",
  "officeType": "county collector",
  "officeTypeNote": "Arkansas is unusual: the claim goes to the COUNTY COLLECTOR (the office that bills and collects), not the county assessor. Ark. Code 26-3-306(b)(1)(A): a disabled veteran 'desiring to claim an exemption shall furnish to the county collector a letter from the department.' DFA's fiscal impact statement on HB1072 (Act 876 of 2025) restates it: 'Current law requires a disabled veteran or surviving spouse to provide a letter to the county collector from the VA.' The assessor still assesses the homestead and personal property each year (assess by May 31) and administers the separate Amendment 79 homestead credit, which a person claiming this exemption may not also take (26-3-306(e)). The Commissioner of State Lands' veterans guide tells readers to 'contact your local county assessor's office ... to apply'; the statute, DFA and every county collector page reviewed say collector. In most counties both offices are in the same courthouse.",
  "officeLocator": {
   "tier": 2,
   "url": "https://www.dfa.arkansas.gov/office/arkansas-assessment-coordination-division/county-officials/",
   "label": "Arkansas DFA Assessment Coordination Division: County Officials (all 75 county ASSESSORS; no collector directory)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.dfa.arkansas.gov/office/arkansas-assessment-coordination-division/",
   "note": "No official state directory of county collectors exists. The ACD County Officials table lists assessors only (zero 'collector' mentions on the page). The Association of Arkansas Counties (arcounties.org) publishes a county list and a collectors' association board page, not a 75-county collector directory. Arkansas.gov's Property Tax Center (portal.arkansas.gov/service/property-tax-center/) lets a user pick a county and routes to that county's payment/collector page, but it returned 403 to automated checks on 2026-10-21 and is not listed. Practical route: look up the county assessor here, then ask for the collector's office (same courthouse in most counties)."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "VA letter verifying eligibility (VA Summary of Benefits letter); no state application form",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "county collector",
    "note": "Ark. Code 26-3-306(b)(1)(A) requires 'a letter from the department verifying the fact that the disabled veteran is in receipt of special monthly compensation for the loss of or the loss of use of one (1) or more limbs, total blindness in one (1) or both eyes, or for service-connected one hundred percent (100%) total and permanent disability.' Collectors (Saline, Benton, Washington, Pope, White) all name the VA Summary of Benefits letter. Act 876 of 2025, 26-3-306(b)(3)(A)-(B): the letter 'is required to be submitted only one (1) time'; 'Annual submission of a letter from the department is not required.' Several county pages still say 'must be turned in annually' (pre-Act 876 copy; see renewal)."
   },
   {
    "programRef": "*",
    "name": "Surviving spouse / minor dependent child affidavit (county-provided; required by statute, no state form)",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "county collector",
    "note": "26-3-306(b)(1)(B)(ii) and (b)(2)(B): in addition to the VA letter, the surviving spouse or minor child 'shall furnish the county collector with an affidavit' stating that he or she is the surviving spouse or minor dependent child of the named deceased veteran (or of the member killed/died on duty, MIA, or who died of service-connected causes). Saline, Benton and Washington counties post their own downloadable 'Surviving Spouse Affidavit'; Benton requires it notarized. Download URLs sit behind sites that blocked automated checks and are not listed."
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "10-15",
   "text": "The statute sets no application deadline. The practical cutoff is the statutory tax-payment deadline: taxes are payable from the first business day in March through October 15 (Ark. Code 26-35-501; ACD FAQ), and collectors state it as the filing date: 'Deadline to submit Summary of Benefits is October 15th' (Washington, Pope, White, Saline). Benton gives surviving spouses a December 31 cutoff for the affidavit and letter for the following year's bill. Collectors urge filing as soon as the letter arrives (VA mails Summary of Benefits letters each spring)."
  },
  "effective": "From the date eligibility is established, not the January 1 lien date: 26-3-306(f)(1): 'the person shall be exempt from the date the person's eligibility is established regardless of the date the lien for the property taxes attached.' Sale or purchase of a homestead is prorated to the date of sale (26-3-306(a)(1)(A)(ii)). One-time-letter rule: assessment years beginning on or after Jan 1, 2025 (Act 876, sec. 3). Homestead acreage raised from 40 to 160 contiguous acres: assessment years from Jan 1, 2025 (Act 407, sec. 2). Trust- or single-member-LLC-owned homesteads: assessment years from Jan 1, 2026 (Act 880, sec. 3).",
  "lateFiling": "No late-filing penalty or bar; the collector applies the exemption once the letter is on file, effective from the eligibility date (26-3-306(f)(1)). But collectors do not refund years already paid: 'Since Personal/Real estate taxes are considered voluntarily paid, this office is unable to refund for previous years of DAV eligibility if the letter was not turned in to us' (Washington; same text on Saline, Pope, White).",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "26-3-306 contains no refund-of-prior-years provision (full section text reviewed; Acts 407, 876 and 880 of 2025 add none). County collectors state they cannot refund prior years' taxes paid before the letter was on file. The only lookback runs the other way: if an exemption 'was granted erroneously,' the collector 'May levy up to three (3) years of the property taxes that should have been paid' plus penalties, interest and costs (26-3-306(g), Act 876)."
  },
  "renewal": {
   "type": "none",
   "text": "Act 876 of 2025 (assessment years from Jan 1, 2025), 26-3-306(b)(3): 'A letter from the department ... is required to be submitted only one (1) time to establish eligibility'; 'Annual submission of a letter from the department is not required.' DFA: 'A county collector would not require an eligible person to annually present proof'; 'The Assessment Coordination Division (ACD) will notify county collectors of this change.' Duty to report: the taxpayer 'shall notify the county collector' of a legal status change ending eligibility or any 'change in the property description, ownership, use, or occupancy' (26-3-306(b)(3)(C)). County practice lags: Benton's page reflects the one-time rule for veterans but requires surviving spouses to file a notarized affidavit and Summary of Benefits by Dec 31 each year; Saline, Washington, Pope and White pages (snapshots May-Oct 2026) still say the letter 'must be turned in annually.' A veteran told to re-file can cite Act 876."
  },
  "ratingChange": "A veteran newly rated 100% P&T (or awarded SMC for loss of use of a limb or blindness) furnishes the VA letter to the county collector once; the exemption runs from the date eligibility is established (26-3-306(f)(1)). If the rating later drops so the veteran 'no longer qualifies,' the taxpayer 'shall notify the county collector' (26-3-306(b)(3)(C)(i)). An erroneously granted exemption can be clawed back up to three years with penalties and interest (26-3-306(g)).",
  "move": "Within Arkansas: a taxpayer 'who changes his or her homestead shall submit a new letter under this section to the county collector of the county in which the new homestead is located' (26-3-306(b)(3)(D)); the exemption applies 'regardless of where the homestead is located in the state' (26-3-306(f)(2)), and the prior county's collector must share the eligibility documentation on request (26-3-306(f)(3)). Sale and purchase are each prorated to the date of sale (26-3-306(a)(1)(A)(ii)); collectors ask for the settlement papers and ask the veteran to notify the prior county. Only Arkansas 'citizens and residents' qualify (26-3-306(c)).",
  "onlineFiling": {
   "available": null,
   "text": "No state portal. Several collectors accept the scanned letter by email: Benton (Veterans@bentoncountyar.gov), Washington (Collector.DAV@washingtoncountyar.gov), Saline (veterans@salinecollector.org); Pope and White list mail or in person. Varies by county."
  },
  "documents": [
   "VA letter (Summary of Benefits) verifying special monthly compensation for loss or loss of use of one or more limbs, total blindness in one or both eyes, or service-connected 100% total and permanent disability (26-3-306(b)(1)(A)); some collectors also ask for the rating decision as 'proof of eligibility date'",
   "Surviving spouse or minor dependent child: VA letter verifying the deceased veteran's qualifying status at death (or that the member was KIA/died on duty/MIA, or died of service-connected causes with DIC entitlement) PLUS a signed affidavit of relationship (26-3-306(b)(1)(B), (b)(2)); Benton requires the affidavit notarized",
   "Be listed as owner on the real estate and on the current personal-property assessment with the county assessor (assess by May 31); collectors say the veteran or spouse 'must be on the Personal Property Assessment and Title'",
   "If the homestead is in a revocable or irrevocable trust or a single-member/spousal LLC (assessment years from 2026): a 'signed, notarized, and file-marked copy of the irrevocable trust,' or for an LLC the proof of eligibility required under 26-26-1118(b)(2)(A)(ii) (Act 880 of 2025, 26-3-306(b)(3) as added by that act)",
   "On a purchase or sale mid-year: settlement papers so the collector can prorate (26-3-306(a)(1)(A)(ii); county practice)"
  ],
  "survivingSpouse": "26-3-306(a)(1)(B): on the veteran's death the surviving spouse and minor dependent children 'shall be exempt from payment of all state taxes on the homestead and personal property' they own; also the spouse and minor children of a member killed or who died within the scope of military duties, who is MIA, or a veteran who died of service-connected causes 'as certified by the department.' The spouse qualifies 'so long as the surviving spouse remains unmarried'; the exemption 'is reinstated upon the termination of the surviving spouse's subsequent marriage'; children qualify 'during their minority.' Filing: VA letter plus affidavit to the county collector (26-3-306(b)(1)(B), (b)(2)). Collectors add that the widow must be 'in receipt of DIC compensation' (Washington, Pope, White). Act 876's one-time rule applies to the letter; Benton still requires the spouse affidavit annually by Dec 31.",
  "appeal": "No exemption-denial appeal path is written into 26-3-306 and none was located on a state source. Valuation disputes go to the county equalization board and then county court (ACD Taxpayer Bill of Rights; ACD FAQ). The statute makes false claims a violation fined $100 to $1,000 (26-3-306(d)). Not verified beyond this.",
  "statute": "Ark. Code Ann. § 26-3-306 (disabled veterans, surviving spouses, and minor dependent children), as amended by Act 407 of 2025 (HB1129, 160-acre homestead), Act 876 of 2025 (HB1072, one-time letter; collector clawback) and Act 880 of 2025 (HB1809, trust/LLC homesteads); payment deadline § 26-35-501; Amendment 79 homestead credit § 26-26-1118 (not stackable, § 26-3-306(e))",
  "sourceUrls": [
   {
    "url": "https://www.arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F2025R%2FPublic%2FACT876.pdf",
    "title": "Act 876 of 2025 (HB1072): one-time VA letter to county collector; notify collector of changes; new (g) clawback; eff. assessment years from 1/1/2025",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F2025R%2FPublic%2FACT407.pdf",
    "title": "Act 407 of 2025 (HB1129): homestead definition raised from 40 to 160 contiguous acres; eff. 1/1/2025",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F2025R%2FPublic%2FACT880.pdf",
    "title": "Act 880 of 2025 (HB1809): trust- and LLC-owned homesteads; documents to furnish the county collector; eff. 1/1/2026",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://arkleg.state.ar.us/Home/FTPDocument?path=%2FAssembly%2F2025%2F2025R%2FFiscal+Impacts%2FHB1072-DFA1.pdf",
    "title": "Arkansas DFA Fiscal Impact Statement, HB1072 (1/3/2025): current law requires the VA letter to the county collector; ACD to notify collectors",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.arkleg.state.ar.us/Bills/Detail?id=HB1072&ddBienniumSession=2025%2F2025R",
    "title": "arkleg bill page HB1072 / Act 876 (links enrolled act, amendments, DFA fiscal impacts)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "http://web.archive.org/web/20241014105238/https://portal-assets.ark.org/28/files/COSL%20Veterans%20Guide%20to%20Property%20Taxes.pdf",
    "title": "ARCHIVED (Wayback 2024-10-14): Arkansas Commissioner of State Lands, Veterans Guide to Property Taxes (2019): quotes 26-3-306(a); May 31 assess / Oct 15 pay dates. Live host portal-assets.ark.org timed out on 2026-10-21.",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "http://web.archive.org/web/20230329130325/http://www.veterans.arkansas.gov/benefits/state-benefits",
    "title": "ARCHIVED (Wayback 2023-03-29): Arkansas Dept. of Veterans Affairs, State Benefits: homestead and personal property exemption (pre-Act 876 text; says annual re-certification). Live page removed; ADVA's current 'Guide to AR Property Taxes' nav link returns 404.",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dfa.arkansas.gov/office/arkansas-assessment-coordination-division/county-officials/",
    "title": "Arkansas Assessment Coordination Division: County Officials (assessor directory)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dfa.arkansas.gov/office/arkansas-assessment-coordination-division/",
    "title": "Arkansas Assessment Coordination Division home",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dfa.arkansas.gov/wp-content/uploads/faqs-2023.pdf",
    "title": "ACD Property Tax FAQs (2023): payment dates (26-35-501), lien date, equalization board, 26-3-306 reference",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dfa.arkansas.gov/wp-content/uploads/ARTaxPayerBOR.pdf",
    "title": "ACD Arkansas Taxpayer Bill of Rights (appeal procedure to the equalization board)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.arcounties.org/site/assets/files/4879/county_collectors.pdf",
    "title": "Association of Arkansas Counties, County Collectors 2018 Procedures Manual: reproduces full text of Ark. Code 26-3-306 (a)-(f) as of the 2017 session (pp. 20-21, 28-29). Secondary: statute reproduction, used because the official Lexis code viewer is unreadable by automated tools.",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://arkleg.state.ar.us/Home/FTPDocument?path=%2FAssembly%2FMeeting+Attachments%2F770%2FI15935%2FProperty+Tax+Overview%2C+PowerPoint%2C+AAC.pdf",
    "title": "AAC Arkansas Property Tax Overview (legislative committee attachment on arkleg): 26-3-306 summary",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://salinecounty.org/government/collector/tax_info/disabled_veteran_exemption_.php",
    "title": "Saline County Collector: Disabled Veteran Exemption (how to apply, Oct 15, no prior-year refunds, email filing)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "http://web.archive.org/web/20251014040220/https://bentoncountyar.gov/collector/veteran-information/",
    "title": "ARCHIVED (Wayback 2025-10-14): Benton County Collector, Veteran Information (one-time letter per Act 876; spouse affidavit by Dec 31; email filing). Live site returns 403 to automated checks.",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "http://web.archive.org/web/20260512065156/https://www.washingtoncountyar.gov/government/departments-a-e/collector/tax-exemption-for-disabled-veterans",
    "title": "ARCHIVED (Wayback 2026-05-12): Washington County Collector, Tax Exemption for Disabled Veterans (documents, Oct 15, proration, no refunds). Live site returns 403 to automated checks.",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.popecountyar.gov/tax-exemption-for-disabled-veterans-dav",
    "title": "Pope County Collector: Tax Exemption for Disabled Veterans (DAV)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://whitecountycollectorar.gov/veteran-tax-credit/",
    "title": "White County Collector: Disabled Veteran Tax Credit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[0].summary",
    "issue": "Summary says 'Full exemption from ALL property taxes on homestead and personal property.' The statute exempts 'all state taxes on the homestead and personal property' (26-3-306(a)(1)(A)(i)); collectors state that special improvement district assessments, city liens, sanitation fees, timber and land-only parcels are NOT covered, and personal property means only non-commercial items registered to the veteran (Act 880). Suggest 'all property taxes' with a note excluding improvement-district assessments and liens. Also consider noting the 2025 changes: homestead up to 160 contiguous non-commercial acres (Act 407) and trust/LLC-owned homesteads from 2026 (Act 880).",
    "source": "https://www.arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F2025R%2FPublic%2FACT880.pdf"
   }
  ],
  "notes": "Second pass (2026-10-21). Primary sources opened: enrolled Acts 407, 876 and 880 of 2025 (arkleg PDFs), DFA fiscal impact statement on HB1072, ACD directory/FAQ/Taxpayer Bill of Rights, and archived copies of the Commissioner of State Lands veterans guide and the ADVA state-benefits page. The current codified text of 26-3-306 is published only through the LexisNexis viewer linked from arkleg and dfa.arkansas.gov, which is a JavaScript shell with no readable text (confirmed twice, including via WebFetch); no Wayback copy exists. The base text of (a)-(f) was therefore read from the Association of Arkansas Counties 2018 Collectors Procedures Manual, which reproduces the section verbatim through the 2017 session; the 2025 acts amend exactly the subdivisions it shows ((a)(2)(A), (b) adding (3), new (g)), and DFA's fiscal statement independently confirms the (b)(1)(A) collector-letter rule. Downgrade to 'reported' if that reproduction is not accepted as a statute source. Two 2025 acts (876 and 880) each add a '(b)(3)'; the codifier will renumber, so cite Act sections rather than subdivision numbers for the trust/LLC documents. Unverifiable or blocked: Pulaski County collector (pulaskicountytreasurer.net 403, no Wayback copy); live Benton and Washington collector pages (403; archived copies used); portal.arkansas.gov Property Tax Center (403); ADVA's 'Guide to AR Property Taxes' (404 at every variant; the COSL PDF appears to be the document it pointed to); Arkansas AG Opinions 2010-093 (annual-letter question, superseded by Act 876) and 2015-086 (no retroactive abatement for prior years) exist only behind a JavaScript search on arkansasag.gov and were not opened, so they are not cited. No exemption-denial appeal path was found on any source. Deadline and no-refund practice rest on county collector pages as the permitted second source; the statute itself sets no application deadline and no refund rule. Prior pass's dataCorrections item (details said 'recertified annually') is already fixed in normalized-data.js and was dropped."
 },
 "AS": {
  "state": "AS",
  "noProgram": true,
  "text": "American Samoa levies no territorial real property tax, so there is no veteran property tax exemption to claim. Title 11 (Revenue) of the American Samoa Code Annotated contains chapters for general provisions, federal tax liens, income tax, Internal Revenue Code amendments, miscellaneous taxes (machine and device tax, wage tax), hotel occupancy tax, excise taxes on imports and exports, secondhand imported items tax, and business incentive and financing chapters; none imposes a tax on real property or land. The American Samoa Government Tax Office (Department of the Treasury, tel. (684) 633-4181) administers the territorial income tax (Form 390) and posts no property tax forms. Most land is communal and held under matai title, which is a further reason no parcel-based tax exists.",
  "officeLocator": {
   "tier": 3,
   "url": "https://www.americansamoa.gov/tax-office",
   "label": "American Samoa Government: Tax Office (Department of the Treasury)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.americansamoa.gov/",
   "note": "Listed only so the tool can point veterans to the territorial tax agency; it has no property tax function."
  },
  "sourceUrls": [
   {
    "url": "https://asbar.org/legal-resources/code-annotated/code-annotated-by-title-and-chapter/",
    "title": "American Samoa Code Annotated by Title and Chapter (American Samoa Bar Association): Title 11 Revenue chapter list",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://asbar.org/section/title-11-revenue/chapter-06-miscellaneous-taxes/",
    "title": "A.S.C.A. Title 11, Chapter 06 Miscellaneous Taxes (machine and device tax, wage tax)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://asbar.org/section/title-11-revenue/chapter-01-general-provisions-title-11-revenue/",
    "title": "A.S.C.A. Title 11, Chapter 01 General Provisions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.osas.as/copy-of-asac-2024-edition-5/all-titles-2023-ed.",
    "title": "Office of the Secretary of American Samoa: Title 11 Revenue chapter index (2023 ed.)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.americansamoa.gov/tax-office",
    "title": "American Samoa Government: Tax Office, Department of the Treasury (income tax forms, phone)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://asbar.org/taxation-d73/",
    "title": "ASBA case digest, Taxation (historic land-tax cases only; no current property tax statute)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [],
  "notes": "Absence is established from the structure of A.S.C.A. Title 11 (no real property tax chapter) and from the Tax Office page (income tax only); no statute states 'there is no property tax' in those words. The ASBA taxation case digest has a 'Property Taxes' heading that cites early High Court cases (Government v. Bird) on a since-superseded land tax; nothing current. PacLII's copy of Title 11 returned 403 and GAO's 1996 Insular Areas Update does not address property tax, so neither is cited. The existing normalized-data.js row (propertyTax.programs: []) is correct."
 },
 "AZ": {
  "state": "AZ",
  "officeType": "county assessor",
  "officeTypeNote": "File with the COUNTY ASSESSOR of the county where the home is located (ARS 42-11152(A); ADOR: 'Property tax exemptions are administered by the County Assessor'). Not the county treasurer, which bills and collects.",
  "officeLocator": {
   "tier": 1,
   "url": "https://azdor.gov/sites/default/files/2023-03/PROPERTY_AssessorContacts.pdf",
   "label": "Arizona Department of Revenue: County Assessor Contact Information (PDF, all 15 counties)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://azdor.gov/business/property-tax",
   "note": "ADOR's Property Tax page links this PDF directory of county assessors (address, phone, website) plus a companion County Treasurer list and a county map."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Affidavit of Individual Tax Exemption for Veterans",
    "number": "DOR Form 82514V",
    "url": "https://www.mohave.gov/media/tbfdphzf/veterans-exemption-affidavit-82514v.pdf",
    "revision": "Revised 12/2024",
    "filedWith": "county assessor",
    "note": "State ADOR form, but ADOR says the forms 'are available from the County Assessor'; azdor.gov does not host 82514V itself. The URL is Mohave County's copy of the DOR form; every county assessor distributes the same form (Maricopa wraps it in its own 'Personal Exemption' application packet). Non-veteran disabled persons and widows/widowers use Form 82514 instead."
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "03-01",
   "text": "ARS 42-11153(A): failure to file the initial affidavit 'between the first Monday in January and March 1' of the tax year 'constitutes a waiver of the exemption.' ADOR (April 2024): 'Applications must be filed between the first Monday in January and March 1.' Some assessors publish an earlier working cutoff (Maricopa's 2026 packet says February 28)."
  },
  "effective": "Tax year in which the affidavit is filed (filing window is Jan to Mar 1 of that year). ARS 42-11111 treats property as taxable from the date of any later disqualifying event.",
  "lateFiling": "ARS 42-11153(B): a person with a disability or widow/widower whose property is exempt under 42-11111 may petition the county board of supervisors after March 1; if approved the board may 'redeem the waiver.' Counties implement this with an 'Exemption Deadline Waiver' filed with the assessor (Maricopa: waiver plus completed application by September 1). Taxes already due and payable before the petition cannot be refunded or abated.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "ARS 42-11153(B): a redeemed waiver does not reach taxes already 'due and payable' before the petition; no prior-year refund mechanism exists for a missed exemption."
  },
  "renewal": {
   "type": "varies",
   "text": "ADOR (April 2024): 'Once the exemption is approved by the County Assessor, the claimant is not required to submit an affidavit for subsequent years,' but the assessor 'may require annual or intermittent reapplication.' Form 82514V instructions repeat that 'Some Assessors still require the filing of an annual affidavit.' The claimant must notify the assessor in writing of any disqualifying event (death, conveyance, income over the limit for the income-tested tier). The 100% tier under ARS 42-11111(C) has no income test."
  },
  "ratingChange": "ADOR: 'if there is a change in the veteran's disability rating, as determined by the VA, the claimant should file an updated affidavit, including a copy of the updated VA Benefit Summary Letter.' Below 100% the exemption is the base amount multiplied by the disability percentage (42-11111(D)); at 100% or TDIU the primary residence is fully exempt (42-11111(C)).",
  "move": "ARS 42-11111: when a new primary residence is established, a completed exemption transfer form must be filed with the assessor within sixty days. A home in a different county means a new initial affidavit with that county's assessor.",
  "onlineFiling": {
   "available": null,
   "text": "ARS 42-11152(C) lets each assessor accept the affidavit electronically and requires an electronic acknowledgment of receipt. Availability varies by county (Maricopa accepts online, email, mail, or in person; Pinal requires first-time applicants in person). The affidavit must be notarized if not signed in front of an assessor's representative."
  },
  "documents": [
   "DOR Form 82514V affidavit, signed before an assessor's representative or notarized",
   "VA disability award / Benefit Summary letter showing the combined rating (the form says 'Please submit a copy'; ADOR says the assessor 'may require' it)",
   "Proof of discharge under honorable conditions (DD-214 may be requested by the assessor; required for veteran status under 42-11111)",
   "For the under-100% income-tested tier: household income for the prior calendar year and total Arizona assessed value (limits printed on the current-year form)",
   "Parcel number / situs address of the primary residence"
  ],
  "survivingSpouse": "ARS 42-11111(F): the primary residence of the widow or widower of a veteran eligible under subsection C (100%/TDIU) is fully exempt until remarriage; (G) the widow/widower of a partially rated veteran gets the base amount prorated by the veteran's percentage. The spouse must give the assessor evidence of the veteran's rating. Remarriage is a disqualifying event that must be reported.",
  "appeal": "Not located on a primary source in this pass. ARS 42-11153(B) routes missed-deadline relief to the county board of supervisors; denial appeals were not researched.",
  "statute": "Ariz. Const. art. IX, sec. 2; ARS 42-11111 (as amended by HB 2792, Laws 2026 ch. 2, and HB 2120, ch. 82); ARS 42-11152; ARS 42-11153",
  "sourceUrls": [
   {
    "url": "https://www.azleg.gov/ars/42/11111.htm",
    "title": "ARS 42-11111 Exemption for property of widows and widowers and persons with disabilities; veterans",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.azleg.gov/ars/42/11152.htm",
    "title": "ARS 42-11152 Affidavit; electronic submission",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.azleg.gov/ars/42/11153.htm",
    "title": "ARS 42-11153 Deadline for filing affidavit; waiver; redemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://azdor.gov/sites/default/files/2023-03/PROPERTY_AZPropertyTaxExemptions.pdf",
    "title": "ADOR publication: Arizona Property Tax Exemptions (April 2024)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://azdor.gov/business/property-tax",
    "title": "ADOR Property Tax page (links County Assessor contact PDF)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://azdor.gov/sites/default/files/2023-03/PROPERTY_AssessorContacts.pdf",
    "title": "ADOR County Assessor Contact Information (PDF)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.mohave.gov/media/tbfdphzf/veterans-exemption-affidavit-82514v.pdf",
    "title": "DOR Form 82514V (Mohave County Assessor copy, rev. 12/2024)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://mcassessor.maricopa.gov/valuation-relief/exemptions/",
    "title": "Maricopa County Assessor: Exemptions (Feb 28 / Sep 1 waiver practice)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [],
  "notes": "Statute text read via WebFetch of azleg.gov (current text already includes subsection C for 100%/TDIU veterans). ADOR publication and Form 82514V read with pdftotext; the ADOR County Assessor Contacts PDF returned 200 but its text layer did not extract cleanly, so it was not read. azdor.gov's property-tax forms index does not list 82514/82514V (distributed through assessors), so no azdor.gov form URL exists to cite. Rev. 12/2024 82514V still prints the 2025 income limits; counties will reissue for 2026. Maricopa's Feb 28 date is county practice, the statute says March 1."
 },
 "CA": {
  "state": "CA",
  "officeType": "county assessor",
  "officeTypeNote": "File with the COUNTY ASSESSOR of the county where the home is located. The State Board of Equalization (BOE) prescribes the form and sets the indexed amounts but does not take claims; the BOE says the form 'must be obtained from your local county assessor's office.' Not the tax collector (bills) or auditor-controller (refunds).",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.boe.ca.gov/proptaxes/countycontacts.htm",
   "label": "California State Board of Equalization: Listing of County Assessors (all 58 counties)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.boe.ca.gov/proptaxes/dv_exemption.htm",
   "note": "Single page listing each county assessor with address, phone and website link."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Claim for Disabled Veterans' Property Tax Exemption",
    "number": "BOE-261-G",
    "url": "https://www.boe.ca.gov/proptaxes/pdf/sample-boe261g.pdf",
    "revision": "REV. 36 (07-25)",
    "filedWith": "county assessor",
    "note": "BOE posts this as a SAMPLE 'for information only' and says to 'Contact Assessor for actual form' (each county prints its own copy with county contact info). Used for both the Basic and Low-Income tiers; check the Low-Income box to file the annual low-income claim."
   },
   {
    "programRef": "*",
    "name": "Disabled Veterans' Exemption Change of Eligibility Report",
    "number": "BOE-261-GNT",
    "url": "https://www.boe.ca.gov/proptaxes/pdf/sample-boe261gnt.pdf",
    "revision": null,
    "filedWith": "county assessor",
    "note": "Mailed by the assessor on or shortly after January 1 each year to prior-year recipients; used to report a move, death, remarriage or other loss of eligibility."
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "01-01",
   "text": "Initial claim (Basic or Low-Income): the full exemption, prorated to the date of eligibility, 'if the filing is made on or before January 1 of the year next following the year in which 1) the disability rating was received, or 2) residency is established' (BOE-261-G instructions; R&TC 277); BOE summarizes it as within 90 days of the qualifying event or by the following January 1, 'whichever is later.' Annual Low-Income claim: 'The full exemption is available ... if the filing is made by 5 p.m. on February 15 of each year.'"
  },
  "effective": "Prorated from the date of qualification: 'the effective date, as determined by the USDVA, of a disability rating' or the date residency is established at a property already owned, and thereafter as of 12:01 a.m. January 1 each year (BOE-261-G instructions; BOE: 'prorated as of the date of qualification to the remainder of the fiscal year').",
  "lateFiling": "Late initial claims are still allowed at a reduced amount: 90 percent or 85 percent of the exemption depending on when filed (R&TC 277). Low-Income annual claim filed after February 15 'but by 5 p.m. on December 10, 90 percent of the exemption is available. For claims filed after that time, 85 percent' (BOE-261-G instructions).",
  "retroactivity": {
   "type": "fixed",
   "years": 8,
   "text": "BOE: under R&TC 276.1, when the USDVA issues a delayed or retroactive rating, the full exemption may be granted for prior years and taxes 'may be cancelled or refunded,' 'subject to an eight-year statute of limitation' under R&TC 5097(a)(4); refunds allowed 'for up to eight years after the date the taxes were paid.'"
  },
  "renewal": {
   "type": "none",
   "text": "Basic tier: 'Once granted, the Basic Exemption remains in effect without annual filing until terminated' (BOE-261-G). Low-Income tier: 'Separate claims are required for each fiscal year when filing the Low-Income Exemption' (annual, by February 15 for the full amount). The assessor mails BOE-261-GNT each January; the claimant must report loss of eligibility by June 30 to avoid the 25 percent penalty on the escape assessment under R&TC 279.5."
  },
  "ratingChange": "Eligibility requires a 100 percent service-connected rating, 100 percent compensation for unemployability, blindness in both eyes, or loss of use of two or more limbs. A reduction below those thresholds is a change in eligibility to be reported on BOE-261-GNT; a later retroactive 100 percent rating supports a R&TC 276.1 refund claim back up to eight years.",
  "move": "The exemption follows the veteran to a new principal residence but requires a new BOE-261-G with the assessor of the new county (or same county) and termination at the old property; the form asks for the address where the exemption was previously claimed. Filing on or before January 1 following the year residency is established preserves the full prorated amount.",
  "onlineFiling": {
   "available": null,
   "text": "Varies by county; the form accepts an electronic signature under penalty of perjury and many assessors offer e-file or email submission. BOE itself does not take claims."
  },
  "documents": [
   "USDVA rating letter: 'proof of rating' showing the 100 percent rating (or 100 percent compensation for unemployability), with the effective date and the notice date (BOE-261-G items 2a-2b)",
   "Proof of service and discharge 'other than dishonorable,' such as DD-214 (BOE)",
   "For the Low-Income tier: total household income for the prior calendar year, including veterans' benefits (2026 limit $81,131 per LTA 2026/019)",
   "Unmarried surviving spouse: marriage certificate and death certificate; if the veteran did not qualify in life, also proof the death was service-connected and dates of service (BOE)"
  ],
  "survivingSpouse": "An unmarried surviving spouse qualifies if the veteran qualified in life, would have qualified under the laws effective January 1, 1977 (1979 for disease), or died from a service-connected injury or disease; a USDVA finding of service-connected death is accepted without further proof. Remarriage ends eligibility, which can be regained after divorce or death of the new spouse (BOE).",
  "appeal": "Not addressed on the BOE exemption page. Exemption denials are handled by the county assessor; refund claims under R&TC 5097 go to the county board of supervisors (not verified in this pass).",
  "statute": "Cal. Const. art. XIII, sec. 4(a); Rev. & Tax. Code 205.5, 276.1, 277, 279, 279.5, 5097(a)(4); SB 296 (2026) restructures the exemption from the January 1, 2027 lien date",
  "sourceUrls": [
   {
    "url": "https://www.boe.ca.gov/proptaxes/dv_exemption.htm",
    "title": "BOE: Disabled Veterans' Exemption (program page with FAQ)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.boe.ca.gov/proptaxes/pdf/sample-boe261g.pdf",
    "title": "BOE-261-G sample, REV. 36 (07-25)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.boe.ca.gov/proptaxes/pdf/sample-boe261gnt.pdf",
    "title": "BOE-261-GNT sample",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.boe.ca.gov/proptaxes/pdf/lta26019.pdf",
    "title": "BOE Letter to Assessors 2026/019 (2026 and 2027 indexed amounts)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.boe.ca.gov/proptaxes/countycontacts.htm",
    "title": "BOE Listing of County Assessors",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [],
  "notes": "leginfo.legislature.ca.gov statute pages returned 403 to automated checks, so R&TC 205.5/276.1/277/5097 were not opened directly; the BOE page and the BOE-261-G instructions quote the operative deadlines and the eight-year refund rule. The BOE's earlier 'assessors.htm' URL is dead (404); countycontacts.htm is the live directory. LTA 2026/019 returned 200 and was not re-read here (its amounts are already in the dollar layer). SB 296's 2027 restructuring may change the form; re-check BOE-261-G revision after the January 1, 2027 lien date."
 },
 "CO": {
  "state": "CO",
  "officeType": "county assessor",
  "officeTypeNote": "Since January 1, 2024 (SB 23-036) the disabled veteran exemption application is filed with the COUNTY ASSESSOR of the county where the home sits, not with the Colorado Division of Veterans Affairs as before. DPT: 'Completed veteran and Gold Star spouse applications must be postmarked or delivered to the County Assessor in which the property is located by July 1.' Veterans who qualified through the Division before 2024 keep the exemption without re-filing (C.R.S. 39-3-205(1)(b)). The Reserve Component deferral in the dollar layer is a separate program run by the county treasurer and is not covered here.",
  "officeLocator": {
   "tier": 1,
   "url": "https://dpt.colorado.gov/localities",
   "label": "Colorado Division of Property Taxation: Find Your County Assessor and Treasurer (all 64 counties)",
   "countyUrlPattern": "https://dpt.colorado.gov/locality/{county}-county-assessor",
   "slugRule": "lowercase county name, spaces replaced with hyphens, followed by '-county-assessor' (e.g. adams-county-assessor, el-paso-county-assessor; verified 200 for both). Broomfield and Denver are city-and-county; check the directory for their slug.",
   "fallbackUrl": "https://dpt.colorado.gov/veteran-with-a-disability-and-gold-star-exemptions",
   "note": "Per-county pages carry the assessor's address, phone and website."
  },
  "forms": [
   {
    "programRef": "Homestead Exemption",
    "name": "Veteran with a Disability Property Tax Exemption Application",
    "number": "15-DPT-AR (SVE 005)",
    "url": "https://drive.google.com/file/d/120rbtwHnZvPCXnPq4I6B-peJJ4ZubiAj/view?usp=drive_link",
    "revision": "1/26",
    "filedWith": "county assessor",
    "note": "DPT hosts the form and its instructions as Google Drive files linked from https://dpt.colorado.gov/veteran-with-a-disability-and-gold-star-exemptions (both links returned 200 on 2026-10-21). Instructions: https://drive.google.com/file/d/12CtKyWtMBDdgfdx1JadAXMM5C9e-iN73/view?usp=drive_link. Separate forms exist for the Veteran with a Disability Surviving Spouse and for Gold Star Spouses. Counties also hand out the same form."
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "07-01",
   "text": "C.R.S. 39-3-205(1)(b): file with the county assessor 'no later than July 1 of the first property tax year for which the exemption is claimed.' DPT instructions: 'Completed applications must be postmarked or delivered no later than July 1 of the year for which the exemption is requested,' including 'a copy of your VA Summary of Benefits letter.' Ownership and occupancy are measured as of January 1 of that year."
  },
  "effective": "Property tax year of application (taxes payable the following year); the applicant must own and occupy the home as primary residence as of January 1 of that year. Not prorated.",
  "lateFiling": "DPT brochure: 'Late applications may be accepted through August 1 if the applicant can show good cause for missing the July 1 deadline.' The assessor must mail any denial with reasons by August 1 (C.R.S. 39-3-206). Nothing is accepted for that year after the good-cause window.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "DPT: 'Under no circumstances shall an exemption be allowed for property taxes assessed during any tax year prior to the year in which the veteran first files an exemption application.'"
  },
  "renewal": {
   "type": "none",
   "text": "DPT instructions: once approved 'the assessor will place the exemption on your property and it will remain in place for future years until a' disqualifying event occurs. The owner must report a change in ownership or occupancy to the assessor within 60 days (C.R.S. 39-3-205(3) penalties). No annual re-filing."
  },
  "ratingChange": "Eligibility requires a VA rating of 100 percent permanent service-connected disability or individual unemployability status (treated 'equivalently' since tax year 2025, C.R.S. 39-3-202(3.5)). A later VA reduction below those thresholds is a disqualifying change that must be reported; a newly qualified veteran files by the next July 1.",
  "move": "The exemption does not follow the veteran. File a new application with the assessor of the new county by July 1 of the first year the new home is owned and occupied as of January 1; the exemption on the old property ends and only one exemption per owner is allowed statewide (the Property Tax Administrator cross-checks for duplicates by November 1).",
  "onlineFiling": {
   "available": null,
   "text": "Varies by county. The DPT form is a fillable PDF filed by mail or in person with the assessor; several large counties (e.g. Denver, Jefferson, El Paso) accept it online through their own portals."
  },
  "documents": [
   "VA Summary of Benefits letter showing a 100 percent permanent service-connected disability rating or individual unemployability status (download at va.gov/records/download-va-letters)",
   "Proof of honorable discharge (the form asks the veteran to attest; counties may request DD-214)",
   "Name and Social Security number of the applicant and every other occupant of the property (C.R.S. 39-3-205(2)(a)(III))",
   "If title is held by a trust, corporate partnership or other legal entity, or as a life estate: the entity/trust details on the back of the form (sections 6-7)",
   "Surviving spouse applicants: the separate Surviving Spouse application; the veteran must have been receiving the exemption at death"
  ],
  "survivingSpouse": "The surviving spouse of a qualifying veteran who 'received the veteran's exemption before they passed away' may continue it by filing the Surviving Spouse application with the county assessor by July 1. Gold Star spouses (spouse of a service member who died in the line of duty or a veteran whose death resulted from a service-related injury or disease) file the separate Gold Star Spouse application.",
  "appeal": "If the assessor denies the application, the denial letter explains how to appeal to the county board of equalization: request a hearing by August 15; the hearing is held between August 1 and September 1; the county board's decision is final. Denials by the Property Tax Administrator for duplicate claims may be protested by November 15 and then appealed to the Board of Assessment Appeals within 30 days (C.R.S. 39-2-125(1)(b)).",
  "statute": "Colo. Const. art. X, sec. 3.5 (Amendment G, 2024); C.R.S. 39-3-202(3.5), 39-3-203(1.5), 39-3-205, 39-3-206, 39-3-207; SB 23-036 (filing moved to county assessor)",
  "sourceUrls": [
   {
    "url": "https://dpt.colorado.gov/veteran-with-a-disability-and-gold-star-exemptions",
    "title": "Colorado DPT: Veteran with a Disability and Gold Star Exemptions (forms and instructions)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dpt.colorado.gov/property-tax-exemption-for-senior-citizens-and-veterans-with-a-disability",
    "title": "Colorado DPT: Property Tax Exemption for Senior Citizens and Veterans with a Disability",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://drive.google.com/file/d/120rbtwHnZvPCXnPq4I6B-peJJ4ZubiAj/view?usp=drive_link",
    "title": "Form 15-DPT-AR Veteran with a Disability Application (SVE 005, 1/26)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://drive.google.com/file/d/12CtKyWtMBDdgfdx1JadAXMM5C9e-iN73/view?usp=drive_link",
    "title": "DPT Veteran with a Disability Application Instructions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://drive.google.com/file/d/1nFLfEniWeqEvQy1DrJaqyJ_j3CmB9Z69/view?usp=drive_link",
    "title": "DPT brochure: Property Tax Exemption for Disabled Veterans in Colorado",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dpt.colorado.gov/localities",
    "title": "DPT county assessor and treasurer directory",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[Homestead Exemption].details",
    "issue": "Details say 'Apply to county assessor Jan 1 - Jul 1'; DPT confirms July 1 to the county assessor and adds a good-cause late window to August 1. Also note the exemption does not transfer on a move (new application required).",
    "source": "https://drive.google.com/file/d/1nFLfEniWeqEvQy1DrJaqyJ_j3CmB9Z69/view?usp=drive_link"
   }
  ],
  "notes": "DPT's form, instructions and brochure are hosted on Google Drive and linked from dpt.colorado.gov; the Drive viewer URLs return 200 and the PDFs were downloaded and read with pdftotext. Statute text was not opened on a legislature-hosted page (Colorado publishes the CRS through a LexisNexis viewer); C.R.S. cites come from the DPT instructions and brochure, with 39-3-205(1)(b) wording confirmed on a statute mirror used as a lead only. The brochure's August 1 good-cause window is DPT guidance; the statute itself (39-3-205) was reported to contain no late-filing clause, so treat August 1 as administrative practice."
 },
 "CT": {
  "state": "CT",
  "officeType": "municipal (town) assessor",
  "officeTypeNote": "Connecticut has no county government for tax purposes; every exemption is claimed with the ASSESSOR of the town where the home is located (169 municipalities). Two offices are involved: the honorable discharge (DD-214) is recorded with the TOWN CLERK (CGS 12-93), and the exemption claim and VA proof go to the ASSESSOR. Abatement/refund claims for prior years go to the TAX COLLECTOR (CGS 12-81(83)(D)(ii)).",
  "officeLocator": {
   "tier": 1,
   "url": "https://portal.ct.gov/opm/igpp/directories/municipal-assessors",
   "label": "Connecticut OPM: Municipal Assessors directory (all 169 towns; PDF list labeled October 2026)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://portal.ct.gov/opm/-/media/opm/igpp/municipal-directories/assessor-directory.pdf",
   "note": "The OPM page links a 'Municipal Assessor Listing' PDF (town, assessor name, title, phone, email). fallbackUrl is the direct PDF (200 on 2026-10-21; the ?rev= query string changes with each update)."
  },
  "forms": [
   {
    "programRef": "Homestead Exemption",
    "name": "Permanently and Totally Disabled Veteran 100% Service-Connected Disability Rating Tax Exemption Application",
    "number": "Form D-2 (10.1.2025), CGS 12-93",
    "url": "https://www.oldsaybrookct.gov/DocumentCenter/View/139/D-2-Permanently-and-Totally-Disabled-Veteran-100-Service-Connected-Disability-Application-for-Download-PDF",
    "revision": "10.1.2025 (prescribed by OPM memo of September 8, 2025 for assessment years commencing on and after October 1, 2025)",
    "filedWith": "municipal assessor",
    "note": "OPM-prescribed statewide form under CGS 12-93 as amended by PA 25-168 sec. 235. OPM's own forms page (portal.ct.gov/opm/igpp/services-and-forms/municipal-official-and-taxpayer-forms) returned 404 to automated checks, so the URL is the Town of Old Saybrook's posted copy; the OPM transmittal memo is at https://www.oldsaybrookct.gov/DocumentCenter/View/138/D-2-OPM-Letter-PDF. Form text: 'Application is due annually not later than January 1st'; 'Attach copy of determination by the United States Department of Veterans Affairs.'"
   },
   {
    "programRef": "Standard Disabled Veteran Exemption (CGS 12-81(20))",
    "name": "Proof of VA disability rating filed with the assessor (no statewide form)",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "municipal assessor",
    "note": "CGS 12-81(20)(B) and 12-95: the veteran submits proof of the VA disability rating to the assessor for the initial year and again only when the VA modifies the rating. Many towns use a local form; the DD-214 must already be on record with the town clerk (12-93)."
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "01-01",
   "text": "12-81(83) P&T exemption: CGS 12-93 as amended by PA 25-168 sec. 235: 'such claimant shall annually, not later than January first, submit such claim to the assessors for approval' on the OPM form, for the assessment year that began the preceding October 1 (so the Oct 1, 2025 grand list claim is due Jan 1, 2026). 12-81(20) rating-based exemption: proof may be filed 'at any time before the expiration of the time limited by law for the board of assessment appeals ... to complete its duties' and takes effect on the preceding assessment day (CGS 12-95). The DD-214 must be received by the town clerk 'before the assessment day' (October 1) of the town (CGS 12-93)."
  },
  "effective": "Assessment year beginning October 1 (grand list date); the exemption shows on the tax bill issued the following July. For (20) and (83) claims proved after October 1 but before the board of assessment appeals finishes, the exemption 'shall take effect on the assessment day next preceding the date of the proof' (CGS 12-95). Motor-vehicle supplemental list: January 1 following proof.",
  "lateFiling": "A claim proved after the board of assessment appeals closes is handled as an abatement/refund: CGS 12-81(83)(D)(ii) lets the veteran 'make application to the tax collector not later than one year after such individual obtains such proof or not later than one year after the expiration of the time limited in section 12-95' for abatement (unpaid tax) or refund (paid tax), referred to the board of selectmen or equivalent, paid without interest.",
  "retroactivity": {
   "type": "fixed",
   "years": 3,
   "text": "CGS 12-81(83)(D)(ii): abatement or refund 'may be granted retroactively to include the assessment day next succeeding the date as of which such individual was entitled to such determination ... but in no case shall any abatement or refund be made for a period greater than three years.' Apply to the tax collector within one year of obtaining the VA proof."
  },
  "renewal": {
   "type": "annual",
   "text": "P&T exemption (83): the CLAIM is annual ('shall annually, not later than January first, submit such claim,' CGS 12-93 as amended 2025) with an attestation that no claim is made in another town, but the VA PROOF is one-time: 'If there is no change to an individual's determination, such proof shall not be required for any assessment year following that for which the exemption ... is granted initially' (12-81(83)(D)(i)). Rating-based exemption (20): no annual filing; the assessors' certified list is prima facie evidence of continued entitlement (CGS 12-94), proof only on initial claim and on a VA rating modification."
  },
  "ratingChange": "CGS 12-81(83)(D)(i): if the VA 'modifies an individual's determination to other than permanently and totally disabled based on a service-connected disability rating of one hundred per cent, such modification shall be deemed a waiver of the right to the exemption'; the veteran may then claim the tiered (20) exemption. CGS 12-95 (2025) requires proof of any VA modification of a (20) rating or (83) determination. A later P&T award supports the three-year abatement/refund.",
  "move": "File with the new town: the town clerk of the former residence will, on request and payment of a copying fee, forward the recorded discharge to the new town (CGS 12-93); then file Form D-2 (or (20) proof) with the new assessor. The D-2 attestation bars claiming the (83) exemption in two towns.",
  "onlineFiling": {
   "available": null,
   "text": "Varies by town; Form D-2 is a fillable PDF generally returned to the assessor by mail, email or in person. No statewide portal."
  },
  "documents": [
   "Honorable discharge (DD-214 or certified copy) recorded with the town clerk before October 1 (CGS 12-93)",
   "Form D-2 with attached copy of the VA determination of permanent and total disability based on a 100% service-connected rating (12-81(83); 12-93)",
   "Attestation on D-2 that no (83) claim has been or will be filed in another town",
   "For the tiered (20) exemption: VA letter showing the disability rating (10% or more), or proof of federal compensation for loss of a limb",
   "Proof of residency / primary residence occupancy of the dwelling (12-81(83)(A)(II)); evidence of trust or life-estate interest if title is held that way"
  ],
  "survivingSpouse": "CGS 12-81(83)(B): the dwelling or motor vehicle of the deceased veteran's surviving spouse 'while such spouse remains a widow or widower,' or held for minor children, 'shall be so exempt as that to which such resident was or would have been entitled at the time of such resident's death.' PA 25-168 sec. 233 added a municipal option (F) to extend this to spouses of qualifying veterans who died before October 1, 2024, and sec. 241 a municipal-option exemption for surviving spouses of service members killed in the line of duty.",
  "appeal": "Denials are appealed to the town's board of assessment appeals (CGS 12-111; February/March session, written appeal typically due February 20), then to Superior Court under CGS 12-117a. Not separately verified for exemption denials in this pass.",
  "statute": "CGS 12-81(20); 12-81(83) (PA 24-46, amended by PA 25-2 sec. 4 and PA 25-168 sec. 233); 12-93 (PA 25-168 sec. 235); 12-94 (sec. 236); 12-95 (sec. 237); PA 25-168 secs. 240-241 (municipal-option TDIU and line-of-duty surviving spouse exemptions)",
  "sourceUrls": [
   {
    "url": "https://www.cga.ct.gov/current/pub/chap_203.htm",
    "title": "CGS Chapter 203 (12-81, 12-93, 12-94, 12-95) current statutes",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.cga.ct.gov/2025/ACT/PA/PDF/2025PA-00168-R00HB-07287-PA.PDF",
    "title": "Public Act 25-168 (secs. 233-241: 12-81(83) rewrite, annual Jan 1 claim, median cap, TDIU option)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.cga.ct.gov/2024/ACT/PA/PDF/2024PA-00046-R00HB-05491-PA.PDF",
    "title": "Public Act 24-46 (created 12-81(83))",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.cga.ct.gov/2025/ACT/PA/PDF/2025PA-00002-R00HB-07067-PA.PDF",
    "title": "Public Act 25-2 (secs. 4-5 amended 12-81(83) and (20))",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://prdext2.cga.ct.gov/2025/rpt/pdf/2025-R-0131.pdf",
    "title": "OLR Report 2025-R-0131 Municipal-Option Property Tax Exemptions for Veterans (Sept 2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://portal.ct.gov/opm/igpp/directories/municipal-assessors",
    "title": "OPM Municipal Assessors directory page",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://portal.ct.gov/opm/-/media/opm/igpp/municipal-directories/assessor-directory.pdf",
    "title": "OPM Municipal Assessor Listing (PDF)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.oldsaybrookct.gov/DocumentCenter/View/139/D-2-Permanently-and-Totally-Disabled-Veteran-100-Service-Connected-Disability-Application-for-Download-PDF",
    "title": "OPM Form D-2 (10.1.2025), Town of Old Saybrook copy",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.oldsaybrookct.gov/DocumentCenter/View/138/D-2-OPM-Letter-PDF",
    "title": "OPM memo of Sept 8, 2025 prescribing Form D-2",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[Homestead Exemption].summary / note",
    "issue": "Three items to review against PA 25-168 sec. 233 (eff. Oct 1, 2025 grand list): (1) the statute now exempts the dwelling 'that fractional share' owned, excluding any portion used commercially or producing rental income; new subparagraph (E) lets a town limit the exemption to 'not more than two acres of the lot upon which such dwelling sits,' which implies the lot (not just the structure) is within the exemption unless a town votes the 2-acre cap, so the 'land continues to be taxed / 0.75 fraction' modeling should be re-checked; (2) the median-assessed-value cap is confirmed as a municipal option under (G); (3) PA 25-168 sec. 240 created a MUNICIPAL-OPTION exemption for service-connected TDIU veterans, so the note 'a plain TDIU award does not qualify' is now town-dependent.",
    "source": "https://www.cga.ct.gov/2025/ACT/PA/PDF/2025PA-00168-R00HB-07287-PA.PDF"
   },
   {
    "field": "propertyTax.programs[Homestead Exemption].summary",
    "issue": "Statute text since PA 25-2/25-168 reads 'determined by the United States Department of Veterans Affairs to be permanently and totally disabled based on a service-connected disability rating of one hundred per cent'; consistent with the data's P&T requirement.",
    "source": "https://www.cga.ct.gov/2025/ACT/PA/PDF/2025PA-00168-R00HB-07287-PA.PDF"
   }
  ],
  "notes": "cga.ct.gov 'current' chapter 203 text (read via curl, 1 MB) still shows the PA 24-46 version of 12-81(83) and 12-93 without the 2025 amendments, so the 2025 rules were taken from the enrolled PA 25-168 PDF (secs. 233-237, read with pdftotext) and the OPM Form D-2 memo. WebFetch could not open cga.ct.gov (certificate error); curl worked. OPM's forms page and its older igpp-main directory URLs return 404; the directories page under /opm/igpp/directories/ is live. OPM-set income thresholds and the Additional Veterans (income-based, biennial Feb 1 to Oct 1) program are separate from the two programs in the dollar layer and were not researched."
 },
 "DC": {
  "state": "DC",
  "officeType": "D.C. Office of Veterans Affairs (certifies) and Office of Tax and Revenue, Real Property Tax Administration (applies the deduction)",
  "officeTypeNote": "Unlike the regular Homestead Deduction (filed with OTR on MyTax.DC.gov, form ASD-100), the Disabled Veterans Homestead Deduction application is filed with the Mayor's Office of Veterans Affairs, which 'certifies disability status to the Office of Tax and Revenue' (D.C. Code 47-850(a-2)(3)). OTR then applies the $445,000 deduction to the tax bill. Cancellations (ASD-105) go to OTR through MyTax.DC.gov.",
  "officeLocator": {
   "tier": 1,
   "url": "https://otr.cfo.dc.gov/am/page/real-property-tax-reliefs-credits-and-deductions",
   "label": "DC Office of Tax and Revenue: Real Property Tax Reliefs, Credits and Deductions (single jurisdiction)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://communityaffairs.dc.gov/node/4111",
   "note": "Single jurisdiction, so no county lookup. The OTR page carries the program rules; the Mayor's Office of Veterans Affairs page (communityaffairs.dc.gov) carries the online application. MOVA: (202) 724-5454; OTR Customer Service: (202) 727-4TAX."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Veterans Homestead Tax Deduction Application (online)",
    "number": null,
    "url": "https://app.smartsheet.com/b/form/897d57eff53f4e6e803e26682254db5e",
    "revision": null,
    "filedWith": "D.C. Office of Veterans Affairs (Mayor's Office of Community Affairs)",
    "note": "Online form linked from communityaffairs.dc.gov; screening questions precede the application. OTR says a paper form is available on request through a waiver of the electronic-filing requirement (Customer Service (202) 727-4TAX). Active-duty members must attach Form DD-2058 (State of Legal Residence Certificate) showing DC domicile."
   },
   {
    "programRef": "*",
    "name": "Cancellation of Homestead Deduction",
    "number": "ASD-105",
    "url": "https://mytax.dc.gov/",
    "revision": null,
    "filedWith": "Office of Tax and Revenue via MyTax.DC.gov",
    "note": "Required within 30 days of losing eligibility (move, sale, loss of rating, income over the limit)."
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "03-31",
   "text": "Rolling, with a half-year cutoff. D.C. Code 47-850(c): a properly completed and approved application filed 'during the period October 1 through March 31' receives the deduction for the entire tax year (Oct 1 to Sep 30); an application filed April 1 through September 30 receives '1/2 of the deduction for the second installment only.' OTR restates the same windows for the Disabled Veterans deduction."
  },
  "effective": "Full tax year if filed October 1 to March 31; second-half installment only if filed April 1 to September 30. D.C. Code 47-850(a-2)(2): the deduction 'shall not be carried forward or carried back.' Continues in later years while the property stays eligible.",
  "lateFiling": "No penalty and no separate late-filing process: an application filed after March 31 simply earns only the second-half deduction for that tax year and the full deduction thereafter (47-850(c)).",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "D.C. Code 47-850(a-2)(2): the deduction 'shall not be carried forward or carried back'; no refund of prior tax years is available for a late application."
  },
  "renewal": {
   "type": "none",
   "text": "One-time filing. D.C. Code 47-850.02(a): the application 'shall apply to the initial tax year' and to later years for which the deduction is allowed. The owner must notify the Mayor of any change in eligibility within 30 days (47-850.02(b)(1)); failure means the deduction 'shall be rescinded without limitation for each tax year' with penalty and interest. OTR may audit eligibility and 47-850(b) lets the Mayor request information to confirm continued eligibility. Income is tested annually against the 47-863 household limit ($163,500 for TY2026, 2024 federal AGI per OTR)."
  },
  "ratingChange": "Eligibility requires a VA classification of 'total and permanent disability as a result of a service-incurred condition or service-aggravated condition,' or payment at the 100% rate for unemployability (47-850(a-2)(1)(A)). Loss of that status is a change in eligibility: file ASD-105 within 30 days or face rescission, penalty and interest (47-850.02(b)).",
  "move": "The deduction attaches to the principal residence. Cancel on the old property with ASD-105 within 30 days and file a new application with the Office of Veterans Affairs for the new home; the Oct 1 to Mar 31 / Apr 1 to Sep 30 timing rule governs how much of that year's deduction applies.",
  "onlineFiling": {
   "available": true,
   "text": "Application is online (Smartsheet form on communityaffairs.dc.gov); paper only by waiver. Cancellation and the regular Homestead Deduction are on MyTax.DC.gov."
  },
  "documents": [
   "VA letter establishing total and permanent service-connected disability or payment at the 100% rate for individual unemployability (certified by the Office of Veterans Affairs to OTR, 47-850(a-2)(3))",
   "Deed showing at least 50% ownership by the veteran (MOVA/OTR eligibility rule)",
   "Proof of DC domicile; active-duty members attach Form DD-2058 State of Legal Residence Certificate",
   "Household federal adjusted gross income for the look-back year (2024 AGI for TY2026; limit $163,500) for all household members other than tenants paying fair-market rent under a written lease",
   "Property must have five or fewer dwelling units and not be a cooperative, held by a business entity (other than an all-occupant partnership), or in an irrevocable trust other than a special needs trust"
  ],
  "survivingSpouse": "D.C. Code 47-850(a-2)(1) and (4): an 'eligible spouse,' the surviving spouse or domestic partner of a deceased veteran whose property was receiving (or would have qualified for) the deduction, may claim the same $445,000 deduction; OTR lists this as the Disabled Veterans' Spouse Homestead Deduction effective October 1, 2025. Contact MOVA at (202) 724-5454 for the spouse application.",
  "appeal": "OTR posts a 'Homestead and Senior Citizen Tax Benefit Appeal Application' on its Real Property Tax Forms page for denied homestead-type benefits; general real property assessment appeals run to the Real Property Tax Appeals Commission. Not verified specifically for the veterans deduction.",
  "statute": "D.C. Code 47-850(a-2), 47-850(b)-(c), 47-850.02, 47-863(a)(1A)(A) (household income test)",
  "sourceUrls": [
   {
    "url": "https://code.dccouncil.gov/us/dc/council/code/sections/47-850",
    "title": "D.C. Code 47-850 Residential property tax relief: Homestead deduction (incl. (a-2) disabled veterans)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://code.dccouncil.gov/us/dc/council/code/sections/47-850.02",
    "title": "D.C. Code 47-850.02 One-time filing; notification of change in eligibility",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://otr.cfo.dc.gov/am/page/real-property-tax-reliefs-credits-and-deductions",
    "title": "OTR: Real Property Tax Reliefs, Credits and Deductions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://communityaffairs.dc.gov/node/4111",
    "title": "Mayor's Office of Veterans Affairs: Disabled Veterans Homestead Deduction (application)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://app.smartsheet.com/b/form/897d57eff53f4e6e803e26682254db5e",
    "title": "Veterans Homestead Tax Deduction Application (online form)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://otr.cfo.dc.gov/release/veterans-homestead-deduction-starts-october-1-2022",
    "title": "OTR release: Veterans Homestead Deduction starts October 1, 2022",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://mytax.dc.gov/",
    "title": "MyTax.DC.gov (ASD-100 / ASD-105)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [],
  "notes": "The statutory timing rule in 47-850(c) is written for the homestead deduction generally; OTR's page applies the same Oct 1 to Mar 31 / Apr 1 to Sep 30 windows to the veterans deduction. The 50% ownership and five-unit rules come from OTR/MOVA pages, not from the (a-2) text as read. otr.cfo.dc.gov/node/409562 (an older OTR page on this deduction) returned 403 to automated checks and was not used. D.C. Code 47-850.05 does not exist (404); the deduction lives in 47-850(a-2)."
 },
 "DE": {
  "state": "DE",
  "officeType": "county assessment / billing office (receiver of taxes and county treasurer)",
  "officeTypeNote": "The state Disabled Veterans School Property Tax Credit is a state-funded credit against the school portion of the county tax bill, but the application is filed with the COUNTY, not the Department of Finance: 14 Del. C. 1917(d)(2)a says the application is 'received by the receiver of taxes or county treasurer no later than April 30.' The DVP-TAX form routes it to New Castle County Assessment Division (87 Read's Way, New Castle; 302-395-5520), Kent County Levy Court Assessment Division (555 Bay Road, Dover; 302-744-2401), or Sussex County Billing Services (P.O. Box 589, Georgetown; 302-855-7871). Each county's own county-tax credit for disabled veterans is a separate county application.",
  "officeLocator": {
   "tier": 1,
   "url": "https://finance.delaware.gov/disabled-veterans/",
   "label": "Delaware Department of Finance: Disabled Veterans School Tax Credit (lists all three county offices)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://finance.delaware.gov/disabled-veterans/disabled-veterans-school-tax-credit-faq/",
   "note": "Only three counties; the state page and the form list each county's office, phone and website. County sites newcastlede.gov and kentcountyde.gov returned 403 to automated checks (bot protection); sussexcountyde.gov returned 200."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Application for Disabled Veteran School Property Tax Credit",
    "number": "DVP-TAX",
    "url": "https://financefiles.delaware.gov/docs/DVP-TAX_2021-01_2PaperInteractive.pdf",
    "revision": "Revision 20211026",
    "filedWith": "county assessment / billing office (receiver of taxes and county treasurer)",
    "note": "Form says: 'STATEWIDE DEADLINE IS APRIL 30TH FOR THE UPCOMING TAX YEAR. THIS CREDIT IS NOT PERMITTED RETROACTIVELY. SEND YOUR APPLICATION TO THE APPROPRIATE COUNTY.' Separate application per co-owner unless married/civil-union tenants by the entirety."
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-30",
   "text": "14 Del. C. 1917(d)(2)a: application must be 'received by the receiver of taxes or county treasurer no later than April 30 immediately before the beginning of that tax year.' Department of Finance: 'Applications for the upcoming tax year are due April 30th.' County tax years begin July 1."
  },
  "effective": "The tax year (beginning July 1) following the April 30 deadline; the county applies the credit to that year's school tax on the bill. No proration.",
  "lateFiling": "None for ordinary late filers; a late application is held for the following tax year. 14 Del. C. 1917(d)(3): the Secretary of Finance may waive the application date only for an individual who is 'financially disabled' (unable to manage financial affairs because of a medically determinable impairment expected to last 12 months or result in death) and has no spouse, guardian or other person authorized to act for them.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "DVP-TAX form: 'THIS CREDIT IS NOT PERMITTED RETROACTIVELY.' No refund of prior years."
  },
  "renewal": {
   "type": "none",
   "text": "Department of Finance FAQ: 'Once you qualify for the program, you do not need to re-apply each year.' Two conditions keep it alive: 14 Del. C. 1917(d)(4)d withdraws the credit for the next tax year from any taxpayer who 'has not paid in full such taxpayer's property tax bill by the end of the tax year' (restored after full payment of taxes and penalties), and the claimant 'must notify the receiver of taxes or county treasurer of any modification in status' that ends eligibility; the form adds a 60-day notice window for rating changes."
  },
  "ratingChange": "Eligibility is VA '100% disability compensation due to a service-connected, permanent and total disability based on individual unemployability or a 100% disability rating' (1917(d)(1)c.1). The form: 'I must notify the appropriate county of any change in disability rating within 60 days of such change.' A reduction ends the credit; a newly rated veteran files by the next April 30. (HB 349, 153rd GA, proposing an 80% threshold was in House Appropriations as of April 2026 and is not law.)",
  "move": "Not transferable. Form: 'If you purchase a new principal residence or otherwise change your principal residence to another home that you own, a new application must be completed and filed. Applications may be filed in advance of relocation.' Still subject to the April 30 deadline for the new property.",
  "onlineFiling": {
   "available": false,
   "text": "Paper/fillable PDF mailed or delivered to the county office listed on the form; no state online filing was found."
  },
  "documents": [
   "Current copy of the VA determination of disability rating status (100% P&T or 100% rate for individual unemployability) for each applicant",
   "Copy of Delaware driver's license or official Delaware state ID for each applicant",
   "Social Security number (used by the Department of Finance to verify the three-consecutive-year Delaware domicile)",
   "Date Delaware legal domicile began (at least 3 consecutive years; 12 months' absence is prima facie abandonment, 1917(d)(1)c.2)",
   "If the home is in an irrevocable trust: names of beneficial owners and a copy of the complete trust agreement",
   "Property tax bill must be paid in full each year to keep the credit"
  ],
  "survivingSpouse": "14 Del. C. 1917(d)(1)d (added by 83 Del. Laws c. 529, approved Nov 2, 2022): the credit continues for a surviving spouse if the veteran was claiming the credit at death, the spouse was a titled owner before the death, has not remarried, and owns and occupies the home as principal residence; it ends on remarriage, loss of title, or loss of occupancy. The Secretary of Finance must maintain the credit 'without disruption' for an eligible spouse notwithstanding the April 30 deadline (1917(d)(2)b).",
  "appeal": "Not addressed on the state page or form. Denials are handled by the county office that received the application; no statutory appeal path for this credit was located.",
  "statute": "14 Del. C. 1917(d) (83 Del. Laws c. 124, HB 214, signed Aug 10, 2021; amended by 83 Del. Laws c. 529, 2022)",
  "sourceUrls": [
   {
    "url": "https://finance.delaware.gov/disabled-veterans/",
    "title": "Delaware Department of Finance: Disabled Veterans School Tax Credit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://finance.delaware.gov/disabled-veterans/disabled-veterans-school-tax-credit-faq/",
    "title": "Department of Finance FAQ",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://financefiles.delaware.gov/docs/DVP-TAX_2021-01_2PaperInteractive.pdf",
    "title": "Form DVP-TAX (Revision 20211026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://delcode.delaware.gov/title14/title14.pdf",
    "title": "Delaware Code Title 14 (PDF), sec. 1917(d)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://legis.delaware.gov/SessionLaws/Chapter?id=41596",
    "title": "83 Del. Laws c. 529 (SB 241, 2022) amending 14 Del. C. 1917(d) (surviving spouse)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://sussexcountyde.gov/sites/default/files/ordinances/o2811.pdf",
    "title": "Sussex County Ordinance 2811 (county disabled-veteran credit keyed to 14 Del. C. 1917)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[0].survivingSpouse",
    "issue": "Currently false. 14 Del. C. 1917(d)(1)d (2022 amendment) continues the state school tax credit for a qualifying unremarried surviving spouse who was a titled owner.",
    "source": "https://legis.delaware.gov/SessionLaws/Chapter?id=41596"
   }
  ],
  "notes": "delcode.delaware.gov HTML pages are JS-rendered (empty to curl); the statute was read from the Title 14 PDF on the same site (1.9 MB, pdftotext). The county-level credits (New Castle 2022 ordinance, Kent, Sussex Ord. 2811) named in the dollar layer have their own county applications and were not researched here beyond confirming the Sussex ordinance exists; New Castle and Kent county sites block automated checks. The DVP-TAX form has not been revised since Oct 2021 and does not yet mention the 2022 surviving-spouse provision."
 },
 "FL": {
  "state": "FL",
  "officeType": "county property appraiser",
  "officeTypeNote": "File with the COUNTY PROPERTY APPRAISER (an elected constitutional officer), not the tax collector (who bills and collects). The Florida Department of Revenue prescribes the forms and oversees, but does not take applications.",
  "officeLocator": {
   "tier": 1,
   "url": "https://floridarevenue.com/property/Pages/LocalOfficials.aspx",
   "label": "Florida Department of Revenue: Property Appraisers, Tax Collectors and VAB clerks by county",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://floridarevenue.com/property/Pages/Taxpayers_Exemptions.aspx",
   "note": "Single page with each county's property appraiser website link and contact details."
  },
  "forms": [
   {
    "programRef": "Homestead Exemption",
    "name": "Original Application for Homestead and Related Tax Exemptions",
    "number": "DR-501",
    "url": "https://floridarevenue.com/property/Documents/dr501.pdf",
    "revision": "R. 01/26 (Rule 12D-16.002, effective 02/26)",
    "filedWith": "county property appraiser",
    "note": "One form covers homestead plus the service-connected total and permanent disability exemption (s. 196.081), the $5,000 disabled veteran exemption (s. 196.24), the wheelchair-confined veteran exemption (s. 196.091), the surviving spouse of a veteran who died on active duty (s. 196.081(4)), and the deployed-military exemption checkbox. Also use it to claim the related exemption when homestead is already on file."
   },
   {
    "programRef": "Wartime Veteran 10%+ Disability Discount",
    "name": "Original Application for Homestead and Related Tax Exemptions",
    "number": "DR-501",
    "url": "https://floridarevenue.com/property/Documents/dr501.pdf",
    "revision": "R. 01/26",
    "filedWith": "county property appraiser",
    "note": "Check 'Veteran disabled 10% or more' (s. 196.24)."
   },
   {
    "programRef": "Disabled Veteran Age 65+ Property Tax Discount",
    "name": "Application and Return for Homestead Tax Discount, Veterans Age 65 and Older with a Combat-Related Disability and Surviving Spouse",
    "number": "DR-501DV",
    "url": "https://floridarevenue.com/property/Documents/dr501dv.pdf",
    "revision": "R. 11/21",
    "filedWith": "county property appraiser",
    "note": "s. 196.082 discount. Requires copy of honorable discharge (e.g. DD-214), the VA rating decision letter, and evidence of the combat-related portion if not in the rating letter; submit by March 1."
   },
   {
    "programRef": "Surviving Spouse of KIA Service Member",
    "name": "Original Application for Homestead and Related Tax Exemptions",
    "number": "DR-501",
    "url": "https://floridarevenue.com/property/Documents/dr501.pdf",
    "revision": "R. 01/26",
    "filedWith": "county property appraiser",
    "note": "Check 'Surviving spouse of veteran who died while on active duty' (s. 196.081(4)); attach the official letter from the U.S. Government or VA."
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "03-01",
   "text": "F.S. 196.011(1)(a): application must be filed with the county property appraiser 'on or before March 1 of each year'; failure to do so 'shall constitute a waiver of the exemption privilege for that year,' subject to the late-filing provisions in subsections (8) and (9). DR-501: 'Application due to property appraiser by March 1.' Qualification (ownership, permanent residency, disability status) is measured as of January 1."
  },
  "effective": "Tax year beginning January 1 of the year of application (status measured on January 1). Not prorated, except the s. 196.081(1)(b) refund: a totally and permanently disabled veteran who acquires a new homestead between January 1 and November 1 and is granted the exemption the next year may receive a prorated refund of that first year's tax on the new property.",
  "lateFiling": "F.S. 196.011(9): a person who misses March 1 may file 'on or before the 25th day following the mailing' of the TRIM notices under s. 194.011(1) (typically mid-August to early September); the property appraiser may grant the exemption for 'extenuating circumstances judged by the property appraiser to warrant granting the exemption,' otherwise the applicant may petition the value adjustment board within the same 25-day window with a $15 nonrefundable fee. F.S. 196.011(8): the VAB must grant the exemption where failure to apply by March 1 is documented as 'the result of postal error.'",
  "retroactivity": {
   "type": "fixed",
   "years": 4,
   "text": "Limited. F.S. 196.081(5): a veteran may apply BEFORE receiving the VA documentation; once the letter arrives the exemption is granted 'as of the date of the original application' and excess taxes paid are refunded, limited to the 4-year period in s. 197.182(1)(e). The same rule applies to the 65+ combat discount (s. 196.082(7)). No refund is available for years in which no application was on file."
  },
  "renewal": {
   "type": "none",
   "text": "F.S. 196.011(6)-(7): once the original application is granted the property appraiser mails a renewal application by February 1 each year, which 'shall be accepted as evidence of exemption' unless denied; F.S. 196.011(10) lets a county waive the annual renewal entirely (most do, so the exemption renews automatically). The owner must notify the property appraiser of any change in use, ownership, or (for the veteran discount) percentage of disability (s. 196.011(10)(d)); unpaid back taxes can be assessed for up to 10 years with 15 percent interest and a 50 percent penalty."
  },
  "ratingChange": "s. 196.081 requires a VA letter certifying total and permanent service-connected disability; loss of that status must be reported (s. 196.011(10)). For s. 196.082 the discount equals the combat-related percentage, and the veteran 'must notify the property appraiser promptly whenever ... the percentage of disability' changes. A veteran upgraded to 100% P&T files the new VA letter with DR-501 by March 1 (or applies early and gets the s. 196.081(5) refund).",
  "move": "File a new DR-501 with the property appraiser of the new county by March 1. s. 196.081(1)(b): a veteran already receiving the total exemption who acquires a new homestead between January 1 and November 1 can get a prorated refund of taxes paid on the new property for that year once the exemption is granted the following year.",
  "onlineFiling": {
   "available": null,
   "text": "Most county property appraisers offer online homestead/exemption filing on their own sites; DR-501 is also accepted by mail or in person. No statewide portal."
  },
  "documents": [
   "s. 196.081: 'letter from the United States Government or United States Department of Veterans Affairs' certifying total and permanent service-connected disability (or that the veteran is confined to a wheelchair / SAH grant for s. 196.091)",
   "s. 196.24: VA letter showing the 10% or greater service-connected disability",
   "s. 196.082 (DR-501DV): VA rating decision letter stating the percentage, evidence the disability is combat-related, copy of honorable discharge (DD-214), proof of age 65+ as of January 1",
   "Proof of Florida permanent residency on January 1 (DR-501 lists Florida driver license or ID, voter registration, vehicle registration, declaration of domicile) and Social Security numbers (s. 196.011(1)(b))",
   "Surviving spouse: death certificate; for s. 196.081(4), the official letter attesting the service member's death while on active duty"
  ],
  "survivingSpouse": "s. 196.081(3): the surviving spouse of a totally and permanently disabled veteran keeps the exemption while holding title and living there; on sale, the exemption amount (up to the most recent tax roll value) transfers to a new primary residence until remarriage. s. 196.082(3): the 65+ combat discount 'carries over to the benefit of the veteran's spouse' until remarriage or disposal. s. 196.081(4): surviving spouse of a veteran who died while on active duty is fully exempt.",
  "appeal": "Denial notices issue by July 1; petition the county value adjustment board (s. 194.011; s. 196.011(9) for late-filing petitions, $15 fee), then circuit court.",
  "statute": "F.S. 196.011, 196.081, 196.082, 196.24, 196.091, 196.173 (deployed), 197.182(1)(e); Rule 12D-16.002, F.A.C.",
  "sourceUrls": [
   {
    "url": "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0196/Sections/0196.011.html",
    "title": "F.S. 196.011 Annual application required for exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0196/Sections/0196.081.html",
    "title": "F.S. 196.081 Exemption for certain permanently and totally disabled veterans and surviving spouses",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0196/Sections/0196.082.html",
    "title": "F.S. 196.082 Discounts for disabled veterans 65+",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0100-0199/0196/Sections/0196.24.html",
    "title": "F.S. 196.24 Exemption for disabled ex-servicemember",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://floridarevenue.com/property/Documents/dr501.pdf",
    "title": "Form DR-501 (R. 01/26)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://floridarevenue.com/property/Documents/dr501dv.pdf",
    "title": "Form DR-501DV (R. 11/21)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://floridarevenue.com/property/Pages/Forms.aspx",
    "title": "Florida DOR Property Tax Oversight forms index",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://floridarevenue.com/property/Pages/LocalOfficials.aspx",
    "title": "Florida DOR local officials directory",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [],
  "notes": "Statutes read via WebFetch of leg.state.fl.us; forms read with pdftotext. The 196.24 statute page returned 200 but was not opened (its filing is the generic DR-501/March 1 process). The deployed-military exemption (s. 196.173) uses a separate form (DR-501M); it was not verified in this pass and is omitted from forms. The DR-501 program checkbox for 196.24 is labeled 'Veteran disabled 10% or more'."
 },
 "GA": {
  "state": "GA",
  "officeType": "county tax commissioner (some counties delegate to the board of tax assessors)",
  "officeTypeNote": "Georgia DOR: applications are filed with the county tax commissioner's office, 'or in some counties the tax assessor's office has been delegated to receive applications for homestead exemption.' The vehicle ad valorem/TAVT exemption is a separate filing at the county tag office (MV-30).",
  "officeLocator": {
   "tier": 1,
   "url": "https://dor.georgia.gov/county-property-tax-facts-links",
   "label": "Georgia DOR: County Property Tax Facts (per-county pages list the Tax Commissioner and Board of Tax Assessors and say which office takes homestead applications)",
   "countyUrlPattern": "https://dor.georgia.gov/county-property-tax-facts-{county}",
   "slugRule": "county name lowercased, spaces replaced with hyphens (e.g. ben-hill, jeff-davis, dekalb, mcduffie); verified for dougherty, fulton, ben-hill",
   "fallbackUrl": "https://dor.georgia.gov/property-tax-homestead-exemptions",
   "note": "The per-county page states the local return window (Jan 1 to Apr 1 in most counties) and whether the tax commissioner or board of assessors receives homestead applications."
  },
  "forms": [
   {
    "programRef": "Homestead Exemption",
    "name": "LGS-Homestead: Application for Homestead Exemption (state form; question 2 covers the 100% disabled veteran and unremarried surviving spouse). Many counties use their own local application instead.",
    "number": "LGS-Homestead",
    "url": "https://dor.georgia.gov/document/form/lgs-homestead-application-homestead-exemption/download",
    "revision": "Rev 10-08",
    "filedWith": "county tax commissioner or tax receiver (board of tax assessors in delegated counties)"
   },
   {
    "programRef": "Killed In Action Survivor Exemption",
    "name": "LGS-Homestead: Application for Homestead Exemption (question 3: unremarried surviving spouse of a US service member killed in action)",
    "number": "LGS-Homestead",
    "url": "https://dor.georgia.gov/document/form/lgs-homestead-application-homestead-exemption/download",
    "revision": "Rev 10-08",
    "filedWith": "county tax commissioner or tax receiver"
   },
   {
    "programRef": "Vehicle Ad Valorem",
    "name": "MV-30: Georgia Veteran's Affidavit for Relief of State and Local Title Ad Valorem Tax Fees (check 'Military Disabled - Constitutional Exemption', O.C.G.A. 48-5-478; attach VA letter)",
    "number": "MV-30",
    "url": "https://dor.georgia.gov/document/form/mv-30-georgia-veterans-affidavit-relief-state-and-local-title-ad-valorem-tax-feespdf/download",
    "revision": "Revised 06/2025",
    "filedWith": "county tag office"
   },
   {
    "programRef": "Sales Tax Vehicle",
    "name": "MV-30 (check 'Military Disabled - Service Connected', O.C.G.A. 48-8-3(30); attach the VA grant letter for the specially adapted vehicle)",
    "number": "MV-30",
    "url": "https://dor.georgia.gov/document/form/mv-30-georgia-veterans-affidavit-relief-state-and-local-title-ad-valorem-tax-feespdf/download",
    "revision": "Revised 06/2025",
    "filedWith": "county tag office"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-01",
   "text": "DOR: to receive the exemption for the current year the owner must have owned and occupied the home on January 1 and file by the county's property-tax-return deadline (April 1 in most counties). DOR also says taxpayers 'may apply up to the end of their 45-day window to appeal their notice of assessment' beyond 'the historic deadline of April 1st.'"
  },
  "effective": "Tax year in which the application is timely filed; owner must have owned and occupied the homestead on January 1 of that year. Not prorated.",
  "lateFiling": "An application filed after the deadline (and after the 45-day assessment-appeal window) is applied to the following tax year. Per the LGS-Homestead affidavit, the applicant must have occupied the home on Jan 1 of the year applied for.",
  "retroactivity": {
   "type": "fixed",
   "years": 3,
   "text": "O.C.G.A. 48-5-48(g)(1): if the VA issues a final determination 'containing a retroactive period of eligibility,' the veteran (or surviving spouse/minor children) 'shall be entitled to a refund of the ad valorem taxes paid during such period,' limited to 'the three tax years preceding ... application.' Otherwise no refund of prior years."
  },
  "renewal": {
   "type": "none",
   "text": "O.C.G.A. 48-5-48(d): 'Each disabled veteran shall file for the exemption only once in the county of his or her residence. Once filed, the exemption shall automatically be renewed from year to year.' Subsection (e): the board of tax assessors may require substantiation of continuing eligibility 'not more often than once every three years.'"
  },
  "ratingChange": "A veteran who reaches 100%/IU (or a qualifying statutory award) after already holding the standard homestead exemption must file a new application with the VA or GDVS letter; if the VA rating is retroactive, the 3-year refund in 48-5-48(g) applies. Loss of eligibility must be reported to the county (board may re-verify every 3 years).",
  "move": "File only once 'in the county of his or her residence'; a new homestead requires a new application in the new county. Only one person may hold the exemption on the basis of any one veteran (48-5-48(b)).",
  "onlineFiling": {
   "available": null,
   "text": "Varies by county. DOR's page notes some counties accept online filing; several counties require disability exemptions to be filed in person or with the supporting letter attached. Check the County Property Tax Facts page."
  },
  "documents": [
   "Letter from the US Department of Veterans Affairs or the Georgia Department of Veterans Service 'stating the qualifying disability' (O.C.G.A. 48-5-48(c)(1)); GDVS field offices will verify eligibility and issue this letter, and VA's 'Summary of Benefits' letter also works",
   "DD-214 plus a Georgia-licensed physician's letter for veterans qualifying under the constitutional (non-VA) categories (48-5-48(c)(2)-(3))",
   "Georgia residency: the LGS-Homestead form asks the county of voter registration and vehicle registration",
   "Proof of ownership and occupancy on January 1 (deed book/page, purchase date are fields on the form)",
   "Social Security numbers and year of birth for applicant and spouse (form fields)",
   "For MV-30 (vehicle): letter from the VA; for the sales-tax exemption, the VA grant letter for the specially adapted vehicle"
  ],
  "survivingSpouse": "The unremarried surviving spouse or minor children keep the exemption 'so long as they continue to occupy the home as a residence and homestead' (48-5-48(d)); it does not currently follow them to a new home. HB 52 (2025-2026, Senate Finance substitute LC 59 0472S, adopted by the Senate 4/2/2026) would extend it to 'any future homestead' effective 1/1/2027 only if approved at the November 2026 statewide referendum; not yet law as of the check date. Minor child's exemption ends in the tax year they turn 18.",
  "appeal": "LGS-Homestead form: 'If this application is denied an appeal may be filed in accordance with O.C.G.A. § 48-5-311' (appeal to the county board of equalization within 45 days of the denial notice).",
  "statute": "O.C.G.A. 48-5-48 (disabled veteran homestead); 48-5-52.1 (KIA surviving spouse); 48-5-45 (application deadline); 48-5-478 (vehicle ad valorem); 48-8-3(30) (vehicle sales tax)",
  "sourceUrls": [
   {
    "url": "https://dor.georgia.gov/property-tax-homestead-exemptions",
    "title": "Georgia DOR: Property Tax Homestead Exemptions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.georgia.gov/document/form/lgs-homestead-application-homestead-exemption/download",
    "title": "LGS-Homestead Application for Homestead Exemption (PDF, Rev 10-08)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.georgia.gov/county-property-tax-facts-links",
    "title": "Georgia DOR: County Property Tax Facts links",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.georgia.gov/county-property-tax-facts-fulton",
    "title": "Georgia DOR: County Property Tax Facts Fulton (example county page)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legis.ga.gov/api/legislation/document/20172018/165168",
    "title": "Georgia General Assembly SB 167 (2017) bill text reproducing O.C.G.A. 48-5-48 subsections (a)-(f)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legis.ga.gov/api/legislation/document/20252026/247743",
    "title": "Georgia General Assembly HB 52 Senate Finance substitute LC 59 0472S (2026) reproducing 48-5-48 (b),(d),(e),(g)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://veterans.georgia.gov/disabled-veteran-homestead-tax-exemption",
    "title": "Georgia Department of Veterans Service: Disabled Veteran Homestead Tax Exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://veterans.georgia.gov/tax-exemptions",
    "title": "Georgia Department of Veterans Service: Tax Exemptions (vehicle ad valorem)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.georgia.gov/document/form/mv-30-georgia-veterans-affidavit-relief-state-and-local-title-ad-valorem-tax-feespdf/download",
    "title": "MV-30 Georgia Veteran's Affidavit for Relief of TAVT (Revised 06/2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[0].details",
    "issue": "Details text still says 'up to $121,812' (the 2025 figure); summary already carries the TY2026 $126,526 figure. DOR page itself still shows $121,812 for 2025 as of check date, so the 2026 figure in the summary could not be confirmed on dor.georgia.gov.",
    "source": "https://dor.georgia.gov/property-tax-homestead-exemptions"
   }
  ],
  "notes": "Statute text was read from Georgia General Assembly bill PDFs (legis.ga.gov returns 405 to HEAD requests but 200 to GET; the official O.C.G.A. is on LexisNexis and Justia blocked fetches). The LGS-Homestead PDF is the generic state form dated Rev 10-08; most metro counties (DeKalb, Fulton, Cobb, Gwinnett) use their own online/local applications, so the tool should send users to the county page first. HB 1498 (2025-2026) proposing automatic homestead grants at closing was not confirmed as enacted. The vehicle exemption (48-5-478) is handled by the county tag office, not the property tax office."
 },
 "GU": {
  "state": "GU",
  "officeType": "territorial Real Property Tax Division (Dept. of Revenue and Taxation)",
  "officeTypeNote": "Guam has one filing office for the whole territory: the Real Property Tax Division (RPTD) of the Department of Revenue and Taxation, PO Box 23607, Barrigada GU 96921 (physical office listed on DRT notices as 1240 Army Drive, Barrigada). The form is addressed to 'the assessor's office'; the Tax Assessor sits inside RPTD. Phone (671) 635-7653 / 635-1892; email realproperty@revtax.guam.gov.",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.guamtax.com/about/rpt.html",
   "label": "Guam DRT: Real Property Tax Division (single territorial office)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.guamtax.com/forms/index.html",
   "note": "No county layer. The RPT Division page lists the administrator, assessment and appraisal supervisors, phone, and email; the forms page (fallbackUrl) hosts every RPT application under 'Real Property Tax Applications & Forms'."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Application for Veteran Exemption (100% Disabled or unemployable due to military service-connected injuries / Surviving Spouse / Gold Star Spouse or Parent)",
    "number": null,
    "url": "https://www.guamtax.com/forms/RPT_apps_forms/APPLICATIONFORVETERANEXEMPTION(2).pdf",
    "revision": null,
    "filedWith": "Dept. of Revenue and Taxation, Real Property Tax Division (assessor's office)"
   },
   {
    "programRef": "*",
    "name": "Application for Veteran Exemption (older fillable version with Print/Clear buttons; same content)",
    "number": null,
    "url": "https://www.guamtax.com/forms/ApplicationforVeteranExemption.pdf",
    "revision": null,
    "filedWith": "Dept. of Revenue and Taxation, Real Property Tax Division (assessor's office)"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "03-15",
   "text": "Form: 'Application for veteran exemption must be filed with the assessor's office ... on or before the fifteenth (15th) day of March.' DRT reminder notices: 'Deadline to submit tax credit and exemption application is March 15.' Note: the statutory March 15 rule in 11 GCA § 24409(a) by its terms governs §§ 24401(c), 24401(d), 24402 and 24408; DRT applies the same date to the § 24401.1 veteran exemption on its form."
  },
  "effective": "Not stated in the statute or on the form. Exemptions apply to the tax year for which the claim is filed; the assessor must act on every claim 'on or before the first day of August' (§ 24412). Guam property tax is paid in two installments (notices: first installment due Feb 20, second Apr 20).",
  "lateFiling": "Not addressed for the veteran exemption. § 24409(a): 'No exemption shall be allowed unless the claim therefor is filed on or before the fifteenth (15th) day of March of each year for which the exemption is claimed' (text applies to the home exemption and §§ 24401(c)/(d)/24408).",
  "retroactivity": {
   "type": "unverified",
   "years": null,
   "text": "No provision grants the veteran exemption for prior years. Refunds exist only under § 24906 for taxes 'Paid more than once', 'Erroneously or illegally collected', or paid on improvements that did not exist, with a written application within three years of payment (§ 24907). Whether a late-claimed exemption qualifies is not stated."
  },
  "renewal": {
   "type": "none",
   "text": "DRT notices (2016, 2018): 'If you have already applied, you do not need to resubmit an application.' § 24409(a): 'once a claim is filed it shall have continuing effect as a new claim for the exemption for each subsequent year, unless it is disallowed or voided.' Any change in ownership, occupancy, or use must be reported within 30 days (§ 24409(b); $25 civil penalty plus back taxes)."
  },
  "ratingChange": "§ 24401.1(a)(2): the exemption 'shall be granted only as long as the Veteran claiming exemption remains one hundred percent (100%) disabled or individually unemployable, the surviving spouse is not remarried, and the legal guardian is lawfully vested with the power.' Report the change to RPTD within 30 days (§ 24409(b) as cited on DRT notices).",
  "move": "Exemption attaches to the residence owned and occupied; 'the exemption shall not be allowed on more than one (1) residence for any one (1) person' (§ 24401.1(a)(3)). Ceasing to own or occupy must be reported within 30 days and voids the prior claim; file a new application for the new home by March 15.",
  "onlineFiling": {
   "available": null,
   "text": "guamtax.com hosts fillable PDF applications; no online submission channel for exemption claims was found. Payments are taken at pay.guam.gov. Mail to PO Box 23607, Barrigada GU 96921 or file in person at RPTD."
  },
  "documents": [
   "Completed Application for Veteran Exemption, signed under penalty of law, with the parcel's Primary Identification Number (PIN) and municipality",
   "VA 'letter of VA Benefit Information' showing 100% service-connected disability or individual unemployability (form instructs applicants to obtain it from the VA office in Tiyan, tel. 648-0090)",
   "The form's 'Office of U.S. Department of Veterans Affairs Certification' block completed and signed by a VA official",
   "Last four digits of SSN, mailing and residence address (form fields)",
   "Disclosure of any rental or commercial use of part of the property (that portion is not exempt)"
  ],
  "survivingSpouse": "Covered. § 24401.1 exempts the residence of a 'surviving spouse, as defined in § 67101(e) of Chapter 67, Title 10 GCA' while not remarried, and of a 'legal guardian' as defined in § 67101(g). § 24401.2 separately exempts Gold Star spouses and parents eligible under 16 GCA § 7120.3(b). The same form covers all three categories (checkbox).",
  "appeal": "§ 24411: assessor serves a notice of disapproval with reasons. § 24413: applicant may file the notice with the Board of Equalization 'on or before September 15 of the same year'; the Board's decision is final unless either side files for review in the Superior Court within 15 days.",
  "statute": "11 GCA § 24401.1 (100% disabled veterans, surviving spouses, legal guardians; added by P.L. 34-106:1, June 5, 2018) and § 24401.2 (Gold Star spouses and parents); procedure §§ 24409-24413; refunds §§ 24906-24907",
  "sourceUrls": [
   {
    "url": "https://col.guamcourts.gov/sites/default/files/11gc024_Q.pdf",
    "title": "11 GCA Chapter 24, Real Property Tax (Guam Compiler of Laws, COL 2026-05-05)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.guamtax.com/forms/RPT_apps_forms/APPLICATIONFORVETERANEXEMPTION(2).pdf",
    "title": "DRT Real Property Tax Division: Application for Veteran Exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.guamtax.com/forms/ApplicationforVeteranExemption.pdf",
    "title": "DRT: Application for Veteran Exemption (fillable version)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.guamtax.com/forms/index.html",
    "title": "guamtax.com Forms: Real Property Tax Applications & Forms",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.guamtax.com/about/rpt.html",
    "title": "DRT: Real Property Tax Division (contacts, phone, email)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.guamtax.com/notices/2018DUEDATEANDEXEMPTIONREMINDERNOTICE.pdf",
    "title": "DRT Real Property Tax Reminder Notice: Tax Credit, Exemption Application and Due Dates (Tax Year 2018)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.guamtax.com/notices/2016DUEDATEANDEXEMPTIONREMINDERNOTICE.pdf",
    "title": "DRT Real Property Tax Reminder Notice (Tax Year 2016)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.guamtax.com/frontpagenotices/DRTRealProptertyTax2015.pdf",
    "title": "DRT 2015 Real Property Tax Delinquency notice (RPTD street address, 1240 Army Drive, Barrigada)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[Veteran Exemption].survivingSpouse",
    "issue": "Set to false, but 11 GCA § 24401.1(a) exempts the residence of the veteran's unremarried 'surviving spouse, as defined in § 67101(e) of Chapter 67, Title 10 GCA', and § 24401.2 exempts Gold Star spouses and parents. Should be true.",
    "source": "https://col.guamcourts.gov/sites/default/files/11gc024_Q.pdf"
   },
   {
    "field": "propertyTax.programs[Veteran Exemption].details",
    "issue": "Cites 'Guam Code 10-3-67101' as the exemption authority. 10 GCA § 67101 only supplies the surviving-spouse and legal-guardian definitions; the exemption itself is 11 GCA § 24401.1 (P.L. 34-106, June 5, 2018).",
    "source": "https://col.guamcourts.gov/sites/default/files/11gc024_Q.pdf"
   }
  ],
  "notes": "The 2018 and 2016 DRT reminder notices are the only official statements on renewal ('do not need to resubmit'); no 2025 or 2026 notice was found on guamtax.com (the /notices/ index page returns 200 but renders no links). The newer form drops the Print/Clear buttons and asks for SSN last four only; both versions carry identical statutory text. guamtax.com/rpt/ and /forms/rpt.html return 200 but render a server template error; use /about/rpt.html and /forms/index.html instead. The Guam Legislature PDF of P.L. 34-106 returned an HTML consent page, so the compiled statute (COL 2026-05-05) is the statutory source."
 },
 "HI": {
  "state": "HI",
  "officeType": "county real property assessment office (Department of Finance / Budget & Fiscal Services of each of the four counties)",
  "officeTypeNote": "Hawaii has no state-level property tax; each county writes and administers its own veteran exemption. File with the county's Real Property Assessment office: Honolulu RPAD (ROH 8-10.5), Maui RPA Division (MCC 3.48.475), Kauai Real Property Assessment Section (KCC 5A-11.6), Hawaii County Real Property Tax Division (Hilo/Kona). The state Department of Taxation does not take these claims.",
  "officeLocator": {
   "tier": 1,
   "url": "https://dod.hawaii.gov/ovs/benefits-and-services/",
   "label": "Hawaii Office of Veterans' Services: Benefits and Services (links each county's real property tax office under 'Tax exemptions on real property')",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://tax.hawaii.gov/",
   "note": "County office pages: Honolulu https://realproperty.honolulu.gov/tax-relief-and-forms/exemptions/totally-disabled-veterans/ (live) ; Kauai https://www.kauai.gov/Government/Departments-Agencies/Finance/Real-Property-Tax (live) ; Maui https://www.mauicounty.gov/1952/Real-Property-Assessment-Division (county page; HTTP 403 to automated checks, archived copy of 2026-08-13 at https://web.archive.org/web/20260813083256/https://www.mauicounty.gov/1952/Real-Property-Assessment-Division ; the county's own form points to www.mauipropertytax.com, which resolves to the qpublic records/forms portal) ; Hawaii County https://hawaiipropertytax.com/exemptions-programs/ (county page; Cloudflare-blocked to automated checks, archived copy of 2025-08-22 at https://web.archive.org/web/20250822200417/https://hawaiipropertytax.com/exemptions-programs/). The OVS page itself has no form numbers or deadlines; it only links the four county offices. The state DOTAX fallback is the state tax agency homepage only; it has no property-tax role."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Honolulu: Claim for Exemption, Homes of Totally Disabled Veterans (ROH 8-10.5). Also fileable online at realproperty.honolulu.gov/exemption/file-a-homes-of-totally-disabled-veterans-exemption/",
    "number": "BFS-RP-E-8-10.5",
    "url": "https://realproperty.honolulu.gov/media/00zfugyp/totally-disabled-va-exemption-e-8-105-rev-08_2026-fillable.pdf",
    "revision": "REV 08/2026",
    "filedWith": "City and County of Honolulu, Real Property Assessment Division (842 Bethel St Basement, Honolulu 96813, or 1000 Ulu'ohi'a St #206, Kapolei 96707); in person, mail, or online"
   },
   {
    "programRef": "*",
    "name": "Honolulu: Claim for Continuance of Home Exemption, Notice of Temporary Relocation to a Care Home or Facility, Totally Disabled Veterans (only if the veteran moves to a licensed care facility)",
    "number": "BFS-RP-E-8-10.5A",
    "url": "https://realproperty.honolulu.gov/media/capcyp2o/e-8-105a-rev-july-2026-fillable-final-v2.pdf",
    "revision": "July 2026",
    "filedWith": "City and County of Honolulu, Real Property Assessment Division; due on or before September 30 each year; no fax or email"
   },
   {
    "programRef": "*",
    "name": "Maui: Claim for Disability Exemption, Severely Disabled Veteran (Chapter 3.48.475 MCC; 70%+ VA rating). Live copy: https://www.mauicounty.gov/DocumentCenter/View/102703/Disability-Exemption-for-Disabled-Veterans (HTTP 403 to automated checks); URL below is the Wayback Machine's newest capture (2025-10-16) of that same county PDF, cited as archived.",
    "number": "DFT-475",
    "url": "https://web.archive.org/web/20251016174937/https://www.mauicounty.gov/DocumentCenter/View/102703/Disability-Exemption-for-Disabled-Veterans",
    "revision": "Archived copy: 'DFT-475 Revised 12/31/2025, Effective 2026 Assessment Year', deadline printed 'DECEMBER 31, 2025'. The live county file (read on the first pass; also indexed by search engines) is the next edition: Revised 12/10/2025, Effective 2027 Assessment Year, 'Deadline for Filing: DECEMBER 31, 2026'.",
    "filedWith": "County of Maui, Department of Finance, Real Property Assessment Division, 110 'Ala'ihi St Suite 110, Kahului 96732 (808-270-7297; RPA@co.maui.hi.us); Molokai office 100 Ainoa St, Kaunakakai 96748. Archived 2025 edition: 'we recommend mailing this application via certified mail with return receipt requested'; the current edition recommends emailing the claim and proof to RPA@co.maui.hi.us.",
    "note": "Listed on the county's RPA Forms and Instructions page as 'Disability Exemption for Disabled Veteran Application' (archived 2025-03-05: https://web.archive.org/web/20250305184645/https://www.mauicounty.gov/1953/RPA-Forms-and-Instructions). mauicounty.gov returns 403 to every automated method, so the form could not be re-read live on this pass."
   },
   {
    "programRef": "*",
    "name": "Kauai: Claim for Homes of Disabled Veteran Exemption (80% to 100% Disability), KCC 5A-11.6; requires an existing home exemption",
    "number": null,
    "url": "https://www.kauai.gov/files/assets/public/v/1/finance/rpa/2027-tax-relief-exemption-forms/veteran-disability-exemption-form-80-to-100-disability-_-rev-10.01.2025-fillable.pdf",
    "revision": "Rev. 10/01/2025",
    "filedWith": "County of Kauai, Real Property Assessment Section, 4444 Rice St Suite 454, Lihue 96766; rpassessment@kauai.gov"
   },
   {
    "programRef": "*",
    "name": "Kauai: Claim for Disability Exemption (veterans less than 80% disabled; up to $50,000 off assessed value, KCC 5A-11.8)",
    "number": null,
    "url": "https://www.kauai.gov/files/assets/public/v/1/finance/rpa/2027-tax-relief-exemption-forms/claim-for-disability-ex_less-than-80-disabled-veteran_-rev_07.07.2026-fillable.pdf",
    "revision": "Rev 07/07/2026",
    "filedWith": "County of Kauai, Real Property Assessment Section"
   },
   {
    "programRef": "*",
    "name": "Hawaii County: Claim for Totally Disabled Veterans (listed on the county exemptions page as 'RP Form 19-73 (Veterans Exemption)'). Live copy: https://hawaiipropertytax.com/forms/RP%20Form%2019-73%20Veterans%20Exemption%20(Dec%202023).pdf (Cloudflare-blocked to automated checks); URL below is the Wayback Machine's capture (2024-07-15) of that county PDF, cited as archived.",
    "number": "RP Form 19-73",
    "url": "https://web.archive.org/web/20240715021904/https://hawaiipropertytax.com/forms/RP%20Form%2019-73%20Veterans%20Exemption%20(Dec%202023).pdf",
    "revision": "REV. 12/2023 (newest capture in the Wayback index; the county's exemptions page still linked this edition on 2025-04-15. The county moved to a new WordPress site in mid-2025 whose exemption subpages have no archived capture, so a later revision cannot be ruled out; the form number is stable since at least REV. 09/2014)",
    "filedWith": "County of Hawaii, Department of Finance, Real Property Tax Division: Aupuni Center, 101 Pauahi St Suite 4, Hilo 96720 (clerical 808-961-8201, fax 808-961-8415) or West Hawaii Civic Center, 74-5044 Ane Keohokalole Hwy Bldg D 2nd Floor, Kailua-Kona 96740 (clerical 808-323-4880, fax 808-327-3538); 'Deliver or mail the claim form with certification by the Department of Veterans Affairs'; the form's receipt box also has an 'Email' option",
    "note": "Form instructions: 'For certification of total service connected disability, form must be mailed to the Department of Veterans Affairs, Evidence Intake Center, PO Box 4444, Janesville, WI 53547-4444, or ... by email at PCTC.VBAHON@VA.GOV'; alternatively the claimant signs an authorization for the Division to contact VA directly."
   }
  ],
  "deadline": {
   "type": "varies-by-county",
   "date": null,
   "text": "Honolulu: no annual deadline; 'The exemption will take effect beginning with the next tax payment date, either August 20 or February 20, provided that the claimant has filed ... before the applicable payment date' (form E-8-10.5 instructions). Maui: 'Deadline for Filing: DECEMBER 31' each year for the following assessment year (form DFT-475: Dec 31, 2025 for 2026 AY on the archived edition; Dec 31, 2026 for 2027 AY on the current edition; owner-occupied as of the following Jan 1). Kauai: 'FILING DEADLINE SEPTEMBER 30TH' for the following tax year (Sept 30, 2025 for TY2026). Hawaii County: December 31 for the following tax year, per the county's own legal notice (Dec 18/21/25, 2025): 'The deadline for filing an application ... is December 31, 2025', filed or postmarked by that date, with ownership recorded at the Bureau of Conveyances by the deadline; the county's older Disability Exemptions brochure (rev 10/2020) stated 'on or before June 30 for the first half payment or December 31 for the second half payment'."
  },
  "effective": "Honolulu: next semiannual tax payment date (Aug 20 or Feb 20) after a complete claim is filed. Maui: assessment year following the Dec 31 deadline (tax year beginning July 1). Kauai: tax year following the Sept 30 deadline. Hawaii County: tax year following the Dec 31 deadline (county legal notice); the form's VA block certifies disability 'as of January 1' of the claim year.",
  "lateFiling": "Honolulu: file any time; the exemption simply starts with the next payment date. Maui, Kauai, Hawaii County: a claim after the deadline applies to the next assessment/tax year (Maui press coverage: 'no exceptions will be made for late filings'; not confirmed in code text).",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No county ordinance, form or notice read provides refunds for prior years; exemptions are prospective from the next payment date (Honolulu) or next tax year (other counties)."
  },
  "renewal": {
   "type": "none",
   "text": "Honolulu ROH 8-10.5(b)(2): 'The home exemption will be granted only as long as the veteran claiming exemption remains totally disabled, and the director may require proof'; no annual re-file, but the claimant 'must notify RPAD within 30 days of any change in status.' Kauai KCC 5A-11.6: 'granted only as long as the disabled veteran claiming the exemption remains eighty percent (80%) to totally disabled'; report changes within 30 days. Hawaii County brochure (rev 10/2020): 'Once filed and granted, permanent disability exemptions do not have to be re-filed annually as long as all requirements continue to be met'; Form 19-73: 'duty to report to the assessor within 30 days after he/she ceases to qualify', failure is 'cause for disqualification and penalty' (brochure: $100 civil penalty). Maui: form DFT-475 has no annual re-file instruction; the county 'will verify the total service connected disability with the Veterans Administration'."
  },
  "ratingChange": "If the rating drops below the county threshold (Honolulu/Hawaii County: total; Maui: 70%; Kauai: 80%) the owner must report it (Honolulu, Kauai and Hawaii County: within 30 days; Honolulu threatens rollback taxes, penalties and interest under ROH 8-10.1(d)-(e); Hawaii County a $1,000 fine for a fraudulent claim). A veteran newly rated at the threshold files a fresh claim; counties verify the rating directly with VA when authorized on the form.",
  "move": "Exemption attaches to one owner-occupied home per veteran; a new home requires a new claim in the county where it sits (Hawaii County form 19-73 and Maui DFT-475 both ask whether a home exemption is claimed elsewhere and authorize cancelling the previous one). Honolulu continues the exemption if the veteran moves to a licensed Hawaii care facility and files form E-8-10.5A by Sept 30 each year (home must not be rented or sold).",
  "onlineFiling": {
   "available": true,
   "text": "Honolulu: yes, 'CLICK HERE TO FILE ONLINE' portal at realproperty.honolulu.gov/exemption/file-a-homes-of-totally-disabled-veterans-exemption/ (paper claims cannot be faxed or emailed). Maui: no portal; the current form asks you to email the claim and proof to RPA@co.maui.hi.us (the archived 2025 edition recommended certified mail). Kauai: email rpassessment@kauai.gov or deliver in person; some submissions via connect.kauai.gov per county notice. Hawaii County: no portal; Form 19-73 is delivered or mailed to the Hilo or Kona office (the receipt box lists 'U.S. Postmark / Email / OTC', so emailed claims appear to be accepted; no address published on the form)."
  },
  "documents": [
   "Honolulu: official ID; VA certification of total service-connected disability (or authorize RPAD on the form to verify with VA); ordinance also cites 'a certificate of disability issued by a licensed physician'; marriage certificate and veteran's death certificate for widow(er) claims; plot plan if more than one living unit; copy of trust if held in trust",
   "Maui: proof of age (driver's license, state ID, or birth certificate); the county 'will verify the total service connected disability with the Veterans Administration' (VA certification block on the form); Social Security number and TMK on the form",
   "Kauai: an approved home exemption must already exist on the parcel; VA claim number; authorize the Real Property Assessment Section to verify disability with VA or obtain VA certification yourself; 'may be required to submit a physician's report'",
   "Hawaii County (Form 19-73): VA certification block completed by the VA Regional Office (Evidence Intake Center, PO Box 4444, Janesville, WI 53547-4444, or PCTC.VBAHON@VA.GOV) certifying 'total service connected disability ... as of January 1', with the VA claim number; or sign the form's authorization for the Division to contact VA 'for the limited purpose of verifying the dates of entry, discharge, injury, and total disability'; last four digits of SSN; tax map key; plot plan on the back if more than one dwelling; ownership recorded at the Bureau of Conveyances by the deadline (county notice)"
  ],
  "survivingSpouse": "Honolulu: unmarried widow(er) who continues to own and occupy keeps the exemption and 'may apply even if the veteran never did' by proving the veteran would have qualified at death. Kauai KCC 5A-11.6(b): surviving spouse, civil union partner or reciprocal beneficiary may continue or apply posthumously if the veteran was 80%+ at death; ends on death, remarriage or new partnership. Hawaii County: 'The home exemption will be valid as long as the veteran claiming the exemption remains totally disabled or the widow or widower of the totally disabled veteran remains unmarried' (county Disability Exemptions brochure, rev 10/2020; Form 19-73 itself has no widow(er) box). Maui: form has no surviving-spouse box; the 2022 council press release says the amended 3.48.475 supports 'severely disabled veterans and their surviving spouses' but the enacted text was not read.",
  "appeal": "Assessment/exemption disputes go to each county's Board of Review (Honolulu: realproperty.honolulu.gov/appeals/file-an-appeal/; Maui: Real Property Board of Review via RPA Division; Hawaii County: 'Notice of Appeal to Tax Board of Review' form on hawaiipropertytax.com). Appeal windows are tied to the annual notice of assessment and were not researched here.",
  "statute": "No state statute. Revised Ordinances of Honolulu 8-10.5; Maui County Code 3.48.475 (amended by Bill 110 (2022), 70% threshold); Kauai County Code 5A-11.6 (80-100%) and 5A-11.8 (<80%); Hawaii County Code ch. 19 (Real Property Tax), article 6 exemptions (section number not confirmed; the county's exemptions page says 'All exemptions and programs allowed under Real Property Tax are in the Hawai'i County Code')",
  "sourceUrls": [
   {
    "url": "https://dod.hawaii.gov/ovs/benefits-and-services/",
    "title": "Hawaii Office of Veterans' Services: Benefits and Services (county real property tax office links; no county-level summaries)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://realproperty.honolulu.gov/tax-relief-and-forms/exemptions/totally-disabled-veterans/",
    "title": "Honolulu RPAD: Totally Disabled Veterans exemption page",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://realproperty.honolulu.gov/media/00zfugyp/totally-disabled-va-exemption-e-8-105-rev-08_2026-fillable.pdf",
    "title": "Honolulu Form BFS-RP-E-8-10.5 (REV 08/2026) with instructions and ROH 8-10.5 text",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://realproperty.honolulu.gov/media/capcyp2o/e-8-105a-rev-july-2026-fillable-final-v2.pdf",
    "title": "Honolulu Form BFS-RP-E-8-10.5A continuance (July 2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://realproperty.honolulu.gov/exemption/file-a-homes-of-totally-disabled-veterans-exemption/",
    "title": "Honolulu RPAD online filing portal for the totally disabled veterans exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://realproperty.honolulu.gov/media/a0onfffn/information-guide-rev-2026-06-26-85x14-v2.pdf",
    "title": "Honolulu RPAD Information Guide (rev 2026-06-26): exemption deadlines and forms",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.kauai.gov/Government/Departments-Agencies/Finance/Real-Property-Tax/Assessment",
    "title": "Kauai County Real Property Tax: Assessment Section (exemption list, forms, deadline); answers only to a plain curl UA",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.kauai.gov/files/assets/public/v/1/finance/rpa/2027-tax-relief-exemption-forms/veteran-disability-exemption-form-80-to-100-disability-_-rev-10.01.2025-fillable.pdf",
    "title": "Kauai Claim for Homes of Disabled Veteran Exemption (80-100%) Rev 10/01/2025 with KCC 5A-11.6 text",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.kauai.gov/files/assets/public/v/1/finance/rpa/2027-tax-relief-exemption-forms/claim-for-disability-ex_less-than-80-disabled-veteran_-rev_07.07.2026-fillable.pdf",
    "title": "Kauai Claim for Disability Exemption (<80% veteran) Rev 07/07/2026",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://web.archive.org/web/20251016174937/https://www.mauicounty.gov/DocumentCenter/View/102703/Disability-Exemption-for-Disabled-Veterans",
    "title": "ARCHIVED (Wayback 2025-10-16): Maui Form DFT-475 Claim for Disability Exemption, Severely Disabled Veteran (Revised 12/31/2025, Effective 2026 AY); live county URL returns 403 to automated checks",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true,
    "archived": true
   },
   {
    "url": "https://web.archive.org/web/20250305184645/https://www.mauicounty.gov/1953/RPA-Forms-and-Instructions",
    "title": "ARCHIVED (Wayback 2025-03-05): Maui RPA Forms and Instructions page listing 'Disability Exemption for Disabled Veteran Application' (DocumentCenter/View/102703)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true,
    "archived": true
   },
   {
    "url": "https://web.archive.org/web/20260813083256/https://www.mauicounty.gov/1952/Real-Property-Assessment-Division",
    "title": "ARCHIVED (Wayback 2026-08-13): Maui Real Property Assessment Division page (Kahului and Molokai office addresses)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true,
    "archived": true
   },
   {
    "url": "https://www.mauipropertytax.com/",
    "title": "Maui County real property tax portal named on Form DFT-475 (redirects to https://qpublic.net/hi/maui/; its 'Forms' link points back to the blocked mauicounty.gov forms page)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://mauicounty.us/council-meeting/press-release-molina-proposes-changes-to-veterans-homeowner-exemption-to-help-maui-countys-severely-disabled-veterans/",
    "title": "Maui County Council press release (June 16, 2022): Bill 110 (2022) amending MCC 3.48.475 to a 70% threshold; 'apply before Dec. 31 of this year for next year's tax cycle'",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://web.archive.org/web/20240715021904/https://hawaiipropertytax.com/forms/RP%20Form%2019-73%20Veterans%20Exemption%20(Dec%202023).pdf",
    "title": "ARCHIVED (Wayback 2024-07-15): Hawaii County RP Form 19-73 Claim for Totally Disabled Veterans (REV. 12/2023) with instructions, offices, VA certification block; live county URL is Cloudflare-blocked",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true,
    "archived": true
   },
   {
    "url": "https://web.archive.org/web/20250415010044/https://www.hawaiipropertytax.com/exemptions.html",
    "title": "ARCHIVED (Wayback 2025-04-15): Hawaii County Real Property Tax Division exemptions page (old site) listing 'RP Form 19-73 (Veterans Exemption)', 19-75, 19-75A and the Disability Exemptions Brochure",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true,
    "archived": true
   },
   {
    "url": "https://web.archive.org/web/20250822200417/https://hawaiipropertytax.com/exemptions-programs/",
    "title": "ARCHIVED (Wayback 2025-08-22): Hawaii County Exemptions/Programs page (new site): 'Each exemption and program requires an application to be submitted by the statutory deadline'; Hilo/Kona office addresses and hours",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true,
    "archived": true
   },
   {
    "url": "https://web.archive.org/web/20260814162140/https://www.hawaiicounty.gov/departments/finance/real-property-tax",
    "title": "ARCHIVED (Wayback 2026-08-14): Hawaii County Finance, Real Property Tax Division page (links out to hawaiipropertytax.com; no forms hosted on hawaiicounty.gov)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true,
    "archived": true
   },
   {
    "url": "https://statelegals.staradvertiser.com/?p=10063",
    "title": "Hawaii County Real Property Tax Division legal notice (Hawaii Tribune-Herald, Dec 18/21/25 2025; final URL /2025/12/18/0001514122-01/): Dec 31, 2025 exemption deadline, 'fifty percent of the minimum tax', Hilo/Kona addresses and phones",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.lincolninst.edu/sites/default/files/gwipp/upload/sources/Hawaii/2019/hi_hawaii_disability_exemption_brochure_real_property_tax_office_2019.pdf",
    "title": "Hawaii County Real Property Tax Division 'Explanation of the Real Property Tax: Disability Exemptions' brochure (county-authored, rev 10/2020), mirrored by the Lincoln Institute; final URL /app/uploads/legacy-files/...; used for renewal, widow(er) and penalty wording only",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://library.municode.com/hi/hawaii_county/codes/code_of_ordinances",
    "title": "Hawaii County Code on Municode (returns 200 but only a JavaScript shell; the content API is Cloudflare-challenged, so chapter 19 text could not be read)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://library.municode.com/hi/maui_county/codes/code_of_ordinances",
    "title": "Maui County Code on Municode (returns 200 but only a JavaScript shell; 3.48.475 text could not be read)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.hawaii.gov/",
    "title": "Hawaii Department of Taxation (state fallback only; no property-tax role)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.note",
    "issue": "Note says Honolulu minimum tax ~$300 and Kauai minimum $150: confirmed (Honolulu guide: 'minimum real property tax (currently $300), per ROH 8-11.1(g)'; Kauai page: minimum tax $150). Hawaii County's exemption leaves 'fifty percent of the minimum tax' payable, not the full minimum, per the county's Dec 2025 notice (the county's older rev 10/2020 brochure said 'the annual minimum tax').",
    "source": "https://statelegals.staradvertiser.com/?p=10063"
   }
  ],
  "wafBlockedUrls": [
   {
    "url": "https://hawaiipropertytax.com/exemptions-programs/",
    "note": "Hawaii County Real Property Tax Division exemptions/forms page; Cloudflare 'Just a moment' challenge returned 403 to every automated check (curl with Safari/Firefox/plain UAs and full browser headers, WebFetch). Loads in a normal browser. Archived copy used instead."
   },
   {
    "url": "https://hawaiipropertytax.com/forms/RP%20Form%2019-73%20Veterans%20Exemption%20(Dec%202023).pdf",
    "note": "Live Form 19-73 PDF; 403 (Cloudflare). Archived 2024-07-15 copy used instead."
   },
   {
    "url": "https://www.hawaiicounty.gov/departments/finance/real-property-tax",
    "note": "Hawaii County Finance real property tax page; 403 to automated checks on every host path tried (/departments/finance, /i-want-to/read/county-code, /home/showpublisheddocument). Archived copy shows it only links out to hawaiipropertytax.com. records.hawaiicounty.gov (Laserfiche WebLink) answers 200 but requires a cookie/login session and exposes no browsable code folder."
   },
   {
    "url": "https://www.mauicounty.gov/1952/Real-Property-Assessment-Division",
    "note": "Maui County RPA page, /1953/RPA-Forms-and-Instructions and /DocumentCenter/View/102703 (Form DFT-475): 403 to curl (Safari, Firefox, plain UAs, full headers) and WebFetch on 2026-10-21; the Firefox UA that worked on the first pass no longer does. Archived copies used instead."
   },
   {
    "url": "https://api.municode.com/",
    "note": "Municode content API (needed to read Hawaii County Code ch. 19 and Maui County Code 3.48.475) returns a Cloudflare challenge; library.municode.com HTML is a JS shell; codelibrary.amlegal.com returns 403 and does not host either county anyway."
   }
  ],
  "notes": "Second pass 2026-10-21. Confidence raised from 'reported' to 'verified': every filing field for all four counties now comes from a county-authored form, page or legal notice that was opened, with the Hawaii County and Maui documents read from Wayback Machine captures of the counties' own files (flagged 'archived' in sourceUrls) because hawaiipropertytax.com, hawaiicounty.gov and mauicounty.gov block all automated access. Hawaii County: form number confirmed as RP Form 19-73 'Claim for Totally Disabled Veterans' (REV. 12/2023; earlier REV. 09/2014 mirrored by the Lincoln Institute), offices/phones/fax confirmed from the form, deadline Dec 31 from the county's Dec 2025 legal notice, no-annual-refile and unmarried-widow(er) rules from the county brochure. Remaining gaps for Hawaii County: (1) the current revision of 19-73 on the county's post-2025 WordPress site cannot be confirmed (no capture of the new exemption subpages exists; CDX shows no 19-73 capture after REV. 12/2023), (2) Hawaii County Code ch. 19 section text was not read (Municode blocked; county clerk code page blocked; Laserfiche portal not browsable), so the section number stays unconfirmed and the brochure's older 'June 30 / December 31' semiannual rule versus the notice's single Dec 31 deadline cannot be reconciled against the ordinance. Maui: Form DFT-475 confirmed from the county PDF (archived 2026-AY edition; current 2027-AY edition read on the first pass), office addresses from the archived RPA page (adds the Molokai office), forms-page listing confirmed. Remaining gap for Maui: MCC 3.48.475 enacted text not read; news reports (lead only, not cited) say the enacted CD1 of Bill 110 (2022) set the veteran's bill at 50% of the county minimum tax rather than the $150 originally proposed, which is consistent with the dollar layer's 'minimum tax per county form' wording but should be checked against the code when it is reachable. OVS county benefit summaries do not exist; the OVS page only links the four county offices. Honolulu and Kauai unchanged from the first pass and re-verified live (kauai.gov answers only to a plain 'curl/8.4.0' UA). Honolulu's generic exemption deadline (Sept 30) does NOT apply to the veteran exemption; the June 2026 guide says 'There is NO annual filing deadline' for it. Kauai requires an approved home exemption on the parcel before the veteran exemption can be granted. www.kauaipropertytax.com did not resolve on the check date. Internet Archive CDX/availability endpoints were intermittently 'Temporarily Offline' during this pass; all archived URLs cited were re-fetched with a final 200."
 },
 "IA": {
  "state": "IA",
  "officeType": "city or county assessor",
  "officeTypeNote": "Both the Disabled Veteran Homestead Tax Credit (54-049, filed together with the Homestead Tax Exemption form 54-028) and the Military Service Property Tax Exemption (54-146) are filed with the city or county assessor where the home sits. The assessor recommends allowance and forwards claims to the county board of supervisors, which allows or disallows them. For the military exemption the DD-214 must first be recorded with the county recorder (Iowa Code 426A.13); for the disabled veteran credit recording is optional (DD-214 may be attached instead).",
  "officeLocator": {
   "tier": 2,
   "url": "https://www.iowaassessors.com/",
   "label": "Iowa State Association of Assessors: county/city assessor directory (the site the Iowa DOR forms 54-049 and 54-146 tell claimants to use: 'Contact information for all assessors can be found at the Iowa State Association of Assessors website')",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://revenue.iowa.gov/taxes/tax-guidance/tax-credits-deductions-exemption/tax-credits-and-exemptions",
   "note": "Iowa DOR publishes no assessor directory of its own; the association site (iowa-assessors.org on the forms, which redirects to iowaassessors.com) links each county's assessor site or Beacon property page. Tier 2 because the directory is an association site, not a state agency page."
  },
  "forms": [
   {
    "programRef": "Disabled Veteran's Homestead Tax Credit",
    "name": "Disabled Veteran Homestead Property Tax Credit application (Iowa Code 425.1(2)(b) / 425.15); must be submitted WITH the Homestead Tax Exemption form 54-028",
    "number": "54-049",
    "url": "https://revenue.iowa.gov/media/2347/download?inline",
    "revision": "54-049a (07/14/2026)",
    "filedWith": "city or county assessor, by July 1 of the assessment year"
   },
   {
    "programRef": "Disabled Veteran's Homestead Tax Credit",
    "name": "Homestead Tax Credit and Exemption application (required companion to 54-049)",
    "number": "54-028",
    "url": "https://revenue.iowa.gov/media/2359/download?inline",
    "revision": "current DOR form (listed on the credits page)",
    "filedWith": "city or county assessor, by July 1"
   },
   {
    "programRef": "Military Property Tax Exemption",
    "name": "Military Service Property Tax Exemption application (Iowa Code chapter 426A)",
    "number": "54-146",
    "url": "https://revenue.iowa.gov/media/2353/download?inline",
    "revision": "54-146a (07/14/2025)",
    "filedWith": "city or county assessor, filed or postmarked by July 1; DD-214 recorded with the county recorder first"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "07-01",
   "text": "Form 54-049: 'This application must be filed with your city or county assessor by July 1 of the assessment year.' Form 54-146: 'filed or postmarked to your city or county assessor on or before July 1. An application received after July 1 will be considered an application for the following year.' Iowa Code 425.2(1): 'A claim filed after July 1 ... shall be considered as a claim filed for the following year.'"
  },
  "effective": "Assessment year of the timely claim; 'A claim timely filed by July 1 of the assessment year will apply to taxes due and payable in September of the following calendar year and March of the next' (54-049 fact sheet: a claim filed by July 1, 2026 covers taxes due Sept 2027 and March 2028). Veteran must own and occupy the homestead on July 1.",
  "lateFiling": "A claim filed after July 1 is treated as a claim for the following assessment year (Iowa Code 425.2(1); forms 54-049/54-146). No late-filing cure.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No refund of prior years; the credit begins with the assessment year of the timely claim."
  },
  "renewal": {
   "type": "none",
   "text": "54-049: 'Reapplication is not required. Upon the filing and allowance of the claim, the claim is allowed on the homestead for successive years without further filing' while the owner stays eligible and uses it as a homestead on July 1. 426A.13(3) (military exemption): 'the claim shall be allowed to that person for successive years without further filing.' Owner must give 'written notification ... to the assessor if the circumstances change' or on conveyance."
  },
  "ratingChange": "Only a PERMANENT 100% service-connected rating, or permanent-and-total IU paid at 100%, qualifies (425.15(1)(b)); a temporary 100% does not. A veteran who reaches a qualifying rating files 54-049 with a Benefits Summary/'Benefits Paid' letter dated within 12 months by the next July 1. If the rating drops, written notice to the assessor is required; the veteran may instead claim the smaller military exemption (cannot hold both: 425.15(3)).",
  "move": "425.15(4): 'If an owner acquires a different homestead, the credit allowed under this section may be claimed on the new homestead.' File a new 54-049 + 54-028 with the new assessor by July 1; the seller or estate must notify the old assessor. For the military exemption the owner must 'refile for the exemption' when designating different property (426A.13(3)).",
  "onlineFiling": {
   "available": null,
   "text": "Iowa DOR provides fillable PDFs only; many assessors accept applications by email or through their county sites (e.g. Beacon or county portals). Check the assessor's page via the directory."
  },
  "documents": [
   "Form 54-049 plus Form 54-028 Homestead Tax Exemption application",
   "DD-214 or equivalent (attached, or recorded with the county recorder with book/page cited)",
   "VA Benefits Summary Letter / 'current Benefits Paid letter issued within 12 months of your application date' showing permanent 100% service-connected rating or P&T IU at 100% (DOR: 'all supporting documentation must be within the last 12 months'; 'do not send any personal health information')",
   "Surviving spouse or child claiming on DIC: current DIC or CPD (Compensation and Pension Death) letter",
   "Military exemption (54-146): DD-214 or equivalent recorded with the county recorder (volume/page on the form); Iowa residency and domicile"
  ],
  "survivingSpouse": "425.15(2)(a): the credit 'shall be continued to the estate of an owner who is deceased or the surviving spouse and any child ... so long as the surviving spouse remains unmarried' (no new filing needed on the same homestead). Separately, a surviving spouse or child receiving DIC qualifies in their own right (425.15(1)(d)), 'even upon remarriage,' and may claim on a new homestead with a current DIC/CPD letter.",
  "appeal": "Disallowed claims: the board of supervisors mails written reasons; appeal to district court within 20 days of mailing (426A.14(5) for the military exemption; homestead credit appeals follow Iowa Code 425.4-425.7 to the board of supervisors and district court).",
  "statute": "Iowa Code 425.15 (disabled veteran tax credit); 425.1(2)(b), 425.2 (homestead credit filing); 426A.11-426A.14 (military service exemption); 2026 Iowa Acts SF 2472 (half-acre limit); IAC 701-110.1, 110.2",
  "sourceUrls": [
   {
    "url": "https://revenue.iowa.gov/media/2347/download?inline",
    "title": "Iowa DOR Form 54-049 Disabled Veteran Homestead Property Tax Credit (07/14/2026) with fact sheet",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.iowa.gov/media/2353/download?inline",
    "title": "Iowa DOR Form 54-146 Military Service Property Tax Exemption (07/14/2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.iowa.gov/media/2359/download?inline",
    "title": "Iowa DOR Form 54-028 Homestead Tax Credit and Exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.iowa.gov/taxes/tax-guidance/tax-credits-deductions-exemption/disabled-veteran-homestead-property-tax-credit",
    "title": "Iowa DOR guidance: Disabled Veteran Homestead Property Tax Credit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.iowa.gov/taxes/tax-guidance/tax-credits-deductions-exemption/tax-credits-and-exemptions",
    "title": "Iowa DOR: Tax Credits and Exemptions (property tax list)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legis.iowa.gov/docs/code/425.15.pdf",
    "title": "Iowa Code 2026 §425.15 Disabled veteran tax credit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legis.iowa.gov/docs/code/425.2.pdf",
    "title": "Iowa Code 2026 §425.2 Qualifying for credit (July 1 filing, successive years)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legis.iowa.gov/docs/code/426A.13.pdf",
    "title": "Iowa Code 2026 §426A.13 Claim for military tax exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legis.iowa.gov/docs/code/426A.14.pdf",
    "title": "Iowa Code 2026 §426A.14 Allowance, continuing effectiveness, appeal",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.iowaassessors.com/",
    "title": "Iowa State Association of Assessors: assessor directory (referenced on DOR forms)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[0].summary (Military Property Tax Exemption)",
    "issue": "Form 54-028 (2026) notes that 'Beginning with assessment year 2026, the homestead credit has been replaced with a homestead exemption of 10% of the taxable value' (min $5,500, max $20,000); unrelated to the veteran rows but the tool's Iowa baseline homestead math may be stale.",
    "source": "https://revenue.iowa.gov/media/2359/download?inline"
   }
  ],
  "notes": "Iowa's disabled veteran credit is 'the entire amount of the tax levied on the homestead' and requires the homestead exemption to be in place, so first-time claimants file 54-028 and 54-049 together. The 07/14/2026 revision of 54-049 already carries the SF 2472 half-acre rule for applications on or after July 1, 2026. iowa-assessors.org (the domain printed on the forms) returned 403 to automated checks; iowaassessors.com (same association) is live and was used. The DOR credits page labels the 54-049/54-146 PDFs 'archived' in its markup but they are the current linked forms."
 },
 "ID": {
  "state": "ID",
  "officeType": "county assessor",
  "officeTypeNote": "Apply with the county assessor (paper) or online through the Idaho State Tax Commission's TAP portal; the Tax Commission administers the program statewide and reimburses counties. The county treasurer only bills; the assessor takes the application.",
  "officeLocator": {
   "tier": 1,
   "url": "https://tax.idaho.gov/contact-us/contact-property-tax/",
   "label": "Idaho State Tax Commission: Contacting Property Tax (table of all 44 county assessors and treasurers with links)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://tax.idaho.gov/taxes/property/",
   "note": "Links go to each county's own assessor site (e.g. https://adacounty.id.gov/Assessor), so there is no predictable state URL pattern. 'For questions about your property's assessed value, contact your county assessor.'"
  },
  "forms": [
   {
    "programRef": "Property Tax Benefit for Disabled Veterans (Idaho Code 63-705A)",
    "name": "Disabled Veteran Property Tax Benefit Application (annual; the Tax Commission posts the new year's PDF on the Veteran Benefit page when the Jan 1 window opens, and county assessors hand it out). Online: TAP portal 'Property Tax Relief' link.",
    "number": null,
    "url": "https://idahotap.gentax.com/TAP?Link=PTR",
    "revision": "2027 paper form not yet posted as of 2026-10-21 (page text: 'Download it here' link absent off-season); the online TAP application is the stable link",
    "filedWith": "county assessor (mail or in person) or online via Tax Commission TAP"
   },
   {
    "programRef": "General Reduction Program",
    "name": "Property Tax Reduction (circuit breaker) Application plus Medical Expense Statement (EFO00119); application instructions EIN00038",
    "number": "EFO00119 (medical expense statement); EIN00038 (instructions)",
    "url": "https://tax.idaho.gov/wp-content/uploads/forms/EFO00119/EFO00119_09-23-2026.pdf",
    "revision": "09-23-2026",
    "filedWith": "county assessor or online via TAP; Jan 1 to Apr 15"
   },
   {
    "programRef": "Deferral Program",
    "name": "Property Tax Deferral Application (guide EBR00067); apply Jan 1 to Sept 7",
    "number": "EBR00067 (guide)",
    "url": "https://tax.idaho.gov/wp-content/uploads/pubs/EBR00067/EBR00067_09-22-2026.pdf",
    "revision": "09-22-2026",
    "filedWith": "county assessor or online via TAP"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-15",
   "text": "Tax Commission: 'You must apply between January 1 and April 15, 2027, for a reduction to 2027 property taxes.' Pub 650: 'You must file the application with your assessor's office from January 1 through April 15.' The veteran must be rated 100%/IU 'as of January 1' and have owned and lived in the home 'before April 15.'"
  },
  "effective": "Same tax year as the application; 'If you're approved, your benefit will appear on your December 2027 property tax bill' (i.e. the bill issued in the year of application).",
  "lateFiling": "No late-filing provision on the Tax Commission page or Pub 650; an application after April 15 waits for the next January 1 window. (In 2021 the legislature extended that year's deadline to June 15 by special act; not recurring.)",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No refund of prior years; the benefit is an annual reduction applied to the current-year bill only."
  },
  "renewal": {
   "type": "annual",
   "text": "Tax Commission: 'You must apply and qualify for this program every year.' Exception: 'If your disability is permanent and total, you don't need to reapply each year. The benefit will renew automatically.' Pub 650: 'You must apply and qualify each year unless your disability is permanent and total.'"
  },
  "ratingChange": "Eligibility is tested 'as of January 1' each year with 'a current letter from the U.S. Department of Veterans Affairs confirming your 100% service-connected disability rating' (or 100% IU compensation). A veteran whose rating reaches 100% during a year applies in the next Jan 1 to Apr 15 window; a non-P&T veteran whose rating drops below 100% simply does not re-qualify. P&T veterans on auto-renewal should tell the assessor if status changes (Idaho Code 63-708 lets the state recover benefits paid in error).",
  "move": "Idaho Code 63-705A allows transfer of the current-year benefit to a new qualifying homestead if the veteran moves after April 15 but before October 1 and notifies the Tax Commission before October 1 (per Tax Commission summary; statute text not opened). 'The benefit isn't transferable to a new property after the death of the veteran.'",
  "onlineFiling": {
   "available": true,
   "text": "Yes: Idaho TAP 'Property Tax Relief' application at https://idahotap.gentax.com/TAP?Link=PTR (also reached via tax.idaho.gov/proptaxrelief). Paper applications go to the county assessor."
  },
  "documents": [
   "Current VA letter 'confirming your 100% service-connected disability rating or individual unemployment, as of January 1' of the tax year (Pub 650)",
   "Property must already carry a current Idaho homeowner's exemption (apply for that first with the assessor if new to the home)",
   "Proof of ownership/occupancy as primary residence before April 15 (deed or title for first-time claimants, per county assessor instructions; mobile homes qualify)",
   "Trust Affidavit (EFO00183) or LP/LLC/Corporation Affidavit (EFO00184) if title is held that way"
  ],
  "survivingSpouse": "Tax Commission: 'Once granted to a qualifying veteran, a surviving spouse can use this benefit' for the current property; 'The benefit isn't transferable to a new property after the death of the veteran.' Pub 650: 'If we grant this benefit to a qualifying veteran who then dies, the surviving spouse can use it for the current property.'",
  "appeal": "Not stated on the Tax Commission pages read. Denials are issued by the Tax Commission after county review; contact the Tax Commission at (208) 334-7736 (property tax relief line).",
  "statute": "Idaho Code 63-705A (veterans benefit); 63-701 to 63-710 (property tax reduction); 63-712 et seq. (deferral)",
  "sourceUrls": [
   {
    "url": "https://tax.idaho.gov/taxes/property/homeowners/veteran-benefit/",
    "title": "Idaho State Tax Commission: Property Tax Benefit for Veterans with 100% Service-Connected Disability",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.idaho.gov/wp-content/uploads/pubs/EBR00650/EBR00650_09-22-2026.pdf",
    "title": "Idaho Tax Commission Pub 650: Property Tax Benefit for Veterans with 100% Service-connected Disability (09-22-2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.idaho.gov/contact-us/contact-property-tax/",
    "title": "Idaho Tax Commission: Contacting Property Tax (county assessor/treasurer directory)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://idahotap.gentax.com/TAP?Link=PTR",
    "title": "Idaho TAP: Property Tax Relief online application",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.idaho.gov/taxes/property/homeowners/reduction/",
    "title": "Idaho Tax Commission: Property Tax Reduction program",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.idaho.gov/taxes/property/homeowners/deferral/",
    "title": "Idaho Tax Commission: Property Tax Deferral program",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.idaho.gov/taxes/property/homeowners/forms/",
    "title": "Idaho Tax Commission: Property Homeowners Forms",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.idaho.gov/wp-content/uploads/forms/EFO00119/EFO00119_09-23-2026.pdf",
    "title": "EFO00119 Property Tax Relief Medical Expense Statement (09-23-2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.idaho.gov/wp-content/uploads/pubs/EBR00067/EBR00067_09-22-2026.pdf",
    "title": "Idaho Tax Commission Pub 67: Property Tax Deferral guide (09-22-2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.idaho.gov/taxes/property/",
    "title": "Idaho Tax Commission: Property Tax (fallback)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[1].incomeLimit",
    "issue": "Tax Commission reduction page for the 2027 program now states the income limit as 'total 2026 income, after deducting medical expenses, must be $40,030 or less'; data file has $39,130 (the 2026-program figure).",
    "source": "https://tax.idaho.gov/taxes/property/homeowners/reduction/"
   }
  ],
  "notes": "The Tax Commission takes the veteran application PDF down between seasons: the 2026 form (seen in search results as EFO00301, tax.idaho.gov/document-mngr/forms_EFO00301, now 404) is gone and the 2027 form was not yet posted on 2026-10-21, so forms[0].url points to the TAP online application instead; re-check tax.idaho.gov/VeteransBenefit after Jan 1, 2027 for the paper PDF. legislature.idaho.gov (Idaho Code 63-705A) refused all connections from this environment (connection reset), so the moving-before-Oct-1 transfer rule is taken from the Tax Commission's summary rather than the statute text. Idaho's 2027-cycle pages are already live (deadline April 15, 2027), which is why quotes carry 2027 dates."
 },
 "IL": {
  "state": "IL",
  "officeType": "Chief County Assessment Officer (Supervisor of Assessments) of the county; Cook County Assessor in Cook",
  "officeTypeNote": "File homestead exemption applications with the Chief County Assessment Office (CCAO), not the county clerk or treasurer. In Cook County the County Assessor runs the program online. The Specially Adapted Housing exemption (35 ILCS 200/15-165) is different: it is established and renewed each year by certification from the Illinois Department of Veterans' Affairs, which flows to IDOR and the local assessing officials.",
  "officeLocator": {
   "tier": 1,
   "url": "https://tax.illinois.gov/individuals/illinoiscounties.html",
   "label": "Illinois Department of Revenue: county contact list (links each of the 102 counties to its assessment office or property lookup site; a few list phone numbers only)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://tax.illinois.gov/localgovernments/property/taxrelief.html",
   "note": "IDOR does not publish a single CCAO directory with addresses; its county list links out to county sites of varying quality (Cook goes to cookcountyassessor.com, DuPage to a property lookup page). The forms themselves have a CCAO address block that each county fills in. Cook County: https://www.cookcountyassessoril.gov/veterans-disabilities-exemption."
  },
  "forms": [
   {
    "programRef": "Disabled Veterans' Standard Homestead Exemption (DVSHE)",
    "name": "PTAX-342 Application for Standard Homestead Exemption for Veterans with Disabilities (SHEVD). IDOR form distributed through the CCAOs; IDOR no longer posts it on tax.illinois.gov, so the link is a county-hosted copy of the current IDOR revision.",
    "number": "PTAX-342",
    "url": "https://www.stclaircountyil.gov/webdocuments/departments/assessor/Disabled%20Veterans%20Initial.pdf",
    "revision": "R-07/24",
    "filedWith": "Chief County Assessment Officer of the county where the home is (Cook County Assessor in Cook)"
   },
   {
    "programRef": "Disabled Veterans' Standard Homestead Exemption (DVSHE)",
    "name": "PTAX-342-R Annual Verification of Eligibility for Standard Homestead Exemption for Veterans with Disabilities (annual renewal; CCAOs mail it to prior-year recipients). Not required for 100% P&T veterans or WWII veterans.",
    "number": "PTAX-342-R",
    "url": "https://marioncountyil.gov/wp-content/uploads/MC-PTAX-342-R.pdf",
    "revision": "R-09/18 (county-hosted copy; the pre-2022 text still says every recipient must re-verify annually, which P.A. 102-895 changed for 100% P&T veterans)",
    "filedWith": "Chief County Assessment Officer, by the county's renewal due date (e.g. DuPage: October 1 of the assessment year)"
   },
   {
    "programRef": "Returning Veterans' Homestead Exemption (RVHE)",
    "name": "PTAX-341 Application for Returning Veterans' Homestead Exemption (available from the CCAO; no verified statewide PDF link)",
    "number": "PTAX-341",
    "url": null,
    "revision": null,
    "filedWith": "Chief County Assessment Officer"
   },
   {
    "programRef": "Specially Adapted Housing Exemption",
    "name": "No taxpayer form: 35 ILCS 200/15-165 says the exemption 'must be reestablished on an annual basis by certification from the Illinois Department of Veterans Affairs to the Department, which shall forward a copy of the certification to local assessing officials.' Start with your IDVA Veteran Service Officer.",
    "number": null,
    "url": "https://veterans.illinois.gov/serviceoffices.html",
    "revision": null,
    "filedWith": "Illinois Department of Veterans' Affairs (certification), then IDOR and the CCAO"
   }
  ],
  "deadline": {
   "type": "varies-by-county",
   "date": null,
   "text": "35 ILCS 200/15-169(e): 'Application must be made during the application period in effect for the county of his or her residence.' Form PTAX-342: 'file your Form PTAX-342 with your CCAO by the due date'; the county board of review 'while in session for the assessment year, has the final authority to grant your SHEVD.' Each CCAO sets its own window (often tied to the board of review session); Cook County accepts applications during its spring filing period and processes later ones as Certificates of Error."
  },
  "effective": "Assessment year of application; the savings appear on the bill paid the following year ('your SHEVD will be applied to the property tax bill paid the year following the assessment year'). Prorated monthly if the veteran did not occupy the home on January 1: 15-169(e-1) 'prorated exemption shall apply beginning with the first complete month in which the person occupies the qualified residence.'",
  "lateFiling": "After the county's application period, a late PTAX-342 is generally treated as an application for the next assessment year, unless the county issues a Certificate of Error for the missed year (Cook County does; downstate counties vary). Statute sets no late-filing cure.",
  "retroactivity": {
   "type": "local-option",
   "years": null,
   "text": "Property Tax Code 35 ILCS 200/14-15 and 14-20 let the CCAO/board of review issue certificates of error for erroneously omitted homestead exemptions in prior years; Cook County Assessor: 'Applications will be processed as Certificates of Error' and it lets veterans 'Redeem savings for tax years 2025, 2024, 2023, 2022, and 2021' (five prior years). Practice downstate varies; ask the CCAO."
  },
  "renewal": {
   "type": "annual",
   "text": "15-169(e): 'each taxpayer who has been granted an exemption under this Section must reapply on an annual basis, except that a veteran who qualifies as a result of his or her service in World War II need not reapply.' Since May 23, 2022 (P.A. 102-895): a veteran with 'a combined service connected disability rating of 100% and ... deemed to be permanently and totally disabled ... shall no longer be required to reapply ... on an annual basis.' Form PTAX-342: the P&T veteran 'must file a Summary of Benefits letter with the CCAO to verify the proper ratings.' Everyone else files PTAX-342-R each year."
  },
  "ratingChange": "Tier is set by the VA rating 'as of the date the application is submitted for the exemption ... for the applicable taxable year' (15-169(b-3.1)). A veteran whose rating rises files a new PTAX-342 with the new VA certification letter (the annual PTAX-342-R also asks for the current rating). A veteran dropping below 30% loses the exemption; a 100% P&T veteran on auto-renewal should notify the CCAO of any change (15-169(e) lets the CCAO verify eligibility by 'questionnaire, or other reasonable methods').",
  "move": "Exemption follows the veteran to a new primary residence only by a new PTAX-342 in the new county/parcel; proration applies for the months of occupancy in the move year. The exemption continues on the old home while the veteran is in a nursing home or VA facility if the spouse occupies it or it stays unoccupied (15-169(b-5)). Surviving spouses may transfer the exemption to a new residence 'not to exceed the amount granted from the most recent ad valorem tax roll' (15-169(c)).",
  "onlineFiling": {
   "available": null,
   "text": "Cook County Assessor accepts the Veterans with Disabilities Exemption online; most downstate CCAOs take paper (mail, in person, some by email). Check the county."
  },
  "documents": [
   "Proof of service, one of: Form DD 214 (or War Department separation for pre-1950 service), Certification of Military Service form, or an Illinois driver's license/ID with the Veteran's Designation (PTAX-342 R-07/24)",
   "VA documentation of the service-connected disability rating percentage for the assessment year (VA certification/Summary of Benefits letter; the form notes 'Any other rating is not valid')",
   "Proof of ownership/occupancy of the primary residence (deed or trust; parcel/PIN from the tax bill)",
   "100% P&T veterans claiming exemption from annual renewal: VA Summary of Benefits letter stating permanent and total status, filed with the CCAO",
   "Surviving spouse: veteran's marriage certificate, death certificate (or DD Form 1300 Report of Casualty if killed in the line of duty), proof of ownership; DIC certification from VA if claiming under the service-connected-death category"
  ],
  "survivingSpouse": "15-169(c): exemption 'carries over to the benefit of the veteran's surviving spouse as long as the spouse holds the legal or beneficial title to the homestead, permanently resides thereon, and does not remarry'; it may transfer to a new residence up to the last amount granted. From TY2023 a spouse also qualifies if the veteran was killed in the line of duty, never applied but would have qualified (spouse an Illinois resident since the death), or died of a service-connected cause with the spouse receiving DIC (then the first $250,000 EAV is exempt). Spouse files PTAX-342 with marriage and death certificates.",
  "appeal": "The county board of review 'has the final authority to grant your SHEVD' for the assessment year (PTAX-342); a denial can be contested at the board of review while in session and then the Illinois Property Tax Appeal Board or circuit court under the Property Tax Code.",
  "statute": "35 ILCS 200/15-169 (SHEVD); 35 ILCS 200/15-167 (Returning Veterans); 35 ILCS 200/15-165 (Specially Adapted Housing); P.A. 102-895 (P&T auto-renewal); 35 ILCS 200/14-15, 14-20 (certificates of error)",
  "sourceUrls": [
   {
    "url": "https://www.ilga.gov/Documents/legislation/ilcs/documents/003502000K15-169.htm",
    "title": "35 ILCS 200/15-169 Homestead exemption for veterans with disabilities and veterans of WWII (ILGA)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ilga.gov/Documents/legislation/ilcs/documents/003502000K15-167.htm",
    "title": "35 ILCS 200/15-167 Returning Veterans' Homestead Exemption (ILGA)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ilga.gov/Documents/legislation/ilcs/documents/003502000K15-165.htm",
    "title": "35 ILCS 200/15-165 Veterans with disabilities (Specially Adapted Housing) (ILGA)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.illinois.gov/localgovernments/property/taxrelief.html",
    "title": "Illinois Department of Revenue: Property Tax Relief, Homestead Exemptions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.illinois.gov/individuals/illinoiscounties.html",
    "title": "Illinois Department of Revenue: county contact list",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.stclaircountyil.gov/webdocuments/departments/assessor/Disabled%20Veterans%20Initial.pdf",
    "title": "Form PTAX-342 (R-07/24), St. Clair County CCAO copy of the IDOR form",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://marioncountyil.gov/wp-content/uploads/MC-PTAX-342-R.pdf",
    "title": "Form PTAX-342-R (R-09/18), Marion County CCAO copy of the IDOR form",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.cookcountyassessoril.gov/veterans-disabilities-exemption",
    "title": "Cook County Assessor: Veterans with Disabilities Exemption (annual filing, certificates of error 2021-2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.dupagecounty.gov/government/departments/supervisor_of_assessments/exemptions/veterans/standards_for_veterans_with_disability.php",
    "title": "DuPage County Supervisor of Assessments: SHEVD (PTAX-342-R due October 1; document list)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://veterans.illinois.gov/content/dam/soi/en/web/veterans/services-benefits/documents/benefitsguide2025update.pdf",
    "title": "Illinois Department of Veterans' Affairs Benefits Guide (2025 update): tax exemptions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://veterans.illinois.gov/serviceoffices.html",
    "title": "IDVA Veteran Service Offices (for SAH exemption certification)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[1].tiers",
    "issue": "Statute 15-169(b-3.1) and the R-07/24 form: at 70%+ 'the first $250,000 of EAV of the residential property is exempt' and since TY2023 there is no longer a $250,000 EAV cap on eligibility (homes above $250K EAV get the first $250K exempt). Data summary says 'TOTAL exemption of EAV up to $250,000', consistent, but the Marion PTAX-342-R (R-09/18) copy still says total EAV must be under $250,000, which is obsolete; the tool should not relay the old cap.",
    "source": "https://www.ilga.gov/Documents/legislation/ilcs/documents/003502000K15-169.htm"
   },
   {
    "field": "propertyTax.programs[1].survivingSpouse / summary",
    "issue": "From TY2024 WWII veterans are fully exempt regardless of rating (15-169(b-4)); from TY2023 a DIC-receiving surviving spouse of a veteran who died of a service-connected cause gets the first $250,000 EAV exempt even if the veteran never held the exemption. Not reflected in the data layer.",
    "source": "https://www.ilga.gov/Documents/legislation/ilcs/documents/003502000K15-169.htm"
   }
  ],
  "notes": "IDOR removed PTAX-342/342-R/341 PDFs from tax.illinois.gov (old content/dam paths 404) and the taxrelief page only names them, so the form links are county-hosted copies of the IDOR forms; the St. Clair copy is the current R-07/24 revision and already reflects the 100% P&T auto-renewal and DIC-spouse rules. The Marion PTAX-342-R copy is the older R-09/18 revision. The old ILGA fulltext.asp URLs 404; the working pattern is https://www.ilga.gov/Documents/legislation/ilcs/documents/003502000K15-169.htm (WebFetch failed TLS verification on ilga.gov; curl verified 200). Lake County (lakecountyil.gov) and the Kane County form link were 403/404 and were not used. Cook County's deadline language is 'normal filing period has ended' (spring), with later applications handled as Certificates of Error."
 },
 "IN": {
  "state": "IN",
  "officeType": "county auditor",
  "officeTypeNote": "All veteran deductions and credits are filed with the county auditor of the county where the property sits (State Form 12662: 'File with the county auditor of the county where the property is located'). County Veteran Service Officers help complete the form and can sign the IDVA certificate in Section VIII, but the auditor is the filing office. The assessor and treasurer do not take these applications.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": null,
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.in.gov/dlgf/deductions-and-credits/",
   "note": "DLGF publishes no statewide auditor directory: its 'Contact Your Local Officials' page is 'currently under construction' and its 'County Auditors' and per-county 'County Specific Information' pages (https://www.in.gov/dlgf/county-specific-information/{county}) carry budget/assessment documents only, no contacts. The DLGF deductions page says 'County auditors are the best point of contact.' For help filing, the Indiana DVA page points to County Veteran Service Officers."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Application for Property Tax Benefits for Disabled Veterans and Surviving Spouses of Certain Veterans (one form; check Section I for the 100% total-disability deduction, II for the $350 service-connected credit, III for the $250 age-62 credit, V for the donated-homestead deduction). Section VIII is the optional IDVA/CVSO certificate of eligibility.",
    "number": "State Form 12662",
    "url": "https://forms.in.gov/Download.aspx?id=16787",
    "revision": "R20 / 6-26",
    "filedWith": "county auditor of the county where the property is located (mail must be postmarked by the deadline)"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "01-15",
   "text": "Form 12662 (R20/6-26): 'This form must be completed, signed, and filed by January 15 of the calendar year in which the property taxes are first due and payable.' DLGF FAQ (6/17/2026): 'If the application is mailed, it must be postmarked on or before the filing deadline.' (Replaces the old 'signed by December 31, filed by January 5' rule.)"
  },
  "effective": "Applies to the assessment date preceding the deadline, i.e. the bill first due the year of the January 15 deadline. DLGF example: a veteran who buys a qualifying home on September 1, 2026 'may file ... on or before January 15, 2027, for taxes first due and payable in 2027.' HEA 1210-2026 changes start with the 2026 assessment date (2026-pay-2027 bills).",
  "lateFiling": "DLGF FAQ: 'A person who fails to apply by the statutory deadline may not apply for the deduction or credit retroactively.' A late filing applies to the next assessment date.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No retroactive application (DLGF FAQ Section 4, Q5). Unused credit amounts 'may not be carried forward, carried back, or refunded' (IC 6-1.1-51.3)."
  },
  "renewal": {
   "type": "none",
   "text": "DLGF FAQ: 'A taxpayer who receives the IC 6-1.1-12-14 deduction and remains eligible is not required to refile annually, and the $250 and $350 credits likewise continue without a new annual application.' DLGF deductions page: 'Taxpayers do not need to reapply for deductions or credits annually. Reapplication should only occur if the property is sold or the title is changed.' ONE-TIME EXCEPTION for 2026-pay-2027: anyone who held the old $14,000 deduction (IC 6-1.1-12-14, pre-HEA 1210) is converted automatically to the $250 credit and 'must file a new application to receive the amended 100% deduction.' DLGF recommends (not mandates) that counties auto-convert the old $24,960 deduction to the new $350 credit."
  },
  "ratingChange": "A veteran who becomes totally disabled files a new Form 12662 (Section I) by the next January 15; the 100% deduction need not be service-connected ('evidenced by a VA pension certificate or award of compensation, or an IDVA certificate of eligibility'). Receiving the 100% deduction bars any IC 6-1.1-51.3 credit for the same assessment date (IC 6-1.1-12-14(d)). Report loss of eligibility to the auditor (HEA 1210 amended IC 6-1.1-36-17 on recovery of ineligible deductions with interest and penalties).",
  "move": "File a new 12662 with the new county's auditor by January 15 after acquiring the new principal residence. IC 6-1.1-12-45 keeps the deduction on the old home for the assessment already made despite a sale (one-year carryover), so both homes may show it for one payable year. The 100% deduction requires one year of Indiana residency before the assessment date; the $250/$350 credits have no Indiana-residency requirement and a single credit may be split across multiple Indiana properties.",
  "onlineFiling": {
   "available": null,
   "text": "DLGF provides the PDF only; many counties accept the signed form by mail or email and some (e.g. Hamilton, Allen) run their own online deduction portals. Check the county auditor."
  },
  "documents": [
   "DD-214 (proof of 90+ days of service and honorable discharge)",
   "Disability evidence: VA 'pension certificate or award of compensation' (VA award/rating letter; for the $350 credit a VA disability compensation check is also accepted), OR an IDVA certificate of eligibility completed in Section VIII of Form 12662 by accredited IDVA staff or a County Veteran Service Officer (IDVA says: 'If we need to complete Section VIII ... you NEED to send us your DD214 and a VA award letter showing your combined percentage')",
   "Proof of ownership or a recorded contract purchase of the principal residence (trusts are NOT eligible for the 100% deduction; they may receive the credits)",
   "For the 100% deduction: proof of Indiana residency for at least one year before the assessment date",
   "Surviving spouse: veteran's death certificate and marriage proof, plus the veteran's DD-214 and VA evidence showing the veteran met the requirements at death"
  ],
  "survivingSpouse": "100% deduction: keeps it 'if the veteran satisfied IC 6-1.1-12-14(a)(1) through (a)(4) at the time of death and the surviving spouse owns or is buying the property' when filed; lost on remarriage (IC 6-1.1-12-14(b)). $350 credit: spouse qualifies if the veteran met the requirements at death. $250 credit: also if the veteran was killed in action, died on active duty, or died during inactive duty training. State Form 51186 (old IDVA certificate) 'is no longer used.'",
  "appeal": "Not addressed in the DLGF materials read; auditor determinations on deductions may be appealed to the county Property Tax Assessment Board of Appeals under IC 6-1.1-15 (not verified here).",
  "statute": "IC 6-1.1-12-14 (100% total-disability deduction, as amended by HEA 1210-2026); IC 6-1.1-12-15 (filing); IC 6-1.1-51.3-5 ($250 credit); IC 6-1.1-51.3-6 ($350 credit); IC 6-1.1-12-14.5 (donated homestead); IC 6-1.1-12-45 (carryover on conveyance)",
  "sourceUrls": [
   {
    "url": "https://forms.in.gov/Download.aspx?id=16787",
    "title": "State Form 12662 (R20/6-26) Application for Property Tax Benefits for Disabled Veterans and Surviving Spouses",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.in.gov/dlgf/files/2026-memos/Veterans-Deductions-FAQ_DLGF_08122026-1.pdf",
    "title": "DLGF FAQ: 2026 Legislative Update, Veterans Deductions and Credits (June 17, 2026 sessions; posted 8/12/2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.in.gov/dlgf/files/2026-memos/260527-Cockerill-Memo-Legislation-Affecting-Deductions-Credits-and-Exemptions.pdf",
    "title": "DLGF Memo 5/27/2026: Legislation Affecting Deductions, Credits and Exemptions (HEA 1210-2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.in.gov/dlgf/deductions-and-credits/",
    "title": "DLGF: Deductions and Credits (forms list, no annual reapplication)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.in.gov/dva/divisions/training-and-services/disabled-veteran-property-tax-deduction/",
    "title": "Indiana Department of Veterans Affairs: Disabled Veteran Property Tax Deduction (where to apply, documents, SF 51186 retired)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.in.gov/dva/home/indiana-veteran-benefit-forms/",
    "title": "Indiana DVA: Indiana Veteran Benefit Forms",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.in.gov/dlgf/county-specific-information/",
    "title": "DLGF: County Specific Information (92 county pages, budget/assessment documents only)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.in.gov/dlgf/contact-your-local-officials/",
    "title": "DLGF: Contact Your Local Officials (under construction as of check date)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.note",
    "issue": "Note still describes the repealed pre-2026 tiers ($24,960 wartime deduction, $14,000 total-disability/62+ deduction, $38,960 combined, $240K cap). HEA 1210-2026 replaced these effective the 2026 assessment date; the programs array is already updated, so the note should be rewritten or removed.",
    "source": "https://www.in.gov/dlgf/files/2026-memos/Veterans-Deductions-FAQ_DLGF_08122026-1.pdf"
   },
   {
    "field": "propertyTax.programs[0].summary",
    "issue": "DLGF FAQ Q10: the 100% deduction under IC 6-1.1-12-14 'does not state that the veteran's total disability must be service-connected' (VA pension certificate suffices). Summary says 'total disability rating' which is fine, but the tool should not require service connection for this program. Also: trusts cannot hold the 100% deduction (FAQ Q3).",
    "source": "https://www.in.gov/dlgf/files/2026-memos/Veterans-Deductions-FAQ_DLGF_08122026-1.pdf"
   },
   {
    "field": "propertyTax.programs[2] (Deduction for Property Received from Tax Exempt Organization)",
    "issue": "Form 12662 Section V / IC 6-1.1-12-14.5: deduction equals the veteran's disability percentage (50% to 100%) of assessed value for a homestead donated at no charge by a 501(c)(3); requires 90 days service, honorable discharge, 50%+ rating. Summary field is empty.",
    "source": "https://forms.in.gov/Download.aspx?id=16787"
   }
  ],
  "notes": "Indiana is mid-transition: HEA 1210-2026 (signed 3/12/2026, retroactive to the 1/1/2026 assessment date) replaced the old deductions with a 100% deduction plus $250/$350 credits, and Form 12662 was re-issued as R20 (6-26) with the new January 15 deadline. Veterans who held the old $14,000 deduction are being auto-switched to the $250 credit and MUST file a new 12662 by January 15, 2027 to get the 100% deduction for 2026-pay-2027; counties (e.g. Boone) are running registration drives July-December 2026. The forms.in.gov 'id=5460' link found in older pages now returns an HTML page, not the form; id=16787 is the live PDF. iga.in.gov statute pages load (200) but are JavaScript-rendered, so statute wording is quoted via DLGF's memo and FAQ rather than directly."
 },
 "KS": {
  "state": "KS",
  "officeType": "Kansas Department of Revenue (state), not a county office",
  "officeTypeNote": "Kansas has no assessor-level veteran exemption. The Homestead Refund (K-40H) and the Seniors and Disabled Veterans property tax freeze refund (K-40SVR) are REFUND claims filed with the Kansas Department of Revenue after year end, either online through Kansas WebFile or by mail to 'Homestead Claim, Kansas Department of Revenue, PO Box 750260, Topeka KS 66699-0260.' The county appraiser values the home and the county treasurer bills it; neither takes these claims. The deployment deferral for service members is a separate county-level program (data file says county clerk; not verified here).",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": null,
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.ksrevenue.gov/perstaxtypeshs.html",
   "note": "The filing office is KDOR itself (Homestead Refund Programs page). For county appraiser contacts (valuation questions only) KDOR's Property Valuation Division points to the Kansas County Appraisers Association list at https://www.kscaa.net/county-appraisers-2/county-appraisers/."
  },
  "forms": [
   {
    "programRef": "Homestead Refund for Disabled Veterans",
    "name": "Kansas Homestead Claim (tax year 2025, filed Jan 1 to Apr 15, 2026); disabled veterans enclose the VA award letter instead of Schedule DIS",
    "number": "K-40H",
    "url": "https://www.ksrevenue.gov/pdf/k-40h25.pdf",
    "revision": "2025 tax year",
    "filedWith": "Kansas Department of Revenue (WebFile or mail to PO Box 750260, Topeka KS 66699-0260)"
   },
   {
    "programRef": "Homestead Refund for Disabled Veterans",
    "name": "Homestead Instructions booklet (K-40H, K-40PT, K-40SVR) with the April 15 deadline, late-claim and documentation rules",
    "number": "K-40H instructions",
    "url": "https://www.ksrevenue.gov/pdf/k-40hbook25.pdf",
    "revision": "2025",
    "filedWith": "n/a (instructions)"
   },
   {
    "programRef": "SVR Property Tax Freeze (K-40SVR, SB 15)",
    "name": "Property Tax Relief Claim for Seniors and Disabled Veterans (refund of the increase over the base-year tax); cannot be combined with K-40H or K-40PT for the same year",
    "number": "K-40SVR",
    "url": "https://www.ksrevenue.gov/pdf/k-40svr25.pdf",
    "revision": "2025 tax year",
    "filedWith": "Kansas Department of Revenue (WebFile or mail to PO Box 750260, Topeka KS 66699-0260)"
   },
   {
    "programRef": "Property Tax Deferral for Service Members",
    "name": "No KDOR form found; the data file says to apply through the county clerk. Not verified on a primary source.",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "county clerk (unverified)"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-15",
   "text": "K-40SVR (2025): 'FILE THIS CLAIM AFTER DECEMBER 31, 2025, BUT NO LATER THAN APRIL 15, 2026.' K-40H booklet: 'File your claim after December 31, 2025 but no later than April 15, 2026.' Claims are for the prior calendar year's property taxes."
  },
  "effective": "Refund of property tax paid for the prior calendar year (the claim year); the K-40SVR refunds the increase over the base-year tax. A Refund Advancement Program lets the refund be applied directly to the December 20 first-half tax bill.",
  "lateFiling": "K-40H booklet / Homestead FAQ: 'Late claims filed after the due date, April 15, 2026, may be accepted whenever good cause exists, provided the claim is filed within four years of the original due date.' Enclose an explanation and documentation (examples: absence from the state or country, temporary illness).",
  "retroactivity": {
   "type": "fixed",
   "years": 4,
   "text": "Prior-year claims are possible only as late claims accepted for good cause 'within four years of the original due date' (K-40H instructions). Amended claims use another K-40H marked 'amended.'"
  },
  "renewal": {
   "type": "annual",
   "text": "Both are annual refund claims: a new K-40H or K-40SVR must be filed each year between January 1 and April 15 for the prior tax year. The VA award letter is enclosed with each claim ('ENCLOSE your Veterans Affairs Award Letter'); KDOR keeps permanent-disability documentation on file for the Schedule DIS route but veterans still file the claim yearly."
  },
  "ratingChange": "Eligibility requires 'a service-connected evaluation percentage equal to or greater than 50%' as a disabled veteran for the entire claim year (and, for K-40SVR, the entire base year); the base year is the first year the claimant is 65 or a disabled veteran for the full year (deemed 2021 if earlier). A veteran who reaches 50% mid-year first qualifies for the following full calendar year; a drop below 50% ends eligibility.",
  "move": "Refund follows the claimant, not the parcel: file for the homestead owned and occupied in Kansas during the claim year. For K-40SVR the base-year appraised value cap ($350,000) and the frozen base tax relate to the homestead; the SVR FAQ example assumes the claimant 'owned and occupied the same homestead in both 2025 and the base year.' Moving resets the base year.",
  "onlineFiling": {
   "available": true,
   "text": "Kansas WebFile ('Homestead WebFile is a FREE way to file Homestead claims') at https://www.kansas.gov/webfile/ (the KDOR 'File your Homestead claim now' link). Paper claims by mail."
  },
  "documents": [
   "VA award letter: K-40SVR instructions require 'an original Veterans Disability Determination letter or letter from your regional V.A. that includes the disability date and the percentage of disability being 50% or greater'; K-40H: enclose the Veterans Affairs award letter (Schedule DIS not needed for veterans)",
   "Household income for the claim year (all sources; K-40H line 9 list of other income if applicable); K-40SVR household income limit $58,041 for 2025, K-40H $43,389",
   "Property tax statement amounts (do NOT send copies to KDOR; keep them)",
   "Surviving spouse: deceased veteran's name and qualifying information; eligible until remarriage",
   "Base-year appraised value and taxes for K-40SVR (home not over $350,000 appraised in the base year)"
  ],
  "survivingSpouse": "K-40H: 'the surviving spouse of a disabled veteran ... eligible to receive benefits until you remarry' (also surviving spouses of members who died in the line of duty). K-40SVR: surviving spouse of a claimant who was receiving SVR benefits as a disabled veteran or 65+ at death may continue claiming until remarriage.",
  "appeal": "KDOR denial notices may be protested under the Kansas Homestead Property Tax Refund Act (K.S.A. 79-4501 et seq.); not detailed on the pages read.",
  "statute": "K.S.A. 79-4501 et seq. (Homestead Property Tax Refund Act); K.S.A. 79-4508a (SVR, 2021 SB 15); K.S.A. 79-4505 (filing deadline / late claims)",
  "sourceUrls": [
   {
    "url": "https://www.ksrevenue.gov/perstaxtypeshs.html",
    "title": "Kansas Department of Revenue: Homestead Refund Programs (K-40H, K-40PT, K-40SVR)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ksrevenue.gov/forms-hs.html",
    "title": "KDOR: Homestead forms (2025 K-40H, K-40SVR, Schedule DIS, instructions)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ksrevenue.gov/pdf/k-40svr25.pdf",
    "title": "Form K-40SVR 2025 Property Tax Relief Claim for Seniors and Disabled Veterans",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ksrevenue.gov/pdf/k-40h25.pdf",
    "title": "Form K-40H 2025 Kansas Homestead Claim",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ksrevenue.gov/pdf/k-40hbook25.pdf",
    "title": "2025 Homestead Instructions booklet (deadline, late claims, disabled veteran definition)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ksrevenue.gov/faqs-SVR.html",
    "title": "KDOR FAQ: Property Tax Relief for Seniors and Disabled Veterans (K-40SVR)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ksrevenue.gov/faqs-taxhomestead.html",
    "title": "KDOR FAQ: Homestead refund (late claims within four years for good cause)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.kansas.gov/webfile/",
    "title": "Kansas WebFile (Homestead claims online)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.kscaa.net/county-appraisers-2/county-appraisers/",
    "title": "Kansas County Appraisers Association: county appraiser list (linked from KDOR PVD page)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[2].incomeLimit / summary (SVR)",
    "issue": "KDOR SVR FAQ for the 2025 claim year: 'household income of $58,041 or less for 2025'; data says income <= $53,600 (older figure).",
    "source": "https://www.ksrevenue.gov/faqs-SVR.html"
   },
   {
    "field": "propertyTax.programs[0].details",
    "issue": "Details text says household income cannot exceed $56,450; the K-40H limit for TY2025 is $43,389 (summary already correct). The $56,450 figure does not match any current KDOR program.",
    "source": "https://www.ksrevenue.gov/perstaxtypeshs.html"
   }
  ],
  "notes": "Kansas is unusual: the veteran benefit is a state income-tax-style refund claim, so there is no county filing, no exemption on the tax roll, and the 'deadline' is the April 15 claim date for the prior year's taxes. The 2026 claim-year forms (K-40H/K-40SVR 2026) will post around January 2027; the 2025 forms linked here are the ones currently filed. The generic https://www.ksrevenue.gov/pdf/k-40svr.pdf is a stale 2022 edition still live on the site. The Service Member deferral row could not be verified on ksrevenue.gov in this pass (no WebSearch budget remained); its office and form are left null."
 },
 "KY": {
  "state": "KY",
  "officeType": "county Property Valuation Administrator (PVA)",
  "officeTypeNote": "KRS 132.810(1): 'each person claiming the exemption shall file an application with the property valuation administrator of the county in which the applicant resides.' The county clerk and sheriff (who collects the bill) do not take homestead applications. Kentucky's veteran benefit is the general Section 170 disability homestead exemption; there is no separate veteran-only exemption or form.",
  "officeLocator": {
   "tier": 1,
   "url": "https://revenue.ky.gov/Property/Documents/PVA%20Directory%202022-2026.pdf",
   "label": "Kentucky Department of Revenue: Property Valuation Administrators 2022-2026 Directory (all 120 PVAs with addresses and phones; the DOR homestead page's 'Find My PVA' link)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://revenue.ky.gov/Property/Residential-Farm-Commercial-Property/Pages/Homestead-Exemption.aspx",
   "note": "PDF directory, no per-county web pages. revenue.ky.gov intermittently returned 503 'server is busy' during checks; retry if the PDF fails to load."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Application for Exemption Under the Homestead/Disability Amendment (Section 170, Kentucky Constitution); veterans check the disability provision (KRS 132.810(2))",
    "number": "62A350",
    "url": "https://revenue.ky.gov/Property/Residential-Farm-Commercial-Property/PublishingImages/Pages/Homestead-Exemption/62A350%20(10-22)%20updated%20Fillable.pdf",
    "revision": "10-22 (fillable; the DOR Forms library copy at https://revenue.ky.gov/Forms/62A350.pdf is the older 3-16 edition)",
    "filedWith": "Property Valuation Administrator of the county where the residence is located, by December 31"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "12-31",
   "text": "Form 62A350: 'This application-affidavit must be submitted by December 31st of the year in which exemption is sought to the property valuation administrator of the county in which the residential unit is located. In addition, the applicant must own, occupy and maintain the subject property ... as of January 1' of that tax year. Disability verification 'must be submitted to the property valuation administrator by December 31 in the first year of eligibility.'"
  },
  "effective": "Tax year (January 1 to December 31) in which the application is filed, provided the owner was totally disabled and receiving disability payments for the entire taxation period and owned/occupied the home on January 1. Exemption amount is fixed for two-year periods ($49,100 for 2025-2026).",
  "lateFiling": "The December 31 deadline is the end of the tax year itself, so an application filed any time in the year counts for that year: KRS 132.810(4)(c) gives 'a full or partial exoneration' of the bill if the application is approved before payment, and (4)(d) 'Any person making application and qualifying for the homestead exemption after property tax bills have been paid shall be entitled to a refund of the property taxes applicable to the value of the homestead exemption.' No statutory cure after December 31.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "Refund applies only to the current tax year when the application is filed after the bill is paid (KRS 132.810(4)(d)). Nothing in KRS 132.810 allows claims for earlier years."
  },
  "renewal": {
   "type": "none",
   "text": "KRS 132.810(2)(d): a totally disabled applicant under 65 'must apply for the homestead exemption on an annual basis, except' that 'a service-connected totally disabled veteran of the United States Armed Forces' (or a P&T SSA/KRS disability) 'shall document the disability at the time of application ... and shall not be required to apply for the homestead exemption on an annual basis.' DOR: the homeowner must apply annually 'unless: They are a veteran of the United States Armed Forces and have a service connected disability.' Form 62A350 item 6: the PVA 'may require an applicant to re-apply or submit proof of continuing disability.'"
  },
  "ratingChange": "Eligibility requires total disability classified by a federal program (VA 100% rating, including IU, qualifies) and receipt of disability payments for the ENTIRE taxation period (KRS 132.810(2)(c)); a veteran rated 100% mid-year first qualifies for the next full calendar year, and 'In no case shall the exemption be prorated' (4)(a). If the rating later drops below total, the exemption 'shall terminate' at the end of that year and the owner 'shall report any change in disability classification' to the PVA (4)(b); the form warns of supplemental bills 'for up to a period of five years' if unreported. At 65 the owner qualifies on age instead.",
  "move": "File a new 62A350 with the PVA of the new county/residence; only one exemption per residential unit and per person, and the owner must report any title transfer of exempted property to the PVA (KRS 132.810(2)(h)). The form asks whether an exemption is claimed in another county or state.",
  "onlineFiling": {
   "available": null,
   "text": "DOR provides the fillable PDF; filing method (mail, email, in person, PVA web portals) varies by PVA. Check the PVA directory."
  },
  "documents": [
   "Form 62A350 affidavit signed by the owner (and spouse)",
   "VA documentation showing classification as totally disabled under a federal program and that disability payments were received for the entire year (VA rating decision / benefit summary letter showing 100% or 100% IU); 'Verification documentation must be submitted to the PVA by December 31 in the first year of eligibility'",
   "Proof of ownership and that the home is the primary residence as of January 1 (deed or other title evidence; PVA records)",
   "If applying on age instead: birth certificate, driver's license, passport or other listed proof of age"
  ],
  "survivingSpouse": "No veteran-specific survivor benefit: the Section 170 exemption is personal to the owner who is 65+ or totally disabled. A surviving spouse keeps it only if they independently qualify (age 65+ or totally disabled). The data file's survivingSpouse: false is correct.",
  "appeal": "Not addressed on the DOR page or form read; PVA determinations on exemptions can be taken to the Kentucky Board of Tax Appeals/Office of Claims and Appeals under KRS 131.340 after conference with the PVA (not verified here).",
  "statute": "Ky. Const. §170; KRS 132.810 (application, qualification, annual-filing exemption for service-connected totally disabled veterans); KRS 132.220(1) (January 1 ownership)",
  "sourceUrls": [
   {
    "url": "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=39641",
    "title": "KRS 132.810 Homestead exemption, Application, Qualification (Kentucky Legislature; served as PDF)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.ky.gov/Property/Residential-Farm-Commercial-Property/Pages/Homestead-Exemption.aspx",
    "title": "Kentucky Department of Revenue: Homestead Exemption (disability basis, annual filing exception for veterans, $49,100 for 2025-2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.ky.gov/Property/Residential-Farm-Commercial-Property/PublishingImages/Pages/Homestead-Exemption/62A350%20(10-22)%20updated%20Fillable.pdf",
    "title": "Form 62A350 (10-22) Application for Exemption Under the Homestead/Disability Amendment, fillable",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.ky.gov/Forms/62A350.pdf",
    "title": "Form 62A350 (3-16) DOR forms library copy with full Explanation page",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.ky.gov/Property/Documents/PVA%20Directory%202022-2026.pdf",
    "title": "Kentucky Property Valuation Administrators 2022-2026 Directory",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.ky.gov/News/Pages/DOR-Sets-2025-2026-Homestead-Exemption.aspx",
    "title": "DOR news: Homestead Exemption amount set for 2025-2026",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.ky.gov/Property/Pages/default.aspx",
    "title": "Kentucky DOR: Property Tax (landing)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[0].details",
    "issue": "Details say 'Must have been receiving disability compensation for entire assessment period' (correct per KRS 132.810(2)(c)). Add that service-connected totally disabled veterans are exempt from the annual re-application that other under-65 disabled owners face (132.810(2)(d)2.a), and that the exemption is per residential unit (one per home even if both spouses qualify).",
    "source": "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=39641"
   }
  ],
  "notes": "Kentucky's statute page is an HTML URL that actually serves a PDF (statute.aspx?id=39641); curl saved it and pdftotext read it. The two 62A350 editions differ only in revision date (10-22 fillable vs 3-16); both carry the December 31 rule. 'Total disability' for veterans means the VA has classified the veteran as totally disabled (100% schedular or IU) with payments received all year; the data row's ratingRequired: 100 matches. The 2027-2028 exemption amount will be set by DOR in late 2026 (every two years per KRS 132.810(2)(e))."
 },
 "LA": {
  "state": "LA",
  "officeType": "parish assessor (district assessor in Orleans Parish)",
  "officeTypeNote": "All homestead-based relief (the $7,500 homestead, the additional disabled-veteran exemption under Art. VII §21(K), and the special assessment level freeze under §18(G)) is applied for at the parish assessor's office. La. Const. Art. VII §18(G)(1)(a)(iii) and LAC 61:V.101.G.3: 'filing a signed application establishing that the owner qualifies ... with the assessor of the parish or, in the parish of Orleans, the assessor of the district where the property is located.' The sheriff (Orleans: City Bureau of the Treasury) bills and collects but grants no exemptions. The Louisiana Tax Commission supervises assessors, certifies the rolls (Nov 15), hears appeals and pays refund claims, but takes no exemption applications.",
  "officeLocator": {
   "tier": 2,
   "url": "https://www.louisianaassessors.org/about-assessors/",
   "label": "Louisiana Assessors' Association: all 64 parish assessors with office websites (printable 2026 directory PDF linked on the page)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.latax.la.gov/",
   "note": "No state agency publishes a static assessor directory: the Louisiana Tax Commission site (www.latax.la.gov, and the old latax.state.la.us address) is now only the JavaScript STAX portal, so the LTC homepage is the fallback. The assessors' association is the body of the 64 elected parish assessors, not a state agency, hence tier 2 rather than 1. Its 'About Assessors' page links every parish assessor's site and a printable directory (https://www.louisianaassessors.org/wp-content/uploads/2026/01/Directory-File-2026.pdf, 200 on 2026-10-21) with addresses, phones and emails. Separately, the Louisiana Department of Veterans Affairs lists its parish veterans service offices at https://vetaffairs.la.gov/locations; East Baton Rouge requires an LDVA-issued 'Disabled Veterans Property Tax Benefits Certification' letter, which those offices issue. Orleans Parish's site (nolaassessor.com) blocks automated access (403); its pages were read from the Internet Archive (June 2023 captures)."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "No statewide form. Each parish assessor uses its own homestead exemption application; the §21(K) disabled-veteran add-on is recorded on or alongside it when the veteran presents VA rating proof. First filing is in person in most parishes (East Baton Rouge, Jefferson, St. Tammany), by in-person or Zoom appointment in Orleans and St. Tammany, or online through the parcel search in Caddo. Example: Caddo Parish 2026 'Veterans Homestead / New Permanent Homestead Exemption Application'.",
    "number": null,
    "url": "https://www.caddoassessor.org/Content/pdfs/forms/2026/2026HomesteadExemptionApp.pdf",
    "revision": "2026 (Caddo Parish example)",
    "filedWith": "parish assessor (Orleans: district assessor)"
   },
   {
    "programRef": "Special Assessment Level",
    "name": "Louisiana Special Assessment Level Application (parish versions of a common form; 'Property must be Homestead Exempt to Qualify'; preference boxes Senior Citizen / Disabled / Veteran / Service Widow). Examples: Lafayette Parish and Caddo Parish; Orleans uses form 'SPA 1 - LA Special Assessments Form'.",
    "number": "SPA 1 (Orleans designation)",
    "url": "https://content.lafayetteassessor.com/uploads/Special_Assmt_Form_for_Web_Site_5eb42c6c9e.pdf",
    "revision": null,
    "filedWith": "parish assessor (Orleans: district assessor)"
   }
  ],
  "deadline": {
   "type": "varies-by-county",
   "date": null,
   "text": "No statutory filing date. LTC rule LAC 61:V.101.F.1.h: 'Homestead exemptions are allowable in any year in which the owner occupied the home prior to December 31 of that year.' In practice each assessor closes applications when the annual roll is finalized (roll open for 15 days between Aug 15 and Sep 15; certified to the LTC by Nov 15), so file before the open-rolls period. Orleans: freeze and veteran applications 'must be submitted by August 15 ... for it to be in place prior to the [next] tax year.' East Baton Rouge: 'must own and occupy the residence by December 31st of the applicable tax year.'"
  },
  "effective": "Tax year in which the assessor adds the exemption to the roll (East Baton Rouge: the veteran add-on 'will only apply to the year in which the application is made and thereafter'). The special assessment level freezes the assessment at 'the total assessment of that property for the first year that the owner qualifies for and receives the special assessment level' (§18(G)(1)(a)(i)).",
  "lateFiling": "An application received after the parish roll closes is applied to the following tax year (Orleans: file by Aug 15 for the next year; East Baton Rouge: 'Exemption cannot be applied to previous tax years' is stated for the first-responder add-on and the veteran add-on applies 'to the year in which the application is made and thereafter'). Taxes already paid on property that was eligible for exemption can be recovered through the Tax Commission's erroneous-payment claim (see retroactivity).",
  "retroactivity": {
   "type": "fixed",
   "years": 3,
   "text": "LAC 61:V.3507 (Claim for Taxes Paid in Error): 'The claim shall be presented to the Tax Commission in writing within three years of the erroneous payment.' 'Payment of taxes on property which was eligible for homestead exemption, or was exempt from taxation by Article VII, Section 21 of the Constitution of 1974 ... is erroneous payment.' Claimant must 'provide proof of the basis of the exemption' (VA rating for the period) plus the receipt or canceled check. No parish-level refund authority was found; the assessor cannot add the exemption to a closed roll."
  },
  "renewal": {
   "type": "varies",
   "text": "§21(K) disabled-veteran exemption and the $7,500 homestead: no annual re-file; the exemption continues while the veteran or eligible surviving spouse 'occupies and remains the owner.' Assessors mail an annual homestead receipt/card (East Baton Rouge, Jefferson, Caddo); Caddo requires notice 'within 60 days' of a move or change. Special assessment level: §18(G)(1)(a)(iii) requires owners under 65 who are not permanently totally disabled to certify income to the assessor each year; parishes implement this as an annual re-application for the veteran freeze (Lafayette form: 'The Disabled Veteran or Disabled Individual Special Assessment must be renewed yearly'; Caddo: veterans 'apply annually'; Orleans: 'Disability Freeze applications must be submitted yearly before August 15th'). The age-65 freeze is permanent."
  },
  "ratingChange": "§21(K) tiers follow the VA 'service-connected disability rating': 50-69% exempts the next $2,500 assessed (total $10,000 cap), 70-99% the next $4,500 (total $12,000 cap), and '100 percent unemployability or totally disabled' exempts 'the remaining assessed valuation' of the homestead. A veteran crossing a tier files the new VA rating letter with the assessor (East Baton Rouge: via a fresh LDVA certification letter); St. Tammany: 'For veterans with a correct and current disability rating already filed with our office, there is no' further action. A drop below 50% ends the add-on and the §18(G) freeze eligibility. The freeze also requires AGI under the cap ($100,000 base, CPI-indexed from tax year 2026; $102,700 for 2026 per St. Tammany and Lafayette; $150,000 from Jan 1, 2027, CPI-indexed from 2028, if Acts 2025 No. 220 is ratified on the Nov 3, 2026 ballot).",
  "move": "Exemptions attach to the bona fide homestead; apply anew with the assessor of the new parish or Orleans district, and cancel the old homestead (Orleans requires 'proof of cancellation' of any prior homestead). Only one homestead exemption per person statewide (LAC 61:V.101.F.1.f). Surviving spouses of disabled veterans would get 'a one-time transfer of the exemption to that subsequent homestead' capped at the prior amount under Acts 2026 No. 39 (§21(K)(1)(d)), effective Jan 1, 2027 only if ratified Nov 3, 2026. The special assessment level terminates on sale: 'the special assessment level shall terminate on the last day of December in the year prior to the year the property is sold' (Lafayette form), except the §18(G)(2) surviving-spouse continuation.",
  "onlineFiling": {
   "available": null,
   "text": "Varies by parish. Orleans: virtual (Zoom) or in-person appointment with electronic copies of ID, utility bill and signed application; also an E-File portal. St. Tammany: 'Applications must be made in person at one of our office locations or via ZOOM.' Caddo: 'To apply for Homestead Exemption and/or Special Assessment online, start by searching for your property.' Jefferson: 'You must appear in person at either location.' East Baton Rouge: 'applying in person' at one of three offices. Lafayette posts a downloadable special assessment form with 'items to bring with you.'"
  },
  "documents": [
   "VA letter of determination / notice of award showing the service-connected disability rating (50-69%, 70-99%, or 100% / 100% unemployability); Orleans: 'The address on any award letter provided must correspond to the address on the application'",
   "East Baton Rouge additionally requires the 'DISABLED VETERANS PROPERTY TAX BENEFITS CERTIFICATION' letter issued by the Louisiana Department of Veterans Affairs (obtain from a parish veterans service office, https://vetaffairs.la.gov/locations)",
   "Proof of ownership: recorded act of sale / deed (Jefferson, East Baton Rouge, St. Tammany; Caddo form asks for conveyance book/page or instrument number)",
   "Proof of occupancy as bona fide homestead: Louisiana driver's license or state ID showing the property address (every parish checked); St. Tammany accepts voter registration; Orleans also requires a current Entergy, cable or landline bill in the applicant's name at the property (no Sewerage and Water Board bills)",
   "For the special assessment level: prior-year signed federal Form 1040 (or Louisiana return) for all owners showing combined AGI under the cap; §18(G)(1)(a)(ii) lets the assessor verify 'federal adjusted gross income as reported on the Louisiana income tax return'; annual income certification thereafter for owners under 65 who are not permanently totally disabled",
   "Surviving spouse: veteran's death certificate and proof of the veteran's rating; eligible 'whether or not the exemption was in effect on the property prior to the death of the veteran' (§21(K)(1)(a)-(c)); for the §18(G) freeze continuation the spouse must be 45+ or have minor children",
   "If a homestead was claimed elsewhere: proof of its cancellation (Orleans); trusts: trust instrument (§21(K)(3), LAC 61:V.101.F.1.b.iv)"
  ],
  "survivingSpouse": "§21(K)(1)(a)-(c): the surviving spouse of a veteran in any tier 'shall be eligible for this exemption if the surviving spouse occupies and remains the owner of the property, whether or not the exemption was in effect on the property prior to the death of the veteran.' Acts 2026 No. 39 (SB 180, Sen. Foil), Amendment No. 1 on the Nov 3, 2026 ballot, effective Jan 1, 2027 if ratified, adds (K)(1)(d): a one-time transfer of the exemption to a subsequent homestead, 'limited in value to the amount ... claimed on the prior homestead in the last year.' Special assessment level continues for the surviving spouse of a 50%+ disabled veteran who is 45 or older or has minor children (§18(G)(2); LAC 61:V.101.G.4.a.i), even if the spouse holds only a usufruct. KIA/MIA/POW surviving spouses: separate full exemption and freeze continuation (§21(K)(2), §18(G)(1)(a)(i)(cc)).",
  "appeal": "Art. VII §18(E): assessments 'shall be subject to review first by the parish governing authority [board of review], then by the Louisiana Tax Commission or its successor, and finally by the courts.' Exemption denials are raised with the assessor during the 15-day open-rolls period (Orleans: July 15 to August 16 'plus three business days'), then by appeal to the parish Board of Review (parish BOR/LAT appeal forms), then the Tax Commission. Taxes paid on exempt-eligible property are recovered by an erroneous-payment claim to the Tax Commission within three years (LAC 61:V.3507).",
  "statute": "La. Const. Art. VII §20 (homestead exemption), §21(K) (additional disabled-veteran exemption; Acts 2026 No. 39 amendment pending Nov 3, 2026 ratification), §18(G) (special assessment level; Acts 2025 No. 220 amendment pending), §18(E) (review); Louisiana Tax Commission rules LAC 61:V.101.F-G (homestead and special assessment level), LAC 61:V.3507 (claim for taxes paid in error). Statutes cited by those sources but not opened here: La. R.S. 47:1703.1 (homestead application; cited on the Caddo form), R.S. 47:1709-1710 (cited in LAC 61:V.101 and .3505).",
  "sourceUrls": [
   {
    "url": "https://www.legis.la.gov/Legis/Law.aspx?d=206551",
    "title": "Louisiana Constitution Art. VII §21 Other Property Exemptions, incl. (K) disabled veterans, with pre/post Acts 2026 No. 39 text (Louisiana Legislature)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legis.la.gov/Legis/Law.aspx?d=206545",
    "title": "Louisiana Constitution Art. VII §18 Ad Valorem Taxes, incl. (G) Special Assessment Level and (E) review",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legis.la.gov/Legis/Law.aspx?d=206550",
    "title": "Louisiana Constitution Art. VII §20 Homestead Exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legis.la.gov/Legis/ViewDocument.aspx?d=1474006",
    "title": "Acts 2026 No. 39 (SB 180, enrolled): proposed amendment to Art. VII §21(K)(1), surviving-spouse one-time transfer (PDF)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://legis.la.gov/legis/BillInfo.aspx?s=26RS&b=SB180",
    "title": "SB 180 (2026 RS) bill history: 'Becomes Act No. 39', effective 1/1/27 upon ratification",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legis.la.gov/Legis/ViewDocument.aspx?d=1425422",
    "title": "Acts 2025 No. 220 (HB 300, enrolled): proposed amendment to Art. VII §18(G)(1)(a)(ii), $150,000 income limit, effective Jan 1, 2027 (PDF)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://legis.la.gov/legis/BillInfo.aspx?s=25RS&b=ACT220",
    "title": "HB 300 (2025 RS) bill history: 'Becomes Act No. 220'",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.doa.la.gov/media/kwhdydi3/61v01.docx",
    "title": "Louisiana Administrative Code Title 61 (Revenue and Taxation), incl. Part V Ad Valorem Taxation: §101.F homestead exemptions, §101.G special assessment level, §3507 claim for taxes paid in error (Office of the State Register, .docx)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.doa.la.gov/doa/osr/louisiana-administrative-code/",
    "title": "Office of the State Register: Louisiana Administrative Code index (links the Title 61 file)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.latax.la.gov/",
    "title": "Louisiana Tax Commission (STAX portal homepage; JavaScript-only)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://vetaffairs.la.gov/benefits/state",
    "title": "Louisiana Department of Veterans Affairs: State Benefits, Property Tax Exemption tiers",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://vetaffairs.la.gov/locations",
    "title": "LDVA parish veterans service office locations (source of the EBR-required LDVA certification letter)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://vetaffairs.la.gov/media-release-2026-legislative-session-delivers-new-protections-and-benefits-for-louisiana-veterans-release-20260017",
    "title": "LDVA release 20260017: SB 180 designated Act No. 39, surviving-spouse transfer on the fall 2026 ballot",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.louisianaassessors.org/about-assessors/",
    "title": "Louisiana Assessors' Association: About Assessors, list of all 64 parish assessors with websites and 2026 directory PDF (non-state)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.louisianaassessors.org/wp-content/uploads/2026/01/Directory-File-2026.pdf",
    "title": "Louisiana Assessors' Association 2026 directory: every assessor's address, phone, email, website (non-state)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.ebrpa.org/general-information/",
    "title": "East Baton Rouge Parish Assessor: Homestead Exemption and Extended Homestead Exemption for Qualifying Veterans (in-person filing, LDVA certification letter, applies from year of application)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.ebrpa.org/important-dates-resources/",
    "title": "East Baton Rouge Parish Assessor: Important Dates (Jan 1 assessment date, Aug 15-Sep 15 open roll, Nov 15 LTC certification)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.jpassessor.com/Resources/HomesteadExemption",
    "title": "Jefferson Parish Assessor: Homestead Exemption, how to file (in person), special assessment level, disabled veterans",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.caddoassessor.org/Home/FormLinks",
    "title": "Caddo Parish Assessor: Important Forms, incl. 2026 Homestead Exemption Application and Special Assessment Level Application",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.caddoassessor.org/Content/pdfs/forms/2026/2026HomesteadExemptionApp.pdf",
    "title": "Caddo Parish 2026 Veterans Homestead / New Permanent Homestead Exemption Application (PDF, read)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.caddoassessor.org/Content/pdfs/forms/2026/SpecialAssmtLevelApp.pdf",
    "title": "Caddo Parish Louisiana Special Assessment Level Application (PDF, read; veterans 50%+ apply annually)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://stpao.org/forms/",
    "title": "St. Tammany Parish Assessor: Forms and Resources (in person or Zoom; documents for homestead and freeze; $102,700 AGI for 2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://stpao.org/wp-content/uploads/2026/08/STPAO_26_VETS_BROCHURE_.pdf",
    "title": "St. Tammany Parish Assessor: A Guide for St. Tammany's Veterans (Feb 2026 PDF, read)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://stpao.org/wp-content/uploads/2026/10/508-Final-Constitutional-Amendment.-PSA-.pdf",
    "title": "St. Tammany Parish Assessor PSA: Nov 3, 2026 ballot, Amendment No. 1 (disabled-veteran surviving spouse transfer) and No. 9 (freeze income limit to $150,000) (PDF, read)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.lafayetteassessor.com/forms",
    "title": "Lafayette Parish Assessor: Forms/Downloads, Special Assessment Level Form (senior, disability, veteran freeze)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://content.lafayetteassessor.com/uploads/Special_Assmt_Form_for_Web_Site_5eb42c6c9e.pdf",
    "title": "Lafayette Parish Louisiana Special Assessment Level Application (PDF, read; items to bring; veteran freeze renewed yearly)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "http://web.archive.org/web/20230605140831/https://nolaassessor.com/homestead-sal/",
    "title": "Orleans Parish Assessor: Homestead & SAL application requirements incl. 100% Disabled Veteran's Freeze (archived 2023-06-05; live site returns 403 to automation)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "http://web.archive.org/web/20230605122442/https://nolaassessor.com/homestead-application/",
    "title": "Orleans Parish Assessor: Homestead Application online/virtual appointment requirements (archived 2023-06-05)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "http://web.archive.org/web/20230605132921/https://nolaassessor.com/2023/05/08/assessor-reminds-property-owners-to-make-sure-homestead-exemption-special-assessment-level-are-in-place/",
    "title": "Orleans Parish Assessor release, May 8 2023: freeze and veteran applications due by Aug 15 for the next tax year; open rolls Jul 17-Aug 15 (archived 2023-06-05)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[4].tiers (Additional Disabled Veteran Exemption)",
    "issue": "Constitution caps the add-on by total assessed value: 50-69% 'If property ... has an assessed value in excess of ten thousand dollars, ad valorem property taxes shall apply to the assessment in excess of ten thousand dollars' ($7,500 + $2,500); 70-99% cap $12,000 ($7,500 + $4,500). Market-equivalent tier values ($25,000 / $45,000) are consistent; the 100% tier exempts 'the remaining assessed valuation' with no cap. Parishes note municipal taxes and fees are still billed (East Baton Rouge: 'city taxes and fees will still be due'; St. Tammany: the first $7,500 remains taxable for municipal millages).",
    "source": "https://www.legis.la.gov/Legis/Law.aspx?d=206551"
   },
   {
    "field": "propertyTax.programs[3].incomeLimit (Special Assessment Level)",
    "issue": "§18(G)(1)(a)(ii): AGI limit is $100,000 'adjusted annually by the Consumer Price Index' beginning tax year 2026; St. Tammany and Lafayette publish $102,700 for 2026. Acts 2025 No. 220 (Amendment No. 9 on the Nov 3, 2026 ballot) raises it to $150,000 effective Jan 1, 2027, CPI-indexed 'Beginning for the tax year 2028.' LAC 61:V.101.G.2 still reads '$100,000 for tax year 2021 (2022 Orleans Parish)' and has not been updated for indexing.",
    "source": "https://www.legis.la.gov/Legis/ViewDocument.aspx?d=1425422"
   },
   {
    "field": "propertyTax.programs[3].details (Special Assessment Level renewal)",
    "issue": "Data says owners under 65 'must re-certify income annually'; parishes implement the veteran freeze as a full annual re-application (Lafayette: 'must be renewed yearly'; Caddo: 'apply annually'; Orleans: 'submitted yearly before August 15th'). Suggest wording: 'veteran freeze must be re-applied for each year with the prior-year return.'",
    "source": "https://content.lafayetteassessor.com/uploads/Special_Assmt_Form_for_Web_Site_5eb42c6c9e.pdf"
   },
   {
    "field": "propertyTax.programs[0].survivingSpouse",
    "issue": "Surviving spouse of a 100%/IU veteran qualifies 'whether or not the exemption was in effect on the property prior to the death of the veteran' (must occupy and remain owner); data shows survivingSpouse true, consistent, but add this no-prior-claim rule and the pending Acts 2026 No. 39 one-time transfer (effective Jan 1, 2027 if ratified Nov 3, 2026).",
    "source": "https://www.legis.la.gov/Legis/ViewDocument.aspx?d=1474006"
   }
  ],
  "notes": "Second pass (2026-10-21). Confidence raised from 'reported' to 'verified': the office, application rule, eligibility timing, and refund mechanics now come from the constitution (legis.la.gov) and the Louisiana Tax Commission's rules in LAC 61:V (opened as the Office of the State Register's Title 61 .docx; §101.F-G and §3507). Louisiana delegates the filing mechanics to the 64 parish assessors, so form, deadline cutoff, documents and online-filing fields rest on the parish assessor pages of East Baton Rouge, Jefferson, Caddo, St. Tammany, Lafayette and Orleans (the latter via Internet Archive captures of June 2023 because nolaassessor.com returns 403 to automated requests; the Wayback Machine itself was intermittently offline during the check and the three archived URLs returned 200 on retry). Sites that blocked the first pass (ebrpa.org, jpassessor.com, stpao.org, vetaffairs.la.gov) answer when sent a browser User-Agent. Office locator moved from tier 3 to tier 2: the assessors' association directory is the only complete list, and the LTC homepage is the fallback. Not verified: R.S. 47:1703 et seq. text (legis.la.gov's Title 47 table of contents is postback-only and its postback returned an error; section ids are not sequential, so the section could not be located without search); whether any parish grants exemptions retroactively on its own (none of the six says so; the LTC three-year claim is the only refund path found); the LDVA 'Disabled Veterans Property Tax Benefits Certification' letter is described only on the EBR page, not on vetaffairs.la.gov. Both Nov 3, 2026 amendments (Acts 2026 No. 39, ballot Amendment No. 1; Acts 2025 No. 220, Amendment No. 9) take effect Jan 1, 2027 only if ratified; re-check after the election."
 },
 "MA": {
  "state": "MA",
  "officeType": "city/town board of assessors",
  "officeTypeNote": "Massachusetts property tax is assessed and collected by the 351 cities and towns, not the state. Every Clause 22-family exemption is applied for with the local Board of Assessors on the state-approved form; the Department of Revenue (Division of Local Services) only publishes the forms and guidance and cannot rule on eligibility. Appeals go to the state Appellate Tax Board.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": "MA Division of Local Services: Property Tax Forms and Guides",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.mass.gov/lists/property-tax-forms-and-guides",
   "note": "DLS keeps a Local Officials Directory of every assessing office, but it lives inside the DLS Gateway behind a login (the old public report URL on dlsgateway.dor.state.ma.us now errors out), so there is no public state directory of assessors. Direct the user to '<town name> board of assessors' on the municipal website. mass.gov returns 403 to HEAD/plain curl requests; the fallback URL returns 200 to a browser-header GET."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Veteran: Application for Statutory Exemption, General Laws Chapter 59, § 5 (Clauses 22, 22A, 22B, 22C, 22D, 22E, 22F, 22H)",
    "number": "State Tax Form 96-4",
    "url": "https://www.mass.gov/doc/application-for-statutory-exemption-gl-c-59-s-5-veteran-state-tax-form-96-4/download",
    "revision": "Revised 12/2022",
    "filedWith": "Board of Assessors of the city or town where the domicile is located"
   },
   {
    "programRef": "*",
    "name": "Form 96-4 (older copy of the same form still posted by DLS)",
    "number": "State Tax Form 96-4",
    "url": "https://www.mass.gov/doc/form-96-4-application-for-personal-property-tax-exemptions-for-veterans/download",
    "revision": "Revised 7/2017",
    "filedWith": "Board of Assessors of the city or town where the domicile is located"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-01",
   "text": "Form 96-4: 'Must be filed with assessors on or before April 1, or 3 months after actual (not preliminary) tax bills are mailed for fiscal year if later.' Timely if postmarked by USPS on or before the deadline. Some assessors accept applications before actual bills are mailed."
  },
  "effective": "Credited against the tax for the fiscal year (July 1 to June 30) in which the application is filed; all eligibility tests (ownership, domicile, residency, disability) must be met as of July 1 of that fiscal year. 'If you do not meet all requirements as of July 1, you cannot receive all or any portion of the exemption for that tax year.' A refund issues only if the full year's tax was already paid when the exemption is granted.",
  "lateFiling": "Not accepted. Form 96-4: 'THIS DEADLINE CANNOT BE EXTENDED OR WAIVED BY THE ASSESSORS FOR ANY REASON. IF YOUR APPLICATION IS NOT TIMELY FILED, YOU LOSE ALL RIGHTS TO AN EXEMPTION AND THE ASSESSORS CANNOT BY LAW GRANT YOU ONE.'",
  "retroactivity": {
   "type": "none",
   "years": 0,
   "text": "No refund of prior fiscal years. Each fiscal year requires its own timely application; a missed year is lost (DOR veterans guide: 'the assessors may not waive this filing deadline, nor act on a late application, for any reason')."
  },
  "renewal": {
   "type": "annual",
   "text": "DOR guide: 'You must file an application for each fiscal year with the assessors in the city or town where your property is located.' Documentation is lighter after the first year: Form 96-4 says attach the VA Certificate of Disability only in the first year, or later only 'if disability rating is 100% or has changed'; M.G.L. c.59 §5 cl. 22E requires 'an annual statement certifying that the disability rating' has not fallen below 100%."
  },
  "ratingChange": "Report any rating change on the next annual Form 96-4 and attach a new VA certificate; the clause granted is the single most beneficial one the veteran qualifies for as of July 1 (only one c.59 §5 exemption per fiscal year). Clause 22E (100%) requires an annual certification that the rating is still 100%; a veteran who drops below 100% falls back to Clause 22 ($400 at 10%+).",
  "move": "No transfer. Apply with the Board of Assessors in the new city or town for the next fiscal year in which you own and occupy the new domicile on July 1. When selling, the DOR guide says the exemption credit must be handled privately at closing: 'you are responsible for seeing that the exemption is properly credited at the closing'. Also report on Form 96-4 whether an exemption was granted in any other city or town for the year.",
  "onlineFiling": {
   "available": null,
   "text": "Varies by municipality. The state form is a PDF returned to the local assessors by mail or in person; some cities and towns offer their own online portals."
  },
  "documents": [
   "State Tax Form 96-4 completed for the fiscal year, signed under penalties of perjury",
   "First year: copy of discharge papers (DD-214)",
   "First year: Certificate of Disability from the U.S. Department of Veterans Affairs or branch of service (re-attach later only if the rating is 100% or has changed; Clause 22E requires an annual statement that the rating is still 100%)",
   "Evidence of residency, ownership, domicile and occupancy as of July 1 (e.g., deed, driver's license; trust instrument with all schedules if the home is held in trust)",
   "Proof of the residency test: domiciled in MA at least 6 months before entering service, or 2 consecutive years in MA before the tax year (1 year by local option); if not, list of addresses for the last 6 years",
   "Surviving spouse, first year: death certificate and VA/branch documentation of service-connected death where applicable; written authorization if signed by an agent"
  ],
  "survivingSpouse": "Surviving spouses who have never remarried keep the veteran's clause (22, 22A, 22B, 22C, 22E, 22F) if they own and occupy the domicile; spouses who own the domicile while the veteran is alive also qualify. Clause 22D (full exemption) covers never-remarried surviving spouses of service members or veterans who died from active-duty injury or illness (or MIA presumed dead), with a 2-year MA residency test (1 year by local option) unless the member was domiciled in MA 6 months before service. Same Form 96-4; attach death certificate in the first year.",
  "appeal": "Assessors have 3 months from filing to act or the application is deemed denied. Appeal to the Appellate Tax Board (or county commissioners where county government survives) within 3 months of the assessors' decision or deemed denial; if the tax on the domicile exceeds $5,000, all preliminary and actual installments must have been paid on time for the ATB to hear it. ATB: www.mass.gov/atb, 617-727-3100.",
  "statute": "M.G.L. c. 59, § 5, Clauses 22, 22A-22H (exemptions); c. 59, § 59 (application deadline: April 1 or 3 months after bills); c. 59, § 60 (application not open to public inspection)",
  "sourceUrls": [
   {
    "url": "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleIX/Chapter59/Section5",
    "title": "M.G.L. c. 59 § 5 (Clauses Twenty-second through Twenty-second H)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleIX/Chapter59/Section59",
    "title": "M.G.L. c. 59 § 59 (exemption application deadline: April 1 or 3 months after bill)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.mass.gov/doc/application-for-statutory-exemption-gl-c-59-s-5-veteran-state-tax-form-96-4/download",
    "title": "State Tax Form 96-4, Veteran Application for Statutory Exemption (Rev. 12/2022)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.mass.gov/doc/form-96-4-application-for-personal-property-tax-exemptions-for-veterans/download",
    "title": "State Tax Form 96-4 (Rev. 7/2017 copy)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.mass.gov/doc/guide-to-real-estate-tax-exemptions-for-qualifying-veterans-0/download",
    "title": "DOR/DLS Taxpayer's Guide to Local Property Tax Exemptions: Veterans, Clauses 22-22H (Rev. 7/2019)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.mass.gov/lists/property-tax-forms-and-guides",
    "title": "DLS Property Tax Forms and Guides",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.mass.gov/orgs/division-of-local-services",
    "title": "MA Division of Local Services (DOR)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   "The per-clause `details` text says MA residency is '2-5 consecutive years before filing'; the DOR guide (Rev. 7/2019) gives 2 consecutive years before the tax year begins for veterans (1 year by local option), and the 5-year test applies only to Clause 22H surviving parents/guardians.",
   "Clause 22C in the DOR guide is 'total disability in the line of duty' plus specially adapted housing assistance; it does not say '100% P&T' specifically. The row's `ptRequired: true` is a reasonable proxy but the statute wording is 'permanent and total service-connected disability'.",
   "Clause 22E ($1,000) in the DOR guide has survivingSpouse eligibility (spouses who own the domicile and surviving spouses of veterans entitled under 22E); the row has survivingSpouse: false."
  ],
  "notes": "All mass.gov URLs return HTTP 403 to curl HEAD and to curl without browser headers (bot wall); each was verified 200 with a browser-header GET and the two PDFs were downloaded and read in full. The DOR veterans guide is dated Rev. 7/2019 and predates the 2024 HERO Act local options (22I/22J), so it does not mention doubled amounts. Statewide online filing does not exist; the state form is paper."
 },
 "MD": {
  "state": "MD",
  "officeType": "SDAT local assessment office (Supervisor of Assessments for the county)",
  "officeTypeNote": "Maryland assessment is a STATE function. The §7-208 exemption is filed with the State Department of Assessments and Taxation (SDAT) local office for the county where the home sits (24 offices: 23 counties + Baltimore City), not with the county treasurer/finance office that mails the bill. The local-option §9-265 county CREDIT is the opposite: it is filed with the county or municipality on its own form.",
  "officeLocator": {
   "tier": 1,
   "url": "https://dat.maryland.gov/realproperty/pages/maryland-assessment-offices.aspx",
   "label": "SDAT: Maryland Assessment Offices (all 24 local offices with address, phone, fax, email)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://dat.maryland.gov/realproperty/Pages/default.aspx",
   "note": "Single directory page; no per-county office pages. The per-county links on the page go to reassessment-area maps, not office pages. The same 24-office list (with emails of the form sdat.<code>@maryland.gov) is printed as page 2 of the exemption application PDF."
  },
  "forms": [
   {
    "programRef": "Disabled Veteran Exemption",
    "name": "Application for Exemption for Disabled Veterans (100 Percent Disabled Veteran Exemption Application)",
    "number": null,
    "url": "https://dat.maryland.gov/SiteAssets/Pages/sdatforms/100%20Percent%20Disabled%20Veteran%20Exemption%20Application_0726-A.pdf",
    "revision": "Rev Feb 2025",
    "filedWith": "Supervisor of Assessments at the SDAT local assessment office for the county"
   },
   {
    "programRef": "Disabled Veteran Exemption",
    "name": "Surviving Spouse of a 100 Percent Disabled Veteran Exemption application",
    "number": null,
    "url": "https://dat.maryland.gov/SiteAssets/Pages/sdatforms/Surviving%20Spouse%20of%20a%20100%20Percent%20Disabled%20Veteran%20Exemption_0726-A.pdf",
    "revision": null,
    "filedWith": "Supervisor of Assessments at the SDAT local assessment office for the county"
   },
   {
    "programRef": "County Credits",
    "name": "County/municipal disabled-veteran property tax credit application (form varies by county)",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "county or municipal finance/tax office (not SDAT)"
   }
  ],
  "deadline": {
   "type": "rolling",
   "date": null,
   "text": "No annual deadline. The exemption is prorated for the remainder of the taxable year after the application date (§7-208(f)(1)). A buyer who applies within 30 days after settlement gets the tax abated from the settlement date (§7-208(f)(2))."
  },
  "effective": "Prorated from the application date for the rest of the taxable year (July 1 to June 30); from settlement date if a purchaser applies within 30 days after settlement. A veteran may also apply for a specific dwelling BEFORE buying it; SDAT issues a preliminary approval or denial within 15 business days and the exemption applies on purchase without a new application (§7-208(d)).",
  "lateFiling": "No late-filing penalty as such; the exemption simply starts on the application date, with a refund available for prior eligible years under §7-208(g) if claimed within the 3-year window. The application has a checkbox: 'Check to apply for a refund of any property tax paid for which you may be eligible under Tax Property Article 7-208.'",
  "retroactivity": {
   "type": "fixed",
   "years": 3,
   "text": "Mandatory refund of state, county, and municipal tax for years the exemption was authorized but not granted, if the veteran applies within a 3-year period beginning with the calendar year the veteran first became eligible (§7-208(g), as amended 2021). Interest is owed if the refund is not paid within 60 days (§7-208(h)). Earlier years were refundable only at local discretion."
  },
  "renewal": {
   "type": "none",
   "text": "No annual re-file for the §7-208 exemption. The form has a 'Check if transferring an exemption & provide an address' box for moves. (The separate disabled ACTIVE-DUTY exemption does require an annual Certification of Active Duty Status.)"
  },
  "ratingChange": "The exemption requires a final VA rating of 100% permanent and total or permanent unemployability. A veteran whose rating is later reduced below that no longer qualifies; the statute does not provide a grace period. Veterans rated 50-99% may instead qualify for the local-option §9-265 county credit (25% of county/municipal tax at 50-74%, 50% at 75%+ where the county has adopted it).",
  "move": "File a new application for the new dwelling and check the 'transferring an exemption' box on the form; the new exemption is prorated from the application date (or settlement date if filed within 30 days). The pre-purchase application route in §7-208(d) lets a veteran get the new home approved before closing.",
  "onlineFiling": {
   "available": false,
   "text": "SDAT's forms page lists the disabled-veteran applications as PDFs only; online filing is offered only for the Homestead and Homeowners'/Renters' credits. File by mail or email to the local assessment office (each office lists an sdat.<code>@maryland.gov address)."
  },
  "documents": [
   "Copy of honorable discharge or DD-214",
   "Most recent VA rating notification packet showing a FINAL service-connected rating of 100% permanent and total or permanent unemployability, including the rating's effective date and the decision date (if unavailable, the VA completes the certification section of the form)",
   "Proof of Maryland residency: current Maryland driver's license, voter registration, or redacted prior-year Maryland income tax return (contract of sale if the purchase is pending)",
   "Property account number and address; Social Security number on the form"
  ],
  "survivingSpouse": "Unremarried surviving spouse of a disabled veteran (or of a service member who died in the line of duty, or a spouse receiving DIC) keeps or claims the exemption on the dwelling if they own and reside there; a later-acquired dwelling may carry an exemption equal to the prior one (§7-208(b)-(c)). Separate SDAT form: 'Surviving Spouse of a 100 Percent Disabled Veteran Exemption'.",
  "appeal": null,
  "statute": "Md. Code, Tax-Property §7-208 (exemption); §9-265 (local-option county/municipal credit)",
  "sourceUrls": [
   {
    "url": "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtp&section=7-208&enactments=false",
    "title": "Md. Code, Tax-Property §7-208 (General Assembly statute text)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtp&section=9-265&enactments=false",
    "title": "Md. Code, Tax-Property §9-265 (local-option disabled veteran credit)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dat.maryland.gov/SiteAssets/Pages/sdatforms/100%20Percent%20Disabled%20Veteran%20Exemption%20Application_0726-A.pdf",
    "title": "SDAT Application for Exemption for Disabled Veterans (Rev Feb 2025, with office list)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dat.maryland.gov/SiteAssets/Pages/sdatforms/Surviving%20Spouse%20of%20a%20100%20Percent%20Disabled%20Veteran%20Exemption_0726-A.pdf",
    "title": "SDAT Surviving Spouse of a 100 Percent Disabled Veteran Exemption application",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dat.maryland.gov/Pages/sdatforms.aspx",
    "title": "SDAT Forms & Applications (Exemptions Applications section)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dat.maryland.gov/realproperty/pages/maryland-assessment-offices.aspx",
    "title": "SDAT Maryland Assessment Offices directory",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   "The 'Disabled Veteran Exemption' row's `details` field still says '$5,000 assessed value exemption'; the `summary` already corrects this to a complete exemption under §7-208. The `details` string should be updated to match.",
   "§9-265(c) conditions the 50% tier on the veteran NOT qualifying under §7-208 and sets 25% at 50-74% rating; the summary's '75-99%' phrasing is consistent with that but the surviving-spouse flag (false) should be checked against §9-265(a), which this research did not confirm either way."
  ],
  "notes": "The SDAT Assessment Procedure Manual page on §7-208 refunds (ProcedureDetails LID=269) returned 404 on 2026-10-21, so the refund rule is sourced from the statute text itself. The surviving-spouse form PDF was verified live (200) but not opened; its revision date is unknown. No appeal route for an exemption denial appears on the form or forms page, so `appeal` is null."
 },
 "ME": {
  "state": "ME",
  "officeType": "municipal assessor (town/city); State Tax Assessor (Maine Revenue Services Property Tax Division) for the Unorganized Territory",
  "officeTypeNote": "Application form: 'You must file this application along with any supporting documents with the municipal assessor by April 1. If you live in the unorganized territory, file this application with the State Tax Assessor at: Maine Revenue Services, Property Tax Division, P.O. Box 9106, Augusta, ME 04332-9106.' Maine has no county-level property tax office.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": null,
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.maine.gov/revenue/taxes/tax-relief-credits-programs/property-tax-relief-programs/property-tax-exemptions",
   "note": "Maine Revenue Services publishes no directory of municipal assessors (its 'Assessor Agents' page lists only MRS field staff). The exemptions page says 'All of the above exemptions require completion of an application to the local town office where the property is located.' MRS Property Tax Division contact page: https://www.maine.gov/revenue/taxes/property-tax/contact-information."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Property Tax Exemption Application for veterans of the Armed Forces of the United States (36 M.R.S. §653 and Property Tax Bulletin No. 7); covers the $6,000 exemption, the $7,000 WWI exemption and the $50,000 specially adapted housing exemption",
    "number": null,
    "url": "https://www.maine.gov/revenue/sites/maine.gov.revenue/files/2024-10/veterans_application_form.pdf",
    "revision": "Rev 05/24",
    "filedWith": "municipal assessor of the town of residence (State Tax Assessor for the Unorganized Territory), by April 1"
   },
   {
    "programRef": "*",
    "name": "Veteran exemption application for a widowed spouse, parent or minor child of a deceased veteran",
    "number": null,
    "url": "https://www.maine.gov/revenue/sites/maine.gov.revenue/files/2024-10/veterans_WPMC.application_form.pdf",
    "revision": "2024-10 posting",
    "filedWith": "municipal assessor, by April 1"
   },
   {
    "programRef": "*",
    "name": "Property Tax Bulletin No. 7, Tax Exemptions for Veterans (MRS guidance: eligibility, application, proof of entitlement)",
    "number": "Bulletin No. 7",
    "url": "https://www.maine.gov/revenue/sites/maine.gov.revenue/files/inline-files/bull7.pdf",
    "revision": "October 14, 2025 (replaces October 6, 2022)",
    "filedWith": "n/a (guidance)"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-01",
   "text": "36 M.R.S. §653(1)(G): 'make written application and file written proof of entitlement on or before the first day of April, in the year in which the exemption is first requested, with the assessors of the place in which the person resides.' Bulletin 7: file 'by April 1 of the year the applicant first requests an exemption.' April 1 is also Maine's assessment date."
  },
  "effective": "Property tax year beginning April 1 of the year the application is filed (taxes committed that summer/fall). The exemption is applied at the municipality's certified ratio: 'the assessor must multiply the full amount of the exemption by the certified ratio.'",
  "lateFiling": "An application after April 1 takes effect the following April 1. Exception (Bulletin 7): 'An assessor may abate taxes for a qualifying spouse or child who misses the April 1 application deadline, if that qualifying individual applies within one year of the commitment date and the related veteran died during the 12-month period preceding April 1.'",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No refund of prior years for a late veteran application, other than the surviving spouse/child abatement window described under lateFiling (36 M.R.S. §841 abatement discretion otherwise)."
  },
  "renewal": {
   "type": "none",
   "text": "§653(1)(G): 'The assessors shall thereafter grant the exemption to any person who is so qualified and remains a resident of that place or until they are notified of reason or desire for discontinuance.' Bulletin 7: 'Once the veteran or other qualifying individual is approved for an exemption, an annual application for exemption is not necessary unless specifically requested by the assessor.'"
  },
  "ratingChange": "Under §653 the only disability test is receipt of federal pension or compensation for TOTAL disability (service-connected total disability qualifies at any age; non-service-connected total disability needs wartime service or an expeditionary medal). A veteran who becomes 100% files the application with the VA benefit summary letter by the next April 1. Starting with the April 1, 2027 tax year the new §683-A tiers the add-on by rating (60% $10K up to 100% $50K), so a rating change will change the amount; the owner 'shall notify the assessor promptly when ... status of the owner changes' (§684(4)).",
  "move": "The exemption is tied to the town of permanent residence; a veteran who moves files a new application with the new town's assessor by April 1 (§653(1)(G) requires filing 'with the assessors of the place in which the person resides'). Property conveyed to obtain the exemption is not exempt except transfers between spouses (§653(1)(I)).",
  "onlineFiling": {
   "available": null,
   "text": "Varies by municipality; MRS provides fillable PDFs only. Many towns accept the signed PDF by email or mail; some require originals."
  },
  "documents": [
   "DD Form 214 (Report of Separation / Certificate of Release or Discharge from Active Duty) or similar DoD form",
   "VA benefit summary letter (or other VA certificate/letter) showing receipt of compensation or pension for total disability; Bulletin 7: 'the applicant may provide other proof of compensation or pension payment for total disability or service-connected disability' if the letter is unavailable",
   "Proof of age (birth certificate, driver's license or state ID) if claiming as a 62+ wartime veteran",
   "For the $50,000 specially adapted housing exemption: VA letter verifying total and permanent disability and the SAH grant",
   "Surviving spouse/parent/minor child: VA or federal letter showing the pension or compensation based on the veteran's death; applications are confidential (not public records)"
  ],
  "survivingSpouse": "§653(1)(D): $6,000 (or $7,000 WWI) exemption for 'the unremarried surviving spouse or minor child of any veteran who would be entitled to the exemption if living, or who is in receipt of a pension or compensation from the Federal Government as the surviving spouse or minor child'; also an unremarried surviving-spouse parent 62+ receiving a pension based on a child's service-connected death. SAH $50,000 exemption also extends to unremarried surviving spouses (§653(1)(D-1)). Separate WPMC application form. From April 1, 2027, §683-A(2): the survivor 'is eligible for the additional exemption that the deceased veteran would be eligible for ... if living.'",
  "appeal": "Denial of a §653 exemption is contested by an abatement request to the assessor under 36 M.R.S. §841 (within 185 days of commitment), then the local board of assessment review or county commissioners and the State Board of Property Tax Review/Superior Court. Not detailed in the sources read.",
  "statute": "36 M.R.S. §653 (through tax year beginning April 1, 2026); 36 M.R.S. §683-A(2) and §684 (new veteran homestead add-on from April 1, 2027, PL 2025 c. 650 Pt. M); 36 M.R.S. §5219-KK (Property Tax Fairness Credit, veteran expansion)",
  "sourceUrls": [
   {
    "url": "https://legislature.maine.gov/statutes/36/title36sec653.html",
    "title": "36 M.R.S. §653 Estates of veterans (incl. §653(3) discontinuance from April 1, 2027)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://legislature.maine.gov/statutes/36/title36sec683-A.html",
    "title": "36 M.R.S. §683-A Homestead exemption (new general $25,000 exemption plus veteran tiers, effective tax years beginning April 1, 2027)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://legislature.maine.gov/statutes/36/title36sec684.html",
    "title": "36 M.R.S. §684 Forms; application (April 1 filing, proof of entitlement for veteran add-on, no reapplication)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.maine.gov/revenue/taxes/tax-relief-credits-programs/property-tax-relief-programs/property-tax-exemptions",
    "title": "Maine Revenue Services: Property Tax Exemptions (Veteran Exemption, SAH exemption, application links)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.maine.gov/revenue/sites/maine.gov.revenue/files/2024-10/veterans_application_form.pdf",
    "title": "MRS Property Tax Exemption Application for veterans (Rev 05/24)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.maine.gov/revenue/sites/maine.gov.revenue/files/2024-10/veterans_WPMC.application_form.pdf",
    "title": "MRS veteran exemption application for widowed spouse, parent or minor child",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.maine.gov/revenue/sites/maine.gov.revenue/files/inline-files/bull7.pdf",
    "title": "MRS Property Tax Bulletin No. 7, Tax Exemptions for Veterans (Oct 14, 2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.maine.gov/revenue/tax-return-forms/property-tax",
    "title": "MRS Property Tax Forms",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.maine.gov/revenue/taxes/property-tax/municipal-services",
    "title": "MRS Property Tax Division: Municipal Services",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[0] (Veteran Property Tax Exemption, $6,000)",
    "issue": "MAJOR UPCOMING CHANGE: PL 2025 c. 650 Part M discontinues the §653 veteran exemption 'beginning with property tax years beginning on or after April 1, 2027' (§653(3)) and replaces it with 36 M.R.S. §683-A: a $25,000 general homestead exemption plus a veteran add-on tiered by VA rating: under 60% (or no rating) $5,000 if under 62 / $6,000 if 62+ / $7,000 WWI; 60% $10,000; 70% $20,000; 80% $30,000; 90% $40,000; 100% $50,000; SAH grant $50,000 (one paragraph only). Wartime service is no longer required for the rating-based tiers and the age-62/total-disability gate disappears. The current data row ($6,000 at 100%, wartimeRequired) is correct only through the April 1, 2026 tax year.",
    "source": "https://legislature.maine.gov/statutes/36/title36sec683-A.html"
   },
   {
    "field": "propertyTax.programs[0].summary",
    "issue": "Summary says Maine has no full veteran exemption and models $50,000 only for SAH; from 4/1/2027 a 100%-rated veteran's homestead gets $25,000 + $50,000 = $75,000 of just value exempt (still partial). Also note the 2022 Property Tax Fairness Credit expansion for veterans (income-tax-administered), which MRS flags on the exemptions page.",
    "source": "https://www.maine.gov/revenue/taxes/tax-relief-credits-programs/property-tax-relief-programs/property-tax-exemptions"
   }
  ],
  "notes": "maine.gov returns 403/404 to most automated user agents; pages were retrieved with a Safari desktop UA over HTTP/1.1. MRS has not yet posted guidance or a form for the §683-A veteran add-on that starts with the April 1, 2027 tax year; applications for 2027 will presumably run through the homestead exemption application under §684 (written application plus proof of entitlement by April 1, 2027, then automatic continuation). The existing §653 application (Rev 05/24) and Bulletin 7 (Oct 2025) remain the filing path for the April 1, 2026 tax year. Veterans in the Unorganized Territory file with MRS directly."
 },
 "MI": {
  "state": "MI",
  "officeType": "local assessor (city or township where the home is located)",
  "officeTypeNote": "Form 5107 goes to the ASSESSOR of the city or township, not the county and not the state. STC Bulletin 19 of 2023: 'Do not file with the Department of Treasury or the State Tax Commission.' Since the 2023 amendments the assessor (not the Board of Review) grants or denies the claim. The separate Homestead Property Tax Credit is an income-tax credit filed with the Michigan Department of Treasury on the MI-1040CR family of forms.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": "Michigan State Tax Commission: Disabled Veterans Exemption Information",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.michigan.gov/treasury/local/stc/ppe/detail/disabled-veterans-exemption-information",
   "note": "Michigan has ~1,500 assessing units and the state publishes no public assessor-contact directory (the STC 'Assessor of Record' report lists names and certification levels only). Direct the user to the assessing office on their city or township website. State Tax Commission: 517-335-3429, State-Tax-Commission@michigan.gov."
  },
  "forms": [
   {
    "programRef": "Disabled Veteran Exemption",
    "name": "State Tax Commission Affidavit for Disabled Veterans Exemption",
    "number": "Form 5107",
    "url": "https://www.michigan.gov/treasury/-/media/Project/Websites/treasury/Forms/Local-Government/PSD/STC/5107.pdf",
    "revision": "Rev. 03-26 (approved by the STC April 7, 2026)",
    "filedWith": "local assessor of the city or township where the property is located"
   },
   {
    "programRef": "Disabled Veteran Exemption",
    "name": "Request to Rescind Disabled Veterans Exemption",
    "number": "Form 6054",
    "url": "https://www.michigan.gov/treasury/-/media/Project/Websites/treasury/Forms/Local-Government/PSD/STC/6054.pdf?rev=6a0e303431f34ecebd56512f7d4359b4&hash=507499C83945FBF2A42397379372B6AB",
    "revision": null,
    "filedWith": "local assessor, within 45 days of ceasing to qualify or moving"
   },
   {
    "programRef": "Disabled Veteran Exemption",
    "name": "Notice of Denial of Disabled Veterans Exemption (issued by the assessor; starts the 35-day Tax Tribunal appeal clock)",
    "number": "Form 6055",
    "url": "https://www.michigan.gov/treasury/-/media/Project/Websites/treasury/Forms/Local-Government/PSD/STC/6055.pdf?rev=e6f3772efeca4b76a6961172728bb73c&hash=4F9792C12C92D55CC33CE95E8072945A",
    "revision": null,
    "filedWith": "n/a (assessor-issued)"
   },
   {
    "programRef": "Homestead Property Tax Credit",
    "name": "Michigan Homestead Property Tax Credit Claim (MI-1040CR; veterans with a service-connected disability and surviving spouses use the MI-1040CR-2 and file whichever yields the larger credit)",
    "number": "MI-1040CR / MI-1040CR-2",
    "url": null,
    "revision": null,
    "filedWith": "Michigan Department of Treasury, with the MI-1040 income tax return (or alone if no return is required)"
   }
  ],
  "deadline": {
   "type": "calendar-year",
   "date": "12-31",
   "text": "Bulletin 19 of 2023: 'Form 5107 may be submitted to the local assessing unit after January 1 and before December 31 during the year in which the exemption is requested.' MCL 211.7b(2): filed 'after January 1 and before December 31' of the year claimed. One-time filing for taxes levied on or after Jan 1, 2025."
  },
  "effective": "Applies to all property taxes for the current calendar year, including taxes already paid (refunded) and taxes still owed (MCL 211.7b(3)). If the veteran did not own and occupy the home for the whole year, the exemption is prorated: by the tax proration in the closing documents if they are attached to Form 5107; otherwise by (days owned and occupied / 365). No refund of prior-year taxes paid to the seller at closing. From Jan 1, 2025 the exemption stays in place in later years without reapplication (MCL 211.7c).",
  "lateFiling": "An affidavit not filed within the calendar year cannot be granted for that year by the assessor, and 'the March, July, and December Boards of Review have no authority to hear claims for the disabled veterans exemption for the current year.' Exception: the July or December Board of Review may grant the exemption as a 'qualified error' under MCL 211.53b for the current and immediately preceding year when (1) the local unit mis-processed a timely affidavit, or (2) the VA was late issuing the 100% P&T determination.",
  "retroactivity": {
   "type": "fixed",
   "years": 1,
   "text": "Only through the MCL 211.53b qualified-error route at the July or December Board of Review: 'for the current year and immediately preceding tax year', and only for a processing error on a timely affidavit or 'a delay in the determination by the United States Department of Veterans Affairs'. No general look-back refund."
  },
  "renewal": {
   "type": "none",
   "text": "Form 5107 instructions: 'Under MCL 211.7c, beginning January 1, 2025, the exemption, once granted, remains in effect without subsequent annual reapplication.' It continues until rescinded by the owner (Form 6054, due within 45 days of ceasing to qualify) or denied by the assessor. Local units must audit, no more than once every 3 years absent cause. (Before 2025 the affidavit had to be refiled every year.)"
  },
  "ratingChange": "Qualification is 100% P&T, or VA individual unemployability, or receipt of SAH/SHA specially adapted housing assistance (Bulletin 19 of 2023 confirms either grant qualifies). If the veteran stops meeting any of these, Form 6054 must be filed with the assessor within 45 days; otherwise the assessor can deny for the current year plus the 3 preceding years with taxes, interest at 1%/month and penalty (MCL 211.7c). A newly-rated veteran files Form 5107 within the calendar year; if the VA decision was delayed, the July/December Board of Review can reach back one year.",
  "move": "File Form 6054 (rescission) within 45 days of ceasing to own and occupy the old home, and a new Form 5107 with the assessor of the new city or township, attaching closing documents so the first-year proration follows the closing tax split. The exemption on the old home is removed as of the conveyance date and prorated daily (MCL 211.7b(3)(c)).",
  "onlineFiling": {
   "available": null,
   "text": "Form 5107 is a fillable PDF submitted to the local assessor; acceptance by email or portal varies by city/township. No state e-file for the exemption. The Homestead Property Tax Credit (MI-1040CR) can be e-filed with the Michigan income tax return."
  },
  "documents": [
   "Form 5107, signed by the veteran or legal designee (designee attaches a letter of authority)",
   "A copy of the U.S. Department of Veterans Affairs letter showing permanent and total disability at the 100% rate, OR the VA certificate of pecuniary assistance for specially adapted housing (SAH or SHA), OR the VA letter rating the veteran individually unemployable. A county veterans office letter is NOT sufficient (Bulletin 19 of 2023)",
   "For a newly purchased home: closing statement or other purchase documents, so the first-year proration follows the closing tax split (otherwise prorated by days owned/365)",
   "Parcel ID, local unit (city/township/village), county, school district, date acquired",
   "Surviving spouse: proof the veteran was eligible immediately before death; must hold title solely for after-acquired homesteads"
  ],
  "survivingSpouse": "Unremarried surviving spouse of a veteran who was eligible immediately before death keeps the exemption 'as long as the surviving spouse does not remarry', and it 'applies to any property used and owned as a homestead by the surviving spouse, including homestead property acquired after the decedent's death' (MCL 211.7b(1)(b), 2023 PA 150). Same Form 5107.",
  "appeal": "A written denial by the assessor (Form 6055) may be appealed by petition to the Michigan Tax Tribunal (residential and small claims division) within 35 days of the denial notice; a July or December Board of Review decision is likewise appealable to the Tax Tribunal within 35 days (MCL 211.7c; Bulletin 19 of 2023). Tax Tribunal: https://www.michigan.gov/taxtrib",
  "statute": "MCL 211.7b (exemption; 2013 PA 161 as amended by 2023 PA 150); MCL 211.7c (continuation without reapplication, rescission, audit, denial and appeal; 2023 PA 151); MCL 211.53b (qualified error at July/December Board of Review; 2023 PA 152); MCL 206.520 et seq. (Homestead Property Tax Credit)",
  "sourceUrls": [
   {
    "url": "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-211-7b",
    "title": "MCL 211.7b Disabled veteran homestead exemption (Michigan Legislature)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-211-7c",
    "title": "MCL 211.7c Continuation, rescission, audit, denial and appeal (Michigan Legislature)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.michigan.gov/treasury/local/stc/ppe/detail/disabled-veterans-exemption-information",
    "title": "Michigan State Tax Commission: Disabled Veterans Exemption Information",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.michigan.gov/treasury/-/media/Project/Websites/treasury/Forms/Local-Government/PSD/STC/5107.pdf",
    "title": "Form 5107, STC Affidavit for Disabled Veterans Exemption (Rev. 03-26)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.michigan.gov/treasury/-/media/Project/Websites/treasury/STC/Bulletins/2023/Bulletin-19-of-2023---Disabled-Veterans-Exemption-Final.pdf?rev=722758eebaa241abb2c5bfb181008e73&hash=44EF03445E4220EC498AD0BF9CAC2DE5",
    "title": "STC Bulletin 19 of 2023, Disabled Veterans Exemption (Nov 14, 2023)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.michigan.gov/treasury/-/media/Project/Websites/treasury/STC/2026/Memo-2---Regarding-Form-5107-STC-Affidavit-for-DVE.pdf?rev=b86d50a255f6437a9ec50430dce9ad0a&hash=91BB56052CAE1B46763AA09F915A8224",
    "title": "STC Memo, Form 5107 Updates and Proration Examples (April 7, 2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.michigan.gov/treasury/-/media/Project/Websites/treasury/STC/2023/Disabled-Veterans-Exemption-FAQ-w-samples---Revised-1424.pdf?rev=91f5746aab58418d9293a4f69991c4e3&hash=E2623BD754877CEA7C284D505098DFC1",
    "title": "STC Disabled Veterans Exemption FAQ (updated Feb 15, 2024)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.michigan.gov/taxes/iit/tax-guidance/credits-exemptions/hptc",
    "title": "Michigan Treasury: Homestead Property Tax Credit Information",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.michigan.gov/taxtrib",
    "title": "Michigan Tax Tribunal",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   "The 'Disabled Veteran Exemption' summary says '100% rating'; the statute requires 'permanently and totally disabled ... entitled to veterans' benefits at the 100% rate' (P&T), or IU, or SAH assistance. A 100% schedular rating that is not P&T is not listed in MCL 211.7b(4)(a), so `ptRequired` should arguably be true with IU/SAH as alternates.",
   "Homestead Property Tax Credit `details` still says 'up to $1,800'; summary says $1,900 (TY2025). Align the strings."
  ],
  "notes": "The Form 5107 link was verified both with and without the ?rev= query string (both 200); the clean URL is used in `forms`. The FAQ PDF and Forms 6054/6055 were verified 200 but not opened. The homestead-credit (MI-1040CR-2) PDF URL was not pinned because michigan.gov form URLs change yearly; the hptc landing page is the stable entry point. Michigan residency is required for the exemption (MCL 211.7b(4)(a))."
 },
 "MN": {
  "state": "MN",
  "officeType": "county assessor",
  "officeTypeNote": "Apply to the county assessor's office for the county where the home is located (a few cities, e.g. Minneapolis, run their own assessor's office). The property must already be classified as homestead, which is also handled by the assessor. The Department of Revenue administers the program statewide but does not take applications. The county veterans service officer (CVSO) supplies the VA rating documentation and must certify each recipient's rating and address to the assessor by July 1 each year.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": "Minnesota Department of Revenue: Market Value Exclusion for Veterans with a Disability",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.revenue.state.mn.us/market-value-exclusion-veterans-disability",
   "note": "The DOR program page's 'county assessor' link points only to the generic mn.gov county portal (https://mn.gov/portal/government/local/counties/), and DOR publishes no assessor contact directory (its 'Assessors Licensed' PDFs list names and license levels by county, not contacts). Direct the user to '<county> assessor' on the county website; DOR Property Tax Division 651-556-6922."
  },
  "forms": [
   {
    "programRef": "Disabled Veterans Homestead",
    "name": "Homestead Exclusion for a Veteran with a Disability (Minnesota DOR form distributed through county assessors; older county copies are split into CR-DVHE70 and CR-DVHE100)",
    "number": "CR-HEV",
    "url": null,
    "revision": null,
    "filedWith": "county assessor"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "12-31",
   "text": "Minn. Stat. 273.13, subd. 34(h): 'a property owner must apply to the assessor by December 31 of the first assessment year for which the exclusion is sought.' DOR: apply 'by December 31 to qualify for taxes payable the following year.' Own and occupy as homestead by December 31."
  },
  "effective": "Applies to the assessment year in which the application is filed (by Dec 31), reducing taxes payable the FOLLOWING year. Manufactured homes assessed and taxed in the same year should apply as early as possible. The veteran must be honorably discharged and must own and occupy the home as a homestead by December 31 of the assessment year.",
  "lateFiling": "An application received after December 31 is treated as an application for the next assessment year; the statute gives the assessor no authority to accept a late application for the year that has closed, and there is no refund mechanism for a missed year.",
  "retroactivity": {
   "type": "none",
   "years": 0,
   "text": "No look-back. The exclusion starts with the assessment year in which the application is filed (taxes payable the next year); prior years cannot be reopened. Surviving spouses of service members who died in active service have a 2-year window after the death to file a first-time application (subd. 34(i))."
  },
  "renewal": {
   "type": "on-change",
   "text": "The statute requires one application 'by December 31 of the first assessment year' and then notice to the assessor of any change in ownership or homestead use (subd. 34(h)); the CVSO re-certifies each recipient's rating and address to the assessor by July 1 annually (subd. 34(m)). In practice several counties still ask 70-99% (non-permanent) veterans to reapply each year because their rating is subject to VA re-examination, so check the county's instructions."
  },
  "ratingChange": "Report any VA rating change to the county assessor and CVSO. The CVSO's annual July 1 certification of each recipient's rating is how the county catches changes. A veteran who moves from 70-99% to 100% permanent and total should file a new CR-HEV so the exclusion increases from $150,000 to $300,000 for the next assessment year; a veteran who drops below 70% loses the exclusion.",
  "move": "The exclusion does not follow the veteran automatically. The owner must notify the assessor of the change in ownership/homestead use, then apply (homestead first, then CR-HEV) with the assessor for the new county/home by December 31 of the first assessment year there. A surviving spouse may carry the exclusion to ONE replacement home if they apply by Dec 31, hold title and live there, the new home's EMV is no higher than the old home's EMV at sale, and they have not used this portability before (subd. 34(n)). DOR: contact the assessor before moving.",
  "onlineFiling": {
   "available": null,
   "text": "Varies by county. The form is a paper/PDF application returned to the county assessor; some counties accept it by email or through their homestead portals."
  },
  "documents": [
   "Homestead Exclusion for a Veteran with a Disability application (CR-HEV), signed by all owners (married joint owners both sign)",
   "DD-214 or other official military discharge papers showing an honorable discharge (subd. 34(a))",
   "U.S. Department of Veterans Affairs documentation certifying the service-connected disability rating: 70% or more, or 100% total and permanent (obtain through the county veterans service officer)",
   "Property must already have homestead classification (file the homestead application first if not)",
   "Surviving spouse: DIC verification or benefit letters; for an active-duty death, DD-1300 or DD-2064 plus proof of the date of death",
   "Primary family caregiver: VA certification under the Program of Comprehensive Assistance for Family Caregivers plus the veteran's discharge and rating documents"
  ],
  "survivingSpouse": "If a 100% P&T veteran dies, the $300,000 exclusion carries over to the spouse who holds title and permanently resides there 'until such time as the spouse remarries, or sells, transfers, or otherwise disposes of the property' (subd. 34(c)); the spouse must apply and report changes in marital status, ownership or residence. A spouse whose veteran never applied (or died before the exclusion existed) can file a first-time application if the VA certifies the veteran was 100% P&T or the spouse receives DIC (subd. 34(k)). Spouses of service members who died from a service-connected cause get the $300,000 tier (subd. 34(d)) but must file within 2 years of the death (subd. 34(i)). One-time portability to a replacement home under subd. 34(n). The 70-99% tier does not carry over to a spouse.",
  "appeal": null,
  "statute": "Minn. Stat. § 273.13, subd. 34",
  "sourceUrls": [
   {
    "url": "https://www.revisor.mn.gov/statutes/cite/273.13",
    "title": "Minn. Stat. 273.13 Classification of property (subd. 34, homestead of veteran with a disability)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.state.mn.us/market-value-exclusion-veterans-disability",
    "title": "MN Department of Revenue: Market Value Exclusion for Veterans with a Disability",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.state.mn.us/homestead-classification",
    "title": "MN Department of Revenue: Homestead Classification (prerequisite)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.state.mn.us/property-tax-programs",
    "title": "MN Department of Revenue: Property Tax Programs",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   "The 'Disabled Veterans Homestead MVE — 100% P&T tier' row says 'Extends to surviving spouse w/ DIC and primary family caregiver'; per subd. 34(c)-(d) and (k) the spouse carry-over is tied to the veteran's 100% P&T status (or DIC), and the surviving-spouse continuation is until remarriage or sale, not a fixed number of years.",
   "The $150,000 tier row says 'own/occupy by Dec 31' (correct) and should also note the application deadline is Dec 31 of the FIRST assessment year, with taxes payable the following year."
  ],
  "notes": "The CR-HEV form is a Department of Revenue form (title 'Homestead Exclusion for a Veteran with a Disability') but DOR does not host it on revenue.state.mn.us; every copy found is on a county or city site (Minneapolis Rev. 7/21, Rice County Rev. 7/23), so `forms[].url` is null rather than linking a county copy. Older county copies (CR-DVHE70 / CR-DVHE100) still show a July 1 deadline from the pre-2016 law; the current statute is December 31. The statute does not spell out an appeal route for a denied exclusion; `appeal` left null."
 },
 "MO": {
  "state": "MO",
  "officeType": "county assessor (POW homestead exemption); Missouri Department of Revenue (MO-PTC property tax credit)",
  "officeTypeNote": "Missouri has two unrelated filings. (1) The former-POW 100% service-connected homestead EXEMPTION (Mo. Const. art. X, §6) is claimed with the COUNTY ASSESSOR (St. Louis City Assessor inside the city), on whatever form that assessor uses; the State Tax Commission oversees assessors but takes no applications. (2) The Property Tax CREDIT for 100% service-connected disabled veterans (RSMo 135.010-135.030) is an income-tax-type claim filed with the Department of Revenue on Form MO-PTC (or MO-PTS attached to the MO-1040), not with the county.",
  "officeLocator": {
   "tier": 1,
   "url": "https://stc.mo.gov/directories/",
   "label": "Missouri State Tax Commission: Directories (Assessors PDF/XLS, County Clerks, County Collectors)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://dor.mo.gov/taxation/individual/tax-types/property-tax-credit/",
   "note": "The STC directory is a downloadable statewide list of all 114 county assessors plus St. Louis City (current file: https://stc.mo.gov/wp-content/uploads/sites/5/2026/10/Assessors.pdf, dated Oct 2026; the file path changes with each update, so link the Directories page). DOR's Property Tax Credit page links the same STC directories page as 'County Assessor's Office'. For the MO-PTC credit the filing office is DOR: P.O. Box 2800, Jefferson City, MO 65105-2800 (address printed on the form)."
  },
  "forms": [
   {
    "programRef": "Property Tax Exemption for Total SC Disabled POWs",
    "name": "Application for Disabled POW Property Tax Exemption (county-designed form; no statewide STC form)",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "county assessor of the county where the homestead is located"
   },
   {
    "programRef": "Property Tax Credit for 100% Disabled Veterans",
    "name": "2025 Property Tax Credit Claim (fillable, calculating)",
    "number": "Form MO-PTC",
    "url": "https://dor.mo.gov/forms/MO-PTC%20Fillable%20Calculating_2025.pdf",
    "revision": "2025 tax year",
    "filedWith": "Missouri Department of Revenue, P.O. Box 2800, Jefferson City, MO 65105-2800 (or e-file through approved software)"
   },
   {
    "programRef": "Property Tax Credit for 100% Disabled Veterans",
    "name": "2025 Form MO-PTC Instructions (Property Tax Credit Claim booklet)",
    "number": "MO-PTC Instructions",
    "url": "https://dor.mo.gov/forms/MO-PTC%20Instructions_2025.pdf",
    "revision": "2025 tax year",
    "filedWith": "n/a (instructions)"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-15",
   "text": "MO-PTC credit: 'The 2025 Form MO-PTC is due April 15, 2026, but you may file up to three years from the due date and still receive your credit.' POW exemption: no statutory deadline is published by the STC; file with the assessor, and county practice ties the exemption to the January 1 assessment date for the tax year."
  },
  "effective": "MO-PTC: a refundable credit (up to $1,100 owner / $750 renter) for real estate taxes PAID in the claim year, paid by check or deposit after DOR processes the claim; income cap $30,000 single / $34,000 married (VA payments excluded from household income for 100% SC veterans). POW exemption: removes the homestead from the tax roll from the assessment year the assessor approves it; the STC says the constitutional exemption 'took effect thirty days after the election' (Dec 2010) without implementing legislation.",
  "lateFiling": "MO-PTC: late claims are accepted 'up to three years from the due date' (e.g., the 2025 claim can be filed until April 15, 2029). POW exemption: no late-filing rule published; the STC and county pages describe it as a one-time application that continues while the veteran owns and occupies the home.",
  "retroactivity": {
   "type": "fixed",
   "years": 3,
   "text": "MO-PTC only: a missed year can be claimed on that year's Form MO-PTC within 3 years of its original April 15 due date (2025 instructions: 'you may file up to three years from the due date and still receive your credit'). No refund mechanism is published for prior-year taxes under the POW exemption."
  },
  "renewal": {
   "type": "annual",
   "text": "MO-PTC is an annual claim filed each spring for the prior year's taxes paid (attach the paid real estate tax receipt(s) and the VA letter every year). The POW homestead exemption, once granted by the assessor, continues as long as the veteran owns and occupies the home (STC/county guidance); no annual re-file is described."
  },
  "ratingChange": "MO-PTC qualification box B requires the veteran to be '100% Disabled Veteran as a result of military service (Attach letter from Department of Veterans Affairs)'. A veteran rated below 100% may still qualify under another box (65+, 100% SSA-disabled, surviving spouse 60+), but must then count VA payments as household income; a 100% SC veteran excludes VA benefits from income. The POW exemption requires a 'total service-connected disability' letter; a reduction below total disability ends eligibility and the assessor should be notified.",
  "move": "MO-PTC: no transfer needed; each year's claim covers the home(s) occupied that year (attach receipts; if the home was bought or sold during the year, attach the closing statement showing the tax proration, per the instructions). POW exemption: apply anew with the assessor of the new county; the exemption attaches to the homestead the veteran owns and occupies as a primary residence.",
  "onlineFiling": {
   "available": true,
   "text": "MO-PTC can be filed electronically through DOR-approved tax software (the credit also rides on the MO-1040 as Form MO-PTS); the fillable-calculating PDF is otherwise mailed. The POW exemption is filed on paper with the county assessor (some counties accept email)."
  },
  "documents": [
   "MO-PTC: letter from the U.S. Department of Veterans Affairs stating the veteran is 100% disabled as a result of military service (instructions: 'A letter from the Veterans Administration ... the disability is 100 percent from military service must be attached'); VA at (800) 827-1000",
   "MO-PTC: copy of the paid 2025 real estate tax receipt(s) (Form 948 Assessor Certification if the home is on more than 5 acres or is a mobile home); Form 5674 Verification of Rent Paid for renters",
   "MO-PTC: Forms SSA-1099 / RRB-1099 / W-2 / 1099 for all household income; Social Security number; address",
   "POW exemption (per STC): documents or a sworn statement showing the home is the applicant's primary residence; a letter from the U.S. Government or the VA confirming a service-connected total disability; DD-214 showing ex-POW status OR a letter from the National Personnel Records Center (NARA) or the VA confirming former POW status; county records must show the applicant owns the homestead"
  ],
  "survivingSpouse": "MO-PTC: a surviving spouse may qualify under box D (age 60+ receiving surviving spouse Social Security benefits) or the 65+/100%-disabled boxes, not under the veteran box. POW exemption: Art. X §6 speaks only of the former POW citizen; the STC FAQ does not extend it to a spouse, and St. Louis City's instructions say it does not pass to a surviving spouse.",
  "appeal": "MO-PTC: DOR denial or adjustment notice; appeal through DOR's protest/administrative hearing process (Administrative Hearing Commission) per the notice. POW exemption: an assessor's denial of exemption is appealed to the county Board of Equalization and then the State Tax Commission (STC 'File An Appeal'); STC phone 573-751-2414, stc@stc.mo.gov.",
  "statute": "Mo. Const. art. X, §6(1) (POW homestead exemption, adopted Nov. 2, 2010, HJR 15); RSMo 135.010-135.030 (Property Tax Credit; 135.010 defines 100% SC disabled veteran eligibility and household income)",
  "sourceUrls": [
   {
    "url": "https://revisor.mo.gov/main/OneSection.aspx?section=X%20%20%206&constit=y",
    "title": "Missouri Constitution art. X §6 (Revisor of Statutes)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://stc.mo.gov/faq/are-veterans-or-former-pows-exempt-from-property-tax-2/",
    "title": "Missouri State Tax Commission FAQ: Are Veterans or Former POWs Exempt from Property Tax?",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://stc.mo.gov/directories/",
    "title": "Missouri State Tax Commission Directories (Assessors, Clerks, Collectors)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://stc.mo.gov/wp-content/uploads/sites/5/2026/10/Assessors.pdf",
    "title": "STC Assessor Directory PDF (Oct 2026 file)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.mo.gov/taxation/individual/tax-types/property-tax-credit/",
    "title": "Missouri DOR: Property Tax Credit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.mo.gov/forms/MO-PTC%20Instructions_2025.pdf",
    "title": "2025 Form MO-PTC Instructions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.mo.gov/forms/MO-PTC%20Fillable%20Calculating_2025.pdf",
    "title": "2025 Form MO-PTC (fillable, calculating)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.mo.gov/forms/PTC%20Qualification%20Chart.pdf",
    "title": "Missouri DOR Property Tax Credit Qualification Chart",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revisor.mo.gov/main/OneSection.aspx?section=135.010",
    "title": "RSMo 135.010 (Property tax credit definitions, 100% SC disabled veteran)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revisor.mo.gov/main/OneSection.aspx?section=135.030",
    "title": "RSMo 135.030 (Property tax credit amounts and income limits)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   "The POW row cites no statute; the authority is Mo. Const. art. X, §6(1) (2010), not RSMo 137.100 (which has no POW subdivision per the current Revisor text). Add the citation.",
   "A 2025-26 bill (HB 1430 summary) proposed removing the MO-PTC income cap for 100% disabled veterans from Jan 1, 2026; not confirmed enacted and the 2025 instructions still show $30,000/$34,000. Re-check when the 2026 MO-PTC instructions post (early 2027)."
  ],
  "notes": "The POW exemption has no statewide form: each county assessor (e.g., Jackson, Boone, Phelps, St. Louis City) posts its own application, so `forms[].url` is null for that program and `appeal`/`move` for it rely on STC guidance plus county practice. The MO-PTC PDF URLs change annually (the 2025 files are current until the 2026 forms post in Jan 2027); the DOR Property Tax Credit page is the stable entry point. Form MO-PTC fillable PDF was verified 200 but not opened; the instructions booklet was read."
 },
 "MS": {
  "state": "MS",
  "officeType": "county tax assessor",
  "officeTypeNote": "The disabled-veteran benefit is a TIER of Mississippi's homestead exemption, so it is claimed on the regular homestead exemption application filed in person at the county Tax Assessor's office (in the 23 counties with a combined office, the Tax Assessor/Collector). The county Board of Supervisors allows or disallows applications; the Department of Revenue audits and reimburses the counties. DOR does not take applications.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": "Mississippi Department of Revenue: Homestead Exemption (County Services)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.dor.ms.gov/county-services/homestead-exemption",
   "note": "DOR publishes no county assessor directory on dor.ms.gov. Direct the user to '<county> Tax Assessor' on the county website. DOR Property Tax (County Services) contact page: https://www.dor.ms.gov/contact-us/property-tax."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Application for Homestead Exemption (multi-copy DOR form completed and signed at the county Tax Assessor's office; not distributed online)",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "county Tax Assessor (in person, January 1 to April 1)"
   },
   {
    "programRef": "*",
    "name": "Veteran's Consent of Release (DOR form used as proof of service-connected total disability under 35 Miss. Admin. Code Pt. VI, R. 3.03)",
    "number": "Form 72-042",
    "url": null,
    "revision": null,
    "filedWith": "county Tax Assessor, with the homestead application"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-01",
   "text": "DOR: 'Homestead Exemption Applications are only accepted in the county Tax Assessor's office during normal business hours between January 1 and April 1 of each year.' Rule 35.VI.3.03: 'The applicant who does not file his application during this period forfeits all his homestead exemption rights for that year.' Eligibility is determined as of January 1."
  },
  "effective": "Applies to the current year's taxes (billed in December) if the veteran owned and occupied the home on January 1 of that year, with the deed recorded with the Chancery Clerk before January 7, and the application filed January 1 to April 1. A veteran who buys or becomes 100% rated after January 1 waits for the next filing window.",
  "lateFiling": "Not permitted. Rule 35.VI.3.03(5): the Tax Assessor 'shall accept all applications from January 1 through April 1, both dates inclusive. The applicant who does not file his application during this period forfeits all his homestead exemption rights for that year.' An amended application is allowed after April 1 only to correct errors in a timely application.",
  "retroactivity": {
   "type": "none",
   "years": 0,
   "text": "No refunds for prior years; a missed filing window forfeits that year's exemption (35 Miss. Admin. Code Pt. VI, R. 3.03). An existing allowed application rolls forward automatically, so there is no annual re-file to miss unless status changes."
  },
  "renewal": {
   "type": "on-change",
   "text": "DOR: 'Once an applicant has a valid, allowed homestead application on file, the applicant is credited with that exemption each year without the need to refile unless' there is a change in property description, ownership, use or occupancy since January 1 of the preceding year, or the applicant qualifies under a different tier. A newly-established 100% rating is a tier change: re-file between Jan 1 and April 1 to move to the total exemption. Marriage, divorce, death, deed changes and VA benefit eligibility changes all trigger a new application."
  },
  "ratingChange": "A veteran already on homestead (Tier 1 or Tier 2) who is newly rated service-connected totally disabled must file a NEW application between January 1 and April 1 with VA proof to move to Tier 3 (total exemption). Partial ratings do not qualify for the veteran tier (the DOR tier requires 'service-connected, total disability'); a veteran whose rating is reduced must re-file, and 'change of eligibility status for ... Veterans Affairs benefits' is listed by DOR as a trigger to reapply. Failure to re-file after a status change is a listed ground for disallowance and repayment.",
  "move": "A change in ownership or the homestead itself requires a new application at the Tax Assessor's office for the new county/home during the January 1 to April 1 window, with ownership established before January 1 and the deed filed with the Chancery Clerk before January 7 of the year sought. Only one homestead may be claimed; claiming on more than one property is a disallowance ground.",
  "onlineFiling": {
   "available": false,
   "text": "DOR: applications 'are only accepted in the county Tax Assessor's office during normal business hours'; the applicant signs an affidavit in person. No state or county online filing."
  },
  "documents": [
   "Proof of service-connected TOTAL disability of an honorably discharged veteran: Veteran's Consent of Release (Form 72-042) or a U.S. Department of Veterans Affairs letter stating 100% service-connected total disability (DOR rule lists Form 72-042; counties commonly accept the VA benefits letter)",
   "DD-214 or other proof of honorable discharge (required for the veteran tiers; counties ask for it)",
   "Social Security numbers, dates of birth, phone and email for all applicants (ITIN only if no SSN)",
   "Physical address of the property (no P.O. box); recorded warranty deed or other ownership instrument filed with the Chancery Clerk before January 7",
   "Total purchase price, down payment, HUD closing statement or other transaction documents",
   "Current Mississippi tag numbers of all vehicles owned or in the applicant's possession (including company vehicles)",
   "Applicant and spouse must be in compliance with Mississippi income tax and road and bridge privilege (vehicle tag) tax laws",
   "Unremarried surviving spouse: proof of the veteran's eligibility and death"
  ],
  "survivingSpouse": "Unremarried surviving spouses of veterans with a service-connected total disability receive the same total exemption (Tier 3), as do unremarried surviving spouses of service members killed or who died on active duty (or reserve/Guard members on active duty for training). From January 1, 2026 the rule also extends the total-disability and age-90 veteran tiers to unremarried surviving spouses. A surviving spouse who remains eligible generally does not need a new application, but any ownership/occupancy change requires re-filing.",
  "appeal": "The county Board of Supervisors allows or disallows all applications by its August meeting and must give written notice by mail to disallowed applicants; the Board may also disallow on DOR's instruction and must notify the applicant. Correction of errors: a new application before April 1, an amended application after April 1, and no corrections after the Board's final action (35 Miss. Admin. Code Pt. VI, R. 3.09). Further appeal is to the Board of Supervisors / circuit court under general ad valorem procedures; not detailed in the DOR rule.",
  "statute": "Miss. Code Ann. §§ 27-33-31 (application, Jan 1 to Apr 1), 27-33-67(2) (total exemption for service-connected totally disabled veterans and unremarried surviving spouses), 27-33-75 (additional exemption); 35 Miss. Admin. Code Pt. VI, Subpart 3 (Homestead Exemption rules)",
  "sourceUrls": [
   {
    "url": "https://www.dor.ms.gov/county-services/homestead-exemption",
    "title": "Mississippi DOR: Homestead Exemption (filing window, documents, tiers, renewal triggers)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.sos.ms.gov/adminsearch/ACCode/00000161c.pdf",
    "title": "35 Miss. Admin. Code Part VI, Property (Subpart 3, Homestead Exemption rules), via MS Secretary of State",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dor.ms.gov/forms-resources/mississippi-tax-laws-rules-and-regulations",
    "title": "Mississippi DOR: Laws, Rules and Regulations (links the Title 35 Part VI PDF)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dor.ms.gov/county-services/property-tax-exemptions",
    "title": "Mississippi DOR: Property Tax Exemptions (Board of Supervisors determines eligibility)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dor.ms.gov/contact-us/property-tax",
    "title": "Mississippi DOR: Property Tax (County Services) contact",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   "The program row is named 'Homestead Exemption' with ratingRequired 100; DOR's rule language is 'service-connected, total disability', which an April 2025 AG opinion reads as total disability documentation plus honorable discharge (no unemployability test). Consider renaming the row 'Homestead Exemption — Total (service-connected totally disabled veteran)' and noting the 90+-year-old veteran total exemption and the active-duty-death surviving spouse tier that share the same filing."
  ],
  "notes": "The Mississippi Code text (27-33-31, -67, -75) could not be opened from a primary source: the Legislature publishes the Code through LexisNexis and law.justia.com returns 403 to automated requests, so statute cites rest on the DOR page and the DOR rule (which cites them). The homestead application itself is a multi-copy DOR form (original, duplicate, triplicate, quadruplicate) executed at the assessor's counter and is not posted online; Form 72-049 found in searches is 'Election to File One Homestead' (heirs), NOT the application. Form 72-042 'Veteran's Consent of Release' is named in Rule 3.03 as acceptable proof but no DOR-hosted PDF was found."
 },
 "MT": {
  "state": "MT",
  "officeType": "Montana Department of Revenue field office (state-run; counties do not take the application)",
  "officeTypeNote": "Property assessment in Montana is a STATE function. Form MDV goes to the Department of Revenue's local field office for the county (or is filed electronically with DOR), not to the county treasurer or a county assessor. The county treasurer only bills the reduced tax.",
  "officeLocator": {
   "tier": 1,
   "url": "https://revenue.mt.gov/contact/field-office-locations/",
   "label": "Montana Department of Revenue: Field Office Locations (by county, with email, phone, hours, address)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://revenue.mt.gov/property/property-tax-help/mdv",
   "note": "Single page listing every county with the field office that serves it (e.g., Beaverhead County: Butte Field Office, DORPADButte@mt.gov, 406-691-7111). No per-county URLs. DOR call center (406) 444-6900."
  },
  "forms": [
   {
    "programRef": "Montana Disabled Veteran Assistance Program (MDV)",
    "name": "Montana Disabled Veteran Property Tax Relief Application for Tax Year 2027",
    "number": "Form MDV",
    "url": "https://revenue.mt.gov/files/Forms/Montana_Disabled_Veteran_Property_Tax_Relief_Application_Form_MDV.pdf",
    "revision": "V1 9/2026 (Tax Year 2027)",
    "filedWith": "local Department of Revenue field office (postmarked or hand-delivered by April 15), or filed electronically"
   },
   {
    "programRef": "Montana Disabled Veteran Assistance Program (MDV)",
    "name": "Electronic Montana Disabled Veteran Property Tax Relief Application (DOR SmartFile)",
    "number": "MDV (electronic)",
    "url": "https://montanadorefile.tylerhost.net/MontanaDORsmartfile/Filing/FilingType/Info/MT_DOR_PROD_MDV",
    "revision": null,
    "filedWith": "Montana Department of Revenue (online)"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-15",
   "text": "Form MDV: 'Your application must be postmarked or hand delivered by April 15.' DOR: 'Apply by April 15. If you miss the deadline, we will consider your application for the following year.' (In 2024 DOR extended the deadline to June 1 for hardship cases; that was a one-time extension.)"
  },
  "effective": "Applies to the tax year for which the April 15 application is filed (the current Form MDV is for Tax Year 2027, using 2025 federal AGI). The reduced rate (100%, 80%, 70% or 50% of the normal residential tax rate, by income tier) is applied to the primary residence (home + one-acre homesite on agricultural/forest land) for that year's bills.",
  "lateFiling": "Not accepted for the current year: 'If you miss the deadline, apply as soon as possible to ensure you are included in the program's verification process for the following tax year.'",
  "retroactivity": {
   "type": "none",
   "years": 0,
   "text": "No refunds for prior tax years; a late application is simply rolled to the following tax year (Form MDV Part II; DOR MDV page)."
  },
  "renewal": {
   "type": "none",
   "text": "One application. Form MDV: 'Once you have applied for the program, we will notify you each year whether you qualify. You will be included in the program's annual income verification as long as you own the home and it is your primary residence.' 'You only need to report your income one time.' DOR re-verifies income each year and mails a status letter; a temporary VA rating triggers periodic requests for an updated VA letter."
  },
  "ratingChange": "Eligibility requires a VA letter 'verifying that you are currently rated or paid at the 100% disabled rate for a service-connected disability' (so TDIU paid at the 100% rate qualifies). 'If your disability rating is temporary, we will periodically ask you to provide an updated verification letter from the VA.' A veteran whose rating drops below the 100% rate no longer qualifies; notify the field office. (A 2025 bill, SB 274, proposed extending MDV to 60-90% ratings; not confirmed enacted.)",
  "move": "The benefit attaches to the primary residence you own (or are buying under contract for deed) and occupy at least 7 months of the year. A new home requires a new Form MDV with the field office for the new county by April 15; the annual verification continues only 'as long as you own the home and it is your primary residence.'",
  "onlineFiling": {
   "available": true,
   "text": "DOR offers an electronic Montana Disabled Veteran Property Tax Relief Application through its SmartFile portal, or the paper Form MDV returned to the local field office."
  },
  "documents": [
   "Form MDV signed by the owner (and spouse); SSN and date of birth for applicant and spouse",
   "Letter from the U.S. Department of Veterans Affairs showing the veteran is currently rated or paid at the 100% disabled rate for a service-connected disability (the VA will not send it to DOR directly)",
   "Income: nothing extra if you filed a 2025 Montana income tax return; otherwise a copy of the 2025 federal return (new residents) or Social Security statement / other income documentation if income is only Social Security, VA benefits, or other nontaxable sources",
   "Mobile/manufactured home: geocode of the land if you own it",
   "Unmarried surviving spouse: VA letter verifying the deceased spouse was rated or paid at the 100% disabled rate at death, died on active duty, or died of a service-connected disability"
  ],
  "survivingSpouse": "Unmarried surviving spouses of veterans who were rated or paid at the 100% disabled rate at death (or who died on active duty or from a service-connected disability) qualify under their own income table (TY2027: 100% reduction up to $41,379 FAGI, 50% up to $56,276) and sign Part V of Form MDV; they must remain unmarried.",
  "appeal": null,
  "statute": "MCA 15-6-302, 15-6-311 (MDV reduced tax rate), 15-6-312; ARM 42.19.401, 42.19.402",
  "sourceUrls": [
   {
    "url": "https://revenue.mt.gov/property/property-tax-help/mdv",
    "title": "Montana DOR: Montana Disabled Veteran Assistance Program (MDV), Tax Year 2027 tables and how to apply",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.mt.gov/files/Forms/Montana_Disabled_Veteran_Property_Tax_Relief_Application_Form_MDV.pdf",
    "title": "Form MDV, Montana Disabled Veteran Property Tax Relief Application for Tax Year 2027 (V1 9/2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.mt.gov/contact/field-office-locations/",
    "title": "Montana DOR Field Office Locations",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://montanadorefile.tylerhost.net/MontanaDORsmartfile/Filing/FilingType/Info/MT_DOR_PROD_MDV",
    "title": "Electronic Montana Disabled Veteran Property Tax Relief Application (DOR SmartFile)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://archive.legmt.gov/bills/mca/title_0150/chapter_0060/part_0030/section_0110/0150-0060-0030-0110.html",
    "title": "MCA 15-6-311 (Montana Legislature, redirects to mca.legmt.gov)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://archive.legmt.gov/bills/mca/title_0150/chapter_0060/part_0030/section_0020/0150-0060-0030-0020.html",
    "title": "MCA 15-6-302 (Montana Legislature, redirects to mca.legmt.gov)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   "Income ceilings are now one year newer than the dollar row: for Tax Year 2027 (applications due April 15, 2027, using 2025 FAGI) DOR lists single $64,551 / married-HoH $74,482 / surviving spouse $56,276, with the 100% tier at single $49,654 / MFJ-HoH $59,584 / spouse $41,379, 80% to $54,620/$64,551/$46,344, 70% to $59,584/$69,515/$51,310. The row's TY2026 figures ($62,598/$72,229/$54,573) are the prior year.",
   "The row says '100% SC rating required'; the form's test is 'currently rated OR PAID at the 100% disabled rate', so TDIU qualifies in Montana.",
   "The 'Veterans Clubhouse' and 'Incompetent Veteran Trust' rows are organizational/guardian exemptions with no veteran-homeowner filing; they are out of scope for the filing layer."
  ],
  "notes": "The electronic-application URL returns 405 to HEAD and 200 to GET. MCA statute links resolve via archive.legmt.gov to mca.legmt.gov (200) but the statute text was not read; program rules were taken from the DOR form and page. The statute does not describe an appeal route and DOR's page is silent, so `appeal` is null (DOR's general informal review process would apply)."
 },
 "NC": {
  "state": "NC",
  "officeType": "county tax assessor",
  "officeTypeNote": "Two-step: (1) take Form NCDVA-9 to a State Veterans Service Center or County Veterans Service Office, where a Veterans Service Officer / NC Dept of Military and Veterans Affairs certifies the disability (Section 4); (2) file the certified NCDVA-9 together with Form AV-9 with the county tax assessor where the home is located. AV-9 instructions: \"DO NOT submit this application to the North Carolina Department of Revenue.\"",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.ncdor.gov/taxes-forms/property-tax/north-carolina-county-assessors-list",
   "label": "NCDOR: North Carolina County Assessors List (address, phone, fax for all 100 counties; the URL printed on Form AV-9)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.ncdor.gov/taxes-forms/property-tax",
   "note": "Landing page links a dated PDF (current edition: https://www.ncdor.gov/assessors-list-7-20-26pdf/open, revised July 20, 2026). Veterans Service Offices that certify NCDVA-9: https://www.milvets.nc.gov/benefits-services/benefits-claims"
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Application for Property Tax Relief (Elderly or Disabled Exclusion, Disabled Veteran Exclusion, Circuit Breaker)",
    "number": "AV-9",
    "url": "https://www.ncdor.gov/2026-av-9-securedpdf/open",
    "revision": "Web 5-25 (tax year 2026); 2027 edition Web 6-26 at https://www.ncdor.gov/2027-av-9-securedpdf/open",
    "filedWith": "county tax assessor"
   },
   {
    "programRef": "*",
    "name": "Certification for Disabled Veteran's Property Tax Exclusion (G.S. 105-277.1C)",
    "number": "NCDVA-9",
    "url": "https://www.ncdor.gov/ncdva-9-and-instructions-rev-4-22pdf/open",
    "revision": "Rev. 4-22",
    "filedWith": "certified by a Veterans Service Officer (NCDMVA), then filed with the county tax assessor alongside AV-9"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "06-01",
   "text": "AV-9: \"This application must be filed by June 1st to be timely filed.\" G.S. 105-277.1C(f): the application \"should be filed during the regular listing period\" (January) but \"may be filed and must be accepted at any time up to and through June 1 preceding the tax year for which the exclusion is claimed.\" Eligibility is measured as of January 1."
  },
  "effective": "Applies to the tax year (fiscal year beginning July 1) following the June 1 deadline, for owners who were disabled, owned and occupied the residence as of January 1 of that year. Bills issued in August reflect the exclusion.",
  "lateFiling": "G.S. 105-282.1(a1): an application filed after the deadline \"may be approved\" by the board of equalization and review or board of county commissioners (or municipal governing body) \"upon a showing of good cause by the applicant for failure to make a timely application\"; approval \"applies only to property taxes levied by the county or municipality in the calendar year in which the untimely application is filed.\"",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No refund for prior years; a late application approved for good cause reaches only the taxes levied in the calendar year it is filed (G.S. 105-282.1(a1))."
  },
  "renewal": {
   "type": "none",
   "text": "G.S. 105-282.1(a)(2) lists 105-277.1C among single-application exclusions: \"Once the application has been approved, the owner does not need to file an application in subsequent years\" unless the property changes or the owner no longer qualifies. Counties may send periodic compliance-review forms."
  },
  "ratingChange": "Eligibility requires a VA certification of permanent and total service-connected disability (100% P&T), receipt of specially adapted housing benefits under 38 U.S.C. 2101, or a surviving-spouse basis, as of January 1. A veteran newly reaching P&T obtains a new NCDVA-9 certification and files AV-9 by June 1; a veteran who no longer qualifies must notify the assessor (G.S. 105-282.1 notice duty).",
  "move": "The exclusion applies to the permanent residence; after moving within NC, file a new AV-9 (with NCDVA-9 certification) with the new county's assessor by June 1 of the first year of ownership/occupancy as of January 1.",
  "onlineFiling": {
   "available": null,
   "text": "State forms are fillable PDFs filed with the county; some counties accept online or emailed submissions."
  },
  "documents": [
   "Form NCDVA-9 certified in Section 4 by NCDMVA / Veterans Service Officer (veteran brings the VA Annual Tax Abatement Letter or rating decision to the VSO; DD-214 character of service is checked on the form)",
   "Form AV-9 Part 3 completed and signed by each owner",
   "G.S. 105-277.1C(f): \"a copy of the veteran's disability certification or evidence of benefits received under 38 U.S.C. § 2101\"",
   "Surviving spouse: VA documentation that the veteran had a P&T service-connected disability at death, received 38 U.S.C. 2101 benefits, or died of a service-connected condition (NCDVA-9 Section 4 D/E)"
  ],
  "survivingSpouse": "Available to the surviving spouse who has not remarried of (1) a disabled veteran as defined, (2) a veteran who died as a result of a service-connected condition, or (3) a servicemember who died in the line of duty, with honorable or under-honorable-conditions character of service; same AV-9 + NCDVA-9 route (Section 3 and Section 4 D/E).",
  "appeal": "The assessor sends a notice of decision that \"will also explain the procedures to appeal\"; appeals go to the county Board of Equalization and Review (or board of county commissioners when the BOER has adjourned) and then to the NC Property Tax Commission.",
  "statute": "G.S. 105-277.1C (disabled veteran property tax homestead exclusion; $45,000 of appraised value); G.S. 105-282.1 (applications, late applications, single-application rule)",
  "sourceUrls": [
   {
    "url": "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_105/GS_105-277.1C.html",
    "title": "G.S. 105-277.1C Disabled veteran property tax homestead exclusion",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_105/GS_105-282.1.html",
    "title": "G.S. 105-282.1 Applications for property tax exemption or exclusion; late applications",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ncdor.gov/2026-av-9-securedpdf/open",
    "title": "Form AV-9 Application for Property Tax Relief, tax year 2026 (Web 5-25)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ncdor.gov/2027-av-9-securedpdf/open",
    "title": "Form AV-9 tax year 2027 (Web 6-26)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ncdor.gov/ncdva-9-and-instructions-rev-4-22pdf/open",
    "title": "Form NCDVA-9 and NCDMVA instructions (Rev. 4-22)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ncdor.gov/documents/files/ncdva-9-certification-disabled-veterans-property-tax-exclusion",
    "title": "NCDOR NCDVA-9 form landing page",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ncdor.gov/taxes-forms/property-tax/property-tax-forms",
    "title": "NCDOR Property Tax Forms (exemption and exclusion forms)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ncdor.gov/taxes-forms/property-tax/north-carolina-county-assessors-list",
    "title": "NCDOR North Carolina County Assessors List",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ncdor.gov/assessors-list-7-20-26pdf/open",
    "title": "NC County Assessors list PDF (rev. 7-20-26)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.milvets.nc.gov/benefits-services/benefits-claims",
    "title": "NCDMVA Benefits & Claims (State Veterans Service Centers and County VSO list)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "Disabled Vet Exemption.survivingSpouse",
    "issue": "Row shows false but details text, G.S. 105-277.1C(b) and AV-9 Part 3 all extend the exclusion to the un-remarried surviving spouse.",
    "source": "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_105/GS_105-277.1C.html"
   }
  ],
  "notes": "Current ncleg.gov text of 105-277.1C still reads $45,000 (session-law history ends 2010-96); 2025-26 bills to raise it (H118 $61,000, S128 $76,500, S143/H1122 full exemption) were found only as bill texts with no enacted version located, so the $45,000 dollar row stands. The 2027 AV-9 (Web 6-26) also shows $45,000. Appeal path beyond the assessor's notice of decision is summarized from G.S. 105-282.1 approving bodies, not from a dedicated NCDOR appeals page."
 },
 "ND": {
  "state": "ND",
  "officeType": "county auditor / county director of tax equalization (local assessor)",
  "officeTypeNote": "N.D.C.C. 57-02-08.8(3) and Form SFN 24770 say the first-time application is filed with the COUNTY AUDITOR; the Tax Commissioner's web page says to submit it to the local assessor or county director of tax equalization, who approves the application. In practice the city assessor (Fargo, Bismarck, Grand Forks, etc.) or county tax director processes it and forwards it; the county treasurer only collects. Either office will accept it.",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.tax.nd.gov/sites/www/files/documents/misc-discuss-folder/directors-of-tax-equalization-and-city-assessors.pdf",
   "label": "ND Office of State Tax Commissioner: Directors of Tax Equalization and City Assessors (name, email, phone, address for all 53 counties and assessing cities)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.tax.nd.gov/property-tax",
   "note": "Single PDF, no per-county pages."
  },
  "forms": [
   {
    "programRef": "Disabled Veterans Property Tax Credit",
    "name": "Application for Disabled Veterans Property Tax Credit",
    "number": "SFN 24770",
    "url": "https://www.tax.nd.gov/sites/www/files/documents/forms/property-tax/property-tax-general/application-for-disabled-veterans-property-tax-credit.pdf",
    "revision": "2026 edition (12-2025)",
    "filedWith": "county auditor (or local assessor / county director of tax equalization)"
   },
   {
    "programRef": "Paraplegic Veterans Property Tax Exemption",
    "name": "Application for Property Tax Exemption (check N.D.C.C. 57-02-08(20)(a): paraplegic disabled veteran or veteran awarded specially adapted housing)",
    "number": null,
    "url": "https://www.tax.nd.gov/sites/www/files/documents/forms/individual/property-tax/application-for-property-tax-exemption.pdf",
    "revision": null,
    "filedWith": "local assessor (form) / county auditor affidavit (guideline)"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-01",
   "text": "SFN 24770 (2026): \"This application must be filed with the county auditor by April 1 of the first year for which the credit is claimed.\" Tax Commissioner page: due April 1 of the year the property is assessed. Paraplegic exemption form: \"must be filed with the assessor every year by February 1 of the year for which the exemption is claimed.\" Eligibility (ownership, occupancy, 50%+ rating) is measured on the February 1 assessment date."
  },
  "effective": "Credit applies to the taxable valuation for the assessment year in which it is timely claimed (taxes payable the following year). \"The percentage rating on the assessment date applies for the whole year.\" Credit is portable: if the veteran moves mid-year it follows to the new homestead, prorated by months (guideline examples 18, 26).",
  "lateFiling": "No statutory late-filing window. The board of county commissioners \"may cancel the portion of unpaid taxes that represents the credit\" for any year the qualifying owner held title (57-02-08.8(7)), which is the only remedy for a missed year.",
  "retroactivity": {
   "type": "local-option",
   "years": null,
   "text": "57-02-08.8(7): county commissioners may cancel the credit portion of UNPAID taxes for any eligible year; discretionary, and applies to unpaid tax rather than refunds of tax already paid."
  },
  "renewal": {
   "type": "none",
   "text": "First-time claimants file the affidavit, DD-214 and VA certificate; thereafter the applicant \"shall furnish to the assessor or other assessment officials, when requested to do so, any information which supports the claim for credit for any subsequent year\" (57-02-08.8(3)). Tax Commissioner: \"Credit is automatically applied for those that qualify.\" A new VA certificate is required when the paid rate changes. Paraplegic exemption form states annual filing by February 1."
  },
  "ratingChange": "Form SFN 24770: provide a VA certificate of the rate paid \"when claiming credit for the first time, or if the veteran receives a change in the rate paid.\" The credit percentage equals the rating (or 100% for TDIU/extra-schedular paid at the 100% rate) in effect on the February 1 assessment date.",
  "move": "Guideline item 18: \"If a qualifying disabled veteran or surviving spouse moves to a different homestead, the credit is portable and may be applied to the person's new homestead\" (prorated between homesteads by month). File a new application for the new property with that county.",
  "onlineFiling": {
   "available": false,
   "text": "Fillable PDF filed with the county/city office; no state portal."
  },
  "documents": [
   "DD Form 214 showing honorable discharge (first-time claim; confidential under N.D.C.C. 37-18-11)",
   "VA certificate/letter certifying the service-connected disability rating or the rate at which the veteran is paid (first claim and on any change)",
   "Affidavit/application SFN 24770 describing the homestead and ownership type (deed, contract for deed, joint tenancy, life estate, revocable trust)",
   "Surviving spouse: VA correspondence showing receipt of Dependency and Indemnity Compensation (for the 100% credit) or the deceased veteran's rating",
   "Paraplegic exemption: VA evidence of specially adapted housing award, or physician's certification of paraplegia"
  ],
  "survivingSpouse": "Surviving spouse of a qualifying veteran receives the credit at the veteran's rating percentage; a spouse receiving VA DIC receives a 100% credit, and a posthumous DIC determination is presumed to precede the veteran's death (57-02-08.8(1)). Credit terminates at the end of the taxable year of the applicant's death. Paraplegic exemption: unremarried surviving spouse eligible.",
  "appeal": "A disapproved application (noted on the form by the assessor or director of tax equalization) is appealed through the local board of equalization (city/township in April, county board in June, State Board of Equalization in August) under N.D.C.C. ch. 57-12, or by abatement application to the county commissioners under ch. 57-23; not re-verified for this record.",
  "statute": "N.D.C.C. 57-02-08.8 (disabled veterans credit, first $9,000 of taxable valuation); N.D.C.C. 57-02-08(20)(a) (paraplegic / specially adapted housing exemption, first $120,000 of true and full valuation of buildings); N.D.C.C. 57-02-14.1 (certification); 37-18-11 (confidentiality)",
  "sourceUrls": [
   {
    "url": "https://www.tax.nd.gov/property-tax-exemptions-credits/property-tax-credits/disabled-veterans-property-tax-credit",
    "title": "ND Tax Commissioner: Disabled Veteran's Property Tax Credit (tax.nd.gov/veterans)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.nd.gov/sites/www/files/documents/forms/property-tax/property-tax-general/application-for-disabled-veterans-property-tax-credit.pdf",
    "title": "SFN 24770 Application for Disabled Veterans Property Tax Credit (2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.nd.gov/sites/www/files/documents/forms/property-tax/property-tax-general/guideline-property-tax-credit-for-disabled-veterans.pdf",
    "title": "Tax Commissioner Guideline: Property Tax Credit for Disabled Veterans",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://ndlegis.gov/cencode/t57c02.pdf",
    "title": "N.D.C.C. Title 57 Chapter 02 (57-02-08(20), 57-02-08.8)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.nd.gov/sites/www/files/documents/guidelines/property-tax/disabledvetsconfinedtowheelchair.pdf",
    "title": "Tax Commissioner Guideline: Exemption for Qualifying Veterans and Disabled Persons Confined to a Wheelchair (rev. 6-2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.nd.gov/sites/www/files/documents/forms/individual/property-tax/application-for-property-tax-exemption.pdf",
    "title": "Application for Property Tax Exemption (57-02-08 exemptions incl. paraplegic veterans)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.nd.gov/sites/www/files/documents/misc-discuss-folder/directors-of-tax-equalization-and-city-assessors.pdf",
    "title": "Directors of Tax Equalization and City Assessors directory",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.nd.gov/property-tax-exemptions-credits",
    "title": "ND Property Tax Exemptions and Credits index",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.nd.gov/property-tax",
    "title": "ND Property Tax main page",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "Paraplegic Veterans Property Tax Exemption.summary",
    "issue": "Statute 57-02-08(20)(a) exempts the first $120,000 of TRUE AND FULL valuation of fixtures, buildings and improvements only; land stays taxable (guideline items 2 and 9, max benefit $5,400 taxable value). The $120,000 figure in the row is right but it is a building-value cap, not a market-value shield including land.",
    "source": "https://www.tax.nd.gov/sites/www/files/documents/guidelines/property-tax/disabledvetsconfinedtowheelchair.pdf"
   }
  ],
  "notes": "Deadline conflict in state materials: the 2026 form and web page say April 1; older copies and some county pages say March 31. Filing office also differs (statute/form: county auditor; web page: assessor or director of tax equalization). Appeal paragraph is from general ND equalization procedure, not re-verified. Date 'every year by February 1' on the general exemption application may be aimed at institutional exemptions; the paraplegic guideline does not itself state an annual refiling requirement."
 },
 "NE": {
  "state": "NE",
  "officeType": "county assessor",
  "officeTypeNote": "Form 458 is filed with the county assessor of the county where the homestead is located; the assessor examines it and forwards approved applications to the Nebraska Tax Commissioner (Department of Revenue), who makes the final income/eligibility determination and reimburses the county. Do not send the form to the Department of Revenue.",
  "officeLocator": {
   "tier": 1,
   "url": "https://revenue.nebraska.gov/PAD/county-assessors-and-parcel-search",
   "label": "Nebraska DOR Property Assessment Division: County Assessors and Parcel Search (every county with assessor website and parcel-search links; complete address listing PDF/Excel)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://revenue.nebraska.gov/PAD/homestead-exemption",
   "note": "Per-county entries are anchors on one page (no separate URLs). Complete assessor address/phone list: https://revenue.nebraska.gov/sites/default/files/doc/pad/assessor/updated_assessor_phone_list.pdf. Homestead Helpline (888) 475-5101."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Nebraska Homestead Exemption Application (2026)",
    "number": "Form 458",
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/homestead/Form%20458%202026.pdf",
    "revision": "2026",
    "filedWith": "county assessor, after February 1 and on or before June 30"
   },
   {
    "programRef": "*",
    "name": "Physician's Certification for Late Homestead Exemption Filing (2026)",
    "number": "Form 458L",
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/homestead/Form%20458L%202026.pdf",
    "revision": "2026",
    "filedWith": "county assessor, with a late Form 458 (medical-condition late filing)"
   },
   {
    "programRef": "Wartime Veteran/Surviving Spouse Homestead Exemption",
    "name": "Certification of Disability for Homestead Exemption (2026) (Category 2 non-service-connected disabled veterans may use Form 458B or a VA certification)",
    "number": "Form 458B",
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/homestead/Form%20458B_2026.pdf",
    "revision": "2026",
    "filedWith": "county assessor, with the first Form 458"
   },
   {
    "programRef": "*",
    "name": "Application for Transfer of Nebraska Homestead Exemption (when moving within Nebraska between Jan 1 and Aug 15)",
    "number": "Form 458T",
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/homestead/Form%20458T%202026.pdf",
    "revision": "2026",
    "filedWith": "county assessor of the new county, by August 15"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "06-30",
   "text": "Neb. Rev. Stat. 77-3512(1): file 'with the county assessor ... after February 1 and on or before June 30 of each year'. Form 458 (2026): 'Failure to timely file is a waiver of the homestead exemption.' The county board may by majority vote extend an individual applicant's deadline to July 20 (not in consecutive years)."
  },
  "effective": "Applies to the current year's taxes (assessed Jan 1, due the following year). The applicant must own and occupy the homestead from January 1 through August 15 of the application year; eligibility for the veteran categories is measured as of January 1 (e.g., 100% permanent disability 'certified on or before January 1, 2026'). Approved exemptions are deducted from the assessment roll after the Tax Commissioner certifies determinations by November 1.",
  "lateFiling": "Three statutory late-filing routes, each only for the current tax year and each filed with the assessor 'on or before June 30 of the year in which the real estate taxes levied on the property for the current year become delinquent' (i.e., June 30 of the NEXT year): (1) medical condition that impaired timely filing, with Form 458L; (2) death of a spouse during the year, with the death certificate; (3) NEW under LB826 (eff. April 15, 2026): the VA 'certification of status ... was received from the United States Department of Veterans Affairs after June 30', with documentation of the receipt date (77-3512(1)(b)-(d); 77-3514.01). The assessor must approve or reject a late filing within 30 days; rejection is appealable to the county board of equalization.",
  "retroactivity": {
   "type": "fixed",
   "years": 1,
   "text": "Only the prior tax year, and only through the late-filing routes in 77-3514.01 (medical, death of spouse, or late VA certification), filed by June 30 of the following year. Otherwise 'Failure to file ... shall constitute a waiver of the exemption for the year in which the failure occurred' (77-3512(2)). Separately, the Tax Commissioner may review an application within 3 years and order a refund if an exemption 'should have been approved or increased' (77-3517(2))."
  },
  "renewal": {
   "type": "none",
   "text": "Categories 4V (100% SC permanently disabled or 38 CFR 4.16 total rating), 4S (qualified surviving spouses) and 5 (VA-contributed homes) file once: 77-3512(1)(e) 'shall not be required to file an application in any subsequent year'; the 2026 Category Table marks Form 458 'No, but required with 1st application', and again 'the year after filing a late application'. EXCEPTIONS that must refile every year: Category 7 (100% SC TEMPORARY disability, with annual VA certification) and Category 2 (non-service-connected totally disabled wartime veteran, income-tested, Schedule I each year). Surviving spouses must notify the assessor within 30 days of remarriage before age 57."
  },
  "ratingChange": "A category change requires a new Form 458 with a new VA certification (Category Table note: 'If medical status changes, then a new Form 458 ... must be completed and submitted to your county assessor accompanied by a new Form 458B or VA Certificate'). Category 7 (temporary 100%) veterans file annually until the VA makes the rating permanent, then file once more as 4V. Category 4V also covers a total disability rating for compensation under 38 CFR 4.16 (IU), so TDIU qualifies for the full exemption without income or value limits. Veterans below 100% with a non-service-connected total disability fall to income-tested Category 2.",
  "move": "A homestead exemption does not follow the owner automatically. If you move to a new Nebraska homestead acquired between January 1 and August 15, file Form 458T (Application for Transfer) with the county assessor by August 15 (77-3509.01/.02); notify the assessor by August 15 of the change (77-3514). Otherwise file a new Form 458 in the Feb 1 to June 30 window the next year. The applicant must own and occupy the homestead Jan 1 to Aug 15 of the year claimed.",
  "onlineFiling": {
   "available": null,
   "text": "Form 458 is a paper/PDF form filed with the county assessor; many assessors mail pre-printed applications to prior recipients who must refile. Some counties accept email submissions; no statewide e-file."
  },
  "documents": [
   "Form 458 (2026), signed, filed Feb 1 to June 30 with the county assessor",
   "Category 4V / 4S / 5 / 7: VA certification letter showing compensation for 100% service-connected permanent disability (or a 38 CFR 4.16 total/IU rating, or 100% temporary for Category 7, or VA-contributed home for Category 5), certified on or before January 1 of the year; required with the first application (4V, 4S, 5) or every year (7)",
   "Category 2 (non-service-connected totally disabled wartime veteran): Form 458B or VA certification with the first application, plus Form 458 Schedule I Income Statement every year",
   "Proof of honorable or general (under honorable conditions) discharge; the veteran must have been discharged with that characterization (Form 458 note)",
   "Surviving spouse (4S): proof of marriage/death and of VA compensation drawn as the spouse of a 4V veteran, a veteran who died of a service-connected disability, or a service member who died on active duty",
   "Schedule I Income Statement is NOT required for categories 4V, 4S, 5 and 7",
   "Late filers: Form 458L physician's certification, spouse's death certificate, or documentation of when the VA certification was received"
  ],
  "survivingSpouse": "Category 4S: unremarried surviving spouses (or spouses who remarried after age 57) drawing VA compensation because of (a) marriage to a deceased 4V veteran, (b) the death of any honorably discharged veteran from a service-connected disability, or (c) the death of a service member on active duty, get the 100% exemption with no income or value limit and file once (77-3506(2)(b),(d)-(f); 77-3512(1)(e)). A spouse who remarries before 57 loses it and must notify the assessor within 30 days (77-3506(4)).",
  "appeal": "Assessor rejection (including of a late filing): hearing before the county board of equalization under 77-3519. Tax Commissioner denial or partial approval (notice mailed after the Nov 1 certification): appeal under 77-3520 (to the Tax Equalization and Review Commission). Form 458R is the assessor's Notice of Reduction/Rejection; Form 458RQ requests a redetermination.",
  "statute": "Neb. Rev. Stat. §§ 77-3506 (veteran categories; no annual re-application), 77-3512 (Feb 1 to June 30 filing; late-filing routes incl. LB826 2026), 77-3513 (assessor's April 1 refile notice), 77-3514 (change notice by Aug 15), 77-3514.01 (late applications), 77-3517 (Tax Commissioner review, 3-year refund), 77-3519/77-3520 (appeals); Title 350 Neb. Admin. Code ch. 45",
  "sourceUrls": [
   {
    "url": "https://revenue.nebraska.gov/PAD/homestead-exemption",
    "title": "Nebraska DOR: Nebraska Homestead Exemption (forms, guide, calendar)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/homestead/Form%20458%202026.pdf",
    "title": "Form 458, Nebraska Homestead Exemption Application (2026) with instructions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/homestead/2026%20Homestead%20Category%20Table%20Requirements.pdf",
    "title": "2026 Homestead Category Requirement Table (annual filing and certification by category)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/homestead/Form%20458L%202026.pdf",
    "title": "Form 458L, Physician's Certification for Late Homestead Exemption Filing (2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/homestead/Form%20458B_2026.pdf",
    "title": "Form 458B, Certification of Disability for Homestead Exemption (2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/homestead/Form%20458T%202026.pdf",
    "title": "Form 458T, Application for Transfer of Nebraska Homestead Exemption (2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/homestead/Homestead%20Exemption%20Information%20Guide.pdf",
    "title": "Nebraska Homestead Exemption Information Guide",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.nebraska.gov/PAD/county-assessors-and-parcel-search",
    "title": "Nebraska DOR: County Assessors and Parcel Search",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://revenue.nebraska.gov/sites/default/files/doc/pad/assessor/updated_assessor_phone_list.pdf",
    "title": "Nebraska county assessor address and phone list (PDF)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://nebraskalegislature.gov/laws/statutes.php?statute=77-3506",
    "title": "Neb. Rev. Stat. 77-3506 (veterans and surviving spouses; one-time application)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://nebraskalegislature.gov/laws/statutes.php?statute=77-3512",
    "title": "Neb. Rev. Stat. 77-3512 (filing window, late filing, waiver; LB826 2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://nebraskalegislature.gov/laws/statutes.php?statute=77-3514.01",
    "title": "Neb. Rev. Stat. 77-3514.01 (late applications; VA certification received after June 30)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://nebraskalegislature.gov/laws/statutes.php?statute=77-3517",
    "title": "Neb. Rev. Stat. 77-3517 (Tax Commissioner determination, 3-year review and refund)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://nebraskalegislature.gov/laws/statutes.php?statute=77-3513",
    "title": "Neb. Rev. Stat. 77-3513 (assessor refile notice by April 1)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   "The 'SC Totally Disabled Veterans and Surviving Spouses' row should note the discharge test is 'honorable or general (under honorable conditions)' (77-3506(2)(a)) and that Category 7 (100% SC TEMPORARY disability) gets the same 100% exemption but must refile annually with a fresh VA certification.",
   "The 'Wartime Veteran ... Non-SC Totally Disabled' row's summary already notes 4V covers IU; the statute's wording is 'assignment of total disability rating for compensation pursuant to 38 C.F.R. 4.16' (77-3506(2)(a)(ii))."
  ],
  "notes": "Nebraska Legislature statute pages carry a note that LB826 (effective April 15, 2026) added the late-VA-certification route; the 2026 Form 458 instructions read here did not yet describe it, so the late-filing text quotes the statute. The Information Guide PDF was verified 200 but not opened. Appeal detail beyond the statutory cross-references (77-3519 county board of equalization; 77-3520) was not read."
 },
 "NH": {
  "state": "NH",
  "officeType": "municipal assessing officials (selectmen or assessors of the city/town)",
  "officeTypeNote": "Every NH veteran credit and the RSA 72:36-a exemption is granted by the city or town, and the OPTIONAL amounts (RSA 72:28 $51-$750; RSA 72:35 $701-$5,000; RSA 72:29-a $701-$2,000, rising to $2,500 on April 1, 2027) exist only where the municipality has adopted them under RSA 72:27-a. File the state Form PA-29 with the assessing officials of the town where the home is; the Department of Revenue Administration (DRA) only approves the form and does not take applications.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": "NH Department of Revenue Administration: Municipal and Property Division",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.revenue.nh.gov/about-dra/municipal-and-property-division",
   "note": "DRA publishes no public directory of town assessing offices. Direct the user to '<town> assessing department' on the municipal website. DRA Municipal and Property Division (603) 230-5950. revenue.nh.gov returns 403 to HEAD/plain curl; pages verified 200 with a browser-header GET."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Permanent Application for Property Tax Credits/Exemptions (covers RSA 72:28 Veterans' Credit, 72:28-b All Veterans' Credit, 72:35 Service-Connected Total Disability Credit, 72:29-a Surviving Spouse Credit, 72:28-c Combat Service Credit, 72:36-a Certain Disabled Veterans Exemption)",
    "number": "Form PA-29",
    "url": "https://www.revenue.nh.gov/sites/g/files/ehbemt736/files/documents/pa-29-permanent-appl-property-tax-credit-form.pdf",
    "revision": "Version 5, 11/2025",
    "filedWith": "municipal assessing officials of the city/town where the credit or exemption is requested"
   },
   {
    "programRef": "*",
    "name": "Statement of Qualification (required in addition to PA-29 when the home is held in a trust or life estate)",
    "number": "Form PA-33",
    "url": "https://www.revenue.nh.gov/sites/g/files/ehbemt736/files/documents/pa-33-statement-qualification-form.pdf",
    "revision": null,
    "filedWith": "municipal assessing officials, with the PA-29"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-15",
   "text": "RSA 72:33, I: filed 'with the selectmen or assessors, by April 15 preceding the setting of the tax rate, a permanent application'. PA-29: 'DUE DATE APRIL 15 PRECEDING THE SETTING OF THE TAX RATE'. Applicant must be qualified as of April 1 of the year claimed; filing date is hand-delivery, USPS postmark, or overnight-carrier receipt."
  },
  "effective": "Credit (or the 72:36-a exemption) is applied to the tax year beginning April 1 in which the applicant was qualified on April 1 and filed by April 15; it appears on that year's bill (final bills issued in the fall, due no earlier than December 1). Assessing officials must mail their decision by July 1 'prior to the date of notice of tax'; failure to respond is a denial (RSA 72:34). NH residency for at least one year preceding April 1 is required for the veterans' credits (PA-29 Step 4).",
  "lateFiling": "Discretionary only. RSA 72:33, I-a: if the applicant 'was prevented by accident, mistake, or misfortune from filing ... on or before April 15', the officials 'may receive the application at a later date and grant an exemption or credit for that year; but no such application shall be received or exemption or credit granted after the local tax rate has been approved for that year.' (Tax rates are typically set in October-November by DRA.)",
  "retroactivity": {
   "type": "none",
   "years": 0,
   "text": "No refunds for prior tax years; the credit begins with the year of a timely (or accepted late) application. The only look-back is an appeal of a denial for that same year (RSA 72:34-a), which can order an abatement 'if a tax has been assessed'."
  },
  "renewal": {
   "type": "on-change",
   "text": "The PA-29 is a 'permanent application': RSA 72:33, II makes one filing 'sufficient' for subsequent years 'so long as the applicant does not change residence'. A move requires 'an amended permanent application on or before December 1 immediately following the change of residence'. Towns may request supporting documents under RSA 72:34, II and may re-verify eligibility; the credit is tied to the principal place of abode."
  },
  "ratingChange": "The RSA 72:35 credit requires VA certification of a 'total and permanent service-connected disability' (or double amputee/paraplegic from service connection); the certification 'shall be accepted as conclusive' absent specific contrary evidence (72:35, III). A veteran newly rated 100% T&P files a new PA-29 (checking 72:35) by April 15 of the year the higher credit is first claimed; a veteran whose rating falls below T&P reverts to the RSA 72:28 wartime credit (if eligible) and should notify the assessors. Only one of 72:28/72:28-b/72:35 is paid per veteran; 72:36-a (full exemption) additionally requires a VA SAH/SHA specially adapted home (or one bought with proceeds of selling such a home, per the 2024/2026 amendments).",
  "move": "File an amended permanent PA-29 with the NEW town's assessing officials 'on or before December 1 immediately following the change of residence' (RSA 72:33, II). The credit applies only to the principal place of abode; the optional amount in the new town may differ. The former town's credit ends with the move.",
  "onlineFiling": {
   "available": null,
   "text": "PA-29 is a fillable PDF signed in ink and delivered, mailed or sent by overnight carrier to the town; some cities (e.g., Dover, Keene, Enfield) post their own intake instructions or portals. No statewide e-file."
  },
  "documents": [
   "Form PA-29 (Version 5, 11/2025), Step 2 Veterans' Tax Credits and Exemption, signed in ink by all property owners; Form PA-33 if the home is in a trust or life estate",
   "DD-214 or other proof of qualifying service and discharge (RSA 21:50 definition of veteran; dates of entry and discharge are entered on the form)",
   "RSA 72:35 credit: certification from the U.S. Department of Veterans Affairs of a total and permanent service-connected disability (or proof of service-connected double amputation/paraplegia); conclusive unless rebutted (72:35, III)",
   "RSA 72:36-a exemption: proof of the VA SAH/SHA grant and of 100% P&T (38 CFR 3.340), double amputee/paraplegic, or 5/200 blindness from service connection; 'satisfactory proof of such service connection disability is furnished to the assessors'",
   "Proof of NH residency for at least one year preceding April 1 of the year claimed (PA-29 Step 4; RSA 72:28/72:35 'resident of this state')",
   "Surviving spouse: proof of the veteran's death/service and that the spouse has not remarried (RSA 72:29, V definition)"
  ],
  "survivingSpouse": "RSA 72:35 extends the credit to 'the surviving spouse of such a person' occupying the home as principal place of abode; RSA 72:28 wartime credit likewise covers the spouse or surviving spouse. RSA 72:29-a gives the surviving spouse of a person killed or who died on active duty $700 standard (optional $701-$2,000; $2,500 cap from April 1, 2027), on real and personal property whether residential or not, in the town of residence. RSA 72:36-a full exemption also passes to the surviving spouse as defined in RSA 72:29, V. All claimed on the same PA-29.",
  "appeal": "RSA 72:34-a: if the selectmen/assessors refuse the credit or exemption, 'the applicant may appeal in writing, on or before September 1 following the date of notice of tax under RSA 72:1-d, to the board of tax and land appeals or the superior court'. PA-29 instructions: BTLA, 107 Pleasant Street, Concord NH 03301, (603) 271-2578, www.nh.gov/btla; specify 'EXEMPTION APPEAL'. A late or missing town response does not extend the appeal period.",
  "statute": "RSA 72:28 (standard/optional veterans' credit), 72:28-b (all veterans' credit), 72:29-a (surviving spouse credit), 72:35 (total and permanent service-connected disability credit, $700 / $701-$5,000), 72:36-a (certain disabled veterans exemption), 72:33 (permanent application, April 15, late filing I-a, amended application on move), 72:34 (decision by July 1), 72:34-a (appeal by Sept 1 to BTLA or superior court), 72:27-a (local adoption of optional amounts)",
  "sourceUrls": [
   {
    "url": "https://gc.nh.gov/rsa/html/V/72/72-33.htm",
    "title": "RSA 72:33 Application for Exemption or Tax Credit (NH General Court)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://gc.nh.gov/rsa/html/V/72/72-34.htm",
    "title": "RSA 72:34 Investigation of Application and Decision by Town Officials",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://gc.nh.gov/rsa/html/V/72/72-34-a.htm",
    "title": "RSA 72:34-a Appeal From Refusal to Grant Exemption, Deferral, or Tax Credit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://gc.nh.gov/rsa/html/V/72/72-35.htm",
    "title": "RSA 72:35 Tax Credit for Service-Connected Total Disability",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://gc.nh.gov/rsa/html/V/72/72-28.htm",
    "title": "RSA 72:28 Standard and Optional Veterans' Tax Credit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://gc.nh.gov/rsa/html/V/72/72-28-b.htm",
    "title": "RSA 72:28-b All Veterans' Tax Credit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://gc.nh.gov/rsa/html/V/72/72-29-a.htm",
    "title": "RSA 72:29-a Surviving Spouse (tax credit)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://gc.nh.gov/rsa/html/V/72/72-36-a.htm",
    "title": "RSA 72:36-a Certain Disabled Veterans (exemption)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.nh.gov/sites/g/files/ehbemt736/files/documents/pa-29-permanent-appl-property-tax-credit-form.pdf",
    "title": "NH DRA Form PA-29 Permanent Application for Property Tax Credits/Exemptions (Version 5, 11/2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.nh.gov/sites/g/files/ehbemt736/files/documents/pa-33-statement-qualification-form.pdf",
    "title": "NH DRA Form PA-33 Statement of Qualification",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.nh.gov/resource-center/current-year-forms-and-instructions",
    "title": "NH DRA Current Year Forms and Instructions (Municipal & Property forms)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.nh.gov/about-dra/municipal-and-property-division",
    "title": "NH DRA Municipal and Property Division",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.nh.gov/taxes-glance/property-tax",
    "title": "NH DRA Property Tax at a Glance",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   "The RSA 72:29-a surviving-spouse row says 'up to $2,000'; the statute now carries a second paragraph II effective April 1, 2027 raising the optional cap to $2,500 (2026, 96:3).",
   "The 'Tax Credit for Total and Permanent Disabled Veterans' `details` string still says '$701-$4,000'; the statute and PA-29 say $701 up to $5,000 (summary already correct).",
   "RSA 72:36-a was amended (2024, 13:1; 2026, 252:3, eff. Aug 31, 2026) to include homes 'acquired using proceeds from the sale of' an SAH/SHA home; the row summary should mention this.",
   "The RSA 72:35 row has survivingSpouse: false but the statute expressly includes 'the surviving spouse of such a person'."
  ],
  "notes": "All revenue.nh.gov URLs return 403 to curl HEAD and plain GET (bot wall) but 200 with browser headers; the PA-29 PDF was downloaded and read in full. RSA 72:28 text was truncated in extraction (only paragraphs I-II read); the optional range is confirmed on the PA-29. No official state directory of municipal assessing offices exists on revenue.nh.gov, hence tier 2."
 },
 "NJ": {
  "state": "NJ",
  "officeType": "municipal tax assessor",
  "officeTypeNote": "File with the tax assessor of the municipality where the home is located, not the county. The $250 Veteran Deduction (Form V.S.S.) may alternatively be filed with the municipal tax collector during the tax year itself. Denials are appealed to the County Board of Taxation.",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.nj.gov/treasury/taxation/pdf/lpt/assessor/statewidebycounty.pdf",
   "label": "NJ Division of Taxation: Tax Assessor Hours by County (every municipality's assessor, phone, email, office hours)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.nj.gov/treasury/taxation/lpt/localtax.shtml",
   "note": "Single statewide PDF grouped by county; no per-county URLs. A by-last-name version is at https://www.nj.gov/treasury/taxation/pdf/lpt/TaxAssessorHoursbyLastName.pdf and the County Boards of Taxation directory (for appeals) at https://www.nj.gov/treasury/taxation/pdf/lpt/CountyBoardsofTaxation.pdf."
  },
  "forms": [
   {
    "programRef": "Disabled Veterans' Full Property Tax Exemption",
    "name": "Claim for Property Tax Exemption on Dwelling of Disabled Veteran or Surviving Spouse/Civil Union or Domestic Partner of Disabled Veteran or Serviceperson",
    "number": "D.V.S.S.E.",
    "url": "https://www.nj.gov/treasury/taxation/pdf/other_forms/lpt/dvsse.pdf",
    "revision": "March 2025",
    "filedWith": "municipal tax assessor"
   },
   {
    "programRef": "Veteran Deduction",
    "name": "Property Tax Deduction Claim by Veteran or Surviving Spouse/Civil Union or Domestic Partner of Veteran or Serviceperson",
    "number": "V.S.S.",
    "url": "https://www.nj.gov/treasury/taxation/pdf/other_forms/lpt/vss.pdf",
    "revision": "Nov 2020",
    "filedWith": "municipal tax assessor (Oct 1 to Dec 31 of the pretax year) or municipal tax collector (Jan 1 to Dec 31 of the tax year)"
   },
   {
    "programRef": "Active Service Deferment",
    "name": "Active Military Service Property Tax Deferment Application",
    "number": "AMSPTD",
    "url": "https://www.nj.gov/treasury/taxation/pdf/other_forms/amsptd.pdf",
    "revision": null,
    "filedWith": "municipal tax collector (per Division of Taxation deferment page)"
   },
   {
    "programRef": "*",
    "name": "Petition of Appeal (appeal of assessor's denial to County Board of Taxation)",
    "number": "A-1",
    "url": "https://www.nj.gov/treasury/taxation/pdf/other_forms/lpt/petappl.pdf",
    "revision": null,
    "filedWith": "County Board of Taxation"
   }
  ],
  "deadline": {
   "type": "rolling",
   "date": null,
   "text": "D.V.S.S.E.: \"File this form with the municipal tax assessor at any time during the tax year.\" V.S.S. ($250 deduction): file with the assessor Oct 1 to Dec 31 of the pretax year or with the collector Jan 1 to Dec 31 of the tax year; eligibility is measured as of Oct 1 of the pretax year."
  },
  "effective": "Full exemption is prorated for the remainder of the tax year from the date title to the dwelling was acquired (form example: home acquired Feb 14, claim filed June 1, 321/365 of the assessment exempt). N.J.S.A. 54:4-3.31: \"Such exemptions shall be allowed and prorated by the assessor for the remainder of any taxable year.\"",
  "lateFiling": "n/a for the full exemption (no annual deadline). The $250 deduction for a given tax year must be claimed by Dec 31 of that tax year with the collector.",
  "retroactivity": {
   "type": "local-option",
   "years": null,
   "text": "N.J.S.A. 54:4-3.32: \"the governing body of each municipality, at its discretion, may return all taxes collected on property which would have been exempt had proper claim in writing been made.\" Refunds are by municipal resolution and discretionary; Division of Taxation notes retroactive refunds cannot predate Jan 16, 2018 (P.L.2017, c.367) unless the veteran had qualifying wartime/conflict-zone service, and cannot predate Dec 4, 2020 for veterans with only peacetime service."
  },
  "renewal": {
   "type": "none",
   "text": "No annual re-file for the full exemption. Form: \"Claimants must inform the assessor of any change in status which may affect their continued entitlement to the exemption.\" The $250 deduction is likewise carried forward once allowed (same notice-of-change duty on Form V.S.S.)."
  },
  "ratingChange": "The exemption requires VA certification of 100% permanent and total service-connected disability (including 100% unemployability rated permanent). A drop below that must be reported to the assessor as a change in status; a veteran newly reaching 100% P&T files D.V.S.S.E. at any time and the exemption begins once all prerequisites are met.",
  "move": "Exemption attaches to the dwelling owned and occupied as the principal residence. On a move within NJ, file a new D.V.S.S.E. with the new municipality's assessor; proration runs from the date title to the new home is acquired.",
  "onlineFiling": {
   "available": null,
   "text": "No statewide e-file. The Division of Taxation form is a PDF filed with the municipal assessor; acceptance by mail, email or in person varies by municipality."
  },
  "documents": [
   "DD-214 (Certificate of Release or Discharge) showing honorable discharge from active duty",
   "VA certification of 100% permanent and total service-connected disability (rating decision or benefits summary letter)",
   "Proof of ownership: deed, executory contract, proprietary lease (co-op/mutual housing) or probated will",
   "Proof of NJ domicile: NJ driver's license or vehicle registration, voter registration, or NJ resident tax return",
   "Surviving spouse: veteran's death certificate and marriage/civil union/domestic partnership certificate (or Military Notification of Death if the serviceperson died on active duty)"
  ],
  "survivingSpouse": "Un-remarried surviving spouse, civil union or domestic partner qualifies if the veteran was a NJ resident at death who met the service and disability requirements (or died on active duty), and the survivor owns and occupies the dwelling as principal residence and is NJ domiciled. Remarriage or a new civil union/domestic partnership ends eligibility. Same Form D.V.S.S.E.",
  "appeal": "Appeal an unfavorable assessor determination to the County Board of Taxation on Form A-1 \"annually on or before April 1 or on or before January 15 for residents of Burlington, Monmouth or Gloucester counties only.\"",
  "statute": "N.J.S.A. 54:4-3.30 et seq. (full exemption; P.L.1948, c.259 as amended by P.L.2017, c.367 and P.L.2019, c.413); N.J.S.A. 54:4-3.32 (refunds); N.J.S.A. 54:4-8.10 et seq. ($250 deduction); N.J.A.C. 18:28-1.1 et seq.",
  "sourceUrls": [
   {
    "url": "https://www.nj.gov/treasury/taxation/lpt/lpt-disabledvet.shtml",
    "title": "NJ Division of Taxation: 100% Disabled Veteran Property Tax Exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nj.gov/treasury/taxation/pdf/other_forms/lpt/dvsse.pdf",
    "title": "Form D.V.S.S.E. with General Guidelines (Rev. March 2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nj.gov/treasury/taxation/pdf/other_forms/lpt/vss.pdf",
    "title": "Form V.S.S. $250 Veteran Property Tax Deduction (Rev. Nov 2020)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nj.gov/treasury/taxation/pdf/lpt/vetproptaxprogrambrochure.pdf",
    "title": "NJ Property Tax Programs for Veterans brochure (Rev. 05/2022)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nj.gov/treasury/taxation/lpt/lpt-activemilitary.shtml",
    "title": "NJ Division of Taxation: Active Military Service Property Tax Deferment",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nj.gov/treasury/taxation/pdf/other_forms/amsptd.pdf",
    "title": "Form AMSPTD Active Military Service Property Tax Deferment",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nj.gov/treasury/taxation/pdf/other_forms/lpt/petappl.pdf",
    "title": "Form A-1 Petition of Appeal",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://pub.njleg.gov/bills/2018/PL19/413_.HTM",
    "title": "P.L.2019, c.413 (amending N.J.S.A. 54:4-3.30 and 54:4-3.31)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nj.gov/treasury/taxation/pdf/lpt/assessor/statewidebycounty.pdf",
    "title": "NJ Tax Assessor Hours by County (statewide assessor directory)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nj.gov/treasury/taxation/pdf/lpt/CountyBoardsofTaxation.pdf",
    "title": "NJ County Boards of Taxation directory",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nj.gov/treasury/taxation/lpt/localtax.shtml",
    "title": "NJ Division of Taxation: Local Property Tax (links to assessor directories)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "Veteran Deduction.survivingSpouse",
    "issue": "Row says survivingSpouse false, but the details text and Form V.S.S. both allow the un-remarried surviving spouse/civil union/domestic partner to claim the $250 deduction.",
    "source": "https://www.nj.gov/treasury/taxation/pdf/other_forms/lpt/vss.pdf"
   }
  ],
  "notes": "AMSPTD form revision date and filing office were not read from the PDF itself (link verified 200 only); the brochure lists it under the deferment program. The 54:4-3.32 refund text is quoted from the Division of Taxation's D.V.S.S.E. guidelines; the official NJ Legislature statute database (lis.njleg.state.nj.us) did not render for direct verification. Pending bills S313/A941 (2024-25) to make refunds mandatory had not been enacted as of the sources found."
 },
 "NM": {
  "state": "NM",
  "officeType": "county assessor",
  "officeTypeNote": "Two-step process: (1) apply to the New Mexico Department of Veterans' Services (NMDVS) on DVS Form 1 for a Certificate of Eligibility (veteran exemption and/or disabled veteran exemption); (2) present the certificate, plus the assessor's TRD-prescribed owner-occupancy certification form, to the COUNTY ASSESSOR where the home sits. The county treasurer only collects the bill.",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.tax.newmexico.gov/businesses/county-officials/",
   "label": "NM Taxation & Revenue Dept: County Officials (assessor address, phone and fax for all 33 counties)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.tax.newmexico.gov/governments/2020/10/21/property-tax/",
   "note": "Single page, plain-text entries, no per-county sub-pages. NMDVS field offices that issue the certificate: https://www.dvs.nm.gov/state-benefits-offices/"
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Application for Veteran Tax Exemption and Disabled Veteran Tax Exemption (issues the Certificate of Eligibility)",
    "number": "DVS Form 1",
    "url": "https://www.dvs.nm.gov/wp-content/uploads/2026/04/100023_DVS_DVS1_VeteransExemption_Fillable.pdf",
    "revision": "March 2025",
    "filedWith": "NM Department of Veterans' Services (mail: 407 Galisteo St. Rm 134, Santa Fe NM 87501-2641; email vet.benefits@dvs.nm.gov; or walk in at Santa Fe or Albuquerque office)"
   },
   {
    "programRef": "Disabled Veteran Property Tax Exemption",
    "name": "Disabled veteran owner-occupancy certification (form prescribed by TRD under NMSA 7-38-17(E); distributed by each county assessor)",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "county assessor, together with the NMDVS Certificate of Eligibility"
   }
  ],
  "deadline": {
   "type": "varies-by-county",
   "date": null,
   "text": "NMSA 7-38-17(C): an exemption \"shall be applied for no later than thirty days after the mailing of the county assessor's notices of valuation ... in order for it to be allowed for that tax year.\" Notices of value are mailed by each county (counties report typically around April 1), so the deadline is roughly early May and varies by county."
  },
  "effective": "Allowed for the tax year in which it is claimed within 30 days of the notice-of-value mailing; a certificate presented later applies to the following tax year. HB 285 (2026): a veteran whose VA claim is still pending at the 30-day mark may file a protest and attach the VA notice of receipt of claim.",
  "lateFiling": "A claim filed more than 30 days after the notice-of-value mailing is not allowed for that tax year (7-38-17(C)); it takes effect the next tax year. Exception: a veteran moving mid-year may transfer an existing exemption to the new residence \"regardless of whether the exemption was applied for and claimed within thirty days\" (7-37-5.1(D), as amended 2026).",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "Statute allows the exemption only \"for that tax year\" when timely claimed; no refund mechanism for prior years."
  },
  "renewal": {
   "type": "none",
   "text": "NMSA 7-38-17(A): exemptions \"claimed and allowed in a tax year need not be claimed for subsequent tax years if there is no change in eligibility for the exemption nor any change in ownership.\" The disabled-veteran certification form must be re-presented on any change in ownership. A person who becomes ineligible must notify the assessor by the last day of February of the following tax year (7-38-17(D)); failure is a misdemeanor (up to $1,000 fine)."
  },
  "ratingChange": "Since tax year 2026 the exemption equals the veteran's VA service-connected rating percentage (10%-100%). DVS Form 1 records the rating and date awarded; a rating change requires a new/updated Certificate of Eligibility from NMDVS and presentation to the assessor. Not addressed in the statute text as a separate procedure; confirm with NMDVS.",
  "move": "7-37-5.1(D) (2026): on transfer of the principal residence the veteran may either keep the exemption on the old home for the rest of the year or move it to the new principal residence, even outside the 30-day window. Benefits are forfeited on becoming a resident of another state (DVS Form 1).",
  "onlineFiling": {
   "available": false,
   "text": "NMDVS accepts DVS Form 1 by mail, email or walk-in; no web portal. County assessor step is in person or by mail (varies by county)."
  },
  "documents": [
   "DVS Form 1 completed",
   "DD-214 (full, undeleted) or equivalent DoD document showing dates and character of service (NOAA 56-16 / PHS 1867 for those services)",
   "VA finding of service-connected disability with rating percentage (disabled veteran exemption only)",
   "Proof of NM residency: NM driver's license or ID, voter registration, or latest NM income tax return (NMDVS accepts only these)",
   "Surviving spouse: marriage certificate and veteran's death certificate",
   "At the assessor: the NMDVS Certificate of Eligibility plus the assessor's owner-occupancy certification form"
  ],
  "survivingSpouse": "Un-remarried surviving spouse of a veteran who qualified for the disabled veteran exemption is entitled to it (even if the veteran never applied), provided the spouse continuously occupies the property as principal residence after the veteran's death (7-37-5.1(C), as amended 2026). Un-remarried surviving spouse of any qualifying veteran gets the standard veteran exemption. Remarriage ends it, even if followed by divorce.",
  "appeal": "If the assessor has not acted on a claim 30 days after the notice-of-value mailing, or denies it, the owner files a protest with the county assessor under NMSA 7-38-21 (county valuation protests board, 7-38-24); the assessor may hold an informal conference first.",
  "statute": "NMSA 1978 7-37-5 (veteran exemption), 7-37-5.1 (disabled veteran exemption), 7-38-17 (claiming exemptions); as amended by Laws 2025 (HB 47) and Laws 2026, ch. 9 (HB 285, emergency, effective Feb 25, 2026); N.M. Const. art. VIII, secs. 5 and 15 (2024 amendments)",
  "sourceUrls": [
   {
    "url": "https://www.nmlegis.gov/Sessions/26%20Regular/final/HB0285.pdf",
    "title": "HB 285 (2026) final version: amends 7-37-5.1 and 7-38-17, claim procedure, portability, protest",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nmlegis.gov/Sessions/25%20Regular/final/HB0047.pdf",
    "title": "HB 47 (2025) final version: implements 2024 constitutional amendments ($10,000 veteran exemption, proportional disabled veteran exemption)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dvs.nm.gov/wp-content/uploads/2026/04/100023_DVS_DVS1_VeteransExemption_Fillable.pdf",
    "title": "NMDVS DVS Form 1 (Rev. March 2025) with eligibility, documents, mailing addresses",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dvs.nm.gov/benefits/",
    "title": "NMDVS Benefits page (property tax exemption, links to DVS Form 1)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.newmexico.gov/wp-content/uploads/2026/08/20260813_New-Mexico-Veterans-Benefit-from-Expanded-Property-Tax-Exemptions.pdf",
    "title": "TRD/NMDVS joint release Aug 13, 2026: two-step process (NMDVS certificate, then county assessor)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.newmexico.gov/businesses/county-officials/",
    "title": "TRD County Officials directory (all 33 county assessors)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.newmexico.gov/governments/2020/10/21/property-tax/",
    "title": "TRD Property Tax Division page",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dvs.nm.gov/state-benefits-offices/",
    "title": "NMDVS State Benefits field offices",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "Veterans Property Tax Exemption.survivingSpouse and Disabled Veteran Property Tax Exemption.survivingSpouse",
    "issue": "Both rows show survivingSpouse false. DVS Form 1 and 7-37-5.1(C) as amended by HB 285 (2026) extend both exemptions to the un-remarried surviving spouse (disabled veteran exemption: spouse must continue to occupy the home).",
    "source": "https://www.nmlegis.gov/Sessions/26%20Regular/final/HB0285.pdf"
   }
  ],
  "notes": "The county assessor's owner-occupancy certification form is prescribed by TRD but no statewide PDF was found on tax.newmexico.gov; counties post their own copies (e.g. Santa Fe County '2027 Disabled Veteran certification form'), so number/url left null. The 'around April 1' notice-of-value timing comes from county assessor pages, not statute text (7-38-20 not opened). HB 285 chapter number (Laws 2026 ch. 9, signed Feb 25, 2026) comes from a legislative tracking site, not nmlegis.gov; the final bill text itself was read. Official NMSA compilation on nmonesource.com returned 403 to automated fetch."
 },
 "NV": {
  "state": "NV",
  "officeType": "county assessor",
  "officeTypeNote": "File the claim and affidavit with the ASSESSOR of the county where you reside (NRS 361.155(3)); the exemption may be claimed in only one Nevada county. The assessor also handles the choice to apply the same exemption to the vehicle Governmental Services Tax (NRS 371.103/371.104) instead of real property; the DMV then honors it at registration. The Department of Taxation sets the annual CPI-adjusted amounts but takes no applications.",
  "officeLocator": {
   "tier": 1,
   "url": "https://tax.nv.gov/wp-content/uploads/2024/04/County-Assessors-Contact-List-9-7-23.pdf",
   "label": "Nevada Department of Taxation: County Assessors contact list (all 17 counties, address, phone, fax, email)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://tax.nv.gov/local-government-services/",
   "note": "The state list is a PDF dated September 7, 2023 (a companion map PDF is at https://tax.nv.gov/wp-content/uploads/2024/04/Nevada_County_Assessors_Map.pdf); names may be stale, so confirm on the county assessor's website. No per-county state pages."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Veterans / Disabled Veterans exemption claim and affidavit (no statewide form number; each county assessor issues its own affidavit made before the assessor or a notary, per NRS 361.090(4) and 361.091(4))",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "county assessor of the county of residence"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "06-15",
   "text": "NRS 361.155(1)(a): 'All claims for personal tax exemptions on real property ... must be filed on or before June 15' for the fiscal year beginning July 1; real property acquired June 16-30 may be claimed by July 5 (361.155(1)(b)). Personal property or vehicle claims 'may be made at any time' before the tax is due (361.091(3); Carson City Assessor)."
  },
  "effective": "Exemptions 'apply on a fiscal year basis' (July 1 to June 30) and reduce assessed value (35% of taxable value) for the fiscal year for which the claim is filed by June 15. FY2026-27 CPI-adjusted amounts (Department of Taxation AB209 schedule; Carson City Assessor): veteran $3,640; disabled veteran 60-79% $18,200, 80-99% $27,300, 100% $36,400 (statutory base $2,000/$10,000/$15,000/$20,000 indexed from July 2003). The same amount may instead be applied to the vehicle Governmental Services Tax, and any GST exemption used reduces the property exemption (NRS 361.1565).",
  "lateFiling": "NRS 361.155(6): if the claim and affidavit are not filed by the June 15 deadline, or are denied by the assessor, the claimant 'may, on or before January 15 of the fiscal year for which the claim of exemption is made, file the claim ... with the county board of equalization', which 'may grant or deny the claim for that fiscal year'. After January 15 the year is lost.",
  "retroactivity": {
   "type": "none",
   "years": 0,
   "text": "No refunds for prior fiscal years. The only recovery for a missed June 15 is the county board of equalization route for the SAME fiscal year, filed by January 15 (NRS 361.155(6)); denial there may be appealed to the State Board of Equalization."
  },
  "renewal": {
   "type": "annual",
   "text": "After the original affidavit, 'the county assessor shall ... mail a form for (a) The renewal of the exemption' each year following a year in which it was allowed (NRS 361.090(4), 361.091(4)); the renewal card/affidavit must be returned (by mail or electronically where the assessor allows it) to keep the exemption on real property or to designate it to the vehicle GST. Persons on active military service are excused from the annual renewal (361.090(5)). An exemption 'granted or renewed in error' is assessed back with a 10% penalty (361.155(5))."
  },
  "ratingChange": "The amount depends on 'the total percentage of permanent service-connected disability' (NRS 361.091(2)): 60-79%, 80-99%, 100% tiers. A veteran whose combined rating moves into a new tier should file a new affidavit with the updated VA rating document by June 15 for the next fiscal year; the rating must be PERMANENT and service-connected. A TDIU veteran rated below 100% combined falls in the tier of the combined rating, not the 100% tier. Ratings below 60% get only the wartime veteran exemption (if service qualifies under 361.090).",
  "move": "The exemption is personal (follows the claimant, not the parcel) but may be claimed in only one county: moving to another Nevada county requires a new affidavit with that county's assessor by June 15 for the next fiscal year, stating 'that the exemption is not claimed in any other county in this State'. Within the same county, notify the assessor so the exemption is applied to the new parcel (or kept on the vehicle GST).",
  "onlineFiling": {
   "available": null,
   "text": "The original affidavit must be 'made before the county assessor or a notary public' (NRS 361.091(4)), so the first claim is in person or notarized by mail; annual renewals may be returned electronically where the assessor authorizes it under NRS ch. 719 (361.091(4)). Some assessors (e.g., Clark, Washoe) offer online renewal portals."
  },
  "documents": [
   "County assessor's exemption claim/affidavit, sworn before the assessor or a notary, stating bona fide Nevada residency and that the exemption is not claimed in another county (NRS 361.091(4))",
   "Original or certified copy of the honorable discharge or other document of honorable separation (DD-214) or certificate of satisfactory service (NRS 361.091(5))",
   "Document from the U.S. Department of Veterans Affairs (or other military document) showing a PERMANENT service-connected disability and its total percentage (60% minimum) (NRS 361.091(5)(c))",
   "Wartime veteran exemption (361.090): separation papers showing honorable discharge, entry/discharge dates and 90+ continuous days of active duty in a listed period, Gulf War (PL 102-1) service, or a campaign/expedition medal; assessors may require an affidavit of direct support for some conflicts",
   "Surviving spouse of a disabled veteran: additional affidavit that the spouse was married to and living with the veteran for the 5 years preceding death, the veteran was eligible (or would have been if a Nevada resident), the spouse has not remarried and is a Nevada resident (NRS 361.091(6)); death certificate; county pages also ask for 6 months' Nevada residency",
   "Vehicle option: the exemption card/affidavit is presented at DMV registration (NRS 371.104 requires an annual affidavit filed in the county)"
  ],
  "survivingSpouse": "A surviving spouse of a veteran with a permanent service-connected disability keeps the disabled-veteran exemption at the veteran's tier if married to and living with the veteran for the 5 years preceding death, the veteran was eligible (or would have been if a Nevada resident), the spouse has not remarried, and the spouse is a Nevada resident; a separate affidavit is filed in addition to the regular one, and annual renewal cards follow (NRS 361.091(6)). The wartime veteran exemption (361.090) does not pass to a surviving spouse (the separate NRS 361.080 surviving-spouse exemption, $1,820 assessed for FY2026-27, is not veteran-specific). A veteran may also transfer the vehicle GST exemption to a current spouse (NRS 371.103(2), 371.104(2)).",
  "appeal": "A claim denied by the assessor (or filed late) may be taken to the county board of equalization on or before January 15 of the fiscal year (NRS 361.155(6)); the board's denial is appealable to the State Board of Equalization under procedures the State Board adopts.",
  "statute": "NRS 361.090 (wartime veterans exemption, $2,000 base, CPI-indexed), 361.091 (disabled veteran and surviving spouse, $10,000/$15,000/$20,000 base), 361.155 (June 15 filing, fiscal-year basis, late claim to county board by Jan 15), 361.1565 (reduction for GST exemption used); NRS 371.103, 371.104 (vehicle Governmental Services Tax exemptions)",
  "sourceUrls": [
   {
    "url": "https://www.leg.state.nv.us/NRS/NRS-361.html",
    "title": "NRS Chapter 361 Property Tax (361.090, 361.091, 361.155, 361.1565)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.leg.state.nv.us/NRS/NRS-371.html",
    "title": "NRS Chapter 371 Governmental Services Tax (371.103, 371.104 veteran vehicle exemptions)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.nv.gov/wp-content/uploads/2025/09/2026-2027-CPI-Adjustment-AB209.pdf",
    "title": "Nevada Department of Taxation: CPI Adjustment for Exemptions, Fiscal Year 2026-2027",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.nv.gov/wp-content/uploads/2026/09/2027-2028-CPI-Adjustment-AB209.pdf",
    "title": "Nevada Department of Taxation: CPI Adjustment for Exemptions, Fiscal Year 2027-2028",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.nv.gov/news-publications/local-government-services-publications/",
    "title": "Nevada Department of Taxation: Local Government Services Publications (exemption CPI schedules, guidance letters)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.nv.gov/wp-content/uploads/2024/09/16-006_Determination_of_Veterans_Eligibility_for_Exemption_from_Property_Tax.pdf",
    "title": "Department of Taxation Guidance Letter 16-006, Determination of Veterans Eligibility for Exemption from Property Tax",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.nv.gov/wp-content/uploads/2024/04/County-Assessors-Contact-List-9-7-23.pdf",
    "title": "Nevada Department of Taxation: County Assessors contact list (Sept 7, 2023)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.nv.gov/wp-content/uploads/2024/04/Nevada_County_Assessors_Map.pdf",
    "title": "Nevada County Assessors Map (Department of Taxation)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.nv.gov/local-government-services/",
    "title": "Nevada Department of Taxation: Local Government Services",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.carsoncity.gov/government/departments-a-f/assessor/general-information-services/personal-exemptions",
    "title": "Carson City Assessor: Personal Exemptions (FY2026-27 amounts, June 15 deadline, documents, vehicle option)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   "FY2026-27 assessed-value amounts in the rows ($3,640; $18,200/$27,300/$36,400) match the Department of Taxation's AB209 CPI schedule and Carson City. The FY2027-28 schedule (posted Sept 2026) is already live at the URL above and should be used for the July 1, 2027 refresh.",
   "The disabled-veteran row says 'surviving spouse eligible if married 5+ years'; the statute's test is married to AND living with the veteran for the 5 years preceding death, plus unremarried and Nevada resident (NRS 361.091(6))."
  ],
  "notes": "Nevada has no state-issued claim form; each assessor's affidavit differs, so `forms[].url` is null (Carson City, Washoe and others post PDFs). The Washoe County assessor pages return a WAF rejection page to automated requests and were not used. The Carson City page is a county (secondary) source and is marked primary:false. The FY2027-28 CPI PDF was verified 200 but not opened. The NRS 361.090 text extraction was cut at subsection 8 (CPI adjustment clause) and 361.091 at subsection 6; both were read far enough to source every field above."
 },
 "NY": {
  "state": "NY",
  "officeType": "municipal (city/town) assessor",
  "officeTypeNote": "File with the assessor of the city or town where the home sits (in New York City, the Department of Finance). If the property is in a village that assesses separately, file a second application with the village assessor. Nassau County and Tompkins County assess at the county level. Each taxing jurisdiction (county, city/town, village, school district) decides separately whether to offer the alternative, Cold War and 458-a(11) exemptions, so ask the assessor which apply to your bill.",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.tax.ny.gov/pit/property/munidataportal.htm",
   "label": "NYS Tax Department: Municipal Profiles / Municipal Data Portal (assessor contact and taxable status date for every city, town and village)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.tax.ny.gov/research/property/directory.htm",
   "note": "Browse by county or municipality on the map or use the search icon; the profile lists the assessor, taxable status date and which exemptions the municipality has adopted. The legacy MuniPro host orps1.orpts.ny.gov did not respond on 2026-10-21 and is not included."
  },
  "forms": [
   {
    "programRef": "Alternative Veterans Property Tax Exemption",
    "name": "Application for Alternative Veterans and Veterans with a Permanent and Total Disability Exemptions from Real Property Taxation",
    "number": "RP-458-a",
    "url": "https://www.tax.ny.gov/pdf/current_forms/orpts/rp458a_fill_in.pdf",
    "revision": "9/26",
    "filedWith": "city/town assessor (and village assessor if the village assesses)"
   },
   {
    "programRef": "Full Exemption for 100% P&T Disabled Veterans (RPTL 458-a(11), NEW 2026)",
    "name": "Application for Alternative Veterans and Veterans with a Permanent and Total Disability Exemptions from Real Property Taxation (same form; Line 8/Line 10 cover the full exemption)",
    "number": "RP-458-a",
    "url": "https://www.tax.ny.gov/pdf/current_forms/orpts/rp458a_fill_in.pdf",
    "revision": "9/26",
    "filedWith": "city/town assessor (and village assessor if the village assesses)"
   },
   {
    "programRef": "Alternative Veterans Property Tax Exemption",
    "name": "Instructions for Form RP-458-a",
    "number": "RP-458-a-I",
    "url": "https://www.tax.ny.gov/pdf/current_forms/orpts/rp458ai.pdf",
    "revision": "9/26",
    "filedWith": null
   },
   {
    "programRef": "Alternative Veterans Property Tax Exemption",
    "name": "Renewal Application for Alternative Veterans Exemption from Real Property Taxation Based on Change in Service-Connected Disability Compensation Rating",
    "number": "RP-458-a-Dis",
    "url": "https://www.tax.ny.gov/pdf/current_forms/orpts/rp458adis_fill_in.pdf",
    "revision": "1/16",
    "filedWith": "assessor (both village and town assessors where the village assesses)"
   },
   {
    "programRef": "Cold War Veterans Property Tax Exemption",
    "name": "Application for Cold War Veterans Exemption from Real Property Taxation",
    "number": "RP-458-b",
    "url": "https://www.tax.ny.gov/pdf/current_forms/orpts/rp458b_fill_in.pdf",
    "revision": null,
    "filedWith": "city/town assessor"
   },
   {
    "programRef": "Cold War Veterans Property Tax Exemption",
    "name": "Renewal Application for Cold War Veterans Exemption Based on Change in Service-Connected Disability Compensation Rating",
    "number": "RP-458-b-Dis",
    "url": "https://www.tax.ny.gov/pdf/current_forms/orpts/rp458bdis_fill_in.pdf",
    "revision": null,
    "filedWith": "city/town assessor"
   },
   {
    "programRef": "Eligible Funds Veterans Property Tax Exemption",
    "name": "Application for Veterans Exemption from Real Property Taxation (eligible funds, RPTL 458)",
    "number": "RP-458",
    "url": "https://www.tax.ny.gov/pdf/current_forms/orpts/rp458_fill_in.pdf",
    "revision": null,
    "filedWith": "city/town assessor"
   }
  ],
  "deadline": {
   "type": "taxable-status-date",
   "date": "03-01",
   "text": "RP-458-a-I (9/26): \"The application must be filed on or before taxable status date. Taxable status date for most towns is March 1. In Nassau County, the taxable status date for towns is January 2. Westchester County towns have either a May 1, or June 1 taxable status date\"; most assessing villages January 1; cities per charter; New York City applications \"filed on or before March 15.\" Look up your municipality in Municipal Profiles."
  },
  "effective": "Exemption first appears on the assessment roll whose taxable status date follows a timely filing, so it reduces the school bill issued that fall and the county/town bill the following January (most March 1 towns). The 458-a(11) full exemption first applies to assessment rolls based on taxable status dates on or after October 1, 2026, and only where the municipality or school district has adopted it.",
  "lateFiling": "No statutory late-filing or hardship extension for veterans exemptions; an application received after the taxable status date is held for the next roll. RPTL 458-a(3) requires filing \"on or before the appropriate taxable status date.\"",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No refund for years the exemption was not applied for; exemptions attach prospectively to the next assessment roll."
  },
  "renewal": {
   "type": "on-change",
   "text": "RPTL 458-a(3): once granted the exemption \"shall continue in full force and effect for all appropriate subsequent tax years\" and owners \"shall not be required to refile each year.\" Refile by the taxable status date if the disability percentage changes (Form RP-458-a-Dis) or if you move (new RP-458-a)."
  },
  "ratingChange": "Any increase or decrease in the VA service-connected rating must be reported on Form RP-458-a-Dis (Cold War: RP-458-b-Dis), filed with the assessor \"prior to taxable status date in order for the exemption to be properly adjusted,\" attaching written evidence of the new rating. A veteran newly documented as permanently and totally disabled files a new RP-458-a to claim the 458-a(11) full exemption where offered.",
  "move": "File a new RP-458-a with the new municipality's assessor by its taxable status date. Where the municipality has adopted the RPTL 458-a(8) local option, a veteran who sells and buys within the same county (or city/town/village) may have the former exemption transferred and prorated for the rest of the fiscal year from the date title is obtained, but must still reapply by the following taxable status date.",
  "onlineFiling": {
   "available": null,
   "text": "No statewide e-file; forms are PDFs filed with the local assessor. Some municipalities (e.g. NYC Department of Finance) offer their own online submission."
  },
  "documents": [
   "DD-214 (or other discharge/separation papers) showing discharge or release under honorable conditions; or a NYS Department of Veterans' Services letter that the veteran meets the Restoration of Honor Act character-of-discharge criteria",
   "Proof of dates and places of active service and, if claimed, proof of wartime service, expeditionary medal, or combat-zone service (if not shown on the DD-214)",
   "Career members with no DD-214: reenlistment documents or chain-of-command statement showing completion of the initial contract and at least 10 years' service",
   "VA documentation of the service-connected disability rating (for the disability component); for the 458-a(11) full exemption, VA documentation that must \"specifically\" state the veteran is permanently and totally disabled as a result of service",
   "Proof of ownership and primary residence (deed; the form asks for date of purchase and tax map section/block/lot)",
   "Surviving spouse: veteran's death certificate and proof the spouse has not remarried"
  ],
  "survivingSpouse": "The unremarried surviving spouse of a qualifying veteran may receive the alternative exemption (and, where adopted, the 458-a(11) full exemption) on the primary residence; a surviving spouse who is also a veteran may claim the deceased spouse's entitlement. Gold Star parents at local option. RP-458-a-Dis asks for the veteran's rating at date of death.",
  "appeal": "A denial is contested through the ordinary assessment grievance: file Form RP-524 with the Board of Assessment Review on or before Grievance Day (the fourth Tuesday in May in most towns), then Small Claims Assessment Review or an RPTL Article 7 proceeding (per the Tax Department's 'Contest your assessment' guidance, not re-read for this record).",
  "statute": "RPTL 458-a (alternative veterans; subd. 11 full exemption for permanently and totally disabled veterans, added L.2025 ch.672, amended L.2026 ch.77 and L.2026 ch.59 Part EE); RPTL 458-b (Cold War); RPTL 458 (eligible funds)",
  "sourceUrls": [
   {
    "url": "https://www.tax.ny.gov/pit/property/exemption/vetexempt.htm",
    "title": "NYS Tax Dept: Veterans exemptions overview (lists 458-a(11) as local option, rolls with taxable status dates on/after Oct 1, 2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.ny.gov/pit/property/exemption/altvetoverview.htm",
    "title": "NYS Tax Dept: Alternative veterans exemption and Veterans with a permanent and total disability exemption (updated Oct 9, 2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.ny.gov/pdf/current_forms/orpts/rp458a_fill_in.pdf",
    "title": "Form RP-458-a (9/26)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.ny.gov/pdf/current_forms/orpts/rp458ai.pdf",
    "title": "Form RP-458-a-I Instructions (9/26): taxable status dates, 458-a(11) eligibility and documentation",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.ny.gov/pdf/current_forms/orpts/rp458adis_fill_in.pdf",
    "title": "Form RP-458-a-Dis (1/16)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.ny.gov/pdf/publications/orpts/pub1093.pdf",
    "title": "Publication 1093 Veterans Exemption Q&A (9/24)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.ny.gov/forms/orpts/exemption.htm",
    "title": "ORPTS Exemption forms index (RP-458 series)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.ny.gov/research/property/acw/2026/02232026.htm",
    "title": "Assessment Community Weekly 02/23/2026: Chapter 77 of 2026 signed Feb 13; delays 458-a(11) to rolls with taxable status dates on/after Oct 1, 2026",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.ny.gov/research/property/acw/2026/06012026.htm",
    "title": "Assessment Community Weekly 06/01/2026: 2026-27 budget (S.9009-C Part EE) amends 458-a(11) to a full exemption at local option",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.nysenate.gov/legislation/laws/RPT/458-A",
    "title": "RPTL 458-a current text (subd. 3 filing/continuation, subd. 8 transfer on move, subd. 11 local-option full exemption)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.ny.gov/pit/property/munidataportal.htm",
    "title": "Municipal Profiles / Municipal Data Portal",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.ny.gov/pit/property/exemption/vetexemptproof.htm",
    "title": "NYS Tax Dept: Proof of eligibility for veterans exemptions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "Full Exemption for 100% P&T Disabled Veterans (RPTL 458-a(11), NEW 2026).summary / details and propertyTax.note",
    "issue": "Row says the exemption is 'now MANDATORY STATEWIDE' and that 'no city, town, county or school district can decline it.' That was true only between Feb 13, 2026 (ch.77) and the 2026-27 state budget: L.2026 ch.59 Part EE (S.9009-C) re-amended subdivision 11 so the full exemption is again a LOCAL OPTION that each county, city, town, village and school district must adopt by local law or resolution (and notify the Dept of Veterans' Services within 30 days). The Tax Department's veterans pages (updated Oct 2026) and the current statute text both say 'may adopt' / 'local option.' Effective-roll language (taxable status dates on/after Oct 1, 2026) is still correct. Also the exemption uses the VA 'permanently and totally disabled' standard, not literally '100%'; the 9/26 RP-458-a is the application form (no separate form).",
    "source": "https://www.tax.ny.gov/research/property/acw/2026/06012026.htm"
   },
   {
    "field": "Alternative Veterans Property Tax Exemption.survivingSpouse and Cold War Veterans Property Tax Exemption.survivingSpouse",
    "issue": "Rows show false; RPTL 458-a and RP-458-a extend the exemption to the unremarried surviving spouse.",
    "source": "https://www.nysenate.gov/legislation/laws/RPT/458-A"
   }
  ],
  "notes": "Whether TDIU-based P&T qualifies for 458-a(11) remains unaddressed in RP-458-a-I; the instructions only require VA documentation that 'specifically' states permanent and total disability. NYC Department of Finance veterans page returned 403/404 to automated checks and is omitted. The RP-458-b, RP-458-b-Dis and RP-458 revision dates were not read (links verified 200 only). Appeal paragraph is from general knowledge of the RP-524 grievance process, not re-verified for this record."
 },
 "OH": {
  "state": "OH",
  "officeType": "county auditor",
  "officeTypeNote": "File with the COUNTY AUDITOR of the county where the home is located (R.C. 323.153(A)). The county treasurer collects the bill and does not take applications. Most auditors require a mailed or in-person original (wet-signature) form.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": "No state-hosted directory; the Ohio Department of Taxation's 'Links to Other Government Agencies' page points to the County Auditors' Association of Ohio directory of all 88 auditors",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://tax.ohio.gov/government/other-agency-contacts",
   "note": "The Department of Taxation real property page is https://tax.ohio.gov/individual/resources/real-property. The 88-county auditor directory the Department links to is maintained by the County Auditors' Association of Ohio (caao.org), an association site, so it is not listed as a tier-1 state directory."
  },
  "forms": [
   {
    "programRef": "Disabled Veteran Homestead Exemption",
    "name": "Homestead Exemption Application for Disabled Veterans and Surviving Spouses",
    "number": "DTE 105I",
    "url": "https://dam.assets.ohio.gov/image/upload/tax.ohio.gov/forms/real_property/DTE_105I.pdf",
    "revision": "10/19",
    "filedWith": "county auditor"
   },
   {
    "programRef": "Disabled Veteran Homestead Exemption",
    "name": "Addendum to the Homestead Exemption Application for Senior Citizens, Disabled Persons and Surviving Spouses (continuing eligibility after a move)",
    "number": "DTE 105G",
    "url": "https://dam.assets.ohio.gov/image/upload/tax.ohio.gov/forms/real_property/DTE_DTE105G_FI.pdf",
    "revision": "11/13",
    "filedWith": "county auditor (with the new DTE 105I)"
   },
   {
    "programRef": "Disabled Veteran Homestead Exemption",
    "name": "Homestead Exemption and Owner-Occupancy Reduction Complaint (appeal of denial)",
    "number": "DTE 106B",
    "url": "https://dam.assets.ohio.gov/image/upload/tax.ohio.gov/forms/real_property/DTE_106B.pdf",
    "revision": null,
    "filedWith": "county auditor as secretary of the Board of Revision"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "12-31",
   "text": "DTE 105I: \"Real property and manufactured or mobile homes: File with the county auditor on or before December 31.\" R.C. 323.153: original and late applications must be \"filed on or before the thirty-first day of December of the year for which the reduction is sought.\" The applicant must own and occupy the home and be 100% disabled (or paid at 100% for IU) on January 1 of that year."
  },
  "effective": "Reduces the tax year's bill (payable the following calendar year) for the year in which the application is filed by December 31, provided eligibility existed on January 1. Manufactured homes: applies to the following year.",
  "lateFiling": "R.C. 323.153 / DTE 105I: \"A late application for a tax reduction for the year preceding the year in which an original application is filed\" may be filed with the current application by checking the Late application for prior year box, \"only ... for the same property for which you are filing a current application.\" Reaches one prior year only.",
  "retroactivity": {
   "type": "fixed",
   "years": 1,
   "text": "One prior year via the late-application box on DTE 105I filed together with a current application; nothing earlier."
  },
  "renewal": {
   "type": "none",
   "text": "R.C. 323.153: an approved application \"constitutes a continuing application for a reduction in taxes\" in subsequent years; no annual refiling. The owner must notify the auditor on ceasing to qualify. No income test for the disabled-veteran exemption."
  },
  "ratingChange": "Eligibility requires a VA total (100%) disability rating or 100% compensation based on individual unemployability for service-connected disability as of January 1. A veteran newly rated 100% files DTE 105I by December 31 of that year with the VA award letter. If the rating is reduced below 100% the owner must notify the county auditor (no longer qualified for the enhanced exemption; may still qualify for the standard age/disability homestead exemption with DTE 105A).",
  "move": "The exemption attaches to the homestead; on moving within Ohio, file a new DTE 105I with the new county auditor by December 31 (eligibility measured January 1 of that year), attaching DTE 105G (continuing-eligibility addendum) if you had the exemption on the prior home.",
  "onlineFiling": {
   "available": null,
   "text": "No state portal; county auditors generally require a mailed or in-person original signature on DTE 105I (several counties state scanned/emailed copies are not accepted). A few auditors offer their own online homestead filing."
  },
  "documents": [
   "DD-214 showing discharge or release under honorable conditions",
   "VA award letter showing a 100% disability rating; or, for IU cases, the award letter showing compensation at 100% plus the document approving individual unemployability",
   "Proof of eligible ownership interest if title is held in a trust, life estate, land installment contract, or housing cooperative (DTE 105I ownership section; DTE 105A supplement for co-ops)",
   "Surviving spouse: proof the veteran was receiving (or qualified for) the exemption in the year of death and that the spouse occupied the home at death and acquired ownership"
  ],
  "survivingSpouse": "Surviving spouse qualifies if the veteran was receiving the exemption (or qualified for it) for the year of death, the spouse occupied the homestead at the veteran's death, and acquires ownership or continues to occupy (co-op). No age or income test. Eligibility continues \"until the year following the year in which the surviving spouse remarries\" (DTE 105I).",
  "appeal": "A denial may be contested with Form DTE 106B filed with the county auditor as secretary of the Board of Revision \"not later than sixty days after notification of the decision\" (R.C. 323.154), then to the Board of Tax Appeals.",
  "statute": "R.C. 323.151 (definitions; disabled veteran enhanced exemption amount, indexed), 323.152(A)(1)(b), 323.153 (application, Dec 31 deadline, late application, continuing application), 323.154 (denial and appeal)",
  "sourceUrls": [
   {
    "url": "https://codes.ohio.gov/ohio-revised-code/section-323.153",
    "title": "R.C. 323.153 Application for reduction in real property taxes (eff. Sept 30, 2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://codes.ohio.gov/ohio-revised-code/section-323.151",
    "title": "R.C. 323.151 Homestead exemption definitions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dam.assets.ohio.gov/image/upload/tax.ohio.gov/forms/real_property/DTE_105I.pdf",
    "title": "Form DTE 105I Homestead Exemption Application for Disabled Veterans and Surviving Spouses (Rev. 10/19)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dam.assets.ohio.gov/image/upload/tax.ohio.gov/forms/real_property/DTE_105A.pdf",
    "title": "Form DTE 105A Homestead Exemption Application (standard)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dam.assets.ohio.gov/image/upload/tax.ohio.gov/forms/real_property/DTE_DTE105G_FI.pdf",
    "title": "Form DTE 105G Addendum (continuing eligibility after move)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dam.assets.ohio.gov/image/upload/tax.ohio.gov/forms/real_property/DTE_106B.pdf",
    "title": "Form DTE 106B Homestead Exemption Complaint (R.C. 323.154 appeal)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.ohio.gov/help-center/faqs/real-property-tax-homestead-means-testing",
    "title": "Ohio Dept of Taxation FAQ: Real Property Tax - Homestead Means Testing",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.ohio.gov/individual/resources/real-property",
    "title": "Ohio Dept of Taxation: Real Property (individuals)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.ohio.gov/government/other-agency-contacts",
    "title": "Ohio Dept of Taxation: Links to Other Government Agencies (County Auditors directory link)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [],
  "notes": "DTE 105I Rev. 10/19 still prints the pre-indexing $50,000 figure; the indexed amount (row says $58,000 for TY2026) comes from R.C. 323.151 as amended and was not re-verified here. tax.ohio.gov/static form links 301-redirect to dam.assets.ohio.gov; the final URLs are recorded. The Homestead Means Testing FAQ returned 200 to curl but could not be parsed by the fetch tool, so its wording is not quoted. DTE 105G revision (11/13) predates the 2019 forms; confirm the auditor still accepts it."
 },
 "OK": {
  "state": "OK",
  "officeType": "county assessor",
  "officeTypeNote": "Apply at the county assessor's office in the county where the homestead is located (OAC 710:10-14-5). The county treasurer only collects. The Oklahoma Tax Commission prescribes the forms but does not take applications.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": "No state-hosted assessor directory; the OTC Ad Valorem page links to the County Assessors Association of Oklahoma contact list",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://oklahoma.gov/tax/ad-valorem.html",
   "note": "OTC Ad Valorem Division page links 'Oklahoma County Assessor Contacts' at caaok.org (an association site, not oklahoma.gov). Many counties also use the okcounties.org portal (e.g. <county>.okcounties.org/offices/county-assessor)."
  },
  "forms": [
   {
    "programRef": "Veteran Exemption",
    "name": "Application for 100% Disabled Veterans Real Property Tax Exemption",
    "number": "OTC 998",
    "url": "https://oklahoma.gov/content/dam/ok/en/tax/documents/forms/ad-valorem/current/998.pdf",
    "revision": "11-2025 (tax year 2026)",
    "filedWith": "county assessor"
   },
   {
    "programRef": "Veteran Exemption",
    "name": "Application for 100% Disabled Veterans Exemption Acquired Homestead Property (transfer to a new home)",
    "number": "OTC 998-B",
    "url": "https://oklahoma.gov/content/dam/ok/en/tax/documents/forms/ad-valorem/current/998-B.pdf",
    "revision": "11-2025 (tax year 2026)",
    "filedWith": "county assessor"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "03-15",
   "text": "OAC 710:10-14-5(a): \"The application should be made between January 1 and March 15th in the same manner as for homestead exemptions. However, if the county assessor becomes aware of an otherwise-qualified applicant at any time during the current tax year, the county assessor may ... make the appropriate adjustment.\" Form 998: must own and occupy on January 1 and have the deed recorded with the County Clerk by February 1 of the first exemption year."
  },
  "effective": "Exempts the full fair cash value of the homestead for the tax year of application. OAC 710:10-14-5(a): if the 100% rating is \"effective on or before the date of application, the property is exempt for the entire year regardless of the status of disability on January 1\"; applicants discovered after the tax roll is certified get a tax roll correction under 68 O.S. 2871(C)(2) (Board of Tax Roll Corrections after the Board of Equalization adjourns).",
  "lateFiling": "Within the current tax year the assessor may still grant the exemption (and correct the roll) at any time; after the year closes nothing can be done. OAC 710:10-14-5(c): \"The exemption application must be filed in the year requested. Filing for previous years is prohibited pursuant to Oklahoma Constitution Article 10 § 22A.\"",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "Filing for previous years is prohibited by Okla. Const. art. 10, § 22A (OAC 710:10-14-5(c))."
  },
  "renewal": {
   "type": "none",
   "text": "OAC 710:10-14-8: the exemption \"is valid on the property as long as the taxpayer or surviving spouse owns and occupies the property and remains eligible for homestead exemption.\" No annual refiling; the assessor may request documentation \"any time in subsequent years\" (710:10-14-6)."
  },
  "ratingChange": "OAC 710:10-14-5(a): if the VA reduces the rating below 100%, \"the veteran shall immediately notify the county assessor of the change in status. Failure to do so will result in loss of any future homestead exemption pursuant to 68 O.S. §§ 2892(K) and 2900.\" A veteran newly rated 100% P&T (or paid at the 100% rate) applies on Form 998 with the current VA benefits award letter; the exemption covers the whole year if the rating is effective on or before the application date.",
  "move": "File Form 998-B with the new county's assessor. OAC 710:10-14-5(b): \"Beginning with the month the deed instrument is filed of public record and the application is approved the homestead property will be exempt to the same extent as the homestead property previously owned\" for that year and each year thereafter.",
  "onlineFiling": {
   "available": null,
   "text": "Forms are OTC PDFs filed with the county assessor; some assessors (e.g. Oklahoma County, Tulsa County) accept online or emailed submission of Form 998."
  },
  "documents": [
   "Current VA benefits award letter (or the VA document issued specifically for this exemption) certifying 100% permanent service-connected disability, or receipt of compensation at the 100% rate; the Oklahoma Dept of Veterans Affairs issues an eligibility letter many assessors ask for",
   "Proof of honorable discharge (DD-214) and Oklahoma residency (e.g. Oklahoma driver license), which the assessor may request under OAC 710:10-14-6",
   "Deed or other evidence of ownership recorded with the County Clerk by February 1 of the first exemption year",
   "Existing or concurrent homestead exemption (Form 921) on the property, since the veteran must qualify for homestead exemption",
   "Surviving spouse: VA certification as surviving spouse of a 100% compensated veteran"
  ],
  "survivingSpouse": "Okla. Const. art. 10, § 8E extends the full exemption to the surviving spouse of a qualifying veteran; Form 998 Part Three asks whether the applicant is \"the surviving spouse of such 100% compensated veteran.\" The spouse must continue to own and occupy the homestead; remarriage ends eligibility (per OTC/assessor guidance; the constitutional text itself does not state a remarriage rule).",
  "appeal": "OAC 710:10-14-7: \"The taxpayer may appeal any denial of the exemption application by the county assessor to the county board of equalization in the same manner as an appeal of the denial of a homestead exemption. [See: 68 O.S. § 2895]\"",
  "statute": "Okla. Const. art. 10, § 8E (adopted SQ 715, Nov 2, 2004); 68 O.S. § 2888 (homestead definition, incl. improvements on city-held land); 68 O.S. §§ 2892-2895 (homestead application, continuation, appeal); OAC 710:10-14-1 through 710:10-14-8",
  "sourceUrls": [
   {
    "url": "https://oklahoma.gov/content/dam/ok/en/tax/documents/forms/ad-valorem/current/998.pdf",
    "title": "OTC Form 998 Application for 100% Disabled Veterans Real Property Tax Exemption (Rev. 11-2025) with Const. art. 10 § 8E text",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://oklahoma.gov/content/dam/ok/en/tax/documents/forms/ad-valorem/current/998-B.pdf",
    "title": "OTC Form 998-B Acquired Homestead Property (Rev. 11-2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://oklahoma.gov/content/dam/ok/en/tax/documents/resources/rules-and-policies/agency-rules/2026/Chapter_10_Ad_Valorem_2026.pdf",
    "title": "OAC Title 710 Chapter 10 Ad Valorem (2026), Subchapter 14: 100% Disabled Veterans Exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://oklahoma.gov/tax/ad-valorem.html",
    "title": "Oklahoma Tax Commission: Ad Valorem Division",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://oklahoma.gov/tax/individuals/exemptions.html",
    "title": "Oklahoma Tax Commission: Exemptions (individuals)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://oklahoma.gov/tax/helpcenter/exemptions.html",
    "title": "OTC Help Center: Exemptions (DAV sales tax exemption; property exemption handled by county assessors)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [],
  "notes": "The remarriage rule for surviving spouses is not in the constitutional text printed on Form 998; it is stated on OTC/assessor guidance and was not independently verified here. Official statute text for 68 O.S. 2892-2895 was not opened (oscn.net not fetched); references come from the OAC rule citations. The OTC exemptions page (oklahoma.gov/tax/individuals/exemptions.html) was link-verified only."
 },
 "OR": {
  "state": "OR",
  "officeType": "county assessor",
  "officeTypeNote": "File with the assessor of the county where the home is located (the county tax collector only bills). Oregon has no state-level filing; the Department of Revenue prescribes the form and publishes the rules.",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.oregon.gov/dor/programs/property/Pages/county-contact.aspx",
   "label": "Oregon Department of Revenue: County assessor and tax collector contact information (all 36 counties)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.oregon.gov/dor/programs/property/Pages/exemptions.aspx",
   "note": "Single DOR page listing each county's assessor office; no per-county DOR sub-pages."
  },
  "forms": [
   {
    "programRef": "Veteran Exemption",
    "name": "Disabled Veteran or Surviving Spouse Exemption Claim (includes Physician's Certificate page)",
    "number": "150-303-086",
    "url": "https://www.oregon.gov/dor/forms/FormsPubs/veteran-exemption-claim_303-086.pdf",
    "revision": "02-29-24",
    "filedWith": "county assessor"
   },
   {
    "programRef": "Veteran Exemption",
    "name": "Disabled Veteran or Surviving Spouse Property Tax Exemption (DOR publication explaining eligibility, due dates, late filing, documents)",
    "number": "150-310-676",
    "url": "https://www.oregon.gov/dor/forms/FormsPubs/veteran-spouse-exemption_310-676.pdf",
    "revision": "11-07-25 (January 2026 edition)",
    "filedWith": null
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-01",
   "text": "Pub 150-310-676: \"File your claim, with attached documentation, on or before April 1 preceding the tax year for which you're claiming the exemption.\" \"If you acquire property after March 1 and before July 1, file your claim ... within 30 days after the date of acquisition.\" You must own and live in the home before July 1 to qualify for the tax year beginning July 1."
  },
  "effective": "Applies to the tax year beginning July 1 after a timely April 1 (or 30-day post-acquisition) filing; appears on the October tax statement. If you sell before July 1 the property is disqualified for that tax year.",
  "lateFiling": "Physician-certified veterans who received the exemption the prior year and are notified by the assessor that no new claim was filed may file \"no later than May 1\" with a $10 late fee. Late VA certification: a veteran notified of a qualifying 40%+ rating effective as of a prior date may file \"within six months of the date the federal government notifies you\" and claim prior tax years, but \"not ... more than three tax years prior to the tax year during which you file your claim.\" No other late-filing provision.",
  "retroactivity": {
   "type": "fixed",
   "years": 3,
   "text": "Only in the late-VA-certification case: claim filed within six months of the VA notice can reach back up to three prior tax years, each of which must begin after the certified disability date (ORS 307.260 as described in DOR Pub 150-310-676)."
  },
  "renewal": {
   "type": "on-change",
   "text": "VA- or Armed-Forces-certified veterans and surviving spouses \"don't have to file a claim every year\"; a new claim is required by April 1 \"if there are changes in ownership or use of your homestead property\" (e.g., transfer to a trust or life estate, adding/removing owners). Veterans certified by an independent licensed physician must file every year by April 1 with a physician's certificate dated within one year and meet the 185%-of-poverty income test."
  },
  "ratingChange": "The VA/Armed Forces disability certificate attached to a claim \"must be dated within three years prior to the date of your claim\"; once filed after age 65 or with a permanent-disability certification it need not be re-attached. If the rating falls below 40 percent, contact the county assessor (exemption ends). A rating increase to 40%+ service-connected triggers the larger exemption amount with a new claim.",
  "move": "\"This property tax exemption isn't 'automatic' and doesn't transfer from one property to another. If you buy and move to a different home, you need to file a new claim form for your new home\" (by April 1, or within 30 days if acquired March 1 to July 1).",
  "onlineFiling": {
   "available": false,
   "text": "Form is a fillable PDF filed with the county assessor (mail or in person); some counties accept email. No state portal."
  },
  "documents": [
   "DD-214 or other military-issued documentation showing discharge or release under honorable conditions and the period of active service",
   "Disability certificate from the VA or a branch of the Armed Forces showing 40 percent or more disability (dated within three years of the claim), or an independent licensed physician's certificate (page 3 of the form, dated within one year; annual refiling and income limit apply)",
   "Proof of ownership/occupancy of the homestead (recorded contract of purchase or life estate counts as ownership); revocable trust documentation if held in trust",
   "Surviving spouse/partner: veteran's DD-214, death certificate, and marriage certificate or certificate of registered domestic partnership"
  ],
  "survivingSpouse": "Surviving spouse or registered domestic partner of a qualifying veteran who has not remarried or re-partnered qualifies, even if the veteran was not disabled or never claimed; receives the larger ($32,512 for 2026-27) amount if the veteran died of service-connected injury/illness or had received at least one year of the maximum exemption. A surviving spouse of a veteran who died during the prior tax year (or within 30 days of acquiring the home) may elect to continue the existing exemption by notifying the assessor without a new claim. Remarriage disqualifies.",
  "appeal": "Denial of an exemption claim by the county assessor is appealed to the Oregon Tax Court Magistrate Division (per the DOR exemptions page framework; not re-verified for this record).",
  "statute": "ORS 307.250 to 307.283 (disabled veteran / surviving spouse exemption; ORS 307.260 claim procedure and late filing); ORS 307.286 to 307.289 (reserve component / active duty exemption, separate form)",
  "sourceUrls": [
   {
    "url": "https://www.oregon.gov/dor/forms/FormsPubs/veteran-exemption-claim_303-086.pdf",
    "title": "Form 150-303-086 Disabled Veteran or Surviving Spouse Exemption Claim (Rev. 02-29-24) with instructions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.oregon.gov/dor/forms/FormsPubs/veteran-spouse-exemption_310-676.pdf",
    "title": "Pub 150-310-676 Disabled Veteran or Surviving Spouse Property Tax Exemption (Rev. 11-07-25)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.oregon.gov/dor/programs/property/pages/exemptions.aspx",
    "title": "Oregon DOR: Property tax exemptions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.oregon.gov/dor/programs/property/Pages/county-contact.aspx",
    "title": "Oregon DOR: County assessor contact information",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.oregon.gov/odva/benefits/pages/taxes.aspx",
    "title": "Oregon Department of Veterans' Affairs: Taxes (property tax exemption overview)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "Veteran Exemption.survivingSpouse",
    "issue": "Row shows false; ORS 307.250 and DOR Pub 150-310-676 extend the exemption to the un-remarried surviving spouse or registered domestic partner of a qualifying veteran, with the larger amount in service-connected death cases.",
    "source": "https://www.oregon.gov/dor/forms/FormsPubs/veteran-spouse-exemption_310-676.pdf"
   }
  ],
  "notes": "The official ORS text host (oregonlegislature.gov) did not respond to automated requests on 2026-10-21, so statutory wording is taken from the Department of Revenue's form and publication, which paraphrase ORS 307.260. The Reserve Component (active-duty) exemption under ORS 307.286 uses a different DOR form (150-303-084) that was not researched here. Appeal path not re-verified."
 },
 "PA": {
  "state": "PA",
  "officeType": "County Director of Veterans Affairs (application intake) -> State Veterans' Commission (need determination) -> county Board for the Assessment and Revision of Taxes (grants exemption)",
  "officeTypeNote": "Pennsylvania's exemption is need-based and state-adjudicated. The veteran starts with the County Director of Veterans Affairs in the county of residence, who assembles the package. Form MA-VA 41 is date-stamped by the county Tax Assessment Office; the notarized MA-VA 40 (or 40ss for a surviving spouse) with the MA-VA 41 receipt goes to the State Veterans' Commission (DMVA Bureau of Veterans Programs), which certifies need; the county assessment board then grants the exemption and notifies all taxing bodies and collectors (51 Pa.C.S. § 8903).",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.pa.gov/agencies/dmva/pennsylvania-veterans/county-director-of-veterans-affairs",
   "label": "PA DMVA: County Directors of Veterans Affairs (all 67 counties; links the MA-VA 400 directory PDF)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.pa.gov/agencies/dmva/pennsylvania-veterans/pa-vetconnect/state-veterans-programs/financial-assistance/retx",
   "note": "Current directory PDF: https://www.pa.gov/content/dam/copapwp-pagov/en/dmva/documents/veteransaffairs/documents/ma-va%20400%20county%20directors%2005.01.2026.pdf (County Directors of Veterans Affairs as of 05/01/2026). Program questions: Ra-retx@pa.gov."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Application for Determination of Need (veteran) / MA-VA 40ss (surviving spouse); notarized",
    "number": "MA-VA 40 / MA-VA 40ss",
    "url": null,
    "revision": null,
    "filedWith": "State Veterans' Commission via the County Director of Veterans Affairs"
   },
   {
    "programRef": "*",
    "name": "Information Needed by County Tax Assessment Office for Disabled Veterans Property Tax Exemption (three copies; assessment office returns two date-stamped)",
    "number": "MA-VA 41",
    "url": null,
    "revision": null,
    "filedWith": "county Tax Assessment Office"
   },
   {
    "programRef": "*",
    "name": "Periodic review form sent by the Commission to current recipients",
    "number": "MA-VA 40A",
    "url": null,
    "revision": null,
    "filedWith": "State Veterans' Commission"
   }
  ],
  "deadline": {
   "type": "rolling",
   "date": null,
   "text": "No filing deadline; apply any time through the County Director of Veterans Affairs. 43 Pa. Code § 5.25: the exemption covers taxes becoming due on or after the filing date, and \"Applications filed after the commencement of a period shall apply to the next tax period.\" Filing early in the year (before county/municipal and school taxes are assessed) matters."
  },
  "effective": "43 Pa. Code § 5.25(a): exemption applies to real property taxes that become due on or after the date the applicant first files a written request; \"Requests are considered filed on the date received\" even if documentation is incomplete; taxes \"become due on the date when the taxes are assessed,\" not the billing date, so a request filed after a tax period began applies to the next period.",
  "lateFiling": "n/a (rolling). Statute enacted 1988 retroactive to Jan 1, 1988; no provision for filing for earlier periods.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No refunds for periods before the written request was received (43 Pa. Code § 5.25)."
  },
  "renewal": {
   "type": "none",
   "text": "No annual refiling, but the Commission re-examines need: 51 Pa.C.S. § 8904(3) requires review \"at least once every five years\"; 43 Pa. Code § 5.26 describes review at two-year intervals by letter with Form MA-VA 40A, evaluated like the original application, with findings forwarded to the taxing body. Recipients must report changes in income, ownership or residence."
  },
  "ratingChange": "Qualifying disability is a VA rating of total or 100% permanent service-connected disability (DMVA accepts TDIU rated permanent), or service-connected blindness, paraplegia, or loss of two or more limbs, plus wartime service (campaign/expeditionary medal qualifies). A veteran newly rated 100% P&T applies through the County Director; a rating reduction below the standard ends eligibility and must be reported. Previously denied applicants (on need) are encouraged to reapply.",
  "move": "The exemption is tied to the principal dwelling owned solely, with spouse, or as tenants by the entireties; on moving, a new MA-VA 41 is filed with the new county's assessment office and the Commission re-certifies for the new parcel. Not spelled out in the regulation beyond the ownership/occupancy requirement; confirm with the County Director.",
  "onlineFiling": {
   "available": false,
   "text": "Paper, notarized application assembled by the County Director of Veterans Affairs; DMVA warns not to email completed applications or personal information."
  },
  "documents": [
   "DD-214 or discharge documents showing honorable (or under honorable conditions) discharge and wartime service or qualifying campaign/expeditionary medal",
   "VA rating decision/benefits letter showing 100% permanent service-connected disability (or TDIU permanent), or VA documentation of service-connected blindness, paraplegia, or loss of two or more limbs; VA Form 3288 (release of information) is commonly required by county directors",
   "Recorded deed showing ownership solely, with spouse, or as tenants by the entireties, and proof the dwelling is the principal residence",
   "Income documentation for all household members and verified household expenses (Commission need test; presumptive need at gross annual income of $114,637 or less, effective Jan 1, 2025)",
   "Surviving spouse (MA-VA 40ss): marriage certificate and veteran's death certificate; must be unmarried"
  ],
  "survivingSpouse": "51 Pa.C.S. § 8902(b): the exemption \"shall be extended to the unmarried surviving spouse upon the death of the eligible veteran provided that the State Veterans' Commission determines that such spouse is in need of an exemption.\" Files Form MA-VA 40ss through the County Director.",
  "appeal": "43 Pa. Code § 5.27 (reconsideration and appeal); 51 Pa.C.S. § 8905: \"Any applicant aggrieved by a determination of the commission may appeal that determination to the Adjutant General under the provisions of Title 2 (relating to administrative law and procedure).\"",
  "statute": "51 Pa.C.S. §§ 8901-8906 (Disabled Veterans' Real Estate Tax Exemption; § 8904 need standard, $75,000 base indexed biennially to CPI and published in the Pennsylvania Bulletin); 43 Pa. Code §§ 5.21-5.27; Pa. Const. art. VIII, § 2(c)",
  "sourceUrls": [
   {
    "url": "https://www.pa.gov/agencies/dmva/pennsylvania-veterans/pa-vetconnect/state-veterans-programs/financial-assistance/retx",
    "title": "PA DMVA: Real Estate Tax Exemption (Disabled Veterans) program page, presumptive need $114,637 eff. Jan 1, 2025",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.palegis.us/statutes/consolidated/view-statute?txtType=HTM&ttl=51&div=0&chapter=89",
    "title": "51 Pa.C.S. Chapter 89 Disabled Veterans' Real Estate Tax Exemption (PA General Assembly)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/043/chapter5/subchapCtoc.html&d=reduce",
    "title": "43 Pa. Code Chapter 5 Subchapter C: Disabled Veterans' Real Estate Tax Exemption Program (table of contents)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/043/chapter5/s5.24.html&d=reduce",
    "title": "43 Pa. Code § 5.24 Processing applications (MA-VA 40/40ss/41)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/043/chapter5/s5.25.html&d=reduce",
    "title": "43 Pa. Code § 5.25 Effective date of exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.pa.gov/agencies/dmva/pennsylvania-veterans/county-director-of-veterans-affairs",
    "title": "PA DMVA: County Director of Veterans Affairs",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.pa.gov/content/dam/copapwp-pagov/en/dmva/documents/veteransaffairs/documents/ma-va%20400%20county%20directors%2005.01.2026.pdf",
    "title": "MA-VA 400 County Directors and Staff directory (05/01/2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [],
  "notes": "Form PDFs for MA-VA 40, 40ss, 41 and 40A are not posted on pa.gov (DMVA directs applicants to the County Director), so form URLs are null; county sites host older copies (e.g. a 2007 MA-VA 40). The regulation's two-year review interval (§ 5.26) differs from the statute's at-least-every-five-years minimum (§ 8904(3)) and from county pages saying every 5 years; recorded as stated. A State Veterans' Commission-discussed constitutional amendment to broaden eligibility (Dec 2025 minutes) was not researched. The statute's chapter 89 PDF link on palegis.us was downloaded and read but is not listed because its URL was not independently HEAD-verified."
 },
 "PR": {
  "state": "PR",
  "officeType": "CRIM (Centro de Recaudación de Ingresos Municipales) regional office",
  "officeTypeNote": "Puerto Rico's property tax is administered island-wide by CRIM, not by the municipality or by Hacienda. The statute directs the 50%+ service-connected filing to 'la Oficina Regional del Centro de Recaudación de Ingresos Municipales correspondiente' (the CRIM regional office for the property). CRIM lists a central office plus regional offices in Aguada, Arecibo, Bayamón, Caguas, Carolina, Humacao, Mayagüez, Ponce and San Juan. Central office: Carretera Estatal #1, km 17.3, San Juan; call center 787-625-CRIM; crimcallcenter@crimpr.net. The live CRIM web domain is crimpr.net (served from portal.crim360.com); crim.pr.gov did not resolve on the check date.",
  "officeLocator": {
   "tier": 1,
   "url": "https://portal.crim360.com/crimpr/CMS/11.html",
   "label": "CRIM: Oficinas (central and regional offices)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://portal.crim360.com/crimpr/index.htm",
   "note": "The Oficinas page lists the ten offices by name; addresses and phones are loaded dynamically and did not render in a plain fetch. Contact page (CMS/13.html) gives the central office address, hours (Mon-Fri 8:00-4:30) and call center."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Exoneración Contributiva para Fines Residenciales / Veteranos (Modelo AS-38)",
    "number": "AS-38",
    "url": "https://portal.crim360.com/crimpr/CMS/DOCUMENTOS/download/166.pdf",
    "revision": "Abril 2018 (Rev.)",
    "filedWith": "CRIM regional office (or electronically through the CRIM taxpayer portal)"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "01-31",
   "text": "AS-38 'Fecha de radicación' sets three timings by tier. (1) Veteranos (regular, $5,000): 'No más tarde del día 1ro de enero del año siguiente a la fecha en que se adquirió o edificó la residencia.' (2) Veteranos incapacitados o con impedimentos (full exemption): 'En o antes del 31 de enero del año que antecede al año fiscal objeto de la solicitud.' (3) 50%+ service-connected ($50,000): 'Anualmente, al momento del pago de la contribución'; once only if the rating is permanent. Occupancy as the veteran's residence is tested 'al 1ro de enero del año contributivo'."
  },
  "effective": "Occupancy and disability rating are measured as of January 1 of the tax year (Ley 203-2007 Art. 4 Sec. C Segundo (c)(2)-(3)). CRIM's fiscal year runs July 1 to June 30; the full disabled-veteran exemption filed by January 31 applies to the following fiscal year per AS-38. The $5,000 exemption, once approved, is retroactive up to three years.",
  "lateFiling": "For the $5,000 veteran exemption, approval is retroactive 'hasta un máximo de tres (3) años' (statute (a)(2); AS-38). AS-38 also describes a late residential exoneration ('Exoneración tardía', Art. 8C) granted retroactively with AAA and AEE service-start certifications plus a sworn statement explaining the delay; that procedure is written for the residential exoneration, not expressly for the veteran tiers.",
  "retroactivity": {
   "type": "fixed",
   "years": 3,
   "text": "Ley 203-2007 Art. 4 Sec. C Segundo (a)(2): 'una vez aprobadas su efecto será retroactivo, hasta un máximo de tres (3) años'. AS-38: 'Su efecto será retroactivo hasta un máximo de tres (3) años.' Applies to the $5,000 all-veterans exemption; the statute is silent on retroactivity for the 50%+ and full-disability tiers."
  },
  "renewal": {
   "type": "varies",
   "text": "50%+ service-connected tier: 'deberá ser reclamada por el interesado anualmente al momento del pago de la contribución', but 'De ser el grado de incapacidad permanente no será necesario que radique una solicitud de exención anual' (file once). The DD-214 need not be re-filed if a copy is left in CRIM's file. The $5,000 exemption is 'permanentemente'; the full disabled-veteran exemption has no annual re-file language and ends when the home stops being the residence."
  },
  "ratingChange": "The partial exemption is set by the disability grade the VA certifies 'al 1ro de enero de cada año'. It 'cesará tan pronto ... su grado de incapacidad se reduzca a menos de cincuenta por ciento (50%)' and is recoverable if the veteran again reaches 50% or more. A rating made permanent lets the veteran stop annual re-filing by filing a VA certification that the grade is permanent.",
  "move": "The exemption 'cesará tan pronto la propiedad deje de ser utilizada como vivienda de él o de su familia inmediata', but 'el derecho a la exención es recobrable' once the veteran rebuilds on the property or 'adquiera otra propiedad y establezca en ella su hogar' (statute (b)(2), (c)(4)(c)). A new AS-38 is filed for the new home; the regular exemption must be requested by January 1 of the year after acquisition.",
  "onlineFiling": {
   "available": true,
   "text": "CRIM's Servicios page lists 'Exoneración contributiva o Exención de veterano' among requests that can be filed electronically after registering for the taxpayer portal (Mi CRIM / Servicios al Contribuyente login). Paper filing at any CRIM regional office remains available."
  },
  "documents": [
   "Modelo AS-38 completed and signed (the owner certifies residence and eligibility on the form)",
   "Evidence of title and possession: escritura pública, Registro de la Propiedad certification, notarized contract, or usufruct/possession document (all tiers)",
   "Military discharge (licenciamiento) from the branch served (regular and 50%+ tiers); a copy may be left on file so it need not be re-presented each year",
   "Evidence of veteran status, DD-214 (regular and 50%+ tiers)",
   "Full-disability tier only: disability determination from the Social Security Administration or the Commonwealth/U.S. retirement systems",
   "50%+ tier only: written certification signed by a VA official of the disability grade as of January 1 of the tax year",
   "50%+ tier only: sworn statement (declaración jurada) that the property was the veteran's or immediate family's residence on January 1 of the tax year",
   "CRIM debt certification (Certificación de deuda, todos los conceptos); any debt must be paid or placed on a payment plan before the exemption is processed (all tiers)",
   "Modelo AS-74 owner-information sheet if the property is held in a pro-indiviso or hereditary community",
   "Death certificate if the applicant is the veteran's widow(er)"
  ],
  "survivingSpouse": "The $5,000 exemption applies to 'todos los veteranos y/o a sus cónyuges supérstites' and is permanent for the surviving spouse's principal residence; AS-38 lists 'Los veteranos y/o sus cónyuges supérstites (viudo/a)' for the regular tier and requires a death certificate. Art. 6 of Ley 203-2007 continues benefits to the surviving spouse until remarriage. The 50%+ tier text (as amended) also references the 'veterano y/o cónyuge supérstite'.",
  "appeal": null,
  "statute": "Ley 203-2007 (Carta de Derechos del Veterano Puertorriqueño del Siglo XXI), Art. 4, Sec. C 'Segundo: Contribución sobre la propiedad', as amended through Ley 145-2026; residential exoneration on the same form: Art. 2.02, Ley 83-1991 (Ley de Contribución Municipal sobre la Propiedad)",
  "sourceUrls": [
   {
    "url": "https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Derechos%20Civiles/203-2007/203-2007.pdf",
    "title": "OGP Biblioteca Virtual: Ley 203-2007 según enmendada (Rev. 03 de agosto de 2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://portal.crim360.com/crimpr/CMS/DOCUMENTOS/download/166.pdf",
    "title": "CRIM Modelo AS-38: Exoneración Contributiva para Fines Residenciales / Veteranos (Rev. Abril 2018), with instructions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://portal.crim360.com/crimpr/index.htm",
    "title": "CRIM home page (crimpr.net redirects here)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://portal.crim360.com/crimpr/CMS/9.html",
    "title": "CRIM Servicios: electronic filing of 'Exoneración contributiva o Exención de veterano'",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://portal.crim360.com/crimpr/CMS/11.html",
    "title": "CRIM Oficinas (central and regional offices)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://portal.crim360.com/crimpr/CMS/13.html",
    "title": "CRIM Contáctenos (central office address, hours, call center)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.opv.pr.gov/",
    "title": "Oficina del Procurador del Veterano (links the Nov 2025 consolidated text of Ley 203-2007)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.elvocero.com/economia/instan-a-veteranos-a-reclamar-exenci-n-contributiva-en-el-crim-antes-del-31-de/article_dab2793d-f6fc-4b8f-a1b1-9b7593ae7c85.html",
    "title": "El Vocero, 22 Jul 2026: Procurador del Veterano urges filing the CRIM exemption before July 31 (secondary; reports an OPV statement)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.primerahora.com/noticias/gobierno-politica/notas/veteranos-ojo-se-acaba-el-tiempo-para-solicitar-esta-exencion-de-vivienda/",
    "title": "Primera Hora, 30 Jul 2026: same OPV deadline notice, lists AS-38 and documents (secondary)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[Veteran Exemption].tiers[minRating 100].value = 'full'",
    "issue": "The full exemption in Ley 203-2007 Art. 4 Sec. C Segundo (b) is for a 'veterano incapacitado o impedido' and is not keyed to a 100% VA rating; CRIM's AS-38 documents it with a Social Security Administration or government retirement-system disability determination, not a VA rating letter. The 50%+ tier is the only one tied to VA compensation. Consider labeling the top tier 'disabled/impaired veteran (SSA or retirement disability determination)' rather than '100% VA'.",
    "source": "https://portal.crim360.com/crimpr/CMS/DOCUMENTOS/download/166.pdf"
   },
   {
    "field": "propertyTax.programs[Veteran Exemption].survivingSpouse",
    "issue": "Set to false, but the $5,000 exemption expressly covers 'veteranos y/o a sus cónyuges supérstites' and AS-38 lists the viudo/a as an eligible applicant for the regular tier. Should be true (at least for the $5,000 tier).",
    "source": "https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Derechos%20Civiles/203-2007/203-2007.pdf"
   },
   {
    "field": "propertyTax.programs[Veteran Exemption].summary",
    "issue": "Dollar amounts ($5,000 / $50,000 / full) match the current statute. The temporary enhanced amounts ($50,000 and $500,000) applied only to fiscal years 2009-10 through 2018-19 and have lapsed; nothing to change, noted so nobody re-imports the lapsed figures.",
    "source": "https://bvirtualogp.pr.gov/ogp/Bvirtual/leyesreferencia/PDF/Derechos%20Civiles/203-2007/203-2007.pdf"
   }
  ],
  "notes": "Deadline conflict to resolve with CRIM: the AS-38 instructions (Rev. Apr 2018) give the tiered dates above, while the Procurador del Veterano's July 2026 public notice (El Vocero 22 Jul 2026, Primera Hora 30 Jul 2026) told veterans to file 'antes del 31 de julio' so the exemption shows on the next fiscal year's bill; no CRIM page states a July 31 date. The AS-38 is the only form found; CRIM's Documentos and Preguntas Frecuentes pages load their content dynamically and did not render, so the current revision could be newer than April 2018. OPV's own consolidated copy of Ley 203-2007 (Rev. Nov 2025) is on a SharePoint link and was not fetched; the OGP compilation (Rev. 3 Aug 2026) was used instead and is labeled by OGP as a non-official compilation. The OGP text in Segundo (b)(1) cites 'Ley del Congreso 06-89 [sic]' for the disabled-veteran definition. No appeal procedure specific to the veteran exemption was found."
 },
 "RI": {
  "state": "RI",
  "officeType": "municipal tax assessor (city or town)",
  "officeTypeNote": "Rhode Island has no county government for property tax; each of the 39 cities and towns sets its own exemption amount (or flat tax credit), its own application form, and its own filing date within the statutory rule. File with the tax assessor of the city or town where you live.",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.ri.gov/towns/landtaxdata/",
   "label": "RI.gov: Municipal land records and tax assessment sites index (links each city/town's tax assessor page)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://municipalfinance.ri.gov/sites/g/files/xkgbur546/files/documents/data/exemptions/Veterans-Senior-Exemptions-Report.pdf",
   "note": "The Division of Municipal Finance 'Blue Book' Directory of City & Town Officials (municipalfinance.ri.gov/resources/directory) is the fuller directory but returned 403 to automated checks on 2026-10-21 and is omitted. The DMF Veterans/Senior Exemptions Report lists each municipality's veteran exemption amounts and assessor contact details (self-reported, assessment date 12/31/21)."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Municipal veteran exemption application (each city/town prescribes its own; e.g. Johnston 'Veteran Exemption Application', East Providence veterans/widow exemption form)",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "city/town tax assessor"
   }
  ],
  "deadline": {
   "type": "varies-by-county",
   "date": null,
   "text": "RIGL 44-3-4(a)(2): evidence of eligibility must be \"presented to the assessors, on or before the last day on which sworn statements may be filed\" (the municipality's annual account/declaration date, commonly December 31 or January 31 for the December 31 assessment date). Towns set and publish their own dates (examples found: Johnston April 15; East Providence May 25 for the next roll; South Kingstown at least five days before tax roll certification). Confirm with the assessor."
  },
  "effective": "Applies to the tax roll following timely filing (assessment date December 31 in all municipalities; bills issued the following summer).",
  "lateFiling": "Not provided by statute; a late application is held for the next roll unless the municipality's ordinance says otherwise.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No statutory refund for prior years; the exemption attaches prospectively to the next roll after proof is presented."
  },
  "renewal": {
   "type": "on-change",
   "text": "RIGL 44-3-4(a)(2): evidence of eligibility, once presented, \"shall stand so long as the person's legal residence remains unchanged.\" No annual refile under state law; some towns require a new application after a move within town or periodic affirmation. The totally-disabled ($10,000+) tier requires VA certification of total disability, which assessors may ask to see updated."
  },
  "ratingChange": "The base $1,000 wartime exemption needs no rating. The $10,000 statutory tier (RIGL 44-3-4(c)) requires a VA determination of total (100%) service-connected disability; many towns adopt larger amounts for that tier (DMF report: $90 to $250,000 in assessed value, median $10,000). A veteran newly rated totally disabled presents the VA letter to the assessor by the filing date; a rating drop below total disability must be reported.",
  "move": "Proof of eligibility stands only while \"legal residence remains unchanged\"; on moving to another RI city or town, file a new application with that assessor (an applicant may not receive the exemption in more than one community or state).",
  "onlineFiling": {
   "available": null,
   "text": "Varies by municipality; several towns post fillable or online forms, most accept mail or in-person filing."
  },
  "documents": [
   "DD-214 or other proof of honorable discharge and wartime (or qualifying conflict/medal) service under RIGL 44-3-4 and 44-3-4.2",
   "Proof of Rhode Island legal residence at the property (and that no exemption is claimed in another community or state)",
   "Totally disabled tier: VA letter certifying total (100%) service-connected disability",
   "Specially adapted housing tier: VA documentation of the housing grant (RIGL 44-3-4(b) 'satisfactory proof')",
   "Unmarried widow/widower: veteran's death certificate and marriage certificate"
  ],
  "survivingSpouse": "RIGL 44-3-4(a)(1) extends the exemption to the unmarried widow or widower of a qualifying veteran; subsection (d) provides that remarriage does not bar benefits if the remarriage was void, ended by death, or annulled/dissolved by a court. Gold Star parents have a separate exemption under RIGL 44-3-5.",
  "appeal": "Denials are appealed under the municipality's assessment appeal process (appeal to the assessor, then the local Board of Assessment Review, then Superior Court under RIGL 44-5-26); not re-verified for this record.",
  "statute": "RIGL 44-3-4 (veterans' exemptions; last amended P.L. 2025 ch. 189 and ch. 220, effective July 1, 2025); RIGL 44-3-4.2 (qualifying conflicts/medals); RIGL 44-3-5 (Gold Star parents)",
  "sourceUrls": [
   {
    "url": "https://webserver.rilegislature.gov/Statutes/TITLE44/44-3/44-3-4.htm",
    "title": "RIGL 44-3-4 Veterans' exemptions (current text with 2025 amendments)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://municipalfinance.ri.gov/sites/g/files/xkgbur546/files/documents/data/exemptions/Veterans-Senior-Exemptions-Report.pdf",
    "title": "RI Division of Municipal Finance: Report on the Veteran, Senior, and Other Tax Exemption Programs (Sept 2022, assessment date 12/31/21)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ri.gov/towns/landtaxdata/",
    "title": "RI.gov: Rhode Island Land Records / municipal tax assessment links",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "Veterans Exemption.survivingSpouse",
    "issue": "Row shows false; RIGL 44-3-4(a)(1) extends the exemption to the unmarried widow or widower.",
    "source": "https://webserver.rilegislature.gov/Statutes/TITLE44/44-3/44-3-4.htm"
   }
  ],
  "notes": "Everything beyond the statute is municipal: forms, exact dates and amounts differ across 39 cities and towns, so form fields are null by design. The DMF report is the state's only consolidated listing but is self-reported and dated (12/31/21 assessment); a newer edition was not found. municipalfinance.ri.gov HTML pages and vets.ri.gov returned 403 to automated requests and are omitted. The 'last day on which sworn statements may be filed' is tied to each town's annual account deadline under RIGL 44-5-15, which was not opened for this record. Appeal path not re-verified."
 },
 "SC": {
  "state": "SC",
  "officeType": "South Carolina Department of Revenue (state agency), Government Services Division",
  "officeTypeNote": "South Carolina is centralized: the veteran applies to the SC Department of Revenue (SCDOR), not the county. SCDOR determines eligibility and certifies the exemption to the county auditor, who voids the tax notice (S.C. Code 12-4-730). Two county touchpoints remain: (1) the county ASSESSOR must first grant the 4% owner-occupied legal-residence assessment ratio, and SCDOR requires proof of that approval with the application; (2) after approval, hand the SCDOR approval letter to the county assessor (real estate) or county auditor (vehicles) if nothing has changed, and to your mortgage servicer if you escrow.",
  "officeLocator": {
   "tier": 1,
   "url": "https://dor.sc.gov/property/property-tax-exemptions",
   "label": "SCDOR Property Tax Exemptions page (single statewide filing office; links to MyDORWAY online application)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://dor.sc.gov/property",
   "note": "There is only one filing office, so no county lookup is needed for the exemption itself. Mail: SCDOR, Government Services Division, PO Box 125, Columbia, SC 29214-0720; phone 803-898-5700; email Property.Exemptions@dor.sc.gov. Online: MyDORWAY (https://mydorway.dor.sc.gov/, returns 200 on GET; HEAD returns 404) > Exempt Property Application > Request Individual Property Exemption. The 4% legal-residence prerequisite is filed with the county assessor; SCDOR publishes no assessor directory."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Property Tax Exemption Application for Individuals",
    "number": "PT-401-I",
    "url": "https://dor.sc.gov/sites/dor/files/forms/PT401I.pdf",
    "revision": "Rev. 6/18/24",
    "filedWith": "SC Department of Revenue (paper by mail/in person, or online via MyDORWAY; online filers do not submit the paper form). Check exemption section B(1)(A) for the 100% P&T veteran dwelling, B(3) for vehicles, B(43) for Medal of Honor/POW."
   }
  ],
  "deadline": {
   "type": "rolling",
   "date": null,
   "text": "No fixed annual deadline. S.C. Code 12-4-720(A)(1): the owner \"shall file an application for exemption with the department within the period provided in Section 12-54-85(F) for claims for refund\" (generally two years from the date the tax was paid). SCDOR: apply after you have purchased the home; processing currently 10-12 weeks."
  },
  "effective": "Beginning with the tax year in which the disability occurs, based on the date the veteran acquired the property (2024 Act No. 116, effective March 11, 2024, applies to tax years beginning after 2023 \"and any open period less than three years\"; SCDVA/SCDOR describe it as retroactive to 2022). SCDOR: \"Real property: you may qualify the year of purchase, but you must apply after buying the home.\"",
  "lateFiling": "No late penalty concept; a late application is simply a refund claim limited by the 12-54-85(F) window (see retroactivity). Vehicles: the exemption applies to the year of the rating only if the vehicle tax came due on or after the rating date.",
  "retroactivity": {
   "type": "fixed",
   "years": 2,
   "text": "S.C. Code 12-54-85(F)(1): \"claims for credit or refund must be filed within three years from the time the return was filed, or two years from the date the tax was paid, whichever is later.\" Homeowners file no property tax return, so the two-years-from-payment limb applies. 2024 Act No. 116 opened \"any open period less than three years\" but not earlier than tax year 2022 (law applies to tax years after 2021 per SCDOR/SCDVA). Medal of Honor/POW (B)(43) owners were excluded from the 2024 retroactivity change."
  },
  "renewal": {
   "type": "on-change",
   "text": "SCDOR: \"Property Tax Exemptions do not expire or discontinue, unless\" a change occurs (deed transfer, owner added/removed, no longer primary residence, new property, move); after any such change \"you are required to submit a new application.\" S.C. Code 12-4-720(D): the owner is not required to file more than one application per exemption absent a change in status."
  },
  "ratingChange": "Eligibility is binary (permanent and total service-connected disability). A veteran newly rated P&T applies once; the exemption runs from the year the disability occurs. The VA certificate must show the effective date of the P&T rating.",
  "move": "A new application is required for a newly acquired home (SCDOR). Surviving spouses who move must inform SCDOR of the address of the subsequent house (12-37-220(B)(1)(b)). Notify SCDOR when exempt property is sold or the applicant dies.",
  "onlineFiling": {
   "available": true,
   "text": "MyDORWAY (mydorway.dor.sc.gov) is the recommended channel: Exempt Property Application > Request Individual Property Exemption, with document upload. An account is not required (veterans who do not file an SC income tax return may apply without one). Status check: Exempt Property Application > Check Property Exemption Status."
  },
  "documents": [
   "Certificate from the VA or the county veterans service officer certifying total and permanent service-connected disability, with the effective date (SCDOR: \"VA Rating decision letters do not meet requirements of law\")",
   "Recorded deed",
   "Documentation that the county assessor has granted the 4% special assessment ratio (owner-occupied legal residence), solely or jointly with spouse",
   "Marriage certificate if the home is jointly titled with a spouse",
   "Title, bond for title, or bill of sale if the property is a mobile home",
   "Trust-held property: signed trust agreement showing the applicant is the income beneficiary",
   "Vehicles (up to two): SC registration card, SC bill of sale, or SC title",
   "Surviving spouse: VA documentation of survivor status, veteran's death certificate, recorded deed of distribution or will, 4% legal-residence approval in the spouse's sole name, DD 1300 if KIA"
  ],
  "survivingSpouse": "Unremarried surviving spouse who resides in the house and owns it in fee or for life keeps or claims the exemption, and must reapply with documentation. Since 2024 Act No. 116 the spouse qualifies \"regardless of whether the deceased spouse applied, filed for, or claimed the exemption.\" Also covers the spouse of a service member killed in action. Spouse keeps one vehicle exemption for life or until remarriage.",
  "appeal": "Denials are handled by SCDOR under the Revenue Procedures Act (S.C. Code Title 12, Chapter 60); specific protest form and window not verified for this block.",
  "statute": "S.C. Code Ann. 12-37-220(B)(1) (P&T disabled veteran dwelling), 12-37-220(B)(3) (vehicles), 12-37-220(B)(43) (Medal of Honor/POW dwelling); filing: 12-4-720, 12-4-730; refund window: 12-54-85(F)",
  "sourceUrls": [
   {
    "url": "https://dor.sc.gov/property/property-tax-exemptions",
    "title": "SCDOR: Property Tax Exemptions (individuals: how to apply, documents, renewal, surviving spouse, after approval)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.sc.gov/sites/dor/files/forms/PT401I.pdf",
    "title": "Form PT-401-I Property Tax Exemption Application for Individuals (Rev. 6/18/24) with instructions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.sc.gov/sites/dor/files/Documents/Flyers%20%2B%20Brochures/Veterans_Card.pdf",
    "title": "SCDOR: Tax Tips for Veterans (property tax exemption card)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.scstatehouse.gov/code/t12c037.php",
    "title": "S.C. Code Title 12 Chapter 37 (12-37-220 and amendment history incl. 2024 Act No. 116)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.scstatehouse.gov/code/t12c004.php",
    "title": "S.C. Code Title 12 Chapter 4 (12-4-720 filing of applications, 12-4-730 certification to county auditor)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.scstatehouse.gov/code/t12c054.php",
    "title": "S.C. Code 12-54-85(F) refund claim limitation period",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://scdva.sc.gov/news/property-tax-exemption-disabled-south-carolina-veterans-expanded",
    "title": "SC Dept of Veterans' Affairs: Property tax exemption for disabled SC veterans expanded (June 2024)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://mydorway.dor.sc.gov/",
    "title": "MyDORWAY online portal (200 on GET; HEAD returns 404)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[0].ratingRequired",
    "note": "Statute keys on 'permanently and totally disabled as a result of a service-connected disability', certified by VA or the county service officer; a 100% schedular rating that is not permanent does not by itself qualify. Consider ptRequired: true.",
    "source": "https://www.scstatehouse.gov/code/t12c037.php"
   }
  ],
  "notes": "SCDOR's old URL dor.sc.gov/tax/exempt-property now redirects to dor.sc.gov/property/property-tax-exemptions; the news page at dor.sc.gov/resources-site/media-site/... is a 404 and was dropped. The PT-401-I PDF was read in full (pdftotext). The two-year refund window is the statutory default read together with 12-4-720(A)(1); SCDOR's exemptions page does not itself state a lookback for individuals, so county treasurers may apply it differently in practice. 12-4-720(A)(2) (file before the first penalty date) applies only to (A)(8) property, not to veterans."
 },
 "SD": {
  "state": "SD",
  "officeType": "county director of equalization",
  "officeTypeNote": "File with the county Director of Equalization (the county assessor's office in the courthouse of the county where the home sits). The Director investigates and recommends; the exemption takes effect November 1 following action by the county board of equalization. Note the separate Paraplegic REDUCTION program (SDCL 10-4-24.11, income-based, non-veteran) is filed annually with the county TREASURER by April 1; do not confuse it with the Paraplegic Veteran EXEMPTION, which goes to the Director of Equalization.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": "SD Department of Revenue: Property Tax Relief Programs",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://dor.sd.gov/individuals/taxes/property-tax/relief-programs/",
   "note": "The SD DOR publishes no per-county directory of Directors of Equalization (its /government/director-of-equalization/ page and /contact/ page list only the Property Tax Division: 1-800-829-9188 option 2, (605) 773-3311, proptaxin@state.sd.us). DOR: 'Applications are available at your county courthouse.' Most counties use <county>.sdcounties.org (non-state)."
  },
  "forms": [
   {
    "programRef": "Disabled Veterans Property Tax Exemption",
    "name": "Application for Disabled Veteran Property Tax Exemptions",
    "number": "PT-46C",
    "url": "https://sddor.seamlessdocs.com/f/pt46c",
    "revision": "Revised July 1, 2022 (PDF copy hosted by SD Dept of Veterans Affairs: https://vetaffairs.sd.gov/veteransserviceofficers/forms/2023%20Forms/PT_46C_Disabled_Veteran_Property_Tax_Exemption%20(1).pdf, 200)",
    "filedWith": "county director of equalization (DOR links the fillable SeamlessDocs version; paper copies at the county courthouse)"
   },
   {
    "programRef": "Paraplegic Veterans Property Tax Exemption",
    "name": "Application for Paraplegic Veteran Property Tax Exemption",
    "number": "PT-46A",
    "url": "https://sddor.seamlessdocs.com/f/pt46a",
    "revision": null,
    "filedWith": "county director of equalization"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "11-01",
   "text": "DOR brochure (Dec 2025): \"Application must be submitted to your county director of equalization on or before November 1.\" Form PT-46C header: \"APPLICATION DUE ON OR BEFORE NOVEMBER 1 SDCL 10-4-40 & 10-4-41.\" Paraplegic veteran exemption also due November 1. Prerequisite: the dwelling must already carry the owner-occupied classification, whose certificate is due to the same office by March 15 (SDCL 10-13-40)."
  },
  "effective": "Form PT-46C: the Director certifies eligibility \"as of November 1, 20__\" and the exemption is \"effective November first, following action by the county board of equalization,\" i.e. it applies to the next assessment year (taxes payable the year after). Paraplegic veteran exemption requires the dwelling be owned and occupied \"for the full calendar year in which a tax is to be levied\" (SDCL 10-4-24.10).",
  "lateFiling": "A veteran who misses the November 1 deadline (or the owner-occupied March 15 deadline) \"may petition the board of county commissioners to recalculate the taxes based upon the owner-occupied classification and this exemption, and the board may abate or refund the difference\" under SDCL ch. 10-18 (SDCL 10-4-40).",
  "retroactivity": {
   "type": "fixed",
   "years": 4,
   "text": "SDCL 10-4-40 (as amended SL 2026 ch 40): if the deadline was missed because of a pending VA P&T claim, \"the board must abate or refund the difference in taxes accumulated since the effective date of the claim, but not exceeding the previous four years.\" Otherwise the board MAY abate/refund (discretionary). Surviving spouse (10-4-41) and paraplegic veteran (10-4-24.10): discretionary refund \"not exceeding the previous four years.\" Petition to the board of county commissioners, procedure per SDCL ch. 10-18."
  },
  "renewal": {
   "type": "none",
   "text": "SDCL 10-4-40: once the director of equalization grants it, \"the veteran retains that exemption until the property ownership is transferred, the veteran does not occupy the dwelling, or the property has a change in use.\" DOR brochure: \"Once approved for the exemption, no further applications are needed.\" Exception: the Paraplegic Veteran Exemption (PT-46A) must be submitted annually by November 1 per the DOR relief-programs page."
  },
  "ratingChange": "Eligibility requires a VA rating of permanently and totally disabled from a service-connected disability; the exemption is a flat $200,000 of full-and-true value, so rating changes above that threshold do not alter the amount. If a P&T claim is pending at the deadline, file anyway and use the 10-4-40 petition route for refunds back to the claim's effective date (max four years).",
  "move": "Exemption ends when ownership is transferred or the veteran no longer occupies the dwelling; a new PT-46C (and new owner-occupied certificate by March 15) is required for the new home. A legal-description change alone does not end it.",
  "onlineFiling": {
   "available": true,
   "text": "DOR links a fillable SeamlessDocs PT-46C (sddor.seamlessdocs.com/f/pt46c); it is routed to the county director of equalization. Paper copies at the county courthouse. Not all counties confirm e-submission; the brochure still says 'submitted to your county director of equalization.'"
  },
  "documents": [
   "Proof of permanent and total service-connected disability rating: DOR brochure says call the Sioux Falls VA Regional Office (1-800-827-1000) for \"a statement verifying that you are permanently and totally disabled as a result of a service-connected disability(ies)\" and bring a copy when applying",
   "Owner-occupied classification already on file with the director of equalization (PT-46C question D); certificate due March 15 (SDCL 10-13-40)",
   "Surviving spouse: proof of VA dependency and indemnity compensation (DIC) or of the veteran's P&T rating, and unremarried status (form questions B/C)",
   "Paraplegic veteran exemption: evidence the dwelling is specifically designed for wheelchair use and of loss/loss of use of both lower extremities (SDCL 10-4-24.9, 10-4-24.10)"
  ],
  "survivingSpouse": "SDCL 10-4-41: $200,000 of full-and-true value exempt for the unremarried surviving spouse of a P&T-rated veteran OR a spouse receiving VA DIC for a service-connected death; same PT-46C form and November 1 deadline; ends on remarriage, transfer, non-occupancy, or change in use. Paraplegic veteran exemption also passes to the unremarried widow or widower (10-4-24.10).",
  "appeal": "Denied or missed applications go to the board of county commissioners by petition for abatement/refund under SDCL ch. 10-18 (10-4-40, 10-4-41, 10-4-24.10). Assessment/classification disputes follow the county board of equalization process.",
  "statute": "SDCL 10-4-40 (disabled veteran, $200,000), 10-4-41 (surviving spouse), 10-4-24.9 and 10-4-24.10 (paraplegic veteran full exemption), 10-13-40 (owner-occupied certificate by March 15), ch. 10-18 (abatement/refund)",
  "sourceUrls": [
   {
    "url": "https://dor.sd.gov/individuals/taxes/property-tax/relief-programs/",
    "title": "SD DOR: Property Tax Relief Programs (Disabled Veteran and Paraplegic Veteran exemptions, Nov 1 deadline, form links)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.sd.gov/media/jzbhdtzr/disabled-veteran-property-tax-exemption-brochure.pdf",
    "title": "SD DOR: Disabled Veteran Property Tax Exemption Program brochure (December 2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.sd.gov/media/tg2frgdv/paraplegic-tax-reductionexemption-brochure.pdf",
    "title": "SD DOR: Paraplegic Tax Reduction/Exemption brochure (December 2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://sddor.seamlessdocs.com/f/pt46c",
    "title": "Form PT-46C (fillable, linked from DOR)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://vetaffairs.sd.gov/veteransserviceofficers/forms/2023%20Forms/PT_46C_Disabled_Veteran_Property_Tax_Exemption%20(1).pdf",
    "title": "Form PT-46C PDF (Revised July 1, 2022) hosted by SD Dept of Veterans Affairs",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://sdlegislature.gov/api/Statutes/10-4-40.html",
    "title": "SDCL 10-4-40 Partial exemption, owner-occupied dwellings of certain disabled veterans (incl. SL 2026 ch 40)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://sdlegislature.gov/api/Statutes/10-4-41.html",
    "title": "SDCL 10-4-41 surviving spouses",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://sdlegislature.gov/api/Statutes/10-4-24.10.html",
    "title": "SDCL 10-4-24.10 paraplegic/amputee veteran dwelling exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://sdlegislature.gov/api/Statutes/10-13-40.html",
    "title": "SDCL 10-13-40 owner-occupied classification certificate (March 15)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.sd.gov/government/director-of-equalization/",
    "title": "SD DOR: Directors of Equalization page (no county directory; Property Tax Division contacts)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://vetaffairs.sd.gov/benefits/State/Property%20Taxes.aspx",
    "title": "SD Dept of Veterans Affairs: Property Tax Exemption for Veterans (statute summary)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[1].survivingSpouse",
    "note": "Should be true: SDCL 10-4-41 gives the unremarried surviving spouse (of a P&T veteran, or any DIC recipient) the same $200,000 exemption (raised from $150,000 by SL 2024 ch 34 / SL 2026 ch 40). The SDDVA page still shows $150,000 for the spouse and is stale.",
    "source": "https://sdlegislature.gov/api/Statutes/10-4-41.html"
   },
   {
    "field": "programs[0] (Paraplegic Veterans)",
    "note": "Empty summary. Statute: full exemption of a dwelling (up to 1 acre) specifically designed for wheelchair use, owned and occupied the full calendar year by a paraplegic veteran or veteran with loss/loss of use of both lower extremities, or the unremarried widow/widower. survivingSpouse should be true. Annual re-application by Nov 1 per DOR.",
    "source": "https://sdlegislature.gov/api/Statutes/10-4-24.10.html"
   },
   {
    "field": "programs[1].exemptionValue",
    "note": "DOR brochure and statute say $200,000 of FULL AND TRUE value (market value), not assessed value; the DOR web page's 'assessed value' wording is loose. The 2026 amendment (SL 2026 ch 40) added the mandatory four-year refund for pending P&T claims.",
    "source": "https://sdlegislature.gov/api/Statutes/10-4-40.html"
   }
  ],
  "notes": "The November 1 deadline is not in the statute text itself; it comes from DOR's form and brochure (DOR prescribes the form under 10-4-40). The sdlegislature.gov/Statutes/<n> pages serve only a browser-compatibility shell to curl; the api/Statutes/<n>.html endpoints carry the text and were used. The DOR newsroom 'Nov 1 deadline' pages from prior years now 404 and were dropped. The PT-46C revision available is July 1, 2022 (the SeamlessDocs version could not be read as text)."
 },
 "TN": {
  "state": "TN",
  "officeType": "county trustee (collecting official); city collecting official for city taxes",
  "officeTypeNote": "Tennessee's program is a STATE REIMBURSEMENT, not an exemption: you apply through the local tax collecting official (the county trustee for county taxes; the city collecting official if you also pay city taxes inside city limits), who makes a preliminary determination and forwards the application to the Comptroller's Division of Property Assessments for final approval (T.C.A. 67-5-701(c)). The county assessor is not involved. Approved applicants receive a voucher with each year's tax bill and present it to the collecting official with any balance due.",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.ctas.tennessee.edu/trustees",
   "label": "County Trustee directory (UT County Technical Assistance Service), linked from the Comptroller's Tax Relief page; all 95 counties with name, address, phone, email",
   "countyUrlPattern": "https://www.ctas.tennessee.edu/county/{county}",
   "slugRule": "County name lowercased with spaces replaced by hyphens (e.g. anderson, van-buren); the per-county page lists that county's officials including the trustee. City collecting officials: MTAS directory https://www.mtas.tennessee.edu/directories/municipal-staff-and-officials",
   "fallbackUrl": "https://comptroller.tn.gov/office-functions/pa/property-taxes/property-tax-programs/tax-relief.html",
   "note": "The Comptroller page itself links both directories ('search for a County Trustee or a city collecting official'). State Tax Relief office: 615-747-8871 / 1-800-221-9927, TRInfo@cot.tn.gov, Cordell Hull Building, 425 Rep. John Lewis Way N., Nashville 37243. Application status lookup: https://comptroller.tn.gov/office-functions/pa/tax-resources/tax-relief-application-status.html"
  },
  "forms": [
   {
    "programRef": "Disabled Veteran Exemption",
    "name": "Property Tax Relief application (state-approved form, obtained from and filed with the collecting official) plus VA consent form F-16 (disabled veteran) or F-16S (widow/widower of disabled veteran)",
    "number": "F-16 / F-16S (consent for release of VA disability and income information); the application itself is the trustee's annual Tax Relief application",
    "url": null,
    "revision": "Brochure is year-specific: '2026 F-16' / '2026 F-16S' for 2026 tax bills",
    "filedWith": "county trustee (or city collecting official)"
   }
  ],
  "deadline": {
   "type": "varies-by-county",
   "date": null,
   "text": "T.C.A. 67-5-701(d)(1): taxpayers who \"fail to apply for a refund or present a credit voucher ... within thirty-five (35) days from the date taxes in the jurisdiction become delinquent for that year, shall be deemed ineligible for such relief for that tax year.\" Comptroller brochure (2026): \"You may apply when you receive your 2026 property tax bill(s). The deadline to apply is 35 days after the delinquency date. Taxes must also be paid by this date.\" Delinquency dates are set locally (commonly March 1, making the deadline about April 5), so confirm with the trustee."
  },
  "effective": "Tax-year basis: relief is a reimbursement of taxes paid for the tax year applied for; the veteran must own and use the home as a primary residence and have a qualifying VA determination for that tax year. No mid-year proration concept; the state pays or credits all or part of the tax on the first $175,000 of full market value.",
  "lateFiling": "Deemed ineligible for that tax year after the 35-day window (67-5-701(d)(1)). The director of the Division of Property Assessments \"is authorized to waive application of any deadline ... upon determining that the failure to meet the deadline was excusable for good and reasonable cause ... No deadline may be extended hereunder beyond December 31 of the year following the tax year\" (67-5-701(k)). Applications must reach the Division by May 5 following the deadline or within 30 days of it, whichever is later (67-5-701(d)(2)).",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No refund right for prior years. The only backward reach is the discretionary good-cause waiver in 67-5-701(k), capped at December 31 of the year following the tax year (effectively one prior tax year at most). Unlike a true exemption, missing the window forfeits that year's reimbursement."
  },
  "renewal": {
   "type": "annual",
   "text": "Apply each year when the tax bill arrives; approved applicants receive a voucher with the property tax bill, which must be presented to the collecting official before the deadline along with any balance due (Comptroller Tax Relief page). The collecting official may credit the projected relief against the bill if the applicant appears eligible (67-5-701(c)). The F-16/F-16S consent form is year-specific."
  },
  "ratingChange": "Eligibility is binary: service-connected permanent and total disability as determined by VA (or paraplegia/legal blindness/loss of use of two or more limbs from a service-connected cause, or 100% P&T from POW service). \"The determination of the United States veterans' administration concerning the disability status of a veteran shall be conclusive\" (67-5-704(d)); the Comptroller pulls the rating from VA through the F-16 consent. Taxpayers who qualify on or before December 31 of the tax year qualify for that year.",
  "move": "Relief attaches to the primary residence for the tax year; apply with the collecting official for the new home's jurisdiction with the next tax bill. A veteran temporarily relocated for health care keeps eligibility if intending to return (67-5-704(j)).",
  "onlineFiling": {
   "available": false,
   "text": "Applications are obtained from and submitted to the county trustee or city collecting official (paper, in person or by mail per local practice). The Comptroller offers only an online application-status search (tncot.cc/taxrelief)."
  },
  "documents": [
   "Completed Tax Relief application from the trustee/collecting official, using the form approved by the State Board of Equalization",
   "F-16 (veteran) or F-16S (widow/widower): consent for the Comptroller to obtain disability and income information from the U.S. Department of Veterans Affairs; the Comptroller determines veteran eligibility from VA data, so no separate rating letter is required by the state",
   "Proof the property is owned and used as the primary residence (property tax bill/receipt presented to the collecting official)",
   "Widow(er): copy of the veteran's death certificate and a form of personal ID; must have been married to the veteran at death and not remarried",
   "Veteran must not have been dishonorably discharged (67-5-704(c)); discharge documentation may be requested by the collecting official"
  ],
  "survivingSpouse": "T.C.A. 67-5-704(e)-(g): relief continues for the surviving spouse of a veteran who was eligible at death (or would be eligible under later amendments), of a veteran whose death resulted from a service-connected combat-related cause, or of a soldier who died while deployed; the spouse must not remarry, must solely or jointly own the home, and use it exclusively as a home. File with F-16S.",
  "appeal": "Final eligibility is decided by the Comptroller's Division of Property Assessments; denied applicants may seek the good-cause deadline waiver from the director (67-5-701(k)) and may contact the Tax Relief office (615-747-8871). A formal appeal path beyond that was not verified.",
  "statute": "T.C.A. 67-5-701 (administration, 35-day deadline, waiver), 67-5-704 (disabled veteran's residence, $175,000 cap, surviving spouse)",
  "sourceUrls": [
   {
    "url": "https://comptroller.tn.gov/office-functions/pa/property-taxes/property-tax-programs/tax-relief.html",
    "title": "TN Comptroller: Property Tax Relief program page (where to apply, vouchers, directories)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.comptroller.tn.gov/content/dam/cot/pa/documents/tax-relief/TaxReliefBrochure.pdf",
    "title": "TN Comptroller: 2026 Property Tax Relief Program brochure (deadline, F-16/F-16S, $175,000)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.comptroller.tn.gov/content/dam/cot/pa/documents/tax-relief/TCA%2067-5-701%20through%2067-5-704.pdf",
    "title": "T.C.A. 67-5-701 through 67-5-704 (Comptroller compilation, revised 2019)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.ctas.tennessee.edu/trustees",
    "title": "CTAS County Trustee directory (linked from the Comptroller's Tax Relief page)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://www.mtas.tennessee.edu/directories/municipal-staff-and-officials",
    "title": "MTAS municipal officials directory (city collecting officials)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://comptroller.tn.gov/office-functions/pa/tax-resources/tax-relief-application-status.html",
    "title": "TN Comptroller: Tax Relief application status search",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[0].type",
    "note": "Tennessee's program is a state reimbursement/credit (not an exemption) and must be re-applied for every year; the dollar layer's 'partial' type is fine but the annual-renewal gate and 35-day post-delinquency deadline should surface in the summary. 'Specially Adapted Housing' row has no Tennessee statutory basis in 67-5-701 to 704; the paraplegia path is simply one of the 67-5-704(b) eligibility routes.",
    "source": "https://www.comptroller.tn.gov/content/dam/cot/pa/documents/tax-relief/TCA%2067-5-701%20through%2067-5-704.pdf"
   }
  ],
  "notes": "No statewide form PDF exists online for the application itself; the Comptroller says forms are obtained at the trustee's office, and the F-16/F-16S are consent forms rather than the application. County trustee pages (e.g. Knox, Montgomery) publish county-specific application packets and dates (Montgomery County: April 5). The TCA compilation PDF is the Comptroller's 2019 revision; the $175,000 cap matches the 2026 brochure. tncot.cc/taxrelief redirects (200) to the Comptroller tax-relief page."
 },
 "TX": {
  "state": "TX",
  "officeType": "county appraisal district (chief appraiser)",
  "officeTypeNote": "File with the county APPRAISAL DISTRICT, not the county tax assessor-collector (that office registers vehicles and collects the bill) and not the Comptroller. Tax Code 11.43(a): \"a person must file an exemption application form with the chief appraiser for each appraisal district in which the property subject to the claimed exemption has situs.\" Both Comptroller forms say: \"Do not file this document with the Texas Comptroller of Public Accounts.\"",
  "officeLocator": {
   "tier": 1,
   "url": "https://comptroller.texas.gov/taxes/property-tax/county-directory/",
   "label": "Texas Comptroller: County Directory of appraisal districts and tax assessor-collectors (all 254 counties)",
   "countyUrlPattern": "https://comptroller.texas.gov/taxes/property-tax/county-directory/{county}.php",
   "slugRule": "lower-nospace",
   "fallbackUrl": "https://comptroller.texas.gov/taxes/property-tax/exemptions/",
   "note": "Form 50-114 instructions: 'A directory with contact information for appraisal district offices is on the Comptroller's website.' Most appraisal districts also post their own copy of 50-114/50-135 and many accept online filing through their own portals. Slug rule: County name lowercased with spaces and punctuation removed, no hyphens: travis.php, fortbend.php, elpaso.php, deafsmith.php, jeffdavis.php (fort-bend.php and el-paso.php return 404). Each county page lists the appraisal district's chief appraiser, taxpayer liaison, phone, email, website, mailing and street address, then the tax assessor-collector block."
  },
  "forms": [
   {
    "programRef": "Homestead Tax Exemption for 100% Disabled or Unemployable Veterans",
    "name": "Residence Homestead Exemption Application (check the '100 Percent Disabled Veteran (or Surviving Spouse)' box, Tax Code 11.131; also covers 11.132 donated homestead and 11.133 KIA spouse)",
    "number": "50-114",
    "url": "https://comptroller.texas.gov/forms/50-114.pdf",
    "revision": "Rev. 02-26/39",
    "filedWith": "county appraisal district"
   },
   {
    "programRef": "Surviving Spouse of SM Killed in Line of Duty",
    "name": "Residence Homestead Exemption Application (Surviving Spouse of Member of Armed Services Killed in Line of Duty box, Tax Code 11.133)",
    "number": "50-114",
    "url": "https://comptroller.texas.gov/forms/50-114.pdf",
    "revision": "Rev. 02-26/39",
    "filedWith": "county appraisal district"
   },
   {
    "programRef": "Partial Exemption for Partially Disabled Veterans",
    "name": "Disabled Veteran's or Survivor's Exemption Application (Tax Code 11.22; applies to any one property the veteran designates, not only the homestead; stackable with 11.131)",
    "number": "50-135",
    "url": "https://comptroller.texas.gov/forms/50-135.pdf",
    "revision": null,
    "filedWith": "county appraisal district"
   },
   {
    "programRef": "*",
    "name": "Residence Homestead Exemption Affidavits (supplement for heir property, manufactured homes, or when the applicant is not on the deed)",
    "number": "50-114-A",
    "url": "https://comptroller.texas.gov/forms/50-114-a.pdf",
    "revision": null,
    "filedWith": "county appraisal district (attach to 50-114 when required)"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "04-30",
   "text": "Tax Code 11.43(d): \"a person required to claim an exemption must file a completed exemption application form before May 1 ... For good cause shown the chief appraiser may extend the deadline ... for a single period not to exceed 60 days.\" Comptroller forms: file \"generally between Jan. 1 and April 30 of the year for which you are requesting the exemption.\" Late windows below make the April 30 date soft for disabled veterans."
  },
  "effective": "11.131 (100% DV homestead): Tax Code 11.42(e): \"A person who qualifies for an exemption under Section 11.131 ... after January 1 of a tax year may receive the exemption for the applicable portion of that tax year immediately on qualification\" (prorated from the qualification date, e.g. the VA 100%/IU award date or move-in date). 11.22 (partial DV): eligibility is fixed by qualifications on January 1 (11.42(a)); a veteran rated mid-year starts the following tax year. 11.132/11.133: effective as of January 1 of the year of qualification for the whole year (11.42(c)).",
  "lateFiling": "Chief appraiser must accept late applications: 100% DV homestead (11.131) and donated homestead (11.132) for the VETERAN up to five years after the delinquency date (11.439(a), as amended by S.B. 611 eff. Jan 1 2022); partial DV exemption 11.22 up to five years after the delinquency date (11.439(a)); SURVIVING SPOUSE claims under 11.131/11.132/11.133 only up to two years after the delinquency date (11.431(a)). Delinquency date is normally February 1 of the year after the tax year, so a veteran can reach back roughly five tax years.",
  "retroactivity": {
   "type": "fixed",
   "years": 5,
   "text": "Tax Code 11.439(a): the chief appraiser \"shall accept and approve or deny an application for an exemption under Section 11.131 or 11.132 for the residence homestead of a disabled veteran but not the surviving spouse ... or Section 11.22 ... if the application is filed not later than five years after the delinquency date.\" 11.439(b): if paid, \"the collector shall pay ... a refund of the tax imposed on the exempted portion ... and the corresponding portion of any related penalties and interest paid.\" Surviving spouses: two years (11.431(a)). No separate refund application is required (11.431(b))."
  },
  "renewal": {
   "type": "none",
   "text": "Tax Code 11.43(c): exemptions under 11.13, 11.131, 11.132, 11.133 and 11.22, \"once allowed, need not be claimed in subsequent years, and ... the exemption applies to the property until it changes ownership or the person's qualification for the exemption changes.\" The chief appraiser may send a written notice requiring a new application to confirm qualification, EXCEPT 11.43(r): may not require a new application from a 11.131 veteran who \"has a permanent total disability determined by the United States Department of Veterans Affairs under 38 C.F.R. Section 4.15.\" Owner must notify the chief appraiser in writing before May 1 of the year after eligibility ends (form instructions)."
  },
  "ratingChange": "11.22 amount follows the rating tier ($5,000 at 10-29%, $7,500 at 30-49%, $10,000 at 50-69%, $12,000 at 70%+ or age 65 with 10%+, blind, or loss of use of a limb); file an updated 50-135 with the new VA rating letter, effective the next January 1 (11.42(a)). Reaching 100% schedular or IU: file 50-114 for 11.131, effective immediately for the remainder of that year (11.42(e)). If the 100% rating is later reduced, qualification 'changes' and the exemption ends; notify the appraisal district before May 1.",
  "move": "11.131 moves with the veteran: Comptroller FAQ: on the old homestead \"tax is due on the homestead for the portion of the year after the date the exemption ends\"; on the new one \"The exemption may start immediately when the 100 percent disabled veteran qualifies the new residence homestead.\" File a new 50-114 with the appraisal district for the new county. 11.22 attaches to one designated property; re-designate on a new 50-135.",
  "onlineFiling": {
   "available": null,
   "text": "Varies by appraisal district: many large CADs (e.g. Travis, Harris, Dallas) run online homestead-exemption portals; others take mail/in-person. The Comptroller provides the PDF forms only. Driver's license address must match the homestead address (11.43(j)) unless a waiver applies (form Section 4)."
  },
  "documents": [
   "Copy of each owner's Texas driver's license or state-issued personal ID with an address matching the homestead (Tax Code 11.43(j); waivers for active-duty members/spouses, residents of care facilities, and 521.121(c)/521.1211 license holders)",
   "11.131: documentation from the VA (or its successor) showing 100% service-connected disability compensation with a 100% rating OR individual unemployability (VA award/benefits summary letter); form asks whether the disability is a permanent total disability",
   "11.22 (50-135): \"documentation indicating the percentage of disability certified by the Veterans Administration or its successor or the branch of the armed services\"; \"Attach documentation from the VA or service branch identifying the most recent disability rating\"; a driver's license is not proof of rating (Comptroller FAQ)",
   "Heir property / owner not on deed: Form 50-114-A affidavit, prior owner's death certificate, most recent utility bill, citation of any court record (50-114 instructions)",
   "Manufactured home: statement of ownership or title/purchase contract/payment receipt plus 50-114-A affidavit",
   "Surviving spouse: veteran's death certificate and proof the veteran qualified (or would have qualified) for 11.131 at death; proof of no remarriage (form attestation)"
  ],
  "survivingSpouse": "11.131(c)-(d): unremarried surviving spouse keeps the total exemption if the property was the spouse's residence homestead when the veteran died and remains so; the dollar amount may transfer to a subsequent homestead (11.131(d)). Comptroller FAQ: \"A surviving spouse does not qualify if the surviving spouse has remarried since the death of the disabled veteran.\" 11.133: total homestead exemption for the unremarried spouse of a service member killed or fatally injured in the line of duty. 11.22(c)-(d): spouse (and children under 18 if no spouse) of a 11.22 veteran keep the veteran's dollar amount; spouse of a member who died on active duty gets $5,000. Late filing for spouses limited to two years (11.431).",
  "appeal": "Form 50-135: \"If the chief appraiser denies the application, you may protest that determination to the county appraisal review board under Tax Code chapter 41.\" Chief appraiser may request more information; owner must respond within 30 days or the application is denied (11.45; form instructions).",
  "statute": "Tex. Tax Code 11.131 (100% DV homestead), 11.22 (partial DV), 11.132 (donated homestead), 11.133 (KIA spouse), 11.42(e) (mid-year qualification), 11.43 (application, (c) one-time, (d) before May 1, (r) no reapplication for P&T), 11.431 (late homestead, 2 years), 11.439 (late DV, 5 years)",
  "sourceUrls": [
   {
    "url": "https://comptroller.texas.gov/taxes/property-tax/docs/96-297-25.pdf",
    "title": "Texas Property Tax Code, 2025 edition (Comptroller publication 96-297; Secs. 11.42, 11.43, 11.431, 11.439, 26.1127 read)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://comptroller.texas.gov/forms/50-114.pdf",
    "title": "Form 50-114 Residence Homestead Exemption Application (Rev. 02-26/39) with filing instructions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://comptroller.texas.gov/forms/50-135.pdf",
    "title": "Form 50-135 Disabled Veteran's or Survivor's Exemption Application with filing instructions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://comptroller.texas.gov/forms/50-114-a.pdf",
    "title": "Form 50-114-A Residence Homestead Exemption Affidavits",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://comptroller.texas.gov/taxes/property-tax/exemptions/disabledvet-100-faq.php",
    "title": "Comptroller: 100 Percent Disabled Veterans and Surviving Spouses FAQ",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://comptroller.texas.gov/taxes/property-tax/exemptions/disabledvet-faq.php",
    "title": "Comptroller: Disabled Veterans and Surviving Spouses Exemptions FAQ (11.22)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://comptroller.texas.gov/taxes/property-tax/county-directory/",
    "title": "Comptroller: County Directory (appraisal districts and tax assessor-collectors)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://comptroller.texas.gov/taxes/property-tax/county-directory/travis.php",
    "title": "Comptroller county directory example page (Travis)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://capitol.texas.gov/tlodocs/87R/billtext/html/SB00611F.htm",
    "title": "S.B. 611 (87R) enrolled: amendments to Tax Code 11.431 and 11.439 effective Jan 1 2022",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://comptroller.texas.gov/taxes/property-tax/exemptions/",
    "title": "Comptroller: Property Tax Exemptions overview",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[1].summary (Partial Exemption)",
    "note": "Summary leads with the age-65 $12,000 rule; the general 11.22 schedule is $5,000/$7,500/$10,000/$12,000 by rating tier for any disabled veteran, on ANY one property the veteran designates (not restricted to the homestead), and it STACKS with 11.131 on a different property. The existing summary 'Only one exemption allowed, choose greatest' under program 0 conflicts with the Comptroller FAQ: 'An eligible disabled veteran may receive both exemptions.'",
    "source": "https://comptroller.texas.gov/taxes/property-tax/exemptions/disabledvet-100-faq.php"
   },
   {
    "field": "programs[0].ratingRequired",
    "note": "11.131 qualifies on 100% schedular OR individual unemployability (IU) compensation at the 100% rate; P&T is not required for the exemption, only for the 11.43(r) protection against re-application requests.",
    "source": "https://comptroller.texas.gov/forms/50-114.pdf"
   }
  ],
  "notes": "statutes.capitol.texas.gov is now a JavaScript app and its Docs/TX/htm/TX.11.htm URL returns only an app shell to curl; the Comptroller's 2025 Property Tax Code PDF (publication 96-297-25) was used as the statute source and the S.B. 611 enrolled text confirms the current 11.431/11.439 wording. The brief's open question is settled: VETERANS get five years after the delinquency date for 11.131/11.132/11.22 (11.439); SURVIVING SPOUSES get two years (11.431). The 50-135 PDF revision string did not extract cleanly from pdftotext. The disabled-veterans info pack PDF (comptroller.texas.gov/taxes/property-tax/info-pack/disabled-veterans-exemptions.pdf) is a sample press release for chief appraisers, not taxpayer guidance."
 },
 "UT": {
  "state": "UT",
  "officeType": "county auditor or treasurer (tax relief office) of the county of residence",
  "officeTypeNote": "Utah Code 59-2a-502(2)(a): file \"with the county in which the veteran claimant resides on September 1 of that calendar year.\" The Tax Commission's County Tax Relief Contact List: \"Tax relief is administered by the County Auditors or Treasurers\" (varies by county; most route through the clerk/auditor's abatement office, a few through the treasurer). The county assessor values the property but does not take this application.",
  "officeLocator": {
   "tier": 1,
   "url": "https://files.tax.utah.gov/propertytax/media/county-tax-relief.pdf",
   "label": "Utah State Tax Commission: County Tax Relief Contact List (all 29 counties, web page and phone of the office that administers tax relief)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://tax.utah.gov/propertytax/tax-relief/",
   "note": "Single PDF, no per-county state URL pattern; it links each county's own tax-relief/abatement page. Tax Commission Property Tax Division also publishes a County Treasurers list (https://files.tax.utah.gov/propertytax/media/county-treasurers.pdf) for billing questions."
  },
  "forms": [
   {
    "programRef": "Veteran Exemption",
    "name": "Veteran with a Disability Property Tax Exemption Application",
    "number": "PT-025 (PT-25)",
    "url": "https://files.tax.utah.gov/propertytax/form/pt-025.pdf",
    "revision": "Rev. 01/23 (still cites the pre-2026 numbering UCA 59-2-1903 and 1904)",
    "filedWith": "county auditor/treasurer tax relief office of the county of residence; many counties also provide their own version of the form"
   },
   {
    "programRef": "Active Duty Exemption",
    "name": "Active Duty Armed Forces Property Tax Exemption",
    "number": "PT-022 (PT-22)",
    "url": "https://files.tax.utah.gov/propertytax/form/pt-022.pdf",
    "revision": null,
    "filedWith": "county of residence, with military orders; annual"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "09-01",
   "text": "Utah Code 59-2a-502(2)(a) (eff. 1/1/2026): \"a veteran claimant shall file, on or before September 1 of the calendar year for which the veteran claimant is applying for the exemption, an application ... with the county in which the veteran claimant resides on September 1.\" PT-025: \"The deadline for filing this application with your county of residence is September 1.\" Extension: 59-2a-108(1)(a): \"The commission or a county may extend the time for filing an application until December 31 of the year ... if ... good cause exists.\""
  },
  "effective": "Applies to the calendar/tax year of application (taxes billed in October/November of that year) if the claimant owns the eligible property \"at any time during the calendar year\" (59-2a-502(1)); the exemption equals disability percentage x the adjusted taxable value limit ($535,459 per Pub 36 Rev. 09/26 draft), capped at the property's taxable value. 59-2a-501(2)(c): a veteran certified by VA as individually unemployable is treated as 100%. Qualifying P&T veterans may pre-file before closing on a home with a purchase contract (59-2a-502(5)); the county issues a preliminary approval receipt within 15 business days.",
  "lateFiling": "Good-cause extension to December 31 of the same year (59-2a-108(1)). Mandatory one-additional-year extension (59-2a-502(3)) when a military entity's written disability decision \"takes effect in a year before the current calendar year,\" or the county finds illness/injury, a death in the immediate family, six-plus months out of state, or that denial \"would be against equity or good conscience\" and the failure \"was beyond the reasonable control of the veteran claimant.\" Refunds of overpaid tax of $1 or more are mandatory once granted (59-2a-108(2)).",
  "retroactivity": {
   "type": "fixed",
   "years": 1,
   "text": "59-2a-502(3): \"A county shall extend the September 1 application deadline by one additional year\" for a VA/military disability decision effective in a prior year or for the listed hardship grounds; 59-2a-502(4): an amended application is allowed after the deadline when a decision changes the disability percentage with a prior-year effective date. 59-2a-108(2): the county \"shall refund to the recipient ... an amount equal to the amount by which the property taxes paid exceed the property taxes due, if that amount is $1 or more.\" No general multi-year lookback."
  },
  "renewal": {
   "type": "on-change",
   "text": "59-2a-502(6): after issuing the receipt, \"a county may not require a veteran claimant to file another application\" except when the claimant applies part of the exemption to personal property, the disability percentage changes, the veteran dies, ownership or occupancy of the primary residence changes, or (for survivor claims) the claimant differs from last year's. 59-2a-502(2)(d): no new statement of disability unless the percentage changed or the claimant changed. Note: the Active Duty exemption (PT-22) IS annual."
  },
  "ratingChange": "File an amended application with the military entity's statement giving the effective date of the new percentage (59-2a-502(4)); the county must accept it after the deadline when the decision's effective date falls in a prior year. The exemption scales linearly with the percentage; IU = 100% (59-2a-501(2)(c)); below 10% no exemption. Unused exemption may be applied to personal-use tangible personal property (e.g. vehicles) but is not refundable (PT-025 county instructions).",
  "move": "Ownership or occupancy change triggers a new application in the new county of residence (59-2a-502(6)(d)-(e)); residence is measured on September 1. The county may verify primary residence (59-2a-502(7)). P&T veterans may pre-apply in the destination county with a purchase contract (59-2a-502(5)).",
  "onlineFiling": {
   "available": null,
   "text": "Varies by county; the state provides the PDF form only and the County Tax Relief Contact List links each county's own abatement/tax-relief page (several large counties, e.g. Salt Lake, Utah, Davis, run online portals)."
  },
  "documents": [
   "Copy of the veteran's Certificate of Discharge (DD-214) or other satisfactory evidence of eligible military service (59-2a-502(2)(b)(i); PT-025: 'with initial application only')",
   "Statement of disability issued by a military entity (VA rating/benefits letter) listing the percentage of disability (59-2a-502(2)(c)); VA individual unemployability certification if claiming 100% via IU",
   "For a disability decision effective in a prior year: the military entity's statement giving the date the decision takes effect (59-2a-502(2)(b)(ii))",
   "Property tax serial/account number from the prior valuation notice and the primary residence value (PT-025)",
   "Surviving spouse/minor orphan: proof of the veteran's death, that the veteran was a veteran with a disability (or KIA/died in line of duty), and unmarried status",
   "Pre-purchase filers (P&T only): real estate purchase contract or similar documentation (59-2a-502(5))",
   "Honorable/general discharge is presumptive proof of U.S. citizenship; no further citizenship proof may be required (59-2a-501(4))"
  ],
  "survivingSpouse": "Unmarried surviving spouse or minor orphan of a veteran with a disability claims the same percentage-based exemption; the unmarried surviving spouse or minor orphan of a veteran killed in action or who died in the line of duty gets the TOTAL taxable value of the primary residence and personal-use tangible personal property exempt (59-2a-501(3)). PT-025 has a checkbox for this status; same September 1 deadline.",
  "appeal": "59-2a-501(5): disputes over \"an individual's status as a veteran with a disability\" are resolved by the Utah Department of Veterans and Military Affairs through an informal hearing under the Administrative Procedures Act. Other denials follow county board of equalization / Tax Commission appeal routes under Title 59 Chapter 2 (not verified in detail).",
  "statute": "Utah Code 59-2a-501 (amount), 59-2a-502 (application, deadline, extensions, no re-filing), 59-2a-108 (Dec 31 good-cause extension, refunds); renumbered from 59-2-1903/1904 by Laws 2025 ch. 172 effective 1/1/2026",
  "sourceUrls": [
   {
    "url": "https://le.utah.gov/xcode/Title59/Chapter2A/C59-2a-S502_2026010120250507.html",
    "title": "Utah Code 59-2a-502 Application (effective 1/1/2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://le.utah.gov/xcode/Title59/Chapter2A/C59-2a-S501_2026010120250507.html",
    "title": "Utah Code 59-2a-501 Veteran armed forces exemption amount (effective 1/1/2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://le.utah.gov/xcode/Title59/Chapter2A/C59-2a-S108_2026010120250507.html",
    "title": "Utah Code 59-2a-108 Extension of time for filing application; refunds",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://le.utah.gov/~2023/bills/hbillenr/HB0539.htm",
    "title": "H.B. 539 (2023) enrolled, amending former 59-2-1904 (one-time filing, pre-purchase application)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://files.tax.utah.gov/propertytax/form/pt-025.pdf",
    "title": "Form PT-025 Veteran with a Disability Property Tax Exemption Application (Rev. 01/23)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.utah.gov/forms-pubs/pub-36/",
    "title": "Utah State Tax Commission Pub 36 Property Tax Abatement, Deferral, and Exemption Programs for Individuals (Rev. 09/26, marked draft pending public meeting)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://files.tax.utah.gov/propertytax/media/county-tax-relief.pdf",
    "title": "Utah State Tax Commission: County Tax Relief Contact List (29 counties)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.utah.gov/propertytax/tax-relief/",
    "title": "Utah State Tax Commission: Property Tax Relief",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.utah.gov/propertytax/forms/",
    "title": "Utah State Tax Commission: Property Tax Forms (PT-22, PT-25, PT-32)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[0].survivingSpouse",
    "note": "Should be true: 59-2a-501 covers the unmarried surviving spouse and minor orphans of a veteran with a disability (same percentage) and gives a TOTAL exemption to survivors of veterans killed in action or who died in the line of duty.",
    "source": "https://le.utah.gov/xcode/Title59/Chapter2A/C59-2a-S501_2026010120250507.html"
   },
   {
    "field": "programs[0].details",
    "note": "Stale $521,620 figure in 'details' (summary already says $535,459 for TY2026, matching Pub 36 Rev. 09/26). Also the statute was renumbered 1/1/2026 from 59-2-1903/1904 to 59-2a-501/502; any statute citation in the tool should be updated.",
    "source": "https://tax.utah.gov/forms-pubs/pub-36/"
   }
  ],
  "notes": "propertytax.utah.gov now redirects to tax.utah.gov/propertytax and returns 403 to plain curl HEAD; GET with a browser user agent returns 200, and the files.tax.utah.gov PDFs return 200 either way. The le.utah.gov /xcode/.../59-2-S190x.html pages are a JavaScript shell; the versioned C59-2a-S50x_2026010120250507.html URLs serve static text. Pub 36 online is labeled 'DRAFT PENDING PUBLIC MEETING' (Rev. 09/26) and does not restate the September 1 deadline for this exemption, which comes from the statute and PT-025."
 },
 "VA": {
  "state": "VA",
  "officeType": "commissioner of the revenue of the county, city, or town (or other officer designated by the local governing body)",
  "officeTypeNote": "Virginia real estate tax is purely local. Va. Code 58.1-3219.6(A): the veteran files an affidavit or written statement \"with the commissioner of the revenue of the county, city, or town or such other officer as may be designated by the governing body\" on \"forms to be supplied by the county, city, or town.\" A few localities route it through a Director of Finance or Real Estate Assessor instead (e.g. Virginia Beach's Real Estate Assessor). The treasurer collects the bill and issues any refund; the Department of Taxation and the Department of Veterans Services do not take applications.",
  "officeLocator": {
   "tier": 2,
   "url": null,
   "label": "Virginia Department of Taxation (no state-published directory of local commissioners of the revenue was verified)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://www.tax.virginia.gov/",
   "note": "Search '<locality> commissioner of the revenue' for the local office. The Virginia Department of Veterans Services program page (dvs.virginia.gov/benefits/real-estate-tax-exemption) and its 2023 administrative guidelines PDF exist but returned HTTP 403 to automated requests on 2026-10-21, so they are not listed as verified links. tax.virginia.gov/localities is a resource hub for local officials, not a public directory."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Affidavit or written statement for the disabled veteran real property tax exemption (locality-supplied form; names vary, e.g. 'Application for Real Estate Tax Exemption for Disabled Veterans')",
    "number": null,
    "url": null,
    "revision": null,
    "filedWith": "commissioner of the revenue (or designated officer) of the locality where the principal residence sits"
   }
  ],
  "deadline": {
   "type": "rolling",
   "date": null,
   "text": "No statutory filing deadline. Va. Code 58.1-3219.6 sets only a processing clock for pre-purchase applications: the locality must \"process the application and provide the veteran with a letter stating whether the application is approved or denied\" within 20 business days. Localities may set administrative cutoffs for the current bill, so apply as soon as the VA rating letter is in hand."
  },
  "effective": "Va. Code 58.1-3219.5(A): for a rating issued after January 1, 2011 where the veteran already owns and occupies the qualifying residence, \"the exemption for him under this section begins on the date of such rating.\" Taxes paid for the period after the rating date are refunded, but \"no locality shall be liable for any interest on any refund due to the veteran for taxes paid prior to the veteran's filing\" of the affidavit. A pre-purchase approval takes effect \"only after the veteran becomes the owner of the property.\"",
  "lateFiling": "No late-filing penalty; the exemption runs from the VA rating date (or ownership date) once the affidavit is filed, with refunds of over-collected tax but no interest. Whether a locality will refund more than the current year depends on its own refund ordinance and Va. Code 58.1-3990 (three-year refund window for erroneous assessments); not verified for this program.",
  "retroactivity": {
   "type": "local-option",
   "years": null,
   "text": "Statute makes the exemption effective from the VA rating date and contemplates refunds for taxes paid before filing (58.1-3219.5(A), interest-free), but sets no explicit lookback limit; localities generally apply their refund authority under Va. Code 58.1-3990 (three years). Confirm with the commissioner of the revenue and treasurer."
  },
  "renewal": {
   "type": "on-change",
   "text": "Va. Code 58.1-3219.6(A): the veteran \"shall be required to refile the information required by this section only if the veteran's principal place of residence changes.\" No annual re-certification. Surviving spouses likewise refile only on a change of residence."
  },
  "ratingChange": "Eligibility is binary: VA rating of \"100 percent service-connected, permanent, and total disability\" (58.1-3219.5(A)). A 100% rating that is not permanent and total does not qualify; once the P&T determination issues, the exemption begins on the date of that rating. Loss of the P&T rating ends eligibility; the locality may require documentation.",
  "move": "File a new affidavit with the new locality's commissioner of the revenue (refiling is required when \"the veteran's principal place of residence changes,\" 58.1-3219.6(A)). Qualifying veterans may apply BEFORE purchasing with the purchase agreement attached and receive an approval letter stating the exemption amount within 20 business days (58.1-3219.6(B)). Surviving spouses keep the exemption \"without any restriction on the spouse's moving to a different principal place of residence\" (58.1-3219.5(B)).",
  "onlineFiling": {
   "available": null,
   "text": "Varies by locality; many commissioners of the revenue post a PDF application and accept it by mail, email, or in person; a few large localities offer online portals."
  },
  "documents": [
   "Locality's affidavit/written statement naming the veteran and any spouse occupying the property, stating whether the property is jointly owned by married co-owners, and certifying it is the veteran's principal place of residence (58.1-3219.6(A))",
   "Documentation from the U.S. Department of Veterans Affairs showing a 100 percent service-connected, permanent, and total disability rating (VA benefit summary / rating decision letter), 58.1-3219.6(A)",
   "Proof of ownership (deed) and residence (photo ID); trust-held property: trust document showing the veteran or veteran and spouse hold the power of revocation or a life estate (58.1-3219.5(D))",
   "Pre-purchase applicants: real estate purchase agreement (58.1-3219.6(B))",
   "Surviving spouse: veteran's death certificate and \"documentation that the veteran's death occurred on or after January 1, 2011\" (58.1-3219.6(A)); proof of no remarriage"
  ],
  "survivingSpouse": "Va. Code 58.1-3219.5(B): the surviving spouse of a qualifying veteran who died on or after January 1, 2011 keeps the exemption so long as the spouse \"does not remarry\" and occupies the home as a principal residence; the exemption moves with the spouse to a new principal residence. Separate exemption under 58.1-3219.9 for the surviving spouse of a service member who died in the line of duty (DoD Line of Duty determination): dwelling fully exempt up to the locality's average assessed value, excess taxable; affidavit under 58.1-3219.10.",
  "appeal": "Denials are local determinations; Va. Code 58.1-3980 et seq. (application to the commissioner of the revenue for correction, then circuit court under 58.1-3984) is the general route. Not verified for this program specifically.",
  "statute": "Va. Code 58.1-3219.5 (exemption), 58.1-3219.6 (application and refiling), 58.1-3219.9 and 58.1-3219.10 (surviving spouse of member who died in the line of duty); Va. Const. art. X, sec. 6-A",
  "sourceUrls": [
   {
    "url": "https://law.lis.virginia.gov/vacode/title58.1/chapter32/section58.1-3219.5/",
    "title": "Va. Code 58.1-3219.5 Exemption from taxes on property for disabled veterans",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://law.lis.virginia.gov/vacode/title58.1/chapter32/section58.1-3219.6/",
    "title": "Va. Code 58.1-3219.6 Application for exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://law.lis.virginia.gov/vacode/title58.1/chapter32/section58.1-3219.9/",
    "title": "Va. Code 58.1-3219.9 Exemption for surviving spouses of members of the armed forces killed in action / died in the line of duty",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.tax.virginia.gov/",
    "title": "Virginia Department of Taxation (fallback; real estate tax is administered locally)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[0].ratingRequired / summary",
    "note": "Virginia requires a 100 percent service-connected PERMANENT AND TOTAL rating (58.1-3219.5(A)); a non-permanent 100% rating does not qualify. Consider ptRequired: true. Also the 'up to 1 acre' statement is a floor: localities that exempt or defer more than one acre for the elderly/disabled must exempt the same acreage for veterans (58.1-3219.5(C)).",
    "source": "https://law.lis.virginia.gov/vacode/title58.1/chapter32/section58.1-3219.5/"
   }
  ],
  "notes": "Web search budget was exhausted before a state-published directory of commissioners of the revenue could be located; the Department of Veterans Services site (program page and 2023 guidelines PDF) blocks automated requests with HTTP 403, so it is referenced in notes only. Office, form, deadline, renewal, and refund rules all come directly from the statute. Statute history for 58.1-3219.6: 2011 cc. 769, 840; 2020 c. 900; 2023 c. 659."
 },
 "VI": {
  "state": "VI",
  "officeType": "Office of the Tax Assessor (Real Property Tax Division, Office of the Lieutenant Governor), with a prerequisite eligibility form from the V.I. Office of Veterans Affairs",
  "officeTypeNote": "Two agencies, one filing. Step 1: the V.I. Office of Veterans Affairs (OVA) issues a 'Veteran Tax Exemption Eligibility Form' signed by its Director (OVA Policy Letter #6): St. Croix (340) 773-8387, St. Thomas/St. John (340) 774-8387, info_va@va.vi.gov, hours 9:00-3:30. Step 2: file with the Tax Assessor, which has two offices: St. Croix, 1131 King Street, Suite 101, Christiansted VI 00820, (340) 773-6449, fax (340) 719-2355; St. Thomas/St. John, 5049 Kongens Gade, Charlotte Amalie VI 00802, (340) 774-2991, fax (340) 779-7825. The Tax Collector (also under the Lt. Governor) collects the bill; exemptions and credits are filed with the Tax Assessor.",
  "officeLocator": {
   "tier": 1,
   "url": "https://ltg.gov.vi/departments/office-of-tax-assesment/",
   "label": "Office of the Lieutenant Governor: Office of the Tax Assessor (both island offices, forms, portal)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://veterans.vi.gov/contact-2/",
   "note": "No county layer. The Tax Assessor page lists both offices, the Homestead Tax Credit Requirements sheet, the fillable application, and links the USVI Citizen Access Portal (propertytax.vi.gov redirects to usvi.capturecama.com) for tax bill and parcel search and payment. The fallback is the Office of Veterans Affairs contact page, which is where a veteran starts under OVA Policy Letter #6."
  },
  "forms": [
   {
    "programRef": "Veteran Exemption",
    "name": "Veteran Tax Exemption Eligibility Form, signed by the Director of Veterans Affairs or representative (obtained from the Office of Veterans Affairs; not posted online)",
    "number": null,
    "url": "https://veterans.vi.gov/wp-content/uploads/2020/04/Policy-Letter-6-Veterans-Homestead-Tax-Exemptions-.pdf",
    "revision": "OVA Policy Letter #6, April 15, 2020",
    "filedWith": "Office of Veterans Affairs issues it; it accompanies the homestead affidavit filed with the Office of the Tax Assessor"
   },
   {
    "programRef": "*",
    "name": "Application for Homestead and Other Tax Credits (the sworn affidavit required by 33 V.I.C. § 2305(c); lists General Homestead plus one other credit, including 'A Veteran tax credit of $650'; no checkbox for the P&T full exemption)",
    "number": null,
    "url": "https://ltg.gov.vi/wp-content/uploads/2025/01/FILLABLE-TAX-CREDIT-APPLICATION.pdf",
    "revision": "Revised as of June 1, 2022",
    "filedWith": "Office of the Tax Assessor"
   },
   {
    "programRef": "Veteran Homestead Tax Credit",
    "name": "Homestead Tax Credit Requirements (one-page checklist of documents per credit)",
    "number": null,
    "url": "https://ltg.gov.vi/wp-content/uploads/2025/01/Homestead-Tax-Credit-Requirements.pdf",
    "revision": null,
    "filedWith": "Office of the Tax Assessor"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "03-01",
   "text": "Application form header: 'Permanent United States Virgin Islands residency required on January 1; Application due to the Office of the Tax Assessor by March 1'. The Lt. Governor's 2 Mar 2023 release refers to 'the March 1, 2023, deadline for Homestead tax credits.' The deadline is administrative, not in § 2305; § 2305(k) requires the Lt. Governor to announce the program in local newspapers each January."
  },
  "effective": "33 V.I.C. § 2305(f): the credit 'shall take effect during the taxable year corresponding to the date of assessment following the date on which the application was filed.' In practice: residency tested January 1, application due March 1, credit applied to that year's bill. The form also requires six months of VI residence. Credits cannot reduce the bill below the $180 minimum tax (Requirements sheet).",
  "lateFiling": "No late-filing rule on the form, requirements sheet, or in § 2305. Under § 2305(f) an application filed after the assessment date takes effect in the following taxable year. The Lt. Governor's annual notices describe March 1 as the deadline to apply for that tax year.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "§ 2305(f) makes the credit prospective from the assessment date following filing. No refund or prior-year provision exists in § 2305 or on the Tax Assessor's form, requirements sheet, or notices."
  },
  "renewal": {
   "type": "varies",
   "text": "Official sources say no re-file unless circumstances change: § 2305(f) continues the credit until 'the conditions and requirements prescribed in this section cease to exist', and the Lt. Governor's 2 Mar 2023 release says prior recipients 'do not need to submit a new application unless there has been a change' in residence or ownership. News reports of the Lt. Governor's Feb 2025 announcement add that the General Homestead and Veterans credits 'must be renewed every five years' and the Disability credit every three; that cycle appears in no official document found."
  },
  "ratingChange": "The $650 credit (§ 2305(b)(2)) does not depend on a rating. The full exemption (§ 2305(b)(2)(B)) applies while the VA determination 'entitle[s] the veteran to receive compensation for permanent and total disability'; under § 2305(f) the benefit ceases when the qualifying conditions cease, and the form requires changes in homestead status to be reported by March 1. No agency guidance on a rating reduction was found.",
  "move": "Homestead credits require the property to be the applicant's principal residence ('You cannot have homestead tax credit on more than one residence or claim homestead in any other district'). Changes to homestead status must be reported by March 1; a new affidavit is filed for the new home. § 2305(a) defines the homestead as the abode 'owned by, and actually occupied by, the property owner'; renting part of it does not defeat the exemption.",
  "onlineFiling": {
   "available": false,
   "text": "The Tax Assessor posts the fillable PDF on ltg.gov.vi and hands out paper copies at the St. Thomas, St. Croix and St. John offices; § 2305(c) requires a sworn affidavit before a notary or authorized Tax Assessor staff, so there is no electronic submission channel. The OVA eligibility form is obtained in person or by contacting OVA. The Citizen Access Portal handles bill search and payment only."
  },
  "documents": [
   "Veteran Tax Exemption Eligibility Form signed by the Director of Veterans Affairs or representative (OVA Policy Letter #6; request from OVA, St. Croix (340) 773-8387 or St. Thomas/St. John (340) 774-8387)",
   "Completed Application for Homestead and Other Tax Credits, sworn before a notary or authorized Tax Assessor staff (§ 2305(c); notarial service at the Tax Assessor is free)",
   "Copy of DD-214 showing a discharge other than dishonorable (National Guard members qualify with 20+ years of service or more than 30 consecutive days deployed in a war zone)",
   "For the full exemption: VA documentation that the veteran is entitled to compensation for permanent and total disability (the statutory test in § 2305(b)(2)(B); the Tax Assessor's checklist does not name a specific VA document)",
   "Valid Virgin Islands ID: driver's license or voter registration card (a passport is accepted only with a current stamped USVI income tax return)",
   "Current WAPA electric bill or other utility bill showing the legal address (proof of occupancy)",
   "Current income tax return filed and stamped by the VI Bureau of Internal Revenue, or a notarized statement explaining why none was filed plus other income evidence",
   "Parcel ID number and legal description"
  ],
  "survivingSpouse": "The $650 credit is expressly for 'veterans or the widowed spouse of a veteran' (§ 2305(b)(2)); the application reads 'veteran (or the widow(er) of a veteran)'. The full P&T exemption text in § 2305(b)(2)(B) names only the disabled veteran, but § 2305(d) continues the homestead protection and tax credit 'to the favor of the surviving spouse while the latter continues to occupy the said homestead', and the OVA summary (Mar 2025) lists the homestead exemption for 'Veterans or the widowed spouse of a Veteran'. Widow(er)s file the same affidavit with the veteran's DD-214.",
  "appeal": null,
  "statute": "33 V.I.C. § 2305(b)(2)(B) (full exemption for a veteran the VA has determined is entitled to compensation for permanent and total disability); § 2305(b)(2) ($650 veteran credit); § 2305(c) (sworn affidavit in the form prescribed by the Lt. Governor); § 2305(d) (surviving spouse); § 2305(f) (effective date; credit ceases when conditions cease); § 2305(k) (annual January newspaper notice). Text from the 2019 V.I. Code as published by Justia, read via the Internet Archive (16 Jan 2025 capture).",
  "sourceUrls": [
   {
    "url": "https://web.archive.org/web/20250116105058/https://law.justia.com/codes/virgin-islands/2019/title-33/subtitle-2/chapter-81/subchapter-i/2305/",
    "title": "2019 U.S. Virgin Islands Code, 33 V.I.C. § 2305 Homestead exemption (Justia; archived copy, Internet Archive capture 16 Jan 2025; live Justia page returns 403)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://veterans.vi.gov/wp-content/uploads/2020/04/Policy-Letter-6-Veterans-Homestead-Tax-Exemptions-.pdf",
    "title": "V.I. Office of Veterans Affairs Policy Letter #6, Veterans Homestead Tax Exemption (15 Apr 2020): veteran must obtain a Veteran Tax Exemption Eligibility Form from OVA",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://veterans.vi.gov/wp-content/uploads/2025/03/Summary-of-Local-Benefits-Revised-March-14-2025-.pdf",
    "title": "V.I. Office of Veterans Affairs, Summary of Local Benefits (rev. 14 Mar 2025), items 7 and 8: homestead exemption and full P&T exemption",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://veterans.vi.gov/contact-2/",
    "title": "V.I. Office of Veterans Affairs: contact page (phones, email, hours)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://ltg.gov.vi/departments/office-of-tax-assesment/",
    "title": "Office of the Lieutenant Governor: Office of the Tax Assessor",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://ltg.gov.vi/wp-content/uploads/2025/01/FILLABLE-TAX-CREDIT-APPLICATION.pdf",
    "title": "Application for Homestead and Other Tax Credits (Rev. June 1, 2022)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://ltg.gov.vi/wp-content/uploads/2025/01/Homestead-Tax-Credit-Requirements.pdf",
    "title": "Homestead Tax Credit Requirements (scanned checklist; read by OCR)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://ltg.gov.vi/press-release/lieutenant-governor-roach-addresses-concerns-regarding-homestead-tax-credits/",
    "title": "Lt. Governor Roach addresses concerns regarding Homestead tax credits (posted 2 Mar 2023): March 1 deadline; prior recipients need not reapply absent a change",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://legvi.org/",
    "title": "Legislature of the Virgin Islands: 'VI CODE' link to the current LexisNexis-hosted Virgin Islands Code (requires JavaScript; not readable by curl)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://usvi.capturecama.com/",
    "title": "U.S. Virgin Islands Citizen Access Portal (propertytax.vi.gov redirects here)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://viconsortium.com/vi-government/virgin-islands-roach-announces-homestead-tax-credit-requirements-for-2025",
    "title": "VI Consortium, 14 Feb 2025: Lt. Governor announces 2025 homestead tax credit requirements (five-year veteran renewal, $180 minimum)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   },
   {
    "url": "https://viconsortium.com/vi-community_center/virgin-islands-usvi-property-owners-reminded-of-march-3-deadline-for-2025-tax-credit-applications",
    "title": "VI Consortium, 2025: March 3 deadline reminder, two-credit limit, office phones",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "propertyTax.programs[Veteran Exemption].survivingSpouse",
    "issue": "Currently false. § 2305(b)(2)(B) names only the disabled veteran, but § 2305(d) continues 'the homestead protection and tax credit provided in this section' to a surviving spouse who keeps occupying the homestead, and the OVA benefits summary lists the homestead exemption for the widowed spouse. Consider true-with-caveat or a note; the dollar row otherwise stands.",
    "source": "https://web.archive.org/web/20250116105058/https://law.justia.com/codes/virgin-islands/2019/title-33/subtitle-2/chapter-81/subchapter-i/2305/"
   },
   {
    "field": "propertyTax.programs[Veteran Exemption] filing path",
    "issue": "The Tax Assessor's application (Rev. June 2022) and requirements sheet list only the $650 credit, with no checkbox for the full exemption. The claim path is OVA Policy Letter #6: obtain the Veteran Tax Exemption Eligibility Form from the Office of Veterans Affairs, then file the sworn homestead affidavit with the Tax Assessor. No Tax Assessor document describes the exemption itself.",
    "source": "https://veterans.vi.gov/wp-content/uploads/2020/04/Policy-Letter-6-Veterans-Homestead-Tax-Exemptions-.pdf"
   }
  ],
  "notes": "Retry 2026-10-21. Statute text now pinned: Justia's 2019 V.I. Code page for § 2305 is at chapter-81 (the earlier attempts used chapter-87, which never existed), and the Internet Archive holds a 16 Jan 2025 capture that returns 200; the live Justia page is behind a Cloudflare challenge (403), casetext is gone (410), and the current official code is the LexisNexis site linked from legvi.org, which needs a JavaScript session, so amendments after the 2019 edition cannot be ruled out. The OVA Summary of Local Benefits (rev. 14 Mar 2025) reproduces the (b)(2)(B) language, and the Tax Assessor's 2022 form matches § 2305(b) on the $400 and $650 amounts and the one-additional-credit rule, so the provision is treated as current. Claim path: OVA Policy Letter #6 (15 Apr 2020) requires a Veteran Tax Exemption Eligibility Form signed by the OVA Director; the form is not posted on veterans.vi.gov/forms, so it must be requested from OVA. The one piece still resting on news is the five-year renewal cycle announced for 2025: the Lt. Governor's press-release archive (39 pages, checked pages 1-5 covering Aug 2022 to Jun 2026) and a site search for 'homestead' hold no 2024, 2025 or 2026 homestead notice, and the only official homestead release (2 Mar 2023) says no reapplication is needed absent a change. § 2305(k) routes the annual announcement to local newspapers, which is why these notices surface only in press. The Requirements sheet is a Xerox scan read with OCR. va.vi.gov returns 404; the Office of Veterans Affairs site is veterans.vi.gov. Property owners may hold at most two credits (General Homestead $400 plus one other), so the $650 credit stacks only with the general homestead credit; the P&T exemption removes the whole bill."
 },
 "VT": {
  "state": "VT",
  "officeType": "Vermont Office of Veterans Affairs (state agency, Montpelier)",
  "officeTypeNote": "Vermont is centralized: the veteran files with the STATE Office of Veterans Affairs (OVA), not the town listers or clerk. 32 V.S.A. 3802(11)(A): the application and the VA/military statement must be \"filed with the Office of Veterans Affairs\" before May 1. OVA then gives the Department of Taxes and the town only the name, address and SPAN of approved applicants; the town listers apply the reduction to the grand list. Contact the town clerk only for your SPAN, your town's exemption amount ($10,000 to $40,000), and the bill itself.",
  "officeLocator": {
   "tier": 1,
   "url": "https://veterans.vermont.gov/benefits-and-services/veteran-benefits/tax-exemptions-veterans",
   "label": "Vermont Office of Veterans Affairs: Tax Exemptions for Veterans (single statewide filing office)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://tax.vermont.gov/property-owners/exemptions",
   "note": "Mail: Office of Veterans Affairs, 118 State Street, Montpelier, VT 05620-4401; email mil.ovainfo@vermont.gov; fax 802-828-5932; phone 802-828-3379 or 888-666-9844 (in-state). For the town-level amount and SPAN, the Secretary of State's town clerk directory is https://sos.vermont.gov/elections/town-clerks (200) and the Dept of Taxes lister/assessor page is https://tax.vermont.gov/lister-assessor (200)."
  },
  "forms": [
   {
    "programRef": "Veteran Property Tax Exemption",
    "name": "Property Tax Exemption for Eligible Veterans and Their Survivors (application)",
    "number": null,
    "url": "https://veterans.vermont.gov/sites/ova/files/documents/Property%20Tax%20Application.pdf",
    "revision": "State of Vermont, Office of Veterans Affairs Form January 2025 (2025 program year; OVA reissues the form each year)",
    "filedWith": "Vermont Office of Veterans Affairs by mail, email or fax"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": "05-01",
   "text": "32 V.S.A. 3802(11)(A): exemption applies \"if, before May 1 of each year, there is filed with the Office of Veterans Affairs: (I) a written application ... and (II) a written statement from the Military Department or the Veterans Administration showing that the compensation or pension is being paid.\" Form header: \"MAY 1st Deadline by State Law.\" OVA: the 2026 application period closed as of May 1, so the next window is for the 2027 grand list."
  },
  "effective": "Applies to the grand list (April 1 assessment) of the tax year for which the application is filed before May 1; reduces appraised value by the town's amount ($10,000 statutory minimum, up to $40,000 if the town has voted it) on the home owned in fee simple and occupied as the established residence. No proration language in the statute.",
  "lateFiling": "Statute is silent on late applications; OVA treats May 1 as a hard cutoff (\"application period ... is closed as of May 1\"). Missing it forfeits that year's reduction; refile for the following year. No late window verified.",
  "retroactivity": {
   "type": "none",
   "years": null,
   "text": "No statutory refund for prior years; the exemption is granted only for years in which the application and VA statement were on file with OVA before May 1."
  },
  "renewal": {
   "type": "annual",
   "text": "Form: \"Applicants must submit this form and documentation every year by May 1st, except for individuals meeting the One-Time Filing criteria.\" One-time filing (statute 3802(11)(A)(ii): an application \"based upon permanent disability is only required to be filed ... before May 1 of the first year ... and the exemption shall remain on the grand list until title to the property is transferred\"). OVA's one-time list: veterans rated totally and permanently disabled by VA; veterans rated 50%+ for 10 consecutive years; permanent medical retirees; surviving spouses (until remarriage). One-time status must be approved by OVA with written VA proof."
  },
  "ratingChange": "Eligibility is a 50%+ VA disability compensation rating (or VA Improved Pension, or permanent medical military retirement); the amount is fixed by the town, not the rating. A drop below 50% ends eligibility and the applicant must notify OVA (form attestation). Reaching P&T lets the veteran request one-time filing status.",
  "move": "Form: applicant must notify OVA \"if the property above is no longer my primary residence.\" One-time filers who move to a home in a different town must provide proof again (OVA page); the exemption stays on the grand list only \"until title to the property is transferred\" (3802(11)(A)(ii)). File a new application with the new SPAN before May 1.",
  "onlineFiling": {
   "available": true,
   "text": "No web portal, but the completed PDF and documentation may be emailed to mil.ovainfo@vermont.gov or faxed to 802-828-5932, as well as mailed."
  },
  "documents": [
   "OVA Property Tax Exemption application (signed), including the 11-digit School Parcel Account Number (SPAN) from the tax bill or town clerk",
   "Current-year VA Summary of Benefits letter showing disability compensation rated 50% or higher, or Improved Pension (OVA: call VA no later than April 1 or download from va.gov/records/download-va-letters); payment amounts may be blacked out",
   "Permanent medical retirement route: DD Form 214 showing medical retirement, or the medical retirement letter",
   "Survivors: proof of unremarried spouse or minor child status of a veteran who met the criteria at death (DIC or death compensation statement from VA)",
   "One-time filing: written VA proof of total and permanent disability (or 10 consecutive years at 50%+), approved by OVA"
  ],
  "survivingSpouse": "32 V.S.A. 3802(11)(C): \"An unremarried widow or widower of a previously qualified veteran shall be entitled to the exemption ... whether or not the individual is receiving government compensation or pension.\" Minor children of a qualifying veteran also qualify (form). Surviving spouses may file once; they must notify OVA if they remarry.",
  "appeal": "Not addressed by OVA or the statute for this exemption; grand-list valuation grievances go to the town listers and Board of Civil Authority under 32 V.S.A. chapter 131, but eligibility is decided by OVA. Unverified.",
  "statute": "32 V.S.A. 3802(11)",
  "sourceUrls": [
   {
    "url": "https://legislature.vermont.gov/statutes/section/32/125/03802",
    "title": "32 V.S.A. 3802 Property tax exemptions (subdivision (11) veterans)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://veterans.vermont.gov/benefits-and-services/veteran-benefits/tax-exemptions-veterans",
    "title": "Vermont Office of Veterans Affairs: Tax Exemptions for Veterans",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://veterans.vermont.gov/sites/ova/files/documents/Property%20Tax%20Application.pdf",
    "title": "OVA Property Tax Exemption application and instructions (January 2025 form)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.vermont.gov/property-owners/exemptions",
    "title": "Vermont Department of Taxes: Property tax exemptions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://sos.vermont.gov/elections/town-clerks",
    "title": "Vermont Secretary of State: Town Clerks directory",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[0].survivingSpouse",
    "note": "Should be true: 3802(11)(C) extends the exemption to the unremarried widow/widower regardless of VA payments, and the OVA form covers minor children. The summary text already says spouses qualify; the boolean flag does not.",
    "source": "https://legislature.vermont.gov/statutes/section/32/125/03802"
   },
   {
    "field": "programs[0].summary",
    "note": "Statute's qualifying routes are 50%+ disability compensation, death compensation, DIC, or 'pension for disability' (VA Improved Pension); OVA adds permanent medical military retirement via 3802(11)(B)(ii). Consistent with the summary; no dollar change.",
    "source": "https://veterans.vermont.gov/benefits-and-services/veteran-benefits/tax-exemptions-veterans"
   }
  ],
  "notes": "The hosted application PDF is the January 2025 version; the 2026 form (same content, '2026 Summary of Benefits') circulates on town sites but the state URL still serves 2025. The old veterans.vermont.gov/node/103 and /benefits-services/... paths redirect or 404; the current page is /benefits-and-services/veteran-benefits/tax-exemptions-veterans. Statute text contains a duplicated 'Only one exemption ... one-time filing' sentence in (A)(i) and (A)(ii) as published."
 },
 "WA": {
  "state": "WA",
  "officeType": "county assessor",
  "officeTypeNote": "Washington has no flat veteran exemption; the disabled-veteran route is the income-tested Senior Citizens and People with Disabilities exemption (RCW 84.36.381), administered by the county assessor where the home sits. Form 64 0002: \"Complete this application in its entirety and file along with all supporting documents with your county assessor.\" The Department of Revenue prescribes the forms and thresholds but takes no applications; the county treasurer only issues refunds.",
  "officeLocator": {
   "tier": 1,
   "url": "https://dor.wa.gov/taxes-rates/property-tax/county-assessor-and-treasurer-websites",
   "label": "Washington DOR: County assessor and treasurer websites (all 39 counties; short link dor.wa.gov/countycontacts printed on the form)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://dor.wa.gov/taxes-rates/property-tax/property-tax-exemptions-and-deferrals",
   "note": "The DOR page links each county's own assessor site; no state-hosted per-county pages. Income Threshold 3 by county: https://dor.wa.gov/taxes-rates/property-tax/senior-citizens-and-people-disabilities-exemption-and-deferred-income-thresholds"
  },
  "forms": [
   {
    "programRef": "Veteran Exemption",
    "name": "Senior Citizen and People with Disabilities Exemption from Real Property Taxes (check the box 'I am a veteran with an 80% service-connected evaluation or compensated at 100% rate due to service-connected disability')",
    "number": "REV 64 0002",
    "url": "https://dor.wa.gov/sites/default/files/2022-02/64-0002.pdf",
    "revision": "REV 64 0002 (9/17/24)",
    "filedWith": "county assessor (with the Combined Disposable Income Worksheet, REV 63 0036, and proof documents); counties may distribute their own DOR-approved version or an electronic form (WAC 458-16A-135)"
   },
   {
    "programRef": "Surviving Spouse Program",
    "name": "Same form 64 0002, box 'I am the surviving spouse/domestic partner of a person who was previously receiving this exemption and I was at least 57 years of age in the year my spouse/domestic partner passed away'",
    "number": "REV 64 0002",
    "url": "https://dor.wa.gov/sites/default/files/2022-02/64-0002.pdf",
    "revision": "REV 64 0002 (9/17/24)",
    "filedWith": "county assessor"
   }
  ],
  "deadline": {
   "type": "calendar-year",
   "date": "12-31",
   "text": "RCW 84.36.385(1): a claim \"may be made and filed at any time during the year\" for exemption from taxes payable the following year. DOR brochure PT0017: \"Applications and supporting documents for each qualification are due by December 31 of the assessment year. The county assessor may accept late applications.\" Qualifications (age, disability/rating, ownership, occupancy, income) are measured as of December 31 of the assessment year, i.e. the year before the taxes are due."
  },
  "effective": "Two-year cycle: an application filed in the assessment year reduces the taxes due the following year (tax year). If approved under Income Threshold 3, the taxable value is frozen at the assessed value in the first qualifying assessment year (RCW 84.36.381(6)). Relief: Threshold 3 exempts all excess levies, the state school levy (RCW 84.52.065) and certain voter-approved regular levies; Threshold 2 also exempts regular levies on the greater of $70,000 or 45% of value (cap $200,000 of value); Threshold 1 on the greater of $80,000 or 80% of value.",
  "lateFiling": "Late applications are accepted at the assessor's discretion (brochure). Prior years: WAC 458-16A-135 and DOR brochure: a claimant who did not apply when first eligible \"may apply for the exemption in any subsequent year\" and claim prior years \"by applying with separate applications for each year,\" with refunds \"for only up to three years after the taxes were due.\"",
  "retroactivity": {
   "type": "fixed",
   "years": 3,
   "text": "RCW 84.69.030(1)(b)/(2)(c): refund is made without a separate claim when based on \"a decision by the assessor or department approving an exemption application that is filed under chapter 84.36 RCW\" within \"three years after the due date of the payment to be refunded.\" DOR brochure: \"you must file the applications within three years of the date the taxes were due. Refunds will not be made beyond the three year period.\" Form 64 0002 includes a request for refund under RCW 84.69.020."
  },
  "renewal": {
   "type": "varies",
   "text": "RCW 84.36.385(1): the exemption continues \"for no more than six years unless a renewal application is filed\"; (3)-(4): the assessor notifies recipients at least once every six years and renewals are due \"not later than December 31st of the year the assessor notifies\" the person; the assessor may also require renewal when income thresholds change. DOR: \"Renewal required at least once every six years as determined by local assessor.\" Recipients must report any change in status (income, ownership, occupancy, rating) on DOR forms (84.36.385(2)); erroneous exemptions are recovered with penalties for up to five years."
  },
  "ratingChange": "Veteran route: \"combined service-connected evaluation rating of 80% or higher\" or \"total disability rating for a service-connected disability without regard to evaluation percent\" (DOR, for taxes through 2026). RCW 84.36.381 as amended by 2025 c 200 (EHB 1106) and 2026 c 163 reads \"40 percent or higher\" and applies \"to taxes levied for collection in 2027 and thereafter,\" so veterans rated 40-79% can first apply during 2026 for 2027 taxes. A rating increase does not change the relief amount (income-tiered), but a drop below the threshold must be reported. VA disability compensation and DIC are excluded from disposable income (RCW 84.36.383).",
  "move": "Exemption attaches to the principal residence; a change of residence is a reportable change in status, and a new application is filed with the assessor of the county where the new home is located. Gain on sale of a principal residence reinvested in a new home within the same year is excluded from disposable income (form instructions).",
  "onlineFiling": {
   "available": null,
   "text": "WAC 458-16A-135: applications \"are filed in person, by mail, or by electronic means\" if the county offers an approved electronic form; several counties (e.g. King, Pierce, Snohomish) run online portals, others are paper only. RCW 84.36.385(7) authorizes electronic filing."
  },
  "documents": [
   "Form 64 0002 plus Combined Disposable Income Worksheet with proof of ALL income of the applicant, spouse/domestic partner and co-tenants (tax return, 1099s, SSA statement, VA award letter) and receipts for deductible expenses (Medicare/insurance premiums, prescriptions, in-home care, etc.)",
   "Proof of disability/veteran status: VA disability award letter showing the combined service-connected rating or compensation at the 100% rate (or SSA disability award letter / physician Proof of Disability Statement for non-veteran disability)",
   "Proof of age and identity: driver's license or state photo ID, voter registration, or birth certificate",
   "Proof of ownership and occupancy as principal residence (deed/contract; trust documents in full if the home is held in trust)",
   "Surviving spouse: proof of age 57+ in the year of death and that the deceased was receiving the exemption"
  ],
  "survivingSpouse": "A surviving spouse or domestic partner of a person receiving the exemption keeps it if at least 57 years old in the year of death and otherwise meeting ownership, occupancy and income requirements (RCW 84.36.381(1); form box). DIC is excluded from disposable income. Washington has no separate veteran-widow exemption.",
  "appeal": "DOR brochure: a denial can be appealed to the county Board of Equalization, which \"must receive your appeal by July 1, or within 30 days of when the denial was mailed,\" whichever is later (RCW 84.36.385(5), 84.48.010, 84.40.038).",
  "statute": "RCW 84.36.379-84.36.389 (esp. 84.36.381 qualifications, 84.36.383 definitions, 84.36.385 claims and renewals), RCW 84.69.030 (three-year refunds), WAC 458-16A-100 through 458-16A-150 (esp. 458-16A-135 application procedures)",
  "sourceUrls": [
   {
    "url": "https://app.leg.wa.gov/RCW/default.aspx?cite=84.36.381",
    "title": "RCW 84.36.381 Residences: property tax exemptions, qualifications (current text incl. 2025 c 200 / 2026 c 163 effective for 2027 collections)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://app.leg.wa.gov/RCW/default.aspx?cite=84.36.385",
    "title": "RCW 84.36.385 Residences: claim for exemption, forms, change of status, renewals",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://app.leg.wa.gov/RCW/default.aspx?cite=84.69.030",
    "title": "RCW 84.69.030 Refunds: claims, three-year limit, no claim required for exemption approvals",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://app.leg.wa.gov/WAC/default.aspx?cite=458-16A-135",
    "title": "WAC 458-16A-135 Senior citizen, people with disabilities, and veterans exemption: application procedures",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.wa.gov/sites/default/files/2022-02/64-0002.pdf",
    "title": "Form REV 64 0002 (9/17/24) Senior Citizen and People with Disabilities Exemption from Real Property Taxes, with instructions",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.dor.wa.gov/sites/default/files/2022-02/PTExemption_Senior.pdf",
    "title": "DOR brochure PT0017 (09/23/2024): Property Tax Exemption for Senior Citizens and People with Disabilities (deadline, renewals, refunds, appeals)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.wa.gov/taxes-rates/property-tax/property-tax-exemptions-and-deferrals",
    "title": "DOR: Property tax exemptions and deferrals (program summary, 80%/total rating, six-year renewal)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.wa.gov/taxes-rates/property-tax/property-tax-exemption-seniors-people-retired-due-disability-and-veterans-disabilities",
    "title": "DOR: Property tax exemption for seniors, people retired due to disability, and veterans with disabilities (apply through county assessor)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.wa.gov/taxes-rates/property-tax/senior-citizens-and-people-disabilities-exemption-and-deferred-income-thresholds",
    "title": "DOR: Income thresholds by county",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dor.wa.gov/taxes-rates/property-tax/county-assessor-and-treasurer-websites",
    "title": "DOR: County assessor and treasurer websites (dor.wa.gov/countycontacts)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[0].ratingRequired / note",
    "note": "Confirmed: 80% (or compensation at the 100% rate) for taxes payable through 2026; the codified RCW 84.36.381 already reads 40% with the amendment applying to taxes levied for collection in 2027 and thereafter (2025 c 200, plus 2026 c 163). The DOR web page and 9/17/24 form still show 80%; expect a form revision for 2026 applications.",
    "source": "https://app.leg.wa.gov/RCW/default.aspx?cite=84.36.381"
   },
   {
    "field": "programs[1] (Surviving Spouse Program)",
    "note": "Empty summary. There is no separate veteran surviving-spouse program; the surviving spouse/domestic partner aged 57+ in the year of death continues the same 84.36.381 exemption if income-qualified. Consider merging into program 0 or filling the summary.",
    "source": "https://app.leg.wa.gov/RCW/default.aspx?cite=84.36.381"
   }
  ],
  "notes": "Deadline type set to calendar-year because the statute allows filing any time during the assessment year and DOR frames December 31 as the due date for the next year's taxes; assessors accept late filings and the three-year refund rule covers missed years. RCW page text does not label which clauses come from 2025 c 200 vs 2026 c 163; the 40% figure is in the current codified text with the 2027 applicability note."
 },
 "WI": {
  "state": "WI",
  "officeType": "Wisconsin Department of Revenue (state), claimed on the Form 1 income tax return after a one-time Wisconsin Department of Veterans Affairs certification",
  "officeTypeNote": "Two-step, both at state level: (1) get a one-time Certification of Eligibility from the Wisconsin Department of Veterans Affairs (WDVA) using Form WDVA 2097; (2) each year claim the credit on the Wisconsin income tax return (Form 1, line 34 for 2025) administered by the Department of Revenue, enclosing the property tax bill and proof of payment (and the WDVA certificate the first year). Nothing is filed with the county treasurer or local assessor; County/Tribal Veterans Service Offices help assemble the WDVA request. Note: Wisconsin's 'Schedule VC' is the Angel Investment Credit, NOT this credit; there is no separate schedule, the amount goes directly on Form 1.",
  "officeLocator": {
   "tier": 1,
   "url": "https://www.revenue.wi.gov/Pages/FAQS/ise-vetprop.aspx",
   "label": "Wisconsin DOR: Veterans and Surviving Spouses Property Tax Credit FAQ (single statewide filing office; DOR 608-266-2486)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://dva.wi.gov/services/housing-and-financial-services/property-tax-credit/",
   "note": "WDVA certification mail-in: Wisconsin Department of Veterans Affairs, Attn: VBRC-PTC Application, P.O. Box 7843, Madison, WI 53707 (B0106); 1-800-947-8387, WisVets@dva.wisconsin.gov. County/Tribal Veterans Service Office finder: https://dva.wi.gov/resources/find-my-cvso-tvso/ (200)."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Request for Certification for Wisconsin Disabled Veterans and Unremarried Surviving Spouses Property Tax Credit",
    "number": "WDVA 2097",
    "url": "https://dva.wi.gov/wp-content/uploads/2024/05/WDVA_2097_Request_Cert_Veterans_Property_Tax_Credit.pdf",
    "revision": "WDVA 2097 (06/19); also included in brochure WDVA B0106 (10/25)",
    "filedWith": "Wisconsin Department of Veterans Affairs (one time, by mail)"
   },
   {
    "programRef": "*",
    "name": "Wisconsin Disabled Veterans and Unremarried Surviving Spouses Property Tax Credit: Information, Instructions, and Request Forms (includes WDVA 2097 and the VA 'Tax Abatement Letter' request)",
    "number": "WDVA B0106",
    "url": "https://dva.wi.gov/wp-content/uploads/2025/10/WDVA_B0106_WI_Veterans_Property_Tax_Credit.pdf",
    "revision": "10/25",
    "filedWith": "reference / forms packet"
   },
   {
    "programRef": "*",
    "name": "Wisconsin Form 1 Income Tax Return, line 34 'Eligible Veterans and Surviving Spouses Property Tax Credit' (2025); see Form 1 Instructions",
    "number": "Form 1 (2025)",
    "url": "https://www.revenue.wi.gov/TaxForms2025/2025-Form1-Inst.pdf",
    "revision": "2025 tax year instructions (line number changes year to year)",
    "filedWith": "Wisconsin Department of Revenue, with the annual income tax return"
   }
  ],
  "deadline": {
   "type": "calendar-year",
   "date": null,
   "text": "Claimed on the Wisconsin income tax return for the year the property taxes were PAID (payment date = date received by the municipality). DOR Fact Sheet 1122: \"The credit must be claimed within four years of the unextended due date of the Wisconsin income tax return. For example, the 2022 Wisconsin income tax return was due April 15, 2023 ... the tax return must be filed by April 15, 2027.\" Wis. Stat. 71.07(6e)(c)1: \"No credit may be allowed ... unless it is claimed within the time period under s. 71.75 (2).\""
  },
  "effective": "Credit = 100% of real property taxes (excluding special assessments, delinquent interest, service charges) paid during the tax year on the principal dwelling and up to one acre; refundable (excess over income tax is paid to the claimant). Taxes paid in a year the claimant did not hold a qualifying 100%/IU rating for that part of the year are not eligible (B0106: no credit for any year in which the rating lapsed 'for any part of a given year'). Home sold mid-year: taxes prorated per the closing agreement or by months of ownership (71.07(6e)(a)5).",
  "lateFiling": "A late original or amended Wisconsin return may claim the credit up to four years after the unextended due date (Fact Sheet 1122). If WDVA has not finished the eligibility review before that deadline, request an extension from DOR (name, SSN/ITIN, date certification was requested, tax years) BEFORE the four-year date; the credit for that year is otherwise lost.",
  "retroactivity": {
   "type": "fixed",
   "years": 4,
   "text": "Fact Sheet 1122: claim \"within four years of the unextended due date of the Wisconsin income tax return\" (s. 71.75(2)); a veteran certified today can file or amend returns for the open years in which they held the 100%/IU rating and paid property taxes. The WDVA certificate must cover each year claimed (B0106: rating letter 'for the first year the property tax credit will be claimed, AND in each year in which credit is claimed')."
  },
  "renewal": {
   "type": "annual",
   "text": "Credit is claimed every year on the return; the WDVA certification is one-time. Form 1 instructions: \"You do not have to obtain certification from the WDVA for 2025 if you previously received certification for a prior year.\" DOR FAQ: the verification \"is not required to be submitted with the return in subsequent years unless your eligibility changes.\" B0106: \"the applicant need not reapply for certification for following years, unless the applicant's status changes.\""
  },
  "ratingChange": "Eligibility requires a 100% schedular service-connected rating (38 USC 1114/1134) or 100% based on individual unemployability (B0106 defines IU per 38 CFR); prestabilization, hospitalization, convalescent and 38 USC 1151 ratings do not count. If the rating is reduced so the veteran does not hold 100%/IU for any part of a year, no credit for that year; the veteran must notify WDVA (WDVA 2097 attestation). Returning to 100% requires a new VA letter to WDVA.",
  "move": "The credit follows the claimant's principal dwelling in Wisconsin; no re-certification is needed for a move within Wisconsin unless status changes, but the veteran must remain a current Wisconsin resident (ch. 45). Moving out of state ends eligibility. Mid-year sale/purchase: taxes prorated by closing statement or months of ownership.",
  "onlineFiling": {
   "available": true,
   "text": "The income tax return (with the credit on Form 1) may be e-filed through WisTax/approved software; required enclosures (tax bill, proof of payment, WDVA certificate in year one) are attached as PDFs or mailed. The WDVA 2097 certification request is paper by mail."
  },
  "documents": [
   "WDVA step: Form WDVA 2097; DD Form 214 (and DD 215 if any); VA rating notification letter dated within 12 months showing a 100% combined schedular rating or 100% IU (or DIC award for spouses), obtained with the approved 'Tax Abatement Letter' request mailed to VA, Attn: Milw Public Contact Team, P.O. Box 4444, Janesville, WI 53547-4444",
   "WDVA step: proof of Wisconsin residency at entry (Home of Record on DD-214) or any consecutive 5 years after entry (WI tax returns, driver license history, hunting/fishing licenses, voter record, UW/WTC resident status, or WDVA 1035 income tax release); Form WDVA 1805 residency affidavit / WDVA 0001 if the veteran never filed one",
   "WDVA step, surviving spouse: certified death certificate (or casualty report if died on active duty) and certified marriage certificate",
   "DOR step, every year: copy of the property tax bill and proof of payment made during the tax year (Form 1 instructions, 'What to Include'); Worksheet 1 if the parcel exceeds one acre",
   "DOR step, first year only: copy of the WDVA Certification of Eligibility",
   "Life estate holders: copy of the life estate, tax bill and proof of payment (DOR FAQ)"
  ],
  "survivingSpouse": "Wis. Stat. 71.07(6e)(a)2 / Form 1 instructions: an unremarried surviving spouse qualifies if the veteran (with the Wisconsin entry/5-year residency link) died on active duty while a Wisconsin resident; or was a Wisconsin resident at death with a 100% schedular or IU rating; or was a Guard/reserve member who died in the line of duty on active or inactive duty for training; or if the spouse began and continues to receive VA Dependency and Indemnity Compensation. Spouse must be certified by WDVA and loses the credit on remarriage.",
  "appeal": "Eligibility disputes go to WDVA (certification decision); credit disallowances by DOR follow the normal Wisconsin income tax notice/appeal process (Wis. Stat. 71.88). Not verified in detail for this block.",
  "statute": "Wis. Stat. 71.07(6e) (credit), 71.75(2) (four-year claim window), ch. 45 (WDVA residency/benefits); WDVA brochure B0106 (10/25); DOR Fact Sheet 1122",
  "sourceUrls": [
   {
    "url": "https://docs.legis.wisconsin.gov/statutes/statutes/71/i/07/6e",
    "title": "Wis. Stat. 71.07(6e) Veterans and surviving spouses property tax credit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.wi.gov/TaxForms2025/2025-Form1-Inst.pdf",
    "title": "2025 Wisconsin Form 1 Instructions, Line 34 Eligible Veterans and Surviving Spouses Property Tax Credit (certification, what to include)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.wi.gov/DOR%20Publications/1122vptc-ext.pdf",
    "title": "Wisconsin DOR Fact Sheet 1122: Veterans and Surviving Spouses Property Tax Credit, Verification of Eligibility and Extension of Time to Claim Credit (four-year rule)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.wi.gov/Pages/FAQS/ise-vetprop.aspx",
    "title": "Wisconsin DOR FAQ: Veterans and Surviving Spouses Property Tax Credit (property questions)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://www.revenue.wi.gov/Pages/FAQS/ise-vetqual.aspx",
    "title": "Wisconsin DOR FAQ: Veterans and Surviving Spouses Property Tax Credit (qualification, certification attachment)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dva.wi.gov/wp-content/uploads/2025/10/WDVA_B0106_WI_Veterans_Property_Tax_Credit.pdf",
    "title": "WDVA B0106 (10/25) Wisconsin Disabled Veterans and Unremarried Surviving Spouses Property Tax Credit: information, instructions, request forms",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dva.wi.gov/wp-content/uploads/2024/05/WDVA_2097_Request_Cert_Veterans_Property_Tax_Credit.pdf",
    "title": "Form WDVA 2097 Request for Certification (06/19)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dva.wi.gov/services/housing-and-financial-services/property-tax-credit/",
    "title": "WDVA: Property Tax Credit program page",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://dva.wi.gov/resources/find-my-cvso-tvso/",
    "title": "WDVA: Find my County/Tribal Veterans Service Office",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[0].details",
    "note": "'Requires 100% T&P or IU rating' is slightly off: the statute requires a 100% schedular service-connected rating OR 100% IU; permanence is not a statutory element (though a rating that lapses during a year disqualifies that year). Also 'Claimed on WI income tax return' should name Form 1 line 34 (2025) and the one-time WDVA 2097 certification, not a schedule.",
    "source": "https://docs.legis.wisconsin.gov/statutes/statutes/71/i/07/6e"
   }
  ],
  "notes": "The brief's lead that the credit is claimed on 'Schedule VC' is wrong: Wisconsin's Schedule VC is the Angel Investment / Early Stage Seed Investment Credit (its 2025 instructions were opened to confirm). The veterans credit is entered directly on Form 1 (line 34 in 2025; the line number moves year to year). The WDVA 2097 PDF is dated 06/19 and lists Attn: 'Wisconsin Veterans Property Tax Credit' at 2135 Rimrock Road; B0106 (10/25) says Attn: 'VBRC-PTC Application'; Form 1 instructions say 'BRC-PTC Application, 201 West Washington Ave.' All use P.O. Box 7843, Madison, WI 53707-7843.",
  "kind": "income-tax-credit"
 },
 "WV": {
  "state": "WV",
  "officeType": "West Virginia Tax Division (state), claimed on the IT-140 personal income tax return",
  "officeTypeNote": "This is a refundable STATE INCOME TAX CREDIT, not a county exemption. You pay the county sheriff's property tax bill on time, then claim the amount back on your annual WV personal income tax return (IT-140, line 21(B)) with Form DV-1 attached. Nothing is filed with the county assessor for the credit itself, but the property must already be on the county books as a Class II owner-occupied residential homestead (the DV-1 asks for the ticket number, district, map, parcel and tax class from the county tax ticket), and TSD-455 points you to the county assessor for that.",
  "officeLocator": {
   "tier": 1,
   "url": "https://tax.wv.gov/Individuals/Pages/Individuals.aspx",
   "label": "West Virginia Tax Division, Personal Income Tax (single statewide filing office; Taxpayer Services 304-558-3333 / 800-982-8297, taxhelp@wv.gov)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://tax.wv.gov/Documents/TSD/tsd455.pdf",
   "note": "For the county-side prerequisite (homestead classification and timely payment), the Tax Division publishes a directory of all 55 County Assessors (name, address, phone, fax, link): https://tax.wv.gov/Business/PropertyTax/Pages/PropertyTaxCountyAssessors.aspx (200). No per-county state URL pattern."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Disabled Veteran Real Property Tax Credit (schedule attached to the IT-140)",
    "number": "DV-1",
    "url": "https://tax.wv.gov/Documents/PropertyTax/2025/dv1.2025.pdf",
    "revision": "Rev. 07/2025 (tax year 2025 version; the Tax Division reissues it each year under /Documents/PropertyTax/<year>/)",
    "filedWith": "West Virginia Tax Division with Form IT-140 (paper or e-file), plus property tax receipt(s) and VA disability rating letter"
   },
   {
    "programRef": "*",
    "name": "DV-1 Instructions",
    "number": "DV-1 Instructions (2025)",
    "url": "https://tax.wv.gov/Documents/PropertyTax/2025/dv1.instructions.2025.pdf",
    "revision": "2025",
    "filedWith": "reference only"
   }
  ],
  "deadline": {
   "type": "calendar-year",
   "date": null,
   "text": "Claimed on the annual IT-140 for the personal income taxable year in which the property tax was paid (first return available: tax year 2024, filed in 2025). The real property tax itself must be paid ON TIME to count: TSD-455: \"the first half of the assessment must be paid before October 1 and the second half before April 1.\" W. Va. Code 11-13MM-4(b): \"in no case shall any credit be allowed ... for any untimely real property tax paid, or any payment of delinquent real property tax, or payment of 'back tax'.\" The IT-140 due date itself was not verified from a WV source for this block."
  },
  "effective": "Credit equals the WV ad valorem real property tax \"timely paid a county sheriff on a homestead which is used or occupied exclusively for residential purposes ... during the personal income taxable year\" (11-13MM-4(b)); refundable to the extent it exceeds income tax (11-13MM-4(d)). DV-1 Part II totals: second half of prior-year taxes paid before April 1, first half of current-year taxes paid before October 1, second half of current-year taxes paid in the current year. Homestead must have been used or occupied by the owner for at least 6 months (TSD-455).",
  "lateFiling": "A late or delinquent property tax payment is permanently ineligible for the credit for that installment (11-13MM-4(b)). A late income tax return or amended IT-140 claiming the credit is governed by the general WV refund limitation period (W. Va. Code 11-10-14), not verified for this block.",
  "retroactivity": {
   "type": "unverified",
   "years": null,
   "text": "No program-specific lookback. Credit first available for tax year 2024 (returns filed in 2025). Amended-return refund window under W. Va. Code 11-10-14 (generally three years from the return due date) was not opened for this block; treat as unverified."
  },
  "renewal": {
   "type": "annual",
   "text": "File a new DV-1 with every year's IT-140 (the credit is computed from each year's timely payments). DV-1 instructions: include the VA disability rating letter \"if this is the first year you are claiming the credit\"; the DV-1 form itself says \"To claim this credit, you MUST include a copy of your disability rating letter from the VA along with a copy of your tax receipt\" (attach it every year to be safe). The form asks whether the property classification changed or the property was sold during the year."
  },
  "ratingChange": "W. Va. Code 11-13MM-2 (as amended 2025, HB 2121): \"disabled veteran taxpayer\" means an honorably discharged person \"rated as having a 90 percent or greater service-connected disability by the United States Department of Veterans Affairs or meets the eligibility requirements for individual unemployability.\" TSD-455 and the DV-1 describe this as 90-100% permanently and totally disabled. A rating drop below 90% (without IU) ends eligibility for later years; the credit terminates on \"a determination by the assessor that the property ... no longer qualifies\" (11-13MM-4(e)(3)).",
  "move": "Credit terminates on \"the sale of the property for which the tax credit was approved\" (11-13MM-4(e)(2)); claim on the new homestead once it is owner-occupied for 6 months and the taxes are timely paid. Only one homestead (the primary residence) may be claimed.",
  "onlineFiling": {
   "available": true,
   "text": "The IT-140 with DV-1 can be e-filed through MyTaxes/approved software or mailed; attachments (tax receipt and VA letter) accompany the return."
  },
  "documents": [
   "Form IT-140 West Virginia Personal Income Tax Return with the credit entered on line 21(B) (TSD-455)",
   "Form DV-1 completed in full (SSNs, property tax payments by installment, ticket number, tax year, county, district code, map, first 4 digits of parcel, tax class)",
   "Copy of the county sheriff's property tax receipt(s) showing timely payment",
   "Copy of the VA disability rating letter showing 90% or greater service-connected disability (or individual unemployability); required the first year per instructions, demanded on the form itself",
   "Widowed spouse: evidence the veteran claimed the credit in a prior year, no remarriage, homestead not sold or reclassified"
  ],
  "survivingSpouse": "W. Va. Code 11-13MM-2(5): \"eligible widowed spouse\" is the unmarried surviving spouse of a disabled veteran taxpayer \"who had previously received the disabled veteran real property tax credit\"; 11-13MM-4(e)(1): the spouse \"may continue to receive the tax credit until his or her death or remarriage.\" TSD-455 adds that the homestead must not have been sold or reclassified. The DV-1 asks whether the claimant is the widowed spouse and whether they remarried during the year.",
  "appeal": "Denied credits follow the WV personal income tax assessment/refund appeal process (W. Va. Office of Tax Appeals under W. Va. Code 11-10A); not verified in detail for this block.",
  "statute": "W. Va. Code 11-13MM-1 et seq. (Property Tax Adjustment Act), esp. 11-13MM-2 (definitions) and 11-13MM-4 (disabled veteran and eligible widowed spouse real property tax credit); enacted 2023 HB 2526, amended 2025 HB 2121; Tax Division publication TSD-455 (Rev. January 2026)",
  "sourceUrls": [
   {
    "url": "https://code.wvlegislature.gov/11-13MM-4/",
    "title": "W. Va. Code 11-13MM-4 Disabled veteran and eligible widowed spouse real property tax credit",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://code.wvlegislature.gov/11-13MM-2/",
    "title": "W. Va. Code 11-13MM-2 Definitions (disabled veteran taxpayer, eligible widowed spouse)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.wv.gov/Documents/TSD/tsd455.pdf",
    "title": "WV Tax Division TSD-455 Disabled Veteran Real Property Tax Credit (Rev. January 2026)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.wv.gov/Documents/PropertyTax/2025/dv1.2025.pdf",
    "title": "Form DV-1 Disabled Veteran Real Property Tax Credit (Rev. 07/2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.wv.gov/Documents/PropertyTax/2025/dv1.instructions.2025.pdf",
    "title": "Form DV-1 Instructions (2025)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.wv.gov/Business/PropertyTax/Pages/PropertyTaxCountyAssessors.aspx",
    "title": "WV Tax Division: County Assessors directory (55 counties)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://tax.wv.gov/Individuals/Pages/Individuals.aspx",
    "title": "WV Tax Division: Individuals (personal income tax)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[0].summary / ptRequired",
    "note": "The statute as amended by 2025 HB 2121 (11-13MM-2) defines the taxpayer as rated '90 percent or greater service-connected disability ... or meets the eligibility requirements for individual unemployability'; it does not say permanent and total. TSD-455 and the DV-1 still use '90-100% permanently and totally disabled'. The summary's 'a 90%+ combined rating alone does not qualify' overstates the statute; IU also qualifies. Keep the P&T caution as administrative practice but cite the statute.",
    "source": "https://code.wvlegislature.gov/11-13MM-2/"
   },
   {
    "field": "programs[0].details",
    "note": "Statute cite should be W. Va. Code 11-13MM-4 (Property Tax Adjustment Act), not an unnamed 'Form DV-1' authority; the credit is limited to taxes TIMELY paid (first half before Oct 1, second half before April 1), which is a hard gate worth surfacing. survivingSpouse should be true (eligible widowed spouse continues until death or remarriage).",
    "source": "https://tax.wv.gov/Documents/TSD/tsd455.pdf"
   }
  ],
  "notes": "The brief's lead was right: office is the state Tax Division and the 'form' is the DV-1 schedule to the IT-140. The 2025 enrolled HB 2121 PDF on wvlegislature.gov timed out (status 000) and was dropped; the codified text on code.wvlegislature.gov reflects it. Web search budget was exhausted before the IT-140 due date or the 11-10-14 refund window could be confirmed from a WV source, so those are flagged unverified rather than stated.",
  "kind": "income-tax-credit"
 },
 "WY": {
  "state": "WY",
  "officeType": "county assessor",
  "officeTypeNote": "W.S. 39-13-105(c): the claimant \"shall file a sworn claim on or before the fourth Monday in May with the county assessor of the county in which the property against which the exemption is sought is located.\" The exemption may be claimed in only one county per year. If applied to motor vehicle registration fees instead of the home, the assessor still approves it and the county treasurer applies it at registration (W.S. 31-3-101(b)(iii)).",
  "officeLocator": {
   "tier": 1,
   "url": "https://wyo-prop-div.wyo.gov/contacts/assessor-contacts",
   "label": "Wyoming Department of Revenue, Property Tax Division: Assessor Contacts (all 23 counties; assessor name, phone, email, county website)",
   "countyUrlPattern": null,
   "slugRule": null,
   "fallbackUrl": "https://wyo-prop-div.wyo.gov/tax-relief",
   "note": "The DOR Tax Relief page describes the Veterans Property Tax Exemption and links the state claim form, the VA verification form, the qualifying-medals list, and Chapter 14 rules (all hosted as Google Drive downloads). Wyoming Veterans Commission (DD-214 corrections): 800-833-5987."
  },
  "forms": [
   {
    "programRef": "*",
    "name": "Veterans Property Tax Exemption Application (state form; Sections 1-4, certification; initial applicants complete Section 1, returning applicants Section 2)",
    "number": "PTD-100",
    "url": "https://drive.google.com/uc?export=download&id=1bCeUFUjrsHO_s1C6r2sRLjegR4bX-9pG",
    "revision": "03/2025",
    "filedWith": "county assessor (counties also post their own copies, e.g. Fremont County)"
   },
   {
    "programRef": "*",
    "name": "Veterans Administration Verification Form (authorizes VA to certify the service-connected disability rating or unemployability status directly to the county assessor)",
    "number": null,
    "url": "https://drive.google.com/uc?export=download&id=1hdRymZ6fs2f6SW_FuiXpY-aELY5sB6ZO",
    "revision": null,
    "filedWith": "county assessor (routed to VA Cheyenne regional office)"
   }
  ],
  "deadline": {
   "type": "fixed-date",
   "date": null,
   "text": "Fourth Monday in May each year (W.S. 39-13-105(c)): \"the claimant shall file a sworn claim on or before the fourth Monday in May with the county assessor.\" DOR Tax Relief page: \"Fourth Monday in May for property tax exemption.\" (2026: May 25; 2027: May 24.) After the first sworn claim, later years only require the claimant to contact the assessor by phone, mail or other method by the same date to confirm continued eligibility (39-13-105(k)).",
   "floating": {
    "nth": 4,
    "weekday": 1,
    "month": 5,
    "label": "fourth Monday in May"
   }
  },
  "effective": "Applies to the tax year (calendar year, assessment date January 1) in which the claim is filed by the fourth Monday in May; $6,000 of ASSESSED value (W.S. 39-13-105(b)), roughly $175 of tax on a home at typical mill levies (Fremont County estimate), or applied to motor vehicle registration fees (about $90 per Fremont County). For vehicles the 'tax year' is the enrollment period ending the fourth Monday in May (DOR Rules ch. 14 sec. 17(a)(iii)).",
  "lateFiling": "W.S. 39-13-105(d): an honorably discharged claimant \"who files a claim after the fourth Monday in May is entitled to receive the exemption for that taxable year in addition to the exemption allowed during the ensuing tax year if a claim is filed on or before the fourth Monday in May of the ensuing calendar year\" (i.e. the missed year is recovered by filing before the next deadline). 39-13-105(g): a late claim filed within the same year can otherwise be used only to reduce motor vehicle registration fees. 39-13-105(e): the assessor may waive the filing for a claimant who re-entered the armed services before the deadline, or accept a claim from the spouse.",
  "retroactivity": {
   "type": "fixed",
   "years": 1,
   "text": "One prior tax year only, via 39-13-105(d): file by the fourth Monday in May of the following year to receive both the missed year's exemption and the current year's. No broader refund lookback in the statute."
  },
  "renewal": {
   "type": "annual",
   "text": "Annual, but lightweight after year one. 39-13-105(k): \"in subsequent years the claimant shall remain qualified ... if the claimant contacts the assessor's office by telephone, mail or other communication method on or before the fourth Monday in May and confirms that the claimant continues to meet the requirements.\" 39-13-105(m): assessors must include exemption instructions and timelines with the annual assessment schedule. PTD-100: returning applicants whose status is unchanged complete Section 2 only; full documentation again if status changed or applying in a different county."
  },
  "ratingChange": "Eligibility for disabled veterans is any \"compensable service connected disability certified by the veterans administration or a branch of the armed forces\" (39-13-105(a)(vii)); the exemption is a flat $6,000 of assessed value regardless of percentage, so rating changes do not alter the amount. (The DOR VA verification form's reference to 'proportion of their rating' is legacy wording; the statute sets a flat amount.) A rating reduced to 0% ends eligibility unless another criterion (wartime service, expeditionary/campaign medal) applies.",
  "move": "Claim may be made in only one county per tax year (39-13-105(c)(v)); a move to a new county requires a new initial application with full documentation in that county (PTD-100 instructions). Applies only to the principal residence (39-13-105(c)(iv)) or, alternatively, to motor vehicle registration.",
  "onlineFiling": {
   "available": null,
   "text": "Varies by county: the sworn claim is a signed paper form at most assessors' offices; some counties (e.g. Fremont) accept renewal confirmation by phone or an online renewal form. The state hosts the PDF only."
  },
  "documents": [
   "Sworn claim on Form PTD-100 (or county equivalent) attesting to the right to the exemption, ownership (deed, trust, or recorded contract for deed), principal residence, expected tax benefit, and single-county claim (39-13-105(c))",
   "DD Form 214 or other written evidence of separation showing an honorable discharge (39-13-105(f)); PTD-100: 'adequate documentation of their military service, discharge information, and Wyoming residency' with the initial application",
   "Proof of bona fide Wyoming residency for at least three years at the time of claiming (39-13-105(a))",
   "Disabled-veteran route: VA (or service branch) certification of a compensable service-connected disability, via the DOR Veterans Administration Verification Form or a VA rating letter",
   "Medal route: discharge documents showing the Armed Forces Expeditionary Medal or other authorized campaign/service medal (DOR qualifying-medals list)",
   "Surviving spouse / Gold Star parent: proof of the veteran's qualifying service, death, Wyoming residency of both at time of death, three-year residency of the claimant, and (spouse) no remarriage (39-13-105(h); PTD-100 Section 4)"
  ],
  "survivingSpouse": "W.S. 39-13-105(a)(v) and (h): the surviving spouse \"during widowhood or widower hood\" (or surviving parents if no spouse; divorced parents may each qualify) receives the exemption if both veteran and spouse were Wyoming residents at the veteran's death, the spouse has three years' Wyoming residency when claiming, and the veteran would have qualified; same assessor filing by the fourth Monday in May. Ends on remarriage (DOR Tax Relief page).",
  "appeal": "Assessor determinations are contested through the county board of equalization under W.S. 39-13-109(b) (general property tax appeal route); not verified for this exemption specifically.",
  "statute": "W.S. 39-11-105(a)(xxiv) (exemption), W.S. 39-13-105 (eligibility, $6,000 assessed value, fourth Monday in May, late claims, annual confirmation), W.S. 31-3-101(b)(iii) (vehicle fee alternative); Wyoming Department of Revenue Rules, Chapter 14, Section 17",
  "sourceUrls": [
   {
    "url": "https://wyoleg.gov/statutes/compress/title39.pdf",
    "title": "Wyoming Statutes Title 39 (current compilation; W.S. 39-13-105 Exemptions)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://wyo-prop-div.wyo.gov/tax-relief",
    "title": "Wyoming DOR Property Tax Division: Tax Relief (Veterans Property Tax Exemption, forms, rules)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://wyo-prop-div.wyo.gov/contacts/assessor-contacts",
    "title": "Wyoming DOR Property Tax Division: Assessor Contacts (23 counties)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://drive.google.com/uc?export=download&id=1bCeUFUjrsHO_s1C6r2sRLjegR4bX-9pG",
    "title": "DOR Form PTD-100 (03/2025) Veterans Property Tax Exemption Application (final URL drive.usercontent.google.com/download?id=1bCeUFUjrsHO_s1C6r2sRLjegR4bX-9pG&export=download)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://drive.google.com/uc?export=download&id=1hdRymZ6fs2f6SW_FuiXpY-aELY5sB6ZO",
    "title": "DOR Veterans Administration Verification Form (final URL drive.usercontent.google.com/download?id=1hdRymZ6fs2f6SW_FuiXpY-aELY5sB6ZO&export=download)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://drive.google.com/uc?export=download&id=1uXCMibWYTLDM1tCGt7tDNLNzk60o9dLx",
    "title": "Wyoming DOR Rules Chapter 14 (Section 17 Veterans' Exemption) (final URL drive.usercontent.google.com/download?id=1uXCMibWYTLDM1tCGt7tDNLNzk60o9dLx&export=download)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": true
   },
   {
    "url": "https://fremontcountywy.gov/government/elected_officials/assessor/veteran_exemption.php",
    "title": "Fremont County Assessor: Veteran Exemption ($6,000 from 2025, phone renewal, dollar estimates)",
    "status": 200,
    "checked": "2026-10-21",
    "primary": false
   }
  ],
  "verifiedDate": "2026-10-21",
  "confidence": "verified",
  "dataCorrections": [
   {
    "field": "programs[0].wartimeRequired",
    "note": "Should be false for disabled veterans: W.S. 39-13-105(a)(vii) qualifies 'a disabled veteran with a compensable service connected disability certified by the veterans administration or a branch of the armed forces' with no era or medal requirement (the summary already says this; the boolean contradicts it). Also surviving PARENTS (Gold Star) qualify when there is no surviving spouse (39-13-105(a)(v), (h)).",
    "source": "https://wyoleg.gov/statutes/compress/title39.pdf"
   },
   {
    "field": "programs[0].summary",
    "note": "'Annual re-application' overstates it: after the first sworn claim, later years require only contacting the assessor by phone/mail by the fourth Monday in May to confirm eligibility (39-13-105(k), added by the 2024-25 amendments). The $6,000 figure (up from $3,000) is confirmed in the current statute text.",
    "source": "https://wyoleg.gov/statutes/compress/title39.pdf"
   }
  ],
  "notes": "Wyoming's DOR hosts its forms and rules as Google Drive downloads; the drive.google.com/uc links redirect (302) to drive.usercontent.google.com and return 200 application/octet-stream, so the PDFs were downloaded and read (PTD-100 03/2025, VA verification form, Rules ch. 14 sec. 17). Laramie and Natrona county assessor pages returned 403 to automated requests and were dropped; Fremont County's page (200) is the county second source. The fixed deadline is a floating date (fourth Monday in May), so 'date' is left null."
 }
};
