import React, { Suspense } from "react";
import TableCustomer from "./components/table-customer";
import TableFilter from "./components/table-filter";
import Title from "@/components/Title/page-title";

async function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Data Pelanggan" urlBtn="/dashboard/customer/add" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue p-4 drop-shadow-2xl">
        <Suspense fallback={<p>Loading feed...</p>}>
          <TableFilter />
          <TableCustomer />
        </Suspense>
      </section>
    </div>
  );
}

export default Page;
