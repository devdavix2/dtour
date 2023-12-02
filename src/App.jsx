import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="features">
          <Features />
        </div>
        <div  id="destinations">
          <Destinations />
        </div>
        <div  id="about">
          <About />
        </div>
        <div  id="contact">
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
