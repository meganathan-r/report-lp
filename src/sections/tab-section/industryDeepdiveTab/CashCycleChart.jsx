import React from "react";
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

const CashCycleChart = () => {
  // Chart data
  const data = [
    { name: "DSO", value: 19 },
    { name: "DIO", value: 0 },
    { name: "DPO", value: -18 },
  ];

  return (
    <div className="mb-8 sm:mb-10 mt-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        Cash Cycle Components
      </h2>

      {/* Chart Container */}
      <div className="h-64 col-span-2 bg-white p-2 rounded-lg border border-gray-200 hover:shadow-md">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
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
              labelFormatter={(name) => `${name}:`}
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

      {/* Summary Card */}
      <InsightCard
        title="Cash Conversion Cycle: 1 day"
        description={
          "As an asset-light industry, Banking & Financial Services has potential to further optimize its cash cycle."
        }
      />
    </div>
  );
};

export default CashCycleChart;
