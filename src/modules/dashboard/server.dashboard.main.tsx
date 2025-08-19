import React, { Suspense } from "react";
import ClientDashboardSummary from "./client.dashboard.summary";

export default function ServerDashboardMain() {
  return (
    <div className="flex w-full flex-col gap-y-3">
      <Suspense
        fallback={<div className="animate-pulse h-32 bg-gray-200 rounded grid grid-cols-4 gap-4" />}
      >
        <ClientDashboardSummary />
      </Suspense>
    </div>
  );
}
