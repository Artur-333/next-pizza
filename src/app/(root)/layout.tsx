import { Header } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "вкусней уже некуда",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Header className="mb-3" />

      <main>{children}</main>
      {modal}
    </>
  );
}
