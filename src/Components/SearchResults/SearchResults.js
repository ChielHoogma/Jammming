import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

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

function SearchResults(){
    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Results:</h2>
            <Tracklist trackButtonText="+" tracks={tracks}/>
        </div>
    );
}

export default SearchResults;
