"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";
import a from "@/image/a.png";
import b from "@/image/b.png";
import c from "@/image/c.png";

const Home = () => {
  const heroSlides = [
    {
      id: 1,
      img: a,
  title: "Find Your Inspiration, Unleash Your Creativity",
  description: "Discover a world of ideas, connect with like-minded creators, and turn your vision into reality. Join us today and start sharing your ideas with the world!"
    },
    {
      id: 2,
      img: b,
      title: "Connect with Creative Minds",
      description: "Join a community of innovators and creators who share your passion for innovation and design."
    },
    {
      id: 3,
      img: c,
      title: "Turn Ideas into Reality",
      description: "Get the tools and support you need to bring your creative visions to life."
    },
  ];

  return (
<div className="w-[96%] h-[80vh] mx-auto md:h-[90vh] relative overflow-hidden mt-5 mb-5 rounded-2xl">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        navigation={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
          <div className="absolute inset-0 scale-105 transition-transform duration-[4000ms]">
                <Image
                  src={slide.img}
                  alt={`Slide ${slide.id}`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
<div className="absolute inset-0 bg-black/50 z-10" />
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
<p className="max-w-2xl text-sm md:text-lg text-gray-200">
                  {slide.description}
                </p>
       <button className="mt-6 cursor-pointer bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition shadow-sm">
          Explore Ideas</button>         
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;