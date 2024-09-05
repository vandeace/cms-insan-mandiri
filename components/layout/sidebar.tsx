"use client";
import { DashboardContext } from "@/hooks/dashboard-context";
import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { SidebarMenu } from "./sidebar-menu";
import { CollapseIcon } from "../icons/collapes";

export const Sidebar = () => {
  const context = useContext(DashboardContext);

  return (
    <div
      className={twMerge(
        "fixed z-20 h-full bg-columbia-blue",
        context?.showDesktopSidebar ? "w-[250px]" : "w-[80px]",
      )}
    >
      <div className="flex h-[58px] items-center justify-between px-4 py-5">
        <div className="flex items-center justify-center">
          {context?.showDesktopSidebar ? (
            <Image src={"/images/logo.png"} alt="logo-insan-mandiri" width={180} height={100} />
          ) : (
            <Image
              src={"/images/small-logo.png"}
              alt="logo-insan-mandiri-small"
              width={20}
              height={20}
              className="ml-3"
            />
          )}
        </div>
        <button
          onClick={context?.toggleDesktopSidebar}
          className={twMerge(
            "drop-shadow-[0px_0px_6px_rgba(0,0,0,0.25)]",
            context?.showDesktopSidebar ? "" : "absolute -right-4",
          )}
        >
          <CollapseIcon className={twMerge(context?.showDesktopSidebar ? "rotate-180" : "")} />
        </button>
      </div>
      <div className=" h-[calc(100%-60px)] flex-1 flex-col justify-between py-3 text-black shadow-md border-r-2">
        <SidebarMenu />
      </div>
    </div>
  );
};
