export const colors = {
  // Brand core
  primary: "#1E3A8A", // Deep navy blue (core brand identity)
  secondary: "#3B82F6", // Sky blue
  accent: "#10B981", // Green highlight (confirmation, secondary CTA)
  lightAccent: "#4AFFAE", // CTA button background
  ctaText: "#3A4A43", // CTA button text

  // Backgrounds
  backgroundLight: "#FFFFFF", // White for most sections
  backgroundSubtle: "#F3F4F6", // Light gray for card or section background
  backgroundTint: "#E9F7FD", // Light blue tint (informational blocks)
  backgroundDark: "#061E28", // Dark section or footer background

  // Text
  textPrimary: "#000000", // Main headings
  textSecondary: "#475569", // Paragraphs and supporting text
  textNeutral: "#94A3B8", // For labels or muted content
  textInverse: "#FFFFFF", // For use on dark backgrounds
  textBrandHighlight: "#4F4DD3", // Hero/landing page headings

  // State feedback
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
  neutral: "#94A3B8", // (kept for legacy uses)

  // Charts
  chartPrimary: "#4F4DD3", // Main line/bar
  chartSecondary: "#60A5FA", // Alternate/secondary line or bar
  chartAccent: "#10B981", // Positive metric or growth
  chartWarning: "#FDBA74", // Warnings or anomalies
  chartBackground: "#F9FAFB", // Card/chart background

  // Additional
  dark: "#1E293B", // Deep background
  light: "#F1F5F9", // Light background / dividers
};
// Industry data
export const industries = [
  "Banking & Financial Services",
  "Basic Materials & Chemicals",
  "Energy, Utilities & Waste",
  "Food & Beverage",
  "Healthcare & Life Sciences",
  "Industrial & Manufacturing",
  "Media, Entertainment & Advertising",
  "Professional Services",
  "Real Estate & Construction",
  "Retail & Consumer Goods",
  "Technology, Software & IT Services",
  "Telecommunications",
  "Transportation & Logistics",
];
// Asset-heavy industries
export const assetHeavyIndustries = [
  "Basic Materials & Chemicals",
  "Energy, Utilities & Waste",
  "Real Estate & Construction",
  "Transportation & Logistics",
];

// Industry data structure
export const industryData = {
  "Banking & Financial Services": {
    isAssetHeavy: false,
    capExToRevenue: 1.37,
    medianDSO: 19,
    p25DSO: 14,
    p50DSO: 24,
    p75DSO: 31,
    medianDIO: 0,
    medianDPO: 18,
    opNwcToRev: 0.032,
    interestToRev: 2.09,
    cashReleasedPer100M: 4657534,
    quickRatio: 0.63,
    medianCCC: 1,
    sampleSize: 67,
  },
  "Basic Materials & Chemicals": {
    isAssetHeavy: true,
    capExToRevenue: 13.5,
    medianDSO: 39,
    p25DSO: 30,
    p50DSO: 40,
    p75DSO: 50,
    medianDIO: 56,
    medianDPO: 43,
    opNwcToRev: 0.173,
    interestToRev: 2.31,
    cashReleasedPer100M: 5479452,
    quickRatio: 1.08,
    medianCCC: 52,
    sampleSize: 86,
  },
  "Energy, Utilities & Waste": {
    isAssetHeavy: true,
    capExToRevenue: 16.08,
    medianDSO: 45,
    p25DSO: 31,
    p50DSO: 51,
    p75DSO: 59,
    medianDIO: 29,
    medianDPO: 49,
    opNwcToRev: 0.099,
    interestToRev: 3.22,
    cashReleasedPer100M: 7671233,
    quickRatio: 0.89,
    medianCCC: 25,
    sampleSize: 81,
  },
  "Food & Beverage": {
    isAssetHeavy: false,
    capExToRevenue: 2.42,
    medianDSO: 32,
    p25DSO: 22,
    p50DSO: 32,
    p75DSO: 42,
    medianDIO: 48,
    medianDPO: 41,
    opNwcToRev: 0.123,
    interestToRev: 1.45,
    cashReleasedPer100M: 5479452,
    quickRatio: 0.75,
    medianCCC: 39,
    sampleSize: 73,
  },
  "Healthcare & Life Sciences": {
    isAssetHeavy: false,
    capExToRevenue: 2.57,
    medianDSO: 53,
    p25DSO: 39,
    p50DSO: 59,
    p75DSO: 71,
    medianDIO: 48,
    medianDPO: 48,
    opNwcToRev: 0.189,
    interestToRev: 1.73,
    cashReleasedPer100M: 8767123,
    quickRatio: 1.51,
    medianCCC: 53,
    sampleSize: 109,
  },
  "Industrial & Manufacturing": {
    isAssetHeavy: false,
    capExToRevenue: 2.93,
    medianDSO: 57,
    p25DSO: 44,
    p50DSO: 54,
    p75DSO: 71,
    medianDIO: 75,
    medianDPO: 51,
    opNwcToRev: 0.245,
    interestToRev: 1.91,
    cashReleasedPer100M: 7397260,
    quickRatio: 1.24,
    medianCCC: 81,
    sampleSize: 121,
  },
  "Media, Entertainment & Advertising": {
    isAssetHeavy: false,
    capExToRevenue: 4.93,
    medianDSO: 45,
    p25DSO: 34,
    p50DSO: 54,
    p75DSO: 60,
    medianDIO: 13,
    medianDPO: 38,
    opNwcToRev: 0.079,
    interestToRev: 2.14,
    cashReleasedPer100M: 7123288,
    quickRatio: 1.31,
    medianCCC: 20,
    sampleSize: 64,
  },
  "Professional Services": {
    isAssetHeavy: false,
    capExToRevenue: 2.68,
    medianDSO: 44,
    p25DSO: 31,
    p50DSO: 41,
    p75DSO: 59,
    medianDIO: 7,
    medianDPO: 23,
    opNwcToRev: 0.074,
    interestToRev: 1.64,
    cashReleasedPer100M: 7671233,
    quickRatio: 1.48,
    medianCCC: 28,
    sampleSize: 62,
  },
  "Real Estate & Construction": {
    isAssetHeavy: true,
    capExToRevenue: 13.02,
    medianDSO: 46,
    p25DSO: 34,
    p50DSO: 54,
    p75DSO: 63,
    medianDIO: 121,
    medianDPO: 48,
    opNwcToRev: 0.345,
    interestToRev: 3.43,
    cashReleasedPer100M: 7945205,
    quickRatio: 0.91,
    medianCCC: 119,
    sampleSize: 93,
  },
  "Retail & Consumer Goods": {
    isAssetHeavy: false,
    capExToRevenue: 1.71,
    medianDSO: 23,
    p25DSO: 15,
    p50DSO: 25,
    p75DSO: 35,
    medianDIO: 75,
    medianDPO: 56,
    opNwcToRev: 0.15,
    interestToRev: 1.28,
    cashReleasedPer100M: 5479452,
    quickRatio: 0.69,
    medianCCC: 42,
    sampleSize: 105,
  },
  "Technology, Software & IT Services": {
    isAssetHeavy: false,
    capExToRevenue: 2.93,
    medianDSO: 54,
    p25DSO: 40,
    p50DSO: 50,
    p75DSO: 71,
    medianDIO: 20,
    medianDPO: 40,
    opNwcToRev: 0.108,
    interestToRev: 1.48,
    cashReleasedPer100M: 8493151,
    quickRatio: 1.53,
    medianCCC: 34,
    sampleSize: 182,
  },
  Telecommunications: {
    isAssetHeavy: false,
    capExToRevenue: 6.81,
    medianDSO: 49,
    p25DSO: 36,
    p50DSO: 56,
    p75DSO: 65,
    medianDIO: 24,
    medianDPO: 51,
    opNwcToRev: 0.073,
    interestToRev: 3.09,
    cashReleasedPer100M: 7945205,
    quickRatio: 0.72,
    medianCCC: 22,
    sampleSize: 37,
  },
  "Transportation & Logistics": {
    isAssetHeavy: true,
    capExToRevenue: 7.88,
    medianDSO: 41,
    p25DSO: 29,
    p50DSO: 49,
    p75DSO: 56,
    medianDIO: 16,
    medianDPO: 43,
    opNwcToRev: 0.043,
    interestToRev: 2.82,
    cashReleasedPer100M: 7397260,
    quickRatio: 0.83,
    medianCCC: 14,
    sampleSize: 57,
  },
};

//Revenue bands in correct order
export const revenueBands = [
  "All",
  "$1-50M",
  "$50-200M",
  "$200M-$1B",
  "$1-10B",
  "$10B+",
];

// Revenue band data for all industries (using tech as example)
export const revenueBandData = {
  "$1-50M": {
    n: 41,
    opNwcToRev: 0.103,
    dsoP25: 36,
    dsoP50: 49,
    dsoP75: 65,
    deltaDso: 29,
    cashReleasedPer100M: 7945205,
    capExFunded: 2.71,
    interestSaved: 117712,
    quickRatioSlope: 0.011,
    quickRatioP: 0.03,
    fcfMarginSlope: -0.04,
    fcfMarginP: 0.04,
    dsoInfluence: 0.17,
  },
  "$50-200M": {
    n: 53,
    opNwcToRev: 0.119,
    dsoP25: 42,
    dsoP50: 57,
    dsoP75: 73,
    deltaDso: 31,
    cashReleasedPer100M: 8493151,
    capExFunded: 2.9,
    interestSaved: 125699,
    quickRatioSlope: 0.013,
    quickRatioP: 0.02,
    fcfMarginSlope: -0.05,
    fcfMarginP: 0.03,
    dsoInfluence: 0.21,
  },
  "$200M-$1B": {
    n: 61,
    opNwcToRev: 0.112,
    dsoP25: 42,
    dsoP50: 55,
    dsoP75: 72,
    deltaDso: 30,
    cashReleasedPer100M: 8219178,
    capExFunded: 2.81,
    interestSaved: 121644,
    quickRatioSlope: 0.012,
    quickRatioP: 0.03,
    fcfMarginSlope: -0.04,
    fcfMarginP: 0.04,
    dsoInfluence: 0.19,
  },
  "$1-10B": {
    n: 25,
    opNwcToRev: 0.095,
    dsoP25: 38,
    dsoP50: 51,
    dsoP75: 67,
    deltaDso: 29,
    cashReleasedPer100M: 7945205,
    capExFunded: 2.71,
    interestSaved: 117589,
    quickRatioSlope: 0.01,
    quickRatioP: 0.04,
    fcfMarginSlope: -0.03,
    fcfMarginP: 0.05,
    dsoInfluence: 0.16,
  },
  "$10B+": {
    n: 2,
    opNwcToRev: 0.068,
    dsoP25: 28,
    dsoP50: 41,
    dsoP75: 53,
    deltaDso: 25,
    cashReleasedPer100M: 6849315,
    capExFunded: 2.34,
    interestSaved: 101370,
    quickRatioSlope: 0.008,
    quickRatioP: 0.06,
    fcfMarginSlope: -0.02,
    fcfMarginP: 0.06,
    dsoInfluence: 0.13,
  },
};

//* Case studies (understood)
export const caseStudies = [
  {
    company: "FourKites",
    industry: "Logistics Technology, Supply Chain Visibility Technology",
    personName: "Henry Dera",
    personTitle: "VP, Global Controller",
    valueAchieved: "45% Reduction in Time to Collect",
    testimonial:
      "Our older and aged invoices have been getting paid faster with Growfin. Their team was super helpful during implementation, and their support has been incredibly fast.",
  },
  {
    company: "MedUS",
    industry: "Staffing Solution, Professional Services",
    personName: "Bridgett Crank",
    personTitle: "Manager, Billing & Payroll",
    valueAchieved: "27% Increase in Cash Flow",
    testimonial:
      "With Growfin, our AR processes are not only more efficient but also more organized. This has led to a 20% reduction in manual effort and a 30% reduction in outstanding receivables, increasing our cash flow by 27%.",
  },
  {
    company: "Greenhouse",
    industry: "Software, SaaS, Technology",
    personName: "Colleen Lawson",
    personTitle: "Director, Rev. Accounting Ops",
    valueAchieved: "65% Automation in Collection Tasks",
    testimonial:
      "Growfin has transformed our accounts receivable management. The automated processes and seamless data flow have allowed us to focus more on strategic initiatives rather than manual tasks.",
  },
  {
    company: "Air Comm",
    industry:
      "Telecom Devices, Wireless Communications & Solutions, Consulting",
    personName: "Fritz Van de Kamp",
    personTitle: "CFO",
    valueAchieved: "33% Reduction in DSO",
    testimonial:
      "Growfin's AI-powered Health Score gives us an accurate view of accounts to prioritize. Now, our percentage of overdue invoices has dropped from 25% to 22%, overdue dollars have dropped from 20% to 15%, and our DSO has reduced from 45 to 30 days.",
  },
];

//* Challenges and solutions (understood)
export const challenges = [
  {
    name: "Siloed Data Systems",
    impact:
      "ERP, CRM, and billing systems operate in isolation without unified AR visibility",
    solution:
      "Integrated Platform: Unified data layer across financial and operational systems",
  },
  {
    name: "Limited Real-Time Visibility",
    impact:
      "Lack of comprehensive dashboards showing DSO trends and aging by customer segment",
    solution:
      "Analytics Dashboard: Real-time DSO monitoring with intelligent segmentation and risk identification",
  },
  {
    name: "Manual Follow-ups",
    impact:
      "Reliance on email-based collections without prioritization or automation",
    solution:
      "Intelligent Workflows: Automated follow-ups based on account history, risk profile, and payment patterns",
  },
  {
    name: "Poor Risk Segmentation",
    impact:
      "One-size-fits-all approach to collections without account prioritization",
    solution:
      "Customer Tiering: AI-driven segmentation to optimize treatment strategies and payment terms",
  },
  {
    name: "Fragmented Dispute Resolution",
    impact:
      "No structured workflow for tracking and resolving payment disputes",
    solution:
      "Collaboration Hub: Streamlined dispute resolution with integrated stakeholder communication",
  },
];

// Calculate overall statistics
export const overallStats = {
  medianDSO: 44,
  bestDSO: 19,
  worstDSO: 57,
  avgCashReleased: 9499473,
};

// Links
export const INDUSTY_DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4Cue4lJtn87rs2mMSaOao_6nvOE6qcU6COHPp0NvavDyAueXC1L-TsV871VA6mu2F6OIFUvkM_fe/pub?gid=532636739&single=true&output=csv";

const TESTIMONIALS_DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4Cue4lJtn87rs2mMSaOao_6nvOE6qcU6COHPp0NvavDyAueXC1L-TsV871VA6mu2F6OIFUvkM_fe/pub?gid=889242289&single=true&output=csv";
