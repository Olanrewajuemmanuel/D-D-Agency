import styles from "../styles/Work.module.css";
import Image from "next/image";
import Link from "next/link";
import One from "../assets/Rectangle 18.png";
import Two from "../assets/Rectangle 15.png";

import Grid1 from "../assets/Rectangle 11.png";
import Grid2 from "../assets/Rectangle 13.png";
import Grid3 from "../assets/Rectangle 16.png";
import Grid4 from "../assets/Rectangle 12.png";
import Grid5 from "../assets/Rectangle 14.png";

import Layout from "../components/Layout";
import Meta from "../components/Meta";


export default function OurWork() {
  return (
    <Layout>
      <Meta title={`Our Work`} excerpt="Our Pojects. Our Pride." />
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
            <div className={styles.box}>
              <Image src={Grid1} alt='Project samples' />
            </div>
            <div className={styles.box}>
              <Image src={Grid2} alt='Project samples' />
            </div>
            <div className={styles.box}>
              <Image src={Grid3} alt='Project samples' />
            </div>
            <div className={styles.box}>
              <Image src={Grid4} alt='Project samples' />
            </div>
            <div className={styles.box}>
              <Image src={Grid5} alt='Project samples' />
            </div>

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
            <Link href="/work/facebook">
              <button>See details</button>
            </Link>
          </div>
          <Image src={One} alt=""></Image>
        </div>
        <div className={styles.top_rated}>
          <Image src={Two} alt=""></Image>
          <div className={styles.details}>
            <p className={styles.pill}>Top-rated</p>
            <h2>Dribbble</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nisl, tellus bibendum dis risus. Tortor mi quis eleifend commodo
              blandit. Malesuada ultricies eget viverra tempus lobortis. Vivamus
              ac dolor, nunc pellentesque integer.
            </p>
            <Link href="/work/dribble">
              <button>See details</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
