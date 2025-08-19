import React, { Suspense } from "react";
import ServerCustomerTable from "./server.customer.table";
import ClientCustomerFilter from "./client.customer.filter";

export default function ServerCustomerMain() {
  return (
    <div className="flex w-full flex-col gap-y-3">
      <Suspense fallback={<div className="animate-pulse h-16 bg-gray-200 rounded" />}>
        <ClientCustomerFilter />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse h-96 bg-gray-200 rounded" />}>
        <ServerCustomerTable />
      </Suspense>
    </div>
  );
}
