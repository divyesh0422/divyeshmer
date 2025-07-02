import React from "react";
import heroImage from "../assets/My.picture.jpeg";
import Portfolio from "../pages/Portfolio";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#11103f] leading-tight">
            Hi, I'm <span className="text-indigo-400">Divyesh !</span> <br />
            <Typewriter
              words={["Creative Player", "Web Developer", "UI Designer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <br />
          
          </h1>

          <p className="text-gray-600 text-lg">
            I'm  Divyesh Mer web designer & front-end developer with {"React"}
            <span className="text-indigo-400"> 2+ years</span> of experience
          </p>

          <div className="flex gap-4">
            <button className="bg-[#1a1a4e] text-white px-6 py-2 rounded hover:bg-indigo-800" onClick={Portfolio}>
              <a href="http://localhost:5173/portfolio">Got a project? </a>
              </button>
            <button className="border border-[#1a1a4e] text-[#1a1a4e] px-6 py-2 rounded hover:bg-gray-100">
              <a href="http://localhost:5173/contact">
              Let's talk
            </a></button>
          </div>

          <div className="mt-6 border-l-4 border-orange-500 pl-4 text-sm space-y-1">
            <p className="text-[#1a1a4e] font-semibold">+91 7490804668 </p>
            <p className="text-gray-700">divyeshmer369@gmail.com</p>
            <p className="text-gray-700">Rajkot,Gujarat</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="relative z-10">
            <img
              src={heroImage}
              alt="Elisc"
              className="rounded-full w-[300px] md:w-[400px] object-cover"
            />
          </div>
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-indigo-200 rounded-full z-0 top-0 right-0 -translate-y-10 translate-x-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
