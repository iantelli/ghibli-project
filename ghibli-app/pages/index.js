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

      <main className={styles.main}>
        <h1 className={styles.title}>Studio Ghibli Films</h1>
        <Link href="/films">
          <h2 className="text-3xl font-bold underline">Films</h2>
        </Link>
      </main>
    </div>
  );
}
