import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Title } from "../components/commons/titles";
import { Section } from "../components/commons/sections";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ParaSpace</title>
        <meta
          name="description"
          content="Liquidity Protocol for NFT and ERC20. Unlock Universal Liquidity for Everyone"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <div>asd</div>
      </Section>
      <main className={styles.main}>
        <p>Unlock Universal Liquidity for Everyone</p>
        <Title title="Liquidity Protocol for NFT and ERC20" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ParaSpace @2022
        </a>
      </footer>
    </div>
  );
};

export default Home;
