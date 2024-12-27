import React, { Suspense } from "react";
import TableFilter from "./components/table-filter";
import Title from "@/components/Title/page-title";
import TableBranch from "./components/table-branch";

async function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title urlBtn="/dashboard/branch/add" title="Data Kantor" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border-t border-t-alice-blue  p-4 ">
        <TableFilter />
        <Suspense fallback={<p>Loading feeds...</p>}>
          <TableBranch />
        </Suspense>
      </section>
    </div>
  );
}

export default Page;
