import React from "react";
import InsightCard from "../../../components/insights-card";

const ImpactAnalysis = () => {
  return (
    <div className="mb-8 sm:mb-10 mt-4">
      <div className="bg-white my-12 ">
        <h3 className="text-lg font-bold text-gray-800 mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-primary-600">
          Financial Impact Analysis
        </h3>

        <table className="w-full lg:col-span-2 space-y-6 border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="bg-gray-50 font-semibold text-gray-700 text-sm text-left px-4 py-4 border-b border-gray-200">
                Key Metrics
              </th>
              <th className="bg-gray-50 font-semibold text-gray-700 text-sm text-left px-4 py-4 border-b border-gray-200">
                Current Impact
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            <tr>
              <td className="px-4 py-4 border-b border-gray-200">
                Working Capital / Revenue
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-primary-600 font-semibold">
                11.2%
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 border-b border-gray-200">
                Quick Ratio Impact
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-primary-600 font-semibold">
                0.012
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 border-b border-gray-200">
                FCF Margin Impact
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-primary-600 font-semibold">
                -0.040%
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 border-b border-gray-200">
                Cash Interest Coverage Impact
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-primary-600 font-semibold">
                0.000x
              </td>
            </tr>
          </tbody>
        </table>
        <InsightCard
          title="Strategic Insights"
          description={
            <>
              <strong>Predictability Focus:</strong> For Banking &amp; Financial
              Services companies in the $200M-$1B band, reducing DSO volatility
              can significantly improve forecast accuracy and reduce bad debt
              reserves. The data shows that a 1-day reduction in DSO correlates
              with a 0.012improvement in Quick Ratio and -0.040% increase in FCF
              margin.
            </>
          }
        />
      </div>
    </div>
  );
};

export default ImpactAnalysis;
