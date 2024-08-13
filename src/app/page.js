import Advertisement from '@/Components/Advertisement/Advertisement';
import Banner from '@/Components/Banner/Banner';
import Services from '@/Components/Services/Services';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Advertisement/>
    </div>
  );
};

export default page;