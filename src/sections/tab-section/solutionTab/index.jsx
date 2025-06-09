import React, { useState } from "react";
import ChallengesSolutionTable from "./ChallengesSolutionTable";
import InsightCard from "../../../components/insights-card";
import ImprovedCTASection from "./CTAsection";
import TestimonialsSection from "./TestimonialsSection";

const IndustrySolutions = () => {
  const [industry, setIndustry] = useState("Banking & Financial Services");
  const [revenueBand, setRevenueBand] = useState("$1-50M");

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

  const revenueBands = [
    "$1-50M",
    "$50-200M",
    "$200M-$1B",
    "$1-10B",
    "$10B+",
    "all",
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
      {/* Filter Section */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:max-w-lg">
            <label
              htmlFor="industry-select"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Select Industry
            </label>
            <div className="relative">
              <select
                id="industry-select"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors appearance-none bg-white"
              >
                {industries.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <ChevronDownIcon />
              </div>
            </div>
          </div>

          <div className="md:max-w-sm">
            <label
              htmlFor="revenue-band-select"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Select Revenue Band
            </label>
            <div className="relative">
              <select
                id="revenue-band-select"
                value={revenueBand}
                onChange={(e) => setRevenueBand(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors appearance-none bg-white"
              >
                {revenueBands.map((band) => (
                  <option key={band} value={band}>
                    {band}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <ChevronDownIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Challenges & AI-Powered Solutions
        </h2>

        <ChallengesSolutionTable challenges={challenges} />
        <InsightCard
          title={"Industry Insight"}
          description={`For ${industry} companies,
              optimizing collections processes while enhancing customer experience
            creates the most significant value.`}
        />
      </div>

      {/* Success Stories */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Success Stories in Similar Industries
        </h2>
      </div>

      <SuccessStoryCard />

      {/* <CTACard industry={industry} /> */}
      <ImprovedCTASection />
    </div>
  );
};

// Reusable Components
const ChevronDownIcon = () => (
  <svg
    className="w-4 h-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

const SuccessStoryCard = () => (
  <div className="bg-white rounded-lg mb-16 overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-200">
    {/* Tag Section */}
    <div className="px-6 pt-6 pb-2">
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-50 text-blue-700 font-medium py-1.5 px-3.5 rounded-full text-xs tracking-wide">
          Scalable AR Solution
        </span>
        <span className="bg-gray-50 text-gray-700 font-medium py-1.5 px-3.5 rounded-full text-xs tracking-wide hidden sm:inline-block">
          Customer-Centric
        </span>
      </div>
    </div>

    {/* Main Content */}
    <div className="px-6 pb-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          MedUS Healthcare
        </h2>
        <div className="flex items-baseline">
          <span className="text-4xl font-extrabold text-blue-600 mr-3">
            27%
          </span>
          <span className="text-base font-medium text-gray-600">
            Increase in Cash Flow
          </span>
        </div>
      </div>

      {/* Testimonial */}
      <div className="relative pl-8 mb-6">
        <svg
          className="absolute left-0 top-0.5 w-6 h-6 text-blue-100"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
        </svg>
        <blockquote className="text-gray-700 text-base leading-relaxed">
          <p className="before:content-['“'] after:content-['”']">
            With Growth, our AR processes are not only more efficient but also
            more organized. This has led to a 20% reduction in manual effort and
            a 30% reduction in outstanding receivables.
          </p>
        </blockquote>
      </div>

      {/* Profile */}
      <div className="flex items-center">
        <div className="bg-gray-200 border-2 border-gray-300 rounded-xl w-14 h-14 flex-shrink-0 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
        </div>
        <div className="ml-4">
          <p className="font-bold text-gray-900">Bridgett Crank</p>
          <p className="text-gray-600 text-sm">Manager, Billing & Payroll</p>
        </div>
      </div>
    </div>

    {/* Results Section */}
    <div className="bg-blue-50 px-6 py-4 border-t border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="font-semibold text-gray-700 text-sm">
          Results achieved in first 90 days:
        </p>
        <div className="flex gap-3">
          <span className="bg-white rounded-full px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-xs border border-gray-200">
            DSO -45%
          </span>
          <span className="bg-white rounded-full px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-xs border border-gray-200">
            AR Effort -20%
          </span>
        </div>
      </div>
    </div>
  </div>
);

const CTACard = ({ industry }) => (
  <div className="bg-[#061E28] rounded-2xl shadow-xl p-8 text-white">
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        From Insight to Action for {industry} CFOs
      </h2>
      <p className="text-blue-200 text-base max-w-xl">
        Growth's AI-powered receivables platform helps {industry} companies
        achieve best-in-class DSO performance through unified data visibility,
        automated workflows, and predictive analytics.
      </p>
    </div>
    <div className="mb-10">
      <h3 className="text-lg font-bold mb-6 text-blue-100">Key Benefits:</h3>
      <ul className="space-y-4">
        <BenefitItem text="Reduce DSO by 30-45% within 90 days" />
        <BenefitItem text="Automate 65% of collection activities" />
        <BenefitItem text="Increase cash flow by 20-30% with predictive analytics" />
      </ul>
    </div>
    <div className="bg-blue-700/30 backdrop-blur-sm rounded-xl p-6 mb-8 border border-blue-500/30">
      <div className="flex items-center">
        <div className="mr-4">
          <svg
            className="h-12 w-12 text-blue-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-base text-blue-100">
            Schedule a Personalized Demo
          </h4>
          <p className="text-blue-200 text-sm">
            See how Growth can transform your financial operations
          </p>
        </div>
      </div>
    </div>
    <button className="w-full bg-[#4BFEAE] text-[#3A4A43] font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-900">
      Schedule Growth Demo
    </button>
  </div>
);

const BenefitItem = ({ text }) => (
  <li className="flex items-start">
    <svg
      className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
    <span className="text-base">
      <span className="font-bold">{text.split(":")[0]}</span>
      {text.includes(":") ? `:${text.split(":")[1]}` : ""}
    </span>
  </li>
);

export default IndustrySolutions;
