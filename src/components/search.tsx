import { SearchIcon } from 'lucide-react';
import React from 'react';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
}

export const Search: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <label className={cn("flex items-center gap-1 bg-gray-100 rounded-2xl px-2" , className)}>
            <SearchIcon size={16} className='text-gray-400'  />
            <Input className='border-0' placeholder='Поиск пиццы' />
        </label>
    );
}