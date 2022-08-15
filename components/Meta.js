import Head from "next/head";

export default function Meta({ title, excerpt }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={excerpt} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="og:twitter" content={excerpt} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
