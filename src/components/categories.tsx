import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
    className?: string;
}
const categories = ["Все", "Мясные", "Сладкие", "Вегетарианские", "С курицей"]


export const Categories: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <>
            <ul className={cn("flex items-center gap-4   bg-gray-100 rounded-2xl p-2", className)}>
                {categories.map((item =>
                    <li key={item}>
                        <Link className={cn('font-bold px-3  py-1 rounded:2xl', item === "Все" && "bg-white rounded-2xl  text-black")} href={`#${item}`} key={item}> {item}</Link>
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