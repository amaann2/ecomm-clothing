import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./cartDropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cartItem/CartItem";

import { selectCartItem } from "../../Redux/cart/cartSelector";
import { Link } from "react-router-dom";
import { toggleCart } from "../../Redux/cart/cartAction";
import { selectCurrentUser } from "../../Redux/User/UserSelector";

const CartDropdown = ({ cartItem, toggleCart, currentUser }) => {
  // {currentUser}
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {currentUser ? (
          cartItem.length ? (
            cartItem.map((ele) => <CartItem item={ele} key={ele.id} />)
          ) : (
            <span className="empty-cart">you have a empty cart</span>
          )
        ) : (
          <Link to={"/signin"}>
            <CustomButton> signin </CustomButton>
          </Link>
        )}
      </div>
      <Link to={"/checkout"}>
        <CustomButton onClick={toggleCart}>CHECKOUT </CustomButton>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItem: selectCartItem(state),
  currentUser: selectCurrentUser(state),
});
const mapDispatchToProps = (dispatch) => ({
  toggleCart: (toggle) => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
