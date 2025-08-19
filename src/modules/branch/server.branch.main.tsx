import React, { Suspense } from "react";
import ServerBranchTable from "./server.branch.table";
import ClientBranchFilter from "./client.branch.filter";

export default function ServerBranchMain() {
  return (
    <div className="flex w-full flex-col gap-y-3">
      <Suspense fallback={<div className="animate-pulse h-16 bg-gray-200 rounded" />}>
        <ClientBranchFilter />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse h-96 bg-gray-200 rounded" />}>
        <ServerBranchTable />
      </Suspense>
    </div>
  );
}
