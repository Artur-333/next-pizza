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

          <Catalog title={"Pizza"} items={[{
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

          <Catalog title={"napitki"} items={[{
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