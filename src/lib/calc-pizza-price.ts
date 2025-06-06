import { Ingredient, Variation } from "@prisma/client";
import { PizzaSizes, PizzaTypes } from "@/@types/pizza";

export const calcPizzaPrice =

    (
        size: PizzaSizes,
        type: PizzaTypes,
        variants: Variation[],
        ingredients: Ingredient[],
        selectedIngredients: Set<string>,
    
    ):number => {

        const pizzaPrice =
            variants.find((el) => el.size === size && el.pizzaType === type)
                ?.price || 0;
        const ingredientsPrice = ingredients

            .filter((el) => selectedIngredients.has(el.id.toString()))
            .reduce((acc, el) => acc + el.price, 0);
        const totalPrice = pizzaPrice + ingredientsPrice;
        return totalPrice;
            
    }