import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";

interface Props {
  className?: string;
  onClickUpdate: (value?: "plus" | "minus") => void;
  count: number;
}

export const CountButton: React.FC<Props> = (props) => {
  const { className, onClickUpdate, count } = props;
  return (
    <div className={cn("", className)}>
      <Button variant={"outline"} onClick={() => onClickUpdate("minus")}>
        <Minus />
      </Button>
      <span>{count}</span>
      <Button variant={"outline"} onClick={() => onClickUpdate("plus")}>
        <Plus />
      </Button>
    </div>
  );
};
