"use client"
import React from 'react';
import { cn } from '@/lib/utils';
import { PizzaImage } from './pizza-image';
import { PizzaVariants } from './pizza-variants';
import { pizzaTypes } from '@/constants/pizza';
import { IngredientItem } from './ingredient-item';
import { PizzaSizes, PizzaTypes } from '@/@types/pizza';
import { Ingredient, Variation } from '@prisma/client';
import { Button, Title } from './ui';
import { usePizzaOptions } from '@/hooks/pizza-options';
import { calcPizzaPrice } from '@/lib/calc-pizza-price';

interface Props {
    name: string;
    className?: string;
    imgUrl: string;
    ingredients: Ingredient[];
    variants: Variation[];
}

export const PizzaForm: React.FC<Props> = (props) => {

    const { className, variants, imgUrl,  ingredients,name } = props;


    const {
        size,
        type,
        setSize,
        setType,
        selectedIngredients,
        setSelectedIngredients,
        filteredPizzaBySize } = usePizzaOptions(variants);

        const price = calcPizzaPrice(size,type,variants,ingredients,selectedIngredients)

    return (
        <div className={cn("flex  gap-10", className)}>
            <PizzaImage className="shrink-0" imgUrl={imgUrl} size={size} />
            <div>
                <Title size={"m"} text={name} />
                <PizzaVariants
                    className="mt-3"
                    variants={filteredPizzaBySize}
                    selectedValue={size.toString()}
                    setSelectedValue={(value) => {
                        setSize(+value as PizzaSizes);
                    }}
                />
                <PizzaVariants
                    className="mt-3"
                    variants={pizzaTypes}
                    selectedValue={type.toString()}
                    setSelectedValue={(value) => {
                        setType(+value as PizzaTypes);
                    }}
                />
                <div className="flex flex-wrap gap-5 my-5">
                    {ingredients.map((el) => (
                        <IngredientItem
                            key={el.id}
                            name={el.name}
                            price={el.price}
                            imgUrl={el.imgUrl}
                            onChecked={() => {
                                setSelectedIngredients(el.id.toString());
                            }}
                            checked={selectedIngredients.has(el.id.toString())}
                        />
                    ))}
                </div>
                <Button>{price} в корзине</Button>
            </div>
        </div>
    );
}