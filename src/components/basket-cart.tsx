import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { CountButton } from "./count-button";

interface Props {
  className?: string;
  imgUrl: string;
  details: string;
  name: string;
  price: number;
  updateCount: () => void;
  removeProduct: () => void;
  count: number;
}

export const BasketCart: React.FC<Props> = (props) => {
  const {
    className,
    imgUrl,
    name,
    details,
    price,
    updateCount,
    removeProduct,
    count,
  } = props;
  return (
    <div className={cn("relative flex gap-2 bg-white p-3", className)}>
      <img
        className="shrink-0 w-[65px] h-[65px]"
        src={imgUrl}
        alt={name}
        width={65}
        height={65}
      />
      <div className="flex flex-col gap-3 flex-1">
        <span>{name}</span>
        <p className="text-gray-400">{details}</p>
        <hr />
        <div className="flex justify-between">
          <CountButton count={count} onClickUpdate={updateCount} />
          <div>
            <span>{price} ₽</span>
          </div>
        </div>
      </div>
      <button className="absolute right-2 top-1" onClick={removeProduct}>
        <X />
      </button>
    </div>
  );
};
