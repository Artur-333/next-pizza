"use client";
import React from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import { Product } from "./product";
import { ProductRelation } from "@/@types/pizza";


interface Props {
  className?: string;
  product: ProductRelation;
}


export const Modal: React.FC<Props> = (props) => {
  const { className, product } = props;
  const router = useRouter();




  return (
    <Dialog open={!!product} onOpenChange={() => router.back()}>
      <DialogContent className={cn("flex lg:max-w-screen-xl justify-center", className)}>
        <DialogTitle className="absolute w-0 h-0 overflow-hidden" />
        <Product product={product} />
      </DialogContent>
    </Dialog>
  );
};
