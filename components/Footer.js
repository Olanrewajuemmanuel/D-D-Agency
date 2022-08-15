import styles from '../styles/Footer.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div>
          <ul className={utilStyles.flex}>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Dribble</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">LinkedIn</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  