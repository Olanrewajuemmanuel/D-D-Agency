import Head from "next/head";

export default function Meta({ title, excerpt }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={excerpt} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="og:twitter" content={excerpt} />
      
    </Head>
  );
}
