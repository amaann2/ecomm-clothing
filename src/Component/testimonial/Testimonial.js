import React from 'react'
import './testimonial.css'
import img from '../../assests/user-1.png'
import imgg from '../../assests/user-2.png'
import imggg from '../../assests/user-3.png'
const Testimonial = () => {
    return (
        <div class="testimonial">
            <h3 className='center'>Testimonial</h3>
            <div class="small-container">
                <div class="row">
                    <div class="col-3">
                        &#9733;&#9733;&#9733;&#9734;&#9734;
                        <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque distinctio
                            doloribus et incidunt ipsam aut sit, eveniet consequatur similique veniam.&ldquo;</p>
                        <img src={img} alt="" />
                        <h3>Sean parker</h3>
                    </div>
                    <div class="col-3">
                        &#9733;&#9733;&#9733;&#9733;&#9734;
                        <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque distinctio
                            doloribus et incidunt ipsam aut sit, eveniet consequatur similique veniam.&ldquo;</p>
                        <img src={imgg} alt="" />
                        <h3>Paul Walker</h3>
                    </div>
                    <div class="col-3">
                        &#9733;&#9733;&#9733;&#9734;&#9734;
                        <p> &ldquo; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque distinctio
                            doloribus et incidunt ipsam aut sit, eveniet consequatur similique veniam.&ldquo;</p>
                        <img src={imggg} alt="" />

                        <h3> john doe</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial