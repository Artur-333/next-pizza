import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface Props {
  className?: string;
  name: string;

  onChecked: () => void;
  price: number;
  imgUrl: string;
  checked: boolean;
}

export const IngredientItem: React.FC<Props> = (props) => {
  const { className, name, onChecked, checked, price, imgUrl } = props;
  return (
    <button
      onClick={onChecked}
      className={cn(" rounded-2xl p-3 bg-white inline-flex m-w-[150px] flex-col items-center", checked && "outline-1 outline-primary", className)}
    >
      {checked && <CheckCircle2 />}
      <img src={imgUrl} alt="" width={50} height={50} />
      <span>{name}</span>
      <span> {price} </span>
    </button>
  );
};
