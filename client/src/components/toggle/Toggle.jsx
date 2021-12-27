import React, { useContext } from "react";

import { ThemeContext } from "./../../shared/theme-context";
import Sun from "./../../img/sun.png";
import Moon from "./../../img/moon.png";
import classes from "./Toggle.module.css";

function Toggle() {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={classes.t} onClick={themeCtx.toggleDarkMode}>
      <img src={Sun} alt="sun" className={classes["t-icon"]} />
      <img src={Moon} alt="moon" className={classes["t-icon"]} />
      <div
        className={classes["t-button"]}
        style={{ left: themeCtx.darkMode ? 25 : 0 }}
      ></div>
    </div>
  );
}

export default Toggle;
