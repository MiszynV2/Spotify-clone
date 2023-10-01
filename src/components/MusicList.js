import React, { useState } from "react";
import classes from "./MusicList.module.css";

import MusicListItem from "./MusicListItem";

// Import your audio files
import audio1 from "../sources/audio1.mp3";
import audio3 from "../sources/audio3.mp3";
import audio4 from "../sources/audio4.mp3";
import audio5 from "../sources/audio5.mp3";
import audio6 from "../sources/audio6.mp3";
import audio7 from "../sources/audio7.mp3";
import audio8 from "../sources/audio8.mp3";
import audio9 from "../sources/audio9.mp3";
import audio10 from "../sources/audio10.mp3";
import audio11 from "../sources/audio11.mp3";
import audio12 from "../sources/audio12.mp3";
import audio13 from "../sources/audio13.mp3";
import audio14 from "../sources/audio14.mp3";
import audio15 from "../sources/audio15.mp3";

// Add more audio imports for each <li> if needed
//images
import bog from "../sources/bog.jpg";
import klon from "../sources/klon.jpg";
import protest from "../sources/protest.jpg";
import tylkoona from "../sources/tylkoona.jpg";
import nosek from "../sources/nosek.jpg";
import krzyk from "../sources/krzyk.jpg";
import kobieta from "../sources/kobieta.jpg";
import bocian from "../sources/bocian.png";
import jez from "../sources/jez.jpg";
import poker from "../sources/poker.jpg";
import szmata from "../sources/szmata.jpg";
import trap from "../sources/trap.jpg";
import ogien from "../sources/ogien.jpg";
import eskimos from "../sources/eskimos.jpg";

function MusicList() {
  const [currentMusic, setCurrentMusic] = useState(null);

  const handleMusicClick = (audio) => {
    if (currentMusic === audio) {
      // If the same audio is clicked again, pause it
      setCurrentMusic(null);
    } else {
      // If a different audio is clicked, pause the currently playing one and play the new one
      if (currentMusic) {
        const currentAudioElement = document.getElementById(currentMusic);
        if (currentAudioElement) {
          currentAudioElement.pause();
        }
      }
      setCurrentMusic(audio);
    }
  };

  return (
    <ul>
      <h1 className={classes.listTitle}>Popularne</h1>
      <MusicListItem
        title={"Qogiem"}
        views={"420,696"}
        audio={audio1}
        onClick={() => handleMusicClick(audio1)}
        isPlaying={currentMusic === audio1}
        image={bog}
      />

      <MusicListItem
        title={"Lorem ipsum"}
        views={"6,996"}
        audio={audio3}
        onClick={() => handleMusicClick(audio3)}
        isPlaying={currentMusic === audio3}
        image={klon}
      />
      <MusicListItem
        title={"Nemo enim ipsam"}
        views={"2,420,346"}
        audio={audio4}
        onClick={() => handleMusicClick(audio4)}
        isPlaying={currentMusic === audio4}
        image={protest}
      />
      <MusicListItem
        title={"At vero eos et accusamus"}
        views={"420,006"}
        audio={audio5}
        onClick={() => handleMusicClick(audio5)}
        isPlaying={currentMusic === audio5}
        image={tylkoona}
      />
      <MusicListItem
        title={"Quenota"}
        views={"420,696"}
        audio={audio6}
        onClick={() => handleMusicClick(audio6)}
        isPlaying={currentMusic === audio6}
        image={nosek}
      />
      <MusicListItem
        title={"Itaque earum rerum (desires)"}
        views={"42,096"}
        audio={audio7}
        onClick={() => handleMusicClick(audio7)}
        isPlaying={currentMusic === audio7}
        image={krzyk}
      />
      <MusicListItem
        title={"Et harum quidem"}
        views={"6,996"}
        audio={audio8}
        onClick={() => handleMusicClick(audio8)}
        isPlaying={currentMusic === audio8}
        image={kobieta}
      />
      <MusicListItem
        title={"Temporibus autem"}
        views={"62,996"}
        audio={audio9}
        onClick={() => handleMusicClick(audio9)}
        isPlaying={currentMusic === audio9}
        image={bocian}
      />
      <MusicListItem
        title={"Itaque earum"}
        views={"22,444,696"}
        audio={audio10}
        onClick={() => handleMusicClick(audio10)}
        isPlaying={currentMusic === audio10}
        image={poker}
      />
      <MusicListItem
        title={"Quis autem"}
        views={"42,446"}
        audio={audio11}
        onClick={() => handleMusicClick(audio11)}
        isPlaying={currentMusic === audio11}
        image={jez}
      />
      <MusicListItem
        title={"Ut et voluptates"}
        views={"436,996"}
        audio={audio12}
        onClick={() => handleMusicClick(audio12)}
        isPlaying={currentMusic === audio12}
        image={trap}
      />
      <MusicListItem
        title={"Nemo enim ipsam"}
        views={"6,642,496"}
        audio={audio13}
        onClick={() => handleMusicClick(audio13)}
        isPlaying={currentMusic === audio13}
        image={szmata}
      />
      <MusicListItem
        title={"Sed ut perspiciatis"}
        views={"346,996"}
        audio={audio14}
        onClick={() => handleMusicClick(audio14)}
        isPlaying={currentMusic === audio14}
        image={ogien}
      />
      <MusicListItem
        title={"Quia voluptas sit"}
        views={"622,996"}
        audio={audio15}
        onClick={() => handleMusicClick(audio15)}
        isPlaying={currentMusic === audio15}
        image={eskimos}
      />

      <hr />
    </ul>
  );
}

export default MusicList;
