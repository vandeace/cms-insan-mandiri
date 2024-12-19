import Title from "@/components/Title/page-title";
import TableFilterMonthlyAbsence from "./components/filter-monthly-absence";
import TableAbsenceMonthly from "./components/table-monthly-absence";

function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Laporan Bulanan" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue  p-4 drop-shadow-2xl">
        <TableFilterMonthlyAbsence />
        <TableAbsenceMonthly />
      </section>
    </div>
  );
}

export default Page;
