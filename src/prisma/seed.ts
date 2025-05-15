import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";

const createVariant = ({
    size,
    pizzaType,
    productId,
}: {
    size?: 30 | 40 | 50;
    pizzaType?: 1 | 2;
    productId: number;
}) => ({
    size,
    pizzaType,
    productId,
    price: Math.ceil(Math.random() * 400 + 100) * 10,
});
async function create() {


    await prisma.user.create({
        data: {
            fullName: "Shmavon",
            email: "Shmavon@gmail.com",
            password: "11111",
            verified: new Date(),
        },
    });

    await prisma.user.create({
        data: {
            fullName: "Patrisisa",
            email: "Patrisisa@gmail.com",
            password: "22222",
            verified: new Date(),
            role: "ADMIN",
        },
    });


    await prisma.category.createMany({
        data: categories,
    });
    await prisma.ingredient.createMany({
        data: ingredients,
    });
    await prisma.product.createMany({
        data: products,
    });

    const pizza1 = await prisma.product.create({
        data: {
            name: "Пепперони фреш ",
            imgUrl: "/dodo.avif",
            ingredients: { connect: ingredients.slice(0, 5) },
            categoryId: 1,
        },
    });
    const pizza2 = await prisma.product.create({
        data: {
            name: "Сырная  ",
            imgUrl: "/dodo1.avif",
            ingredients: { connect: ingredients.slice(5, 10) },
            categoryId: 1,
        },
    });
    const pizza3 = await prisma.product.create({
        data: {
            name: "Итальянская   ",
            imgUrl: "/dodo2.avif",
            ingredients: { connect: ingredients.slice(10, 20) },
            categoryId: 1,
        },
    });

    await prisma.variation.createMany({
        data: [
            createVariant({ size: 30, pizzaType: 1, productId: pizza1.id }),
            createVariant({ size: 40, pizzaType: 2, productId: pizza1.id }),
            createVariant({ size: 50, pizzaType: 1, productId: pizza1.id }),

            createVariant({ size: 30, pizzaType: 1, productId: pizza2.id }),
            createVariant({ size: 40, pizzaType: 2, productId: pizza2.id }),
            createVariant({ size: 50, pizzaType: 1, productId: pizza2.id }),

            createVariant({ size: 30, pizzaType: 1, productId: pizza3.id }),
            createVariant({ size: 40, pizzaType: 2, productId: pizza3.id }),
            createVariant({ size: 50, pizzaType: 1, productId: pizza3.id }),

            createVariant({ productId: 1 }),
            createVariant({ productId: 2 }),
            createVariant({ productId: 3 }),
            createVariant({ productId: 4 }),
            createVariant({ productId: 5 }),
            createVariant({ productId: 6 }),
            createVariant({ productId: 7 }),
            createVariant({ productId: 8 }),
            createVariant({ productId: 9 }),
            createVariant({ productId: 10 }),
            createVariant({ productId: 11 }),
            createVariant({ productId: 12 }),
            createVariant({ productId: 13 }),
            createVariant({ productId: 14 }),
            createVariant({ productId: 15 }),
        ],
    });
}
async function reset() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;

    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Variation" RESTART IDENTITY CASCADE`;
}
async function main() {
    try {
        await reset();
        await create();
    } catch (error) {
        console.log(error);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.log(error);
        await prisma.$disconnect();
        process.exit(1);
    });
