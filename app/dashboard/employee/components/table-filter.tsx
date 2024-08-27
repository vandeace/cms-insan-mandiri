"use client";
import BranchFilter from "@/components/filter/branch";
import EmployeeSearch from "@/components/filter/search";
import PositionFilter from "@/components/filter/position";

export default function TableFilter() {
  return (
    <div className="grid grid-cols-3">
      <div className="grid w-full max-w-sm items-center gap-2">
        <EmployeeSearch
          key="search"
          label="Karyawan"
          placeholder="Cari Karyawan"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <BranchFilter />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <PositionFilter />
      </div>
    </div>
  );
}
