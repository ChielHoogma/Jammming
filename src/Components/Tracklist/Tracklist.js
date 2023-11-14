import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";
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
},{
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
},{
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
},{
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
},{
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
},{
    title: "Title",
    artist: "Artist",
    album: "Album",
},{
    title: "Title",
    artist: "Artist",
    album: "Album",
}];

function Tracklist(props){
    return (
        <div className={styles.Tracklist}>
            {tracks.map((track) => (
                <Track track={track} text={props.trackButtonText}/>
            ))}
        </div>
    );
}

export default Tracklist;