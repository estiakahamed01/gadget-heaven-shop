import bannerImg from '../../assets/banner.jpg'

const BannerImage = () => {
    return (
        <div className='w-7/12 h-[553px] mx-auto relative '>
            <img className='h-full w-full p-3  border-solid border-[1px] border-white rounded-2xl absolute -top-64' src={bannerImg} alt="" />
        </div>
    );
};

export default BannerImage;