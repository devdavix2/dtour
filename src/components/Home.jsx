import React from "react";
import img from '../assets/img/travel.png';

const Home = () => {
    const backgroundColor = 'bg-brightColor';

    return (

        <div className="min-h-screen lg:min-h-[70vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 ">
            <div className="flex flex-col text-center lg:text-start gap-5">
                <h1 className="font-semibold text-5xl ">Explore the Ultimate Travel Destinations</h1>
                <p>
                    Embark on unforgettable journeys with Dtours, where we curate the
                    ultimate destinations for your next adventure.
                </p>
                <div>
                <button
                  className="bg-gray-900 hover:bg-blue-900 text-white font-bold py-2 px-4 mt-4 rounded-md"
                
              >
                Destinations
              </button>
                </div>
            </div>
            <div className="mt-14 lg:mt-0 w-full lg:w-4/5">
                <img src={img} alt="img" /> 
            </div>
        </div>
    );
};

export default Home;
