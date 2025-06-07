import { TabProvider } from "../context/TabContext";
import HeroSection from "./hero-section";
import IndustryCardsSection from "./industry-card-section";
import IndustryDistribution from "./industry-distribution";

const Report = () => {
  return (
    <TabProvider>
      <div className="scroll-smooth transition-all duration-200">
        <HeroSection />
        <IndustryDistribution />
        <IndustryCardsSection />
        {/* <TabSection /> */}
      </div>
    </TabProvider>
  );
};

export default Report;
