import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { MenuWrapper } from "../../components/MenuWrapper";
import { useIntl } from "react-intl";

export default function Projects() {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.projects.title" });
  const descriptionMusicArtistSearcher = intl.formatMessage({
    id: "page.projects.musicartistsearcher.description",
  });
  const stackMusicArtistSearcher = intl.formatMessage({
    id: "page.projects.musicartistsearcher.stack",
  });
  const descriptionJmusicDiscover = intl.formatMessage({
    id: "page.projects.jmusicDiscover.description",
  });
  const stackJmusicDiscover = intl.formatMessage({
    id: "page.projects.jmusicDiscover.stack",
  });
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.grid}>
          <a
            href="https://music-artist-searcher.netlify.app/"
            className={styles.card}
          >
            <h2>Music Artist Searcher</h2>
            <p>{descriptionMusicArtistSearcher}</p>
            <p>{stackMusicArtistSearcher}</p>
          </a>

          <a href="https://jmusic-discover.vercel.app/" className={styles.card}>
            <h2>J-Music Discover</h2>
            <p>{descriptionJmusicDiscover}</p>
            <p>{stackJmusicDiscover}</p>
          </a>

          <a href="/" className={styles.card}>
            <h2>Coming soon...</h2>
            <p></p>
          </a>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Coming soon...</h2>
            <p></p>
          </a>
        </div>
      </main>
    </div>
  );
}
