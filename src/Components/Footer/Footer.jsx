import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#3D3D3D]">
                <div className="mx-auto w-10/12 px-4 py-8 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center text-teal-600 sm:justify-start">
                            <Image src="https://i.ibb.co/b5fqd8F/Isolation-Mode.png" alt='logo' width={200} height={50}/>
                        </div>

                        <div className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right hidden md:block">
                            <ul className='text-white flex gap-10'>
                                <li>Why DOOH</li>
                                <li>Benefits DOOH</li>
                                <li>Impact & Coverage</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;