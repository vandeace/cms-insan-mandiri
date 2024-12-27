"use client";
import { parseAsString, useQueryState } from "nuqs";
import React from "react";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const StatusFilter = () => {
  const options = React.useMemo(
    () => [
      { label: "Approved", value: "APPROVED" },
      { label: "Rejected", value: "REJECTED" },
      { label: "Pending", value: "PENDING" },
    ],
    [],
  );

  const [status, setStatus] = useQueryState("status", parseAsString.withDefault(""));
  const onChangeSelect = (e: string | null) => {
    if (e === "all") {
      setStatus("");
    } else {
      setStatus(e);
    }
  };

  return (
    <div>
      <Label htmlFor="search" className="mb-1 block text-sm font-bold">
        Status
      </Label>
      <Select onValueChange={onChangeSelect} value={status}>
        <SelectTrigger>
          <SelectValue placeholder="Pilih Status" />
        </SelectTrigger>
        <SelectContent>
          {status === "" && <SelectItem value="all">Semua</SelectItem>}
          {options.map(option => (
            <SelectItem value={option.value} key={option.label}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default StatusFilter;
