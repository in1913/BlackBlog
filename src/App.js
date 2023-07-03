import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfoilo';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Contact/>
      <Footer></Footer>
    </>
  );
}

export default App;
