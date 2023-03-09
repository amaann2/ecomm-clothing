import React from "react";
import { addItem } from "../../Redux/cart/cartAction";
import CustomButton from "../customButton/CustomButton";
import "./collectionitem.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../Redux/User/UserSelector";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { addLike, removeLike } from "../../Redux/like/likeaction";
import Star from "../Star/Star";
const Collectionitem = ({
  item,
  addItem,
  currentUser,
  addlike,
  likeItem,
  removeLike,
}) => {
  const { name, price, imageUrl, rating, id } = item;
  const likedItem = likeItem.find((likeitem) => likeitem.id === item.id);

  return (
    <Link to={`/singleproduct/${id}`}>
      <div className="collection-item">
        {likedItem ? (
          <AiFillHeart className="like-icon" onClick={() => removeLike(item)} />
        ) : (
          <AiOutlineHeart className="like-icon" onClick={() => addlike(item)} />
        )}
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">
            <FaRupeeSign className="price-icon" />
            {price}
            {id}
          </span>
          <Star rating={rating} />
        </div>
        {currentUser ? (
          <CustomButton onClick={() => addItem(item)} inverted>
            Add To Cart
          </CustomButton>
        ) : (
          //
          <CustomButton inverted>
            {" "}
            <Link to={"/signin"}>Add To cart</Link>{" "}
          </CustomButton>
          //
        )}
      </div>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addlike: (item) => dispatch(addLike(item)),
  removeLike: (item) => dispatch(removeLike(item)),
});
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  likeItem: state.like.likeItem,
});
export default connect(mapStateToProps, mapDispatchToProps)(Collectionitem);
