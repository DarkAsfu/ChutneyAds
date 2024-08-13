import Advertisement from '@/Components/Advertisement/Advertisement';
import Banner from '@/Components/Banner/Banner';
import Chart from '@/Components/Chart/Chart';
import Services from '@/Components/Services/Services';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Advertisement/>
      <Chart/>
    </div>
  );
};

export default page;