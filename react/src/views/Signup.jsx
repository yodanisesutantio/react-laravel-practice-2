import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const onSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="login-signup-form">
      <div className="form">
        <form action="" onSubmit={onSubmit}>
          <h1 className="title">Register Account</h1>
          <input type="email" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password Confirmation" />
          <button className="btn btn-block">Signup</button>

          <p className="message">
            Already Registered? <Link to="/login">Login Instead!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
