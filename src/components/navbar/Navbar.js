import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <header>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/menu'>Menu</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/login'>Login</a>
          </li>
          <li>
            <a href='/cart'>Cart</a>
          </li>
        </ul>
      </header>
    </div>
  );
};
