import React from 'react'
import './banner.scss'
import img from '../../assests/image1.png'
const Banner = () => {
    return (

        <div className='banner'>
            <div className="row">
                <div className="col-2">
                    <h1>Give Your Workout <br />A New Style</h1>
                    <p>Success isn't always about Greatness. It's about Consistency. Consistent <br />
                        Hard work gains Success . Greatness will come</p>
                    <a href="product.html" className="btn">Explore Now &#8594;</a>
                </div>
                <div className="col-2">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>


    )
}

export default Banner