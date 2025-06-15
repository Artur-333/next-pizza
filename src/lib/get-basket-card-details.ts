import { PizzaSizes, PizzaTypes } from "@/@types/pizza";
import { objPizzaTypes } from "@/constants/pizza";

export const getBasketCardDetails = (
  size: PizzaSizes | null,
  type: PizzaTypes | null,
  ingredients: Array<{ price: number; name: string }>
) => {
  const details = `${objPizzaTypes[type as PizzaTypes]} тесто ${size} см, `;

  const ingredientsJoin = ingredients.map((el) => el.name).join(", ");

  return type ? details + ingredientsJoin : "";
};
