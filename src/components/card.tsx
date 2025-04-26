/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plus, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button, Title } from './ui';

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
    const { className, title, ingredients, imgUrl,price } = props;
    return (
        <article className={className}>
            <div className='relative bg-orange-100 rounded-2xl p-5 mb-3'>
                <Image src={imgUrl} alt={''} width={210} height={210} className='mx-auto' />
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
                <Button className='text-primary' variant="secondary">
                    <Plus /> Добавить
                </Button>
            </div>
        </article>
    );
}