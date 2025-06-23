export const PIE_CHART_COLORS = [
  "#102450",
  "#16316E",
  "#1B3E8A",
  "#1D4694",
  "#204A9D",
  "#3C61AD",
  "#5878BD",
  "#A4B4E0",
  "#CED7F0",
];

//Industry data
export const industries = [
  "Banking & Financial Services",
  "Basic Materials & Chemicals",
  "Energy, Utilities & Waste",
  "Healthcare & Life Sciences",
  "Industrial & Manufacturing",
  "Media, Entertainment & Advertising",
  "Real Estate & Construction",
  "Technology, Software & IT Services",
  "Transportation & Logistics",
];

// Revenue bands in correct order
export const revenueBands = [
  "All",
  "$1-50M",
  "$50-200M",
  "$200M-$1B",
  "$1-10B",
  "$10B+",
];

export const TABS_TITLE = [
  { name: "tab1", value: "Cross Industry Overview" },
  { name: "tab2", value: "Industry Deep-dive" },
  { name: "tab3", value: "Calculator" },
];

// used - Links
export const INDUSTY_DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4Cue4lJtn87rs2mMSaOao_6nvOE6qcU6COHPp0NvavDyAueXC1L-TsV871VA6mu2F6OIFUvkM_fe/pub?gid=532636739&single=true&output=csv";

export const TESTIMONIALS_DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4Cue4lJtn87rs2mMSaOao_6nvOE6qcU6COHPp0NvavDyAueXC1L-TsV871VA6mu2F6OIFUvkM_fe/pub?gid=889242289&single=true&output=csv";

export const TITLE_DESCRIPTION_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4Cue4lJtn87rs2mMSaOao_6nvOE6qcU6COHPp0NvavDyAueXC1L-TsV871VA6mu2F6OIFUvkM_fe/pub?gid=1119432661&single=true&output=csv";

export const HERO_STAT_FIELDS = [
  { key: "N", description: "B2B Companies Analyzed" },
  {
    key: "Delta DSO (P75-P25)",
    description: "Avg. Cash Release per $100M Revenue",
    pre: "$",
    suf: "M+",
    fixed: 1,
  },
  {
    key: "Delta DSO (P75-P25)",
    description: "Top vs Bottom DSO",
    suf: "Days",
    fixed: 0,
  },
];

export const benchmarkData = {
  "Banking & Financial Services": {
    "$1-10B": {
      "P25 DSO": 29,
      "P50 DSO": 43,
      "P75 DSO": 64,
      "Cash Released (P25) per $100M Revenue": 9589041,
      "Interest Saved per $100M Revenue": 527397,
      "CapEX Funded by Cash Released": 7.02,
      "CapEX/Revenue": 1.37,
    },
    "$1-50M": {
      "P25 DSO": 30,
      "P50 DSO": 43,
      "P75 DSO": 64,
      "Cash Released (P25) per $100M Revenue": 9315068,
      "Interest Saved per $100M Revenue": 279452,
      "CapEX Funded by Cash Released": 10.35,
      "CapEX/Revenue": 0.9,
    },
    "$10B+": {
      "P25 DSO": 33,
      "P50 DSO": 41,
      "P75 DSO": 59,
      "Cash Released (P25) per $100M Revenue": 7123288,
      "Interest Saved per $100M Revenue": 113973,
      "CapEX Funded by Cash Released": 17.69,
      "CapEX/Revenue": 0.4,
    },
    "$200M-$1B": {
      "P25 DSO": 31,
      "P50 DSO": 42,
      "P75 DSO": 63,
      "Cash Released (P25) per $100M Revenue": 8767123,
      "Interest Saved per $100M Revenue": 219178,
      "CapEX Funded by Cash Released": 8.77,
      "CapEX/Revenue": 1.0,
    },
    "$50-200M": {
      "P25 DSO": 31,
      "P50 DSO": 44,
      "P75 DSO": 65,
      "Cash Released (P25) per $100M Revenue": 9315068,
      "Interest Saved per $100M Revenue": 279452,
      "CapEX Funded by Cash Released": 10.35,
      "CapEX/Revenue": 0.9,
    },
  },
};
