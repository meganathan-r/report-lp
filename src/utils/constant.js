// used -  Industry data
export const industries = [
  "Banking & Financial Services",
  "Basic Materials & Chemicals",
  "Energy, Utilities & Waste",
  // "Food & Beverage",
  "Healthcare & Life Sciences",
  "Industrial & Manufacturing",
  "Media, Entertainment & Advertising",
  // "Professional Services",
  "Real Estate & Construction",
  // "Retail & Consumer Goods",
  "Technology, Software & IT Services",
  // "Telecommunications",
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
};

// used - Revenue bands in correct order
export const revenueBands = [
  "All",
  "$1-50M",
  "$50-200M",
  "$200M-$1B",
  "$1-10B",
  "$10B+",
];

//* Case studies
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

//* Challenges and solutions
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

// used - Links
export const INDUSTY_DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4Cue4lJtn87rs2mMSaOao_6nvOE6qcU6COHPp0NvavDyAueXC1L-TsV871VA6mu2F6OIFUvkM_fe/pub?gid=532636739&single=true&output=csv";

export const TESTIMONIALS_DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4Cue4lJtn87rs2mMSaOao_6nvOE6qcU6COHPp0NvavDyAueXC1L-TsV871VA6mu2F6OIFUvkM_fe/pub?gid=889242289&single=true&output=csv";

export const TITLE_DESCRIPTION_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4Cue4lJtn87rs2mMSaOao_6nvOE6qcU6COHPp0NvavDyAueXC1L-TsV871VA6mu2F6OIFUvkM_fe/pub?gid=1119432661&single=true&output=csv";
