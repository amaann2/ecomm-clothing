import React from "react";
import { connect } from "react-redux";
// import { ReactComponent as Cart } from "../../assests/cart.svg";
import "./cart-icon.scss";
import { toggleCart } from "../../Redux/cart/cartAction";
import { selectCartItemCount } from "../../Redux/cart/cartSelector";
import { selectCurrentUser } from "../../Redux/User/UserSelector";
import { AiOutlineShopping } from "react-icons/ai";
const CartIcon = ({ toggleCart, itemCount, currentUser }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      {/* <Cart className="shopping-icon" /> */}
      <AiOutlineShopping className="shopping-icon" />
      <span className="item-count">{currentUser ? itemCount : 0}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
