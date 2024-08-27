/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import useMutableSearchParams from "@/hooks/param";

interface TFilterSearch {
  placeholder: string;
  key: string;
  label: string;
}
const filterSearch = ({ key, label, placeholder }: TFilterSearch) => {
  const searchParams = useMutableSearchParams();
  return (
    <div>
      <Label htmlFor={key} className="mb-1 block text-sm font-bold">
        {label}
      </Label>
      <Input
        id={key}
        placeholder={placeholder}
        defaultValue={searchParams.get(key) ?? undefined}
        onChange={(e) => {
          searchParams.set(key, e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default filterSearch;
