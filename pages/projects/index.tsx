import styles from "../../styles/Home.module.css";
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
  const descriptionTocflLearning = intl.formatMessage({
    id: "page.projects.tocflLearning.description",
  });
  const stackTocflLearning = intl.formatMessage({
    id: "page.projects.tocflLearning.stack",
  });
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.titleProjects}>{title}</h1>

        <div className={styles.grid}>
          <a href="https://jmusic-discover.vercel.app/" className={styles.card}>
            <h2>J-Music Discover</h2>
            <p>{descriptionJmusicDiscover}</p>
            <p>--------------------------------</p>
            <p>{stackJmusicDiscover}</p>
          </a>

          <a href="https://tocfl-learning.vercel.app/" className={styles.card}>
            <h2>TOCFL Learning</h2>
            <p>{descriptionTocflLearning}</p>
            <p>--------------------------------</p>
            <p>{stackTocflLearning}</p>
          </a>
          
          <a
            href="https://music-artist-searcher.netlify.app/"
            className={styles.card}
          >
            <h2>Music Artist Searcher</h2>
            <p>{descriptionMusicArtistSearcher}</p>
            <p>--------------------------------</p>
            <p>{stackMusicArtistSearcher}</p>
          </a>
        </div>
      </main>
    </div>
  );
}
