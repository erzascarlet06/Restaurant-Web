import styles from "../styles/Contact.module.css";
import { useRouter } from "next/router";
import { contact_en } from '../public/locales/en/contact_en';
import { contact_ja } from '../public/locales/ja/contact_ja';

const Contact = () => {

  const router = useRouter();
  const t = router.locale === 'en' ? contact_en : contact_ja;

    return (
        <div className={styles.container}>
          <div className={styles.title}>{t.title}</div> 
          <div className={styles.title}>{t.text1}</div>
          <div className={styles.desc}>{t.desc1}</div>  
         
          <div className={styles.title}>{t.text2}</div>
          <div className={styles.desc}>{t.desc2}</div>
          <div className={styles.desc}>{t.desc3}</div>  
      </div>
    );
  };
  
  export default Contact;
  