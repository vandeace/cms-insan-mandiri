"use client";
import React from "react";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import useMutableSearchParams from "@/hooks/param";
import { getFormattedPosition } from "@/hooks/api/use-get-position";

const PositionFilter = () => {
  const searchParams = useMutableSearchParams();
  const positionData = getFormattedPosition();

  const onChangeSelect = (e: number) => {
    if (e === "all") {
      searchParams.delete("role");
    } else {
      searchParams.set("role", e);
    }
  };

  const defaultValue = searchParams.get("role") ?? undefined;

  return (
    <div>
      <Label htmlFor="search" className="mb-1 block text-sm font-bold">
        Jabatan
      </Label>
      <Select onValueChange={onChangeSelect} defaultValue={defaultValue}>
        <SelectTrigger>
          <SelectValue placeholder="Pilih Jabatan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Semua</SelectItem>
          {positionData.map(branch => (
            <SelectItem value={branch.value} key={branch.label}>
              {branch.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PositionFilter;
