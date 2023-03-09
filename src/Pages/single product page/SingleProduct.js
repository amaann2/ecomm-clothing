import React from "react";
import { useParams } from "react-router-dom";
import { selectShop } from "../../Redux/shop/shopSelector";
import { connect } from "react-redux";
import "./singleproduct.css";
import CustomButton from "../../Component/customButton/CustomButton";
import Star from "../../Component/Star/Star";
import { addItem } from "../../Redux/cart/cartAction";
const SingleProduct = ({ data, addItem }) => {
  const { id } = useParams();
  const item = data
    .flatMap(({ items }) => items)
    .find((item) => item.id === Number(id));
  const { name, imageUrl, price, rating } = item

  return (
    <div className="single-product">
      <div className="row">
        <div className="col-2">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-2">
          <h1>{name}</h1>
          <h4>$ {price}</h4>
          <Star rating={rating} />
          <h3>Product Detail</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.eli Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam esse culpa explicabo eveniet, deserunt alias suscipit omnis minima praesentium?
          </p>
          <br />
          <CustomButton onClick={() => addItem(item)}>add to cart</CustomButton>
          <br />
          <CustomButton >Add to Wishlist</CustomButton>
        </div>
      </div>
    </div>
  )
};
const mapStateToProps = (state) => ({
  data: selectShop(state),
});
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
