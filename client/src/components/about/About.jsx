import React from "react";

import Award from "../../img/award.png";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.a}>
      <div className={classes["a-left"]}>
        <div className={`${classes["a-card"]} ${classes["bg"]}`}></div>
        <div className={classes["a-card"]}>
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={classes["a-img"]}
          />
        </div>
      </div>
      <div className={classes["a-right"]}>
        <h1 className={classes["a-title"]}>About Me</h1>
        <p className={classes["a-sub"]}>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className={classes["a-desc"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className={classes["a-award"]}>
          <img src={Award} alt="" className={classes["a-award-img"]} />
          <div className={classes["a-award-texts"]}>
            <h4 className={classes["a-award-title"]}>
              International Design Awards 2021
            </h4>
            <p className={classes["a-award-desc"]}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
