import Advertisement from '@/Components/Advertisement/Advertisement';
import Banner from '@/Components/Banner/Banner';
import Chart from '@/Components/Chart/Chart';
import Contact from '@/Components/Contact/Contact';
import Location from '@/Components/Location/Location';
import Services from '@/Components/Services/Services';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Advertisement/>
      <Chart/>
      <Location/>
      <Contact/>
    </div>
  );
};

export default page;