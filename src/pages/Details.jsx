import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/dataset.json";

const Details = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    setNews(data.filter((d) => d.id === parseInt(id))[0]);
  }, []);

  console.log(news);
  return (
    <div className="px-20 mt-10">
      <img
        src={news.news_image}
        alt=""
        className="w-full rounded-md shadow h-[250px]"
      />
      <h1 className="text-xl font-medium tracking-wide text-gray-800 mt-5">
        {news.title}
      </h1>

      <p>
        {news.body}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, enim
        nam quia consequatur voluptates ipsa qui quos nesciunt, totam
        voluptatibus obcaecati soluta fugiat a similique voluptatum, voluptate
        aspernatur culpa recusandae atque explicabo aperiam repellat?
        Perspiciatis eum quisquam ea explicabo dignissimos soluta illo cum
        libero. Rerum cupiditate voluptatem est dolores ipsum iure eveniet animi
        dignissimos iste minima ab pariatur tempore nostrum fuga placeat
        deleniti in, exercitationem sunt numquam magni quos quidem tenetur
        officia! Distinctio dolorum, nisi dolor commodi sunt quod placeat
        accusamus, molestias quae cum temporibus odit tempora architecto
        aspernatur! Blanditiis et tempora alias ratione ullam asperiores maxime
        nostrum minus nulla.
      </p>
    </div>
  );
};

export default Details;
