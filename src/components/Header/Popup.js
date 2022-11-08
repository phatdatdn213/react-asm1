import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import dateFormat, { masks } from "dateformat";

const Popup = (props) => {
  const handleSelect = (ranges) => {
    masks.hammerTime = "dd/mm/yyyy";
    let now = ranges.selection.startDate;
    let then = ranges.selection.endDate;
    let comeback = `${dateFormat(now, "hammerTime")} to ${dateFormat(
      then,
      "hammerTime"
    )} `;

    props.ngay(comeback);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  return <DateRange ranges={[selectionRange]} onChange={handleSelect} />;
};

export default Popup;
