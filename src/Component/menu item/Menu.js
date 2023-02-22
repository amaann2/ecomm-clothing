import React from "react";
import { Link } from "react-router-dom";
import "./menu-item.scss";
const Menu = ({ title, image, size, linkUrl }) => {
  return (
    <>
      <div
        className={`${size} menu-item`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <Link to={linkUrl}>
          <div className="content">
            <div className="title">{title}</div>
            <span className="subtitle">shop now</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Menu;
