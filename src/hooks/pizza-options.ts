import { useSet } from "react-use";
import { PizzaSizes, PizzaTypes, Variant } from "@/@types/pizza";
import { getPizzaSize } from "@/lib/get-pizza-size";
import React from "react";
import { Variation } from "@prisma/client";

interface ReturnProps {
    size: PizzaSizes;
    type: PizzaTypes;
    setSize: (value: PizzaSizes) => void;
    setType: (value: PizzaTypes) => void;
    selectedIngredients: Set<string>;
    setSelectedIngredients: (value: string) => void;
    filteredPizzaBySize: Variant[]
}

export const usePizzaOptions = (variants: Variation[]): ReturnProps => {
    const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(new Set<string>([]))

    const [size, setSize] = React.useState<PizzaSizes>(30);
    const [type, setType] = React.useState<PizzaTypes>(1);


    const filteredPizzaBySize = getPizzaSize(type, variants)


    React.useEffect(() => {
        const isAvailabelPizza = filteredPizzaBySize.find(el => !el.disabled);
        if (isAvailabelPizza) {
            setSize(+isAvailabelPizza.value as PizzaSizes)
        }
    }, [type]);
    return {
        size,
        type,
        setSize,
        setType,
        selectedIngredients,
        setSelectedIngredients,
        filteredPizzaBySize
    }

}