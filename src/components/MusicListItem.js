import React from "react";
import classes from "./MusicListItem.module.css";
import play from "../sources/greenplay.svg";

function MusicListItem(props) {
  return (
    <li
      className={classes.listItemWrapper}
      onClick={() => props.onClick(props.audio)}
    >
      <div className={classes.imgTextWrapper}>
        <img
          className={classes.listItemImage}
          src={props.image}
          alt={props.title}
        />
        <div className={classes.textWrapper}>
          {props.isPlaying && (
            <span className={classes.titleSpanPlaying}>{props.title}</span>
          )}
          {!props.isPlaying && (
            <span className={classes.titleSpan}>{props.title}</span>
          )}
          <p className={classes.statsP}>{props.views}</p>
        </div>
      </div>
      {props.isPlaying && (
        <div className={classes.playingIndicator}>
          <img alt="play" src={play} />
        </div>
      )}
      {props.isPlaying && (
        <audio id={props.audio} controls autoPlay>
          <source src={props.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </li>
  );
}

export default MusicListItem;
