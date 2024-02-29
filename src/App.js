import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <div className="flex justify-center items-start md:flex-row flex-col-reverse p-20 gap-4">
        <div className="md:w-1/2 flex items-center md:items-start flex-col gap-4 text-center md:text-left">
          <p className="text-3xl font-semibold text-blue-500">
            Engineering <span className='text-yellow-300'>Robotic</span> <span className='text-red-500'>Club</span>
          </p>
          <p className='text-base font-base'>
            Engineering Robotics Club or known as ERC is a Riau University Robotics team that focuses on making and developing robots. Since 2021 ERC has succeeded in making achievements in the field of robotics.
          </p>
          <button type="button" className='w-fit  text-sm h-fit px-3 py-2 rounded-md text-white bg-blue-400'
          >
            About us
          </button>
        </div>
        <div class="">
          <img src={logo} className="w-64 h-64" alt="logo" />

        </div>
      </div>


      <div className="flex justify-center items-center flex-col p-20 gap-4">
        <p className='text-center font-semibold text-xl'>Our Achivement</p>

        <div className='flex flex-col md:flex-row md:w-1/2'>
          <img src={logo} className="w-64 h-64" alt="logo" />
          <p className='text-xl font-semibold text-black/80'>Juara 3 wilayah 1 kRSBI bola beroda 2021</p>
        </div>
        <div className='flex flex-col-reverse md:flex-row md:w-1/2'>
          <p className='text-xl font-semibold text-black/80'>juara 3 wilayah 1 kRSBI bola beroda 2021</p>
          <img src={logo} className="w-64 h-64" alt="logo" />
        </div>
      </div>

    </div>
  );
}

export default App;
