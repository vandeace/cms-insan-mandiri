import Title from "@/components/Title/page-title";
import React, { Suspense } from "react";
import TableAbsence from "./components/table-daily-absence";
import TableFilter from "./components/filter-daily-absence";

async function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Laporan Absensi Harian" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue  p-4 drop-shadow-2xl">
        <Suspense fallback={<p>Loading feed...</p>}>
          <TableFilter />
          <TableAbsence />
        </Suspense>
      </section>
    </div>
  );
}

export default Page;
