import { useMemo } from "react";
import TabNavbar from "./TabHeader";
import CrossIndustryOverview from "./crossIndustryTab";
import SolutionsSection from "./solutionTab";
import IndustryDeepdive from "./industryDeepdiveTab";
import HeaderSection from "../../components/header-section";
import IndustrySolutions from "./solutionTab";
import { useAppStateContext } from "../../context/AppStateContext";
import useQueryData from "../../hooks/useQueryData";

const BenchmarkAnalytics = () => {
  const {
    activeTab,
    setActiveTab,
    selectIndustry,
    setSelectIndustry,
    selectRevenueBand,
    setSelectRevenueBand,
  } = useAppStateContext();
  const { data: titleDescriptionData } = useQueryData("titleDescription");
  const headingContent = useMemo(() => {
    return (
      titleDescriptionData?.find(
        (item) => item?.section === "industryAnalytics"
      ) || {}
    );
  }, [titleDescriptionData]);
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
        title={headingContent?.title}
        description={headingContent?.description}
      />
      <div className="bg-white rounded-lg  border  border-slate-200">
        {/* Tabs */}
        <TabNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="p-4 pt-8 sm:pt-10 sm:p-8 ">
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
