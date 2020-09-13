import React from "react";
import "./Cheese.css";

export const Cheese = (props) => {
  return (
    <div className="Cheese">
      <p onClick={props.click}>
        Type of cheese: {props.name} Age: {props.age}
      </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};
