import React from 'react';

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-[#FE451B]"></div>
    </div>
  );
};

export default Preloader;
