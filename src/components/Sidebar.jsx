import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiUser, 
  FiBriefcase, 
  FiFileText, 
  FiMail,
  FiX,
  FiMenu
} from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/', icon: <FiHome size={20} /> },
    { name: 'About', path: '/about', icon: <FiUser size={20} /> },
    { name: 'Portfolio', path: '/portfolio', icon: <FiBriefcase size={20} /> },
    { name: 'Blog', path: '/blog', icon: <FiFileText size={20} /> },
    { name: 'Contact', path: '/contact', icon: <FiMail size={20} /> },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: <FaGithub size={18} /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedin size={18} /> },
    { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter size={18} /> },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed lg:hidden z-50 top-4 right-4 p-2 rounded-lg bg-white shadow-md text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
     <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-20 transform transition-all duration-300 ease-in-out 
  ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
>
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-gray-800 mb-10 mt-4 hover:text-blue-600 transition-colors"
          >
            John Doe
          </Link>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`
                    }
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="mt-auto pt-6 border-t border-gray-100">
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              &copy; {new Date().getFullYear()} John Doe
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;