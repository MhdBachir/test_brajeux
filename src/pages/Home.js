import React from 'react';
import ImageSlider from './ImageSlider';
import {Link} from "react-router-dom";

const Home = () => {
    const [slideDescription, setSlideDescription] = React.useState("");
    const [showImage, setShowImage] = React.useState(true);

    React.useEffect(() => {
        // Set a timeout of 2 seconds to hide the image
        const timerId = setTimeout(() => {
          setShowImage(false);
        }, 2000);
    
        // Clean up the timeout if the component unmounts
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    const [cursorUrl, setCursorUrl] = React.useState(
        './svg_outils_copie/FLECHE_BLANC_left.png'
      );
    
      const handleMouseMove = (event) => {
        const screenWidth = window.innerWidth;
        if (event.clientX < screenWidth / 2) {
          setCursorUrl('./src/svg_outils_copie/FLECHE_BLANC_left.png');
        } else {
          setCursorUrl('src/svg_outils_copie/FLECHE_BLANC_right.png');
        }
      };

      const handleImageTransitionEnd = () => {
        if (!showImage) {
          // Image has faded out, remove it from the DOM
          setShowImage(false);
        }
      };
      
    return (
    <div className=' h-full w-screen bg-white md:bg-black flex justify-center items-center text-black md:text-white '  onMouseMove={handleMouseMove}
    style={{ cursor: `url(${cursorUrl}), auto` }}>
        
       
        
        <nav className="flex w-full justify-between items-center p-7 absolute font-semibold text-lg top-0 left-0">
            <Link to="/">BUREAUHELLER™</Link>
            <div className="flex items-center justify-end gap-8 ">
                <Link  className=" hover:text-orange" to="/about">ABOUT</Link>
                <Link  className=" hover:text-orange"to="https://instagram.com/bureauheller?igshid=YmMyMTA2M2Y=">INSTAGRAM</Link>
            </div>
        </nav>
      <ImageSlider callback={setSlideDescription} />
        <footer className="flex w-full justify-center md:justify-between items-center p-7 absolute bottom-0 font-semibold ">
            <Link to="/" className="hidden md:block">2023©</Link>
            <Link >{slideDescription?.toUpperCase()}</Link>
        </footer>
    </div>
  );
};
export default Home;





