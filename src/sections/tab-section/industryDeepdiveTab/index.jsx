import DSOTrendsChart from "./DSOTrendsChart";
import CashCycleChart from "./CashCycleChart";
import DSOAnalysis from "./DSOAnalysis";
import ValueCard from "./ValueCards";
import IndustryProfile from "./IndustryProfile";
import ImpactAnalysis from "./ImpactAnalysis";
import CFOTakeAways from "./CFOTakeAways";
import SelectInput from "../../../components/select-input";
import { industries, revenueBands } from "../../../utils/constant";
import ChallengesSolutionTable from "./ChallengesSolutionTable";
import ImprovedCTASection from "./CTAsection";
import SuccessStoryCard from "./SuccessStoryCard";

const IndustryDeepdive = ({
  handleChangeIndustry,
  handleChangeRevenueBand,
  selectIndustry,
  selectRevenueBand,
}) => {
  return (
    <div className="divide-y  divide-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 items-start pb-8 gap-4">
        <div className="flex flex-col col-span-1  gap-6 sm:p-4 md:sticky md:top-26 sm:border sm:border-gray-200 rounded-md">
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
        <div className="md:col-span-3 sm:p-4 sm:border sm:border-gray-200 rounded-lg ">
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
            <h2 className="tab-title mb-4">
              Operational Challenges in Managing Receivables
            </h2>

            <ChallengesSolutionTable challenges={challenges} />
          </div>
        </div>
      </div>
      {/* Success Stories */}
      <div className="mt-8">
        <div className="my-4 ">
          <h2 className="tab-title mb-4">
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
    challenge: "Lack of Prioritization",
    impact:
      "Treating all accounts equally dilutes effort, slowing down cash collection from high-risk or high-value customers.",
    solution: [
      {
        impact: "AI-Powered Prioritization",
        description:
          "Automatically identifies and prioritizes critical accounts based on historical payment behavior",
      },
    ],
  },
  {
    challenge: "Insufficient Visibility",
    impact:
      "Manual tracking and fragmented systems result in missed follow-ups, causing delayed collections",
    solution: [
      {
        impact: "Real-time Dashboards",
        description:
          "Provides instantaneous visibility into AR processes, enabling informed, proactive decision-making.",
      },
      {
        impact: "Unified AR Workspace",
        description:
          "Provides each collector with a live view of their accounts & tasks, speeding up their everyday processes. ",
      },
    ],
  },
  {
    challenge: "Disconnected Teams",
    impact:
      "Poor collaboration across departments hampers timely dispute resolution, delaying payments further.",
    solution: [
      {
        impact: "Collaborative AR Inbox",
        description:
          "Centralizes all AR-related communications, enabling seamless collaboration and visibility across teams.",
      },
    ],
  },
  {
    challenge: "Manual Inefficiencies",
    impact:
      "Repetitive, manual processes limit the team's ability to focus strategically, causing scalability challenges.",
    solution: [
      {
        impact: "Automated Adaptive Dunning",
        description:
          "Uses predictive analytics to tailor follow-ups, helping AR teams anticipate delays and respond effectively.",
      },
      {
        impact: "Structured Workflows",
        description:
          "Automates follow-up actions and escalations, significantly reducing manual efforts and ensuring timely outreach.",
      },
    ],
  },
];
