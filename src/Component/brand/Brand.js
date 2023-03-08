import React from 'react'
import './brand.css'
import img1 from '../../assests/logo-godrej.png'
import img2 from '../../assests/logo-oppo.png'
import img3 from '../../assests/logo-paypal.png'
import img4 from '../../assests/logo-philips.png'
import img5 from '../../assests/logo-coca-cola.png'
const Brand = () => {
    return (
        <div class="brands">
            <div class="small-container">
                <div class="row">
                    <div class="col-5">
                        <img src={img1} alt="" />
                    </div>

                    <div class="col-5">
                        <img src={img2} alt="" />

                    </div>


                    <div class="col-5">
                        <img src={img3} alt="" />

                    </div>

                    <div class="col-5">
                        <img src={img4} alt="" />

                    </div>

                    <div class="col-5">
                        <img src={img5} alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand