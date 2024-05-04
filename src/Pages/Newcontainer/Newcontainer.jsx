import React from 'react'
import "./newcontainer.css"
import Intropage from '../IntroPage/Intropage'
import Heading from '../../components/Heading/Heading'
import Login from '../LoginPage/Login'

const Newcontainer = () => {
    return (
        <div className='wrapper'>
            <div className='maincontainer-openintro'>
                <Intropage />
            </div>
            <div className='maincontainer-1'>
                <Heading />
                <Login />
            </div>
        </div>
    )
}

export default Newcontainer