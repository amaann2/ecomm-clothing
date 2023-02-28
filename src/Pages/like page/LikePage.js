import React from "react";
import { connect } from "react-redux";
import Collectionitem from "../../Component/collection item/Collectionitem";
import "../../Component/collection preview/collectionpreview.scss"
import "./likepage.scss"
const LikePage = ({ likeitem }) => {
    return (
        <div className="collection-preview">
            <h1 className="title"> WishList</h1>
            {likeitem < 1 ? "no item in like page" :
                <div className="item">
                    {likeitem.map((item) => (
                        <Collectionitem key={item.id} item={item} />
                    ))}
                </div>
            }
        </div>
    );
};

const mapstatetoprops = (state) => ({
    likeitem: state.like.likeItem,
});
export default connect(mapstatetoprops)(LikePage);
