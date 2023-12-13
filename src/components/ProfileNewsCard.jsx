import React from "react";
import { Link } from "react-router-dom";

const ProfileNewsCard = ({ image, body, title, id }) => {
  return (
    <div className="grid gap-5 w-full grid-cols-6 h-fit rounded-md shadow bg-white">
      <div className="col-span-2 overflow-hidden h-[200px] ">
        <img
          src={image}
          alt="mimage"
          className="h-full object-cover object-center w-full"
        />
      </div>
      <div className="col-span-4 p-4">
        <h1 className="text-xl font-medium text-gray-700">{title}</h1>
        <p>{body?.slice(0, 40)}</p>
        <Link
          to={`/detail/${id}`}
          className="text-sky-400">
          Read More
        </Link>

        <div>
          <div>
            Likes: <span>3</span>
          </div>
          <div>
            Comments: <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNewsCard;
