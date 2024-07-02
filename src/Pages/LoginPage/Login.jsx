import React from 'react'
import "./login.css"

const Login = ({ HandleSubmitforLoginForm, setLoginDetails, logindetails, setuserSignedin, openIntroAndIconInvisible, iconVisible }) => {

    return (
        <div className='logIn'>
            <div className='intro'>
                {iconVisible && <div id='show-intro' onClick={() => openIntroAndIconInvisible()}>
                    <i className="ri-arrow-left-double-line"></i>
                </div>}
            </div>
            <form id='loginform' onSubmit={HandleSubmitforLoginForm}>
                <label htmlFor='email'>Email Address</label>
                <input type="email" className='email' placeholder='type your email-address' value={logindetails.email} onChange={(e) => setLoginDetails({ ...logindetails, email: e.target.value })} />
                <label htmlFor='password'>Password</label>
                <input type="password" className='password' placeholder='type your password' value={logindetails.password} onChange={(e) => setLoginDetails({ ...logindetails, password: e.target.value })} />
                <div className='buttons'>
                    <button onClick={() => setuserSignedin(false)} className='btn btn-block'>SignUp (if not registered)</button>
                    <button type='submit' className='btn btn-block'>LogIn</button>
                </div>
            </form>
        </div >
    )
}

export default Login
