import Image from "next/image";
import styles from "../../styles/Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageDiv}>
        <Image
          className={styles.img}
          alt="photo of the author"
          src="/me4.jpg" // automatically points at public root. so no need to add /public
          width={300}
          height={285}
        />
      </div>
      <h1>Hello, World! I am Alvin Acosta.</h1>
      <h3>I blog about web development, and tech in general.</h3>
    </section>
  );
}

export default Hero;
