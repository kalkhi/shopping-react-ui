import React from 'react';
import '../../App.css'; 

const Collection = (props) => {
  const { title, image1, image2, image3, image4 } = props.gentsFashion;
  
  return (
    <div className='collectionSection'>
      <h2>{title}</h2>
      <div className="menImages">
        <img src={`${process.env.PUBLIC_URL}/${image1}`} alt={title} />
        <img src={`${process.env.PUBLIC_URL}/${image2}`} alt={title} />
        <img src={`${process.env.PUBLIC_URL}/${image3}`} alt={title} />
        <img src={`${process.env.PUBLIC_URL}/${image4}`} alt={title} />
      </div>
    </div>
  );
};

export default Collection;

