"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface TDatePicker {
  onSelect: (date: Date | undefined) => void;
  defaultValue?: Date;
}
export function DatePicker({ defaultValue, onSelect }: TDatePicker) {
  const [date, setDate] = React.useState<Date>(defaultValue ?? new Date());

  return (
    <Popover>
      <PopoverTrigger asChild className="!bg-transparent !w-full">
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            Intl.DateTimeFormat("id-ID", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              timeZone: "Asia/Jakarta",
            }).format(new Date(date))
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e: Date | undefined) => {
            if (e) {
              setDate(e);
              onSelect(e);
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
