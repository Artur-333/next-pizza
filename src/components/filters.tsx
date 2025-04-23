"use client"
import React from "react";
import { Input, Title } from "./ui";
import { FilterCheckbox } from "./filter-checkbox";
import { Ingredients } from "./ingredients";
import { PriceSlider } from "./price-slider";

interface Props {
  className?: string;
}
const ingredients = [
  {
    text: "Сырный соус",
    value: "1"
  },
  {
    text: "Моцарелла",
    value: "2"
  },
  {
    text: "Чеснок",
    value: "3"
  },
  {
    text: "Солённые огурчики",
    value: "4"
  },
  {
    text: "Красный лук",
    value: "5"
  },
  {
    text: "Томаты",
    value: "6"
  },
  {
    text: "Моцарелла",
    value: "7"
  },

]
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
      <hr className="my-3" />
      <Title className="mb-2" size={"s"} text={"Цена от и до:"} />
      <div className="flex gap-2 items-center mb-10" >
        <Input type="number" placeholder="0 ₽" min={0} max={5000} />
        <Input type="number" placeholder="1000 ₽" min={100} max={5000} />
      </div>
    <PriceSlider className="mb-10"/>
      <hr className="my-3" />
      <Ingredients title={"Ингредиенты:"} items={ingredients} limit={5} />

    </div>
  );
};
