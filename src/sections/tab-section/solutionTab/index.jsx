import React, { useState } from "react";
import ChallengesSolutionTable from "./ChallengesSolutionTable";
import InsightCard from "../../../components/insights-card";
import ImprovedCTASection from "./CTAsection";
import SelectInput from "../../../components/select-input";
import SuccessStoryCard from "./SuccessStoryCard";

const IndustrySolutions = ({ handleChangeIndustry, selectIndustry }) => {
  const industries = [
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
        </div>
        <div className="md:col-span-3 p-4 border border-gray-200 rounded-lg ">
          {/* Challenges & Solutions Section */}
          <div className="mb-8">
            <h2 className="sm:text-xl text-lg  font-bold text-gray-800 mb-4">
              Challenges & AI-Powered Solutions
            </h2>

            <ChallengesSolutionTable challenges={challenges} />
            <InsightCard
              title={"Industry Insight"}
              description={`For ${selectIndustry} companies,
              optimizing collections processes while enhancing customer experience
            creates the most significant value.`}
            />
          </div>
          {/* Success Stories */}
          <div className="mb-8 ">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Success Stories in Similar Industries
            </h2>
            <SuccessStoryCard />
          </div>

          <ImprovedCTASection />
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutions;
