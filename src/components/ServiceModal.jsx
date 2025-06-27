import React from "react";

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white max-w-2xl w-full rounded-lg p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-4 text-xl text-gray-700 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-56 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold text-indigo-900 mb-3">
          {service.title}
        </h2>
        <p className="text-gray-600">{service.fullDescription}</p>
      </div>
    </div>
  );
};

export default ServiceModal;
