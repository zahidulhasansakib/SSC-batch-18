// src/pages/Signup.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const { emailSignup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoFile, setPhotoFile] = useState(null); // file from device
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // Password validation
  const validatePassword = (pass) => {
    if (pass.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return false;
    }
    if (!/[A-Z]/.test(pass)) {
      setPasswordError("Password must contain at least 1 uppercase letter.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill all required fields!");
      return;
    }

    if (!validatePassword(password)) {
      toast.error("Password does not meet requirements!");
      return;
    }

    try {
      // Default avatar
      let finalPhotoURL = "https://i.ibb.co/4pDNDk1/avatar.png";

      // If user uploaded a file, use it
      if (photoFile) {
        // For now, use local preview URL
        finalPhotoURL = URL.createObjectURL(photoFile);

        // In production, upload to storage (Firebase, etc.) and get URL
        // Example:
        // finalPhotoURL = await uploadToFirebase(photoFile)
      }

      await emailSignup(name, email, password, finalPhotoURL);
      toast.success("Signup successful!");
      navigate("/"); // redirect to home
    } catch (err) {
      toast.error(err.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 px-4">
      <div className="w-full max-w-md bg-gray-900/90 rounded-3xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Photo Upload */}
          <div>
            <label className="block text-gray-300 mb-1">
              Upload Photo (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhotoFile(e.target.files[0])}
              className="w-full text-white file:bg-gray-700 file:text-white file:px-4 file:py-2 file:rounded-xl file:border-none file:cursor-pointer hover:file:bg-gray-600"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 text-gray-400">
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
            {passwordError && (
              <p className="text-red-400 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 transition">
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-purple-400 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
