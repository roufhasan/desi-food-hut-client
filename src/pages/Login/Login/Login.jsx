import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="text-center my-12">
      <input
        className="border-2 border-green-500"
        type="email"
        name="email"
        id="email"
        placeholder="Please input your email"
        required
      />
      <br />
      <input
        className="border-2 border-green-500 my-4"
        type="password"
        name="password"
        id="password"
        placeholder="password"
        required
      />
      <br />
      <button className="btn btn-primary">Log In</button>
      <p>
        Don't have an account please
        <Link to="/register" className="text-red-500">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
