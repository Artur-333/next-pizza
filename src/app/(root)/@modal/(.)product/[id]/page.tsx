import { Modal } from "@/components";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await prisma.product.findFirst({
    where: {
      id: +id,
    },

    
    include: {
      ingredients: true,
      variants: true,
    },
  });

  if (!product) {
    notFound();
  }
  return <Modal product={product} />;
}
