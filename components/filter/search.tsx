"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parseAsString, useQueryState } from "nuqs";

interface SearchProps {
  name: string;
  label: string;
  placeholder: string;
}

export default function CustomerSearch({ name, label, placeholder }: SearchProps) {
  const [search, setSearch] = useQueryState(name, parseAsString.withDefault(""));

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        placeholder={placeholder}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}
