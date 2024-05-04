
import React, { useEffect, useState } from 'react'
import "./maincontainer.css"
import Newcontainer from "../Pages/Newcontainer/Newcontainer"
import Intialpage from "../Pages/Initialpage/Intialpage"

const Maincontainer = () => {
    const [openIntro, setOpenIntro] = useState(false)
    const [iconVisible, setIsIconVisible] = useState(true)

    useEffect(() => {
        setInterval(() => {
            setIsIconVisible(false)
        }, 10000)
    }, [iconVisible])
    return (

        <div >
            {openIntro ? <Newcontainer /> : <Intialpage />}
            {iconVisible ?
                <div id="show-intro" onClick={() => { setOpenIntro(true); setIsIconVisible(false) }}>
                    <i className="ri-arrow-left-double-line"></i>
                </div> : <></>}
        </div>
    )
}

export default Maincontainer