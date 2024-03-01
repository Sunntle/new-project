"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { DatePicker } from "./date-picker";
import { addDays, format, subDays } from "date-fns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
const TicketFlightHome = () => {
  const [startDay, setStartDay] = useState(new Date());
  const [endDay, setEndDay] = useState(new Date());
  return (
    <div className="rounded-xl bg-white p-6 w-full shadow">
      <div className="flex gap-x-5">
        <RadioGroup defaultValue="multi" className="flex">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="one" id="r1" />
            <Label htmlFor="r1">One way/ Round-trip</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multi" id="r2" />
            <Label htmlFor="r2">Multi-city</Label>
          </div>
        </RadioGroup>
        <Select>
          <SelectTrigger className="w-max rounded-2xl border-0 focus:ring-0 focus:ring-offset-0">
            <p className="font-semibold">
              <span className="text-custom">02</span> Adult,
              <span className="text-custom">01</span> Children
            </p>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="test">test</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-max  rounded-2xl border-0 focus:ring-0 focus:ring-offset-0">
            <p className="font-semibold">Bussiness Class </p>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="test">test</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-x-5 relative py-5">
        <div className="border rounded-xl border-black/10 p-4 basis-1/4 font-semibold">
          <p className="uppercase opacity-50">from</p>
          <h3 className="text-main  capitalize text-xl">da nang</h3>
          <p className=" capitalize">Quang nam, Viet Nam</p>
        </div>
        <div className="border rounded-xl border-black/10 p-4 basis-1/4 font-semibold">
          <p className="uppercase opacity-50">to</p>
          <h3 className="text-main  capitalize text-xl">ho chi minh</h3>
          <p className="capitalize">Viet Nam</p>
        </div>
        <div className=" border rounded-xl border-black/10 p-4 flex-1 font-semibold">
          <div className="flex justify-between">
            <div>
              <p className="uppercase opacity-50">departure</p>
              <h3 className="text-main  capitalize text-xl flex items-center gap-x-2">
                {format(startDay, "EEE, dd MMM, yyyy")}
                <DatePicker day={startDay} setDay={setStartDay} />
              </h3>
              <div className="flex gap-x-2"><span className="cursor-pointer text-gray-400 hover:underline hover:text-black" onClick={()=>setStartDay(subDays(new Date(startDay), 1))}>Prev</span><span  className="cursor-pointer text-gray-400 hover:underline hover:text-black" onClick={()=>setStartDay(addDays(new Date(startDay), 1))}>Next</span></div>
            </div>
            <div>
              <p className="uppercase opacity-50">return</p>
              <h3 className="text-main  capitalize text-xl flex items-center gap-x-2">
                {format(endDay, "EEE, dd MMM, yyyy")}
                <DatePicker day={endDay} setDay={setEndDay} />
              </h3>
              <div className="flex gap-x-2"><span  className="cursor-pointer text-gray-400 hover:underline hover:text-black" onClick={()=>setEndDay(subDays(new Date(endDay), 1))}>Prev</span><span  className="cursor-pointer text-gray-400 hover:underline hover:text-black" onClick={()=>setEndDay(addDays(new Date(endDay), 1))}>Next</span></div>
            </div>
          </div>
        </div>
        <div className="absolute translate-y-full bottom-0 right-0"><Button size={"lg"} className="text-white bg-main hover:bg-blue-700 rounded-xl">Search Flights <MoveRight className="ms-5"/></Button></div>

      </div>
    </div>
  );
};

export default TicketFlightHome;
