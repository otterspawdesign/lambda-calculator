import React from "react";
import NumberButton from "./NumberButton";
//import any components needed
import { numbers } from "../../../data";
//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  return (
    <div className="number-buttons">
      {" "}
      {numbers.map(number => {
        number = number !== "." ? parseInt(number) : number;
        return (
          <NumberButton
            num={number}
            display={props.display}
            setDisplay={props.setDisplay}
          />
        );
      })}{" "}
    </div>
  );
};

export default Numbers;
