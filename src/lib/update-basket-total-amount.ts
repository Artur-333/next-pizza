import { prisma } from "@/prisma/prisma-client"
import { calcBasketTotalAmount } from "./calc-basket-total-amount"

export const updateBasketTotalAmount = async (token: string) => {
    const userBasket = await prisma.cart.findFirst({
        where: {
            token
        },
        include: {
            products: {
                include: {
                    ingredients: true,
                    variant: {
                        include: {
                            product: {
                            },

                        },
                    },
                },
            },
        }
    })

    if (!userBasket) {
        return;
    }

    const totalAmount = calcBasketTotalAmount(userBasket);

    return await prisma.cart.update({
        where: {
            id: userBasket.id,
        },
        data: {
            totalAmount,
        },
    });
};
