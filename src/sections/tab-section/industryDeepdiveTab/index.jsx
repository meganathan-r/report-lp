import DSOTrendsChart from "./DSOTrendsChart";
import CashCycleChart from "./CashCycleChart";
import DSOAnalysis from "./DSOAnalysis";
import ValueCard from "./ValueCards";
import IndustryProfile from "./IndustryProfile";
import ImpactAnalysis from "./ImpactAnalysis";
import CFOTakeAways from "./CFOTakeAways";
import SelectInput from "../../../components/select-input";
import { industries, revenueBands } from "../../../utils/constant";
import ChallengesSolutionTable from "../solutionTab/ChallengesSolutionTable";
import ImprovedCTASection from "../solutionTab/CTAsection";
import SuccessStoryCard from "../solutionTab/SuccessStoryCard";

const IndustryDeepdive = ({
  handleChangeIndustry,
  handleChangeRevenueBand,
  selectIndustry,
  selectRevenueBand,
}) => {
  return (
    <div className="divide-y  divide-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 items-start pb-8 gap-4">
        <div className="flex flex-col col-span-1  gap-6 p-4 md:sticky top-20 border border-gray-200 rounded-md">
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
          {/* Challenges & Solutions Section */}
          <div className="">
            <h2 className="sm:text-xl text-lg  font-bold text-gray-800 mb-4">
              Operational Challenges in Managing Receivables
            </h2>

            <ChallengesSolutionTable challenges={challenges} />
          </div>
        </div>
      </div>
      {/* Success Stories */}
      <div className="mt-8">
        <div className="my-4 ">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Success Stories in Similar Industries
          </h2>
          <SuccessStoryCard />
        </div>

        <ImprovedCTASection />
      </div>
    </div>
  );
};

export default IndustryDeepdive;

const challenges = [
  {
    challenge: "Manual Follow-ups",
    impact:
      "Reliance on email-based collections without prioritization or automation",
    solution:
      "Intelligent Workflows: Automated follow-ups based on account history, risk profile, and payment patterns",
  },
  {
    challenge: "Poor Risk Segmentation",
    impact:
      "One-size-fits-all approach to collections without account prioritization",
    solution:
      "Customer Tiering: AI-driven segmentation to optimize treatment strategies and payment terms",
  },
  {
    challenge: "Fragmented Dispute Resolution",
    impact:
      "No structured workflow for tracking and resolving payment disputes",
    solution:
      "Collaboration Hub: Streamlined dispute resolution with integrated stakeholder communication",
  },
];
