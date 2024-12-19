"use client";
import { parseAsIsoDate, useQueryState } from "nuqs";
import { Label } from "../ui/label";
import MonthPicker from "../ui/month-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

const MonthsFilter = () => {
  const [month, setMonth] = useQueryState(
    "month",
    parseAsIsoDate.withDefault(new Date(new Date().toISOString().split("T")[0])),
  );

  return (
    <div>
      <Label htmlFor="month" className="mb-1 block text-sm font-bold">
        Bulan
      </Label>
      <Popover>
        <PopoverTrigger asChild className="!bg-transparent !w-full">
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !month && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {month ? (
              Intl.DateTimeFormat("id-ID", {
                month: "long",
                year: "numeric",
                timeZone: "Asia/Jakarta",
              }).format(new Date(month))
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <MonthPicker currentMonth={month} onMonthChange={setMonth} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MonthsFilter;
