import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ image, title, body, id }) => {
  return (
    <div className="grid gap-5 w-1/3">
      <img
        src={image}
        alt="mimage"
        className="w-full h-[300px] object-cover object-center "
      />
      <h1 className="text-xl font-medium text-gray-700">{title}</h1>
      <p>{body?.slice(0, 40)}</p>
      <Link
        to={`/detail/${id}`}
        className="text-sky-400">
        Read More
      </Link>
    </div>
  );
};

export default FeaturedCard;
