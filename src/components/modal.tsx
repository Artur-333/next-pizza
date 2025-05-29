"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { PizzaImage } from "./pizza-image";

interface Props {
  className?: string;
  product: Product;
}

export const Modal: React.FC<Props> = (props) => {
  const { className, product } = props;
  const router = useRouter();
  return (
      <Dialog open={!!product} onOpenChange={() => router.back()}>
        <DialogContent className={cn("flex lg:max-w-screen-xl",className)}>
        <PizzaImage imgUrl={product.imgUrl} size={30}/>
            
            <div>

          <DialogTrigger>{product.name}</DialogTrigger>
            </div>
        </DialogContent>
      </Dialog>
  );
};
