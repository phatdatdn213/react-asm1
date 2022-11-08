import React from "react";
import styles from "./Middle.module.css";

const cty = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const MiddleTop = () => {
  return (
    <div className="row">
      {cty.map((item) => {
        return (
          <div className="col" key={item.name}>
            <div style={{ position: "relative" }}>
              <img
                className={styles.imgLage}
                alt={item.name}
                src={item.image}
              />
              <div className={styles.detail}>
                <h4>{item.name}</h4>
                <p>{item.subText}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
//
export default MiddleTop;
