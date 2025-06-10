import { Product } from "@/components";
import { Container } from "@/components/ui";
import { prisma } from "@/prisma/prisma-client";

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
  
  return <Container><Product product={product} /></Container>
}
