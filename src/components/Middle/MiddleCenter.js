import React from "react";
import styles from "./Middle.module.css";

const typeHotel = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const MiddleCenter = () => {
  return (
    <div className="row">
      {typeHotel.map((item) => {
        return (
          <div className="col" key={item.name}>
            <div style={{ position: "relative" }}>
              <img className={styles.imgMin} alt={item.name} src={item.image} />
              <div className={styles.detailHotel}>
                <h4>{item.name}</h4>
                <p>{item.count}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
//
export default MiddleCenter;
