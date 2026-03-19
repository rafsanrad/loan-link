import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const slides = [
    {
      id: 1,
      title: "Fast & Easy Microloans",
      desc: "Apply for loans quickly and manage repayments effortlessly.",
      bg: "bg-yellow-100",
      buttonText: "Apply Now",
      buttonLink: "/loan-application",
    },
    {
      id: 2,
      title: "Track Your Approvals",
      desc: "Stay updated with your loan approval status in real-time.",
      bg: "bg-green-100",
      buttonText: "Apply Now",
      buttonLink: "/all-loans",
    },
    {
      id: 3,
      title: "Manage Repayments",
      desc: "Keep track of your EMI schedule and payments easily.",
      bg: "bg-blue-100",
      buttonText: "Apply Now",
      buttonLink: "/dashboard",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`shrink-0 w-full h-72 md:h-80 flex flex-col justify-center items-center ${slide.bg} p-6`}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center">{slide.title}</h2>
            <p className="mt-2 text-gray-700 text-center px-4">{slide.desc}</p>
            <Link to={slide.buttonLink}>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                {slide.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;