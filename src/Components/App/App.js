import React from 'react';
import styles from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <h1 className={styles.Title}>Jamming!</h1>
      </header>
      <div className={styles.Content}>
        <Searchbar/>
        <div className={styles.MusicContainer}>
          <div className={styles.SearchResults}>
            <SearchResults/>
          </div>
          <div className={styles.Playlist}>
            <Playlist/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
