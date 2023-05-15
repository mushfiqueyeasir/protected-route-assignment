import React from "react";

const MiniNavigation = () => {
  return (
    <div className="relative w-full flex justify-center">
      <div className="flex justify-center gap-2 lg:gap-4 p-2 lg:p-4 absolute mt-[-40px] z-[100] bg-white ">
        <a href="#slide1" className="w-[6rem] lg:w-[10rem]">
          <img
            src="https://cheerup.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/photo-1470376619031-a6791e534bf0.jpg"
            alt=""
          />
        </a>
        <a href="#slide2" className="w-[6rem] lg:w-[10rem]">
          <img
            src="https://cheerup.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/DSC_6314-2048x1367.jpg"
            alt=""
          />
        </a>
        <a href="#slide3" className="w-[6rem] lg:w-[10rem]">
          <img
            src="https://cheerup.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/beach_resort_with_sunbeds_in_asia-1-of-1-2-2048x1365.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default MiniNavigation;
