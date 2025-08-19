import React, { Suspense } from "react";
import ServerOvertimeTable from "./server.overtime.table";
import ClientOvertimeFilter from "./client.overtime.filter";

export default function ServerOvertimeMain() {
  return (
    <div className="flex w-full flex-col gap-y-3">
      <Suspense fallback={<div className="animate-pulse h-16 bg-gray-200 rounded" />}>
        <ClientOvertimeFilter />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse h-96 bg-gray-200 rounded" />}>
        <ServerOvertimeTable />
      </Suspense>
    </div>
  );
}
