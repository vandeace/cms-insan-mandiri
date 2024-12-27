"use client";
import React from "react";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { getFormattedBranch } from "@/hooks/api/use-get-branch";
import useMutableSearchParams from "@/hooks/param";

interface TBranchFilter {
  defaultValueBranch?: string;
  disabledAll?: boolean;
}
const BranchFilter = ({ defaultValueBranch, disabledAll = false }: TBranchFilter) => {
  const searchParams = useMutableSearchParams();
  const branchData = getFormattedBranch();

  const onChangeSelect = (e: string | null) => {
    if (e === "all") {
      searchParams.delete("branch");
    } else {
      searchParams.set("branch", e);
    }
  };

  const value = searchParams.get("branch") ?? defaultValueBranch ?? undefined;

  return (
    <div>
      <Label htmlFor="search" className="mb-1 block text-sm font-bold">
        Kantor
      </Label>
      <Select onValueChange={onChangeSelect} value={value}>
        <SelectTrigger>
          <SelectValue placeholder="Pilih Kantor" />
        </SelectTrigger>
        <SelectContent>
          {!disabledAll && <SelectItem value="all">Semua</SelectItem>}
          {branchData.map(branch => (
            <SelectItem value={branch.value} key={branch.label}>
              {branch.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BranchFilter;
