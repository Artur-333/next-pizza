"use client";
import React from "react";
import { Input, Title } from "./ui";
import { FilterCheckboxGroup } from "./filter-checkbox-group";
import { PriceSlider } from "./price-slider";
import { cn } from "@/lib/utils";
import { useIngredients } from "@/hooks/ingredients";
import { useFilter } from "@/hooks/filter";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = (props) => {
  const { className } = props;
  const ingredientData = useIngredients();
  const filter = useFilter();

  return (
    <div className={cn("", className)}>
      <Title className="mb-5" size={"l"} text={"Фильтрация"} />
      <div className="flex flex-col gap-2 ">
        <FilterCheckboxGroup
          title="Размеры:"
          items={[
            {
              name: "Маленькая",
              id: "30",
            },
            {
              name: "Средняя",
              id: "40",
            },
            {
              name: "Большая",
              id: "50",
            },
          ]}
          selected={filter.selectedSizes}
          setSelected={filter.setSelectedSizes}
        />
        <FilterCheckboxGroup
          title="Типы теста:"
          items={[
            {
              name: "Традиционное",
              id: "1",
            },
            {
              name: "Тонкое",
              id: "2",
            },
          ]}
          selected={filter.selectedTypes}
          setSelected={filter.setSelectedTypes}
        />
      </div>
      <hr className="my-3" />
      <Title className="mb-2" size={"s"} text={"Цена от и до:"} />
      <div className="flex gap-2 items-center mb-10">
        <Input
          onChange={({ target: { value } }) =>
            filter.updatePrice("priceFrom", +value)
          }
          value={filter.price.priceFrom || "0"}
          type="number"
          placeholder="0 ₽"
          min={0}
          max={5000}
        />
        <Input
          onChange={({ target: { value } }) =>
            filter.updatePrice("priceTo", +value)
          }
          value={filter.price.priceTo || "5000"}
          type="number"
          placeholder="1000 ₽"
          min={100}
          max={5000}
        />
      </div>
      <PriceSlider
        className="mb-10"
        value={[filter.price.priceFrom || 0, filter.price.priceTo || 5000]}
        setValue={([priceFrom, priceTo]) =>
          filter.setPrice({ priceFrom, priceTo })
        }
      />
      <hr className="my-3" />
      <FilterCheckboxGroup
        title={"Ингредиенты:"}
        items={ingredientData}
        limit={5}
        selected={filter.selectedIngredients}
        setSelected={filter.setSelectedIngredients}
      />
    </div>
  );
};
