import React, { useState } from 'react';
import PropTypes from 'prop-types';
import res from './workOn';
import ImageSlider from './slider';

const images = res;
const slideImages = images.map((image, index) => ({ url: image, caption: `Slide ${index}` }));
const SlideShow = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideClick = (event) => {
    // On calcule la position du clic par rapport à la largeur de la fenêtre
    const clickPosition = event.clientX / window.innerWidth;
    if (clickPosition < 0.5) {
      // Si le clic est à gauche de la moitié de l'écran, on affiche la diapositive précédente
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      props.callback(slideImages[newIndex].caption);
    } else {
      // Si le clic est à droite de la moitié de l'écran, on affiche la diapositive suivante
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      props.callback(slideImages[newIndex].caption);
    }
  };

  return (
    <div className="h-full w-screen bg-black object-cover md:h-100% flex h-100%" onClick={handleSlideClick}>
      <img src={slideImages[currentIndex].url} className="w-full h-full object-cover lg:w-full h-full object-cover sm:h-auto w-90 object-cover background-color:white flex h-80" />
    </div>
  );
};

SlideShow.propTypes = {
    callback: PropTypes.func,
};

export default SlideShow;
