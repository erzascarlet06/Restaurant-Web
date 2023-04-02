import styles from "../styles/Menu.module.css";
import axios from "axios";

import PizzaList from "../components/PizzaList";

export default function Menu({ pizzaList }) {

  return (
    <div className={styles.container}>
        <PizzaList pizzaList={pizzaList} />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  
    const res = await axios.get("http://localhost:3000/api/products");
    return {
      props: {
        pizzaList: res.data,
      },
    };
  };
