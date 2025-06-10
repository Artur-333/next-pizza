import React from 'react';
import { ProductForm } from './product-form';
import { PizzaForm } from './pizza-form';
import { ProductRelation } from '@/@types/pizza';

interface Props {
    product: ProductRelation
}

export const Product: React.FC<Props> = (props) => {
    const { product } = props;
    const isPizza = product.variants[0].pizzaType

    if (isPizza) {
        return <PizzaForm
            name={product.name}
            imgUrl={product.imgUrl}
      
            ingredients={product.ingredients}
            variants={product.variants} />
    }

    return (
        <ProductForm imgUrl={product.imgUrl}
            name={product.name}
            price={product.variants[0].price} />
    );
}