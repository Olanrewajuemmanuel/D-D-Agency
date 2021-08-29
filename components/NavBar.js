import styles from "../styles/NavBar.module.css";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <p className={styles.logo}>
        <Link href="/">{`D&dAgency`}</Link>
      </p>
      <ul className={(styles.no_mobile)}>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/work">Our Work</Link>
        </li>
      </ul>
      <div className={styles.no_mobile}>
        <button className={styles.btn_nav}>Get a quote</button>
      </div>
      <div className={styles.menu}>
        <p className={styles.hamburger}></p>
        <p className={styles.hamburger}></p>
        <p className={styles.hamburger}></p>
      </div>
    </nav>
  );
}
