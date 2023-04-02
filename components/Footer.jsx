import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
           TOKYO PIZZA!! 
           <br /> A homemade brand pizza for your delicious and cheesy cravings!!
           <br /> We got all that you crave!!
           <br /> Give it a try, and be amazed!!

          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Tokyo, Oota-ku,
            <br /> Minamirokugo 2-35
            <br /> (+81) 7090762090
          </p>
          <p className={styles.text}>
            Tokyo, Kamata,
            <br /> Keihin Kamata Station
            <br /> (+81) 7090762090
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
