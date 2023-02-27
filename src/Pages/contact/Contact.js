import React from 'react'
import CustomButton from '../../Component/customButton/CustomButton'
import FormInput from '../../Component/formInput/FormInput'

const Contact = () => {
    return (
        <div className='sign-in'>
            <h2 className='title'>Contact form</h2>
            <form action="">

                <FormInput type="text" name="name" required  placeholder="Enter Name"/>
                <FormInput type="email" name="email" required  placeholder="Enter Email" />
                <FormInput type="text" name="message " required   placeholder="Enter Message"/>
                <div className="buttons">
                    <CustomButton>Contact us</CustomButton>
                </div>
            </form>

        </div>
    )
}

export default Contact