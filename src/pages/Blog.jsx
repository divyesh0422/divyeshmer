import React, { useState } from "react";
import { motion } from "framer-motion";
import blogData from "../data/blogData";
import Modal from "../components/Modal";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="p-8 bg-[#f8fbfe] min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-[#1e1e5d]">
        📖 My Blog & News
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {blogData.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow p-5 hover:shadow-lg"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded"
            />
            <p className="text-gray-400 text-sm mt-2">{blog.date}</p>
            <h3 className="text-xl font-semibold text-[#1e1e5d] mt-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 mt-2 line-clamp-3">{blog.content}</p>
            <button
              onClick={() => setSelectedBlog(blog)}
              className="mt-4 text-indigo-600 hover:underline"
            >
              Learn More →
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <Modal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </div>
  );
};

export default Blog;
