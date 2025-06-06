import { objPizzaSizes, objPizzaTypes } from "@/constants/pizza";
import { Ingredient, Product, Variation } from "@prisma/client";
export type ProductRelation = Product & {
  ingredients: Ingredient[];
  variants: Variation[];
};

export type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};
export type PizzaSizes = keyof typeof objPizzaSizes;
export type PizzaTypes = keyof typeof objPizzaTypes;
