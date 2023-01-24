import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";
import UnderConstruction from "@/components/underconstruction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="container max-w-full h-screen">
        <section className="h-full" id="home">
          <UnderConstruction/>
        </section>
      </main>
    </>
  );
}
