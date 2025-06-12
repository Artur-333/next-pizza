import { Cart, CartProduct, Variation, Ingredient, Product } from "@prisma/client";
export type BasketCartDTO = CartProduct & {
    variant: Variation & {
        product: Product
    },
    ingredients: Ingredient[]   
}
export type BasketDTO = Cart & {products: BasketCartDTO[]}