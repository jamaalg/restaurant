import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Drinks } from "./drinks/Drinks";
import { Appetizers } from "./appetizers/Appetizers";

function Menu() {
  return (
    <div>
      Menu Component
      <Drinks />
      <Appetizers />
    </div>
  );
}

export default Menu;
