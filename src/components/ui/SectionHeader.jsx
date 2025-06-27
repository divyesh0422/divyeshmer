 import React from 'react';

const SectionHeader = ({ title, subtitle, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-blue-600 font-medium tracking-wider">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">
        {title}
      </h2>
      <p className="text-gray-600 text-lg">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;