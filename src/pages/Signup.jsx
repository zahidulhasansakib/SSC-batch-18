import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";


const Signup = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { emailSignup, googleLogin } = useContext(AuthContext);

  const validatePassword = (pass) => {
    if (pass.length < 6 || !/[A-Z]/.test(pass) || !/[a-z]/.test(pass))
      return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const form=e.target;
    const name=form.name.value;
    console.log(name);
    
    
    if (!validatePassword(password)) {
      toast.error(
        "Password must be 6+ chars, include uppercase and lowercase."
      );
      return;
    }
    try {
      await emailSignup(name, email, password, photo);
      toast.success("Signup Successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Google Signup Successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 px-4">
      <div className="w-full max-w-lg">
        <div className="bg-white/90 rounded-3xl shadow-xl border overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 text-white text-center">
            <h1 className="text-3xl font-bold">Create Account</h1>
            <p>Join our Winter Pet Care community</p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-purple-300"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-purple-300"
              required
            />
            <input
              type="text"
              placeholder="Photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-purple-300"
            />
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border pr-10 focus:ring-2 focus:ring-purple-300"
                required
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-2.5 text-gray-500">
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
              Register
            </button>
            <button
              type="button"
              onClick={handleGoogle}
              className="w-full py-2 border rounded-xl flex justify-center items-center gap-2">
              <FaGoogle /> Signup with Google
            </button>
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
