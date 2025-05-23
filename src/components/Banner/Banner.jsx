import React from "react";
import bannerVideo from "../../assets/video.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Counter from "../Counter/Counter";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="z-30 relative">
      <div className="h-[90vh]  w-full overflow-hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation, Pagination]}
          className="w-full h-full"
        >
          {/* Slide 1 - Video */}
          <SwiperSlide className="relative flex items-center justify-center   bg-cover bg-center bg-no-repeat">
            <div className="relative w-full h-full">
              <video
                autoPlay
                loop
                muted
                poster="https://i.ibb.co/LdJbYJsR/hero.webp"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={bannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="relative items-center px-5 md:items-start container mx-auto z-10 flex flex-col  justify-center h-full text-white">
                <h1 className="lg:text-6xl text-2xl md:text-4xl max-w-3xl text-center lg:text-left  font-bold mb-4">
                  Find the perfect freelance services for your <br />
                  <Typewriter
                    cursor
                    cursorStyle="°ﺑ°"
                    cursorColor="red"
                    delaySpeed={2000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={70}
                    words={[
                      " Web Development",
                      " Graphic Design",
                      " Content Writing",
                      " Digital Marketing",
                      " SEO Optimization",
                      " App Development",
                      " Video Editing",
                      " Brand Strategy",
                      " UI/UX Design",
                      " Custom Software",
                      " Project Management",
                      " Consulting Services",
                    ]}
                  />
                </h1>
                <p className="text-lg hidden md:block max-w-lg mb-5 items-start opacity-55">
                  Work with talented people at the most affordable price to get
                  the most out of your time and cost
                </p>
                <div className="scale-80 md:scale-100">
                  <div className="relative mt-3 grid grid-rows-2 grid-cols-1 md:grid-rows-1  md:grid-cols-4 gap-4   bg-[#ffffff] p-4 rounded-lg shadow-md">
                    {/* Search Input */}
                    <div className="col-span-2 mr-4">
                      <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none
                      focus:bg-[#2a6f5744] 
                      "
                      />
                    </div>

                    {/* Category Dropdown */}
                    <div className="flex  items-center space-x-2">
                      <select className="px-4   py-2   rounded-lg bg-white text-gray-800 focus:outline-none focus:border-[#2A6F57]">
                        <option value="">Choose Category</option>
                        <option value="tech">Technology</option>
                        <option value="design">Design</option>
                        <option value="development">Development</option>
                      </select>
                    </div>

                    {/* Search Button */}
                    <button className="bg-[#2A6F57] hover:bg-white cursor-pointer hover:outline-2 hover:text-black hover:outline-[#2A6F57] text-white px-6 py-2 rounded-full font-medium transition duration-300">
                      Search
                    </button>
                  </div>
                  <Counter></Counter>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - Image */}
          <SwiperSlide className="relative flex items-center justify-center  bg-cover bg-center bg-no-repeat">
            <img
              loading="lazy"
              src="https://i.ibb.co/TMLLs5Kg/Benefits-of-Freelancing-1024x538-png.webp"
              alt="Events Around You"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative px-5 container mx-auto z-10 flex flex-col items-start justify-center h-full text-white">
              <p className="font-semibold text-[#57dfaf] mb-2">
                #3 Best Freelancing Platform
              </p>
              <h1 className="lg:text-7xl text-5xl  tittles font-bold mb-4">
                Find the talents for any job.
              </h1>
              <p className="text-base mb-5 opacity-70">
                Unlock your potential with quality job & earn from world leading
                brands & companies around you!
              </p>
              <a href="/">
                <button className="bg-[#2A6F57]  cursor-pointer hover:bg-[#328b6b]  px-7 py-3 rounded-full font-medium transition duration-300">
                  Get Started
                </button>
              </a>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Image */}
          <SwiperSlide className="relative flex items-center justify-center  bg-cover bg-center bg-no-repeat">
            <img
              loading="lazy"
              src="https://i.ibb.co/1G8sMWGn/6284d4d74ad7dcca287b9334-independent-contractor-vs-freelancer.webp"
              alt="Events Around You"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative px-5 container mx-auto z-10 flex flex-col items-start justify-center h-full text-white">
              <p className="font-semibold text-[#57dfaf] mb-2">
                #3 Best Freelancing Platform
              </p>
              <h1 className="lg:text-7xl max-w-4xl text-5xl  tittles font-bold mb-4">
                Hire the Top 3% of Freelance Talent
              </h1>
              <p className="text-base max-w-2xl  mb-5 opacity-70">
                Access the top 3% of freelance talent — skilled, vetted, and
                ready to bring expertise and excellence to your projects. Work
                with elite professionals who deliver high-quality results on
                time and on budget.
              </p>
              <a href="/">
                <button className="bg-[#2A6F57]  cursor-pointer hover:bg-[#328b6b]  px-7 py-3 rounded-full font-medium transition duration-300">
                  Hire Now
                </button>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
