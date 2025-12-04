import { useState, useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";

import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !photoURL || !email || !password) {
      toast.error("Please fill all fields!");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile({ displayName: name, photoURL: photoURL });
        toast.success("Signup successful!");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border border-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Photo URL */}
          <input
            type="text"
            placeholder="Photo URL"
            className="w-full px-4 py-3 rounded-xl border border-gray-300"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-purple-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
