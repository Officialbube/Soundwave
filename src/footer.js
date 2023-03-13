import React, { useEffect, useState } from "react";
import "./Footer.css";

import { useStateValue } from "./StateProvider";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
{/*import { Grid, Slider } from "@material-ui/core";*/ }

function Footer({ spotify }) {
  {/*const [{ token, item, playing }, dispatch] = useStateValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };*/}

  return (
    <div className="footer">
      <div className="top">
        <div className="footer__left">
          <FavoriteBorderIcon />
          <MusicNoteIcon />
          <CloseFullscreenIcon />

          <img className="footer__albumLogo" />
          {/*{item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}*/}
        </div>

        <div className="footer__center">
          {/*<ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={skipNext} className="footer__icon" />
        {playing ? (*/}
          {/*<PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
        />
        ) : (
          {/*<PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
        />*/}

          {/*<SkipNextIcon onClick={skipPrevious} className="footer__icon" />
        <RepeatIcon className="footer__green" />*/}
          <SkipPreviousIcon />
          <ShuffleIcon />
          <PlayCircleOutlineIcon />
          <SkipNextIcon />
        </div>
        <div className="footer__right">
          {/*<Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
      </Grid>*/}
          
          <VolumeDownIcon />
          <input type="range" className="volume"/>
          <VolumeUpIcon />
        </div>
      </div>
      <div className="bottom">
        <p>00:00</p>
        <input type="range" className="duration"/>
        <p>04:00</p>
      </div>

    </div>
  );
}

export default Footer;