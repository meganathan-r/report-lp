import React from "react";
import DSOTrendsChart from "./DSOTrendsChart";
import CashCycleChart from "./CashCycleChart";
import DSOAnalysis from "./DSOAnalysis";
import ValueCard from "./ValueCards";
import IndustryProfile from "./IndustryProfile";
import ImpactAnalysis from "./ImpactAnalysis";
import CFOTakeAways from "./CFOTakeAways";
import SelectInput from "../../../components/select-input";

const INDUSTRIES = [
  "Banking & Financial Services",
  "Basic Materials & Chemicals",
  "Energy, Utilities & Waste",
  "Food & Beverage",
  "Healthcare & Life Sciences",
  "Industrial & Manufacturing",
  "Media, Entertainment & Advertising",
  "Professional Services",
  "Real Estate & Construction",
  "Retail & Consumer Goods",
  "Technology, Software & IT Services",
  "Telecommunications",
  "Transportation & Logistics",
];

const REVENUE_BANDS = [
  "All",
  "$1‑50M",
  "$50‑200M",
  "$200M‑$1B",
  "$1‑10B",
  "$10B+",
];

const IndustryDeepdive = () => {
  return (
    <div className="">
      <div className="grid grid-cols-4 items-start  gap-4">
        <div className="flex flex-col  gap-6 p-4 sticky top-10 border border-gray-200 rounded-md">
          <SelectInput label="Select Industry" options={INDUSTRIES} />
          <SelectInput label="Select Revenue Band" options={REVENUE_BANDS} />
        </div>
        <div className="col-span-3 p-4 border border-gray-200 rounded-lg ">
          {/* Industry Revenue Band Value Card Section */}
          <ValueCard />
          {/* chart section */}
          <DSOTrendsChart />
          <CashCycleChart />
          <DSOAnalysis />
          {/* Industry Profile section */}
          <IndustryProfile />
          {/* Industry Impact Analysis section */}
          <ImpactAnalysis />
          {/* CFO Take aways section */}
          <CFOTakeAways />
        </div>
      </div>
    </div>
  );
};

export default IndustryDeepdive;
