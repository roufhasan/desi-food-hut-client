import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    console.log(name, email, password, photoUrl);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-1/4 mx-auto">
      <h2 className="text-4xl font-semibold text-center mt-20 mb-12">
        Sign Up
      </h2>
      <form onSubmit={handleRegister} className="text-center">
        <input
          className="bg-gray-200 text-gray-800 pl-3 pr-24 py-3"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
        <br />
        <input
          className="bg-gray-200 text-gray-800 pl-3 pr-24 py-3 my-4"
          type="email"
          name="email"
          id="email"
          placeholder="Please input your email"
          required
        />
        <br />
        <input
          className="bg-gray-200 text-gray-800 pl-3 pr-24 py-3"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
        />
        <br />
        <input
          className="bg-gray-200 text-gray-800 pl-3 pr-24 py-3 my-4"
          type="text"
          name="photoUrl"
          id="photUrl"
          placeholder="Photo Link"
          required
        />
        <br />
        <button className="px-20 bg-primary py-3 rounded-full text-lg hover:bg-green-500 transition ease-in duration-300">
          Sign Up
        </button>
      </form>
      <p className="mt-12 text-center mb-20">
        Already have an account?{" "}
        <Link to="/login" className="text-secondary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
