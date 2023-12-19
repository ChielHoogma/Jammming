import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import searchTracks from '../../Utils/SpotifyTrackRequest';
import postPlaylist from '../../Utils/PostPlaylist';
import SpotifyTokenPrompt from '../SpotifyTokenPrompt/SpotifyTokenPrompt'; 

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [showTokenPrompt, setShowTokenPrompt] = useState(false); 
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const checkAccessToken = () => {
      const tokenParam = window.location.hash.substring(1).split('&').find(param => param.startsWith('access_token'));
      const expiresInParam = window.location.hash.substring(1).split('&').find(param => param.startsWith('expires_in'));

      if (tokenParam && expiresInParam) {
        const token = tokenParam.split('=')[1];
        const expiresIn = expiresInParam.split('=')[1];

        setAccessToken(token);

        const timeout = setTimeout(() => {
          window.history.replaceState({}, document.title, window.location.pathname);
          window.location.reload();
        }, (expiresIn - 60) * 1000);

        return () => clearTimeout(timeout);
      } else {
        setShowTokenPrompt(true);
      }
    };

    checkAccessToken();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (track) => {
    if (!playlist.some(existingTrack => existingTrack.id === track.id)) {
      setPlaylist(prevArray => [...prevArray, track]);
    } else {
      alert("Track already in playlist");
    }
  };

  const removeFromPlaylist = (track) => {
    setPlaylist(playlist.filter(item => item !== track));
  };

  const setSearchResults = async (searchTerm) => {
    const tracks = await searchTracks(accessToken, searchTerm);
    console.log(tracks);
    setResults(tracks);
  };

  const savePlayList = (title) => {
    if(title == ""){
      alert("Please fill in a playlist title");
    }else if(playlist.length == 0){
      alert("Playlist can not be empty");
    }else{
      const trackUris = playlist.map(track => track.uri);
      postPlaylist(accessToken, title, trackUris);
    }
  };
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <h1 className={styles.Title}>Jamming!</h1>
      </header>
      <div className={styles.Content}>
        <Searchbar onSearch={setSearchResults} />
        <div className={styles.MusicContainer}>
          <div className={styles.SearchResults}>
            <SearchResults results={results} onPlaylistAdd={addToPlaylist} />
          </div>

          {windowWidth > 600 && (
            <div className={styles.Playlist}>
              <Playlist playlist={playlist} onPlayListRemove={removeFromPlaylist} savePlayList={savePlayList} />
            </div>
          )}
        </div>
      </div>
      {windowWidth <= 600 && (
          <div className={`${styles.Sidebar} ${isSidebarVisible ? styles.SidebarVisible : ''}`}>
            <div className={styles.SidebarToggle} onClick={toggleSidebar}>
              ☰
            </div>
            <div className={styles.SidebarPlayList}>
              <Playlist playlist={playlist} onPlayListRemove={removeFromPlaylist} savePlayList={savePlayList} />
            </div>
          </div>
        )}
      {showTokenPrompt && <SpotifyTokenPrompt isOpen={true} onClose={() => setShowTokenPrompt(false)} />}
    </div>
    
  );
}

export default App;
