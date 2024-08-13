import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-white">
            <div className="mx-auto md:w-10/12 px-4 sm:px-6 lg:px-8 py-3 md:py-0">
                <div className="flex items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                        <Image className='md:hidden block' src="https://i.ibb.co/Dfx3GV3/Logo.png" width={141} height={55} alt='LOGO' />
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <div className="flex items-center gap-4">
                          

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;