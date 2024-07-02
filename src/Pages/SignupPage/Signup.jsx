import React from 'react'
import "./signup.css"

const Signup = ({ HandleSubmitforSignupForm, setUserdetails, userdetails, openIntroAndIconInvisible, iconVisible }) => {
    return (
        <div className='SignUp'>
            <div className='intro'>
                {iconVisible && <div id='show-intro' onClick={() => openIntroAndIconInvisible()}>
                    <i className="ri-arrow-left-double-line"></i>
                </div>}
            </div>
            <form onSubmit={(e) => HandleSubmitforSignupForm(e)} id='signupform'>
                <label htmlFor='text'>First Name</label>
                <input type="text" id='fname' placeholder='type your first name' onChange={(e) => setUserdetails({ ...userdetails, fname: e.target.value })} />
                <label htmlFor='text'>Last Name</label>
                <input type="text" id='lname' placeholder='type your last name' value={userdetails.lname} onChange={(e) => setUserdetails({ ...userdetails, lname: e.target.value })} />
                <label htmlFor='email'>Email Address</label>
                <input type="email" id='email' placeholder='type your email-address' value={userdetails.email} onChange={(e) => setUserdetails({ ...userdetails, email: e.target.value })} />
                <label htmlFor='email'>Confirm your Email Address</label>
                <input type="confirmed-email" id='confirmedEmail' placeholder='confirm your email-address' value={userdetails.confirmedEmail} onChange={(e) => setUserdetails({ ...userdetails, confirmedEmail: e.target.value })} />
                <label htmlFor='password'>Password</label>
                <input type="password" id='password' placeholder='type your password' value={userdetails.password} onChange={(e) => setUserdetails({ ...userdetails, password: e.target.value })} />
                <label htmlFor='password'>Confirm your Password</label>
                <input type="password" id='confirmedPassword' placeholder='confirm your password' value={userdetails.confirmedPassword} onChange={(e) => setUserdetails({ ...userdetails, confirmedPassword: e.target.value })} />
                <button type='submit' className='btn btn-block signinbutton'>SignIn</button>
            </form>
        </div>
    )
}

export default Signup
