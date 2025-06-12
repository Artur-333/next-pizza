import React from 'react';
import { cn } from '@/lib/utils';
import { Trash2Icon } from 'lucide-react';
import { CountButton } from './count-button';

interface Props {
     className?: string;
     imgUrl: string;
     details: string;
     name: string;
     price: number;
     updateCount: () => void;
     removeProduct: () => void;
     count: number;
}

export const BasketCart: React.FC<Props> = (props) => {
     const {className, imgUrl, name, details, price, updateCount, removeProduct, count} = props;
     return (
        <div className={cn("",className)}>
            <img src={imgUrl} alt={name} />
           <div>
            <span>{name}</span>
            <p>{details}</p>
            <hr />
            <div>
        <CountButton count={count} onClickUpdate={updateCount}/>
        <div>
                <span>{price}</span>
                <button onClick={removeProduct}><Trash2Icon/></button>
            </div>
           </div>
         
            
        </div>
        </div>
    );
}