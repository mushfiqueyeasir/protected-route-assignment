import React from "react";
import Slide from "./Slide";
import MiniNavigation from "./MiniNavigation";

const Banner = () => {
  return (
    <section>
      <div className="carousel w-full h-[80vh]">
        <Slide
          id="slide1"
          image="https://cheerup.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/photo-1470376619031-a6791e534bf0.jpg"
          slogan="The Only Trend Everyone Cares For is Getting Fit"
          quote="By Shane Doe"
          next="#slide2"
          prev="#slide3"
        />
        <Slide
          id="slide2"
          image="https://cheerup.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/DSC_6314-2048x1367.jpg"
          slogan="Go For a Quick Swim"
          quote="By Shane Doe"
          next="#slide3"
          prev="#slide1"
        />
        <Slide
          id="slide3"
          image="https://cheerup.theme-sphere.com/bold/wp-content/uploads/sites/8/2016/05/beach_resort_with_sunbeds_in_asia-1-of-1-2-2048x1365.jpg"
          slogan="Spend Your Last Day On This Beautiful Resort"
          quote="By Shane Doe"
          next="#slide1"
          prev="#slide2"
        />
      </div>
      <MiniNavigation />
    </section>
  );
};

export default Banner;
