import Title from "@/components/Title/page-title";
import TableFilterMonthlyAbsence from "./components/filter-monthly-absence";
import TableAbsenceMonthly from "./components/table-monthly-absence";
import { Suspense } from "react";

function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Laporan Absensi Bulanan" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue  p-4 drop-shadow-2xl">
        <Suspense fallback={<p>Loading feed...</p>}>
          <TableFilterMonthlyAbsence />
          <TableAbsenceMonthly />
        </Suspense>
      </section>
    </div>
  );
}

export default Page;
