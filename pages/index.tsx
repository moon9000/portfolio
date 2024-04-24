import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MenuWrapper } from "../components/MenuWrapper";
import { useIntl } from "react-intl";

export default function Home() {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.title" });
  const description = intl.formatMessage({
    id: "page.home.description",
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </main>
    </div>
  );
}
