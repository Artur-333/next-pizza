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
        <label className={cn("flex items-center gap-2 bg-gray-100 rounded-2xl " , className)}>
            <SearchIcon size={16} />
            <Input placeholder='Поиск пиццы' />
        </label>
    );
}