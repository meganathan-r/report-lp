import { useMemo } from "react";
import { useAppStateContext } from "../../../context/AppStateContext";

const CFOTakeAways = () => {
  const { selectIndustry } = useAppStateContext();
  const metrics = [
    {
      indsutryId: 1,
      industry: "Industrial & Manufacturing",
      points: [
        {
          title: "Cash Release Opportunity",
          mainValue: "$6.4 - 15.3M",
          subtitle: "working capital per $100M revenue unlocked",
          description:
            "Moving from bottom- to top-quartile DSO frees sizeable cash, with the biggest proportional gains for smaller manufacturers.",
        },
        {
          title: "Liquidity Enhancement",
          mainValue: "0.019 - 0.020",
          subtitle: "quick-ratio gain for every DSO day trimmed",
          description:
            "Each day shaved off receivables meaningfully fortifies short-term liquidity, a critical buffer for small and mid-market firms.",
        },
        {
          title: "Working Capital Control",
          mainValue: "65%",
          subtitle: "of working-capital variance driven by DSO, DIO, DPO",
          description:
            "CFOs have significant control over their working capital with focused optimization of DSO, DIO and DPO",
        },
        {
          title: "Supply Chain Integration",
          mainValue: "95 days",
          subtitle:
            "median inventory hold stretching the cash-conversion cycle",
          description:
            "Accelerating receivables shortens the final leg of the supply chain, offsetting long inventory turns and releasing trapped cash sooner.",
        },
      ],
    },
    {
      industryId: 1,
      industry: "Basic Materials & Chemicals",
      points: [
        {
          title: "Cash Release Opportunity",
          mainValue: "$8.2 - 12.7M",
          subtitle: "working capital release per $100M revenue unlocked",
          description:
            "Moving from bottom- to top-quartile DSO frees sizeable cash, with the biggest proportional gains for mid-market chemical distributors.",
        },
        {
          title: "Liquidity Enhancement",
          mainValue: "0.015 - 0.018",
          subtitle: "quick-ratio gain for every DSO day trimmed",
          description:
            "Each day shaved off receivables meaningfully fortifies short-term liquidity, essential for commodity price volatility buffering.",
        },
        {
          title: "Working Capital Control",
          mainValue: "71%",
          subtitle: "of working-capital variance driven by DSO, DIO, DPO",
          description:
            "Chemicals CFOs have significant control over their working capital with focused optimization of DSO, DIO and inventory turns.",
        },
        {
          title: "Supply Chain Integration",
          mainValue: "89 days",
          subtitle:
            "median inventory hold stretching the cash-conversion cycle",
          description:
            "Accelerating receivables shortens the final lag of the supply chain, offsetting long inventory turns and releasing trapped cash sooner.",
        },
        {
          title: "Strategic Investment Flexibility",
          mainValue: "12 - 18%",
          subtitle: "of annual revenue convertible to growth capital",
          description:
            "Cash unlocked through DSO optimization reduces dependence on debt, giving chemical manufacturers room for self-fund R&D, M&A, or capacity expansion.",
        },
      ],
    },
    {
      industryId: 2,
      industry: "Energy, Utilities & Waste",
      points: [
        {
          title: "Cash Release Opportunity",
          mainValue: "$4.8 - 9.3M",
          subtitle: "working capital release per $100M revenue unlocked",
          description:
            "Moving from bottom- to top-quartile DSO frees sizeable cash, with regulated utilities showing more predictable improvement patterns.",
        },
        {
          title: "Liquidity Enhancement",
          mainValue: "0.012 - 0.016",
          subtitle: "quick-ratio gain for every DSO day trimmed",
          description:
            "Each day saved fortifies short-term liquidity, critical for maintaining investor confidence during regulatory review cycles.",
        },
        {
          title: "Working Capital Control",
          mainValue: "58%",
          subtitle: "working capital variance explained by DSO & DPO",
          description:
            "Energy CFOs have moderate control over working capital efficiency, with regulatory billing cycles providing predictable levers for cash flow improvement.",
        },
        {
          title: "Regulatory Billing Predictability",
          mainValue: "45-65 days",
          subtitle: "DSO ranges tighter due to standardized billing",
          description:
            "Regulated billing cycles create more predictable DSO patterns, enabling better forecasting and valuation support for rate case filings.",
        },
        // {
        //   title: "Strategic Investment Flexibility",
        //   mainValue: "6 - 12%",
        //   subtitle: "of annual revenue convertible to infrastructure capital",
        //   description:
        //     "Cash unlocked through DSO optimization reduces dependence on debt financing for critical infrastructure investments and grid modernization.",
        // },
      ],
    },
    {
      industryId: 3,
      industry: "Transportation & Logistics",
      points: [
        {
          title: "Cash Release Opportunity",
          mainValue: "$7.1 - 13.2M",
          subtitle: "working capital release per $100M revenue unlocked",
          description:
            "Moving from bottom- to top-quartile DSO frees sizeable cash, with asset-heavy logistics firms showing the biggest absolute dollar gains.",
        },
        {
          title: "Liquidity Enhancement",
          mainValue: "0.018 - 0.022",
          subtitle: "quick-ratio gain for every DSO day trimmed",
          description:
            "Each day shaved off receivables meaningfully fortifies short-term liquidity, a critical buffer for fuel price volatility and seasonal demand swings.",
        },
        {
          title: "Working Capital Control",
          mainValue: "69%",
          subtitle: "of working-capital variance driven by DSO, DIO, DPO",
          description:
            "Transportation CFOs have significant control over their working capital with focused optimization of receivables and route-based billing efficiency.",
        },
        {
          title: "Asset Utilization Synergy",
          mainValue: "85 days",
          subtitle: "cash conversion cycle spanning fleet utilization",
          description:
            "Accelerating receivables shortens the cash cycle for asset-heavy operations, improving return on invested capital for fleet and equipment.",
        },
        // {
        //   title: "Strategic Investment Flexibility",
        //   mainValue: "10 - 16%",
        //   subtitle: "of annual revenue convertible to fleet capital",
        //   description:
        //     "Cash unlocked through DSO optimization reduces dependence on equipment financing, giving logistics firms room to self-fund fleet expansion and technology upgrades.",
        // },
      ],
    },
    {
      industryId: 4,
      industry: "Technology, Software & IT Services",
      points: [
        {
          title: "Cash Release Opportunity",
          mainValue: "$3.6 - 11M",
          subtitle: "working capital release per $100M revenue unlocked",
          description:
            "Moving from bottom- to top-quartile DSO frees sizeable cash, with the biggest gains for smaller tech firms in critical growth phases.",
        },
        {
          title: "Liquidity Enhancement",
          mainValue: "0.008 - 0.012",
          subtitle: "quick-ratio gain for every 1 day DSO trimmed",
          description:
            "Each day saved fortifies short-term liquidity, critical for maintaining investor confidence in cash efficiency metrics.",
        },
        {
          title: "Working Capital Control",
          mainValue: "64%",
          subtitle: "working capital variance explained by DSO & DPO",
          description:
            "Technology CFOs have significant control over working capital efficiency, providing predictable levers for cash flow improvement.",
        },
        {
          title: "Subscription Strength",
          mainValue: "68% → 82%",
          subtitle: "subscription density correlates with better efficiency",
          description:
            "Higher subscription percentages correlate with narrower DSO ranges and more predictable cash conversion, enabling better forecasting and valuation support.",
        },
        // {
        //   title: "Free Cash Flow Sensitivity",
        //   mainValue: "0.09 - 0.11 pp",
        //   subtitle: "FCF-margin lift per DSO day reduced",
        //   description:
        //     "FCF margin improvements directly impact Free Cash Flow margins—critical for technology firms where investor valuations increasingly depend on cash generation rather than just growth rates.",
        // },
      ],
    },
    {
      industryId: 5,
      industry: "Healthcare & Life Sciences",
      points: [
        {
          title: "Cash Release Opportunity",
          mainValue: "$6.8 - 14.2M",
          subtitle: "working capital release per $100M revenue unlocked",
          description:
            "Moving from bottom- to top-quartile DSO frees significant cash, with pharmaceutical and medical device companies showing the largest absolute gains.",
        },
        {
          title: "Liquidity Enhancement",
          mainValue: "0.016 - 0.021",
          subtitle: "quick-ratio gain for every DSO day trimmed",
          description:
            "Each day shaved off receivables meaningfully fortifies short-term liquidity, critical during FDA approval cycles and R&D investment phases.",
        },
        {
          title: "Working Capital Control",
          mainValue: "59%",
          subtitle:
            "working capital variance explained by DSO and insurance billing",
          description:
            "Healthcare CFOs have moderate control over working capital, with insurance payor mix and regulatory billing creating some predictable optimization opportunities.",
        },
        {
          title: "Insurance Billing Complexity",
          mainValue: "65-95 days",
          subtitle: "extended DSO due to payor reimbursement cycles",
          description:
            "Insurance reimbursement cycles create longer DSO ranges, but systematic optimization can significantly improve cash conversion timing.",
        },
        // {
        //   title: "R&D Investment Flexibility",
        //   mainValue: "15 - 22%",
        //   subtitle: "of annual revenue convertible to research capital",
        //   description:
        //     "Cash unlocked through DSO optimization reduces dependence on dilutive equity financing, giving life sciences firms room to self-fund clinical trials and product development.",
        // },
      ],
    },
    {
      industryId: 6,
      industry: "Banking & Financial Services",
      points: [
        {
          title: "Cash Release Opportunity",
          mainValue: "$2.1 - 5.8M",
          subtitle: "working capital release per $100M revenue unlocked",
          description:
            "Moving from bottom- to top-quartile DSO frees moderate cash, with fee-based services showing more improvement potential than interest-based revenue.",
        },
        {
          title: "Liquidity Enhancement",
          mainValue: "0.007 - 0.011",
          subtitle: "quick-ratio gain for every DSO day trimmed",
          description:
            "Each day saved improves short-term liquidity ratios, important for regulatory capital adequacy and stress testing scenarios.",
        },
        {
          title: "Working Capital Control",
          mainValue: "48%",
          subtitle: "working capital variance explained by DSO and fee billing",
          description:
            "Financial services CFOs have moderate control over working capital, with regulatory billing cycles and fee structures providing some optimization levers.",
        },
        {
          title: "Fee-Based Revenue Efficiency",
          mainValue: "25-45 days",
          subtitle: "DSO ranges for advisory and transaction fees",
          description:
            "Fee-based services show tighter DSO management opportunities compared to interest-based revenue, enabling better cash flow predictability.",
        },
        // {
        //   title: "Regulatory Capital Efficiency",
        //   mainValue: "4 - 8%",
        //   subtitle: "of annual revenue convertible to lending capital",
        //   description:
        //     "Cash unlocked through DSO optimization improves regulatory capital ratios and reduces dependence on expensive wholesale funding.",
        // },
      ],
    },
    {
      industryId: 7,
      industry: "Media, Entertainment & Advertising",
      points: [
        {
          title: "Cash Release Opportunity",
          mainValue: "$4.7 - 9.1M",
          subtitle: "working capital release per $100M revenue unlocked",
          description:
            "Moving from bottom- to top-quartile DSO frees sizeable cash, with advertising agencies showing more variable improvement patterns due to client payment behavior.",
        },
        {
          title: "Liquidity Enhancement",
          mainValue: "0.012 - 0.016",
          subtitle: "quick-ratio gain for every DSO day trimmed",
          description:
            "Each day saved fortifies short-term liquidity, important for managing production cash flow and talent payments in project-based work.",
        },
        {
          title: "Working Capital Control",
          mainValue: "63%",
          subtitle:
            "working capital variance explained by DSO and project cycles",
          description:
            "Media CFOs have good control over working capital efficiency, with project billing and advertising cycles providing optimization opportunities.",
        },
        {
          title: "Project Billing Complexity",
          mainValue: "45-75 days",
          subtitle: "DSO ranges for production and advertising work",
          description:
            "Project-based billing creates variable DSO patterns, but systematic client credit management can significantly improve cash conversion timing.",
        },
        // {
        //   title: "Content Investment Synergy",
        //   mainValue: "10 - 15%",
        //   subtitle: "of annual revenue convertible to content capital",
        //   description:
        //     "Cash unlocked through DSO optimization reduces dependence on production financing, giving media firms room to self-fund content development and technology infrastructure.",
        // },
      ],
    },
    {
      industryId: 8,
      industry: "Real Estate & Construction",
      points: [
        {
          title: "Cash Release Opportunity",
          mainValue: "$7.8 - 15.6M",
          subtitle: "working capital release per $100M revenue unlocked",
          description:
            "Moving from bottom- to top-quartile DSO frees significant cash, with construction firms showing the largest gains due to progress billing and retention practices.",
        },
        {
          title: "Liquidity Enhancement",
          mainValue: "0.017 - 0.023",
          subtitle: "quick-ratio gain for every DSO day trimmed",
          description:
            "Each day shaved off receivables meaningfully fortifies short-term liquidity, critical for managing project cash flow and bonding capacity.",
        },
        {
          title: "Working Capital Control",
          mainValue: "74%",
          subtitle:
            "of working-capital variance driven by DSO, retention, and progress billing",
          description:
            "Construction CFOs have strong control over their working capital with focused optimization of progress billing, retention management, and change order processing.",
        },
        {
          title: "Progress Billing Optimization",
          mainValue: "65-95 days",
          subtitle: "DSO ranges for construction and development projects",
          description:
            "Progress billing and retention practices create extended DSO cycles, but systematic optimization can significantly accelerate cash conversion.",
        },
        // {
        //   title: "Project Investment Flexibility",
        //   mainValue: "13 - 21%",
        //   subtitle: "of annual revenue convertible to project capital",
        //   description:
        //     "Cash unlocked through DSO optimization reduces dependence on construction lending, giving firms room to self-fund equipment and bonding capacity expansion.",
        // },
      ],
    },
  ];
  const currentIndustry = useMemo(() => {
    return metrics.find((metric) => metric?.industry == selectIndustry);
  }, [selectIndustry]);

  return (
    <div className="mb-10 lg:mb-14">
      {/* Enhanced Header */}
      <div className="mb-4  pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="sm:text-xl text-lg font-bold text-gray-900 tracking-tight">
              Key Takeaways for the CFO
            </h1>
            <p className="text-gray-500 mt-1 max-w-3xl">
              Key metrics and opportunities for{" "}
              {selectIndustry || "your industry"}
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {currentIndustry.points.map((metric, index) => (
          <div
            key={index}
            className={`group relative bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-md  overflow-hidden`}
          >
            <div className="p-4 sm:p-6">
              {/* Header with index indicator */}
              <div className="flex  items-center gap-4 mb-5">
                <div className="flex-shrink-0 w-8 h-8  sm:w-10 sm:h-10 sm:rounded-lg rounded-md bg-blue-50 flex items-center justify-center">
                  <span className="text-base sm:text-lg font-bold text-bblue-500">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                    {metric.title}
                  </h2>
                </div>
              </div>

              {/* Main Value */}
              <div className="mb-5">
                <div className="sm:text-[2rem] text-[1.5rem] font-extrabold text-bblue-500 mb-1">
                  {metric.mainValue}
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {metric.subtitle}
                </div>
              </div>

              {/* Description */}
              <div className="pt-4 border-t border-gray-100">
                <p className="para-text leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>

            {/* Hover effect */}
            {/* <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-300 pointer-events-none transition-all duration-300" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CFOTakeAways;
