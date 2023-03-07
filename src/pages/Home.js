import React from 'react';
import PropTypes from 'prop-types';
import res from './workOn';
import axios from 'axios';
import ImageSlider from './ImageSlider';

const images = res;

// Transforme la liste d'images en une liste d'objets avec une URL et une légende pour chaque image
const slideImages = images.map((image, index) => ({ url: image, caption: `Slide ${index}` }));

const Home = props => {
  return (
    <div className='h-full w-screen bg-black object-cover md:h-100% flex h-100%  '>
      <ImageSlider callback={props.callback} />
    </div>
  );
};

Home.propTypes = {
    callback: PropTypes.func,
};

export default Home;





