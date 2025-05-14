"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdKeyboardArrowDown } from "react-icons/md";

export function Datepicker({ showYear = false }: { showYear?: boolean }) {
  const [date, setDate] = React.useState<Date>();
  const currentDate = new Date(Date.now());

  function getLabel(d: Date | undefined) {
    const targetDate = d ?? currentDate;
    const options: Intl.DateTimeFormatOptions = showYear
      ? { month: "long", year: "numeric" }
      : { month: "long" };
    const label = targetDate.toLocaleDateString("default", options);
    return label.charAt(0).toUpperCase() + label.slice(1);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("justify-center items-center font-normal rounded-xl")}
        >
          <p className="px-4 text-lg">{getLabel(date)}</p>
          <MdKeyboardArrowDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
