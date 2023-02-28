import React from "react";
import './cartItem.scss'
import { FaRupeeSign } from "react-icons/fa";
const CartItem = ({ item }) => {
    const { imageUrl, name, price, quantity } = item
    return <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x   <FaRupeeSign className="icon-rupees"/> {price}</span>
        </div>
    </div>;
};

export default CartItem;
