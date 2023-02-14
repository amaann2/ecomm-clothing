import React from "react";
import { connect } from "react-redux";
import ChekoutItem from "../../Component/chekoutItem/ChekoutItem";
import { selectCartItem } from "../../Redux/cart/cartSelector";
import { selectCartTotal } from "../../Redux/cart/cartSelector";
import './checkout.scss'
const CheckOut = ({ cartItem, total }) => {
    return <div className="checkout-page">
        <div className="chekout-header">
            <div className="header-block">
                <span>product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span> Remove </span>
            </div>
        </div>
        {
            cartItem.map(item => <ChekoutItem item={item } key={item.id} />)
        }
        <div className="total">TOTAL :${total}</div>
    </div>;
};
const mapStateToProps = state => ({
    cartItem: selectCartItem(state),
    total: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckOut);
