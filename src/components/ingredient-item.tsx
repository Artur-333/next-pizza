import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface Props {
  className?: string;
  name: string;
  price: number;
  imgUrl: string;
  onChecked: () => void;
  checked: boolean;
}

export const IngredientItem: React.FC<Props> = (props) => {
  const { className, onChecked, checked, name, price, imgUrl } = props;
  return (
    <button
      onClick={onChecked}
      className={cn(
        "rounded-2xl max-w-[150px] p-3 bg-white inline-flex flex-col items-center",
        checked && "outline-1 outline-primary",
        className
      )}
    >
      {checked && <CheckCircle2 />}
      <img src={imgUrl} alt="" width={50} height={50} />
      <span>{name}</span>
      <span>{price}</span>
    </button>
  );
};
