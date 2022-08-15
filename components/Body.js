import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Body.module.css";
import Carousel from "./Carousel";
import BrandImg from "../assets/business-3d.png";
import vectorSearch from "../assets/Vector.png";
import phone from "../assets/phone-call.png";
import uiElement from "../assets/Group 2.svg";
export default function Body() {
  return (
    <div className={styles.body}>
      {/* Brand area start */}
      <div className={styles.brand_area}>
        <div>
          <p className={styles.award}>Award Winning agency</p>
          <h1>
            We help your business achieve its primary aim of
            <span className={styles.span_curve}>‘making money’</span>
          </h1>
          <Link href="/work">
            <button className={styles.cta_hero}>
              <Image src={vectorSearch} alt="Search"></Image>
              <p> Our work</p>
            </button>
          </Link>
        </div>
        <Image src={BrandImg} width="381" height="333" alt="Hero image"></Image>
      </div>
      {/* Brand area end */}

      {/**Testimonial & mission area start */}
      <div className={styles.copy2}>
        <div className={styles.mission}>
          <h2>Our mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit
            lectus felis a sed lorem mattis tincidunt posuere morbi. Arcu id
            risus pharetra vel. Aliquam sed quis rutrum sagittis. Sed maecenas
            potenti hendrerit gravida.
          </p>
          {/* Get a quote btn */}
          <Link href="/">
            <button className={styles.cta_hero}>
              <Image
                src={phone}
                className={styles.vector}
                width="50"
                height="50"
                alt=""
              ></Image>
              <p>Get a quote</p>
            </button>
          </Link>
          {/*  btn end */}
        </div>
        <div className={styles.testimonials}>
          <Carousel />
        </div>
      </div>
      {/**Testimonial & mission area end */}

      {/**Contact area start */}
      <div className={styles.contact_area}>
        <div className={styles.flex}>
          <div className={styles.copy3}>
            <h1>Let’s talk.</h1>
            <div>
              <Image src={uiElement} width="150" height="150" alt=""></Image>
            </div>
          </div>
          <div className={styles.contact_form}>
            <form action="/" className={styles.form}>
              <label htmlFor="name">Name:</label>
              <input type="text" name="email" />
              <label htmlFor="email">Email:</label>
              <input type="email" name="name" />
              <label htmlFor="services">What services may we render?:</label>
              <select name="services">
                <option value="default" disabled>
                  option
                </option>
              </select>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/**Contact area end */}
    </div>
  );
}
