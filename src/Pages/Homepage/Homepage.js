import React from "react";
import "./Homepage.scss";
import Directory from "../../Component/directory/Directory";
import Banner from "../../Component/Banner/Banner";
import Testimonial from "../../Component/testimonial/Testimonial";
import Brand from "../../Component/brand/Brand";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgData } from "./imagedata";
const Homepage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>

      <Slider
        {...settings}
        autoplay
        autoplaySpeed={2000}
        style={{ marginBottom:"3rem" }}
      >
        {imgData.map((img) =>
          <div className="slider-banner">
            <img src={img} alt="" className="img-slider" />
          </div>
        )}
      </Slider>
      {/* <Banner /> */}
      <div className="homepage">
        <Directory />
        <Testimonial />
        <Brand />
      </div>
    </>
  );
};
export default Homepage;
