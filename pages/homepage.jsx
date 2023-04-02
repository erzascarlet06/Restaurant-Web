
import Head from "next/head";
import Featured from "../components/Featured";
import HotDeals from "../components/HotDeals";
import styles from "../styles/Home.module.css";

export default function Home({}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Tokyo Pizza</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <HotDeals/>
    </div>
  );
}



