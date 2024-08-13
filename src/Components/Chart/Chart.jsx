/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import React from 'react';

const Chart = () => {
    return (
        <div className='bg-[#ECECEC]'>
            <div data-aos="zoom-in-up" className='flex justify-start md:justify-end'>
                <Image className='-rotate-90 md:rotate-0 -mt-[60px] md:mt-0 md:-mb-20' src="https://i.ibb.co/FJqFZ1M/Group-14-1.png" alt='' height={332} width={213} />
            </div>
            <div className='md:w-9/12 mx-auto px-6 md:px-0 md:grid grid-cols-2 items-center gap-10'>
                <div data-aos="zoom-in-up">
                    <Image src="https://i.ibb.co/nkT2KW3/Group-13-1.png" alt='' height={469} width={534} />
                </div>
                <div data-aos="zoom-in-up">
                    <p className='font-normal text-[16px] md:text-[24px] md:leading-9 text-black md:pr-36 text-center md:text-left mt-10 md:mt-0'>
                        Our DOOH solutions have proven incredibly effective, with nearly two-thirds of viewers taking a measurable action, such as visiting the brand's website or making a purchase.
                    </p>
                </div>
            </div>
            <div data-aos="zoom-in-up" className='flex justify-end md:block overflow-hidden md:overflow-visible'>
                <Image className='-rotate-90 md:rotate-0  -mb-[62px] md:-mb-[2px]  md:ml-0' src="https://i.ibb.co/X4LQ2N7/Group-15-1.png" alt='' height={332} width={213} />
            </div>
        </div>
    );
};

export default Chart;
