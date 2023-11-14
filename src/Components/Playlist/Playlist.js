import React from "react";
import styles from './Playlist.module.css';
import Tracklist from "../Tracklist/Tracklist";
function Playlist(){
    return (
        <div className={styles.Container}>
            <Tracklist/>
        </div>
    );
}

export default Playlist;
