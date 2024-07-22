"use client"
import Image from "next/image";
import bg_img from "../public/bg_img.jpg"
import bg_img2 from "../public/bg_img2.jpeg"
import bg_img3 from "../public/bg_img3.jpeg"
import logo from "../public/logo.png"
import { useState, useEffect } from "react";
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <section id="home" className='max-w-[1440px] h-screen relative overflow-hidden bg-black'>
       <div className="absolute inset-0">
        <Image
          src={bg_img3}
          alt="bg_image"
          fill
          className="opacity-35 object-cover"
        />
      </div>
      <header className={`fixed inset-0 z-20 flex w-full h-[75px] justify-between items-center shrink-0 p-8 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`} >
          <Image
          src={logo}
          alt="bg_image"
          
          />
        <div className="flex justify-between items-center gap-8">
          <p className="text-white font-bold hover:text-[#e20303] cursor-pointer">About</p>
          <p className="text-white font-bold hover:text-[#e20303] cursor-pointer">Pricing</p>
          <p className="text-white font-bold hover:text-[#e20303] cursor-pointer">Reviews</p>
          <p className="text-white font-bold hover:text-[#e20303] cursor-pointer">Contact</p>
        </div>
        <div>
        <button className='relative overflow-hidden group p-3 rounded-[10px] text-white font-bold border-2 border-transparent hover:border-[#9E0506] transition-colors duration-300'>
        <span className='relative z-10'>BOOK AN APPOINTMENT</span>
        <div className='absolute inset-0 bg-[linear-gradient(93deg,#E60404_0.45%,#800202_74.27%,#850202_99.52%,#820202_99.53%)] group-hover:opacity-0 transition-opacity duration-300'></div>
        </button>
        </div>
      </header>
      <div className="relative w-[54vw] h-[250px] shrink-0 flex flex-col lg:items-start items-center lg:justify-between justify-between  z-10 lg:mt-[40vh] mt-[35vh] lg:ml-[5.313vw] mx-auto gap-[22vh] lg:gap-0">
        <div>
        <h1 className="lg:text-6xl md:text-4xl text-5xl text-white font-bold lg:text-left text-center">Professional Auto <span className="bg-[linear-gradient(93deg,#E60404_65.36%,#850202_99.52%)] bg-clip-text text-transparent">Repair</span> & <span className="bg-[linear-gradient(93deg,#E60404_65.36%,#850202_99.52%)] bg-clip-text text-transparent">Maintenance</span></h1>
        </div>
        <div>
        <button className='relative overflow-hidden group lg:p-3 p-2 px-[22vw] rounded-[10px] text-white font-bold border-2 border-transparent hover:border-[#9E0506] transition-colors duration-300'>
        <span className='relative z-10 lg:text-xl md:text-lg text-sm w-[80%]'>GET A QUOTE</span>
        <div className='absolute inset-0 bg-[linear-gradient(93deg,#E60404_0.45%,#800202_74.27%,#850202_99.52%,#820202_99.53%)] group-hover:opacity-0 transition-opacity duration-300'></div>
        </button>
        </div>
      </div>
      </section>
      <section className="h-screen">hello</section>
    </>
  );
}
