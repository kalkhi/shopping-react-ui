import React, { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collection from '../components/Collection';
import Footer from '../components/Footer';
import WomenCollection from '../components/WomenCollection';
import Childrens from '../components/Childrens';
import Makeup from '../components/Makeup';

import { Gents } from '../data';
import { Ladies } from '../data';
import { Children } from '../data';
import { Beauty } from '../data';

const Mainpage = () => {

  const [gentsFashion] = useState(Gents);
  const [ladiesFashion] = useState(Ladies);
  const [childrensFashion] = useState(Children);
  const [Fashionbeauty] = useState(Beauty);

  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFashion={gentsFashion} />
      <WomenCollection ladiesFashion={ladiesFashion} />
      <Childrens childrensFashion={childrensFashion} />
      <Makeup Fashionbeauty={ Fashionbeauty } />
     
      <Footer />
    </div>
  );
};

export default Mainpage;
