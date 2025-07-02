import React from "react";
import heroImage from "../assets/My.picture.jpeg";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 font-sans bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
        <div className="md:w-1/2">
          <div className="relative inline-block">
            <p className="text-lg font-medium text-blue-600 mb-2 tracking-wider">NICE TO MEET YOU!</p>
            <div className="absolute -bottom-1 left-0 w-16 h-1 bg-blue-500"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
            I'm <span className="text-blue-600">Divyesh Mer</span>, Web Designer & Developer
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Creating digital experiences that are beautiful, functional, and user-focused.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-xl p-8 h-full">
              <img 
                src={heroImage } 
                alt="Robert Elisc" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-4xl font-bold text-blue-600 mb-2">2+</p>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-4xl font-bold text-purple-600 mb-2">15+</p>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-4xl font-bold text-indigo-600 mb-2">5+</p>
          <p className="text-gray-600">Happy Clients</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-4xl font-bold text-blue-600 mb-2">12+</p>
          <p className="text-gray-600">Technical certification </p>
        </div>
      </div>

      {/* About Content */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 relative inline-block">
          <span className="relative z-10">My Professional Journey</span>
          <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-100 z-0"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Who I Am</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate web designer and developer with two decades of experience creating digital solutions that matter. My approach combines aesthetic sensibility with technical expertise to deliver products that users love.
            </p>
            <p className="text-gray-600 leading-relaxed">
               enjoy writing clean, maintainable code and turning complex problems into simple, elegant solutions—whether it's building reusable components, integrating APIs, or optimizing performance for modern web apps.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">My Philosophy</h3>
           
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600">User-focused design principles</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600">Clean, maintainable code</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600">Performance-optimized solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>
          
          {/* Timeline Item 1 */}
          <div className="relative pl-0 md:pl-20 mb-12">
            <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-500 items-center justify-center text-white font-bold shadow-lg">
              01
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900"> Web Developer Intern </h3>
                <span className="text-blue-600 font-medium mt-1 md:mt-0">2015</span>
              </div>
              <p className="text-purple-600 font-medium mb-3">Intern Certify </p>
              <p className="text-gray-600">
               Collaborated with the team to develop and optimize front-end components and improve website performance.
              </p>
            </div>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="relative pl-0 md:pl-20 mb-12">
            <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-purple-500 items-center justify-center text-white font-bold shadow-lg">
              02
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Web Developer</h3>
                <span className="text-blue-600 font-medium mt-1 md:mt-0">2021 - 2022</span>
              </div>
              <p className="text-purple-600 font-medium mb-3">Upwork</p>
              <p className="text-gray-600">
                Designed and developed custom websites for clients using React.js, Tailwind CSS, and JavaScript, ensuring responsive and SEO-friendly layouts.
Delivered full front-end solutions including UI components, form validations, and API integrations.
              </p>
            </div>
          </div>
          
          {/* Timeline Item 3 */}
         
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to start your project?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          I'm currently available for freelance work. Let's create something amazing together!
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default AboutUs;