"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ScrollArea, Title } from "./ui";
import { FilterCheckbox } from "./filter-checkbox";
import { Search } from "./search";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  title: string;
  items: any[];
  limit?: number;
  selected: Set<string>;
  setSelected: (value: string) => void;
}

export const FilterCheckboxGroup: React.FC<Props> = (props) => {
  const { className, title, items, limit, selected, setSelected } = props;
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const list = showAll
    ? items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : items.slice(0, limit);

  return (
    <div className={cn("", className)}>
      <Title mb-3 size={"s"} text={title} />
      {showAll && (
        <Search
          className="mb-3"
          value={searchValue}
          placeholder={"Поиск"}
          onChange={setSearchValue}
          onFocus={() => {}}
        />
      )}
      <ScrollArea className={cn(" mb-3", showAll && "h-[150px]",className)}>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <FilterCheckbox
                text={item.name}
                value={item.id}
                onCheckedChange={() => setSelected(item.id.toString())}
                cheacked={selected?.has(item.id.toString())}
              />
            </li>
          ))}
        </ul>
      </ScrollArea>
      {items.length > (limit || 6) && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-primary font-bold"
        >
          {showAll ? "Скрыть" : "Показать всё"}
        </button>
      )}
    </div>
  );
};
