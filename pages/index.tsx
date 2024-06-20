import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useIntl } from "react-intl";
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const intl = useIntl();
  const isResponsive = useMediaQuery({ query: '(max-width: 600px)' })

  const responsiveTItle = intl.formatMessage({ id: "page.home.responsiveTitle" });
  const  title = intl.formatMessage({ id: "page.home.title" });
  const description = intl.formatMessage({
    id: "page.home.description",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted && (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{isResponsive ? responsiveTItle : title}</h1>
        <p className={styles.description}>{description}</p>
      </main>
    </div>
  );
}
