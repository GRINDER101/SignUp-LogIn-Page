import { useState } from "react";
import "./App.css"
import Heading from "./components/Heading/Heading";
import Intropage from "./Pages/IntroPage/Intropage";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/SignupPage/Signup";
import Confirmationpage from "./Pages/ConfirmationPage/Confirmationpage";

function App() {

  const [openIntro, setOpenIntro] = useState(false)
  const [iconVisible, setIsIconVisible] = useState(true)
  const [userSignedin, setuserSignedin] = useState(true)
  const [signUpConfirmed, IssignupConfirmed] = useState(false)
  const [userdetails, setUserdetails] = useState({
    fname: '',
    lname: '',
    email: '',
    confirmedEmail: '',
    password: '',
    confirmedPassword: '',
  });
  const [loginconfirmation, IsloginConfirmed] = useState(false)
  const [logindetails, setLoginDetails] = useState({
    email: '',
    password: '',
  })

  const HandleSubmitforSignupForm = (e) => {
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
    } 
    else if (userdetails.email !== userdetails.confirmedEmail) {
      setUserdetails({ ...userdetails, confirmedEmail: '' })
      document.getElementById('confirmedEmail').setAttribute('placeholder', 'wrong email-id provided, confirm your email again')
      document.getElementById('confirmedEmail').classList.add('error');
    } 
    else if (userdetails.password !== userdetails.confirmedPassword) {
      setUserdetails({ ...userdetails, confirmedPassword: '' })
      document.getElementById('confirmedPassword').setAttribute('placeholder', 'wrong password provided, confirm your password again')
      document.getElementById('confirmedPassword').classList.add('error');
    }
    else {
      IssignupConfirmed(true);
      setuserSignedin(true);
    }
  }

  const HandleSubmitforLoginForm = (e) => {
    e.preventDefault();
    if (signUpConfirmed) {
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
        } 
    else{
      alert("first register yourself with us.")
    }
  }

  const openIntroAndIconInvisible = () => {
    setIsIconVisible(false);
    setOpenIntro(true);
  } 
  return (
    <div className="wrapper">
    {openIntro && <div className="maincontainer-openintro">
    <Intropage/>
     </div>}
    <div className={openIntro ? "maincontainer-with-openintro ": "maincontainer"}>
     <Heading/>
     {userSignedin ? (loginconfirmation ? <Confirmationpage  userdetails={userdetails} openIntroAndIconInvisible={openIntroAndIconInvisible} iconVisible={iconVisible}/> : <Login HandleSubmitforLoginForm={HandleSubmitforLoginForm} setLoginDetails={setLoginDetails} logindetails={logindetails} setuserSignedin={setuserSignedin} openIntroAndIconInvisible={openIntroAndIconInvisible} iconVisible={iconVisible}/>) : <Signup HandleSubmitforSignupForm={HandleSubmitforSignupForm} setUserdetails={setUserdetails} userdetails={userdetails} openIntroAndIconInvisible={openIntroAndIconInvisible} iconVisible={iconVisible}/>}
     </div>
    </div>
  );
}

export default App;
