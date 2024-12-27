import { parseAsString, useQueryState } from "nuqs";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface TFilterSearch {
  placeholder: string;
  name: string;
  label: string;
}
const FilterSearch = ({ name, label, placeholder }: TFilterSearch) => {
  const [search, setSearch] = useQueryState(name, parseAsString.withDefault(""));
  return (
    <div>
      <Label htmlFor={name} className="mb-1 block text-sm font-bold">
        {label}
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        defaultValue={search ?? undefined}
        onChange={e => {
          setSearch(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default FilterSearch;
