"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { DatepickerLabelType } from "@/types/IDate";
import { MonthPicker } from "./monthPicker";

export function Datepicker({
  datePickerLabel = "month",
  className,
}: {
  datePickerLabel?: DatepickerLabelType;
  className?: string;
}) {
  const [date, setDate] = useState<Date>();
  const currentDate = new Date(Date.now());

  function getLabel(d: Date | undefined) {
    const targetDate = d ?? currentDate;
    let options: Intl.DateTimeFormatOptions;

    switch (datePickerLabel) {
      case "monthYear":
        options = { month: "long", year: "numeric" };
        break;
      case "fullDate":
        options = { day: "2-digit", month: "2-digit", year: "numeric" };
        break;
      case "month":
      default:
        options = { month: "long" };
        break;
    }

    let label = targetDate.toLocaleDateString("default", options);
    // Capitaliza o mês
    label = label.charAt(0).toUpperCase() + label.slice(1);
    return label;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={
            cn("justify-center items-center font-normal rounded-xl text-lg") +
            " " +
            className
          }
        >
          <p className="px-2 ">{getLabel(date)}</p>
          <MdKeyboardArrowDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {datePickerLabel === "month" || datePickerLabel === "monthYear" ? (
          <MonthPicker
            date={date}
            setDate={setDate}
            datePickerLabel={datePickerLabel}
          />
        ) : (
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
