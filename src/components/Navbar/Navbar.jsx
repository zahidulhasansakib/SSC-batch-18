// src/components/Navbar/Navbar.jsx
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "My Profile", path: "/profile" },
  ];

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-md">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-xl bg-white shadow-lg border border-gray-200">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-purple-600"
                      : "font-semibold text-gray-700 hover:text-purple-500"
                  }>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="ml-2 text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent hover:scale-105 transition">
          SSC Batch <span className="text-xl">2018</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-purple-600 border-b-2 border-purple-500 pb-1"
                    : "font-semibold text-gray-700 hover:text-purple-500 pb-1"
                }>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL || "https://i.ibb.co/YT9W8wM/default-user.png"}
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-purple-500"
            />
            <button
              onClick={handleLogout}
              className="px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white hover:opacity-90 transition">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/auth/login"
              className="px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="px-4 py-1.5 rounded-full text-sm font-semibold border border-purple-500 text-purple-600 hover:bg-purple-50">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
