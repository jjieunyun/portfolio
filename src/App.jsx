import { useEffect, useRef, useState } from 'react';
import './App.css';
import About from './components/about/about';
import Arrow from './components/arrow/arrow';
import Contact from './components/contact/contact';
import Home from './components/home//home';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/skills';
import Works from './components/works/works';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);
  
  const [homeHeight, setHomeHeight] = useState(0)
  const sectionRefs = useRef([homeRef,aboutRef,skillsRef,worksRef,contactRef])

  

  useEffect(()=>{
    setHomeHeight(homeRef.current.clientHeight)
  },[homeHeight])


  const scrollEvent = (text) => {

    switch(text){
      case 'Home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Myworks':
        worksRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }

  const clickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const clickHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="App">
      <Navbar scrollEvent={scrollEvent} sectionRefs={sectionRefs}/>
      <Home clickContact={clickContact} ref={homeRef}/>
      <About ref={aboutRef}/>
      <Skills ref={skillsRef} scrollEvent={scrollEvent}/>
      <Works ref={worksRef}/>
      <Contact  ref={contactRef}/>
      <Arrow clickHome={clickHome} homeHeight={homeHeight}/>
    </div>
  );
}

export default App;

