import React, { Suspense } from "react";
import ServerEmployeeTable from "./server.employee.table";
import ClientEmployeeFilter from "./client.employee.filter";

export default function ServerEmployeeMain() {
  return (
    <div className="flex w-full flex-col gap-y-3">
      <Suspense fallback={<div className="animate-pulse h-16 bg-gray-200 rounded" />}>
        <ClientEmployeeFilter />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse h-96 bg-gray-200 rounded" />}>
        <ServerEmployeeTable />
      </Suspense>
    </div>
  );
}
