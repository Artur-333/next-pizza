import React from 'react';
import { Logo } from './logo';
import { Search } from './search';
import { Container } from './ui/container';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <header className={className}>
            <Container className='flex items-center justify-between'>
            <Logo/>
            <Search/>
            </Container>
        </header>
    );
}