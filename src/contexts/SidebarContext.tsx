import { createContext, useContext, useState } from "react";

const SidebarContext = createContext<{
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}>({
  isCollapsed: false,
  setIsCollapsed: () => {},
});

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        setIsCollapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export const useSidebar = () => {
  return useContext(SidebarContext);
};
