import React, { useState } from "react";
import { FiFilter, FiExternalLink, FiGithub, FiChevronDown } from "react-icons/fi";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filters = ["All", "Web Design", "Development", "Open Source", "UI/UX"];
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Development",
      description: "A full-featured online store with custom checkout and inventory management",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Habits & tracking-app",
      category: "Development",
      description: "Cross-platform Web application for workout tracking and nutrition planning",
      tags: ["React ", "tailwindcss"," react-router"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "https://eon-habits-tracking-app.vercel.app/",
      github: "https://github.com/divyesh0422/EonHabits_Tracking_App"
    },
    {
      id: 3,
      title: "Online Learning Webside",
      category: "Web Design",
      description: "Master in-demand skills with our expert-led courses. Learn at your own pace and transform your career.",
      tags: ["Figma", "tailwindcss", "GSAP"],
      image: "https://plus.unsplash.com/premium_photo-1661767552224-ef72bb6b671f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      link: "https://edu-pasd.vercel.app/",
      github: "https://github.com/divyesh0422/edu-pasd"
    },
    {
      id: 4,
      title: "Dashboard UI Kit",
      category: "UI/UX",
      description: "Custom design system for SaaS analytics dashboard",
      tags: ["Sketch", "Storybook", "Design Systems"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Restaurant Booking System",
      category: "Development",
      description: "Table reservation platform with real-time availability",
      tags: ["Vue.js", "Laravel", "MySQL"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Mobile Banking App",
      category: "Mobile Apps",
      description: "Secure banking application with biometric authentication",
      tags: ["Flutter", "Dart", "Node.js"],
      image:"https://plus.unsplash.com/premium_photo-1712761997872-2963252bc19d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Portfolio Header */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated collection of my best work showcasing design and development projects
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Controls */}
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="relative mb-4 sm:mb-0">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:border-blue-500 transition duration-300"
              >
                <FiFilter className="mr-2" />
                {activeFilter}
                <FiChevronDown className={`ml-2 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              {showFilters && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                  {filters.map(filter => (
                    <button
                      key={filter}
                      onClick={() => {
                        setActiveFilter(filter);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-blue-50 ${activeFilter === filter ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="hidden sm:flex space-x-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg transition duration-300 ${activeFilter === filter ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                    <div>
                      <p className="text-blue-300 font-medium mb-1">{project.category}</p>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <FiExternalLink className="mr-1" /> Live Demo
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-800 font-medium"
                      >
                        <FiGithub className="mr-1" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition duration-300 cursor-pointer">
             <a href="https://github.com/divyesh0422">Load More Projects</a> 
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a Project in Mind?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            I'm currently accepting new projects. Let's discuss how I can help bring your ideas to life.
          </p>
          <button className="bg-white cursor-pointer text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium shadow-lg transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;