import React from 'react';
import loop from './images/LOGO_LOOP_v2.gif';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className='w-full h-full bg-black p-7 pt-40 py-20 flex md:items-end gap-4 md:gap-8 lg:gap-40 flex-col md:flex-row overflow-auto'>
            <nav className="flex w-full justify-between items-center p-7 absolute top-0 left-0 font-semibold text-lg">
                <Link to="/">BUREAUHELLER™</Link>
                <Link to="/">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px"
                         viewBox="0 0 155.71 162.19"
                         className="fill-current w-16 md:w-32 h-16 md:h-32 absolute flex-none hover:text-orange-500 right-8 top-8">
                        <polygon points="155.71,0.69 154.99,0 77.86,80.37 0.72,0 0,0.69 77.16,81.1 0,161.5 0.72,162.19 77.86,81.82
                        154.99,162.19 155.71,161.5 78.55,81.1 "
                        />
                    </svg>
                </Link>
            </nav>
            <div className="flex flex-col gap-2 md:gap-14 md:text-lg lg:text-xl xl:text-2xl font-semibold h-content md:flex-none">
                <div className='text-white w-full block md:flex flex-col'>
                    <span>BUREAUHELLER IS AN PARISIAN INDEPENDENT DESIGN STUDIO </span>
                    <span>FOUNDED BY IRVIN HELLER, THE STUDIO’S PRACTICE OSCILLATES </span>
                    <span>BETWEEN ART DIRECTION, GRAPHIC DESIGN, TYPOGRAPHY, </span>
                    <span>PHOTOGRAPHY AND NARRATIVE IMAGERY IN THE BROADEST </span>
                    <span>SENSE, SERVING A WIDE RANGE OF CLIENTS FROM THE FASHION, </span>
                    <span>CULTURAL AND THE LUXURY INDUSTRY.</span>
                </div>
                <div className='text-gray-500 w-full block md:flex flex-col'>
                    <span>BUREAUHELLER EST UN STUDIO DE DESIGN INDÉPENDANT</span>
                    <span>PARISIEN. FONDÉ PAR IRVIN HELLER, LA PRATIQUE DU STUDIO </span>
                    <span>OSCILLE ENTRE LA DIRECTION ARTISTIQUE, LE DESIGN</span>
                    <span>GRAPHIQUE, LA TYPOGRAPHIE, LA PHOTOGRAPHIE ET L’IMAGERIE</span>
                    <span>NARRATIVE AU SENS LARGE, AU SERVICE D’UN LARGE</span>
                    <span>ÉVENTAIL DE CLIENTS ISSUS DES SECTEURS DE LA MODE,</span>
                    <span> DE LA CULTURE ET DE L’INDUSTRIE DU LUXE.</span>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-8">
                <div className="flex-shrink flex gap-4 text-left">
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-col gap-2 md:w-60">
                            <p className='text-white font-semibold'>CONTACT</p>
                            <p className='text-white text-sm'>irvinheller.pro@gmail.com<br/>+33.6.64.74.40.37</p>
                        </div>
                        <div className="flex flex-col gap-2 md:w-60">
                            <p className='text-white font-semibold'>INSTAGRAM</p>
                            <p className='text-white text-sm'><a href="https://instagram.com/bureauheller?igshid=YmMyMTA2M2Y=" id="bureauInsta">BureauHeller</a></p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-col gap-2 ">
                            <p className='text-white font-semibold'>OFFICE</p>
                            <p className='text-white text-sm'>1 Rue Alexandre Parodi<br/> 75010 Paris France.</p>
                        </div>
                        <div>
                            <img src={loop} alt="instagram" border="0" className="h-20"></img>
                        </div>
                    </div>
                </div>
                <p className='text-white'>To see more confidential projects apply <a href={"/"} className="text-gray-500">here</a></p>
            </div>

        </div>
    );
};

export default About;