import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  imgUrl: string;
  size: 30 | 40 | 50;
}

export const PizzaImage: React.FC<Props> = (props) => {
  const { className, imgUrl, size } = props;
  return (
    <div
      className={cn(
        " relative flex justify-center items-center w-[450px] h-[450px]",
        className
      )}
    >
      <img
        className={cn(" translate-2 transition-all z-1", {
          "w-[220px] h-[220px]": size === 30,
          "w-[320px] h-[320px]": size === 40,
          "w-[420px] h-[420px]": size === 50,
        })}
        src={imgUrl}
        alt=""
      />
      <div className="absolute inset-2  border-2 border-dashed border-gray-400 rounded-full" />
      <div className="absolute inset-15  border-2 border-dashed border-gray-400 rounded-full" />
    </div>
  );
};
