import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";
import UnderConstruction from "@/components/underconstruction";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>alexrs portfolio</title>
        <meta name="description" content="2023 portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-full h-full flex flex-col justify-center items-center m-0">
        <Navbar />
        <Hero />
        <Projects />
        {/*<Skills />*/}
        <UnderConstruction />
      </main>
    </>
  );
}
