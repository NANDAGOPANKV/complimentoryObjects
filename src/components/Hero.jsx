import React, { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AppContext } from "../App";

export const Hero = () => {
  let { first, setfirst } = useContext(AppContext);

  console.log(first);
  return (
    <div className="text-white">
      <div className="max-w-[800px]  mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#00df9a] uppercase font-bold text-sm ">
          growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:p-6 font-bold">
          gorw with data
        </h1>
        <div className="w-full flex">
          <p className="text-white w-full text-center md:text-5xl sm:text-6xl text-xl font-bold md:pl-4 pl-2">
            Fast, Flexible financing for
            <Typewriter
              className="text-white w-full text-center md:text-5xl sm:text-6xl text-xl font-bold md:pl-4 pl-2"
              words={["BTB", "SASS", "BTC"]}
              loop={100}
              deleteSpeed={300}
              typeSpeed={300}
            />
          </p>
        </div>
        <div className="w-full">
          <button
            className="bg-[#00df9a] rounded-md font-medium my-6 mx-auto px-7 py-2"
            onClick={setfirst("Hello")}
          >
            Click to add Values
          </button>
          <p className="md:text-2xl text-xl font-bold text-gray-500 p-1 ">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS
            platforms
          </p>
          <button className="bg-[#00df9a] rounded-md font-medium my-6 mx-auto px-7 py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
