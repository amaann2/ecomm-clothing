import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";
import { selectCurrentUser } from "../../Redux/User/UserSelector";
import { selectCartHidden } from "../../Redux/cart/cartSelector";
import { AiOutlineHeart } from "react-icons/ai";
const Header = ({ currentUser, hidden , likeItem }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/" className="option">
          Home
        </Link>
        <Link to="/shop" className="option">
          Shop
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}
        <CartIcon />
        <Link className="option" to="/likePage">
          <AiOutlineHeart className="like-icon" />
          <span className="count">{likeItem.length}</span> 
        </Link>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
  likeItem : state.like.likeItem
});
export default connect(mapStateToProps)(Header);
