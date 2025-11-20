import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useContext } from "react";
import { motion } from "framer-motion";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setEditMode(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg backdrop-blur-xl bg-white/40 shadow-2xl rounded-3xl p-8 border border-white/30">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 drop-shadow-sm">
          My Profile
        </h1>

        {/* Profile Info */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg border-4 border-white/70"
          />

          <h2 className="text-2xl font-semibold mt-4 text-gray-900">
            {user?.displayName}
          </h2>
          <p className="text-gray-700">{user?.email}</p>

          <button
            onClick={() => setEditMode(!editMode)}
            className="mt-5 px-6 py-2 rounded-full bg-blue-600 text-white text-lg shadow-md hover:bg-blue-700 transition-all">
            {editMode ? "Cancel" : "Update Profile"}
          </button>
        </motion.div>

        {/* Edit Form */}
        {editMode && (
          <motion.form
            onSubmit={handleUpdate}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 space-y-5">
            {/* Name Field */}
            <div>
              <label className="font-medium text-gray-800">Full Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="w-full p-3 mt-1 rounded-xl bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="font-medium text-gray-800">Photo URL</label>
              <input
                type="text"
                name="photo"
                defaultValue={user?.photoURL}
                className="w-full p-3 mt-1 rounded-xl bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md"
                required
              />
            </div>

            {/* Save Button */}
            <button className="w-full py-3 rounded-xl bg-green-600 text-white text-lg shadow-lg hover:bg-green-700 transition-all">
              Save Changes
            </button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default MyProfile;
