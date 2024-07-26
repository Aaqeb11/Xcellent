import { useState, useEffect } from 'react';

const reviews = [
  {
    title: "Excellent Service",
    text: "The service at Xcellent Auto Repair was exceptional. The staff was friendly and the repairs were done promptly. Highly recommend!",
  },
  {
    title: "Great Experience",
    text: "I had a great experience with Xcellent Auto Repair. They were transparent about the repairs and the costs. My car has never run better!",
  },
  {
    title: "Highly Recommend",
    text: "Xcellent Auto Repair is the place to go for reliable and honest auto repair. The technicians are skilled and professional.",
  },
  {
    title: "Outstanding Customer Service",
    text: "Outstanding customer service! The team went above and beyond to ensure my vehicle was repaired quickly and correctly.",
  },
];

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-[5.313vw]">
      <div className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-4 text-center py-8">
        Customer Reviews
      </div>

      {/* Slider for mobile devices */}
      <div className="block lg:hidden w-full">
        <div className="relative flex justify-center items-center">
          {/* <button onClick={prevSlide} className="cursor-pointer mx-2">Prev</button> */}
          <div className="w-full max-w-sm h-96 bg-gradient-to-r from-[#E60404] to-[#850202] m-4 flex flex-col justify-center items-center text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{reviews[currentSlide].title}</h3>
            <p>{reviews[currentSlide].text}</p>
          </div>
          {/* <button onClick={nextSlide} className="cursor-pointer mx-2">Next</button> */}
        </div>
      </div>

      {/* Static cards for larger screens */}
      <div className="hidden lg:flex w-full justify-center items-center">
        <button onClick={prevSlide} className="cursor-pointer mx-2">Prev</button>
        <div className="w-full max-w-3xl flex justify-between space-x-4">
          <div className="w-1/2 h-96 bg-gradient-to-r from-[#E60404] to-[#850202] flex flex-col justify-center items-center text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{reviews[currentSlide].title}</h3>
            <p>{reviews[currentSlide].text}</p>
          </div>
          <div className="w-1/2 h-96 bg-gradient-to-r from-[#E60404] to-[#850202] flex flex-col justify-center items-center text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{reviews[(currentSlide + 1) % reviews.length].title}</h3>
            <p>{reviews[(currentSlide + 1) % reviews.length].text}</p>
          </div>
        </div>
        <button onClick={nextSlide} className="cursor-pointer mx-2">Next</button>
      </div>
    </div>
  );
}
