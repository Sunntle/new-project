"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FILTER } from "@/lib/const";
import { useMemo } from "react";
const Filter = () => {
  const generateListFilter = useMemo(() => {
    return FILTER.map((item, index) => {
      return <Select key={item.label + index}>
        <SelectTrigger className="w-[120px] rounded-2xl" >
          <SelectValue placeholder={item.label}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {item.options.map((el) => (
              <SelectItem key={el.label + item.label} value={el.data}>
                {el.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>;
    });
  }, []); 
  
  return <div className="flex justify-end items-center gap-x-2"><h4 className="uppercase text-gray-400 me-3 text-sm">filter</h4>{generateListFilter}</div>;
};

export default Filter;
