import { pizzaSizes } from "@/constants/pizza";
import { PizzaTypes, Variant } from "@/@types/pizza";
import { Variation } from "@prisma/client";

export const getPizzaSize = (type: PizzaTypes,
  variants: Variation[]
): Variant[] => {
  const filteredPizzaByType = variants.filter(
    (el) => el.pizzaType === type
  );

  const filteredPizzaBySize = pizzaSizes.map((el) => ({
    name: el.name,
    value: el.value,
    disabled: !filteredPizzaByType.some((item) => item.size === +el.value),
  }));
  return filteredPizzaBySize;
}

