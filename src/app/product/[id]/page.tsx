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
  });

  if (!product) {
    notFound();
  }

  return <h1>{product.name}</h1>;
}
