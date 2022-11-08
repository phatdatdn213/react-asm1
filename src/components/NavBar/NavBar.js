import React from "react";
import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";

const nav = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h3 className={styles.title}>Booking website</h3>
      <button className={styles.button}>Login</button>
      <button className={styles.button}>Register</button>
      {nav.map((item) => {
        return <NavBarItem key={item.type} test={item} />;
      })}
    </div>
  );
};

export default Navbar;
