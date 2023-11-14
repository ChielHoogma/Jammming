import React from "react";
import styles from "./Track.module.css";

function Track(props){
    const track = props.track;
    return (
        <div className={styles.Track}>
            <h2 className={styles.Title}>{track.title}</h2>
            <div className={styles.TrackInfo}>
                <div className={styles.Artist}>{track.artist}</div>
                <div className={styles.Album}>{track.album}</div>
            </div>
        </div>
    );
}

export default Track;
