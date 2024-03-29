// Home.js
// import { useNavigate } from 'react-router-dom';
import logo from '../images/robot1.png'
import logotari from '../images/robot-tari.png'
import logokrsbi from '../images/robot-krsbi.png'
import logomiria from '../images/robot-miria.png'
import logolaba from '../images/robot-laba.png'
import SocialFollow from "../components/SocialFollow"

const Home = () => {
//  const navigate = useNavigate();
 return (
    <div className="container">
       <div className="flex justify-center items-start md:flex-row flex-col-reverse p-20 gap-3 md:h-[85vh]">
        <div className="flex flex-col items-center gap-3 text-center md:w-2/3 md:items-start md:text-left">
          <p className='text-sm font-bold tracking-wider text-blue-500 uppercase'>Welcome to ERC</p>
          <p className="text-5xl font-semibold text-blue-500">
            Engineering <span className='text-yellow-300'>Robotic</span> <span className='text-red-500'>Club</span>
          </p>
          <p className='w-3/4 text-lg text-gray-500 font-base'>
            Engineering Robotics Club or known as ERC is a Riau University Robotics team that focuses on making and developing robots.
          </p>
          <div className='flex gap-4'>
            <button type="button" className='w-fit  text-sm h-fit px-7 py-2.5 rounded-2xl font-semibold border-blue-600 shadow-md border-2 text-white bg-blue-600'
            >
              Join us
            </button>
            <button type="button" className='w-fit  text-sm h-fit px-7 py-2.5 rounded-2xl font-semibold  shadow-md text-blue-600 border-2 border-blue-600'
            >
              About us
            </button>
          </div>
          <SocialFollow />
        </div>
        <div class="">
          <img src={logo} className="w-64 h-64" alt="logo" />

        </div>
      </div>


      <div className="flex flex-col items-center justify-center gap-4 p-10 bg-gray-100">
        <p className='text-3xl font-semibold text-center'>Our <span className='text-blue-500'>Achivement</span></p>

        <div className='flex flex-col items-center gap-4 md:flex-row md:w-1/2'>
          <img src={logo} className="w-64 h-64" alt="logo" />
          <p className='text-xl font-semibold text-gray-600'><span className='text-blue-500'>Juara 3</span> Wilayah 1 <span className='text-red-500'>KRSBI</span> 2021</p>
        </div>

        <div className='flex flex-col-reverse items-center gap-4 md:flex-row md:w-1/2'>
          <p className='text-xl font-semibold text-gray-600'><span className='text-blue-500'>Juara Harapan 1</span> Wilayah 1 <span className='text-red-500'>KRSBI</span> 2022</p>
          <img src={logo} className="w-64 h-64" alt="logo" />
        </div>

      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-10 bg-white">
        <p className='text-3xl font-semibold text-center'>Meet Our <span className='text-red-500'>Robot</span></p>

        <div className="flex gap-3 py-10">
          <div className='flex flex-col items-center w-48 h-64 p-3 bg-blue-500 rounded-lg shadow-md'>
            <p className='font-semibold text-white'>Miria</p>
            <img src={logolaba} className="h-48" alt="logo" />

          </div>
          <div className='flex flex-col items-center w-48 h-64 p-3 bg-yellow-500 rounded-lg shadow-md'>
            <p className='font-semibold text-white'>Tari</p>
            <img src={logokrsbi} className="h-48" alt="logo" />

          </div>
          <div className='flex flex-col items-center w-48 h-64 p-3 bg-red-500 rounded-lg shadow-md'>
            <p className='font-semibold text-white'>KRSBI</p>
            <img src={logotari} className="h-48" alt="logo" />

          </div>
          <div className='flex flex-col items-center w-48 h-64 p-3 bg-blue-500 rounded-lg shadow-md'>
            <p className='font-semibold text-white'>Laba-laba</p>
            <img src={logomiria} className="h-48" alt="logo" />

          </div>
        </div>

      </div>


      <div className="flex flex-col items-center justify-center gap-4 p-10 text-gray-800 bg-gray-100">
        <p className='text-3xl font-semibold '>Our <span className='text-yellow-500'>Location</span></p>
        <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28912.492895058043!2d101.39952385516081!3d0.46276279092726186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a917f9f51179%3A0x9703bd65b680a236!2sSekretariat%20ERC!5e0!3m2!1sid!2sid!4v1709235695020!5m2!1sid!2sid" width="450" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
 );
};

export default Home;