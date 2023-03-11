import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import res from './workOn';


console.log("res new info",res);

const images = res;
const slideImages = images.map((image, index) => ({ url: image, caption: `Slide ${index}` }));
//refresh res to get the new list of images


const SlideShow = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    props.callback(slideImages[0].caption);
    return () => { props.callback(null)};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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

let screenFit = "sm: object-contain w-90   background-color:white flex h-80  object-contain md: object-cover lg: object-cover xl:w-full h-full object-cover ";


//detect if resizing until 768px
window.addEventListener("resize", function() {
  if (window.innerWidth < 768) {
    screenFit = "object-contain sm: object-contain w-90   background-color:white flex h-80  object-contain md: object-cover lg: object-cover xl:w-full h-full object-cover ";
  }

}, false);

//

console.log("screenFit",screenFit);
  return (
    <div className=" px-2  md:px-0 h-80 md:h-full w-full md:w-screen md:bg-black md: flex" onClick={handleSlideClick}>
      <img id="img_mobile"
          src={slideImages[currentIndex].url}
          alt={'project'}
          className={screenFit}/>
    </div>
    
  );
};

SlideShow.propTypes = {
    callback: PropTypes.func,
};

export default SlideShow;
