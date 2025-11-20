// src/pages/ServiceDetails.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  // const { user } = useContext(AuthContext);

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
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full h-96 object-cover rounded-2xl mb-6"
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
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                value={bookingName}
                onChange={(e) => setBookingName(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition duration-300"
                required
              />
              <span className="absolute left-4 top-3 text-gray-400 pointer-events-none">
                
              </span>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                value={bookingEmail}
                onChange={(e) => setBookingEmail(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition duration-300"
                required
              />
              <span className="absolute left-4 top-3 text-gray-400 pointer-events-none">
                
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl font-semibold hover:scale-[1.03] transition-transform shadow-lg">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
