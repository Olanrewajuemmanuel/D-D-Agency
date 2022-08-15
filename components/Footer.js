import styles from '../styles/Footer.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div>
          <ul className={utilStyles.flex}>
            <li><Link href="/">Twitter</Link></li>
            <li><Link href="/">Dribble</Link></li>
            <li><Link href="/">Instagram</Link></li>
            <li><Link href="/">LinkedIn</Link></li>
          </ul>
        </div>
      </footer>
    );
  }
  