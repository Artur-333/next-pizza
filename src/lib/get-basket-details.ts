import { BasketDTO } from "@/@types/basket";
import { calcBasketPrice } from "./calc-basket-price";
import { calcBasketTotalAmount } from "./calc-basket-total-amount";
export const getBasketDetails = (data: BasketDTO) => {

    const items = data.products.map(el => ({
        id: el.id,
        name: el.variant.product.name,
        imgUrl: el.variant.product.imgUrl,
        price: calcBasketPrice(el),
        size: el.variant.size,
        type: el.variant.pizzaType,
        ingredients: el.ingredients.map((item) => ({ name: item.name, price: item.price })),
        count: el.quantity,

    }))
    const totalAmount = calcBasketTotalAmount(data)
    return {
        items,
        totalAmount
    }
}