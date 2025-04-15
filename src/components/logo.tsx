import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
     className?: string;
}

export const Logo: React.FC<Props> = (props) => {
     const {className} = props;
     return (
        <Link href="/" className={cn( " flex items-center  gap-2", className)}>
            <Image src="/logo.png" alt='logo' width={35} height={35} />
            <span className='flex flex-col'>
                <b>NEXT PIZZA</b>
                <strong>вкусней уже некуда</strong>
            </span>
        </Link>
    );
}