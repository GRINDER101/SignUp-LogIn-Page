import React, { useState } from 'react'
import "./signup.css"
import Login from '../LoginPage/Login';

const Signup = () => {
    const [userSignedin, setuserSignedin] = useState(false)
    const [signupconfirmation, IssignupConfirmed] = useState(false)
    const [userdetails, setUserdetails] = useState({
        fname: '',
        lname: '',
        email: '',
        confirmedEmail: '',
        password: '',
        confirmedPassword: '',
    });
    function HandleSubmit(e) {
        e.preventDefault();
        if (!userdetails.fname || !userdetails.lname || !userdetails.email || !userdetails.confirmedEmail || !userdetails.confirmedPassword) {
            alert("fill all the details! ")
        }
        else if (userdetails.password.length < 8) {
            setUserdetails({ ...userdetails, password: '', confirmedPassword: '' })
            document.getElementById('password').setAttribute('placeholder', 'password need to be 8 characters long')
            document.getElementById('password').classList.add('error');
        }
        else if (userdetails.email !== userdetails.confirmedEmail && userdetails.password !== userdetails.confirmedPassword) {
            setUserdetails({ ...userdetails, confirmedEmail: '', confirmedPassword: '' })
            document.getElementById('confirmedEmail').setAttribute('placeholder', 'wrong email-id provided, confirm your email again')
            document.getElementById('confirmedEmail').classList.add('error');
            document.getElementById('confirmedPassword').setAttribute('placeholder', 'wrong password provided, confirm your password again')
            document.getElementById('confirmedPassword').classList.add('error');
        } else if (userdetails.email !== userdetails.confirmedEmail) {
            setUserdetails({ ...userdetails, confirmedEmail: '' })
            document.getElementById('confirmedEmail').setAttribute('placeholder', 'wrong email-id provided, confirm your email again')
            document.getElementById('confirmedEmail').classList.add('error');
        } else if (userdetails.password !== userdetails.confirmedPassword) {
            setUserdetails({ ...userdetails, confirmedPassword: '' })
            document.getElementById('confirmedPassword').setAttribute('placeholder', 'wrong password provided, confirm your password again')
            document.getElementById('confirmedPassword').classList.add('error');
        }
        else {
            IssignupConfirmed(true);
            setuserSignedin(true);
        }
    }
    return (
        <div>
            {signupconfirmation ? <Login userdetails={userdetails} userSignedin={userSignedin} /> : <form onSubmit={HandleSubmit} id='signupform'>
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
            </form>}
        </div>
    )
}

export default Signup