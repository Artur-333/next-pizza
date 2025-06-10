import React from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTitle, SheetHeader, SheetFooter, SheetTrigger } from './ui/sheet';
import { Button } from './ui';

interface Props {
     className?: string;
     children: React.ReactNode;
}

export const Basket: React.FC<Props> = (props) => {
     const {className, children} = props;
     return (
       
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent>

                  <SheetHeader>в карзине 3 товаров: </SheetHeader>
                   
                    <SheetFooter>   </SheetFooter>
                 
                </SheetContent>
            </Sheet>
        
    );
}