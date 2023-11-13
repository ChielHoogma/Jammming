import React from 'react';
import styles from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <h1 className={styles.Title}>Jamming!</h1>
      </header>
      <div className={styles.Content}>
        <Searchbar/>
      </div>
    </div>
  );
}

export default App;
