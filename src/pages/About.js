import React from 'react';
import PropTypes from 'prop-types';
import loop from './images/LOGO_LOOP_v2.gif';

const About = props => {
    return (
        <div className='w-full h-full  bg-black p-7 py-20 gap-7 flex flex-col  md:flex-row  items-end '>
            <div className="w-full md:w-1/2">
            <div className='text-white content-center left-0'>
                    <p>BUREAUHELLER IS AN PARISIAN INDEPENDENT DESIGN STUDIO</p>
                    <p>FOUNDED BY IRVIN HELLER, THE STUDIO’S PRACTICE OSCILLATES</p>
                    <p>BETWEEN ART DIRECTION, GRAPHIC DESIGN, TYPOGRAPHY,</p>
                    <p>PHOTOGRAPHY AND NARRATIVE IMAGERY IN THE BROADEST</p> 
                    <p>SENSE, SERVING A WIDE RANGE OF CLIENTS FROM THE FASHION,</p>
                    <p>CULTURAL AND THE LUXURY INDUSTRY.</p>
                </div> 
                <div className='text-gray-500 content-center left-0'>
                    <p>BUREAUHELLER EST UN STUDIO DE DESIGN INDÉPENDANT</p> 
                    <p>PARISIEN. FONDÉ PAR IRVIN HELLER, LA PRATIQUE DU STUDIO </p>
                    <p>OSCILLE ENTRE LA DIRECTION ARTISTIQUE, LE DESIGN</p>
                    <p>GRAPHIQUE, LA TYPOGRAPHIE, LA PHOTOGRAPHIE ET L’IMAGERIE</p>
                    <p>NARRATIVE AU SENS LARGE, AU SERVICE D’UN LARGE</p>
                    <p>ÉVENTAIL DE CLIENTS ISSUS DES SECTEURS DE LA MODE,</p>
                    <p> DE LA CULTURE ET DE L’INDUSTRIE DU LUXE.</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 ">
            <div id="div5">
                      <p className='text-white'>CONTACT</p> 
                      <p className='text-white' id="addressMail_about">irvinheller.pro@gmail.com<br/>+33.6.64.74.40.37</p>

                </div>
                <div className=''>                      
                        <p className='text-white' id="right_contact_info_3">INSTAGRAM</p>
                        <p className='text-white' id="right_contact_Bureau"><a href="https://instagram.com/bureauheller?igshid=YmMyMTA2M2Y=" id="bureauInsta">BureauHeller</a></p> 
                </div>
                 <div >
                    <p className='text-white' >OFFICE</p>
                    <p className='text-white' >1 Rue Alexandre Parodi<br/> 75010 Paris France.</p>      
                </div>
                <div>
                    <img src={loop} alt="instagram" border="0" id="instaLogo"></img>

                </div>
                <div className='text-white'>
                        <p className='text-white'>To see more confidential projects apply <a>here</a></p>
                     </div>
            
            </div>

        </div>
        
        /*<div className='w-full h-full bg-black p-7 py-20 gap-7 flex  sm:flex flex-column'>
            <div id="parent" className='w-full  text-left place-items-end sm:flex sm:flex-col'>
            <div id="div1"  className='content-center'> 
                <div className='text-white content-center'>
                    <p>BUREAUHELLER IS AN PARISIAN INDEPENDENT DESIGN STUDIO</p>
                    <p>FOUNDED BY IRVIN HELLER, THE STUDIO’S PRACTICE OSCILLATES</p>
                    <p>BETWEEN ART DIRECTION, GRAPHIC DESIGN, TYPOGRAPHY,</p>
                    <p>PHOTOGRAPHY AND NARRATIVE IMAGERY IN THE BROADEST</p> 
                    <p>SENSE, SERVING A WIDE RANGE OF CLIENTS FROM THE FASHION,</p>
                    <p>CULTURAL AND THE LUXURY INDUSTRY.</p>
                </div> 
            </div>
            <div id="div2" className='place-items-start '>
                <div id="div5">
                      <p className='text-white'>CONTACT</p> 
                      <p className='text-white' id="addressMail_about">irvinheller.pro@gmail.com<br/>+33.6.64.74.40.37</p>

                </div>
                <div id="div6">
                <p className='text-white'  >OFFICE</p>
                <p className='text-white'  >1 Rue Alexandre Parodi<br/> 75010 Paris France.</p>      
                </div>
                <div id="div7">                      
                    <p className='text-white' id="right_contact_info_3">INSTAGRAM</p>
                      <p className='text-white' id="right_contact_Bureau"><a href="https://instagram.com/bureauheller?igshid=YmMyMTA2M2Y=" id="bureauInsta">BureauHeller</a></p> </div>
                <div class="div8">
                    <img src={loop} alt="instagram" border="0" id="instaLogo"></img>
                </div>
        
                 
            </div>
            <div id="div3">
            <div className='text-gray-500'>
                    <p>BUREAUHELLER EST UN STUDIO DE DESIGN INDÉPENDANT</p> 
                    <p>PARISIEN. FONDÉ PAR IRVIN HELLER, LA PRATIQUE DU STUDIO </p>
                    <p>OSCILLE ENTRE LA DIRECTION ARTISTIQUE, LE DESIGN</p>
                    <p>GRAPHIQUE, LA TYPOGRAPHIE, LA PHOTOGRAPHIE ET L’IMAGERIE</p>
                    <p>NARRATIVE AU SENS LARGE, AU SERVICE D’UN LARGE</p>
                    <p>ÉVENTAIL DE CLIENTS ISSUS DES SECTEURS DE LA MODE,</p>
                    <p> DE LA CULTURE ET DE L’INDUSTRIE DU LUXE.</p>
                </div>
                 
            </div>
            <div id="div4" className='md:order-4 sm:order-4'>
            <div className='text-white'>
            <p  className='text-white'>To see more confidential projects apply <a>here</a></p>
            </div>
            </div>
        </div>
            

        </div>*/
        
    );
};

About.propTypes = {
    
};

export default About;