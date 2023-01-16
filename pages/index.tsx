import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>alexrs portfolio</title>
        <meta name="description" content="2023 portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container max-w-full h-screen">
        <section className="h-full" id="home">
          <div className="flex flex-col justify-center items-center h-full">
            <Image src="/underconstruction.png" alt="Página en construcción" width="400" height="138"></Image>
            <h4 className="select-none">Bajo construcción</h4>
          </div>
        </section>
      </main>
    </>
  );
}
