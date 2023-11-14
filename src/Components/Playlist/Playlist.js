import React from "react";
import styles from './Playlist.module.css';
import Tracklist from "../Tracklist/Tracklist";
import Button from "../Button/Button";

const tracks = [{
    title: "Title",
    artist: "Artist",
    album: "Album",
},{
    title: "Title",
    artist: "Artist",
    album: "Album",
},{
    title: "Title",
    artist: "Artist",
    album: "Album",
},];

function Playlist(){
    return (
        <div className={styles.Container}>
            <input type="text" className={styles.Input} placeholder="New playlist"/>
            <Tracklist trackButtonText="-" tracks={tracks}/>
            <Button text="Save to spotify"/>
        </div>
    );
}

export default Playlist;
