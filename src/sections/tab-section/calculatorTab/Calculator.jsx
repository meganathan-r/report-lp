import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [industry, setIndustry] = useState("");
  const [revenueRange, setRevenueRange] = useState("");
  const [currentDSO, setCurrentDSO] = useState("");
  const [targetDSO, setTargetDSO] = useState(30);
  const [benchmark, setBenchmark] = useState(null);
  const [improvements, setImprovements] = useState([]);
  const [revenueOptions, setRevenueOptions] = useState([]);
  const [sliderRange, setSliderRange] = useState({ min: 1, max: 365 });

  // Populate industries on initial render
  useEffect(() => {
    setRevenueOptions([]);
    setBenchmark(null);
    setImprovements([]);
  }, []);

  // Update revenue options when industry changes
  useEffect(() => {
    if (!industry || !benchmarkData[industry]) {
      setRevenueOptions([]);
      setRevenueRange("");
      setBenchmark(null);
      setImprovements([]);
      return;
    }

    const availableRanges = Object.keys(benchmarkData[industry]);
    const sortedRanges = revenueRangeOrder.filter((range) =>
      availableRanges.includes(range)
    );
    setRevenueOptions(sortedRanges);
    setRevenueRange("");
    setBenchmark(null);
    setImprovements([]);
  }, [industry]);

  // Update benchmark when revenue range is selected
  useEffect(() => {
    if (
      !industry ||
      !revenueRange ||
      !benchmarkData[industry] ||
      !benchmarkData[industry][revenueRange]
    ) {
      setBenchmark(null);
      setImprovements([]);
      return;
    }

    const data = benchmarkData[industry][revenueRange];
    setBenchmark(data);

    // Update slider range based on benchmark data
    const p25 = data["P25 DSO"] || 30;
    const p75 = data["P75 DSO"] || 90;
    setSliderRange({
      min: Math.max(1, p25 - 10),
      max: Math.min(365, p75 + 30),
    });
    setTargetDSO(p25);

    // Calculate improvements if DSO is already set
    if (currentDSO) {
      calculateImprovements(currentDSO, data, targetDSO);
    }
  }, [industry, revenueRange, currentDSO, targetDSO]);

  // Calculate improvements when inputs change
  const calculateImprovements = (dso, data, target) => {
    if (!data || !dso) return;

    const improvements = [];
    const p25DSO = data["P25 DSO"];
    const p75DSO = data["P75 DSO"];
    const cashReleaseRate = data["Cash Released (P25) per $100M Revenue"] || 0;
    const interestSaveRate = data["Interest Saved per $100M Revenue"] || 0;
    const capexFunding = data["CapEX Funded by Cash Released"] || 0;
    const capexRevenue = data["CapEX/Revenue"] || 0;

    // Helper function to calculate impact
    const calculateImpact = (fromDSO, toDSO, title, badge = "") => {
      if (fromDSO <= toDSO) return null;

      const dsoImprovement = fromDSO - toDSO;
      const improvementRatio = dsoImprovement / (p75DSO - p25DSO);
      const cashReleased = improvementRatio * cashReleaseRate;
      const interestSaved = improvementRatio * interestSaveRate;
      const capexFunded = improvementRatio * capexFunding;

      return {
        title,
        badge,
        fromDSO,
        toDSO,
        dsoImprovement,
        cashReleased: Math.round(cashReleased),
        interestSaved: Math.round(interestSaved),
        capexFunded: capexFunded.toFixed(1),
        showCapex: capexRevenue > 2,
      };
    };

    // Current to Top Quartile (P25)
    const toTop = calculateImpact(
      dso,
      p25DSO,
      "Current DSO → Top Quartile (P25)",
      "Best Practice"
    );
    if (toTop) improvements.push(toTop);

    // Current to Target (if specified)
    if (target && target < dso) {
      const toTarget = calculateImpact(
        dso,
        target,
        "Current DSO → Your Target",
        "Custom Goal"
      );
      if (toTarget) improvements.push(toTarget);
    }

    // Growfin's 33% improvement
    const growfinTarget = Math.round(dso * 0.67); // 33% reduction
    const growfinImprovement = calculateImpact(
      dso,
      growfinTarget,
      "Current DSO → Growfin Benchmark",
      "33% Improvement"
    );
    if (growfinImprovement) improvements.push(growfinImprovement);

    setImprovements(improvements);
  };

  // Handle input changes
  const handleIndustryChange = (e) => setIndustry(e.target.value);
  const handleRevenueChange = (e) => setRevenueRange(e.target.value);
  const handleCurrentDSOChange = (e) => {
    const value = e.target.value;
    setCurrentDSO(value);
    if (value && industry && revenueRange && benchmark) {
      calculateImprovements(parseFloat(value), benchmark, targetDSO);
    }
  };
  const handleTargetDSOChange = (e) => {
    const value = parseInt(e.target.value);
    setTargetDSO(value);
    if (currentDSO && industry && revenueRange && benchmark) {
      calculateImprovements(parseFloat(currentDSO), benchmark, value);
    }
  };

  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
          DSO Impact Calculator
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the financial impact of optimizing your Days Sales
          Outstanding across industries
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <InputSection
          industry={industry}
          revenueRange={revenueRange}
          currentDSO={currentDSO}
          targetDSO={targetDSO}
          sliderRange={sliderRange}
          revenueOptions={revenueOptions}
          onIndustryChange={handleIndustryChange}
          onRevenueChange={handleRevenueChange}
          onCurrentDSOChange={handleCurrentDSOChange}
          onTargetDSOChange={handleTargetDSOChange}
        />

        <ResultsSection
          benchmark={benchmark}
          improvements={improvements}
          industry={industry}
          revenueRange={revenueRange}
        />
      </div>
    </div>
  );
};

export default Calculator;

const InputSection = ({
  industry,
  revenueRange,
  currentDSO,
  targetDSO,
  sliderRange,
  revenueOptions,
  onIndustryChange,
  onRevenueChange,
  onCurrentDSOChange,
  onTargetDSOChange,
}) => (
  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
    <div className="flex items-center mb-6">
      <div className="bg-indigo-100 p-2 rounded-lg mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">
        Your Company Details
      </h3>
    </div>

    <div className="space-y-6">
      <div>
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Industry
        </label>
        <select
          id="industry"
          value={industry}
          onChange={onIndustryChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        >
          <option value="">Select your industry...</option>
          {Object.keys(benchmarkData)
            .sort()
            .map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="revenueRange"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Revenue Range
        </label>
        <select
          id="revenueRange"
          value={revenueRange}
          onChange={onRevenueChange}
          disabled={!industry}
          className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${
            !industry ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Select revenue range...</option>
          {revenueOptions.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="currentDSO"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Current DSO (Days)
        </label>
        <input
          type="number"
          id="currentDSO"
          min="1"
          max="365"
          value={currentDSO}
          onChange={onCurrentDSOChange}
          placeholder="Enter your current DSO"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      <div>
        <label
          htmlFor="targetDSO"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Target DSO (Optional)
        </label>
        <div className="mt-2">
          <input
            type="range"
            id="targetDSO"
            min={sliderRange.min}
            max={sliderRange.max}
            value={targetDSO}
            onChange={onTargetDSOChange}
            disabled={!revenueRange}
            className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${
              !revenueRange ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
          <div className="text-center mt-2">
            <span className="font-semibold text-indigo-600 text-lg">
              {targetDSO} days
            </span>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Use slider to set a specific DSO target for comparison
        </p>
      </div>
    </div>
  </div>
);

const ResultsSection = ({
  benchmark,
  improvements,
  industry,
  revenueRange,
}) => {
  // Helper function to format numbers with commas
  const formatNumber = (num) => {
    return num ? num.toLocaleString() : "N/A";
  };

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-xl text-white">
      <div className="flex items-center mb-6">
        <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold">Performance Benchmarks</h3>
      </div>

      {!benchmark ? (
        <div className="text-center text-black py-10 bg-white bg-opacity-10 rounded-lg">
          <p className="opacity-80">
            {industry && revenueRange
              ? "Loading benchmark data..."
              : "Select your industry and revenue range to see benchmarks"}
          </p>
        </div>
      ) : (
        <div className="space-y-6 text-black">
          <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-5 border border-white border-opacity-20">
            <h4 className="font-semibold text-lg mb-4">
              DSO Performance Benchmarks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                <div className="text-sm opacity-80 mb-1">
                  Top Quartile (P25)
                </div>
                <div className="text-xl font-bold">
                  {benchmark["P25 DSO"] || "N/A"} days
                </div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                <div className="text-sm opacity-80 mb-1">Median (P50)</div>
                <div className="text-xl font-bold">
                  {benchmark["P50 DSO"] || "N/A"} days
                </div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                <div className="text-sm opacity-80 mb-1">
                  Bottom Quartile (P75)
                </div>
                <div className="text-xl font-bold">
                  {benchmark["P75 DSO"] || "N/A"} days
                </div>
              </div>
            </div>
          </div>

          {improvements.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center mb-6">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">
                  Financial Impact Analysis
                </h3>
              </div>

              <div className="space-y-5">
                {improvements.map((imp, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-5 border border-white border-opacity-20"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold">{imp.title}</h4>
                      <span className="bg-white bg-opacity-30 px-3 py-1 rounded-full text-xs font-semibold">
                        {imp.badge}
                      </span>
                    </div>

                    <p className="mb-4 opacity-90">
                      {imp.fromDSO} days → {imp.toDSO} days (
                      {imp.dsoImprovement} day improvement)
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-white bg-opacity-10 p-3 rounded-lg text-center">
                        <div className="text-xs opacity-80 mb-1">
                          Cash Released
                        </div>
                        <div className="text-lg font-bold">
                          ${formatNumber(imp.cashReleased)}
                        </div>
                        <div className="text-xs opacity-70 mt-1">
                          per $100M revenue
                        </div>
                      </div>

                      <div className="bg-white bg-opacity-10 p-3 rounded-lg text-center">
                        <div className="text-xs opacity-80 mb-1">
                          Interest Saved
                        </div>
                        <div className="text-lg font-bold">
                          ${formatNumber(imp.interestSaved)}
                        </div>
                        <div className="text-xs opacity-70 mt-1">
                          per $100M revenue
                        </div>
                      </div>

                      {imp.showCapex && (
                        <div className="bg-white bg-opacity-10 p-3 rounded-lg text-center">
                          <div className="text-xs opacity-80 mb-1">
                            CapEx Funding
                          </div>
                          <div className="text-lg font-bold">
                            {imp.capexFunded} years
                          </div>
                          <div className="text-xs opacity-70 mt-1">
                            of median CapEx
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const revenueRangeOrder = [
  "All",
  "$1-50M",
  "$50-200M",
  "$200M-$1B",
  "$1-10B",
  "$10B+",
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
  // ... (other industry data as provided in your original code)
  Telecommunications: {
    "$1-10B": {
      "P25 DSO": 33,
      "P50 DSO": 44,
      "P75 DSO": 60,
      "Cash Released (P25) per $100M Revenue": 7397260,
      "Interest Saved per $100M Revenue": 221918,
      "CapEX Funded by Cash Released": 0.74,
      "CapEX/Revenue": 10.0,
    },
    "$200M-$1B": {
      "P25 DSO": 31,
      "P50 DSO": 42,
      "P75 DSO": 58,
      "Cash Released (P25) per $100M Revenue": 7397260,
      "Interest Saved per $100M Revenue": 221918,
      "CapEX Funded by Cash Released": 0.74,
      "CapEX/Revenue": 10.0,
    },
  },
  "Transportation & Logistics": {
    "$1-10B": {
      "P25 DSO": 30,
      "P50 DSO": 41,
      "P75 DSO": 56,
      "Cash Released (P25) per $100M Revenue": 7123288,
      "Interest Saved per $100M Revenue": 213699,
      "CapEX Funded by Cash Released": 1.42,
      "CapEX/Revenue": 5.0,
    },
    "$1-50M": {
      "P25 DSO": 28,
      "P50 DSO": 43,
      "P75 DSO": 65,
      "Cash Released (P25) per $100M Revenue": 10136986,
      "Interest Saved per $100M Revenue": 304110,
      "CapEX Funded by Cash Released": 2.03,
      "CapEX/Revenue": 5.0,
    },
    "$200M-$1B": {
      "P25 DSO": 29,
      "P50 DSO": 42,
      "P75 DSO": 59,
      "Cash Released (P25) per $100M Revenue": 8219178,
      "Interest Saved per $100M Revenue": 246575,
      "CapEX Funded by Cash Released": 1.64,
      "CapEX/Revenue": 5.0,
    },
    "$50-200M": {
      "P25 DSO": 29,
      "P50 DSO": 42,
      "P75 DSO": 62,
      "Cash Released (P25) per $100M Revenue": 9041096,
      "Interest Saved per $100M Revenue": 271233,
      "CapEX Funded by Cash Released": 1.81,
      "CapEX/Revenue": 5.0,
    },
  },
};
