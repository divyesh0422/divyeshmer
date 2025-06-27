 const services = [
  { id: "01", title: "Web Design" },
  { id: "02", title: "Content Writing" },
  { id: "03", title: "Brand Identity" },
  { id: "04", title: "Live Chat" },
  { id: "05", title: "After Effects" },
  { id: "06", title: "Mobile App" },
];

function Services() {
  return (
    <section className="p-10 flex-1 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1e1a4e] mb-10">My Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition"
            >
              <p className="text-gray-400 font-semibold mb-2">{service.id}</p>
              <h3 className="text-lg font-bold text-[#1e1a4e] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                Web development is the process of building, programming...
              </p>
              <a
                href="#"
                className="text-[#1e1a4e] font-medium flex items-center gap-1 group"
              >
                Read More{" "}
                <span className="transform group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
