import Image from 'next/image';
import React from 'react';

const Second = () => {
    return (
        <div data-aos="fade-up" className="bg-cover bg-no-repeat bg-center relative text-white " 
             style={{ backgroundImage: "url('https://i.ibb.co/xg7h275/image-11.png')" }}>
            {/* Overlay with full coverage and increased opacity */}
            <div data-aos="zoom-in" className="relative inset-0 bg-black bg-opacity-50 ">
                <div className='w-[270px] md:w-[332px]'>
                    <Image src='https://i.ibb.co/V2J1VrK/Group-9.png' alt='' height={332} width={332}/>
                </div>
                <div ><p className="text-[22px] md:text-[28px] text-center md:w-[784px] mx-auto px-6 md:px-0">
                ChutneyAds pioneers the transformation from traditional Out-of-Home to Digital Out-of-Home advertising, with a network of 100+ Digital Display Panels strategically placed across Dhaka.
                </p></div>
                <div className='flex justify-end'>
                    <Image className=' w-[270px] md:w-[332px]' src='https://i.ibb.co/WvC70qH/Group-21-1.png' alt='' height={332} width={332}/>
                </div>
            </div>
        </div>
    );
};

export default Second;
