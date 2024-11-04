"use client";

import { Content } from "@/components/layout/content";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import { DashboardProvider } from "@/hooks/dashboard-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({});
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardProvider>
        <div className="flex min-h-screen bg-alice-blue overflow-hidden">
          <Sidebar />
          <div className="flex-1">
            <TopBar />
            <ToastContainer autoClose={1500} position="top-center" />
            <Content>{children}</Content>
          </div>
        </div>
      </DashboardProvider>
    </QueryClientProvider>
  );
}
