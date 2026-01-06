// src/pages/Gallery.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

const Gallery = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (!user) {
      toast.error("You must login first to view gallery");
      navigate("/auth/login");
      return;
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center px-4 pt-24">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Gallery</h1>

      <button
        onClick={handleOpenModal}
        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl shadow-lg font-semibold text-lg hover:scale-105 transition-transform">
        Open Gallery
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 relative animate__animated animate__fadeInUp">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl">
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Select a Category
            </h2>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigate("/gallery/tour")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform">
                Tour Photos
              </button>

              <button
                onClick={() => navigate("/gallery/reunion")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform">
                Reunion
              </button>

              <button
                onClick={() => navigate("/gallery/football")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform">
                Football Match
              </button>
              <button
                onClick={() => navigate("/gallery/bidayonusthan")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform">
                Biday Onusthan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
