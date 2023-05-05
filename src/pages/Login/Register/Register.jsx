import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError(
        "Password must be Minimum eight characters, at least one letter and one number"
      );
      form.reset();
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-1/4 mx-auto">
      <h2 className="text-4xl font-semibold text-center mt-20 mb-12">
        Sign Up
      </h2>
      <p className="text-center mb-4 text-red-500">
        <small>{error}</small>
      </p>
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
          placeholder="Email"
          required
        />
        <br />
        <input
          className="bg-gray-200 text-gray-800 pl-3 pr-24 py-3"
          type="password"
          name="password"
          id="password"
          placeholder="Passoword"
          required
        />
        <br />
        <input
          className="bg-gray-200 text-gray-800 pl-3 pr-24 py-3 my-4"
          type="text"
          name="photoUrl"
          id="photUrl"
          placeholder="Photo URL"
          required
        />
        <br />
        <button className="px-20 bg-green-500 py-3 rounded-full text-lg hover:bg-primary transition ease-in duration-300">
          Sign Up
        </button>
      </form>
      <p className="mt-12 text-center mb-20">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
