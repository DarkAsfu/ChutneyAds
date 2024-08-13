import Image from 'next/image';
import React from 'react';

const Advertisement = () => {
    return (
        <div className='bg-[#F9F9F9] pt-20 '>
            <div className='flex justify-end md:-mt-48 '>
                <Image className='hidden md:block' src="https://i.ibb.co/Ry6hVP5/image-21.png" alt='' height={1} width={277} />
            </div>
            <div className='md:-mt-20 md:w-9/12 mx-auto  md:px-0 grid md:grid-cols-2 items-center gap-10 md:gap-32'>
                <div>
                    <Image src="https://i.ibb.co/q9zNGSR/Group-36.png" alt='' height={526} width={500} />
                </div>
                <div className='px-6 md:px-0'>
                    <h1 className='text-[#FE451B] text-[30px] font-bold leading-9 mb-6'>
                        Benefits of Digital Out-of-Home (DOOH) Advertising
                    </h1>
                    <h5 className='text-[16px] font-bold leading-6 text-black'>Engagement & Visibility:</h5>
                    <p className='text-[16px] font-normal leading-6 text-black mb-6'>High- resolution, dynamic displays generate 400% more views than static, blending seamlessly into the urban canvas while avoiding ad fatigue.</p>

                    <h5 className='text-[16px] font-bold leading-6 text-black'>Content Flexibility:</h5>
                    <p className='text-[16px] font-normal leading-6 text-black'>With real-time content updates, adapt your messaging instantly to stay relevant during different times of the day or in response to events.</p>
                </div>
                <div className='order-4 md:order-3'>
                    <div className='px-6 md:px-0'>
                        <h5 className='text-[16px] font-bold leading-6 text-black'>Engagement & Visibility:</h5>
                        <p className='text-[16px] font-normal leading-6 text-black mb-6'>High- resolution, dynamic displays generate 400% more views than static, blending seamlessly into the urban canvas while avoiding ad fatigue.</p>

                        <h5 className='text-[16px] font-bold leading-6 text-black'>Content Flexibility:</h5>
                        <p className='text-[16px] font-normal leading-6 text-black'>With real-time content updates, adapt your messaging instantly to stay relevant during different times of the day or in response to events.</p>
                        <h5 className='text-[16px] font-bold leading-6 text-black'>Content Flexibility:</h5>
                        <p className='text-[16px] font-normal leading-6 text-black'>With real-time content updates, adapt your messaging instantly to stay relevant during different times of the day or in response to events.</p>
                    </div>
                </div>
                <div className='order-3 md:order-4'>
                    <div>
                        <Image src="https://i.ibb.co/yPnrgwk/image-12.png" alt='' height={526} width={500} />
                       <div className='hidden md:block'>
                       <Image src="https://i.ibb.co/q0MYXbB/Group-21.png" alt='' height={131} width={102} className="rotate-90 -mt-[90px] relative left-[440px]" />
                       </div>

                    </div>
                </div>
            </div>
            <div className=' -mt-56 hidden md:block'>
                <Image className='' src="https://i.ibb.co/ThTGJdz/image-20.png" alt='' height={1} width={277} />
            </div>
        </div>
    );
};

export default Advertisement;