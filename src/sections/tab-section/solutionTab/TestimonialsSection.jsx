const SuccessStoryCard = () => (
  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300">
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

export default SuccessStoryCard;
