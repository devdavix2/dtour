import React, { useState } from 'react';
import { FaGlobe, FaSuitcase, FaStar, FaMapMarkedAlt, FaUserTie, FaComments } from 'react-icons/fa';
import img from '../assets/img/travel1.jpg';

const FeatureItem = ({ icon, title }) => {
  return (
    <div className="flex items-center mb-6 m-2">
      <span className=" bg-gray-900 rounded-3xl font-semibold text-white mr-2 text-xl">{icon}</span>
      <h3 className="text-md  font-medium">{title}</h3>
    </div>
  );
};

const Features = () => {
  const [imageUrl] = useState(img);

  const features = [
    { icon: <FaMapMarkedAlt className="text-white m-2 " />, title: 'Experiences' },
    { icon: <FaUserTie className="text-white m-2"  />, title: 'Guides' },
    { icon: <FaComments className="text-white  m-2" />, title: 'Support' },
    { icon: <FaStar className="text-white m-2" />, title: 'Accommodations' },
  ];

  return (
    <div className="flex rounded-5xl lg:m-24 gap-2 flex-col lg:flex-row">
      {/* Left Column with Image */}
      <div className="lg:w-1/2 rounded-5xl">
        <img src={imageUrl} alt="Travel Destination" className="w-full h-auto mb-2 p-5 rounded-5xl" />
      </div>

      {/* Right Column with Features */}
      <div className="p-4 lg:w-1/2 lg:pl-6">
        <h2 className="text-2xl font-bold mb-4">Our Features</h2>
        <p className="mb-8">
          Explore the world with confidence. Dtours offers a range of exceptional features to make
          your journey unforgettable.
        </p>

        <div className="flex flex-wrap m-4 ">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
