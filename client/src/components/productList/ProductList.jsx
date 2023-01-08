import React from "react";

import { products } from "../../data";
import ProductItem from "../productItem/ProductItem";
import classes from "./ProductList.module.css";

function ProductList() {
  return (
    <div className={classes.pl}>
      <div className={classes["pl-texts"]}>
        <h1 className={classes["pl-title"]}>Create & inspire. It's YHFA</h1>
        <p className={classes["pl-desc"]}>
          YHFA is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className={classes["pl-list"]}>
        {products.map((item) => (
          <ProductItem key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
