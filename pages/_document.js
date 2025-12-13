import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="FARMSENSE is an AI-powered livestock intelligence platform that protects animals, supports farmers, and enables national early-warning systems."
        />
        <meta name="theme-color" content="#0b1f33" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}