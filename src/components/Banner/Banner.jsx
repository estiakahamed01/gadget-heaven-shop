

const Banner = () => {
    return (
        <div className="w-11/12 py-5 mx-auto bg-[#9538E2] pb-72">
            {/* Nav er Nicher Lekha */}
            <div className='flex flex-col justify-center items-center space-y-5'>
                <h1 className='font-bold text-6xl text-white w-3/5 text-center'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='text-white text-lg w-1/2 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className='py-3 px-5 bg-white rounded-full font-semibold text-[#9538E2] '>Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;