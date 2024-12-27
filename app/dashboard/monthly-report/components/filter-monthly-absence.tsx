"use client";
import BranchFilter from "@/components/filter/branch";
import MonthsFilter from "@/components/filter/months";
import FilterSearch from "@/components/filter/search";

export default function TableFilterMonthlyAbsence() {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="grid w-full max-w-sm items-center gap-2">
        <FilterSearch label="Karyawan" name="search" placeholder="Cari Karyawan" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <BranchFilter />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <MonthsFilter />
      </div>
    </div>
  );
}
