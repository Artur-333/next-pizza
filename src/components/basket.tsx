"use client";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
} from "./ui/sheet";
import { useBasket } from "@/hooks/basket";
import { BasketCart } from "./basket-cart";
import { Button } from "./ui";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getBasketCardDetails } from "@/lib/get-basket-card-details";
import { PizzaSizes, PizzaTypes } from "@/@types/pizza";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Basket: React.FC<Props> = (props) => {
  const { className, children } = props;
  const { items, totalAmount } = useBasket();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className={cn("bg-[#F4F1EE]", className)}>
        <SheetHeader>
          <SheetTitle>в карзине 3 товаров: </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-5 overflow-auto h-full">
          {items.map((el) => (
            <BasketCart
              key={el.id}
              imgUrl={el.imgUrl}
              details={getBasketCardDetails(
                el.size as PizzaSizes,
                el.type as PizzaTypes,
                el.ingredients
              )}
              name={el.name}
              price={el.price}
              updateCount={() => {}}
              removeProduct={() => {}}
              count={el.count}
            />
          ))}
        </ul>

        <SheetFooter className="p-3 bg-white flex flex-col gap-5">
          <div className="flex items-end gap-1">
            <span className="font-medium">Итого:</span>
            <span className="flex-1 border-b-1 border-dashed border-gray-400"></span>
            <span className="font-bold">{totalAmount} ₽</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="font-medium">Налог 5%:</span>
            <span className="flex-1 border-b-1 border-dashed border-gray-400"></span>
            <span className="font-bold">
              {(totalAmount * 0.05).toFixed(0)} ₽
            </span>
          </div>
          <Button className="flex items-center gap-3">
            Оформить заказ <ArrowRight />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
