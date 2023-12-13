import React from "react";
import data from "../assets/dataset.json";
import FeaturedCard from "./FeaturedCard";
const Featured = () => {
  const featured = data
    .filter((a) => a.featured && a.news_image !== null)
    .slice(5, 8);
  return (
    <div className="px-10 mt-10">
      <h1 className="text-xl font-medium text-gray-600 mt-5">Featured</h1>
      <div className="flex gap-10 mt-5 px-10">
        {featured.map((f, i) => (
          <FeaturedCard
            key={i}
            image={f.news_image}
            title={f.title}
            body={f.body}
            id={f.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
