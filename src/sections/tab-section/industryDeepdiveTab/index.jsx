import DSOTrendsChart from "./DSOTrendsChart";
import CashCycleChart from "./CashCycleChart";
import DSOAnalysis from "./DSOAnalysis";
import ValueCard from "./ValueCards";
import IndustryProfile from "./IndustryProfile";
import ImpactAnalysis from "./ImpactAnalysis";
import CFOTakeAways from "./CFOTakeAways";
import SelectInput from "../../../components/select-input";
import { industries, revenueBands } from "../../../utils/constant";

const IndustryDeepdive = ({
  handleChangeIndustry,
  handleChangeRevenueBand,
  selectIndustry,
  selectRevenueBand,
}) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-4 items-start  gap-4">
        <div className="flex flex-col col-span-1  gap-6 p-4 md:sticky top-18 border border-gray-200 rounded-md">
          <SelectInput
            label="Select Industry"
            options={industries}
            value={selectIndustry}
            handleChange={handleChangeIndustry}
          />
          <SelectInput
            label="Select Revenue Band"
            options={revenueBands}
            value={selectRevenueBand}
            handleChange={handleChangeRevenueBand}
          />
        </div>
        <div className="md:col-span-3 p-4 border border-gray-200 rounded-lg ">
          {/* 1. Industry Profile */}
          <IndustryProfile />
          {/* 2. Cash Cycle Component */}
          <CashCycleChart />
          {/* 3. DSO Range Analysis */}
          <DSOAnalysis />
          {/* 4. DSO Trend Chart */}
          <DSOTrendsChart />
          {/* 5. Industry Revenue Band Value Card Section */}
          <ValueCard />
          {/* 6. Industry Impact Analysis section */}
          <ImpactAnalysis />
          {/* 7. CFO Take aways section */}
          <CFOTakeAways />
        </div>
      </div>
    </div>
  );
};

export default IndustryDeepdive;
