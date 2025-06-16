import React from "react";

const ChallengeCard = ({ challenge, impact, solution }) => (
  <div className="bg-white rounded-xl border border-gray-200 hover:shadow-sm overflow-hidden transition-all">
    <div className="p-5 space-y-4">
      <div>
        <div className="text-sm font-semibold text-blue-700 mb-1">
          Challenge
        </div>
        <h3 className="text-lg font-medium text-gray-900">{challenge}</h3>
      </div>
      <div className="border-t border-gray-100 pt-3">
        <div className="text-sm font-semibold text-gray-700 mb-1">Impact</div>
        <p className="text-gray-600">{impact}</p>
      </div>
      <div className="border-t border-gray-100 pt-3">
        <div className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
          AI Powered Solution
        </div>
        <p className="text-gray-800">{solution}</p>
      </div>
    </div>
  </div>
);
const ChallengeRow = ({ challenge, impact, solution }) => (
  <div className="grid grid-cols-12 gap-8 p-4 text-sm transition-colors">
    <div className="col-span-3">
      <h3 className="font-medium text-base text-gray-900">{challenge}</h3>
    </div>
    <div className="col-span-4 text-base text-gray-600">{impact}</div>
    <div className="col-span-5 text-base text-gray-800">{solution}</div>
  </div>
);

const ChallengesSolutionTable = ({ challenges }) => {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {challenges.map((item, index) => (
          <ChallengeCard key={index} {...item} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block rounded-lg bg-white overflow-hidden">
        <div className="grid grid-cols-12 gap-8 bg-gray-50 p-4 text-sm font-medium text-gray-700">
          <div className="col-span-3">Challenge</div>
          <div className="col-span-4">Impact</div>
          <div className="col-span-5 flex items-center">
            AI Powered Solution
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {challenges.map((item, index) => (
            <ChallengeRow key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChallengesSolutionTable;
