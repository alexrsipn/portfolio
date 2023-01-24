import Favicon from "@/components/favicon";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>alexrs portfolio</title>
        <meta name="description" content="2023 portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
