// About.js
import logo from '../images/robot1.png'
import erc from '../images/erc.png'

const About = () => {
    return (
        <div className="container">

            <div className='items-center justify-center shadow-inner shadow-black bg-cover bg-black h-[50vh]' style={{ backgroundImage: `url(${erc})` }}>
                <div class="w-full h-full flex justify-center items-center backdrop-brightness-50">
                    <p className='text-4xl font-semibold tracking-wider text-center '> <span className='text-blue-500'>About</span> <span className='text-red-500'>Our</span> <span className='text-yellow-500'>
                        Club</span></p>
                </div>
            </div>

            <div className="flex flex-col-reverse items-start justify-center gap-3 p-10 md:flex-row ">

                <div class="">
                    <img src={logo} className="w-64 h-64" alt="logo" />

                </div>
                <div className="flex flex-col items-center gap-3 text-center md:w-2/3 md:items-start md:text-left">
                    <p className='text-sm font-bold tracking-wider text-blue-500 uppercase'>VISI ERC</p>
                    <p className="text-5xl font-semibold text-blue-500">
                        Engineering <span className='text-yellow-300'>Robotic</span> <span className='text-red-500'>Club</span>
                    </p>
                    <p className='w-3/4 text-lg text-gray-500 font-base'>
                        Menjadikan ERC sebagai pusat
                        unggulan yang terkemuka dalam
                        pengembangan riset dan
                        teknologi di bidang robotika
                        secara nasional dan internasional
                        pada tahun 2030.
                    </p>

                </div>
            </div>

            <div className="flex flex-col-reverse items-start justify-center gap-3 p-10 md:flex-row">

                <div class="">
                    <img src={logo} className="w-64 h-64" alt="logo" />

                </div>
                <div className="flex flex-col items-center gap-3 text-center md:w-2/3 md:items-start md:text-left">
                    <p className='text-sm font-bold tracking-wider text-blue-500 uppercase'>Misi ERC</p>
                    <p className="text-5xl font-semibold text-blue-500">
                        Engineering <span className='text-yellow-300'>Robotic</span> <span className='text-red-500'>Club</span>
                    </p>
                    <ol className='flex flex-col w-3/4 gap-3 p-3 text-lg tracking-wider text-gray-500 list-decimal font-base'>
                        <li>
                            Mengembangkan potensi mahasiswa Universitas Riau dalam bidang
                            robotika melalui proyek proyek inovatif.
                        </li>
                        <li>Mengembangkan keterampilan manajemen organisasi dan karakter
                            diri yang berakhlak mulia serta inovatif, dalam mempersiapkan
                            anggota untuk menghadapi tantangan dunia industri.
                        </li>
                        <li>Menyelenggarakan kegiatan enterpreneurship untuk mendorong
                            kreativitas dan inovasi anggota dalam mengaplikasikan pengetahuan
                            teknis dalam konteks bisnis.
                        </li>
                        <li>Menumbuhkan kolaborasi erat dengan industri, institusi pendidikan,
                            dan komunitas lokal untuk menciptakan ekosistem yang mendukung
                            pertumbuhan ERC.
                        </li>
                        <li>Membangun jejaring nasional & internasional dengan komunitas
                            lainnya untuk bertukar pengetahuan dan pengalaman, serta
                            memperluas dampak dan relasi ERC.</li>
                    </ol>

                </div>
            </div>

        </div>
    );
};

export default About;