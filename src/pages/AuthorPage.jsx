import React from "react";
import { useParams } from "react-router-dom";
import { joinName, splitName } from "../util/util";
import data from "../assets/dataset.json";
import ProfileNewsCard from "../components/ProfileNewsCard";
const AuthorPage = () => {
  const { name } = useParams();
  const posts = data.filter((d) => joinName(d.author) === name);

  return (
    <div className=" px-10 flex w-full h-screen">
      <div className="w-2/5 bg-gray-300  h-full flex flex-col items-center pt-10 gap-5 px-5">
        <img
          src="http://dummyimage.com/130x100.png/5fa2dd/ffffff"
          alt="uuthor"
          className="w-48 h-48 object-cover object-center rounded-full shadow"
        />
        <h1 className="capitalize text-xl font-semibold text-gray-600">
          {splitName(name)}
        </h1>
        <ul className="flex w-full p-3 bg-white rounded-md shadow justify-between items-center px-5">
          <li>Posts</li>
          <li>Follows</li>
          <li>Likes</li>
        </ul>
      </div>
      <div className="w-3/5 bg-gray-100  h-full flex flex-col gap-10 px-10 pt-10 overflow-hidden overflow-y-scroll">
        {posts.map((p, i) => (
          <ProfileNewsCard
            title={p.title}
            image={p.news_image}
            id={p.id}
            body={p.body}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthorPage;
