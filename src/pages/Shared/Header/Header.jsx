import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catcht((error) => console.log(error));
  };
  return (
    <div className="max-w-[1440px] px-[4%] mx-auto mt-2 mb-6">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="text-xl lg:text-4xl font-bold">
            Desi <span className="text-secondary">Food </span>
            <span className="text-primary">Hut</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "text-black"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/item3"
                className={({ isActive }) =>
                  isActive ? "text-green-500 font-bold" : "text-black"
                }
              >
                Item 3
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div
              className="avatar tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          )}
          {user ? (
            <Link
              onClick={handleLogOut}
              className="ml-4 bg-primary px-4 py-2 rounded-lg hover:transform hover:scale-110 transition-all"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="ml-4 bg-primary px-4 py-2 rounded-lg hover:transform hover:scale-110 transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
