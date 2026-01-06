// src/pages/Service.jsx
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";

// Import all student images
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

const imageMap = {
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

const Service = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  const handleViewDetails = (id) => {
    if (!user) {
      toast.error("Login first to view student details");
      navigate("/auth/login");
      return;
    }
    navigate(`/services/${id}`);
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10">
        SSC Batch 2018 Students
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105">
            <img
              src={imageMap[student.imageKey]}
              alt={student.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{student.name}</h2>
            <p className="text-gray-500 mb-1">
              Profession: {student.profession}
            </p>
            <p className="text-gray-500 mb-1">
              Marital Status: {student.maritalStatus}
            </p>
            <p className="text-gray-500 mb-1">Section: {student.section}</p>
            <p className="text-gray-500 mb-1">Roll: {student.roll}</p>
            <p className="text-gray-600 mb-3">{student.bio}</p>
            <button
              onClick={() => handleViewDetails(student.id)}
              className="w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:scale-[1.02] transition-transform">
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
