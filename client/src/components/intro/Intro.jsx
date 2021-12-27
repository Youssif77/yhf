import React from "react";

import Me from "../../img/me.png";
import classes from "./Intro.module.css";

function Intro() {
  return (
    <div className={classes.i}>
      <div className={classes["i-left"]}>
        <div className={classes["i-left-wrapper"]}>
          <h2 className={classes["i-intro"]}>Hello, My name is</h2>
          <h1 className={classes["i-name"]}>Youssif Hany Fouad</h1>
          <div className={classes["i-title"]}>
            <div className={classes["i-title-wrapper"]}>
              <div className={classes["i-title-item"]}>Web Developer</div>
              <div className={classes["i-title-item"]}>UI Developer</div>
              <div className={classes["i-title-item"]}>Front-End Developer</div>
              <div className={classes["i-title-item"]}>
                Back-End Node Developer
              </div>
            </div>
          </div>
          <p className={classes["i-decs"]}>
            A fresh ITI graduate, Seeking to create digital magic and elevate
            user experience to the next level, supplied with a vast technical
            skill-set and attention to detail.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className={classes["i-scroll"]}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className={classes["i-right"]}>
        <div className={classes["i-bg"]}>
          <img src={Me} alt="me" className={classes["i-img"]} />
        </div>
      </div>
    </div>
  );
}

export default Intro;
