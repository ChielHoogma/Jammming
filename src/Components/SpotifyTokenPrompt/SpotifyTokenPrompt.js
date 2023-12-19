import React from 'react';
import styles from './SpotifyTokenPrompt.module.css';
import SpotifyAuthButton from '../SpotifyAuthButton/SpotifyAuthButton';

const SpotifyTokenPrompt = ({ isOpen }) => {
  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
      <div className={styles.modalContent}>
        <p>To use this website please connect with spotify</p>
        <SpotifyAuthButton/>
      </div>
    </div>
  );
};

export default SpotifyTokenPrompt;
