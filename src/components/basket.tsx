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
import { Button } from "./ui";
import { useBasket } from "@/hooks/basket";
import { BasketCart } from "./basket-cart";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Basket: React.FC<Props> = (props) => {
  const { className, children } = props;
  const { items, totalAmount, isLoading, error } = useBasket();
  console.log(items);
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {" "}
          <SheetTitle>в карзине 3 товаров: </SheetTitle>
        </SheetHeader>
        <ul>
          {items.map((el) => (
            <BasketCart
              key={el.id}
              imgUrl={el.imgUrl}
              details={""}
              name={el.name}
              price={el.price}
              updateCount={() => {}}
              removeProduct={() => {}}
              count={el.count}
            />
          ))}
        </ul>

        <SheetFooter> </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
