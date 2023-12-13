import data from "../assets/dataset.json";

const Hero = () => {
  const headline = data.filter((a) => a.headliner)[2];

  return (
    <div className="w-full flex items-center gap-10 mt-10 px-10 justify-center">
      <img
        src={headline.news_image}
        alt="headline image"
        className="w-3/4 h-[45dvh] object-cover object-center rounded-md shadow"
      />
      <div className="w-2/4">
        <h1 className="text-3xl font-semibold text-gray-800 tracking-wider">
          {headline.title}
        </h1>
        <p className="text-lg font-light text-gray-600">{headline.body}</p>
      </div>
    </div>
  );
};

export default Hero;
