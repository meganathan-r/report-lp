import { AppStateProvider } from "./context/AppStateContext";
import HeroSection from "./sections/hero-section";
import IndustryCardsSection from "./sections/industry-card-section";
import IndustryDistribution from "./sections/industry-distribution";
import BenchmarkAnalytics from "./sections/tab-section";

function App() {
  return (
    <AppStateProvider>
      <div className="scroll-smooth transition-all duration-200">
        <HeroSection />
        <IndustryDistribution />
        <IndustryCardsSection />
        <BenchmarkAnalytics />
      </div>
    </AppStateProvider>
  );
}

export default App;
