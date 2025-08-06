"use client";
import { Input } from "@/components/ui/input";
import { MachineTypeBrand } from "@/types/machine-type-brand";
import { parseAsString, useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetMachineTypeBrand } from "@/hooks/api/use-get-machine-type-brand";

export default function TableFilter() {
  const [search, setSearch] = useQueryState("search", parseAsString.withDefault(""));
  const [machineTypeBrand, setMachineTypeBrand] = useQueryState(
    "machineTypeBrand",
    parseAsString.withDefault(""),
  );

  const { data: machineTypeBrands } = useGetMachineTypeBrand();

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Input
        placeholder="Cari model mesin..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full md:w-[300px]"
      />
      <Select value={machineTypeBrand} onValueChange={value => setMachineTypeBrand(value)}>
        <SelectTrigger className="w-full md:w-[200px]">
          <SelectValue placeholder="Pilih merek" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Semua Merek</SelectItem>
          {machineTypeBrands?.data.map((brand: MachineTypeBrand) => (
            <SelectItem key={brand.id} value={brand.id}>
              {brand.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
