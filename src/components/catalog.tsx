/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './ui';
import { Card } from './card';

interface Props {
    className?: string;
    title: string;
    items: any[];

}

export const Catalog: React.FC<Props> = (props) => {
    const { className, title, items } = props;
    return (
        <div className={cn("", className)}>
            <Title className='mb-5' size={'l'} text={title} />
            <ul className='grid grid-cols-3 gap-5'>
                {
                    items.map((item) => (
                        <li key={item.id}>

                            <Card {...item} price={item.items[0].price} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}