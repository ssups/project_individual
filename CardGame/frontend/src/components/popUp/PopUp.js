import React from "react";
import { Whole, Wrap } from "./style";

const PopUp = ({ setPopup }) => {
  function closePopUp(e) {
    if (e.target.dataset.for !== "wrap") {
      setPopup(false);
    }
  }
  return (
    <Whole onClick={closePopUp}>
      <Wrap data-for="wrap"></Wrap>
    </Whole>
  );
};

export default PopUp;
