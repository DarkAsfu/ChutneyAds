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
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup to restore scrolling when component unmounts or loading ends
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