import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ImageGallery from "./pages/ImageGallery";
import myImage from "./svg_outils_copie/FIRSTSCREEN.png";
import myImageMobile from "./svg_outils_copie/FIRSTSCREEN-mobile.png";
import refresh  from "./pages/workOn" ;
import ImageList from "./pages/ImagesList";

const ImageComponent = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

    
 

  return (
    <div className="object-cover">
      {showImage && <img id="image-container" className="  z-99999"src={ window.innerWidth < 768 ? myImageMobile : myImage} alt="My Image" />}
    </div>
  );
};








const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between text-white ">
      <Router>
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/galerie" element={<ImageGallery />}/>
            <Route path="/images" element={<ImageList/>} />
          </Routes>  
      </Router>
      <ImageComponent />
    </div>
  );
};

export default App;
