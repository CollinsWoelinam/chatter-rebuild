import React from "react";

const Card = ({ catmage, name }) => {
  return (
    <div className="flex flex-col hover:scale-100 duration-700">
      <div className="m-auto">
        <div className="h-48 w-56  rounded-t-lg relative">
          <img
            className="h-48 w-56 rounded-t-lg"
            src={catmage}
            alt="category image"
          />
        </div>
        <div className="h-16 w-56 rounded-lg relative">
          <div className="text-black font-inter text-base h-16 w-56 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
            <h3 className="ml-2 pt-3">{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
