'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";

export interface DropDownSelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  label?: string; 
  className?:string;
  onValueChange?: (value: string) => void;
}

export function DropDownCategories({ options, placeholder, label, onValueChange,className}: DropDownSelectProps) {
  return (
    <Select onValueChange={onValueChange}  >
      <SelectTrigger className={clsx(`w-[180px] rounded-[5px] bg-brand-primary py-2 font-bold border-brand-mouve`,className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-brand-primary font-monoLight border-brand-hue-color">
        <SelectGroup>
          {label && <SelectLabel className="text-[18px] text-white">{label}</SelectLabel>} 
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} className="text-[#ccc]">
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}