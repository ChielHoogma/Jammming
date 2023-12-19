import React, { useState } from "react";
import styles from './Playlist.module.css';
import Tracklist from "../Tracklist/Tracklist";
import Button from "../Button/Button";

function Playlist(props){
    const playlist = props.playlist;
    const [title, setTitle] = useState("");
    const updateTitle = (event) => {
        setTitle(event.target.value);
    }
    const savePlayList = () => {
        props.savePlayList(title);
    }
    return (
        <div className={styles.Container}>
            <input type="text" className={styles.Input} placeholder="New playlist" onChange={updateTitle}/>
            <Tracklist trackButtonText="-" onButtonClick={props.onPlayListRemove} tracks={playlist}/>
            <Button text="Save to spotify" onClick={savePlayList}/>
        </div>
    );
}

export default Playlist;
