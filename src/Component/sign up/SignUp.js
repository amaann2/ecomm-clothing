import React, { useState } from 'react'
import './signUp.scss'
import FormInput from '../formInput/FormInput'
import CustomButton from '../customButton/CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase'
const SignUp = () => {
    const [input, setinput] = useState({})
    const handleChange = (e) => {
        const { value, name } = e.target;
        setinput((values) => ({ ...values, [name]: value }));
    };
    const handleForm = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmpassword } = input
        console.log('hello')
        if (password === confirmpassword) {
            alert("Password don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            setinput("");
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleForm}>
                <FormInput type='text' name='displayName' value={input.displayName || ""} onChange={handleChange} label='Display Name' />
                <FormInput type='email' name='email' value={input.email || ""} onChange={handleChange} label='email' />
                <FormInput type='password' name='password' value={input.password || ""} onChange={handleChange} label='password' />
                <FormInput type='password' name='confirmpassword' value={input.confirmpassword || ""} onChange={handleChange} label=' confirm password' />
                <CustomButton type='submit' >SIGN UP </CustomButton>
            </form>
        </div>
    )
}

export default SignUp