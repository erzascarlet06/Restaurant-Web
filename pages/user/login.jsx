import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Login.module.css"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { login_en } from '../../public/locales/en/login_en';
import { login_ja } from '../../public/locales/ja/login_ja';


const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const t = router.locale === 'en' ? login_en : login_ja;

  const handleClick = async () => {

    try {
      await axios.post("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
        username,
        password,
      }),
    });
      router.push("/menu");
    } catch (err) {
      setError(true);
    }
  };

  const handleSignup = async () => {
    try {
      router.push("/user/register");
    } catch (err) {
      setError(true);
    }
  };

  return (
   
    <div className={styles.container}>
      
      <div className={styles.wrapper}>
        <div className={styles.title}>{t.login}</div>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Please enter all values in the field!</span>}
        <div className={styles.title}>{t.register}</div>
        <button onClick={handleSignup} className={styles.button}>
          Sign Up
        </button>
        <div className={styles.list}>
          <Link href="/user/login" locale="en">
              <div className={styles.listItem}>
              <Image src="/img/flag_en.png" alt="" width="30" height="20" />
              </div>
          </Link>
          <Link href="/user/login" locale="ja">
            <div className={styles.listItem}>
              <Image src="/img/flag_ja.png" alt="" width="30" height="20" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
