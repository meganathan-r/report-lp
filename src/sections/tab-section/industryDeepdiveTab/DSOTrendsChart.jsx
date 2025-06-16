import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import InsightCard from "../../../components/insights-card";
import { useAppStateContext } from "../../../context/AppStateContext";
import CustomTooltip from "../../../components/tooltip";

// Custom tooltip

const DSOTrendsChart = () => {
  const { selectIndustry, industryData, selectRevenueBand } =
    useAppStateContext();
  const [revenueBandChart, setRevenueBandChart] = useState([]);
  // Chart data
  const orderMap = {
    "$1-50M": 0,
    "$50-200M": 1,
    "$200M-$1B": 2,
    "$1-10B": 3,
    "$10B+": 4,
    All: 5,
  };

  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      const currentIndustryData = industryData?.filter(
        (industry) => industry?.Industry == selectIndustry
      );
      const revenueBandData = currentIndustryData.map((item) => ({
        name: item?.["Revenue Range"],
        dso: item?.["P50 DSO"],
        cashRelease: (
          Number(item?.["Cash Released (P25) per $100M Revenue"]) / 1000000
        )?.toFixed(2),
      }));
      const sortedData = revenueBandData.sort((a, b) => {
        const orderA = orderMap[a.name] !== undefined ? orderMap[a.name] : 999;
        const orderB = orderMap[b.name] !== undefined ? orderMap[b.name] : 999;
        return orderA - orderB;
      });
      setRevenueBandChart(sortedData);
    }
  }, [selectIndustry]);

  return (
    <div className="mb-8 sm:mb-10 mt-4">
      {/* Chart title */}
      <h3 className="sm:text-xl text-lg font-bold text-gray-800 mb-4">
        DSO Trends Across Revenue Bands
      </h3>

      {/* Chart container */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueBandChart}
            margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#666", fontSize: 12 }}
              tickLine={{ stroke: "#666" }}
              axisLine={{ stroke: "#666" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              domain={[0, 60]}
              ticks={[0, 20, 50, 70, 100]}
              tick={{ fill: "#666", fontSize: 12 }}
              tickLine={{ stroke: "#666" }}
              axisLine={{ stroke: "#666" }}
              tickCount={5}
              tickFormatter={(value) => value}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 12]}
              ticks={[0, 20, 50, 70, 100]}
              tick={{ fill: "#666", fontSize: 12 }}
              tickLine={{ stroke: "#666" }}
              axisLine={{ stroke: "#666" }}
              tickCount={5}
              tickFormatter={(value) => value}
            />
            <Tooltip content={<CustomTooltip metric="M" />} />
            <Legend
              wrapperStyle={{
                bottom: 0,
                paddingTop: 20,
              }}
              payload={[
                { value: "Median DSO (days)", type: "line", color: "#1E3A8A" },
                {
                  value: "Cash Release Potential ($M)",
                  type: "line",
                  color: "#22C55E",
                },
              ]}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="dso"
              name="Median DSO (days)"
              stroke="#1E3A8A"
              strokeWidth={2}
              dot={{ r: 4, stroke: "#1E3A8A", strokeWidth: 2, fill: "#fff" }}
              activeDot={{ r: 6 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cashRelease"
              name="Cash Release Potential ($M)"
              stroke="#22C55E"
              strokeWidth={2}
              dot={{ r: 4, stroke: "#22C55E", strokeWidth: 2, fill: "#fff" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Analysis box */}
      <InsightCard
        title="Revenue Band Analysis"
        description={
          <>
            Companies in the{" "}
            <span className="font-semibold">{selectIndustry}</span> in{" "}
            <span className="font-semibold">{selectRevenueBand}</span> revenue
            band could realize{" "}
            <span className="font-semibold">
              {revenueBandChart?.[orderMap[selectRevenueBand]]?.cashRelease} M
            </span>{" "}
            in cash releas per $100M revenue by reducing their DSO from P75 to
            P25 levels, improving both liquidity and profitability.
          </>
        }
      />
    </div>
  );
};

export default DSOTrendsChart;
