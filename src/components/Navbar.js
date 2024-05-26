import React, { useState } from 'react'

import logo from '../images/logo.png';

const Navbar = () => {

    const [bool, setBool] = useState(false);
    const display = () => {

        setBool(!bool);
    }
    return (
        <div>
            <div className="navbar">
                <div className='toogle-div' >
                    <img className='left' id='logo' src={logo} />


                    <button className='toogle' onClick={display}>x</button>
                </div>
                <div className='nav'>
                    <div className='nav-items'>
                        <img className='left' id='logo' src={logo} />

                        <a href='home' className='links'>Home</a>
                        <a href='accomo' className='links'>Accomodation</a>
                        <a href='meetings' className='links'>Meetings & Events</a>
                        <a href='weddings' className='links'>Weddings</a>
                        <a href='contact' className='links'>Contact Us</a>
                    </div>
                    {bool &&
                        <div className='nav-items2'>
                            <a href='home' className='links'>Home</a>
                            <a href='accomo' className='links'>Accomodation</a>
                            <a href='meetings' className='links'>Meetings & Events</a>
                            <a href='weddings' className='links'>Weddings</a>
                            <a href='contact' className='links'>Contact Us</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar