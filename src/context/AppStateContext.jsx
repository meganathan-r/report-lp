import { createContext, useContext, useState, useEffect, useMemo } from "react";
import useQueryData from "../hooks/useQueryData";

const AppStateContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [industryData, setIndustryData] = useState([]);
  const { data, isLoading, isError, error } = useQueryData("industry");
  useEffect(() => {
    if (data && Array.isArray(data)) {
      setIndustryData(data);
    }
  }, [data]);

  const contextValue = useMemo(
    () => ({
      activeTab,
      setActiveTab,
      industryData,
      isLoading,
      isError,
      error,
    }),
    [activeTab, setActiveTab, industryData, isLoading, isError, error]
  );
  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppStateContext = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppStateContext is used with in AppStateProvider");
  }
  return context;
};
