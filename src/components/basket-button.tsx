import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Basket } from './basket';

interface Props {
     className?: string;
}

export const BasketButton: React.FC<Props> = (props) => {
     const {className} = props;
     return (
        <Basket >

        <Button className={cn("gap-2 group", className)}>
        <span>520$</span>
        <span className="w-[1px] h-[20px] bg-white"></span>
        <span className="flex gap-2 relative">
          <span className=" flex items-center gap-2 group-hover:opacity-0 transition-all">
            <ShoppingCart/>3
          </span>
          <span>
                <ArrowRight className="w-5  absolute left-0 opacity-0 transition-all translate-x-[-50%] group-hover:opacity-100  group-hover:left-[50%]" />
          </span>
        </span>
      </Button>
      </Basket>

    );
}