import React from "react";
import OperatorButton from "./OperatorButton";
//import any components needed
import { operators } from "../../../data";
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div className="operator-buttons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operators.map(operator => {
        return (
          <OperatorButton
            operation={operator.value}
            char={operator.char}
          />
        );
      })}
    </div>
  );
};

export default Operators;