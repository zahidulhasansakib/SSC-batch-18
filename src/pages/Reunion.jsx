import React, { useState, useEffect } from "react";
import { FaTimes, FaDownload, FaExpand } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
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

const images = [
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
];

const Reunion = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-100">
      <h1
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800"
        data-aos="fade-down">
        🎉 Reunion Gallery
      </h1>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
            data-aos="zoom-in"
            data-aos-delay={idx * 40}>
            {/* Image */}
            <img
              src={img}
              alt={`Reunion ${idx + 1}`}
              className="w-full h-40 object-cover rounded-t-xl"
            />

            {/* Buttons */}
            <div className="flex gap-2 p-3">
              <button
                onClick={() => setSelectedImg(img)}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg 
                           bg-gray-800 text-white text-sm font-semibold 
                           hover:bg-gray-900 transition">
                <FaExpand /> View
              </button>

              <a
                href={img}
                download
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg 
                           bg-blue-600 text-white text-sm font-semibold 
                           hover:bg-blue-700 transition">
                <FaDownload /> Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Full Image Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImg}
              alt="Full View"
              className="w-full rounded-xl shadow-2xl animate__animated animate__fadeIn"
            />

            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-4 -right-4 w-10 h-10 
                         flex items-center justify-center 
                         bg-white rounded-full shadow 
                         hover:bg-red-500 hover:text-white transition">
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reunion;
