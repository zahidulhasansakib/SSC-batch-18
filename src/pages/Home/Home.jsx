// src/pages/Home/Home.jsx
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import HeroSlider from "../../components/Hero/HeroSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

// Import student images
import student1 from "../../assets/students/student1.jpg";
import student2 from "../../assets/students/student2.jpg";
import student3 from "../../assets/students/student3.jpg";
import student4 from "../../assets/students/student4.jpg";
import student5 from "../../assets/students/student5.jpg";
import student6 from "../../assets/students/student6.jpg";
import student7 from "../../assets/students/student7.jpg";
import student8 from "../../assets/students/student8.jpg";

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
};

const Home = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const { user } = useContext(AuthContext);

  // Fetch students JSON
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="space-y-16 pt-24">
      {" "}
      {/* pt-24 for navbar spacing */}
      {/* HERO SLIDER */}
      <HeroSlider />
      {/* STUDENT CARDS */}
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeInDown"
          data-aos="fade-down">
          Featured Students
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {students.slice(0, 8).map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl shadow-md p-4 transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
              data-aos="fade-up">
              <img
                src={studentImageMap[student.imageKey]}
                alt={student.name}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
              <h3 className="text-lg font-semibold">{student.name}</h3>
              <p className="text-gray-500 text-sm">
                Profession: {student.profession}
              </p>
              <p className="text-gray-500 text-sm">
                Marital Status: {student.maritalStatus}
              </p>
              <button
                onClick={() => {
                  if (!user) {
                    toast.error("Login first to view student details");
                    navigate("/auth/login");
                    return;
                  }
                  navigate(`/services/${student.id}`);
                }}
                className="w-full py-2 mt-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:scale-[1.02] transition-transform">
                See Details
              </button>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/services")}
            className="py-2 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:scale-[1.02] transition-transform">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
