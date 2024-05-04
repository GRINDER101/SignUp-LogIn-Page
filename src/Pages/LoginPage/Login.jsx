import React, { useState } from 'react'
import "./login.css"
import Signup from '../SignupPage/Signup';
import Confirmationpage from '../ConfirmationPage/Confirmationpage';

const Login = ({ userdetails, userSignedin }) => {

    const [signuppage, setSignUpPage] = useState(false)
    const [loginconfirmation, IsloginConfirmed] = useState(false)
    const [logindetails, setLoginDetails] = useState({
        email: '',
        password: '',
    })
    function HandleSubmit(e) {
        e.preventDefault();
        if (userSignedin) {
            if (userdetails.email !== logindetails.email && userdetails.password !== logindetails.password) {
                setLoginDetails({ ...logindetails, email: '', password: '' })
                document.querySelector('.email').setAttribute('placeholder', 'Not a valid email address')
                document.querySelector('.email').classList.add('error');
                document.querySelector('.password').setAttribute('placeholder', 'Not a valid password')
                document.querySelector('.password').classList.add('error');
            } else if (userdetails.email !== logindetails.email) {
                setLoginDetails({ ...logindetails, email: '' })
                document.querySelector('.email').setAttribute('placeholder', 'Not a valid email address')
                document.querySelector('.email').classList.add('error');
            } else if (userdetails.password !== logindetails.password) {
                setLoginDetails({ ...logindetails, password: '' })
                document.querySelector('.password').setAttribute('placeholder', 'Not a valid password')
                document.querySelector('.password').classList.add('error');
            } else {
                IsloginConfirmed(true);
            }
        } else {
            alert("first register yourself with us.")
        }
    }
    return (
        <div>
            {loginconfirmation ? <Confirmationpage userdetails={userdetails} /> : signuppage ? <Signup /> : (<form id='loginform' onSubmit={HandleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input type="email" className='email' placeholder='type your email-address' value={logindetails.email} onChange={(e) => setLoginDetails({ ...logindetails, email: e.target.value })} />
                <label htmlFor='password'>Password</label>
                <input type="password" className='password' placeholder='type your password' value={logindetails.password} onChange={(e) => setLoginDetails({ ...logindetails, password: e.target.value })} />
                <div className='buttons'>
                    <button onClick={() => setSignUpPage(true)} className='btn btn-block'>SignUp (if not registered)</button>
                    <button type='submit' className='btn btn-block'>LogIn</button>
                </div>
            </form>)}
        </div >
    )
}

export default Login