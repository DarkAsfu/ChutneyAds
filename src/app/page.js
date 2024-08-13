/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */

'use client'
import Advertisement from '@/Components/Advertisement/Advertisement';
import Banner from '@/Components/Banner/Banner';
import Chart from '@/Components/Chart/Chart';
import Contact from '@/Components/Contact/Contact';
import Location from '@/Components/Location/Location';
import Second from '@/Components/Second/Second';
import Services from '@/Components/Services/Services';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from '@/Components/Preloader/Preloader';

const page = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      document.body.style.overflow = 'auto';
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <>
      {loading ? <Preloader /> :
        <div>
          <Banner />
          <Second />
          <Services />
          <Advertisement />
          <Chart />
          <Location />
          <Contact />
        </div>
      }
    </>
  );
};

export default page;
