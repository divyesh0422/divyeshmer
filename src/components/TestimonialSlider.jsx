 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Keita Smith",
    position: "Senior Designer at Behance",
    image: "/images/client1.jpg",
    message:
      "Really the Code Quality, Customer Support, and design are awesome. Great support and instant solution. I will strongly recommend to my friends.",
  },
  {
    name: "Amit Verma",
    position: "CEO at DevSoft",
    image: "/images/client2.jpg",
    message:
      "They truly understood our brand and delivered a flawless site with great performance. Communication was quick and smooth.",
  },
  {
    name: "Emily Johnson",
    position: "Marketing Head at PixelCo",
    image: "/images/client3.jpg",
    message:
      "Excellent design sense, responsiveness, and smooth experience. Would love to work with them again.",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-purple-50 py-12 px-6" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-8">
        What client's say?
      </h2>
      <div className="max-w-4xl mx-auto">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-300"
                />
                <p className="text-gray-700 italic mb-4">"{item.message}"</p>
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
