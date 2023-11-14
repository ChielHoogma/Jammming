import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";



function SearchResults(props){
    const results = props.results;
    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Results:</h2>
            <Tracklist trackButtonText="+" tracks={results}/>
        </div>
    );
}

export default SearchResults;
