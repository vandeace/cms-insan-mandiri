"use client";
import { getFormattedPosition } from "@/hooks/api/use-get-position";
import { parseAsString, useQueryState } from "nuqs";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const PositionFilter = () => {
  const [role, setRole] = useQueryState("role", parseAsString.withDefault(""));
  const positionData = getFormattedPosition();

  const onChangeSelect = (e: string | null) => {
    if (e === "all") {
      setRole("");
    } else {
      setRole(e);
    }
  };

  const defaultValue = role ?? undefined;

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
