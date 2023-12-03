import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    console.log('Setting document title');
    document.title = 'Dtours | Travel Agency';
  }, []);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dtours | Travel Agency</title>
          <meta name="description" content="Explore the world with confidence. Dtours offers a range of exceptional features to make your journey unforgettable." />
        </Helmet>
        
        <Navbar />
        <main>
          <div id="home">
            <Home />
          </div>
          <div id="features">
            <Features />
          </div>
          <div id="destinations">
            <Destinations />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </main>
      </div>
    </HelmetProvider>
  );
};

export default App;
