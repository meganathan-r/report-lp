import TabNavbar from "./TabHeader";
import CrossIndustryOverview from "./crossIndustryTab";
import SolutionsSection from "./solutionTab";
import IndustryDeepdive from "./industryDeepdiveTab";
import HeaderSection from "../../components/header-section";
import IndustrySolutions from "./solutionTab";
import { useAppStateContext } from "../../context/AppStateContext";

const BenchmarkAnalytics = () => {
  const {
    activeTab,
    setActiveTab,
    selectIndustry,
    setSelectIndustry,
    selectRevenueBand,
    setSelectRevenueBand,
  } = useAppStateContext();
  const handleChangeIndustry = (value) => {
    setSelectIndustry(value);
  };
  const handleChangeRevenueBand = (value) => {
    setSelectRevenueBand(value);
  };
  return (
    <div
      id="tabsection"
      className="max-w-7xl mx-auto bg-white min-h-screen bg-gradient-to-br from-gray-25 to-gray-75 py-5 sm:py-10 "
    >
      {/* Header */}
      <HeaderSection
        title="Industry Benchmark Analytics"
        description={
          "Explore performance metrics across key industries to understand where you stand and how you can improve."
        }
      />
      <div className="bg-white rounded-xl shadow-lg   border  border-slate-200">
        {/* Tabs */}
        <TabNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="p-6 pt-8 sm:pt-10 sm:p-8">
          {activeTab === "tab1" && <CrossIndustryOverview />}
          {activeTab === "tab2" && (
            <IndustryDeepdive
              selectIndustry={selectIndustry}
              selectRevenueBand={selectRevenueBand}
              handleChangeIndustry={handleChangeIndustry}
              handleChangeRevenueBand={handleChangeRevenueBand}
            />
          )}
          {activeTab === "tab3" && (
            <IndustrySolutions
              selectIndustry={selectIndustry}
              handleChangeIndustry={handleChangeIndustry}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BenchmarkAnalytics;
