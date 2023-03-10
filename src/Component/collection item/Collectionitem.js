import React from "react";
import { addItem } from "../../Redux/cart/cartAction";
import CustomButton from "../customButton/CustomButton";
import "./collectionitem.css";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../Redux/User/UserSelector";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
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
  const { name, price, imageUrl, rating, id, discountPercentage } = item;
  const likedItem = likeItem.find((likeitem) => likeitem.id === item.id);

  const discountPrice = (price * discountPercentage) / 100;

  return (
    <div className="collection-item">
      <Link to={`/singleproduct/${id}`}>
        <div
          className="image"
        // style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <img src={imageUrl} alt="" />
        </div>
      </Link>
      <div className="collection-footer">
        <Link to={`/singleproduct/${id}`} >
          <span className="name">{name}</span>
        </Link>


        <span className="price">
          {/* <FaRupeeSign className="price-icon" /> */}
          <span className="original-price">Rs. {price - discountPrice}</span>
          <span className="cutted-price"><s>Rs. {price}</s></span>
          <span className="discount-percentage">({discountPercentage} % off)</span>
        </span>



        <Star rating={rating} />
      </div>
      <div className="item-button">
        {currentUser ? (
          <CustomButton onClick={() => addItem(item)} >
            Add To Cart
          </CustomButton>
        ) : (
          <Link to={"/signin"}>
            <CustomButton >
              {" "}
              Add To cart{" "}
            </CustomButton>
          </Link>
        )}
        {likedItem ? (
          <AiFillHeart className="likee-icon" onClick={() => removeLike(item)} />
        ) : (
          <AiOutlineHeart className="likee-icon" onClick={() => addlike(item)} />
        )}
      </div>
    </div >
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
