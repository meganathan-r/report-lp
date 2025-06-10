import React from "react";

const ImprovedCTASection = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-[10%] w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-0 right-[15%] w-80 h-80 rounded-full bg-indigo-400 blur-3xl"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E0_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 font-medium py-1.5 px-4 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                Banking & Financial Services
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Accounts Receivable with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Intelligent Automation</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Growth's AI-powered platform helps financial institutions optimize cash flow, reduce DSO, and enhance customer experience through intelligent automation.
              </p>

              <div className="space-y-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 relative pl-5 before:absolute before:left-0 before:top-2 before:h-6 before:w-1 before:bg-gradient-to-b from-blue-500 to-indigo-600">
                  Key Benefits:
                </h3>
                
                <div className="space-y-6">
                  <BenefitItem
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    }
                    title="Accelerate Cash Flow"
                    description="Reduce DSO by 30-45% within the first 90 days of implementation"
                    color="from-blue-500 to-indigo-600"
                  />
                  
                  <BenefitItem
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    }
                    title="Intelligent Automation"
                    description="Automate 65% of collection activities with AI-powered workflows"
                    color="from-green-500 to-teal-600"
                  />
                  
                  <BenefitItem
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    }
                    title="Predictive Insights"
                    description="Increase cash flow by 20-30% with advanced analytics and forecasting"
                    color="from-purple-500 to-fuchsia-600"
                  />
                </div>
              </div>
              
              <div className="flex items-center mt-12">
                <div className="flex -space-x-3 mr-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  <span className="font-bold">200+ financial institutions</span> trust our platform
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-[-100px] left-[-50px] w-80 h-80 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-[-100px] right-[-50px] w-80 h-80 rounded-full bg-indigo-300 blur-3xl"></div>
              </div>
              
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-full py-1 px-4 text-white text-sm font-medium">
                Secure Form
              </div>
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Schedule Your Personalized Demo</h3>
                  <p className="text-blue-100">See how Growth can transform your AR process in 30 minutes</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                        Work Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="company">
                        Financial Institution
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your bank or institution name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="assets">
                        Total Assets Managed
                      </label>
                      <select
                        id="assets"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option>Select range</option>
                        <option>Less than $1B</option>
                        <option>$1B - $10B</option>
                        <option>$10B - $50B</option>
                        <option>More than $50B</option>
                      </select>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Request Demo
                    </button>
                    
                    <p className="text-center text-gray-500 text-xs mt-4">
                      We respect your privacy. Your information is secure.
                    </p>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className="text-gray-600 font-medium">4.9/5 from 200+ financial institutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, title, description, color }) => (
  <div className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className={`flex-shrink-0 mt-1 bg-gradient-to-r ${color} p-2 rounded-lg text-white`}>
      {icon}
    </div>
    <div className="ml-5">
      <h4 className="font-bold text-xl text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default ImprovedCTASection;