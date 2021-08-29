import styles from "../styles/Work.module.css";
import NavBar from "../components/NavBar";
import Image from "next/image";
import One from "../assets/Rectangle 18.png";
import Two from "../assets/Rectangle 18.png";

export default function ourWork() {
  return (
    <div className={styles.work}>
      <NavBar />
      <div className={styles.project_area}>
        <div className={styles.project_intro}>
          <h2>
            Our Projects. Our <span className={styles.span_curve}>Pride.</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            dignissim mus suspendisse accumsan amet. Dolor in elementum
            pellentesque vitae consequat orci. Vehicula et fames turpis nunc eu.
            Morbi adipiscing ultrices dictum aliquam.
          </p>
        </div>
        <div className={styles.project_pics}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </div>
      <div className={styles.top_rated}>
        <div className={styles.details}>
          <p className={styles.pill}>Top-rated</p>
          <h2>Facebook</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl,
            tellus bibendum dis risus. Tortor mi quis eleifend commodo blandit.
            Malesuada ultricies eget viverra tempus lobortis. Vivamus ac dolor,
            nunc pellentesque integer.
          </p>
        </div>
        <Image src={One}></Image>
      </div>
      <div className={styles.top_rated}>
        <Image src={Two}  className={styles.reverse}></Image>
        <div className={styles.details}>
          <p className={styles.pill}>Top-rated</p>
          <h2>Dribbble</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl,
            tellus bibendum dis risus. Tortor mi quis eleifend commodo blandit.
            Malesuada ultricies eget viverra tempus lobortis. Vivamus ac dolor,
            nunc pellentesque integer.
          </p>
        </div>
      </div>
      <footer className={styles.footer}>
          <div>
            <ul className={styles.flex}>
              <li>.Twitter</li>
              <li>.dribbble</li>
              <li>.Instagram</li>
              <li>.LinkedIn</li>
            </ul>
          </div>
        </footer>
    </div>
  );
}
