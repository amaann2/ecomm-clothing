import React, { useState } from "react";
import Collectionpreview from "../../Component/collection preview/Collectionpreview";
import SHOP_DATA from "./shopdata";


const Shop = () => {
    const [data] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            {
                data.map((ele) => (
                    <Collectionpreview key={ele.id} {...ele} />
                ))
            }
        </div>
    );
};

export default Shop;
