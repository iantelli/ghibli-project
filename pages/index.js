import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Studio Ghibli Films</title>
        <meta name="description" content="Studio Ghibli Films" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video src="/videoBg.mp4" autoPlay loop muted />
      <div className={`${styles.content} ${styles.title}`}>
        <h1>SGDB</h1>
      </div>
      <div className={`${styles.content} ${styles.description}`}>
        <Link href="/films">
          <a className={styles.btn}>
            Explore the Magical World of Studio Ghibli Films <br />→
          </a>
        </Link>
      </div>
    </div>
  );
}
