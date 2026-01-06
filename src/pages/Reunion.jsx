// src/pages/Reunion.jsx
import React, { useState, useEffect } from "react";
import { FaTimes, FaDownload, FaExpand } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your 20 images (replace with your own)
import img1 from "../assets/reunion/img1.jpg";
import img2 from "../assets/reunion/img2.jpg";
import img3 from "../assets/reunion/img3.jpg";
import img4 from "../assets/reunion/img4.jpg";
import img5 from "../assets/reunion/img5.jpg";
import img6 from "../assets/reunion/img6.jpg";
import img7 from "../assets/reunion/img7.jpg";
import img8 from "../assets/reunion/img8.jpg";
import img9 from "../assets/reunion/img9.jpg";
import img10 from "../assets/reunion/img10.jpg";
import img11 from "../assets/reunion/img11.jpg";
import img12 from "../assets/reunion/img12.jpg";
import img13 from "../assets/reunion/img13.jpg";
import img14 from "../assets/reunion/img14.jpg";
import img15 from "../assets/reunion/img15.jpg";
import img16 from "../assets/reunion/img16.jpg";
import img17 from "../assets/reunion/img17.jpg";
import img18 from "../assets/reunion/img18.jpg";
import img19 from "../assets/reunion/img19.jpg";
import img20 from "../assets/reunion/img20.jpg";

const Reunion = () => {
  const [images] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openModal = (img) => {
    setSelectedImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50">
      <h1
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-700"
        data-aos="fade-down">
        Reunion Gallery 🎉
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={idx * 50}>
            <img
              src={img}
              alt={`Reunion ${idx + 1}`}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
              <button
                onClick={() => openModal(img)}
                className="mx-1 px-3 py-1 rounded-lg bg-purple-600 text-white flex items-center gap-2 hover:bg-purple-700 transition">
                <FaExpand /> View
              </button>
              <a
                href={img}
                download
                className="mx-1 px-3 py-1 rounded-lg bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700 transition">
                <FaDownload /> Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedImg && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
          <div className="relative max-w-3xl w-full mx-4">
            <img
              src={selectedImg}
              alt="Selected"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-2xl hover:text-purple-400 transition">
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reunion;
