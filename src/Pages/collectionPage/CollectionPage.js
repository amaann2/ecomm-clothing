import React from "react";
import { useParams } from "react-router-dom";
import { selectShop } from "../../Redux/shop/shopSelector";
import { connect } from "react-redux";
import './collectionpage.scss'
import Collectionitem from "../../Component/collection item/Collectionitem";
const CollectionPage = ({ data }) => {
  const { id } = useParams();
  const product = data.find((prod) => prod.id === parseInt(id));
  const { title, items } = product;
  return <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="items">
      {items.map(item => (
        <Collectionitem key={item.id} item={item} />
      ))}
    </div>
  </div>;
};
const mapStateToProps = (state) => ({
  data: selectShop(state),
});

export default connect(mapStateToProps)(CollectionPage);
