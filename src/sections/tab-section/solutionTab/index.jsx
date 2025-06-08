import { useState } from "react";
import ChallengeTable from "./ChallengesTable";

// Reusable Card component
const Card = ({ children, className }) => (
  <div className={`rounded-xl overflow-hidden ${className}`}>{children}</div>
);

// Reusable CardContent component
const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// Reusable Button component
const Button = ({ children, variant = "primary", className, ...props }) => {
  const baseClasses =
    "font-medium rounded-lg px-5 py-2.5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary:
      "bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 focus:ring-blue-500",
    outline:
      "bg-transparent border border-blue-500 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    dark: "bg-slate-800 hover:bg-slate-900 text-white focus:ring-slate-500",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function SolutionsSection() {
  const [industry, setIndustry] = useState("Banking & Financial Services");
  const [revenue, setRevenue] = useState("$1‑50M");
  const [activeTab, setActiveTab] = useState(2); // Default to third tab

  const tabs = [
    "Industry Overview",
    "Industry Deep‑dive",
    "Challenges & Solutions",
  ];

  const challenges = [
    {
      challenge: "Manual Follow‑ups",
      impact:
        "Reliance on email‑based collections without prioritization or automation",
      solution:
        "Intelligent Workflows: Automated follow‑ups based on account history, risk profile, and payment patterns",
    },
    {
      challenge: "Poor Risk Segmentation",
      impact:
        "One‑size‑fits‑all approach to collections without account prioritization",
      solution:
        "Customer Tiering: AI‑driven segmentation to optimize treatment strategies and payment terms",
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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 font-inter">
      {/* Header and Tabs */}

      {/* Filters */}
      <div className="bg-slate-50 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Select Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-500 shadow-sm"
            >
              <option>Banking & Financial Services</option>
              <option>Healthcare</option>
              <option>Manufacturing</option>
              <option>Retail & E-commerce</option>
              <option>Technology</option>
            </select>
          </div>
        </div>
      </div>

      {/* Challenge Table */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-900">
            Challenges & AI‑Powered Solutions
          </h3>
          <p className="text-sm text-slate-600 mt-1 md:mt-0">
            Filtered for: {industry} • {revenue}
          </p>
        </div>

        <ChallengeTable />
      </div>

      {/* Insight Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-12 border border-blue-100">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <svg
              className="h-5 w-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-slate-900">
              Industry Insight
            </h4>
            <p className="mt-2 text-slate-700">
              For <span className="font-semibold">{industry}</span> companies
              with revenue of <span className="font-semibold">{revenue}</span>,
              optimizing collections processes while enhancing customer
              experience creates the most significant value, typically resulting
              in a 25-40% reduction in DSO.
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <h3 className="text-2xl font-bold text-slate-900 mb-6">
        Success Stories in Similar Industries
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Testimonial Card */}
        <Card className="bg-white shadow-lg border border-slate-200">
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                Scalable AR Solution
              </span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                Customer‑Centric
              </span>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-slate-900">MedUS</h4>
                <p className="text-sm text-slate-600">
                  Healthcare Provider • $42M Revenue
                </p>
              </div>
              <div className="mt-3 sm:mt-0">
                <p className="text-4xl font-bold text-blue-600">27%</p>
                <p className="text-sm uppercase tracking-wide text-slate-600 mt-1">
                  Increase in Cash Flow
                </p>
              </div>
            </div>

            <blockquote className="mt-6 pl-4 border-l-2 border-blue-500 text-slate-700 italic">
              "With Growth, our AR processes are not only more efficient but
              also more organized. This has led to a 20% reduction in manual
              effort and a 30% reduction in outstanding receivables."
            </blockquote>

            <div className="mt-6 flex items-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/women/8.jpg"
                alt="Bridget Crank"
              />
              <div className="ml-4">
                <p className="font-medium text-slate-900">Bridget Crank</p>
                <p className="text-sm text-slate-600">
                  Manager, Billing & Payroll • MedUS
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="text-xs uppercase text-slate-600">
                  DSO Reduction
                </p>
                <p className="text-lg font-bold text-blue-600 mt-1">45%</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="text-xs uppercase text-slate-600">
                  AR Efficiency
                </p>
                <p className="text-lg font-bold text-blue-600 mt-1">+35%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                Industry Report
              </span>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-300">
                New Case Study
              </span>
            </div>

            <h4 className="text-xl font-bold mb-4">
              Transform AR for {industry} Companies
            </h4>

            <p className="text-slate-300 mb-6">
              Growth's AI-powered receivables platform helps {industry}{" "}
              companies achieve best-in-class performance through unified data
              visibility, automated workflows, and predictive analytics.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Reduce DSO by 30-45% within 90 days</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Automate 65% of collection activities</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-400 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  Increase cash flow by 20-30% with predictive analytics
                </span>
              </li>
            </ul>

            <div className="flex flex-col gap-3">
              <Button variant="primary" className="w-full text-center py-3">
                Schedule a Personalized Demo
              </Button>
              <Button
                variant="outline"
                className="w-full text-center py-3 border-white/30 text-white hover:bg-white/10"
              >
                Download Industry Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
