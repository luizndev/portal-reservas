"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Label } from "./label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover";

export function Calendar22({ onChange }) {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState(undefined);

    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

    const holidays = [
        [1, 1],
        [4, 21],
        [5, 1],
        [9, 7],
        [10, 12],
        [11, 2],
        [11, 15],
        [11, 20],
        [12, 25],
    ];

    function isHoliday(day) {
        const month = day.getMonth() + 1;
        const date = day.getDate();
        return holidays.some(([m, d]) => m === month && d === date);
    }

    function isDateDisabled(day) {
        if (day < minDate) return true;
        if (day.getDay() === 0 || day.getDay() === 6) return true;
        if (isHoliday(day)) return true;
        return false;
    }

    return (
        <div className="flex flex-col gap-3">
            <Label htmlFor="date" className="px-1">
                Data da aula
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className="w-48 justify-between font-normal"
                    >
                        {date ? date.toLocaleDateString() : "Selecione a data"}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        disabled={isDateDisabled}
                        onSelect={(selectedDate) => {
                            setDate(selectedDate);
                            setOpen(false);
                            if (onChange) onChange(selectedDate);
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
