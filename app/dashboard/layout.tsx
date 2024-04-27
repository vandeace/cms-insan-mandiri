"use client";

import { Content } from "@/components/layout/content";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import { DashboardProvider } from "@/hooks/dashboard-context";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <DashboardProvider>
        <div className="flex min-h-screen bg-alice-blue">
          <Sidebar />
          <div className="flex-1">
            <TopBar />
            <Content>{children}</Content>
          </div>
        </div>
      </DashboardProvider>
    </SessionProvider>
  );
}
