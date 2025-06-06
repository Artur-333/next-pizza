import { prisma } from "@/prisma/prisma-client";
import { TopBar } from "@/components/top-bar";
import { Container } from "@/components/ui";
import { Catalog, Filters } from "@/components";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          variants: true,
        },
      },
    },
  });

  return (
    <>
      <TopBar
        categories={categories.filter((el) => el.products.length > 0)}
        className="mb-5"
      />
      <Container className="flex gap-10 ">
        <Filters className="max-w-[200px]" />
        <div className="grid gap-10">
          {categories.map(
            (el) =>
              el.products.length > 0 && (
                <Catalog
                  key={el.id}
                  categoryId={el.id}
                  title={el.name}
                  items={el.products}
                />
              )
          )}
        </div>
      </Container>
    </>
  );
}
