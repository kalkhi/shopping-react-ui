import React from 'react';
import '../../App.css';  


const Makeup = ({ Fashionbeauty }) => {
  const { title, image1, image2, image3, image4 } = Fashionbeauty;

  return (
    <div className='collectionSection'>
      <h2>{title}</h2>
      <div className='bannerBox'>
        <img src={`${process.env.PUBLIC_URL}/banners/beauty.gif`} alt="Beauty Banner" />
      </div>
      <div className="beautyImages">
        <img src={`${process.env.PUBLIC_URL}/${image1}`} alt="Beauty Product 1" />
        <img src={`${process.env.PUBLIC_URL}/${image2}`} alt="Beauty Product 2" />
        <img src={`${process.env.PUBLIC_URL}/${image3}`} alt="Beauty Product 3" />
        <img src={`${process.env.PUBLIC_URL}/${image4}`} alt="Beauty Product 4" />
      </div>
    </div>
  );
};

export default Makeup;


