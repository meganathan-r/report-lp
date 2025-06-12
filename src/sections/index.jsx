import HeroSection from "./hero-section";
import IndustryDistribution from "./industry-distribution";
import IndustryCardsSection from "./industry-card-section";
import BenchmarkAnalytics from "./tab-section";

const MainContent = () => {
  return (
    <div className="scroll-smooth transition-all duration-200">
      <HeroSection />
      <IndustryDistribution />
      <IndustryCardsSection />
      <BenchmarkAnalytics />
    </div>
  );
};

export default MainContent;
