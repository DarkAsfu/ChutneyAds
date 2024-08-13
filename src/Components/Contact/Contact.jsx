import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <div className='md:flex'>
            <div className='hidden md:block'>
                <Image src="https://i.ibb.co/bQCwfb4/image-17.png" alt='' width={418} height={816} />
            </div>
            <div>
                <div className='pt-20 pb-10'>
                    <h2 className='font-bold text-[30px] md:text-[45px] text-center uppercase px-6'>Book a Consultation Call</h2>
                    <p className='text-center text-[16px]  md:w-7/12 mx-auto px-6 md:px-0'>Ready to transform your brand’s visibility and engagement? take the next step with Chutney Ads.</p>
                    <form className='px-6 md:px-0 md:w-[605px] mx-auto mt-10'>
                        <input type="text" placeholder="First Name" className="input w-full mx-auto bg-[#D2DAED2B] py-3 pl-8 rounded-md" />
                        <input type="text" placeholder="Last Name" className="input w-full mx-auto bg-[#D2DAED2B] py-3 pl-8 mt-4 rounded-md" />
                        <input type="email" placeholder="Email Address" className="input w-full mx-auto bg-[#D2DAED2B] py-3 mt-4 pl-8 rounded-md" />
                        <textarea className="textarea w-full mx-auto h-[160px] bg-[#D2DAED2B] py-3 mt-4 pl-8 rounded-md" placeholder="Type message"></textarea>
                        <div className=' max-w-min mx-auto'>
                        <button className='bg-[#2C2C2C] text-[16px] text-white px-14 py-4 font-light mt-10'>
                            Submit
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='hidden md:block'>
                <Image src="https://i.ibb.co/QKSp6DT/image-18.png" alt='' width={418} height={816} />
            </div>
        </div>
    );
};

export default Contact;