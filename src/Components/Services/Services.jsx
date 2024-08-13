import Image from 'next/image';
import React from 'react';
import { FiTarget } from "react-icons/fi";
import { IoMove } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
const Services = () => {
    const servicesList = [
        {
            icon: <FiTarget />,
            name: "Precision Targeting",
            description: "Ensure your message reaches those most likely to convert.",
        },
        {
            icon: <IoMove />,
            name: "Innovative Reach",
            description: "Capture attention with unique digital placements in high-traffic areas.",
        },
        {
            icon: <IoBarChartOutline />,
            name: "Data-Driven Insights",
            description: "Optimize your campaigns with real-time market insights to maximize engagement and recall.",

        }
    ]
    // console.log(servicesList);
    return (
        <div className='bg-[#F9F9F9] pt-20'>
            <div className='px-6 md:px-0 md:w-10/12 mx-auto'>
                <h1 className='text-[34px] md:text-[45px] font-bold text-black text-center'>Why Digital Out Of Home Advertising</h1>
                <div className='grid md:grid-cols-3 text-center align-middle gap-10 mt-10'>
                {
                    servicesList.map((service, idx) => <div key={idx} className='bg-[#FDFFCD] px-10 md:px-[76px] py-20'>
                        <div className="text-[72px] bg-[#FE451B] text-white max-w-max p-6 rounded-full mx-auto">
                            {service.icon}
                        </div>
                        <h1 className='text-[30px] md:text-[24px] text-[#FE451B] font-bold mt-10'>{service.name}</h1>
                        <p className='text-black text-[20px] font-normal mt-6'>{service.description}</p>
                    </div>
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default Services;