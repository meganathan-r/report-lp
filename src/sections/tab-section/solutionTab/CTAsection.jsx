import React from "react";

const ImprovedCTASection = () => {
  return (
    <div className="mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-12 items-between justify-between">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-black mb-3 leading-tight">
                Transform Accounts Receivable for <br />
                <span className="text-bblue-500">
                  Banking & Financial Services
                </span>
              </h2>
              <p className="text-gray-500 text-base mb-8">
                Growth's AI-powered platform helps financial institutions
                optimize cash flow, reduce DSO, and enhance customer experience
                through intelligent automation.
              </p>

              <div className="space-y-6 mb-10">
                <h3 className="text-xl font-bold text-bblue-400 border-l-4 border-bblue-500 pl-4 py-1">
                  Key Benefits:
                </h3>
                <ul className="space-y-5">
                  <BenefitItem
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-bblue-500"
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
                    }
                    title="Accelerate Cash Flow"
                    description="Reduce DSO by 30-45% within the first 90 days of implementation"
                  />
                  <BenefitItem
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-bblue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    }
                    title="Intelligent Automation"
                    description="Automate 65% of collection activities with AI-powered workflows"
                  />
                  <BenefitItem
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-bblue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    }
                    title="Predictive Insights"
                    description="Increase cash flow by 20-30% with advanced analytics and forecasting"
                  />
                </ul>
              </div>
            </div>
          </div>

          <div className="m-auto max-w-md w-full">
            {/* Morphism Card */}

            <div className="bg-bblue-500 rounded-lg">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-white/10"></div>
              </div>
              <div className="mt-8 bg-gradient-to-r from-blue-700/30 to-[#0A2B3A] backdrop-blur-sm p-6 rounded-xl border border-white/10">
                {/* hubsport form */}
                <div className="hubSpotFormHere" id="hubSpotFormHere">
                  <div
                    id="embedHere"
                    style={{ position: "relative", height: "360px" }}
                  >
                    <div id="replaceThis" className="ud-contact-form-wrapper">
                      <div
                        id="hubSpotFormHere"
                        style={{ height: "100%" }}
                        className="hbspt-form"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, title, description }) => (
  <li className="flex items-start gap-4">
    <div className="flex-shrink-0 mt-1 bg-blue-200/30 p-1.5 rounded-lg">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg text-black">{title}</h4>
      <p className="text-gray-500 text-base">{description}</p>
    </div>
  </li>
);

const MetricCard = ({ value, label, trend }) => (
  <div className="bg-blue-900/20 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20">
    <div className="flex items-center gap-2 mb-1">
      <span
        className={`text-xl font-bold ${
          trend === "up" ? "text-[#4BFEAE]" : "text-blue-300"
        }`}
      >
        {value}
      </span>
      {trend === "up" ? (
        <svg
          className="w-5 h-5 text-[#4BFEAE]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-blue-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </div>
    <p className="text-blue-200 text-sm">{label}</p>
  </div>
);

export default ImprovedCTASection;
