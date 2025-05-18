"use client";
import { DatepickerLabelType } from "@/types/IDate";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

// Componente de seleção de mês

export interface IMonthPicker {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  datePickerLabel: DatepickerLabelType;
}

export const MonthPicker = (monthPickerProps: IMonthPicker) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(currentYear, i, 1);
    return {
      value: i,
      label:
        format(date, "MMM", { locale: ptBR }).charAt(0).toUpperCase() +
        format(date, "MMM", { locale: ptBR }).slice(1),
    };
  });

  const handleYearChange = (increment: number) => {
    setCurrentYear((prev) => prev + increment);
  };

  const handleMonthSelect = (monthValue: number) => {
    const newDate = new Date(currentYear, monthValue, 1);
    monthPickerProps.setDate(newDate);
  };

  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleYearChange(-1)}
          className="h-7 w-7 p-0"
        >
          &lt;
        </Button>
        <div className="font-medium">{currentYear}</div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleYearChange(1)}
          className="h-7 w-7 p-0"
        >
          &gt;
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {months.map((month) => {
          const isSelected =
            monthPickerProps.date &&
            monthPickerProps.date.getMonth() === month.value &&
            monthPickerProps.date.getFullYear() === currentYear;

          return (
            <Button
              key={month.value}
              variant={isSelected ? "default" : "ghost"}
              className={cn(
                "h-9 w-full text-center",
                isSelected && "bg-primary text-primary-foreground"
              )}
              onClick={() => handleMonthSelect(month.value)}
            >
              {month.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
