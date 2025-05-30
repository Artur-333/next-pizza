/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Container } from "@/components/ui";
import { SortPopup, Categories } from "@/components";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  categories: any[];
}

export const TopBar: React.FC<Props> = (props) => {
  const { className  , categories} = props;
  return (
    <div className={cn("sticky top-0  py-3 z-50 bg-white shadow-2xs",className)}>
      <Container className="flex items-center justify-between">
        <Categories  items={categories}  />
        <SortPopup />
      </Container>
    </div>
  );
};
