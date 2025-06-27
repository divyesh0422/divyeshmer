import React from "react";

const Modal = ({ blog, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-2xl hover:text-red-500"
        >
          &times;
        </button>
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded w-full h-60 object-cover"
        />
        <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
        <h3 className="text-2xl font-bold mt-2 text-indigo-900">
          {blog.title}
        </h3>
        <p className="text-gray-700 mt-4">{blog.content}</p>
      </div>
    </div>
  );
};

export default Modal;
