import { useState, useEffect } from 'react';
import Image from 'next/image';
import right from "../public/right_arrow.png"
import left from "../public/left_arrow.png"
import bg_img2 from "../public/bg_img2.jpeg"
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: '1',
      description: 'Fill out our form or call us to inquire about services and available slots.',
    },
    {
      title: '2',
      description: 'Provide details about your vehicle, and we will give you a personalized quote.',
    },
    {
      title: '3',
      description: 'Choose a convenient time for your service, and we’ll reserve a slot for you.',
    },
    {
      title: '4',
      description: 'Bring your car in at the scheduled time, our expert technicians will handle it.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src={bg_img2}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center lg:justify-start lg:px-[5.313vw]">
        <div className="flex flex-col items-center text-center py-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Steps to Get Our Services
          </h2>
        </div>

        {/* Slider for mobile devices */}
        <div className="block lg:hidden w-full px-4">
          <div className="relative flex justify-center items-center">
            <Image
              src={left}
              alt="Previous"
              width={40}
              height={40}
              onClick={prevSlide}
              className="cursor-pointer mx-2"
            />
            <div className="w-full max-w-sm h-80 bg-gradient-to-r from-[#E60404] to-[#850202] m-4 flex flex-col  gap-16 pt-5  items-center text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl">
              <h2 className="text-5xl font-bold mb-2">{slides[currentSlide].title}</h2>
              <p className="text-center mx-4">{slides[currentSlide].description}</p>
            </div>
            <Image
              src={right}
              alt="Next"
              width={40}
              height={40}
              onClick={nextSlide}
              className="cursor-pointer mx-2"
            />
          </div>
        </div>

        {/* Static cards for larger screens */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-6 w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-64 h-80 bg-gradient-to-r from-[#E60404] to-[#850202] m-4 flex flex-col gap-16 pt-5 items-center text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
            >
              <h2 className="text-6xl font-bold mb-2">{slide.title}</h2>
              <p className="text-center mx-4">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
