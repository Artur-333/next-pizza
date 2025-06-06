import React from 'react';
import { cn } from '@/lib/utils';
import { PizzaImage } from './pizza-image';
import { PizzaVariants } from './pizza-variants';
import { pizzaTypes } from '@/constants/pizza';
import { IngredientItem } from './ingredient-item';
import { PizzaSizes, PizzaTypes } from '@/@types/pizza';
import { Ingredient, Variation } from '@prisma/client';
import { Button } from './ui';
import { usePizzaOptions } from '@/hooks/pizza-options';

interface Props {
    className?: string;
    imgUrl: string;
    price: number;
    ingredients: Ingredient[];
    variants: Variation[];
}

export const PizzaForm: React.FC<Props> = (props) => {

    const { className, variants, imgUrl, price, ingredients } = props;


    const {
        size,
        type,
        setSize,
        setType,
        selectedIngredients,
        setSelectedIngredients,
        filteredPizzaBySize } = usePizzaOptions(variants);

    return (
        <div className={cn("", className)}>
            <PizzaImage imgUrl={imgUrl} size={size} />
            <div>
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
                <div>
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