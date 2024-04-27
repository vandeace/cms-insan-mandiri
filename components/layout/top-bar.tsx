"use client";
import { twMerge } from "tailwind-merge";
import { CgProfile } from "react-icons/cg";
import { useDashboardContext } from "@/hooks/dashboard-context";
import { useSession } from "next-auth/react";

export const TopBar = () => {
  const context = useDashboardContext();
  const session = useSession();

  return (
    <div
      className={twMerge(
        "fixed right-0 z-10 flex h-[58px] justify-end px-6 py-2.5 border-b-2 bg-columbia-blue",
        context?.showDesktopSidebar ? "left-[250px]" : "left-[80px]"
      )}
    >
      <div className="flex">
        <CgProfile size="38px" />
        <div className="mr-3 hidden items-center sm:flex ml-3">
          <div className="mr-2 text-sm font-bold">
            {session?.data?.user?.name}
          </div>
        </div>
      </div>
    </div>
  );
};
