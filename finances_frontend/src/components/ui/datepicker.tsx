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

export function Datepicker() {
  const [date, setDate] = React.useState<Date>();
  const currentDate = new Date(Date.now());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("justify-center items-center font-normal rounded-xl")}
        >
          <p className="px-4 text-lg">
            {date
              ? date
                  .toLocaleDateString("default", { month: "long" })
                  .charAt(0)
                  .toUpperCase() +
                date.toLocaleDateString("default", { month: "long" }).slice(1)
              : currentDate
                  .toLocaleDateString("default", { month: "long" })
                  .charAt(0)
                  .toUpperCase() +
                currentDate
                  .toLocaleDateString("default", { month: "long" })
                  .slice(1)}
          </p>
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
