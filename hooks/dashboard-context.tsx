import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type Context = {
  showDesktopSidebar: boolean;
  setShowDesktopSidebar: Dispatch<SetStateAction<boolean>>;
  toggleDesktopSidebar: () => void;
};

export type Provider = {
  children: ReactNode;
};

export const DashboardContext = createContext<Context | undefined>(undefined);

const DashboardProvider = ({ children }: Provider) => {
  const [showDesktopSidebar, setShowDesktopSidebar] = useState(true);

  const toggleDesktopSidebar = () => setShowDesktopSidebar(!showDesktopSidebar);

  return (
    <DashboardContext.Provider
      value={{
        showDesktopSidebar,
        setShowDesktopSidebar,
        toggleDesktopSidebar,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error(
      "usePaginationContext must be used within a PaginationProvider"
    );
  }
  return context;
};

export { DashboardProvider, useDashboardContext };
