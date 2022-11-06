import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <title>Daniel Chadwick</title>
        <meta
          name={"description"}
          content={"danielchadwick.co.uk powered by Next and NestJS."}
        />
        <meta
          content={"width=device-width, initial-scale=0.8"}
          name={"viewport"}
        />
        <link rel={"icon"} href={"/favicon.ico"} />
        <link
          href={
            "https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          }
          rel={"stylesheet"}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
