"use client"

import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SelectSingleEventHandler } from "react-day-picker"

export function DatePicker({day, setDay} : {day: Date; setDay: React.Dispatch<React.SetStateAction<Date>>}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
          <CalendarIcon className="mr-2 h-5 w-h-5" />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={day}
          onSelect={setDay as SelectSingleEventHandler}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
