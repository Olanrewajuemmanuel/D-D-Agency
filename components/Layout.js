import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
        rel="stylesheet"
      />
      </Head>
      <NavBar />
      <div style={{ flexGrow: 1 }}>{children}</div>
      <Footer />
    </div>
  );
}
