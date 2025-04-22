import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <Select defaultValue="popular">
      <SelectTrigger className={cn("flex items-center gap-2", className)}>
        <ArrowUpDown size={16} />
        <span className="text-black font-bold">Сортировка:</span>
        <span className="text-primary font-bold">
          <SelectValue />
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="popular">рейтингу</SelectItem>
        <SelectItem value="price">цена</SelectItem>
      </SelectContent>
    </Select>
  );
};
