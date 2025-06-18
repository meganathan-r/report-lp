import React, { useMemo } from "react";
import ImprovementCard from "./ImprovementCard";
import BenchmarkCard from "./BenchmarkCard";

const ResultsSection = ({
  benchmark,
  currentDSO,
  targetDSO,
  industry,
  revenueRange,
}) => {
  // Calculate improvements based on benchmarks
  const improvements = useMemo(() => {
    if (!benchmark || currentDSO === null || isNaN(currentDSO)) return [];

    const p25DSO = benchmark["P25 DSO"];
    const p75DSO = benchmark["P75 DSO"];
    const cashReleaseRate =
      benchmark["Cash Released (P25) per $100M Revenue"] || 0;
    const interestSaveRate = benchmark["Interest Saved per $100M Revenue"] || 0;
    const capexFunding = benchmark["CapEX Funded by Cash Released"] || 0;
    const capexRevenue = benchmark["CapEX/Revenue"] || 0;

    const improvementsList = [];

    // Helper to calculate improvement impact
    const calculateImpact = (fromDSO, toDSO, title, badge, growfin) => {
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
        growfin: growfin,
      };
    };

    // Scenario 1: Current to Top Quartile
    const toTop = calculateImpact(
      currentDSO,
      p25DSO,
      "Current DSO → Top Quartile (P25)",
      "Best Practice"
    );
    if (toTop) improvementsList.push(toTop);

    // Scenario 2: Current to Target
    if (targetDSO && targetDSO < currentDSO) {
      const toTarget = calculateImpact(
        currentDSO,
        targetDSO,
        "Current DSO → Your Target",
        "Custom Goal"
      );
      if (toTarget) improvementsList.push(toTarget);
    }

    // Scenario 3: Growfin's 33% improvement
    const growfinTarget = Math.round(currentDSO * 0.67);
    const growfinImprovement = calculateImpact(
      currentDSO,
      growfinTarget,
      "Current DSO → Growfin Benchmark",
      "33% Improvement",
      "growfin"
    );
    if (growfinImprovement) improvementsList.push(growfinImprovement);

    return improvementsList;
  }, [benchmark, currentDSO, targetDSO]);

  return (
    <div className="lg:bg-gradient-to-br lg:from-blue-50 lg:to-indigo-50  rounded-xl lg:p-6">
      <div className="flex items-center mb-8">
        <h3 className="text-xl mt-4 lg:mt-0 font-semibold text-gray-800">
          Performance Analysis
        </h3>
      </div>

      {benchmark ? (
        <BenchmarkCard currentDSO={currentDSO} benchmark={benchmark} />
      ) : (
        <div className="bg-white lg:p-8 rounded-xl border border-gray-200 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-gray-600">
            Select your industry and revenue range to view performance
            benchmarks
          </p>
        </div>
      )}

      {improvements.length > 0 && (
        <div className="mt-10">
          <div className="flex items-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800">
              Financial Impact
            </h3>
          </div>

          <div className="space-y-6">
            {improvements.map((improvement, index) => (
              <ImprovementCard key={index} improvement={improvement} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsSection;
