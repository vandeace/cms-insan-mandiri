"use client";
import { DatePicker } from "../ui/date-picker";
import { Label } from "../ui/label";
import { parseAsIsoDate, useQueryState } from "nuqs";

interface TFilterSearch {
  placeholder?: string;
  name?: string;
  label: string;
}

const FilterDate = ({ name, label }: TFilterSearch) => {
  const [date, setDate] = useQueryState(
    "date",
    parseAsIsoDate.withDefault(new Date(new Date().toISOString().split("T")[0])),
  );

  const onSelect = async (selectedDate: Date | undefined) => {
    if (selectedDate) {
      await setDate(selectedDate);
    } else {
      await setDate(null);
    }
  };

  const defaultValue = date ? new Date(date) : undefined;

  return (
    <div>
      <Label htmlFor={name} className="mb-1 block text-sm font-bold">
        {label}
      </Label>
      <DatePicker defaultValue={defaultValue} onSelect={onSelect} />
    </div>
  );
};

export default FilterDate;
