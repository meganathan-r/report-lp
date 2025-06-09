import React from "react";

const CFOTakeAways = () => {
  return (
    <div className="mb-8 sm:mb-10 mt-4">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Key CFO Take-Aways
      </h3>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <ul className="space-y-3">
          <li className="flex">
            <div className="flex-shrink-0 hidden sm:flex w-6 h-6 rounded-full bg-blue-100 items-center justify-center mr-3 mt-0.5">
              <span className="text-blue-800 font-bold text-sm">1</span>
            </div>
            <span className="text-gray-700">
              Banking &amp; Financial Services companies with top-quartile DSO
              performance maintain 33% lower allowance-for-doubtful-accounts
              reserves, directly impacting gross margins.
            </span>
          </li>
          <li className="flex">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 hidden sm:flex items-center justify-center mr-3 mt-0.5">
              <span className="text-blue-800 font-bold text-sm">2</span>
            </div>
            <span className="text-gray-700">
              Companies in your industry and size band can improve cash
              forecasting accuracy by 42% through AI-enhanced receivables risk
              segmentation and behavioral payment pattern recognition.
            </span>
          </li>
          <li className="flex">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 hidden sm:flex items-center justify-center mr-3 mt-0.5">
              <span className="text-blue-800 font-bold text-sm">3</span>
            </div>
            <span className="text-gray-700">
              Top performers in the Banking &amp; Financial Services sector
              maintain their DSO advantage through automated, data-driven
              collections that preserve customer relationships while
              accelerating cash flow.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CFOTakeAways;
