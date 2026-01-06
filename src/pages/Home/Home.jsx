// src/pages/Home/Home.jsx
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import HeroSlider from "../../components/Hero/HeroSlider";
import AOS from "aos";
import "aos/dist/aos.css";

// Students Images
import student1 from "../../assets/students/student1.jpg";
import student2 from "../../assets/students/student2.jpg";
import student3 from "../../assets/students/student3.jpg";
import student4 from "../../assets/students/student4.jpg";
import student5 from "../../assets/students/student5.jpg";
import student6 from "../../assets/students/student6.jpg";
import student7 from "../../assets/students/student7.jpg";
import student8 from "../../assets/students/student8.jpg";

// Teachers Images
import teacher1 from "../../assets/teacher/teacher1.jpeg";
import teacher2 from "../../assets/teacher/teacher2.jpeg";
import teacher3 from "../../assets/teacher/teacher3.jpeg";
import teacher4 from "../../assets/teacher/teacher4.jpeg";
import teacher5 from "../../assets/teacher/teacher5.jpeg";
import teacher6 from "../../assets/teacher/teacher6.jpeg";

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

const teachers = [
 
  {
    name: "Md Mostafa Kamal",
    img: teacher1,
    desc: "A highly respected educator, guiding students with wisdom and experience, inspiring a love for learning in every heart.",
  },
  {
    name: "Md Jafor Ullah",
    img: teacher2,
    desc: "Renowned for dedication and mentorship, he nurtures young minds to achieve excellence and integrity in life.",
  },
  {
    name: "MD Mofizul Islam",
    img: teacher3,
    desc: "A visionary teacher, who dedicated his life to educating and inspiring students. May Allah grant him eternal peace and Jannat, and may his legacy continue to inspire generations of learners.",
  },
  {
    name: "Md Hadayet Ullah",
    img: teacher4,
    desc: "Known for his warmth and knowledge, he shapes future leaders with care, discipline, and empathy.",
  },
  {
    name: "Abdul Hakim Bhuiyan",
    img: teacher5,
    desc: "A pillar of guidance, he fosters creativity and critical thinking, instilling confidence in every student he mentors.",
  },
  {
    name: "Md Mubarak Hossain",
    img: teacher6,
    desc: "With unparalleled dedication, he inspires excellence and encourages students to embrace learning as a lifelong journey.",
  },


];

const Home = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Fetch students JSON
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  return (
    <div className="space-y-16">
      {/* HERO SLIDER */}
      <HeroSlider />

      {/* STUDENT CARDS */}
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-8"
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

      {/* MEET OUR HONOURABLE TEACHERS */}
      <section className="py-16 bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-700"
          data-aos="fade-down">
          Meet Our Honourable Teachers
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col items-center p-5"
              data-aos="fade-up"
              data-aos-delay={idx * 100}>
              {/* Circular Image */}
              <div className="w-60 h-60 mb-4">
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-full object-cover rounded-full border-4 border-purple-300 shadow-md"
                />
              </div>

              {/* Card Body */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-purple-700">
                  {teacher.name}
                </h3>
                <p className="text-indigo-500 font-semibold mb-2">
                  Respected Teacher
                </p>
                <p className="text-gray-700 text-sm">{teacher.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
