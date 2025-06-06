"use client";
import React from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "./ui";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { PizzaImage } from "./pizza-image";
import { PizzaVariants } from "./pizza-variants";
import { PizzaSizes, PizzaTypes, ProductRelation } from "@/@types/pizza";
import { IngredientItem } from "./ingredient-item";
import { pizzaSizes, pizzaTypes } from "@/constants/pizza";
import { calcPizzaPrice } from "@/lib/calc-pizza-price";
import { usePizzaOptions } from "@/hooks/pizza-options";

interface Props {
  className?: string;
  product: ProductRelation;
}


export const Modal: React.FC<Props> = (props) => {
  const { className, product } = props;
  const router = useRouter();

  const { size, type, setSize, setType, selectedIngredients, setSelectedIngredients, filteredPizzaBySize } = usePizzaOptions(product.variants)

  const totalPrice = calcPizzaPrice(size, type, product.variants, product.ingredients, selectedIngredients)
  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogContent className={cn("flex lg:max-w-screen-xl", className)}>
       
        <div className="flex-1 flex-col gap-3">
          <DialogTitle>{product.name}</DialogTitle>
        
        </div>
      </DialogContent>
    </Dialog>
  );
};
