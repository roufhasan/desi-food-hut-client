import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

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
    <div className="w-1/4 mx-auto">
      <h2 className="text-4xl font-semibold text-center mt-20 mb-12">
        Sign In
      </h2>
      <form onSubmit={handleLogin} className="text-center">
        <input
          className="bg-gray-200 text-gray-800 pl-3 pr-24 py-3"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          className="bg-gray-200 text-gray-800 pl-3 pr-24 py-3 my-4"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <br />
        <button className="px-20 bg-primary py-3 rounded-full text-lg hover:bg-green-500 transition ease-in duration-300">
          Log In
        </button>
      </form>
      <div className="mt-6">
        <div className="divider">OR</div>
        <div className="text-3xl flex gap-x-5 justify-center">
          <FaGoogle></FaGoogle>
          <FaGithub></FaGithub>
        </div>
        <p className="mt-12 text-center mb-20">
          Don't have an account please?{" "}
          <Link to="/register" className="text-secondary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
