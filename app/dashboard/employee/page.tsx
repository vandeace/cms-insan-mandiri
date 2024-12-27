import React, { Suspense } from "react";
import TableEmployee from "./components/table-employee";
import TableFilter from "./components/table-filter";
import Title from "@/components/Title/page-title";

async function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Data Karyawan" urlBtn="/dashboard/employee/add" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue p-4 drop-shadow-2xl">
        <TableFilter />
        <Suspense fallback={<p>Loading feed...</p>}>
          <TableEmployee />
        </Suspense>
      </section>
    </div>
  );
}

export default Page;
