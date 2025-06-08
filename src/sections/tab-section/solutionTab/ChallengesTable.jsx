import React from "react";

const ChallengeTable = () => {
  const challenges = [
    {
      challenge: "Data Integration Complexity",
      impact: "High operational costs, delayed insights",
      solution: "Automated schema mapping with AI-powered anomaly detection",
    },
    {
      challenge: "Real-time Analytics Processing",
      impact: "Delayed decision making, missed opportunities",
      solution: "Streaming data processing with predictive analytics",
    },
    {
      challenge: "Customer Personalization",
      impact: "Low conversion rates, poor engagement",
      solution: "Behavior-based recommendation engine with adaptive learning",
    },
    {
      challenge: "Cybersecurity Threats",
      impact: "Data breaches, compliance violations",
      solution: "AI-driven threat detection with automated response",
    },
    {
      challenge: "Resource Optimization",
      impact: "Increased costs, inefficient operations",
      solution: "Predictive resource allocation with real-time adjustments",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] md:min-w-0">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200">
                <th className="py-4 px-4 sm:px-6 text-left font-semibold text-slate-700 text-sm uppercase tracking-wider">
                  Challenge
                </th>
                <th className="py-4 px-4 sm:px-6 text-left font-semibold text-slate-700 text-sm uppercase tracking-wider">
                  Impact
                </th>
                <th className="py-4 px-4 sm:px-6 text-left font-semibold text-slate-700 text-sm uppercase tracking-wider">
                  <div className="inline-flex items-center gap-1.5">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded whitespace-nowrap">
                      AI Powered
                    </span>
                    <span>Solution</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {challenges.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-medium text-slate-900">
                    <div className="font-medium">{row.challenge}</div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700">
                    {row.impact}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-700">
                    <div className="flex items-start">
                      <div className="text-blue-600 font-medium mr-1.5">
                        {row.solution}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <div className="p-5">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-slate-800 mb-2">
                      {item.challenge}
                    </h3>
                    <div className="flex items-center text-sm mb-3">
                      <span className="font-medium text-slate-600 mr-1.5">
                        Impact:
                      </span>
                      <span className="text-slate-600">{item.impact}</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded whitespace-nowrap ml-2">
                    AI
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-sm font-medium text-blue-600 mb-1">
                    Solution
                  </p>
                  <p className="text-slate-700">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-sm text-blue-700 font-medium">
              AI-powered solutions provide enhanced capabilities
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeTable;
