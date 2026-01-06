// src/pages/ServiceDetails.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import student1 from "../assets/students/student1.jpg";
import student2 from "../assets/students/student2.jpg";
import student3 from "../assets/students/student3.jpg";
import student4 from "../assets/students/student4.jpg";
import student5 from "../assets/students/student5.jpg";
import student6 from "../assets/students/student6.jpg";
import student7 from "../assets/students/student7.jpg";
import student8 from "../assets/students/student8.jpg";
import student9 from "../assets/students/student9.jpg";
import student10 from "../assets/students/student10.jpg";
import student11 from "../assets/students/student11.jpg";
import student12 from "../assets/students/student12.jpg";
import student13 from "../assets/students/student13.jpg";
import student14 from "../assets/students/student14.jpg";
import student15 from "../assets/students/student15.jpg";
import student16 from "../assets/students/student16.jpg";
import student17 from "../assets/students/student17.jpg";
import student18 from "../assets/students/student18.jpg";
import student19 from "../assets/students/student19.jpg";
import student20 from "../assets/students/student20.jpg";

// Map imageKey to images
const studentImageMap = {
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10,
  student11,
  student12,
  student13,
  student14,
  student15,
  student16,
  student17,
  student18,
  student19,
  student20,
};

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setService(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!service) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      <div
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10"
        data-aos="fade-up">
        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={studentImageMap[service.imageKey]}
            alt={service.name}
            className="w-64 h-64 sm:w-96 sm:h-96 object-cover rounded-full shadow-lg border-4 border-white"
            data-aos="zoom-in"
          />
        </div>

        {/* BASIC INFO */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-purple-700 text-center">
          {service.name}
        </h1>
        <p className="text-gray-700 mb-1 font-semibold text-center">
          {service.profession}
        </p>
        <p className="text-gray-600 mb-1 text-center">
          Marital Status:{" "}
          <span className="font-medium">{service.maritalStatus}</span>
        </p>
        <p className="text-gray-600 mb-1 text-center">
          Address: {service.address}
        </p>
        <p className="text-gray-600 mb-1 text-center">
          Date of Birth: {service.dob}
        </p>
        <p className="text-gray-600 mb-6 text-center">
          Facebook:{" "}
          <a
            href={service.facebook}
            target="_blank"
            className="text-blue-600 underline">
            {service.facebook}
          </a>
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Call Button */}
          <button
            onClick={() => (window.location.href = `tel:${service.whatsapp}`)}
            className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl font-semibold hover:scale-105 transition-transform shadow-lg text-center">
            📞 Call Now
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={() =>
              window.open(
                `https://wa.me/${service.whatsapp.replace("+", "")}`,
                "_blank"
              )
            }
            className="flex-1 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl font-semibold hover:scale-105 transition-transform shadow-lg text-center">
            💬 Chat on WhatsApp
          </button>
        </div>

        {/* EXTRA INFO */}
        <div className="mt-8 bg-purple-50 rounded-2xl p-5 shadow-inner">
          <h2 className="text-2xl font-semibold mb-3 text-purple-700">
            More Info
          </h2>
          <p className="text-gray-700 whitespace-pre-line">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor purus id diam fermentum, a tincidunt lorem blandit. Curabitur
            vitae turpis vitae nunc dictum fermentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
