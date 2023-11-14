import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const tracks = [{
    id: "1",
    title: "Title",
    artist: "Artist",
    album: "Album",
},{
  id: "2",
    title: "Title",
    artist: "Artist",
    album: "Album",
},]
  const [results, setResults] = useState(tracks);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (track) =>{
  if (!playlist.some(existingTrack => existingTrack.id === track.id)) {
    setPlaylist(prevArray => [...prevArray, track]);
  } else {
    alert("Track already in playlist");
    //TODO: Propper alert message
  }
  }
  const removeFromPlaylist = (track) =>{
    setPlaylist(playlist.filter(item => item !== track))
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <h1 className={styles.Title}>Jamming!</h1>
      </header>
      <div className={styles.Content}>
        <Searchbar/>
        <div className={styles.MusicContainer}>
          <div className={styles.SearchResults}>
            <SearchResults results={results} onPlaylistAdd={addToPlaylist}/>
          </div>
          <div className={styles.Playlist}>
            <Playlist playlist={playlist} onPlayListRemove={removeFromPlaylist}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
