// create a function that create a list of filenames of IMAGES-site order by the name of the file wich is a number en gardant l'url de l'image
 import React from 'react';
    import PropTypes from 'prop-types';


    const ImageList = () => {
        const images = require.context('../pages/IMAGES-site', true);
        const imageList = images.keys().sort((a, b) => {
            const aNumber = parseInt(a.match(/\d+/)[0], 10);
            const bNumber = parseInt(b.match(/\d+/)[0], 10);
            return aNumber - bNumber;
        });
        console.log("images listed",imageList);
        return imageList;
       
    };


  /*  const ImageList = () => {
        const images = require.context('../pages/IMAGES-site', true);
        const imageList = images.keys().sort((a, b) => {
            const aNumber = parseInt(a.match(/\d+/)[0], 10);
            const bNumber = parseInt(b.match(/\d+/)[0], 10);
            return aNumber - bNumber;
        });
        return imageList;
    };*/

const res2 = ImageList();

   //create a list that add  only between a the  first caractere and the second of an expression in a list add ./IMAGES-site and the rest of the expression and return the list with the new expression
    const res = res2.map((res2) => {
        const url = res2.slice(2);
        return `./IMAGES-site/${url}`;
    });
     
    console.log("images",res);
    console.log("res",res);



    export default res;


    



