import React from 'react'
import "./confirmationpage.css"

const Confirmationpage = ({ userdetails }) => {
    return (
        <div className='confirmation-container'>
            <h3> Thank you {userdetails.fname}, we are glad to know that you liked our product and service and registered with us. You will always be part of our New Tech Consultancy Group.</h3>
        </div>
    )
}

export default Confirmationpage