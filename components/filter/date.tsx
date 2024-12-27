"use client";
import { formatTime } from "@/utils/parsed-time";
import { parseAsString, useQueryState } from "nuqs";
import { DatePicker } from "../ui/date-picker";
import { Label } from "../ui/label";

interface TFilterSearch {
  placeholder?: string;
  name?: string;
  label: string;
}

const FilterDate = ({ name, label }: TFilterSearch) => {
  const [date, setDate] = useQueryState("date", parseAsString.withDefault(formatTime(new Date())));

  const onSelect = async (selectedDate: Date | undefined) => {
    if (selectedDate) {
      await setDate(formatTime(selectedDate));
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
