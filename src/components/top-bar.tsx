import React from "react";
import { Container } from "@/components/ui";
import { SortPopup, Categories } from "@/components";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
