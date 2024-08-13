import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className='md:grid grid-cols-2 grid-col-1 bg-[#F9F9F9] h-screen'>
            <div className='order-2 flex justify-end'>
                <Image className='hidden md:block' src="https://i.ibb.co/5Rf8Z9G/Group-5.png" width={683} height={761} alt='banner-img' />
                <Image className='md:hidden block' src="https://i.ibb.co/YDY42YN/image-22.png" width={400} height={300} alt='banner-img' />
            </div>
            <div className='flex order-1'>
                <div className='hidden md:block'>
                    <Image src="https://i.ibb.co/28Rqw18/image-15.png" width={500} height={400} alt='side-img' />
                </div>
                <div className='md:mt-[20%] pl-6 md:pl-0'>
                    <Image className='hidden md:block' src="https://i.ibb.co/Dfx3GV3/Logo.png" width={236} height={55} alt='LOGO' />
                    <h2 className='text-[34px] font-bold md:font-normal md:text-[40px] uppercase md:w-[px] mt-6'>
                        Amplify Your Brand’s Voice in the Heart of Bangladesh’s Marketplaces
                    </h2>
                    <p className='text-[20px]'>
                    Engage with Strategic, Real-Time DOOH Advertising
                    </p>
                    <button className='bg-[#FE451B] text-[16px] text-white px-8 py-3 font-light mt-10'>
                        Book a Call
                    </button>
                </div>
            </div>
            
        </section>
    );
};

export default Banner;