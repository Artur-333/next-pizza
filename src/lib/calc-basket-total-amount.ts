import { calcBasketPrice } from "./calc-basket-price";
import { BasketDTO } from "@/@types/basket";
export const calcBasketTotalAmount = (basket: BasketDTO) => {
  return basket.products.reduce((acc, el) => acc + calcBasketPrice(el), 0);
};
