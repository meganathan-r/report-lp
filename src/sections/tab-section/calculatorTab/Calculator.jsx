import React, { useState, useEffect, useMemo, useCallback } from "react";

const DSOCalculator = ({ benchmarkData = null }) => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRevenueRange, setSelectedRevenueRange] = useState("");
  const [currentDSO, setCurrentDSO] = useState("");
  const [targetDSO, setTargetDSO] = useState(30);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState("impact"); // "benchmark" or "impact"

  // Benchmark data remains the same as provided

  const revenueRangeOrder = [
    "$1-50M",
    "$50-200M",
    "$200M-$1B",
    "$1-10B",
    "$10B+",
  ];

  const industries = useMemo(() => Object.keys(benchmarkData).sort(), []);

  const availableRevenueRanges = useMemo(() => {
    if (!selectedIndustry || !benchmarkData[selectedIndustry]) return [];
    const availableRanges = Object.keys(benchmarkData[selectedIndustry]);
    return revenueRangeOrder.filter((range) => availableRanges.includes(range));
  }, [selectedIndustry]);

  const currentBenchmarkData = useMemo(() => {
    if (
      !selectedIndustry ||
      !selectedRevenueRange ||
      !benchmarkData[selectedIndustry]
    )
      return null;
    return benchmarkData[selectedIndustry][selectedRevenueRange];
  }, [selectedIndustry, selectedRevenueRange]);

  const targetDSORange = useMemo(() => {
    if (!currentBenchmarkData) return { min: 1, max: 365 };
    const p25 = currentBenchmarkData["P25 DSO"] || 30;
    const p75 = currentBenchmarkData["P75 DSO"] || 90;
    return {
      min: Math.max(1, p25 - 10),
      max: Math.min(365, p75 + 30),
    };
  }, [currentBenchmarkData]);

  const improvements = useMemo(() => {
    if (!currentDSO || !currentBenchmarkData) return [];

    const currentDSONum = parseFloat(currentDSO);
    if (isNaN(currentDSONum) || currentDSONum <= 0) return [];

    const data = currentBenchmarkData;
    const p25DSO = data["P25 DSO"];
    const p75DSO = data["P75 DSO"];
    const cashReleaseRate = data["Cash Released (P25) per $100M Revenue"] || 0;
    const interestSaveRate = data["Interest Saved per $100M Revenue"] || 0;
    const capexFunding = data["CapEX Funded by Cash Released"] || 0;
    const capexRevenue = data["CapEX/Revenue"] || 0;

    const calculateImpact = (
      fromDSO,
      toDSO,
      title,
      badge = "",
      color = "blue"
    ) => {
      if (fromDSO <= toDSO) return null;

      const dsoImprovement = fromDSO - toDSO;
      const improvementRatio = dsoImprovement / Math.max(p75DSO - p25DSO, 1);
      const cashReleased = improvementRatio * cashReleaseRate;
      const interestSaved = improvementRatio * interestSaveRate;
      const capexFunded = improvementRatio * capexFunding;

      return {
        title,
        badge,
        color,
        fromDSO,
        toDSO,
        dsoImprovement,
        cashReleased: Math.round(cashReleased),
        interestSaved: Math.round(interestSaved),
        capexFunded: capexFunded.toFixed(1),
        showCapex: capexRevenue > 2,
        impactScore: Math.round((dsoImprovement / fromDSO) * 100),
      };
    };

    const results = [];

    // To Top Quartile
    const toTop = calculateImpact(
      currentDSONum,
      p25DSO,
      "Achieve Top Quartile Performance",
      "Industry Leader",
      "emerald"
    );
    if (toTop) results.push(toTop);

    // To Target
    if (targetDSO && targetDSO < currentDSONum && targetDSO !== p25DSO) {
      const toTarget = calculateImpact(
        currentDSONum,
        targetDSO,
        "Reach Your Custom Target",
        "Strategic Goal",
        "blue"
      );
      if (toTarget) results.push(toTarget);
    }

    // Growfin's 33% improvement
    const growfinTarget = Math.round(currentDSONum * 0.67);
    if (growfinTarget !== p25DSO && growfinTarget !== targetDSO) {
      const growfinImprovement = calculateImpact(
        currentDSONum,
        growfinTarget,
        "Growfin Optimization Benchmark",
        "33% Reduction",
        "purple"
      );
      if (growfinImprovement) results.push(growfinImprovement);
    }

    return results;
  }, [currentDSO, currentBenchmarkData, targetDSO]);

  const triggerAnimation = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800);
  }, []);

  useEffect(() => {
    if (currentBenchmarkData) {
      const p25 = currentBenchmarkData["P25 DSO"] || 30;
      setTargetDSO(p25);
      setShowResults(true);
      triggerAnimation();
    } else {
      setShowResults(false);
    }
  }, [currentBenchmarkData, triggerAnimation]);

  useEffect(() => {
    if (improvements.length > 0) {
      triggerAnimation();
    }
  }, [improvements, triggerAnimation]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`;
    }
    return `$${num.toLocaleString()}`;
  };

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: "from-emerald-600 to-teal-700",
        border: "border-emerald-400/30",
        badge: "bg-emerald-400/20 text-emerald-300",
        accent: "text-emerald-400",
      },
      blue: {
        bg: "from-blue-600 to-indigo-700",
        border: "border-blue-400/30",
        badge: "bg-blue-400/20 text-blue-300",
        accent: "text-blue-400",
      },
      purple: {
        bg: "from-purple-600 to-violet-700",
        border: "border-purple-400/30",
        badge: "bg-purple-400/20 text-purple-300",
        accent: "text-purple-400",
      },
    };
    return colors[color] || colors.blue;
  };

  const getDSOStatus = () => {
    if (!currentBenchmarkData || !currentDSO) return null;
    const dso = parseFloat(currentDSO);
    const p25 = currentBenchmarkData["P25 DSO"];
    const p50 = currentBenchmarkData["P50 DSO"];
    const p75 = currentBenchmarkData["P75 DSO"];

    if (dso <= p25)
      return {
        status: "Excellent",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
      };
    if (dso <= p50)
      return { status: "Good", color: "text-blue-500", bg: "bg-blue-50" };
    if (dso <= p75)
      return { status: "Average", color: "text-amber-500", bg: "bg-amber-50" };
    return {
      status: "Needs Improvement",
      color: "text-red-500",
      bg: "bg-red-50",
    };
  };

  const dsoStatus = getDSOStatus();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -skew-y-1 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl transform"></div>
          <div className="relative z-10 py-16 px-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-200/50 mb-6">
              <span className="text-2xl mr-2">⚡</span>
              <span className="text-blue-700 font-semibold text-sm">
                Enterprise Finance Analytics
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-6 leading-tight">
              DSO Impact Calculator
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Unlock millions in working capital by optimizing your Days Sales
              Outstanding with industry-leading benchmarks
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Real-time Industry Benchmarks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Financial Impact Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Strategic Optimization Plans</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid xl:grid-cols-12 gap-8 lg:gap-12">
          {/* Input Section */}
          <div className="xl:col-span-5 space-y-8">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl shadow-blue-500/10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">
                    Company Profile
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Enter your details for personalized insights
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Industry Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Industry Sector
                  </label>
                  <div className="relative">
                    <select
                      value={selectedIndustry}
                      onChange={(e) => {
                        setSelectedIndustry(e.target.value);
                        setSelectedRevenueRange("");
                      }}
                      className="w-full px-6 py-4 bg-white/90 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-700 appearance-none text-lg font-medium shadow-sm"
                    >
                      <option value="">Select your industry...</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Revenue Range Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Annual Revenue
                  </label>
                  <div className="relative">
                    <select
                      value={selectedRevenueRange}
                      onChange={(e) => setSelectedRevenueRange(e.target.value)}
                      disabled={!selectedIndustry}
                      className="w-full px-6 py-4 bg-white/90 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-700 appearance-none text-lg font-medium shadow-sm disabled:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <option value="">Select revenue range...</option>
                      {availableRevenueRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Current DSO Input */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      Current DSO
                    </label>
                    {dsoStatus && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${dsoStatus.bg} ${dsoStatus.color}`}
                      >
                        {dsoStatus.status}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={currentDSO}
                      onChange={(e) => setCurrentDSO(e.target.value)}
                      min="1"
                      max="365"
                      placeholder="Enter days"
                      className="w-full px-6 py-4 bg-white/90 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-700 text-lg font-medium shadow-sm pr-16"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                      <span className="text-slate-400 font-medium">days</span>
                    </div>
                  </div>
                </div>

                {/* Target DSO Slider */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Target DSO (Optional)
                  </label>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="range"
                        value={targetDSO}
                        onChange={(e) => setTargetDSO(parseInt(e.target.value))}
                        min={targetDSORange.min}
                        max={targetDSORange.max}
                        disabled={!currentBenchmarkData}
                        className="w-full h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full appearance-none cursor-pointer disabled:cursor-not-allowed slider-modern"
                      />
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 font-bold text-lg">
                        {targetDSO} days
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 text-center">
                      Drag to set a custom DSO target for detailed comparison
                      analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="xl:col-span-7 space-y-8">
            {/* Results Tabs */}
            <div className="flex border-b border-slate-200">
              <button
                onClick={() => setActiveTab("benchmark")}
                className={`px-6 py-4 font-semibold text-lg ${
                  activeTab === "benchmark"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Industry Benchmarks
              </button>
              <button
                onClick={() => setActiveTab("impact")}
                className={`px-6 py-4 font-semibold text-lg ${
                  activeTab === "impact"
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Financial Impact
              </button>
            </div>

            {/* Benchmark Display */}
            {activeTab === "benchmark" && (
              <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl p-8 lg:p-10 text-white shadow-2xl shadow-slate-900/25">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold">
                      Industry Benchmarks
                    </h3>
                    <p className="text-white/70 text-sm">
                      Performance standards for your industry
                    </p>
                  </div>
                </div>

                {currentBenchmarkData ? (
                  <div
                    className={`transition-all duration-500 ${
                      isAnimating
                        ? "scale-95 opacity-70"
                        : "scale-100 opacity-100"
                    }`}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
                      <h4 className="text-xl font-bold mb-8 text-white/90 text-center">
                        DSO Performance Distribution
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-xl p-6 text-center border border-emerald-400/30">
                          <div className="text-sm text-emerald-300 mb-2 font-semibold uppercase tracking-wide">
                            Top Quartile
                          </div>
                          <div className="text-3xl font-black text-white mb-1">
                            {currentBenchmarkData["P25 DSO"]}
                          </div>
                          <div className="text-xs text-emerald-300/80">
                            days (P25)
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-xl p-6 text-center border border-blue-400/30">
                          <div className="text-sm text-blue-300 mb-2 font-semibold uppercase tracking-wide">
                            Median
                          </div>
                          <div className="text-3xl font-black text-white mb-1">
                            {currentBenchmarkData["P50 DSO"]}
                          </div>
                          <div className="text-xs text-blue-300/80">
                            days (P50)
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-xl p-6 text-center border border-amber-400/30">
                          <div className="text-sm text-amber-300 mb-2 font-semibold uppercase tracking-wide">
                            Bottom Quartile
                          </div>
                          <div className="text-3xl font-black text-white mb-1">
                            {currentBenchmarkData["P75 DSO"]}
                          </div>
                          <div className="text-xs text-amber-300/80">
                            days (P75)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Industry Context */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">
                            {selectedIndustry}
                          </div>
                          <div className="text-sm text-white/60">
                            Industry Sector
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">
                            {selectedRevenueRange}
                          </div>
                          <div className="text-sm text-white/60">
                            Revenue Range
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Metrics */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="text-lg font-bold text-white mb-4">
                          Financial Efficiency Metrics
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80">
                              Cash Release Rate:
                            </span>
                            <span className="text-white font-bold">
                              {formatNumber(
                                currentBenchmarkData[
                                  "Cash Released (P25) per $100M Revenue"
                                ]
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/80">
                              Interest Savings:
                            </span>
                            <span className="text-white font-bold">
                              {formatNumber(
                                currentBenchmarkData[
                                  "Interest Saved per $100M Revenue"
                                ]
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/80">
                              CapEX Funding:
                            </span>
                            <span className="text-white font-bold">
                              {
                                currentBenchmarkData[
                                  "CapEX Funded by Cash Released"
                                ]
                              }{" "}
                              years
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="text-lg font-bold text-white mb-4">
                          Performance Analysis
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80">
                              Your Current DSO:
                            </span>
                            <span className="text-white font-bold">
                              {currentDSO || "N/A"} days
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/80">Target DSO:</span>
                            <span className="text-white font-bold">
                              {targetDSO} days
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/80">
                              Potential Improvement:
                            </span>
                            <span className="text-white font-bold">
                              {currentDSO
                                ? `${parseInt(currentDSO) - targetDSO} days`
                                : "N/A"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 text-white/60">
                    <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-3xl flex items-center justify-center">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <p className="text-xl font-medium mb-2">
                      Ready for Analysis
                    </p>
                    <p className="text-white/40">
                      Select your industry and revenue range to unlock insights
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Financial Impact Analysis */}
            {activeTab === "impact" && improvements.length > 0 && (
              <div
                className={`transition-all duration-700 ${
                  isAnimating
                    ? "translate-y-4 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl shadow-green-500/10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">
                        Financial Impact Analysis
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Potential value from DSO optimization
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {improvements.map((improvement, index) => {
                      const colorClasses = getColorClasses(improvement.color);
                      return (
                        <div
                          key={index}
                          className={`bg-gradient-to-br ${colorClasses.bg} rounded-2xl p-8 text-white border ${colorClasses.border} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                        >
                          <div className="flex items-center justify-between mb-6">
                            <h5 className="text-xl font-bold text-white">
                              {improvement.title}
                            </h5>
                            <span
                              className={`px-4 py-2 ${colorClasses.badge} rounded-full text-sm font-bold backdrop-blur-sm`}
                            >
                              {improvement.badge}
                            </span>
                          </div>

                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                            <div className="flex items-center justify-between text-white/90">
                              <span className="font-medium">
                                DSO Improvement:
                              </span>
                              <span className="font-bold text-lg">
                                {improvement.fromDSO} → {improvement.toDSO} days
                                (-{improvement.dsoImprovement})
                              </span>
                            </div>
                          </div>

                          <div
                            className={`grid gap-4 ${
                              improvement.showCapex
                                ? "grid-cols-1 lg:grid-cols-3"
                                : "grid-cols-1 lg:grid-cols-2"
                            }`}
                          >
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                              <div className="text-sm text-white/80 mb-2 font-medium uppercase tracking-wide">
                                Cash Released
                              </div>
                              <div className="text-2xl lg:text-3xl font-black text-white mb-1">
                                {formatNumber(improvement.cashReleased)}
                              </div>
                              <div className="text-xs text-white/60">
                                per $100M revenue
                              </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                              <div className="text-sm text-white/80 mb-2 font-medium uppercase tracking-wide">
                                Interest Saved
                              </div>
                              <div className="text-2xl lg:text-3xl font-black text-white mb-1">
                                {formatNumber(improvement.interestSaved)}
                              </div>
                              <div className="text-xs text-white/60">
                                per $100M revenue
                              </div>
                            </div>
                            {improvement.showCapex && (
                              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                                <div className="text-sm text-white/80 mb-2 font-medium uppercase tracking-wide">
                                  CapEx Funding
                                </div>
                                <div className="text-2xl lg:text-3xl font-black text-white mb-1">
                                  {improvement.capexFunded}
                                </div>
                                <div className="text-xs text-white/60">
                                  years of median CapEx
                                </div>
                              </div>
                            )}
                          </div>

                          {improvement.impactScore && (
                            <div className="mt-6 text-center">
                              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
                                <span className="text-sm font-bold text-white/90">
                                  Impact Score: {improvement.impactScore}%
                                  improvement
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "impact" && improvements.length === 0 && (
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-16 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Financial Impact Analysis
                </h3>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Enter your current DSO and select your industry to see the
                  financial impact of optimizing your Days Sales Outstanding.
                  Potential savings could be substantial.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Optimize Your Cash Flow?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Transform your accounts receivable process and unlock millions
                in working capital
              </p>
              <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSOCalculator;
