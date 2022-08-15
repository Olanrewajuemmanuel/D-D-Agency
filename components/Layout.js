import Footer from "./footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
