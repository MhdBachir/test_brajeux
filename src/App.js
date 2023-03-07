import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import urlLogo from "./svg_outils_copie/LOGOBUREAUHELLER_BLANC.svg";

const App = () => {
  const [slideDescription, setSlideDescription] = React.useState("");
  return (
    <div className="h-screen w-screen flex flex-col justify-between text-white">
    <Router>
        <nav className="flex w-full justify-between items-center p-7 absolute">
          <div>
            <Link to="/"><img src={urlLogo} className='w-full h-auto'/></Link>
          </div>
          <div className="flex items-center justify-end gap-4">
            <Link to="/about">About</Link>
            <Link to="https://www.google.com">Google</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home callback={setSlideDescription}/>}/>
        </Routes>
      <footer className="flex w-full justify-between items-center p-7 absolute bottom-0">
         
            <Link to="/">2023</Link>
            
             <Link to="https://www.google.com">{slideDescription}</Link>
         
          

        </footer>
    </Router>
    </div>
  );
}

export default App;
