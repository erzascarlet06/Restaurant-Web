import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { en } from '../public/locales/en/en';
import { ja } from '../public/locales/ja/ja';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const router = useRouter();
  const t = router.locale === 'en' ? en : ja;

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>{t.order}</div>
          <div className={styles.text}>0120-346-567</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/homepage" passHref>
            <li className={styles.listItem}>{t.homepage}</li>
          </Link>
          <Link href="/menu" passHref>
            <li className={styles.listItem}>{t.menu}</li>
          </Link>
          <Image src="/img/logo.png" alt="" width="160" height="69" />
          <Link href="/deals" passHref>
          <li className={styles.listItem}>{t.hotdeal}</li>
          </Link>
          <Link href="/contact" passHref>
          <li className={styles.listItem}>{t.contact}</li>
          </Link>
          
        </ul>
      </div>
      <div className={styles.list}>
        <div className={styles.listItem}>
        <Link href="/homepage" locale="en">
            <div>
            <Image src="/img/flag_en.png" alt="" width="30" height="20" />
            </div>
        </Link>
        </div>
        <div className={styles.listItem}>
        <Link href="/homepage" locale="ja">
          <div>
            <Image src="/img/flag_ja.png" alt="" width="30" height="20" />
          </div>
        </Link>
        </div>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
