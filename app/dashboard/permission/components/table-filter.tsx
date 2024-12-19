"use client";
import EmployeeSearch from "@/components/filter/search";
import StatusFilter from "@/components/filter/status";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import { useQueryState } from "nuqs";
export default function TableFilter() {
  const [search, setSearch] = useQueryState("search");
  const [status, setStatus] = useQueryState("status");

  const isFilterActive = !!search || !!status;

  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="grid w-full max-w-sm items-center gap-2">
        <EmployeeSearch name="search" label="Karyawan" placeholder="Cari Karyawan" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <StatusFilter />
      </div>
      <div className="w-full max-w-sm items-end gap-1.5 flex">
        <DataTableResetFilter
          isFilterActive={isFilterActive}
          onReset={() => {
            setSearch(null);
            setStatus(null);
          }}
        />
      </div>
    </div>
  );
}
