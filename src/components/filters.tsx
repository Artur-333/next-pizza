"use client"
import React from "react";
import { Input, Title } from "./ui";
import { FilterCheckbox } from "./filter-checkbox";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <Title className="mb-5" size={"l"} text={"Фильтрация"} />
      <div className="flex flex-col gap-2 ">
        <FilterCheckbox
          text={"Можно собирать"}
          value={"1"}
          onCheckedChange={() => { }}
        />
        <FilterCheckbox
          text={"Новинки"}
          value={"2"}
          onCheckedChange={() => { }}
        />
      </div>
      <hr className="my-3"/>
        <Title className="mb-2" size={"s"} text={"Цена от и до:"} />
        <div className="flex gap-2 items-center" >
          <Input type="number" placeholder="0 ₽" min={0} max={5000} />
          <Input type="number" placeholder="1000 ₽" min={100} max={5000} />
        </div>
      <hr className="my-3"/>

      </div>
  );
};
