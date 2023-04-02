import Image from "next/image";
import styles from "../styles/HotDeals.module.css";
import { useRouter } from "next/router";
import { deals_en } from '../public/locales/en/deals_en';
import { deals_ja } from '../public/locales/ja/deals_ja';


const HotDeals = ({}) => {

  const router = useRouter();
  const t = router.locale === 'en' ? deals_en : deals_ja;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{t.title}</div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
            <Image src="/img/hot_deal1.jpg" alt="" width="650" height="400" />
            <div className={styles.title}>{t.text1}</div>
            <div className={styles.desc}>{t.desc1}</div>  
        </div>   
        <div className={styles.container}>
            <Image src="/img/hot_deal2.jpg" alt="" width="650" height="400" />
            <div className={styles.title}>{t.text2}</div>
            <div className={styles.desc}>{t.desc2}</div>  
        </div>   
      </div>
    </div>
  );
};

export default HotDeals;
