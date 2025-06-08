import CountUp from "react-countup";
import HeroChart from "./HeroChart";

const stats = [
  {
    value: 1948,

    description: "B2B Companies Analyzed",
  },
  {
    pre: "$",
    suf: "M+",
    value: 5.0,
    description: "Average Cash Release",
    decimals: 1,
  },
  {
    suf: "%",
    value: 44,
    description: "DSO Improvement",
  },
];

const HeroSection = () => {
  return (
    <section className="mb-16  py-12 bg-white ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-title md:text-5xl font-extrabold leading-[120%] text-black mb-6">
              Impact of Receivables on Working Capital
            </h1>
            <p className="para-text mb-10 max-w-2xl">
              This analysis is built on data from 1,948 U.S. B2B companies, with
              financials extracted from their most recent 10-K filings. All
              metrics are purpose-built to benchmark working capital
              efficiency—specifically DSO performance and cash flow
              implications.
            </p>

            {/* Stats */}
            <div className="flex flex-nowrap justify-between gap-6 mb-10">
              {stats.map((it, i) => (
                <div key={i} className="text-center">
                  <div className="sm:text-3xl text-2xl font-bold text-bblue-500  mb-2">
                    {it?.pre}
                    <CountUp
                      end={it.value}
                      duration={2.5}
                      decimals={it?.decimals}
                    />
                    {it?.suf}
                  </div>
                  <p className="text-sm text--500 font-medium">
                    {it.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="p-6 lg:w-1/2  w-full">
            <div className=" w-full bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform rotate-3 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-2xl opacity-10 -z-10"></div>
              <HeroChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Color constants for maintainability
