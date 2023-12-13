import React from "react";
import categories from "../assets/cat.json";
import Card from "./Card";
const Categories = () => {
  return (
    <div className="px-10 mt-10">
      <h1 className="text-xl font-medium text-gray-600 mt-5">Categories</h1>

      <div className=" flex gap-20 items-center mt-5 pb-10 w-[94dvw] overflow-hidden overflow-x-scroll rms">
        {categories.map((c, i) => (
          <Card
            catmage={c.cat_image}
            name={c.category}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
