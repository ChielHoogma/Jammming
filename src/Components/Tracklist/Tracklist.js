import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist(props){
    const tracks = props.tracks ?? [];
    return (
        <div className={styles.Tracklist}>
            {tracks.map((track) => (
                <Track track={track} text={props.trackButtonText}/>
            ))}
        </div>
    );
}

export default Tracklist;