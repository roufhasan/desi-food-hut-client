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
    <form onSubmit={handleRegister} className="text-center my-12">
      <input
        className="border-2 border-green-500"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required
      />
      <br />
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
      <input
        className="border-2 border-green-500 my-4"
        type="text"
        name="photoUrl"
        id="photUrl"
        placeholder="Photo Link"
        required
      />
      <br />
      <button className="btn btn-primary">Register</button>
      <p>
        Already have an account please
        <Link to="/login" className="text-red-500">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
