import { Product, Variation, Ingredients } from '@prisma/client';
export type ProductRelation = Product & {
    ingredients: Ingredients[],
    variants: Variation[]
}