import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { emailLogin, googleLogin } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await emailLogin(email, password);
      toast.success("Login Successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    setSubmitting(true);
    try {
      await googleLogin();
      toast.success("Google Login Successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800/80 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-700 via-indigo-800 to-pink-700">
            <h1 className="text-3xl font-extrabold text-white text-center drop-shadow-md">
              Welcome Back
            </h1>
            <p className="text-sm text-white/80 text-center mt-2">
              Sign in to manage your pet care listings
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white border focus:ring-2 focus:ring-purple-400"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white border focus:ring-2 focus:ring-purple-400 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-2.5 text-gray-300 hover:text-white">
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition">
              {submitting ? "Logging in..." : "Login"}
            </button>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogle}
              className="w-full py-2 border border-gray-500 rounded-xl flex justify-center items-center gap-2 text-white hover:bg-gray-700 transition">
              <FaGoogle /> Continue with Google
            </button>

            <p className="text-sm text-center text-gray-300 mt-2">
              Don't have an account?{" "}
              <Link to="/signup" className="text-purple-400 hover:underline">
                Signup
              </Link>
            </p>

            <p
              onClick={() =>
                navigate("/auth/forgot-password", { state: { email } })
              }
              className="text-purple-400 cursor-pointer mt-1 text-center hover:underline">
              Forgot Password?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
