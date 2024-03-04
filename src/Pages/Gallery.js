// Gallery.js


const Gallery = () => {
    return (
        <>
            <p className="pt-10 text-5xl font-semibold text-center text-blue-500">
                Our <span className='text-yellow-300'>Memories </span>
            </p>
            <div className="container flex items-center px-5 py-2 mx-auto lg:px-32 lg:pt-10">
                <div className="flex flex-row -m-1 sm:flex-wrap md:-m-2">
                    <div className="flex flex-row-reverse flex-wrap w-full sm:w-1/2 lg:flex-row">
                        <div className="w-full p-1 lg:w-1/2 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg 2xl:rounded-2xl"
                                src="https://www.tailwindtap.com/assets/components/gallery/image1.jpg"
                            />
                        </div>
                        <div className="w-full p-1 lg:w-1/2 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg 2xl:rounded-2xl"
                                src="https://www.tailwindtap.com/assets/components/gallery/image2.jpg"
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
                                src="https://www.tailwindtap.com/assets/components/gallery/image7.jpg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full sm:w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg 2xl:rounded-2xl"
                                src="https://www.tailwindtap.com/assets/components/gallery/image9.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg 2xl:rounded-2xl"
                                src="https://www.tailwindtap.com/assets/components/gallery/image4.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg 2xl:rounded-2xl"
                                src="https://www.tailwindtap.com/assets/components/gallery/image6.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;

