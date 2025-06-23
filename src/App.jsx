import { useEffect } from "react";
import { AppStateProvider } from "./context/AppStateContext";
import usePrefetchQueryData from "./hooks/usePrefetchQueryData";
import MainContent from "./sections";

function App() {
  const prefetchIndustry = usePrefetchQueryData("industry");
  const prefetchTitleDescription = usePrefetchQueryData("titleDescription");

  useEffect(() => {
    prefetchIndustry();
    prefetchTitleDescription();
  }, []);

  return (
    <AppStateProvider>
      <MainContent />
    </AppStateProvider>
  );
}

export default App;
