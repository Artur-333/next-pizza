import React from 'react';
import { cn } from '@/lib/utils';
import { Button, Title } from './ui';

interface Props {
     className?: string;
     imgUrl: string;
     name: string;
     price: number;

}

export const ProductForm: React.FC<Props> = (props) => {
     const {className, imgUrl, name, price} = props;
     return (
        <div className={cn("flex gap-10",className)}>
            <img src={imgUrl} alt="" />
            <div className='flex flex-col justify-around'>
                <Title size={"m"} text={name}/>
                <Button>в корзину {price}</Button>
            </div>
        </div>
    );
}