import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Cart } from "../../assests/cart.svg";
import "./cart-icon.scss";
import { toggleCart } from "../../Redux/cart/cartAction";
import { selectCartItemCount } from "../../Redux/cart/cartSelector";

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <Cart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
