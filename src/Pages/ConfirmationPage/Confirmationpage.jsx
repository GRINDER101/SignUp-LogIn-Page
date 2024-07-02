import React from 'react'
import "./confirmationpage.css"

const Confirmationpage = ({ userdetails, openIntroAndIconInvisible, iconVisible }) => {
    return (
        <div className='confirmation-container'>
            <div className='intro-1'>
                {iconVisible && <div id='show-intro-1' onClick={() => openIntroAndIconInvisible()}>
                    <i className="ri-arrow-left-double-line"></i>
                </div>}
            </div>
            <h3> Thank you {userdetails.fname}, we are glad to know that you liked our product and service and registered with us. You will always be part of our New Tech Consultancy Group.</h3>
        </div>
    )
}

export default Confirmationpage
