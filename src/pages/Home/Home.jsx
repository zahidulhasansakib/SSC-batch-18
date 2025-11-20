import { useEffect, useState, useContext } from "react";
import HeroSlider from "../../components/Hero/HeroSlider";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  const handleViewDetails = (id) => {
    if (!user) {
      toast.error("You must login first to view service details.");
      navigate("/auth/login");
      return;
    }
    navigate(`/services/${id}`); // logged in → go to service details
  };

  return (
    <div>
      <div className="space-y-10">
        <HeroSlider />
        {/* Other sections like Services, Tips, etc */}
      </div>

      <h2 className="text-2xl font-bold">Popular Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="bg-white rounded-2xl shadow-md p-4 
              transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl">
            <img
              src={service.image}
              className="w-full h-48 object-cover rounded-xl transition-all duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-semibold mt-3">
              {service.serviceName}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Rating: ⭐ {service.rating}
            </p>
            <p className="text-lg font-bold text-blue-600 mt-1">
              ${service.price}
            </p>
            <button
              onClick={() => handleViewDetails(service.serviceId)}
              className="btn btn-primary w-full mt-4 rounded-xl">
              View Details
            </button>
          </div>
        ))}
      </div>
      {/* SECTION: Winter Care Tips for Pets */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-6">
          Winter Care Tips for Pets ❄🐾
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
          Keep your furry friends warm, healthy and safe this winter with these
          expert tips.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tip 1 */}
          <div
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-2xl 
      transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold">Warm Clothing</h3>
            <p className="text-gray-600 mt-2">
              Use soft winter coats or sweaters especially for small or
              short-haired pets.
            </p>
          </div>

          {/* Tip 2 */}
          <div
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-2xl 
      transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold">Protect Their Paws</h3>
            <p className="text-gray-600 mt-2">
              Apply paw balms and clean their feet after walks to prevent
              dryness and cracking.
            </p>
          </div>

          {/* Tip 3 */}
          <div
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-2xl 
      transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold">Keep Them Hydrated</h3>
            <p className="text-gray-600 mt-2">
              Pets drink less water in winter—ensure they stay hydrated daily.
            </p>
          </div>
        </div>
      </div>
      {/* SECTION: Meet Our Expert Vets */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-6">
          Meet Our Expert Vets 👩‍⚕️🐶
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
          Our certified veterinarians ensure quality winter care and health
          support for your pets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vet 1 */}
          <div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl 
      transition-all duration-300 text-center hover:-translate-y-1">
            <img
              src="https://i.postimg.cc/YSmfSGRQ/pexels-photo-5214995.jpg"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Dr. Samantha Ray</h3>
            <p className="text-gray-600 text-sm mt-1">
              Winter Pet Nutrition Specialist
            </p>
          </div>

          {/* Vet 2 */}
          <div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl 
      transition-all duration-300 text-center hover:-translate-y-1">
            <img
              src="https://i.postimg.cc/Fs7fmtDg/pexels-photo-5452268.jpg"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Dr. Alex Johnson</h3>
            <p className="text-gray-600 text-sm mt-1">
              Cold Weather Pet Grooming Expert
            </p>
          </div>

          {/* Vet 3 */}
          <div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl 
      transition-all duration-300 text-center hover:-translate-y-1">
            <img
              src="https://i.postimg.cc/Jzjz4RJW/pexels-photo-4173251.jpg"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Dr. Mia Carter</h3>
            <p className="text-gray-600 text-sm mt-1">
              Winter Behavior & Safety Expert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
