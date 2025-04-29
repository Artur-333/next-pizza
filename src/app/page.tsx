import { Header } from "@/components/header";
import { TopBar } from "@/components/top-bar";
import { Container } from "@/components/ui";
import { Catalog, Filters } from "@/components";


export default function Home() {
  return (
    <>
      <Header className="mb-3" />
      <TopBar className="mb-5" />
      <Container className="flex gap-10 ">
        <Filters className="max-w-[200px]" />
        <div className="grid gap-10">

          <Catalog
            categoryId={1}
            title={"Пицца"} items={[{
              id: 1,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },
            {
              id: 2,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },
            {
              id: 3,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },
            {
              id: 4,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },
            {
              id: 5,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },
            {
              id: 6,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },]} />

          <Catalog
            categoryId={2}

            title={"Мясные"} items={[{
              id: 1,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },
            {
              id: 2,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },
            {
              id: 3,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },
            {
              id: 4,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },
            {
              id: 5,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },
            {
              id: 6,
              title: "Пицца с томатами",
              ingredients: "Моцарелла, томаты",
              items: [{ price: 500 }],
              imgUrl: "/image.png",
            },]} />
        </div>
      </Container>
    </>

  );
}