/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import useMutableSearchParams from "@/hooks/param";

const employeeSearch = () => {
  const searchParams = useMutableSearchParams();
  return (
    <div>
      <Label htmlFor="search" className="mb-1 block text-sm font-bold">
        Karyawan
      </Label>
      <Input
        id="search"
        placeholder="Cari Karyawan"
        defaultValue={searchParams.get("search") ?? undefined}
        onChange={(e) => {
          searchParams.set("search", e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default employeeSearch;
