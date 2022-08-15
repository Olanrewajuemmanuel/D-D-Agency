import styles from "../styles/Work.module.css";
import Image from "next/image";
import One from "../assets/Rectangle 18.png";
import Two from "../assets/Rectangle 18.png";
import Layout from "../components/Layout";
import Meta from "../components/Meta";

export default function OurWork() {
  return (
    <Layout>
      <Meta
        title={`Our Work`}
        excerpt="Our Pojects. Our Pride."
      />
      <div className={styles.work}>
        <div className={styles.project_area}>
          <div className={styles.project_intro}>
            <h2>
              Our Projects. Our{" "}
              <span className={styles.span_curve}>Pride.</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              dignissim mus suspendisse accumsan amet. Dolor in elementum
              pellentesque vitae consequat orci. Vehicula et fames turpis nunc
              eu. Morbi adipiscing ultrices dictum aliquam.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nisl, tellus bibendum dis risus. Tortor mi quis eleifend commodo
              blandit. Malesuada ultricies eget viverra tempus lobortis. Vivamus
              ac dolor, nunc pellentesque integer.
            </p>
          </div>
          <Image src={One}></Image>
        </div>
        <div className={styles.top_rated}>
          <Image src={Two} className={styles.reverse}></Image>
          <div className={styles.details}>
            <p className={styles.pill}>Top-rated</p>
            <h2>Dribbble</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nisl, tellus bibendum dis risus. Tortor mi quis eleifend commodo
              blandit. Malesuada ultricies eget viverra tempus lobortis. Vivamus
              ac dolor, nunc pellentesque integer.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
