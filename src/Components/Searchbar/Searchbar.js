import React, {useState} from 'react';
import styles from './Searchbar.module.css';
import Button from '../Button/Button';
import SpotifyAuthButton from '../SpotifyAuthButton/SpotifyAuthButton';

function Searchbar(props){
    const [searchTerm, setSearchTerm] = useState("");
    const onClick = () => {
        props.onSearch(searchTerm);
    }
    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }
    const checkEnter = (event) => {
        if(event.key === 'Enter'){
            props.onSearch(searchTerm);
        }
    }
    return (
        <div className={styles.Searchbar}>
            <input className={styles.SearchField} placeholder='Search a song title' onChange={updateSearchTerm} onKeyDown={checkEnter}></input>
            <Button text="Search" onClick={onClick}/>
        </div>
    );
}
export default Searchbar;