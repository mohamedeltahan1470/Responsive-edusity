import "./index.css";
import './App.css';
import Hero from './component/Hero';
import Navebar from './component/Navebar';
import Program from './component/Program';
import Title from './component/Title';
import About from "./component/About";
import Campus from "./component/Campus";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Videoplayer from "./component/Videoplayer";
import { useState } from "react";

function App() {
  const [playstate , setPlaystate] = useState(false);

  return (
    <>
     <Navebar/>
     <Hero/>
     <div className="container" >
     <Title subtitle="Our Program" title="What We Offer"/>
     <Program/>
     <About setPlaystate={setPlaystate}/>
     <Title subtitle="Gallery" title="Campus Photos"/>
     <Campus/>
     <Title subtitle="TWSTIMONTALS" title="What Student Says"/>
     <Testimonials/>
     <Title subtitle="Contact Us" title="Get In Touch"/>
     <Contact/>
     <Footer/>
     </div>
    <Videoplayer playstate={playstate} setPlaystate={setPlaystate}/>
    </>
  )
}

export default App
