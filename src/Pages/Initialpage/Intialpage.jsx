import React, { useEffect, useState } from 'react'
import "./intialpage.css"
import Heading from '../../components/Heading/Heading'
import Login from '../LoginPage/Login'
import Maincontainer from '../../containers/Maincontainer'

const Intialpage = () => {
    const [openIntro, setOpenIntro] = useState(false)
    const [iconVisible, setIsIconVisible] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setIsIconVisible(false)
        }, 10000)
    }, [])

    // console.log(iconVisible)
    return (
        <>{openIntro ? <Maincontainer openIntro={openIntro} />
            :
            <div className='maincontainer'>
                <Heading />
                <Login />
                {(iconVisible ? (<div id="show-intro" onClick={() => { setOpenIntro(true); setIsIconVisible(false) }}>
                    <i class="ri-arrow-left-double-line"></i>
                </div>) : <></>)}
            </div>}</>
    )
}

export default Intialpage