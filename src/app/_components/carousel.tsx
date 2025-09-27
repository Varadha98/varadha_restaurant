"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


const images = [
   "/image2.jpg",
  "/image11.jpg",
  "/image12.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // ✅ Autoplay: change slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    // cleanup timer
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full min-h-screen flex-shrink-0 overflow-hidden justify-center items-center rounded-lg shadow-lg">
      {/* Images */}
       <div
    className="flex transition-transform duration-500"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {images.map((img, index) => (
      <div key={index} className="relative w-full flex-shrink-0 aspect-[16/9]">
        <Image
          src={img}
          alt={`Slide ${index}`}
          fill
          className="object-cover"
        />
      </div>
    ))}
  </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

