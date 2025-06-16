import { useEffect, useState } from "react";
import { useAppStateContext } from "../../../context/AppStateContext";
import useQueryData from "../../../hooks/useQueryData";

const SuccessStoryCard = () => {
  const { data } = useQueryData("testimonial");
  const [testimonial, setTestimonial] = useState({});
  const { selectIndustry, industryData } = useAppStateContext();
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const industryID = industryData.filter(
        (ind) =>
          ind.Industry == selectIndustry && ind?.["Revenue Range"] == "All"
      );
      const currentTestimonial = data?.find((test) =>
        test.industryID.split(",")?.includes(industryID[0]?.id)
      );

      setTestimonial(currentTestimonial);
    }
  }, [selectIndustry, data]);
  return (
    <>
      <div className="relative bg-gradient-to-br from-white to-blue-0 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-blue-100 transform hover:-translate-y-1">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-2xl pointer-events-none"></div>

        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-400/10 blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-indigo-400/10 blur-xl"></div>

        {/* Content container */}
        <div className="relative z-10 p-4 sm:p-8">
          {/* Tag Section */}
          {/* <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-1.5 px-4 rounded-full text-xs tracking-wide shadow-sm">
                Scalable AR Solution
              </span>
              <span className="bg-gradient-to-r hidden sm:block from-gray-700 to-gray-800 text-white font-medium py-1.5 px-4 rounded-full text-xs tracking-wide shadow-sm">
                Customer-Centric
              </span>
            </div>
          </div> */}

          {/* Main Content */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                  {testimonial?.company}
                </h2>
                <div className="text-gray-600 para-text font-medium max-w-lg">
                  Revolutionizing accounts receivable processes for{" "}
                  {selectIndustry}
                </div>
              </div>

              <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mr-3">
                  {testimonial?.valueAchieved}
                </span>
                <span className="text-base sm:text-lg font-semibold text-gray-700">
                  {testimonial?.AchievedDescription}
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="relative pl-10 mb-8">
            <svg
              className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 text-bblue-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
            </svg>
            <blockquote className="text-gray-700 text-lg border-0 border-l-0 leading-relaxed italic">
              <p className="pl-1">{testimonial?.testimonial}</p>
            </blockquote>
          </div>

          {/* Profile */}
          <div className="flex flex-col gap-4 sm:flex-row items-between mb-8">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-blue-300 to-indigo-400 border-2 border-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 overflow-hidden shadow-sm">
                <img
                  className="object-fill w-full h-full "
                  src={testimonial?.profilePic}
                  alt={testimonial?.personName}
                />
              </div>
              <div className="ml-4">
                <p className="font-bold text-gray-900 text-base sm:text-lg">
                  {testimonial?.personName}
                </p>
                <p className="text-gray-600 text-base">
                  {testimonial?.personTitle}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br sm:ml-auto   w-auto p-1 h-12 sm:h-14 flex-shrink-0 overflow-hidden ">
              <img
                className="w-full object-contain h-full "
                src={testimonial?.companyLogo}
                alt={testimonial?.company}
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="">
                <p className="font-semibold text-white text-base sm:text-lg">
                  Results achieved in first 90 days:
                </p>
                <p className="text-blue-100 text-sm">
                  Measurable impact on key metrics
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/20 backdrop-blur rounded-lg px-5 py-3 text-center border border-white/30">
                  <span className="block text-2xl font-bold text-white">
                    {testimonial?.value2}
                  </span>
                  <span className="block break-words text-xs text-blue-100 uppercase tracking-wider">
                    {testimonial?.value2Description}
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg px-5 py-3 text-center border border-white/30">
                  <span className="block text-2xl font-bold text-white">
                    {testimonial?.value3}
                  </span>
                  <span className="block break-words text-xs text-blue-100 uppercase tracking-wider">
                    {testimonial?.value3Description}
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
