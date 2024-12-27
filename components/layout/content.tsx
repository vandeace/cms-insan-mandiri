import { DashboardContext } from "@/hooks/dashboard-context";
import { PropsWithChildren, useContext } from "react";
import { twMerge } from "tailwind-merge";

export const Content = ({ children }: PropsWithChildren) => {
  const context = useContext(DashboardContext);

  return (
    <div className={twMerge("pt-[58px]", context?.showDesktopSidebar ? "pl-[250px]" : "pl-[80px]")}>
      <div className="p-6">{children}</div>
    </div>
  );
};
