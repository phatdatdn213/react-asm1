import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Middle.module.css";

const list = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const MiddleBottom = () => {
  const gogo = () => {
    window.location.replace("http://localhost:3000/detail");
  };
  return (
    <div className="row">
      {list.map((item) => {
        return (
          <div className="col" key={item.name}>
            <div style={{ position: "relative" }}>
              <img
                className={styles.imgFour}
                alt={item.name}
                src={item.image_url}
              />
              <div>
                <h5 onClick={gogo} className={styles.link}>
                  {item.name}
                </h5>
                <p>{item.city}</p>
                <h5>{`Starting from ${item.price}`}</h5>
                <span className={styles.mark}>{item.rate}</span>
                <span style={{ marginLeft: "10px" }}>{item.type}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
//
export default MiddleBottom;
