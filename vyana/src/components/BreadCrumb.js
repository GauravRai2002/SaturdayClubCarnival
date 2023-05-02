import React from 'react'
import './BreadCrumb.css'
import vyana_logo from '../assests/vyana_logo.png'
import satclogo from '../assests/sat_c_club_logo.png'
import { Outlet, Link } from 'react-router-dom'

function BreadCrumb() {
    return (
        <>
            <div className='breadcrumb-main'>
                <div className='breadcrumb-navigation'>
                    <ul>
                        <li className='breadcrumb-nav-list'>
                            <Link to='/' className='link'>HOME  </Link>
                        </li>
                        <li className='breadcrumb-nav-list'>
                            <Link to='/' className='link'>ABOUT US </Link>
                        </li>
                        <li className='breadcrumb-nav-list'>
                            <Link to='/' className='link'> PHOTOS </Link>
                        </li>
                        <li className='breadcrumb-red-bg breadcrumb-nav-list'>
                            <Link to='/' className='link'> CONTACT </Link>
                        </li>
                        <li className='breadcrumb-red-bg breadcrumb-nav-list'>
                            <Link to='/' className='link'>FEEDBACK </Link>
                        </li>
                    </ul>
                </div>
                <div className='breadcrumb-second-area'>
                    <div className='breadcrumb-sat-c-area'>
                        <div className='sat-c-area-nav sat-c-logo'>
                            <img src={satclogo} alt='image' />
                        </div>
                        <div className='sat-c-area-nav'>
                            <Link to='/schedule/badminton' className='link'>SCHEDULE</Link>
                        </div>
                        {/* <div className='sat-c-area-nav'>
                            <Link to='/result' className='link'>RESULTS</Link>
                        </div> */}
                        <div className='sat-c-area-nav'>
                            <Link to='/pointstable' className='link'> POINTS TABLE</Link>
                        </div>
                        <div className='sat-c-area-nav'>
                            <a href='https://www.youtube.com/@vyanasports/streams' className='link' target='_blank'> LIVE STREAMING</a>
                        </div>
                        <div className='sat-c-area-nav'>
                            <Link to='/pointstable' className='link'> EVENT PHOTOS</Link>
                        </div>
                    </div>
                    <div className='breadcrumb-logo-area'>
                        <img src={vyana_logo} />

                    </div>
                </div>

                <Outlet />
            </div>
        </>
    )
}

export default BreadCrumb