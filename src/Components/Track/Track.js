import React from "react";
import styles from "./Track.module.css";

function Track(props){
    const track = props.track;
    const onButtonClick = () =>{
        props.onButtonClick?.(track);
    }
    return (
        <div className={styles.Track}>
            <div className={styles.TrackInfo}>
                <div className={styles.TrackInfoBody}>
                    <h2 className={styles.Title}>{track.title}</h2>
                    <p className={styles.Artist}>{track.artist}</p>
                    <p className={styles.Album}>{track.album}</p>
                </div>
            </div>
            <button className={styles.ActionButton} onClick={onButtonClick}>{props.text}</button>
        </div>
    );
}

export default Track;
