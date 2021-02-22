import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <div id='navbar'>
            <img id='img-logo' src='../../public/logo.png' alt='logo'/>
            <div id='nav-links'>
                <Link to='/'>Home</Link>
                <a href='#'>About</a>
                <a href='#'>Contact Us</a>
            </div>
        </div>
    );
}

export default Navbar;