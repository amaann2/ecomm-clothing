import React from "react";
import { Link } from "react-router-dom";
import Collectionitem from "../collection item/Collectionitem";
import "./collectionpreview.scss";

const Collectionpreview = ({ title, id, items }) => {
  return (<>
    <div className="collection-preview">
      <h1 className="title">
        <Link to={`/shop/${id}`}>{title.toUpperCase()}</Link>
      </h1>
      <div className="preview">
        {items
          .filter((ele, id) => id < 4)
          .map((item) => (
            <Collectionitem key={item.id} item={item} />
          ))}
      </div>
    </div>
    <Link to={`/shop/${id}`}><button className="view-button">view more</button></Link>

  </>
  );
};

export default Collectionpreview;
