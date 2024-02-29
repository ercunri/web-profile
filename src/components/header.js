import React from 'react';
import logo from '../images/logo-erc.png'
const Header = () => {
    return (
        <header className='flex justify-around tracking-wider p-3 items-center bg-white shadow-sm'>
            <img src={logo} className='w-16' alt="My Logo" />
            <div className='flex'>
                <ul className='flex gap-6 text-blue-500 font-semibold'>
                    <li>
                        <a href="/home" className='hover:text-blue-300'>Home</a>
                        </li>
                    <li>About</li>
                    <li>Teams</li>
                    <li>Gallery</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;