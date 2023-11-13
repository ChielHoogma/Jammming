import React from 'react';
import styles from './Searchbar.module.css';
import Button from '../Button/Button';
function Searchbar(){
    return (
        <div className={styles.Searchbar}>
            <input className={styles.SearchField} placeholder='Search a song title'></input>
            <Button text="Search"/>
        </div>
    );
}
export default Searchbar;