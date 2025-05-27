/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus, SlidersHorizontal } from 'lucide-react';
import React from 'react';
import { Button, Title } from './ui';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    id?: number;
    price: number;
    imgUrl: string;
    items: any[]
    title: string;
    ingredients: string;

}

export const Card: React.FC<Props> = (props) => {
    const { className, title, ingredients, imgUrl,price,id } = props;
    return (
        <article className={cn("relative",className)}>
            <Link className='absolute inset-0 z-1' href={`/product/${id}`}/>
            <div className='relative bg-orange-100 rounded-2xl p-5 mb-3'>
                <img src={imgUrl} alt={''} width={210} height={210} className='mx-auto' />
                <button className='absolute top-2 right-2 cursor-pointer'>
                    <SlidersHorizontal className='text-primary' />
                </button>
            </div>
            <Title className='mb-3' size={'s'} text={title} />
            <p className='text-gray-400 max-w-[285px] mb-3'>{ingredients}</p>
            <div className='gap-2 flex items-center justify-between'>
                <span className='flex gap-2'>
                    от
                    <span className='font-bold '>
                        {price} ₽
                    </span>
                </span>
                <Button className='text-primary z-1' variant="secondary">
                    <Plus /> Добавить
                </Button>
            </div>
        </article>
    );
}