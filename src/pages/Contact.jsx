import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here (e.g., emailJS, API call)
    reset();
  };

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
    <section className="py-16 px-6 bg-white text-[#1e1a4e]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <p className="text-sm text-indigo-500 mb-2 font-medium">LET'S CONNECT</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm currently available for new projects and collaborations. Whether you have a question or want to discuss a potential opportunity, feel free to reach out anytime.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaPhone className="text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-500">Phone</p>
                  <p className="text-lg font-semibold">+91 7490804668</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaEnvelope className="text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-500">Email</p>
                  <a 
                    href="mailto:divyeshmer369@gmail.com" 
                    className="text-lg font-semibold hover:text-indigo-600 transition-colors"
                  >
                    divyeshmer369@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-500">Location</p>
                  <p className="text-lg font-semibold">Rajkot, Gujarat</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-sm"
            variants={itemVariants}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Hello Divyesh, I'd like to discuss..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                {...register("message", { 
                  required: "Message is required",
                  minLength: {
                    value: 20,
                    message: "Message must be at least 20 characters"
                  }
                })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#1e1a4e] text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition-colors shadow-md w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Google Maps */}
        <motion.div 
          className="overflow-hidden rounded-xl border border-gray-200 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <iframe
            title="Divyesh's Location"
            className="w-full h-80 md:h-96"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9587.477134801755!2d70.75605196938379!3d22.29515199073474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1751458000370!5m2!1sen!2sin"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;