import spotify from "../sources/spotify.svg";
import burger from "../sources/burger.svg";
import search from "../sources/search.svg";
import classes from "./Head.module.css";

function Header() {
  // Replace with your YouTube video URL

  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <img src={spotify} className={classes.spotifyLogo} alt="logo" />
        <img src={search} className={classes.searchLogo} alt="logo" />
        <button className={classes.HeaderButton}>Otwórz Aplikację</button>
        <img src={burger} className={classes.burgerLogo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;
