import { cn } from "@/lib/utils";
import React from "react";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  className?: string;
  variants: Variant[];
  selectedValue: Variant["value"];
  setSelectedValue: (value: Variant["value"]) => void;
}

export const PizzaVariants: React.FC<Props> = (props) => {
  const { className, variants, selectedValue, setSelectedValue } = props;
  return (
    <ul className={cn("flex items-center gap-3 bg-gray-100 rounded-2xl p-2", className)}>
      {variants.map((el) => (
        <li className="w-full" key={el.value}>
          <button 
          onClick={() => setSelectedValue(el.value)}
          className={cn("rounded-2xl px-5 py-2 w-full",{
            "bg-white font-bold": el.value === selectedValue,
            "pointer-events-none opacity-50": el.disabled
          })}>{el.name}</button>
        </li>
      ))}
    </ul>
  );
};
