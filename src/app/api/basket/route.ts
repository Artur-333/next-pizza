import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("basketToken")?.value;

    if (!token) {
      return NextResponse.json(
        {
          message: "No token found",
        },
        { status: 404 }
      );
    }

    const userBasket = await prisma.cart.findFirst({
      where: {
        token,
      },
      include: {
        products: {
          include: {
            ingredients: true,
            variant: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });

    if (!userBasket) {
      return NextResponse.json(
        {
          message: " basket not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(userBasket);
  } catch (error) {
    console.log("BASKET_GET Server_Error", error);
    return NextResponse.json(
      {
        message: " basket error",
      },
      { status: 500 }
    );
  }
}
