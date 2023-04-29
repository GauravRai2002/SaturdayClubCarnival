import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer-navigation'>
                <ul>
                    <li className='footer-nav-list'>
                        HOME
                    </li>
                    <li className='footer-nav-list'>
                        ABOUT US
                    </li>
                    <li className='footer-nav-list'>
                        PHOTOS
                    </li>
                    <li className='footer-red-bg footer-nav-list'>
                        CONTACT
                    </li>
                    <li className='footer-red-bg footer-nav-list'>
                        FEEDBACK
                    </li>
                </ul>
                <div className='foot'>© 2023 Vyana Sports</div>
            </div>
            
        </>
    )
}

export default Footer