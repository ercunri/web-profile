import React from 'react';
import logo from '../images/logo-erc.png'

import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 flex items-center justify-around p-3 tracking-wider bg-white shadow-sm'>
            <img src={logo} className='w-16' alt="My Logo" />
            <div className='hidden md:flex'>
                <ul className='flex gap-6 font-semibold text-gray-600'>
                    <li>
                        <NavLink to="/" className='hover:text-blue-500'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='hover:text-blue-500'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/team" className='hover:text-blue-500'>Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery" className='hover:text-blue-500'>Gallery</NavLink>
                    </li>
                    
                </ul>
            </div>
            <div className='flex gap-3'>
                <button type="button" className='py-2 text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-lg shadow-md w-fit h-fit px-7'
                >
                    Masuk
                </button>
                <button type="button" className='py-2 text-sm font-semibold text-white bg-blue-600 border-2 border-blue-600 rounded-lg shadow-md w-fit h-fit px-7'>
                    Daftar
                </button>
            </div>
        </nav>
    );
}

export default Navbar;