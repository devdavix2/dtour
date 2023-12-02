import React from 'react';
import img from '../assets/img/about.jpg'; 

const About = () => {
  return (
    <section className="about-us-container  bg-darkBackground   lg:m-20 rounded-md">
      <h2 className="text-3xl font-bold  mx-auto p-10 lg:pt-10 text-center text-white">About Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <img src={img} alt="About Our Travel Agency" className="w-full h-auto rounded-md p-8" />
        </div>

        <div className="flex flex-col p-5 mb-20 justify-center">
          <p className="text-white text-start">
            Welcome to Dtours! We are passionate about creating unforgettable travel
            experiences that leave lasting memories.
          </p>
          <p className="text-white  text-start">
            Whether you're seeking a relaxing beach getaway, an adventurous mountain retreat, or the
            excitement of city lights, we've got the perfect destination for you.
          </p>
          <p className="text-white  text-start">
            Our team of experienced travel experts is dedicated to providing personalized service
            to ensure your journey is seamless from start to finish. Explore the world with us and
            let your wanderlust take flight!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
