import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="font-semibold">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/services" className="font-semibold">
          Services
        </NavLink>
      </li>

      <li>
        <NavLink to="/profile" className="font-semibold">
          My Profile
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-lg mt-3 w-52 shadow">
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="text-xl font-bold text-purple-600">
          🐾 Winter Pets
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL || "https://i.ibb.co/YT9W8wM/default-user.png"}
              className="w-10 h-10 rounded-full border-2 border-purple-500"
            />
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-error text-white">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/auth/login" className="btn btn-sm btn-primary">
              Login
            </Link>
            <Link to="/auth/signup" className="btn btn-sm btn-secondary">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
