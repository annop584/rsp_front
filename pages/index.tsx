import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
    </div>
  );
};

export default Home;
