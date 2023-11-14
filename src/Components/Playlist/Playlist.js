import React from "react";
import styles from './Playlist.module.css';
import Tracklist from "../Tracklist/Tracklist";
import Button from "../Button/Button";

function Playlist(props){
    const playlist = props.playlist;
    return (
        <div className={styles.Container}>
            <input type="text" className={styles.Input} placeholder="New playlist"/>
            <Tracklist trackButtonText="-" tracks={playlist}/>
            <Button text="Save to spotify"/>
        </div>
    );
}

export default Playlist;
