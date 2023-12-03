import React from 'react';
import imgbeach from '../assets/img/beach.jpg';
import imgmountain from '../assets/img/mountain.jpg';
import imgisland from '../assets/img/island.jpg';



const Destinations = () => {
  const destination = [
    {
      id: 1,
      title: 'Beach Paradise',
      description: 'Explore the beautiful sandy beaches and enjoy the sunsets.',
      imageUrl: imgbeach,
    },
    {
      id: 2,
      title: 'Mountain Retreat',
      description: 'Discover tranquility in the midst of stunning mountain landscapes.',
      imageUrl: imgmountain,
    },
    {
      id: 3,
      title: 'Island Paradises',
      description: 'Escape to paradise on these islands, offering tropical beauty.',
      imageUrl: imgisland,
    },
  ];

  return (
    <div className="destinations-container mx-auto p-10 text-center">
      <h2 className="text-2xl font-bold">Explore Amazing Destinations</h2>
      <div className="flex flex-col lg:flex-row">
        {destination.map((destination) => (
          <div key={destination.id} className="destination-card mx-auto p-10 mb-5 max-w-md lg:mr-5">
            <img
               width={300} height={200}
              src={destination.imageUrl}
              alt={destination.title}
              className="w-full h-auto rounded-md"
            />
            <h3 className="text-lg font-semibold">{destination.title}</h3>
            <p className="text-gray-500">{destination.description}</p>
            <button className="bg-gray-900 hover:bg-blue-900 text-white font-bold py-2 px-4 mt-4 rounded-md"
>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
