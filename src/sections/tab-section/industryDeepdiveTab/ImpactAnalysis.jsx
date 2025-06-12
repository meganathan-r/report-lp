import React, { useEffect, useState } from "react";
import InsightCard from "../../../components/insights-card";
import { useAppStateContext } from "../../../context/AppStateContext";

const ImpactAnalysis = () => {
  const [tableData, setTableData] = useState([]);
  const { selectIndustry, industryData, selectRevenueBand } =
    useAppStateContext();
  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      const currentIndustryData = industryData?.filter(
        (industry) =>
          industry?.Industry == selectIndustry &&
          industry?.["Revenue Range"] == selectRevenueBand
      );
      const data = [
        {
          title: "Quick Ratio Impact",
          value: Number(currentIndustryData[0]?.["Quick Ratio_slope"]).toFixed(
            3
          ),
        },
        {
          title: "FCF Margin Impact",
          value: `${Number(
            currentIndustryData[0]?.["FCF Margin_slope"]
          ).toFixed(3)}`,
        },
        {
          title: "Cash Interest Coverage Impact",
          value: `${Number(
            currentIndustryData[0]?.["Cash Interest Coverage_slope"]
          ).toFixed(3)}`,
        },
      ].filter((item) => item.value > 0);
      setTableData(data);
    }
  }, [selectIndustry, selectRevenueBand, industryData]);
  if (tableData.length === 0) return;
  return (
    <div className="mb-8 sm:mb-10 mt-4">
      <div className="bg-white my-12 ">
        <h3 className="text-lg font-bold text-gray-800 mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-primary-600">
          Financial Impact Analysis per day
        </h3>

        <table className="w-full  lg:col-span-2 space-y-6 border-collapse rounded-lg">
          <thead>
            <tr className="">
              <th className="bg-gray-50 font-semibold text-gray-700 text-sm text-left px-4 py-4 border-b border-gray-200">
                Key Metrics
              </th>
              <th className="bg-gray-50 font-semibold text-gray-700 text-sm text-left px-4 py-4 border-b border-gray-200">
                Improvement DSO per day
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            {tableData.map((item, i) => (
              <tr key={i}>
                <td className="px-4 py-4 border-b border-gray-200">
                  {item.title}
                </td>
                <td className="px-4 py-4 border-b border-gray-200 text-primary-600 font-semibold">
                  {item.value}x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <InsightCard
          title="Strategic Insights"
          description={
            <>
              <strong>Predictability Focus:</strong>{" "}
              <span className="font-semibold">{selectIndustry}</span> companies
              in the <span className="font-semibold">{selectRevenueBand}</span>{" "}
              band, reducing DSO volatility can significantly improve forecast
              accuracy and reduce bad debt reserves. The data shows that a 1-day
              reduction in DSO correlates with a{" "}
              <span className="font-semibold">{tableData?.[0]?.value}x</span>{" "}
              improvement in{" "}
              <span className="font-semibold">{tableData?.[0]?.title}</span>
              {tableData[1] ? (
                <>
                  and
                  <span className="font-semibold">
                    {" "}
                    {tableData?.[1]?.value}x
                  </span>{" "}
                  improvement in{" "}
                  <span className="font-semibold">{tableData?.[1]?.title}</span>
                </>
              ) : (
                ""
              )}
              .
            </>
          }
        />
      </div>
    </div>
  );
};

export default ImpactAnalysis;
