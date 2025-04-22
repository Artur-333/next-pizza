"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { Checkbox, } from "./ui";

interface Props {
  className?: string;
  text: string;
  value: string;
  onCheckedChange: (cheacked: boolean) => void;
  cheacked?: boolean;
}

export const FilterCheckbox: React.FC<Props> = (props) => {
  const { className, text, value, onCheckedChange ,cheacked} = props;
  return (
    <label className={cn("flex items-center gap-2", className)}>
      <Checkbox className="w-5 h-5" value={value} checked={cheacked} onCheckedChange={onCheckedChange} />
      {text}
    </label>
  );
};
