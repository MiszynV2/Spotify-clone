import play from "../sources/play.svg";
import share from "../sources/share.svg";
import dots from "../sources/dots.svg";
import rat from "../sources/OG_RAT.jpg";

import classes from "./ArtistInfo.module.css";

function Artist_info() {
  return (
    <div className={classes.ArtistInfoWrapper}>
      <div className={classes.spotifyImgWrapper}>
        <img src={rat} className={classes.spotifyImg} alt="logo" />
      </div>
      <h1>OG_RAT</h1>
      <div className={classes.gridWrapper}>
        <h2>3 200 232 słuchaczy w miesiącu</h2>
        <div className={classes.shareWrapper}>
          <button className={classes.shareButton}>Obserwuj</button>
          <img src={share} className={classes.shareImg} alt="logo" />
          <img src={dots} className={classes.dotsImg} alt="logo" />
        </div>
        <div className={classes.playImgWrapper}>
          <div className={classes.greenCircle}>
            <img src={play} className={classes.playImg} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artist_info;
