import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Featured from "../components/Featured";

const HomePage = () => {
  return (
    <div className="w-full ">
      <Hero />
      <Categories />
      <Featured />
    </div>
  );
};

export default HomePage;
