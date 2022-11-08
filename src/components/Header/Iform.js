import React from "react";
import styles from "./Header.module.css";

const Iform = (props) => {
  const change = (e) => {
    if (e.target.id === "fa fa-calendar") {
      console.log("correct");
      props.receive(true);
      console.log(props.isPick);
    }
  };
  return (
    <React.Fragment>
      <span style={{ marginLeft: "20px" }}>
        <i className={props.content.icon}></i>
      </span>
      <input
        type="text"
        placeholder={props.content.label}
        className={styles.textForm}
        id={props.content.icon}
        onClick={(e) => {
          change(e);
        }}
        defaultValue={
          props.content.icon === "fa fa-calendar" ? props.dienvao : ""
        }
      ></input>
    </React.Fragment>
  );
};

export default Iform;
