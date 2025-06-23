import { useEffect } from "react";

const CTASection = () => {
  useEffect(() => {
    window.disableRevenueHero = true;
    if (window.hbspt && document.getElementById("hubSpotFormHere")) {
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "25376890",
        formId: "9142fe08-8b81-4ea9-b537-0024f2cd5c91",
        target: "#hubSpotFormHere",
      });
    }

    if (window.RevenueHero && document.getElementById("embedHere")) {
      window.hero = new window.RevenueHero({
        routerId: "534",
        mode: "embed",
        embed: true,
      });
      window.hero.schedule(
        "hsForm_9142fe08-8b81-4ea9-b537-0024f2cd5c91",
        "#embedHere"
      );
    }
  }, []);

  return (
    <div className=" pt-12  sm:pt-16 overflow-hidden ">
      <div className=" relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-50 text-bblue-600 font-medium py-1.5 px-4 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
              Banking & Financial Services
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Transform Your Accounts Receivable with{" "}
              <span className="text-bblue-500">Intelligent Automation</span>
            </h1>

            <p className="para-text leading-relaxed">
              Growth's AI-powered platform helps financial institutions optimize
              cash flow, reduce DSO, and enhance customer experience through
              intelligent automation.
            </p>

            <div className="space-y-6">
              <div className="space-y-5">
                <BenefitItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  title="Accelerate Cash Flow"
                  description="Reduce DSO by 30-45% within the first 90 days of implementation"
                />

                <BenefitItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
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
                      className="h-5 w-5"
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
                  title="Predictive Insights"
                  description="Increase cash flow by 20-30% with advanced analytics and forecasting"
                />
              </div>
            </div>
          </div>

          {/* Form Column */}
          <HubsportForm />
        </div>
      </div>
    </div>
  );
};

export default CTASection;

const BenefitItem = ({ icon, title, description }) => (
  <div className="flex items-start bg-white py-3 rounded-lg ">
    <div className="flex-shrink-0 mt-1 bg-blue-50 p-2 rounded-lg text-bblue-500">
      {icon}
    </div>
    <div className="ml-4">
      <h4 className="font-semibold text-gray-900 text-lg my-0">{title}</h4>
      <p className="para-text mt-1">{description}</p>
    </div>
  </div>
);

const HubsportForm = () => {
  return (
    <div className="relative max-w-xl">
      <div className="relative bg-[#061E28] pt-4 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Schedule Your Personalized Demo
            </h3>
            <p className="text-blue-100">
              See how Growth can transform your AR process
            </p>
          </div>

          <div className="rounded-xl  p-4 py-6">
            {/* {hubsport form embbed code here} */}
            <div className="hubspot-form-embed overflow-hidden">
              <div
                id="embedHere"
                style={{
                  position: "relative",
                  height: "360px",
                  width: "100%",
                  overflow: "hidden",
                }}
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
  );
};
