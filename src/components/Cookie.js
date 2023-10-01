import React, { useState } from "react";
import classes from "./Cookie.module.css";

function Cookie() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAcceptClick = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={classes.header}>
        <div className={classes.textWrapper}>
          <h1 className={classes.title}>Przypomnienie</h1>
          <p className={classes.paragraph}>
            Jak nie działa należy przenieść się na Chrome. A jak nie działają
            dalej, to nie wiem co może być nie tak. Enjoy :)
          </p>
        </div>
        <button className={classes.acceptButton} onClick={handleAcceptClick}>
          AKCEPTUJ
        </button>
      </div>
    )
  );
}

export default Cookie;
