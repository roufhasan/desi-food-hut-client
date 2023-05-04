import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleLogin} className="text-center my-12">
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
