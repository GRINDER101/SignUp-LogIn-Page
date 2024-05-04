import React from 'react'
import "./intialpage.css"
import Heading from '../../components/Heading/Heading'
import Login from '../LoginPage/Login'

const Intialpage = () => {
    return (

        <div className='maincontainer'>
            <Heading />
            <Login />
        </div>
    )
}

export default Intialpage