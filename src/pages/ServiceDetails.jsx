// src/pages/ServiceDetails.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.serviceId === parseInt(id));
        setService(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("You must login first to book a service!");
      return;
    }
    if (!bookingName || !bookingEmail) {
      toast.error("Please fill in all fields!");
      return;
    }
    toast.success(`Service booked successfully for ${bookingName}!`);
    setBookingName("");
    setBookingEmail("");
  };

  if (!service) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50">
      <div
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6"
        data-aos="fade-up">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-96 object-cover rounded-2xl mb-6"
          data-aos="zoom-in"
        />
        <h1 className="text-3xl font-bold mb-2">{service.serviceName}</h1>
        <p className="text-gray-600 mb-1">
          Provider: {service.providerName} ({service.providerEmail})
        </p>
        <p className="text-gray-600 mb-1">Category: {service.category}</p>
        <p className="text-gray-600 mb-1">
          Slots Available: {service.slotsAvailable}
        </p>
        <p className="text-gray-600 mb-1">Rating: ⭐ {service.rating}</p>
        <p className="text-blue-600 font-bold mb-4">${service.price}</p>
        <p className="text-gray-700 mb-6 whitespace-pre-line">
          {service.description}
        </p>

        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold mb-6">Book This Service</h2>
          <form onSubmit={handleBooking} className="space-y-5">
            <div className="relative" data-aos="fade-right">
              <input
                type="text"
                placeholder="Your Name"
                value={bookingName}
                onChange={(e) => setBookingName(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition duration-300"
                required
              />
            </div>

            <div className="relative" data-aos="fade-left">
              <input
                type="email"
                placeholder="Your Email"
                value={bookingEmail}
                onChange={(e) => setBookingEmail(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl font-semibold hover:scale-[1.03] transition-transform shadow-lg"
              data-aos="zoom-in">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
