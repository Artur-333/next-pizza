"use client";
import React from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { PizzaImage } from "./pizza-image";
import { PizzaVariants } from "./pizza-variants";
import { IngredientItem } from "./ingredient-item";
import { ProductRelation } from "@/@types/pizza";
import { useSet } from "react-use";

interface Props {
  className?: string;
  product: ProductRelation;
}

export const Modal: React.FC<Props> = (props) => {
  const { className, product } = props;
  const router = useRouter();
  console.log(product);
  

  const [selectedIngredients, {toggle:setSelectedIngredients}]= useSet(new Set<string>([])); 

  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogContent className={cn("flex lg:max-w-screen-xl", className)}>
        <PizzaImage imgUrl={product.imgUrl} size={30} />

        <div className="flex-1 gap-2 flex flex-col bg-gray-50">
          <DialogTitle>{product.name}</DialogTitle>
          <PizzaVariants
            variants={[
              {
                name: "маленькая",
                value: "30",
              },
              {
                name: "средняя",
                value: "40",
              },
              {
                name: "большая",
                value: "50",
              },
            ]}
            selectedValue={"30"}
            setSelectedValue={() => {}}
          />
          <PizzaVariants
            variants={[
              {
                name: "тонкая",
                value: "1",
              },
              {
                name: "традиционная",
                value: "2",
              },
            ]}
            selectedValue={"1"}
            setSelectedValue={() => {}}
          />
          <div className="flex flex-wrap gap-3 p-3">
            {product.ingredients.map((el) => (
              <IngredientItem

                key={el.id}
                name={el.name}
                price={el.price}
                imgUrl={el.imgUrl}
                onChecked={() => {setSelectedIngredients(el.id.toString())}}
                checked={selectedIngredients.has(el.id.toString())}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
