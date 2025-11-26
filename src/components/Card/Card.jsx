import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  image,
  tag,
  title,
  name,
  option1,
  option2,
  link,
  buttonText,
}) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
      data-aos="fade-up">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover hover:scale-105 transition duration-300"
      />

      <div className="p-4">
        <p className="text-sm text-purple-500 font-medium mb-1">{tag}</p>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{name}</p>

        <div className="flex justify-between items-center text-sm text-gray-700">
          <span>{option1}</span>
          <span>{option2}</span>
        </div>

        <Link
          to={link}
          className="block mt-4 w-full text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
