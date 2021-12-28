import React, { useRef } from "react";

import classes from "./ProductItem.module.css";

function ProductItem({ img, link }) {
  const imgRef = useRef(null);
  const decsRef = useRef(null);

  function onHoverHanlder(e) {
    const imgHeight = imgRef.current.clientHeight;
    decsRef.current.style.transition = "all 10s ease";
    decsRef.current.style.transform = `translateY(${
      e.type === "mouseenter" ? -imgHeight : imgHeight
    }px)`;
  }

  return (
    <div
      className={classes.p}
      onMouseEnter={onHoverHanlder}
      onMouseLeave={onHoverHanlder}
    >
      <div className={classes["p-browser"]}>
        <div className={classes["p-circle"]}></div>
        <div className={classes["p-circle"]}></div>
        <div className={classes["p-circle"]}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img ref={imgRef} src={img} alt="" className={classes["p-img"]} />
      </a>
      <p ref={decsRef}></p>
    </div>
  );
}

export default ProductItem;
