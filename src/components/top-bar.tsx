import React from 'react';
import { Container } from './ui/container';
import { Categories } from './categories';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowUpDown } from 'lucide-react';

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <div className={className}>
            <Container className='flex items-center justify-between'>
                <Categories />
                <Select  defaultValue='popular'>
                    <SelectTrigger className='flex items-center gap-2 '>
                        <ArrowUpDown size={16} />
                        <span className='text-black font-bold'>Сортировка:</span>
                        <span className='text-primary font-bold'>
                            <SelectValue />
                        </span>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="popular">
                            рейтингу
                        </SelectItem>
                        <SelectItem value="price">
                            ցենա
                        </SelectItem>
                    </SelectContent>
                </Select>
            </Container>

        </div>
    );
}