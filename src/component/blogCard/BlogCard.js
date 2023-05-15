import React from "react";

const BlogCard = ({ genre }) => {
  return (
    <div className=" bg-base-100 shadow-xl cursor-pointer">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={`https://source.unsplash.com/featured/?${genre}`}
          className="w-[33rem] h-[20rem] rounded-xl hover:scale-[1.1] duration-300"
          alt="Movie"
        />
      </div>
    </div>
  );
};

export default BlogCard;
