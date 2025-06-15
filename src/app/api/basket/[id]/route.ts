import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import { updateBasketTotalAmount } from "@/lib/update-basket-total-amount";

export async function PATCH(req:NextRequest,{params}:{ params :{id: string}})
 {
    try {
        
  
const token = req.cookies.get('basketToken')?.value;
const id = Number(params.id);
const data = (await req.json() ) as {quantity:number}


if (!token) {
    return NextResponse.json(
      {
        message: " token not found",
      },
      { status: 404 }
    );
  }
  

    const findBasketCart = await prisma.cartProduct.findFirst({
        where:{
            id,
         
            }
        
    })
        if (!findBasketCart) {
            return NextResponse.json(
                {
                  message: "basket  not found",
                },
                { status: 404 }
              );
            }

            await prisma.cartProduct.update({
                where:{
                    id
                },
                data:{
                    quantity:data.quantity
                }
            })

    const updatedBasket = await updateBasketTotalAmount(token)

    return NextResponse.json(updatedBasket)
} catch (error) {
    console.log("basket patch server-error",error);
    return NextResponse.json(
        {
            message: "basket error",
        },
        { status: 500 }
    );
}
            
}