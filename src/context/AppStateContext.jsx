import { createContext, useContext, useState, useEffect, useMemo } from "react";
import useQueryData from "../hooks/useQueryData";
import { industries, revenueBands } from "../utils/constant";

const AppStateContext = createContext(null);

revenueBands;
export const AppStateProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [industryData, setIndustryData] = useState([]);
  const [selectIndustry, setSelectIndustry] = useState(industries[0]);
  const [selectRevenueBand, setSelectRevenueBand] = useState([revenueBands[0]]);
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
      selectIndustry,
      setSelectIndustry,
      selectRevenueBand,
      setSelectRevenueBand,
    }),
    [
      activeTab,
      setActiveTab,
      industryData,
      isLoading,
      isError,
      error,
      selectIndustry,
      setSelectIndustry,
      selectRevenueBand,
      setSelectRevenueBand,
    ]
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
