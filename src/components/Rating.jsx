import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Stars from "react-rating";

const Rating = ({ number }) => {
  // console.log(number, "props in rating");
  return (
    <div>
      {/* <Rating initialRating={rating} /> */}
      <Stars
        emptySymbol={<FaRegStar />}
        fullSymbol={<FaStar />}
        initialRating={number}
        readonly
      />
    </div>
  );
};

export default Rating;
