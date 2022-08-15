import styles from "../styles/NavBar.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <p className={styles.logo}>
        <Link href="/">{`D&dAgency`}</Link>
      </p>
      <ul className={!isMenuOpen ? utilStyles.no_mobile : utilStyles.ul_mobile_show}>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/work">Our Work</Link>
        </li>
        <li>
          <button className={styles.btn_nav}>Get a quote</button>
        </li>
      </ul>

      <div
        className={styles.menu}
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
      >
        <p className={styles.hamburger}></p>
        <p className={styles.hamburger}></p>
        <p className={styles.hamburger}></p>
      </div>
    </nav>
  );
}
