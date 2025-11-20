import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  // Auto-fill email if came from Login page
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    window.location.href = "https://mail.google.com";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-5">
      {/* Glass Card */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-8 text-white">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-3 drop-shadow-lg">
          Reset Your Password
        </h2>
        <p className="text-center text-white/80 mb-8">
          Enter your email to receive password reset instructions.
        </p>

        <form onSubmit={handleReset} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-white/90 mb-1 font-medium">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute top-1/2 -translate-y-1/2 left-3 text-white/70">
                ✉️
              </span>
              <input
                type="email"
                value={email}
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 
                focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
              />
            </div>
          </div>

          {/* Reset Button */}
          <button
            className="w-full py-3 bg-white text-blue-700 font-semibold rounded-xl 
            hover:bg-gray-100 transition shadow-lg hover:shadow-2xl">
            Reset Password
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-white/80 mt-6 text-sm">
          You will be redirected to Gmail after clicking reset.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
