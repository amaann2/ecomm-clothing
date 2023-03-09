import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import './star.css'
const Star = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, ind) => {
    let number = ind + 0.5;
    return (
      <span key={ind}>
        {rating >= ind + 1 ? (
          <FaStar className="star-icon" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="star-icon" />
        ) : (
          <AiOutlineStar className="star-icon" />
        )}
      </span>
    );
  });
  return <div>{ratingStar}</div>;
};

export default Star;
