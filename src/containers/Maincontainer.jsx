import React from 'react'
import "./maincontainer.css"
import Newcontainer from '../Pages/Newcontainer/Newcontainer'
import Intialpage from '../Pages/Initialpage/Intialpage'

const Maincontainer = ({ openIntro }) => {
    return (

        <div >
            {openIntro ? <Newcontainer /> : <Intialpage />}
        </div>
    )
}

export default Maincontainer