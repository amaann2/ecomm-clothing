import React from "react";
import "./menu-item.scss";
const Menu = ({ title, image, size }) => {
  return (
    <>
      <div
        className={`${size} menu-item`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="content">
          <div className="title">{title}</div>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </>
  );
};

export default Menu;
