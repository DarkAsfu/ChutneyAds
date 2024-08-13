import Image from 'next/image';
import React from 'react';

const Location = () => {
    return (
        <div className='bg-[#E08C23] pb-20'>
            <div className='pt-20 pb-10'>
                <h2 className='font-bold text-[30px] md:text-[45px] text-center text-white uppercase'>Impact & Coverage</h2>
                <p className='text-center text-[16px] text-white md:w-6/12 mx-auto px-6 md:px-0'>Serving the bustling neighborhoods of Uttara, Mirpur, Mohammadpur, and Dhanmondi, we are positioned to deliver over 1 Billion impressions monthly.</p>
            </div>
            <div className='md:w-[871px] mx-auto md:grid grid-cols-2 justify-between text-white text-[16px]'>
                <div className='order-1 md:order-2 flex justify-center md:justify-end'>
                    <Image src='https://i.ibb.co/jTYQKcS/image-27.png' alt='location' width={270} height={361} />
                </div>
                <div className='order-2 md:order-1 mt-16 md:mt-0'>
                    <h3 className='font-bold mb-3  px-6 md:px-0'>OUR CURRENT COVERAGE</h3>
                    <p className=' px-6 md:px-0'>We currently cover:</p>
                    <ul className=' px-6 md:px-0 grid grid-cols-2 md:grid-cols-4 list-disc md:gap-20 ml-4 mt-1'>
                        <li>Uttara</li>
                        <li>Mirpur</li>
                        <li>Mohammadpur</li>
                        <li>Dhanmondi</li>
                    </ul>

                    <div className="overflow-x-auto bg-[#4C4C4D] md:bg-[#E08C23] mt-10">
                        <table className="md:min-w-full px-10 text-sm md:text-[16px]">
                            <thead className="text-left">
                                <tr className='text-[12px]'>
                                    <th className="whitespace-nowrap py-2  ">DISTRICT</th>
                                    <th className="whitespace-nowrap py-2 text-center ">AREA (KM)</th>
                                    <th className="whitespace-nowrap py-2 text-center ">POPULATION</th>
                                    <th className="whitespace-nowrap py-2 text-center ">DENSITY (SQ KM)</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                <tr>
                                    <td className="whitespace-nowrap py-2 ">Uttara</td>
                                    <td className="whitespace-nowrap py-2 text-center">69</td>
                                    <td className="whitespace-nowrap py-2 text-center">2.1M</td>
                                    <td className="whitespace-nowrap py-2 text-center">30.5K</td>
                                </tr>

                                <tr>
                                    <td className="whitespace-nowrap py-2  ">Mirpur</td>
                                    <td className="whitespace-nowrap py-2 text-center">96</td>
                                    <td className="whitespace-nowrap py-2 text-center">1.2M</td>
                                    <td className="whitespace-nowrap py-2 text-center">12.3K</td>
                                </tr>

                                <tr>
                                    <td className="whitespace-nowrap py-2  ">Mohammadpur</td>
                                    <td className="whitespace-nowrap py-2 text-center ">10</td>
                                    <td className="whitespace-nowrap py-2 text-center ">743K</td>
                                    <td className="whitespace-nowrap py-2 text-center ">78.1K</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap py-2  ">Dhanmondi</td>
                                    <td className="whitespace-nowrap py-2 text-center">11</td>
                                    <td className="whitespace-nowrap py-2 text-center">470K</td>
                                    <td className="whitespace-nowrap py-2 text-center">42K</td>
                                </tr>
                                <tr className=''>
                                    <td className="whitespace-nowrap py-2  font-bold">Total</td>
                                    <td className="whitespace-nowrap py-2  text-center font-bold">!86</td>
                                    <td className="whitespace-nowrap py-2  text-center ">4.5M</td>
                                    <td className="whitespace-nowrap py-2  text-center font-bold">24.2K</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <p className='text-center text-[16px] text-white md:w-6/12 mx-auto mt-10 px-6 md:px-0'>Reach close to 70% of target residents with an effective ad frequency, ensuring high recall and brand safety within a trusted and transparent platform.</p>
        </div>
    );
};

export default Location;