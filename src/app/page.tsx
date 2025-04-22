import { Header } from "@/components/header";
import { TopBar } from "@/components/top-bar";
import { Container } from "@/components/ui";
import {Filters} from "@/components";

export default function Home() {
  return (
    <>
      <Header className="mb-3" />
      <TopBar />
      <Container>

    <Filters className="max-w-[200px]" />
      </Container>
    </>

  );
}