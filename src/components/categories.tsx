"use client"
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/categoria';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
    className?: string;
}
const categories = [
    { name: "Пицца" },
    { name: "Мясные" },
    { name: "Сладкие" },
    { name: "Вегетарианские" },
    { name: "С курицей" },
].map((obj, idx) => ({ ...obj, id: idx + 1 }));


export const Categories: React.FC<Props> = (props) => {
    const { className } = props;
    const category = useCategoryStore(state => state.category);
    return (
        <>
            <ul className={cn("flex items-center gap-4   bg-gray-100 rounded-2xl p-2", className)}>
                {categories.map((item =>
                    <li key={item.id}>
                        <Link className={cn('font-bold px-3  py-1 rounded:2xl', item.id === category  && "bg-white rounded-2xl  text-black")} href={`#${item.name}`} > {item.name}</Link>
                    </li>
                ))}
                <li className=''>
                    <button className='font-bold px-3  py-1 rounded:2xl flex items-center gap-2'>
                        Ещё
                        <ArrowDown size={16} />

                    </button>
                </li>
            </ul>

        </>
    );
}