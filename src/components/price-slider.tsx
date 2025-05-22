"use client";

import * as React from "react";
import { DualRangeSlider } from "@/components/ui/dual-slider";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  value: number[];
  setValue: ([priceFrom, priceTo]: number[]) => void;
}

export const PriceSlider: React.FC<Props> = (props) => {
  const { className , setValue, value } = props;

  return (
    <div className={cn("w-full", className)}>
      <DualRangeSlider
        label={(value) => <span>{value}</span>}
        value={value}
        onValueChange={setValue}
        min={0}
        max={5000}
        step={10}
      />
    </div>
  );
};
