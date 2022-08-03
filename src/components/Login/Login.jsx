import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-form">
      <div>
        <h1>LogIn Please</h1>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          new to ema Jhon <Link to="/register">Create Account</Link>
        </p>
        <div>------------------ or ----------------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;
