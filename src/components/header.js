import React from 'react';
import logo from '../images/logo-erc.png'
const Header = () => {
    return (
        <header className='flex justify-around tracking-wider p-3 items-center bg-white shadow-sm'>
            <img src={logo} className='w-16' alt="My Logo" />
            <div className='hidden md:flex'>
                <ul className='flex gap-6 text-gray-600 font-semibold'>
                    <li>
                        <a href="/home" className='hover:text-blue-300'>Home</a>
                    </li>
                    <li>
                        <a href="/home" className='hover:text-blue-300'>Team</a>
                    </li>
                    <li>
                        <a href="/home" className='hover:text-blue-300'>Gallery</a>
                    </li>
                    
                </ul>
            </div>
            <div className='flex gap-3'>
                <button type="button" className='w-fit  text-sm h-fit px-7 py-2 rounded-lg font-semibold border-blue-600 shadow-md border-2 text-blue-600'
                >
                    Masuk
                </button>
                <button type="button" className='w-fit  text-sm h-fit px-7 py-2 rounded-lg font-semibold border-blue-600 shadow-md border-2 text-white bg-blue-600'>
                    Daftar
                </button>
            </div>
        </header>
    );
}

export default Header;