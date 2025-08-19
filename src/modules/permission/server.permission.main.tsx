import React, { Suspense } from "react";
import ServerPermissionTable from "./server.permission.table";
import ClientPermissionFilter from "./client.permission.filter";

export default function ServerPermissionMain() {
  return (
    <div className="flex w-full flex-col gap-y-3">
      <Suspense fallback={<div className="animate-pulse h-16 bg-gray-200 rounded" />}>
        <ClientPermissionFilter />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse h-96 bg-gray-200 rounded" />}>
        <ServerPermissionTable />
      </Suspense>
    </div>
  );
}