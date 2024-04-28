"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useMutableSearchParams from "@/hooks/param";
import React from "react";

export default function TableFilter() {
  const searchParams = useMutableSearchParams();
  return (
    <div className="grid grid-cols-3">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="search" className="mb-1 block text-sm font-bold">
          Karyawan
        </Label>
        <Input
          id="search"
          placeholder="Cari Karyawan"
          onChange={(e) => {
            searchParams.set("search", e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
}
