import React from "react";
import heroImage from "../assets/My.picture.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-12 md:py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div 
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#11103f] leading-tight"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-indigo-400">Divyesh!</span> <br />
            <Typewriter
              words={["Creative Developer", "Web Designer", "React Specialist", "UI/UX Enthusiast"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              className="text-indigo-600"
            />
          </motion.h1>

          <motion.p 
            className="text-gray-600 text-lg md:text-xl"
            variants={itemVariants}
          >
            I'm a front-end developer specializing in <span className="text-indigo-400 font-medium">React.js</span> with {" "}
            <span className="text-indigo-400 font-medium">2+ years</span> of experience crafting beautiful, functional websites.
          </motion.p>

          <motion.div 
            className="flex gap-4 flex-wrap"
            variants={itemVariants}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1a1a4e] text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition-colors shadow-md"
            >
              <a href="/portfolio" className="flex items-center">
                Got a project? Let's talk →
              </a>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#1a1a4e] text-[#1a1a4e] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <a 
                href="/Divyesh_Mer_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                View Resume
              </a>
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-8 border-l-4 border-orange-500 pl-4 space-y-2"
            variants={itemVariants}
          >
            <p className="text-[#1a1a4e] font-semibold flex items-center gap-2">
              <FaPhone className="text-indigo-400" /> +91 7490804668
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaEnvelope className="text-indigo-400" /> divyeshmer369@gmail.com
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaMapMarkerAlt className="text-indigo-400" /> Rajkot, Gujarat
            </p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10">
            <motion.img
              src={heroImage}
              alt="Divyesh Mer"
              className="rounded-full w-[300px] md:w-[400px] object-cover border-4 border-white shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-indigo-200 rounded-full z-0 top-0 right-0 -translate-y-10 translate-x-10 opacity-70"></div>
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-indigo-100 rounded-full z-0 -bottom-5 -left-5 opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;