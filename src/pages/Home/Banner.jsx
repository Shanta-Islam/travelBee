
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/WfGK3Zv/banner-2.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full">
                    <h2 className="mb-5 text-3xl">Explore The Travel & Adventures</h2>
                    <p>Find Beautiful Destination & Booking</p>
                    <div className="mt-10 sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between w-full">
                        <input className="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search destination name" />
                        <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                            <button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;