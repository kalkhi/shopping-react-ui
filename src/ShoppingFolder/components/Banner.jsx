import React from 'react';
import '../../App.css'; 

const Banner = () => {
  return (
    <div className='bannerSection'>
      <div className='bannerBox'>
        <img src={`${process.env.PUBLIC_URL}/banners/mens.gif`} alt='banner' />
      </div>
    </div>
  );
};

export default Banner;
