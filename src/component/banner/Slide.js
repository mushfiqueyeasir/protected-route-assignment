import React from "react";

const Slide = ({ id, image, slogan, quote, next, prev }) => {
  return (
    <div id={id} className="carousel-item relative w-full slide">
      <div className="w-full image-container">
        <img src={image} alt="image1" className="w-full bannerImage " />
      </div>

      <div className="absolute flex flex-col gap-y-4 justify-center items-center w-full mx-auto h-full z-50 px-4">
        <h2 className="text-center text-white text-2xl lg:text-6xl font-extrabold w-full lg:w-[50%]">
          {slogan}
        </h2>
        <p className="text-center text-white  font-semibold tracking-tighter">
          {quote}
        </p>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
        <a href={prev} className="btn btn-circle slideButton duration-500">
          ❮
        </a>
        <a href={next} className="btn btn-circle slideButton duration-500">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slide;
