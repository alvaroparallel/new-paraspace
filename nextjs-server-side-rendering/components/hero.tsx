import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Hero = () => {
  return (
    <header>
      <span className={styles.logo}>
        <Image src="/logo.svg" alt="Para.space" width={72} height={16} />
      </span>
    </header>
  );
};
