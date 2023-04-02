
import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home({ pizzaList}) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('./user/login');
    }, 1000)
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Tokyo Pizza</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />

    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};

