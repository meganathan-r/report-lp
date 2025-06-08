import React from "react";
import DSOTrendsChart from "./DSOTrendsChart";
import CashCycleChart from "./CashCycleChart";
import DSOAnalysis from "./DSOAnalysis";

const IndustryDeepdive = () => {
  return (
    <div className="p-6 pt-8 sm:pt-10 sm:p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="md:max-w-lg">
          <label
            for="revenue-band-select"
            class="block text-base font-medium text-gray-700 mb-2"
          >
            Select Industry
          </label>
          <div class="relative">
            <select
              id="revenue-band-select"
              name="revenueBand"
              class="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors appearance-none bg-white"
            >
              <option value="Banking &amp; Financial Services">
                Banking &amp; Financial Services
              </option>
              <option value="Basic Materials &amp; Chemicals">
                Basic Materials &amp; Chemicals
              </option>
              <option value="Energy, Utilities &amp; Waste">
                Energy, Utilities &amp; Waste
              </option>
              <option value="Food &amp; Beverage">Food &amp; Beverage</option>
              <option value="Healthcare &amp; Life Sciences">
                Healthcare &amp; Life Sciences
              </option>
              <option value="Industrial &amp; Manufacturing">
                Industrial &amp; Manufacturing
              </option>
              <option value="Media, Entertainment &amp; Advertising">
                Media, Entertainment &amp; Advertising
              </option>
              <option value="Professional Services">
                Professional Services
              </option>
              <option value="Real Estate &amp; Construction">
                Real Estate &amp; Construction
              </option>
              <option value="Retail &amp; Consumer Goods">
                Retail &amp; Consumer Goods
              </option>
              <option value="Technology, Software &amp; IT Services">
                Technology, Software &amp; IT Services
              </option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Transportation &amp; Logistics">
                Transportation &amp; Logistics
              </option>
            </select>
            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="md:max-w-sm">
          <label
            for="revenue-band-select"
            class="block text-base font-medium text-gray-700 mb-2"
          >
            Select Revenue Band
          </label>
          <div class="relative">
            <select
              id="revenue-band-select"
              name="revenueBand"
              class="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors appearance-none bg-white"
            >
              <option value="$1-50M">$1-50M</option>
              <option value="$50-200M">$50-200M</option>
              <option value="$200M-$1B">$200M-$1B</option>
              <option value="$1-10B">$1-10B</option>
              <option value="$10B+">$10B+</option>
              <option value="all">all</option>
            </select>
            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Banking &amp; Financial Services: $200M-$1B Revenue Band
      </h2>
      {/* card section */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bblue-400 to-blue-600"></div>
          <h3 class="text-sm text-gray-600 font-medium mb-2">Cash Cycle</h3>
          <p class="sm:text-[2rem] text-[1.5rem] font-extrabold text-bblue-500 mb-1 flex items-baseline gap-2">
            1 days
          </p>
          <p class="text-xs text-gray-500 leading-snug">
            DSO + DIO - DPO = Cash Conversion Cycle
          </p>
        </div>
        <div class="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bblue-400 to-blue-600"></div>
          <h3 class="text-sm text-gray-600 font-medium mb-2">
            Cash Release Opportunity
          </h3>
          <p class="sm:text-[2rem] text-[1.5rem] font-extrabold text-bblue-500 mb-1 flex items-baseline gap-2">
            $5M
          </p>
          <p class="text-xs text-gray-500 leading-snug">
            Per $100M revenue by meeting P25 DSO
          </p>
        </div>
        <div class="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bblue-400 to-blue-600"></div>
          <h3 class="text-sm text-gray-600 font-medium mb-2">
            Working Capital/Revenue
          </h3>
          <p class="sm:text-[2rem] text-[1.5rem] font-extrabold text-bblue-500 mb-1 flex items-baseline gap-2">
            3.2%
          </p>
          <p class="text-xs text-gray-500 leading-snug">
            Operating NWC as % of Revenue
          </p>
        </div>
        <div class="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bblue-400 to-blue-600"></div>
          <h3 class="text-sm text-gray-600 font-medium mb-2">DSO Range</h3>
          <p class="sm:text-[2rem] text-[1.5rem] font-extrabold text-bblue-500 mb-1 flex items-baseline gap-2">
            42 - 72
          </p>
          <p class="text-xs text-gray-500 leading-snug">
            Days Sales Outstanding (P25-P75)
          </p>
        </div>
        <div class="relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bblue-400 to-blue-600"></div>
          <h3 class="text-sm text-gray-600 font-medium mb-2">Interest Saved</h3>
          <p class="sm:text-[2rem] text-[1.5rem] font-extrabold text-bblue-500 mb-1 flex items-baseline gap-2">
            $122K
          </p>
          <p class="text-xs text-gray-500 leading-snug">Per $100M revenue</p>
        </div>
      </div>
      {/* chart section */}
      <DSOTrendsChart />
      <CashCycleChart />
      <DSOAnalysis />
      {/* new section */}
      <div class="mb-8">
        <h2 class="text-lg font-bold text-gray-800 mb-4">
          Banking &amp; Financial Services Profile
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="mb-6">
            <h3 class="text-base font-medium text-gray-700 ">
              Industry Characteristics
            </h3>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <p class="text-sm text-gray-500">Classification</p>
                  <p class="font-medium">Asset-Light</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">CapEx/Revenue</p>
                  <p class="font-medium">1.4%</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Interest/Revenue</p>
                  <p class="font-medium">2.1%</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Allowance/Revenue</p>
                  <p class="font-medium">0.00%</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Quick Ratio</p>
                  <p class="font-medium">0.63</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Sample Size</p>
                  <p class="font-medium">67 companies</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 mb-4  p-6 bg-gray-50 rounded-lg border-l-4 border-none ring ring-gray-200">
            <h4 class="text-gray-800 mb-2 text-base font-semibold">
              Key Pain Points
            </h4>
            <div class="text-gray-600 text-sm leading-relaxed">
              <ul class="space-y-2 text-sm">
                <li class="text-gray-700">
                  <span class="font-semibold text-black">
                    Customer Diversity:
                  </span>{" "}
                  Varied payment behaviors require segmented collection
                  strategies
                </li>
                <li class="text-gray-700">
                  <span class="font-semibold text-black">
                    Forecast Accuracy:
                  </span>{" "}
                  Unpredictable payment patterns impact cash planning
                  reliability
                </li>
                <li class="text-gray-700">
                  <span class="font-semibold text-black">
                    Dispute Resolution:
                  </span>{" "}
                  High-touch relationships require careful balance of
                  collections and satisfaction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* another section */}
      <div class="mb-8 sm:mb-10 mt-4">
        <div class="bg-white my-12 ">
          <h3 class="text-lg font-bold text-gray-800 mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-primary-600">
            Financial Impact Analysis
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <table class="w-full lg:col-span-2 space-y-6 border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <th class="bg-gray-50 font-semibold text-gray-700 text-sm text-left px-4 py-4 border-b border-gray-200">
                    Key Metrics
                  </th>
                  <th class="bg-gray-50 font-semibold text-gray-700 text-sm text-left px-4 py-4 border-b border-gray-200">
                    Current Impact
                  </th>
                  <th class="bg-gray-50 font-semibold text-gray-700 text-sm text-left px-4 py-4 border-b border-gray-200">
                    Performance
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm text-gray-600">
                <tr>
                  <td class="px-4 py-4 border-b border-gray-200">
                    Working Capital / Revenue
                  </td>
                  <td class="px-4 py-4 border-b border-gray-200 text-primary-600 font-semibold">
                    11.2%
                  </td>
                  <td class="px-4 py-4 border-b border-gray-200">
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold bg-yellow-100 text-yellow-600">
                      Average
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-4 border-b border-gray-200">
                    Quick Ratio Impact
                  </td>
                  <td class="px-4 py-4 border-b border-gray-200 text-primary-600 font-semibold">
                    0.012
                  </td>
                  <td class="px-4 py-4 border-b border-gray-200">
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold bg-green-50 text-green-600">
                      Good
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-4 border-b border-gray-200">
                    FCF Margin Impact
                  </td>
                  <td class="px-4 py-4 border-b border-gray-200 text-primary-600 font-semibold">
                    -0.040%
                  </td>
                  <td class="px-4 py-4 border-b border-gray-200">
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold bg-red-50 text-red-500">
                      Risk
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-4 border-b border-gray-200">
                    Cash Interest Coverage Impact
                  </td>
                  <td class="px-4 py-4 border-b border-gray-200 text-primary-600 font-semibold">
                    0.000x
                  </td>
                  <td class="px-4 py-4 border-b border-gray-200">
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold bg-green-50 text-green-600">
                      Stable
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="mt-6 mb-4  p-6 bg-gray-50 rounded-lg border-l-4 border-blue-800 border-none ring-1 ring-gray-200">
              <h4 class="text-gray-800 mb-2 text-base font-semibold">
                Strategic Insights
              </h4>
              <div class="text-gray-600 text-sm leading-relaxed">
                <strong>Predictability Focus:</strong> For Banking &amp;
                Financial Services companies in the $200M-$1B band, reducing DSO
                volatility can significantly improve forecast accuracy and
                reduce bad debt reserves. The data shows that a 1-day reduction
                in DSO correlates with a 0.012improvement in Quick Ratio and
                -0.040% increase in FCF margin.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* another section */}
      <div class="mb-8 sm:mb-10 mt-4">
        <h3 class="text-lg font-bold text-gray-800 mb-4">Key CFO Take-Aways</h3>
        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <ul class="space-y-3">
            <li class="flex">
              <div class="flex-shrink-0 hidden sm:flex w-6 h-6 rounded-full bg-blue-100 items-center justify-center mr-3 mt-0.5">
                <span class="text-blue-800 font-bold text-sm">1</span>
              </div>
              <span class="text-gray-700">
                Banking &amp; Financial Services companies with top-quartile DSO
                performance maintain 33% lower allowance-for-doubtful-accounts
                reserves, directly impacting gross margins.
              </span>
            </li>
            <li class="flex">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 hidden sm:flex items-center justify-center mr-3 mt-0.5">
                <span class="text-blue-800 font-bold text-sm">2</span>
              </div>
              <span class="text-gray-700">
                Companies in your industry and size band can improve cash
                forecasting accuracy by 42% through AI-enhanced receivables risk
                segmentation and behavioral payment pattern recognition.
              </span>
            </li>
            <li class="flex">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 hidden sm:flex items-center justify-center mr-3 mt-0.5">
                <span class="text-blue-800 font-bold text-sm">3</span>
              </div>
              <span class="text-gray-700">
                Top performers in the Banking &amp; Financial Services sector
                maintain their DSO advantage through automated, data-driven
                collections that preserve customer relationships while
                accelerating cash flow.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndustryDeepdive;
