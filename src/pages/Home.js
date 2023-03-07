import React from 'react';
import ImageSlider from './ImageSlider';
import {Link} from "react-router-dom";

const Home = () => {
    const [slideDescription, setSlideDescription] = React.useState("");

    return (
    <div className='h-full w-screen bg-white md:bg-black flex justify-center items-center text-black md:text-white '>
        <nav className="flex w-full justify-between items-center p-7 absolute font-semibold text-lg top-0 left-0">
            <Link to="/">BUREAUHELLER™</Link>
            <div className="flex items-center justify-end gap-8">
                <Link to="/about">ABOUT</Link>
                <Link to="https://www.google.com">GOOGLE</Link>
            </div>
        </nav>
      <ImageSlider callback={setSlideDescription} />
        <footer className="flex w-full justify-center md:justify-between items-center p-7 absolute bottom-0 font-semibold ">
            <Link to="/" className="hidden md:block">2023</Link>
            <Link to="https://www.google.com" >{slideDescription?.toUpperCase()}</Link>
        </footer>
    </div>
  );
};
export default Home;





