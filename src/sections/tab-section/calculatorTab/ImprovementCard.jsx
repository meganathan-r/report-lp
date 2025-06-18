import React from "react";
import FinancialMetric from "./FinancialMetric";

const ImprovementCard = ({ improvement }) => {
  return (
    <div className="bg-white group rounded-xl border border-gray-100  overflow-hidden transition-all hover:shadow-md">
      {/* Header Section */}
      <div
        className={`p-5  border-b border-gray-100 ${
          improvement.growfin
            ? "bg-[#4bfeae]/30 group-hover:bg-[#4bfeae]/50"
            : "bg-gray-50"
        }`}
      >
        <div className="flex  flex-col-reverse sm:flex-row sm:justify-between sm:items-start gap-3">
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
            {improvement.title}
          </h3>
          <span className="bg-blue-50 inline w-fit text-bblue-600 py-1 px-3 rounded-full text-xs font-medium tracking-wide">
            {improvement.badge}
          </span>
        </div>

        {/* DSO Improvement Section */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex items-center">
            <div className="bg-gray-100 text-gray-700 py-1 px-3 rounded-full text-sm">
              {improvement.fromDSO} days
            </div>
            <div className="mx-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <div className="bg-blue-100 text-bblue-700 py-1 px-3 rounded-full text-sm font-medium">
              {improvement.toDSO} days
            </div>
          </div>
          <div className="text-sm text-gray-600 font-medium">
            ({improvement.dsoImprovement} day improvement)
          </div>
        </div>
      </div>

      {/* Financial Metrics Section */}
      <div className="p-5">
        <div className="grid grid-cols-1 justify-evenly md:grid-cols-3 gap-5">
          <FinancialMetric
            title="Cash Released"
            value={`$${(Number(improvement.cashReleased) / 1000000).toFixed(
              1
            )}M`}
            description="per $100M revenue"
          />

          <FinancialMetric
            title="Interest Saved"
            value={`$${(Number(improvement.interestSaved) >= 1000000
              ? Number(improvement.interestSaved) / 1000000
              : Number(improvement.interestSaved) / 1000
            ).toFixed(1)}${
              Number(improvement.interestSaved) >= 1000000 ? "M" : "K"
            }`}
            description="per $100M revenue"
          />

          {improvement.showCapex && (
            <FinancialMetric
              title="CapEx Funding"
              value={`${improvement.capexFunded} years`}
              description="of median CapEx"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImprovementCard;
