import React from "react";
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

const DSOTrendsChart = () => {
  // Chart data
  const data = [
    { name: "$1-50M", dso: 40.2, cashRelease: 69.88 },
    { name: "$50-200M", dso: 14.6, cashRelease: 61.11 },
    { name: "$200M-$1B", dso: 21, cashRelease: 65.49 },
    { name: "$1-10B", dso: 33.8, cashRelease: 69.88 },
    { name: "$10B+", dso: 65.8, cashRelease: 87.41 },
    { name: "all", dso: 197, cashRelease: 197 },
  ];

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium text-gray-900">{label}</p>
          <p className="text-sm text-blue-900">
            DSO: {payload[0].value.toFixed(1)} days
          </p>
          <p className="text-sm text-green-500">
            Cash: ${payload[1].value.toFixed(1)}M
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mb-8 sm:mb-10 mt-4">
      {/* Chart title */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        DSO Trends Across Revenue Bands
      </h3>

      {/* Chart container */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
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
              tick={{ fill: "#666", fontSize: 12 }}
              tickLine={{ stroke: "#666" }}
              axisLine={{ stroke: "#666" }}
              tickCount={5}
              tickFormatter={(value) => value}
            />
            <Tooltip content={<CustomTooltip />} />
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
        description="Companies in the $200M-$1B revenue band could realize 122K in interest
          savings per $100M revenue by reducing their DSO from P75 to P25
          levels, improving both liquidity and profitability."
      />
    </div>
  );
};

export default DSOTrendsChart;
