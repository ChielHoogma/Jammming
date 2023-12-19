import React from 'react';
import styles from './SpotifyAuthButton.module.css';

const SpotifyAuthButton = () => {
  const handleLogin = () => {
    const clientId = '225717e0adfb489c878523bf4307668d';
    const redirectUri = 'http://localhost:3000';
    const scope = 'playlist-read-collaborative playlist-read-private playlist-modify-public playlist-modify-private user-library-read user-read-private user-read-email';

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scope)}&response_type=token&show_dialog=true`;

    window.location.href = authUrl;
  };

  return (
    <button className={styles.Button} onClick={handleLogin}>Connect with Spotify</button>
  );
};

export default SpotifyAuthButton;