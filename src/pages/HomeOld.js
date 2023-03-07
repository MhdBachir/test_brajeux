import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import res from './workOn';
import axios from 'axios';
import  ImageSlider from './slider';

/*import Slideshow from './slider';*/

//show the list of images



const images = res ;

// get the number in the name of image in the list and replace the url by '../pages/IMAGES-site/' with the number
const slideImages = [];
for (let i = 0; i < images.length; i++) {
    
    slideImages.push({url:images[i],caption:'Slide '+i});
}




console.log("images[0].url : ",slideImages[0].url);




//create a slider with the list of images

const Home = props => {
    /*return (
        <div className='h-90 w-screen bg-black object-cover md:h-auto flex h-auto'>
            <img src={images} alt='test' className='w-full h-full object-cover   sm:h-auto w-90 object-cover background-color:white flex h-80 '/>
        </div>
    );*/


    return (
        <div className='h-full w-screen bg-black object-cover md:h-100% flex h-100%'>
            <img src={slideImages[0].url} className='w-full h-full object-cover   lg:w-full h-full object-cover sm:h-auto w-90 object-cover background-color:white flex h-80 '/>
        </div>
    );


};

Home.propTypes = {
    
};
console.log("res",res);

export default Home;