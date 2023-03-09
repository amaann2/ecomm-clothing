import React from "react";
import { useParams } from "react-router-dom";
import { selectShop } from "../../Redux/shop/shopSelector";
import { connect } from "react-redux";
import "./collectionpage.scss";
import Collectionitem from "../../Component/collection item/Collectionitem";
import { useState } from "react";
import CustomButton from "../../Component/customButton/CustomButton";
const CollectionPage = ({ data }) => {
  const { id } = useParams();
  const product = data.find((prod) => prod.id === parseInt(id));
  const { title, items } = product;
  const [value, setvalue] = useState();
  // const filter = (e) => {
  //   const valuee = e.target.value;
  //   setvalue(valuee);
  // };
  const filterproduct = items.filter(
    (data) => data.price < value && data.price > value - 10000
  );
  const productToRender = value ? filterproduct : items;
  const showAll = () => {
    setvalue(null);
  };
  return (
    <div className="collection-page">
      <div className="heading">
        <h2 className="title">{title}</h2>
        {/* <select
          name="price"
          id="price"
          className="dropdownlist"
          onChange={filter}
        >
          <option defaultValue selected>
            Filter By Price
          </option>
          <option value="10000">0 - 10000</option>
          <option value="20000">10000 - 20000</option>
          <option value="30000">20000 - 30000</option>
          <option value="40000">30000 - 40000</option>
        </select> */}
      </div>
      <div className="items">
        {productToRender.length === 0 ? (
          <>
            <span>no item to show ! </span>
            <CustomButton onClick={showAll}>show all product</CustomButton>
          </>
        ) : (
          productToRender.map((item) => (
            <Collectionitem key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: selectShop(state),
});

export default connect(mapStateToProps)(CollectionPage);
