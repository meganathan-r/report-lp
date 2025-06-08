import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Label,
} from "recharts";
import TabNavbar from "./TabHeader";
import CrossIndustryOverview from "./crossIndustryTab";
import SolutionsSection from "./solutionTab";
import IndustryDeepdive from "./industryDeepdiveTab";
import HeaderSection from "../../components/header-section";

const BenchmarkAnalytics = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const industryData = [
    {
      industry: "Banking &\nFinancial Services",
      P25: 15,
      P50: 25,
      P75: 30,
    },
    {
      industry: "Energy, Utilities\n& Waste",
      P25: 30,
      P50: 50,
      P75: 60,
    },
    {
      industry: "Industrial &\nManufacturing",
      P25: 45,
      P50: 55,
      P75: 67,
    },
    {
      industry: "Real Estate\n& Construction",
      P25: 33,
      P50: 55,
      P75: 62,
    },
    {
      industry: "Transportation &\nLogistics",
      P25: 28,
      P50: 50,
      P75: 57,
    },
  ];

  const revenueData = [
    {
      range: "Overall",
      P25: 45,
      P50: 58,
      P75: 72,
    },
    {
      range: "$1-50M",
      P25: 38,
      P50: 52,
      P75: 64,
    },
    {
      range: "$50-200M",
      P25: 42,
      P50: 57,
      P75: 73,
    },
    {
      range: "$200M-$1B",
      P25: 45,
      P50: 62,
      P75: 70,
    },
    {
      range: "$1-10B",
      P25: 48,
      P50: 63,
      P75: 75,
    },
    {
      range: "$10B+",
      P25: 50,
      P50: 64,
      P75: 76,
    },
  ];

  // Custom X-axis tick for multi-line labels
  const CustomTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#6B7280"
          fontSize={11}
          fontFamily="Inter, sans-serif"
        >
          {payload.value.split("\n").map((line, index) => (
            <tspan x="0" dy={index === 0 ? 0 : 12} key={index}>
              {line}
            </tspan>
          ))}
        </text>
      </g>
    );
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium text-gray-900">
            {label.replace("\n", " ")}
          </p>
          <div className="mt-1 space-y-1">
            {payload.map((entry, index) => (
              <p key={index} className="text-sm" style={{ color: entry.color }}>
                {entry.name}:{" "}
                <span className="font-medium">{entry.value} days</span>
              </p>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen bg-gradient-to-br from-gray-25 to-gray-75 py-5 sm:py-10 ">
      {/* Header */}
      <HeaderSection
        title="Industry Benchmark Analytics"
        description={
          "Explore performance metrics across key industries to understand where you stand and how you can improve."
        }
      />
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        {/* Tabs */}
        <TabNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "tab1" && <CrossIndustryOverview />}
        {activeTab === "tab2" && <IndustryDeepdive />}
        {activeTab === "tab3" && <SolutionsSection />}
      </div>
    </div>
  );
};

export default BenchmarkAnalytics;
