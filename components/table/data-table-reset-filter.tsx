"use client";
import { Button } from "@/components/ui/button";

type DataTableResetFilterProps = {
  isFilterActive: boolean;
  onReset: () => void;
};

export function DataTableResetFilter({ isFilterActive, onReset }: DataTableResetFilterProps) {
  return (
    <>
      {isFilterActive ? (
        <Button variant="outline" onClick={onReset} className="w-full">
          Reset Filters
        </Button>
      ) : null}
    </>
  );
}
