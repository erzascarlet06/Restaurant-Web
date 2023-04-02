import styles from "../styles/Deals.module.css";
import HotDeals from "../components/HotDeals";

export default function Deals({ }) {

  return (
    <div className={styles.container}>
        <HotDeals />
    </div>
  );
};


