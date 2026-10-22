// Veteran Property Tax Exemption Navigator — static copy. Mode briefs, office explanations,
// default document list, FAQ (mirrors the FAQPage JSON-LD in index.html), and the one-on-one line.

export const MODE_BRIEF = {
  rated: 'A new rating, or a higher one, usually unlocks a property tax exemption you have to ask for. Nobody at the VA tells the county. We’ll show what it is worth where you live, the form, the office, and the date that applies to you.',
  home: 'An exemption does not follow you from one house to the next, and in most states a new owner has to file again. We’ll show the deadline that applies after a purchase or a move, when the exemption takes effect, and what to bring to the office.',
  never: 'If you have owned your home for years with a rating and never filed, you may have left real money on the table. Some states refund prior years, some don’t, and some leave it to the town. We’ll show the rule where you live and the exact question to ask the office.',
  spouse: 'In most states a surviving spouse keeps the veteran’s exemption, with conditions: remarriage, staying in the home, sometimes a DIC letter. We’ll show what your state says, what to send the office, and when.',
};
export const BTN_TEXT = { rated: 'Show Me How to Claim It →', home: 'Show My Deadline and Form →', never: 'Show What I Can Recover →', spouse: 'Show What I Keep →' };

export const OFFICE_EXPLAIN = {
  default: 'Property tax exemptions are filed with the office that sets your home’s assessed value, not with the VA and not with the DMV. The DMV handles the vehicle fee waivers many rated veterans also qualify for; that is a different form.',
  texas: 'In Texas, exemption applications go to the county APPRAISAL DISTRICT. The tax assessor-collector’s office does vehicle registration and collects the bill; it does not grant exemptions. People walk into the wrong building.',
  town: 'In this state the filing unit is the town or city, not the county. Two towns in the same county can have different assessors, different dates, and different amounts.',
  stateAgency: 'In this state the claim goes to a state agency, not a local office.',
  incomeTax: 'In this state the benefit is a credit on your state income-tax return, so there is no property form to file with the assessor. You pay the bill, then claim the credit.',
};

export const DEFAULT_DOCUMENTS = [
  'VA rating decision or VA benefit summary letter showing your rating and its effective date (download the summary letter at va.gov)',
  'DD-214 or other proof of honorable service',
  'Deed, closing statement, or recorded title showing you own the home',
  'Proof the home is your primary residence (driver’s license at the address, voter registration, or a utility bill)',
  'Government photo ID',
];

export const KIND_LABEL = {
  assessment: 'reduces the assessed value your bill is computed on',
  credit: 'a credit taken straight off the tax bill',
  'income-tax-credit': 'a credit claimed on your state income-tax return (you pay the property bill first)',
};

export const CONFIDENCE = {
  verified: { label: 'Verified', text: 'Every form, office, deadline, and rule on this page for your jurisdiction was opened on its official source on the date in the footer.' },
  reported: { label: 'Reported', text: 'Key details for your jurisdiction come from county or municipal pages rather than a statewide source. Confirm the deadline and the form with your office before you rely on them.' },
  unverified: { label: 'Not yet verified', text: 'We have not confirmed the form or the deadline for your jurisdiction from an official source yet. The office type and the questions to ask are right; get the specifics from the office in writing.' },
};

export const ASK_SCRIPTS = {
  deadline: 'What is the filing deadline for the disabled-veteran exemption for the current tax year, and if I file after it, which year does the exemption start?',
  retro: 'I was rated [rating] effective [month/year] and have owned and occupied this home since [month/year]. Which prior tax years can be refunded, under what section, and what do you need from me?',
  renewal: 'Does this exemption renew on its own, or do I file something every year? What happens if my rating changes or I move?',
  receipt: 'Can I get a stamped copy or an email confirming the date you received my application?',
};

export const ONE_ON_ONE = {
  never: 'If you are untangling several years of missed exemptions along with the rest of your benefits picture, this is the kind of thing I work through with veterans one-on-one.',
  url: '/work-with-me/',
};

export const FAQ = [
  ['Is the disabled veteran property tax exemption automatic?', 'No. Every state and territory that offers one requires an application to the local assessing office: the county appraisal district in Texas, the county property appraiser in Florida, the town or municipal assessor in New York, New Jersey, and New England, the Chief County Assessment Officer in Illinois, CRIM in Puerto Rico. The VA does not notify anyone. In several states the exemption also has to be renewed with an annual form, and a missed renewal is the most common way veterans lose it.'],
  ['What form do I file for the veteran property tax exemption, and where?', 'It depends on the state. Texas uses the Comptroller’s residence homestead application (Form 50-114, which includes the 100% disabled veteran box) or Form 50-135 for a partial exemption, filed with the county appraisal district. Florida uses Form DR-501 with the county property appraiser. New York uses RP-458-a with the town assessor. New Jersey uses Form D.V.S.S.E. with the municipal tax assessor. Illinois uses PTAX-342 with the Chief County Assessment Officer. This tool shows the form, the office, and the official lookup page for your state and ZIP.'],
  ['Can I get a refund for the years I did not file?', 'Sometimes. Texas allows late applications for the disabled-veteran exemptions for a set number of years after the taxes became delinquent. New Jersey leaves refunds of prior years to the municipality by resolution, and some towns limit it to the current year. Florida generally allows a late application only through the TRIM-notice window with extenuating circumstances, otherwise the exemption starts the next year. The tool shows your state’s rule with its source and gives you the exact question to ask the office in writing.'],
  ['Do I have to renew my veteran property tax exemption every year?', 'In some states, yes. Illinois requires an annual verification form (PTAX-342-R) unless the veteran is rated permanently and totally disabled with that certification on file. California’s basic exemption stays in place without annual filing, but the low-income tier is an annual claim. New York requires a new filing when the disability rating changes (RP-458-a-Dis) and when you move. The tool shows the renewal rule for your state and what to do on a rating change or a move.'],
  ['Does a surviving spouse keep the veteran’s property tax exemption?', 'In most states, yes, as long as the spouse does not remarry and keeps the home as a primary residence; several states let the exemption move to a new home. Some states require the veteran to have been rated 100% permanent and total at death, or to have died of a service-connected cause. The tool shows your state’s rule and the documents the office usually asks for, such as the death certificate and the VA letter.'],
];
