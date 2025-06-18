import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import InsightCard from "../../../components/insights-card";
import { useAppStateContext } from "../../../context/AppStateContext";

const CashCycleChart = () => {
  const { selectIndustry, industryData, selectRevenueBand } =
    useAppStateContext();
  const [cashCycleData, setCashCycleData] = useState([]);
  useEffect(() => {
    if (Array.isArray(industryData) && industryData.length > 0) {
      const currentIndustryData = industryData?.filter(
        (industry) =>
          industry?.Industry == selectIndustry &&
          industry?.["Revenue Range"] == selectRevenueBand
      );

      const chartData = [
        { name: "DSO", value: currentIndustryData[0]?.["P50 DSO"] },
        { name: "DIO", value: currentIndustryData[0]?.["P50 DIO"] },
        { name: "DPO", value: -currentIndustryData[0]?.["P50 DPO"] },
      ];

      setCashCycleData(chartData);
    }
  }, [selectIndustry, selectRevenueBand, industryData]);

  return (
    <div className="mb-8 sm:mb-10 mt-4">
      <h2 className="tab-title mb-4">Cash Cycle Components</h2>

      {/* Chart Container */}
      <div className="h-64 col-span-2 bg-white p-2 rounded-lg  ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={cashCycleData}
            margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
            barCategoryGap="25%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              verticalPoints={[80, 196.5, 429.5, 662.5, 779]}
              horizontalPoints={[5, 53, 101, 149, 197]}
            />
            <XAxis
              axisLine={{ stroke: "#666" }}
              tickLine={false}
              tick={{ fill: "#666" }}
              dataKey="name"
            />
            <YAxis
              axisLine={{ stroke: "#666" }}
              tickLine={false}
              tick={{ fill: "#666" }}
              domain={[-100, 100]}
              ticks={[-100, -50, 0, 50, 100]}
            />
            <Tooltip
              cursor={false}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              formatter={(value) => [`${Math.abs(value)} days`, ""]}
              labelFormatter={(name) => `${name}`}
            />
            <Bar dataKey="value" fill="#1E3A8A" radius={0}>
              <LabelList
                dataKey="value"
                position="top"
                formatter={(value) => `${Math.abs(value)}`}
                fill="#666"
                className="text-xs"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CashCycleChart;
