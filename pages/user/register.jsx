//import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Register.module.css";
import Link from "next/link";
import Image from "next/image";
import { register_en } from '../../public/locales/en/register_en';
import { register_ja } from '../../public/locales/ja/register_ja';
const Register = () => {

  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const t = router.locale === 'en' ? register_en : register_ja;

  const handleClick = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        name,
        address,
        username,
        password,
        }),
      });
      router.push("/user/login");
    } catch (err) {
      console.log(err)
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{t.title}</div>
        <input
          placeholder="name"
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="address"
          className={styles.input}
          onChange={(e) => setAddress(e.target.value)}
        />
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
        <div className={styles.list}>
        <Link href="/user/register" locale="en">
            <div className={styles.listItem}>
            <Image src="/img/flag_en.png" alt="" width="30" height="20" />
            </div>
        </Link>
        <Link href="/user/register" locale="ja">
          <div className={styles.listItem}>
            <Image src="/img/flag_ja.png" alt="" width="30" height="20" />
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Register;
