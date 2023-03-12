import React from "react";
import "./brand.css";
import img1 from "../../assests/brand1.png.webp";
import img2 from "../../assests/brand2.png.webp";
import img3 from "../../assests/brand3.png.webp";
import img4 from "../../assests/brand4.png.webp";
import img5 from "../../assests/brand5.png.webp";
import img6 from "../../assests/brand6.png.webp";
const Brand = () => {
  const image = [img1, img2, img3, img4, img5, img6];
  return (
    <div class="brands">
      <div class="big-container">
        <div class="row">
          {image.map((imgg) => (
            <div class="col-5">
              <img src={imgg} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
