import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

const DSOAnalysis = () => {
  // Data for progress bars
  const progressItems = [
    {
      label: "Top Performers (P25)",
      value: 16,
      width: "25%",
      color: "bg-[#204A9D]",
    },
    { label: "P25 to Median", value: 22, width: "50%", color: "bg-[#5878BD]" },
    { label: "Median to P75", value: 31, width: "75%", color: "bg-[#CED7F0]" },
  ];

  // Data for bar chart
  const chartData = [
    { name: "P75", days: 31, fill: "#CED7F0" },
    { name: "Median", days: 22, fill: "#5878BD" },
    { name: "P25", days: 16, fill: "#204A9D" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm mb-8 sm:mb-10 mt-4 p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        DSO Range Analysis - Banking & Financial Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Progress Bars */}
        <div className="space-y-6">
          {progressItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">{item.label}</span>
                <span className="font-semibold">{item.value} days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`${item.color} h-2.5 rounded-full`}
                  style={{ width: item.width }}
                ></div>
              </div>
            </div>
          ))}

          <div className="pt-4 mt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              <span className="text-black font-medium">DSO Opportunity:</span>{" "}
              Moving from P75 (31 days) to P25 (16 days) would release
              approximately $4.7M per $100M revenue.
            </p>
          </div>
        </div>

        {/* Right Column - Bar Chart */}
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                stroke="#e5e7eb"
              />
              <XAxis
                type="number"
                domain={[0, 32]}
                ticks={[0, 8, 16, 24, 32]}
                stroke="#666"
                tickLine={false}
              />
              <YAxis
                dataKey="name"
                type="category"
                stroke="#666"
                tickLine={false}
                axisLine={false}
                width={60}
              />
              <Bar dataKey="days" barSize={40} radius={[0, 4, 4, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DSOAnalysis;
