import React from "react";
import { connect } from "react-redux";
import { selectShop } from "../../Redux/shop/shopSelector";
import Collectionpreview from "../collection preview/Collectionpreview";
import "./collectionoverview.scss";
const CollectionOverview = ({ data }) => {
  console.log(data)
  return (
    <div className="collection-overview">
      {data.title}
      {data.map((ele) => (
        <Collectionpreview key={ele.id} {...ele} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: selectShop(state),
});

export default connect(mapStateToProps)(CollectionOverview);
