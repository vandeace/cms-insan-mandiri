"use client";
import BranchFilter from "@/components/filter/branch";
import FilterSearch from "@/components/filter/search";
import { getFormattedBranch } from "@/hooks/api/use-get-branch";
import React from "react";

export default function TableFilter() {
  const branchData = getFormattedBranch();

  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="grid w-full max-w-sm items-center gap-2">
        <FilterSearch label="Karyawan" name="search" placeholder="Cari Karyawan" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <BranchFilter defaultValueBranch={branchData?.[0]?.value} disabledAll />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5"></div>
    </div>
  );
}
