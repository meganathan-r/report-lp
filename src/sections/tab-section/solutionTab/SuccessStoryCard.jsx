import React from "react";

const SuccessStoryCard = () => {
  return (
    <>
      <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-100 transform hover:-translate-y-1">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-2xl pointer-events-none"></div>

        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-400/10 blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-indigo-400/10 blur-xl"></div>

        {/* Content container */}
        <div className="relative z-10 p-8">
          {/* Tag Section */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-1.5 px-4 rounded-full text-xs tracking-wide shadow-sm">
                Scalable AR Solution
              </span>
              <span className="bg-gradient-to-r from-gray-700 to-gray-800 text-white font-medium py-1.5 px-4 rounded-full text-xs tracking-wide shadow-sm">
                Customer-Centric
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                  MedUS Healthcare
                </h2>
                <div className="text-gray-600 font-medium max-w-lg">
                  Revolutionizing accounts receivable processes for healthcare
                  providers
                </div>
              </div>

              <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mr-3">
                  27%
                </span>
                <span className="text-lg font-semibold text-gray-700">
                  Increase in Cash Flow
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="relative pl-10 mb-8">
            <svg
              className="absolute left-0 top-0 w-8 h-8 text-bblue-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
            </svg>
            <blockquote className="text-gray-700 text-lg leading-relaxed italic">
              <p className="before:content-['“'] after:content-['”'] pl-1">
                With Growth, our AR processes are not only more efficient but
                also more organized. This has led to a 20% reduction in manual
                effort and a 30% reduction in outstanding receivables.
              </p>
            </blockquote>
          </div>

          {/* Profile */}
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-blue-300 to-indigo-400 border-2 border-white rounded-full w-16 h-16 flex-shrink-0 overflow-hidden shadow-sm">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
            </div>
            <div className="ml-4">
              <p className="font-bold text-gray-900 text-lg">Bridgett Crank</p>
              <p className="text-gray-600">Manager, Billing & Payroll</p>
              {/* <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div> */}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="">
                <p className="font-semibold text-white text-lg">
                  Results achieved in first 90 days:
                </p>
                <p className="text-blue-100 text-sm">
                  Measurable impact on key metrics
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-white/20 backdrop-blur rounded-lg px-5 py-3 text-center border border-white/30">
                  <span className="block text-2xl font-bold text-white">
                    45%
                  </span>
                  <span className="block text-xs text-blue-100 uppercase tracking-wider">
                    DSO Reduction
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg px-5 py-3 text-center border border-white/30">
                  <span className="block text-2xl font-bold text-white">
                    20%
                  </span>
                  <span className="block text-xs text-blue-100 uppercase tracking-wider">
                    Less AR Effort
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoryCard;
