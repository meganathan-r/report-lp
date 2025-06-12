import { AppStateProvider } from "./context/AppStateContext";
import MainContent from "./sections";

function App() {
  return (
    <AppStateProvider>
      <MainContent />
    </AppStateProvider>
  );
}

export default App;
