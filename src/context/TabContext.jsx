import { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);
