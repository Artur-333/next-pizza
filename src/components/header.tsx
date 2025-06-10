import React from "react";
import { BasketButton, Logo, SearchHeader } from "@/components";
import { User } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <header className={cn("py-2", className)}>
      <Container className="flex  gap-5 items-center justify-between">
        <Logo />
        <SearchHeader />
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <User />
            Войти
          </Button>
          <BasketButton />
        </div>
      </Container>
    </header>
  );
};
