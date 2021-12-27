import React from "react";

import classes from "./ProductItem.module.css";

function ProductItem({ img, link }) {
  return (
    <div className={classes.p}>
      <div className={classes["p-browser"]}>
        <div className={classes["p-circle"]}></div>
        <div className={classes["p-circle"]}></div>
        <div className={classes["p-circle"]}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className={classes["p-img"]} />
      </a>
    </div>
  );
}

export default ProductItem;
