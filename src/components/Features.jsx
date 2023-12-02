import React, { useState } from 'react';
import { FaGlobe, FaSuitcase, FaStar, FaMapMarkedAlt, FaUserTie, FaComments } from 'react-icons/fa';
import img from '../assets/img/travel1.jpg';
const FeatureItem = ({ icon, title }) => {
  return (
    <li className="flex items-center mb-6">
      <span className="mr-4 text-3xl">{icon}</span>
      <h3 className="text-base font-bold">{title}</h3>
    </li>
  );
};

const Features = () => {
  const [imageUrl] = useState(img); 

  const features = [
    { icon: <FaGlobe className="text-blue-500" />, title: 'Exquisite Destinations' },
    { icon: <FaSuitcase className="text-green-500" />, title: 'Personalized Itineraries' },
    { icon: <FaStar className="text-yellow-500" />, title: 'Luxurious Accommodations' },
    { icon: <FaMapMarkedAlt className="text-red-500" />, title: 'Memorable Experiences' },
    { icon: <FaUserTie className="text-indigo-500" />, title: 'Expert Guides' },
    { icon: <FaComments className="text-purple-500" />, title: '24/7 Customer Support' },
  ];

  const columns = 2; 
  const itemsPerColumn = Math.ceil(features.length / columns);
  const columnedFeatures = Array.from({ length: columns }, (_, columnIndex) =>
    features.slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
  );

  return (
    <div className="flex rounded-5xl  lg:m-32 gap-2 flex-col lg:flex-row">
      {/* Left Column with Image */}
      <div className="lg:w-1/2 rounded-5xl">
        <img src={imageUrl} alt="Travel Destination"   className="w-full h-auto mb-2 p-5 rounded-5xl " />
      </div>

      {/* Right Column with Features */}
      <div className="p-8 lg:w-1/2 lg:pl-8">
        <h2 className="text-2xl font-bold mb-4 ">Our Features</h2>
        <p className="mb-8">
          Explore the world with confidence. Dtours offers a range of exceptional features to make
          your journey unforgettable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {columnedFeatures.map((column, columnIndex) => (
            <ul key={columnIndex} className="mb-4">
              {column.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
