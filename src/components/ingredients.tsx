"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ScrollArea, Title } from './ui';
import { FilterCheckbox } from './filter-checkbox';
import { Search } from './search';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    title: string;
    items: any[];
    limit: number;


}

export const Ingredients: React.FC<Props> = (props) => {

    const { className, title, items, limit } = props;
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const list = showAll ? items.filter
        (item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : items.slice(0, limit);

    return (
        <div className={cn("", className)}>
            <Title mb-3 size={'s'} text={title} />
            {
                showAll && <Search
                    className='mb-3'
                    value={searchValue}
                    placeholder={"Поиск"}
                    onChange={setSearchValue} />

            }
            <ScrollArea className='h-[150px]'>
                <ul>
                    {
                        list.map((item, index) => (
                            <li key={index}>
                                <FilterCheckbox text={item.text}
                                    value={item.value}
                                    onCheckedChange={item.onCheckedChange} />
                            </li>
                        ))
                    }
                </ul>
            </ScrollArea>
            {
                items.length > limit && (
                    <button onClick={() => setShowAll(!showAll)} className='text-primary font-bold'>
                        {
                            showAll ? "Скрыть" : "Показать всё"
                        }
                    </button>
                )
            }

        </div>
    );
}