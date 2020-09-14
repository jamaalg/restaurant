import React from "react";
import { Home } from "../home/Home";
import Menu from "../menu/Menu";
import { About } from "../about/About";
import { Login } from "../login/Login";
import { Cart } from "../cart/Cart";

import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <header>
          <ul>
            <li>
              <Link to='/'> Home </Link>
            </li>
            <li>
              <Link to='/menu'> Menu </Link>
            </li>

            <li>
              <Link to='/about'> About </Link>
            </li>
            <li>
              <Link to='/cart'> Cart </Link>
            </li>
            <li>
              <Link to='/login'> Login </Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route path='/menu'>
            <Menu />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
