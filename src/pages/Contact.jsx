function Contact() {
  return (
    <section className="p-10 bg-white text-[#1e1a4e] flex-1">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Contact Header */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-sm text-gray-500 mb-2">- LET'S CONNECT</p>
            <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-6">
              I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7
            </p>

            <div className="space-y-2">
              <p className="font-bold text-lg">+77 022 444 05 05</p>
              <a href="mailto:support@elisc.com" className="text-blue-800 underline">
                support@elisc.com
              </a>
              <p className="underline">Ave Street Avenue, New York</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Write something..."
              rows={4}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-[#1e1a4e] text-white px-6 py-2 rounded hover:bg-black transition"
            >
              Submit now
            </button>
          </form>
        </div>

        {/* Google Maps */}
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <iframe
            title="Map"
            className="w-full h-80"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.928456745859!2d-73.98813542427961!3d40.748817979327886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18f2558f%3A0x3d4654c159a9f789!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1710000000000"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
