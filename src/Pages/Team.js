// Team.js
import logo from '../images/robot1.png'
import erc from '../images/erc.png'
import bertuah from '../images/bertuah1.jpg'
import bambang from '../images/3.png'
import dela from '../images/2.png'
import labib from '../images/1.png'
import fikri from '../images/4.png'

import React, { useState, useEffect } from 'react'


const Team = () => {
    const [isActive, setIsActive] = useState({
        id: 'divOne',
    })
    useEffect(() => {
        console.log(isActive)
    }, [isActive])
    const hideShowDiv = (e) => {
        setIsActive({
            id: e.target.id,
        })
    }

    return (

        <div className="container">
            <div className='items-center justify-center shadow-inner shadow-black bg-cover bg-black h-[50vh]' style={{ backgroundImage: `url(${erc})` }}>
                <div class="w-full h-full flex justify-center items-center backdrop-brightness-50">
                    <p className='text-4xl font-semibold tracking-wider text-center '> <span className='text-blue-500'>Meet</span> <span className='text-red-500'>Our</span> <span className='text-yellow-500'>
                        Team</span></p>
                </div>
            </div>



            <div className='container grid items-center justify-center grid-cols-2 gap-4 p-10 text-lg text-center md:grid-cols-6 md:px-24 '>

                <div className="col-4">
                    <div className="">
                        <button id="divOne"
                            onClick={(e) => {
                                hideShowDiv(e)
                            }}
                            className={isActive.id === 'divOne' ? `w-full h-full text-white bg-blue-600 rounded-md   ` : 'hover:text-blue-500 text-black'}
                        >
                            Core Team
                        </button>
                    </div>

                </div>

                <div className="col-4">
                    <div className="">
                        <button
                            id="divTwo"
                            onClick={(e) => {
                                hideShowDiv(e)
                            }}
                            className={isActive.id === 'divTwo' ? `px-3 py-1 text-white bg-blue-600 rounded-md   ` : 'hover:text-blue-500 text-black'}
                        >
                            Creative
                        </button>
                    </div>

                </div>
                <div className="col-4">
                    <div className="">
                        <button id="divThree"
                            onClick={(e) => {
                                hideShowDiv(e)
                            }}
                            className={isActive.id === 'divThree' ? `px-3 py-1 text-white bg-blue-600 rounded-md   ` : 'hover:text-blue-500 text-black'}
                        >
                            Asset Management
                        </button>
                    </div>

                </div>
                <div className="col-4">
                    <div className="">
                        <button id="divFour"
                            onClick={(e) => {
                                hideShowDiv(e)
                            }}
                            className={isActive.id === 'divFour' ? `px-3 py-1 text-white bg-blue-600 rounded-md   ` : 'hover:text-blue-500 text-black'}
                        >
                            Research
                        </button>
                    </div>

                </div>
                <div className="col-4">
                    <div className="">
                        <button id="divFive"
                            onClick={(e) => {
                                hideShowDiv(e)
                            }}
                            className={isActive.id === 'divFive' ? `px-3 py-1 text-white bg-blue-600 rounded-md   ` : 'hover:text-blue-500 text-black'}
                        >
                            Human Resource
                        </button>
                    </div>

                </div>
                <div className="col-4">
                    <div className="">
                        <button
                            id="divSix"
                            onClick={(e) => {
                                hideShowDiv(e)
                            }}
                            className={isActive.id === 'divSix' ? `px-3 py-1 text-white bg-blue-600 rounded-md   ` : 'hover:text-blue-500 text-black'}
                        >
                            Competition Team
                        </button>
                    </div>

                </div>

            </div>


            <div className={isActive.id === 'divOne' ? `divOne` : 'divOne hidden'}>




            </div>
            <div className={isActive.id === 'divTwo' ? `divTwo` : 'divTwo hidden'}>
                <div className="flex flex-col-reverse items-start justify-center gap-3 p-10 md:flex-row ">

                    <div class="">
                        <img src={logo} className="w-64 h-64" alt="logo" />

                    </div>
                    <div className="flex flex-col items-center gap-3 text-center md:w-2/3 md:items-start md:text-left">
                        <p className='text-sm font-bold tracking-wider text-blue-500 uppercase'>Divisi ERC</p>
                        <p className="text-5xl font-semibold text-blue-500">
                            Divisi <span className='text-yellow-300'>Kreatif</span>
                        </p>
                        <ol className='flex flex-col w-3/4 gap-3 p-3 text-lg tracking-wider text-gray-500 list-decimal font-base'>
                            <li>
                                Mendokumentasi dan
                                mempublikasikan kegiatan yang
                                berkaitan dengan ERC
                            </li>
                            <li>
                                Mendesain banner atau spanduk
                                untuk kegiatan ERC
                            </li>
                            <li>
                                Membuat konten 2 kali dalam 1
                                bulan
                            </li>
                            <li>
                                Mengelola media sosial ERC
                            </li>
                        </ol>

                    </div>
                </div>
            </div>

            <div className={isActive.id === 'divThree' ? `divThree` : 'divThree hidden'}>

                <div className="flex flex-col-reverse items-start justify-center gap-3 p-10 md:flex-row ">

                    <div class="">
                        <img src={logo} className="w-64 h-64" alt="logo" />

                    </div>
                    <div className="flex flex-col items-center gap-3 text-center md:w-2/3 md:items-start md:text-left">
                        <p className='text-sm font-bold tracking-wider text-blue-500 uppercase'>Divisi ERC</p>
                        <p className="text-5xl font-semibold text-blue-500">
                            Divisi <span className='text-yellow-300'>Asset </span>
                            <span className='text-red-500'>Management</span>
                        </p>
                        <ol className='flex flex-col w-3/4 gap-3 p-3 text-lg tracking-wider text-gray-500 list-decimal font-base'>
                            <li>
                                Menjaga aset dalam secretariat ERC
                            </li>
                            <li>Mencatat nama, jumlah, kondisi Aset
                                yang dimiliki ERC
                            </li>
                            <li>Menjaga kebersihan, ketentraman,
                                kenyamanan di dalam secretariat
                                ERC
                            </li>


                        </ol>

                    </div>
                </div>
            </div>

            <div className={isActive.id === 'divFour' ? `divFour` : 'divFour hidden'}>
                <div className="flex flex-col-reverse items-start justify-center gap-3 p-10 md:flex-row ">

                    <div class="">
                        <img src={logo} className="w-64 h-64" alt="logo" />

                    </div>
                    <div className="flex flex-col items-center gap-3 text-center md:w-2/3 md:items-start md:text-left">
                        <p className='text-sm font-bold tracking-wider text-blue-500 uppercase'>Divisi ERC</p>
                        <p className="text-5xl font-semibold text-blue-500">
                            Divisi <span className='text-yellow-300'>Research </span>
                            <span className='text-red-500'>Competition</span>
                        </p>
                        <ol className='flex flex-col w-3/4 gap-3 p-3 text-lg tracking-wider text-gray-500 list-decimal font-base'>
                            <li>
                                Bekerjasama dengan divisi kreatif
                                untuk mencari Informasi
                                Perlombaan
                            </li>
                            <li>Menentukan komponen yang akandi
                                beli untuk keperluan riset dan lomba
                            </li>
                            <li>Membuat ide inovasi riset baru
                                minimal 1 kali dalam 1 bulan
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
            <div className={isActive.id === 'divFive' ? `divFive` : 'divFive hidden'}>
                |<div className="flex flex-col-reverse items-start justify-center gap-3 p-10 md:flex-row ">

                    <div class="">
                        <img src={logo} className="w-64 h-64" alt="logo" />

                    </div>
                    <div className="flex flex-col items-center gap-3 text-center md:w-2/3 md:items-start md:text-left">
                        <p className='text-sm font-bold tracking-wider text-blue-500 uppercase'>Divisi ERC</p>
                        <p className="text-5xl font-semibold text-blue-500">
                            Divisi <span className='text-yellow-300'>Human </span>
                            <span className='text-red-500'>Resource</span>
                        </p>
                        <ol className='flex flex-col w-3/4 gap-3 p-3 text-lg tracking-wider text-gray-500 list-decimal font-base'>
                            <li>
                                Rekrutmen dan seleksi anggota
                                baru
                            </li>
                            <li>Pelatihan dan pengembangan
                                anggota
                            </li>
                            <li>Manajemen kinerja anggota
                            </li>
                            <li>Kompensasi dan manfaat anggota
                            </li>
                            <li>Pengelolaan hubungan kerja
                            </li>
                        </ol>

                    </div>
                </div>

            </div>

            <div className={isActive.id === 'divSix' ? `divSix` : 'divSix hidden'}>
                <div className="flex flex-col items-center gap-3 pb-10">
                    <p className="text-2xl font-semibold text-blue-500">
                        Tim <span className='text-yellow-300'>KRSBI </span>
                        <span className='text-red-500'>2024</span>
                    </p>
                    <p className='text-5xl font-semibold text-blue-500'>"Bertuah"</p>

                    <div className='grid grid-cols-1 gap-6 m-2 font-semibold text-black md:grid-cols-3'>
                        <div className='relative w-48 h-48 p-3 bg-white bg-center bg-no-repeat bg-contain border-8 border-white rounded-full shadow-md' style={{ backgroundImage: `url(${bambang})` }}>
                            <div className='absolute px-4 py-2 text-white bg-blue-600 rounded-md shadow-md -bottom-4'>
                                <p className='self-end text-sm'>Bambang Tri Mukti</p>
                                <p className='self-end text-xs font-light'>Team leader/Electrical</p>
                            </div>
                        </div>
                        <div className='relative w-48 h-48 p-3 bg-white bg-right-top bg-cover border-8 border-white rounded-full shadow-md' style={{ backgroundImage: `url(${labib})` }}>
                            <div className='absolute px-4 py-2 text-white bg-blue-600 rounded-md shadow-md -bottom-4'>
                                <p className='self-end text-sm'>Mohd. Labib</p>
                                <p className='self-end text-xs font-light'> Programmer</p>
                            </div>
                        </div>
                        <div className='relative w-48 h-48 p-3 bg-white bg-right-top bg-cover border-8 border-white rounded-full shadow-md' style={{ backgroundImage: `url(${dela})` }}>
                            <div className='absolute px-4 py-2 text-white bg-blue-600 rounded-md shadow-md -bottom-4'>
                                <p className='self-end text-sm'>Viera Adella</p>
                                <p className='self-end text-xs font-light'> Programmer</p>
                            </div>
                        </div>
                        <div className='relative w-48 h-48 p-3 bg-white bg-right-top bg-cover border-8 border-white rounded-full shadow-md' style={{ backgroundImage: `url(${fikri})` }}>
                            <div className='absolute px-4 py-2 text-white bg-blue-600 rounded-md shadow-md -bottom-4'>
                                <p className='self-end text-sm'>Fikri Rivandi</p>
                                <p className='self-end text-xs font-light'> Programmer</p>
                            </div>
                        </div>
                        <div className='relative w-48 h-48 p-3 bg-white bg-right-top bg-cover border-8 border-white rounded-full shadow-md' style={{ backgroundImage: `url(${bambang})` }}>
                            <div className='absolute px-4 py-2 text-white bg-blue-600 rounded-md shadow-md -bottom-4'>
                                <p className='self-end text-sm'>M. Farhan</p>
                                <p className='self-end text-xs font-light'> Programmer</p>
                            </div>
                        </div>
                        <div className='relative w-48 h-48 p-3 bg-white bg-right-top bg-cover border-8 border-white rounded-full shadow-md' style={{ backgroundImage: `url(${labib})` }}>
                            <div className='absolute px-4 py-2 text-white bg-blue-600 rounded-md shadow-md -bottom-4'>
                                <p className='self-end text-sm'>Abdul Aziz</p>
                                <p className='self-end text-xs font-light'>Electrical</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;