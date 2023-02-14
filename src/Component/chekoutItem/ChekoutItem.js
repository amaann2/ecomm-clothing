import React from "react";
import { connect } from "react-redux";
import { addItem, deleteItem , removeItem } from "../../Redux/cart/cartAction";
import "./checkoutitem.scss";
const ChekoutItem = ({ item, deleteItem, addItem, removeItem }) => {
    const { price, imageUrl, name, quantity } = item;
    return (
        <div className="chekout-item">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(item)}>
                    &#10094;
                </div>
                {quantity}
                <div className="arrow" onClick={() => addItem(item)}>
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => deleteItem(item)}>
                &#10005;
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    deleteItem: (item) => dispatch(deleteItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(ChekoutItem);
