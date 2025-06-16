import { useEffect, useState } from "react";
import InsightCard from "../../../components/insights-card";
import { useAppStateContext } from "../../../context/AppStateContext";
import CTable from "../../../components/table";

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
        <h3 className="text-lg font-bold text-gray-800  relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-primary-600">
          Financial Impact Analysis
        </h3>
        {/* wip */}
        <p className="para-text mb-4">
          See how much absolute change is expected per day of DSO improvement to
          key metrics
        </p>
        <CTable
          suf="x"
          cols={["title", "value"]}
          tableHeading={["Key Metrics", "Impact per day of DSO improvement"]}
          data={tableData}
        />
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
