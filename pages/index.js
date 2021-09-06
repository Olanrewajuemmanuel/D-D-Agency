import Head from "next/head";
import Layout from "../components/Layout";
import Body from "../components/Body";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`D&dAgency`}</title>
        <meta
          name="description"
          content="An agency you can trust, UI/UX design, Web and App development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:twitter" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Body />
      </Layout>
    </div>
  );
}
