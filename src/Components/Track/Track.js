import React, { useRef, useState, useEffect } from "react";
import styles from "./Track.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function Track(props) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, []);

  const track = props.track;
  const onButtonClick = () => {
    props.onButtonClick?.(track);
  };
  const artists = track.artists.map((artist) => artist.name).join(", ");

  return (
    <div className={styles.Track}>
      <div className={styles.TrackInfo}>
        <div className={styles.TrackInfoBody}>
          <h2 className={styles.Title}>{track.name}</h2>
          <p className={styles.Artist}>{artists}</p>
          <p className={styles.Album}>{track.album.name}</p>
        </div>
      </div>
      {track.preview_url && (
        <>
          <audio ref={audioRef} src={track.preview_url} />
          <button className={styles.MusicButton} onClick={toggleAudio}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
        </>
      )}
      <button className={styles.ActionButton} onClick={onButtonClick}>
        {props.text}
      </button>
    </div>
  );
}

export default Track;
