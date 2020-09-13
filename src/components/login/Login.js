import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  function outputState(event) {
    event.preventDefault();
    const login = !isLoggedIn;
    setLoggedIn(login);
    console.log(email, password, isLoggedIn);
  }

  return (
    <div className='login-container'>
      <form action=''>
        <label>
          Email:
          <input
            type='text'
            placeholder='Enter Email Address'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='text'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </label>
        <button onClick={(e) => outputState(e)}> Login </button>
      </form>
    </div>
  );
};
