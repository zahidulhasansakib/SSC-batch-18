import React, { useState, useContext } from "react";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../provider/AuthProvider";
import { storage } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("User not logged in!");

    const name = e.target.name.value.trim();
    if (!name) return toast.error("Name is required!");

    setLoading(true);

    try {
      let finalPhotoURL = user.photoURL;

      // ✅ Upload image to Firebase Storage
      if (photoFile) {
        if (photoFile.size > 2 * 1024 * 1024) {
          setLoading(false);
          return toast.error("Image must be less than 2MB");
        }

        const imageRef = ref(storage, `profileImages/${user.uid}`);
        await uploadBytes(imageRef, photoFile);
        finalPhotoURL = await getDownloadURL(imageRef);
      }

      await updateProfile(user, {
        displayName: name,
        photoURL: finalPhotoURL,
      });

      // ✅ Update local user state
      setUser({
        ...user,
        displayName: name,
        photoURL: finalPhotoURL,
      });

      toast.success("Profile updated successfully!");
      setEditMode(false);
    } catch (err) {
      toast.error(err.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl min-h-[600px] backdrop-blur-xl bg-white/10 shadow-2xl rounded-3xl p-10 border border-white/20">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          My Profile
        </h1>

        {/* Profile View */}
        <div className="text-center">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg border-4 border-white/40"
          />
          <h2 className="text-2xl font-semibold mt-4 text-white">
            {user?.displayName || "No Name"}
          </h2>
          <p className="text-gray-300">{user?.email}</p>

          <button
            onClick={() => setEditMode(!editMode)}
            className="mt-5 px-6 py-2 rounded-full bg-purple-600 text-white text-lg hover:bg-purple-700 transition">
            {editMode ? "Cancel" : "Update Profile"}
          </button>
        </div>

        {/* Edit Form */}
        {editMode && (
          <motion.form
            onSubmit={handleUpdate}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label className="text-white font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="w-full p-3 mt-1 rounded-xl bg-white/20 border border-gray-400 text-white focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="text-white font-medium">
                Upload Profile Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhotoFile(e.target.files[0])}
                className="w-full mt-2 text-white file:bg-gray-700 file:text-white file:px-4 file:py-2 file:rounded-xl file:border-none cursor-pointer hover:file:bg-gray-600"
              />
              <p className="text-sm text-gray-300 mt-1">Max size: 2MB</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-green-600 text-white text-lg hover:bg-green-700 transition">
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default MyProfile;
