import React from 'react';
import { FiCode, FiLayers, FiSmartphone, FiDatabase, FiServer, FiPieChart } from 'react-icons/fi';
import ServiceCard from '../components/ui/ServiceCard';
import SectionHeader from '../components/ui/SectionHeader';

const Services = () => {
  const services = [
    {
      icon: <FiCode className="text-blue-600 text-3xl" />,
      title: "Web Development",
      description: "Custom website development with modern frameworks like React, Next.js, and Vue.js for optimal performance and SEO.",
      highlights: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Friendly"
      ]
    },
    {
      icon: <FiSmartphone className="text-purple-600 text-3xl" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications built with React Native or Flutter for iOS and Android.",
      highlights: [
        "Cross-Platform",
        "Native Performance",
        "Offline Support"
      ]
    },
    {
      icon: <FiLayers className="text-indigo-600 text-3xl" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to enhance user experience and engagement.",
      highlights: [
        "User Research",
        "Wireframing",
        "Prototyping"
      ]
    },
    {
      icon: <FiDatabase className="text-green-600 text-3xl" />,
      title: "Backend Development",
      description: "Robust backend systems with Node.js, Python, or PHP to power your applications.",
      highlights: [
        "API Development",
        "Database Design",
        "Cloud Integration"
      ]
    },
    {
      icon: <FiServer className="text-orange-600 text-3xl" />,
      title: "DevOps Services",
      description: "CI/CD pipelines, containerization, and cloud infrastructure setup for seamless deployments.",
      highlights: [
        "Docker & Kubernetes",
        "AWS/GCP Setup",
        "Monitoring"
      ]
    },
    {
      icon: <FiPieChart className="text-red-600 text-3xl" />,
      title: "Data Visualization",
      description: "Interactive dashboards and data visualizations to make your data actionable.",
      highlights: [
        "D3.js",
        "Chart.js",
        "Custom Dashboards"
      ]
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="My Services"
          subtitle="What I Offer"
          description="Comprehensive digital solutions tailored to your business needs"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              highlights={service.highlights}
            />
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to discuss your project?</h3>
            <p className="text-gray-600 mb-6">
              I'm currently accepting new projects. Let's work together to bring your ideas to life with the right technical solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="/portfolio"
                className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;