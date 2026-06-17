"use client";
import {useState, useEffect,useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import a from "@/image/a.png";
import b from "@/image/b.png";
import c from "@/image/c.png";
import { Cpu, Brain, Vote, BookOpen, Shield,Container  } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HomePage = () => {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/featuredIdeas`);
        const data = await res.json();
        setIdeas(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIdeas();
  }, []);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".idea", {
        opacity: 0,
        y: -50,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".idea",
          start: "top 85%",
        },
      });
      gsap.from(".example", {
        opacity: 0,
        x: -50,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".example",
          start: "top 85%",
        },
      });
      gsap.from(".started", {
        opacity: 0,
        y: -50,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: ".started",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

const categories = [
    { id: 1, name: 'Technology', icon: <Cpu className="w-6 h-6" /> },
    { id: 2, name: 'Artificial Intelligence', icon: <Brain className="w-6 h-6" /> },
    { id: 3, name: 'Politics', icon: <Vote className="w-6 h-6" /> },
    { id: 4, name: 'Education', icon: <BookOpen className="w-6 h-6" /> },
    { id: 5, name: 'Cybersecurity', icon: <Shield className="w-6 h-6" /> },
    { id: 6, name: 'Environment', icon: <Container className="w-6 h-6" /> },
  ];
const standardCategories = [
    { id: 1, name: 'Add your idea', description: 'Join our community and share your innovative ideas with the world.'},
    { id: 2, name: 'Provide Feedback', description: 'Help us improve by sharing your thoughts and suggestions.' },
    { id: 3, name: 'Share to Others', description: 'Spread the word about your favorite ideas and inspire others.' },
  ];
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
    <div className="max-w-7xl mx-auto mt-8 mb-8 items-center">
<div className="w-full h-[80vh] mx-auto md:h-[90vh] relative overflow-hidden mt-5 mb-5 rounded-2xl">
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
    <Link href="/ideas">
              <button className="mt-6 cursor-pointer bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition shadow-sm">
                Explore Ideas
              </button>
            </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="idea mt-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">Latest Ideas</h2>
    <p className="text-gray-500 mt-3">
      Explore innovative ideas shared by our community
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {ideas.map((idea) => (
      <div
        key={idea._id}
className="bg-white border-2rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={idea.imageUrl}
            alt={idea.title}
            height={100}
            width={200}
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute top-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              {idea.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
              #{idea.tag}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-3 line-clamp-2">
            {idea.title}
          </h3>

          <p className="text-gray-600 text-sm mb-5 line-clamp-3">
            {idea.shortDescription}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              🎯 {idea.targetAudience}
            </span>

            <Link href={`/idea/${idea._id}`}>
              <button className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
<div className="example py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Example Ideas
        </h2>
        <p className="text-gray-500 mb-10 text-sm sm:text-base">
          Explore startup concepts across various industries.
        </p>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-between gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
className="flex flex-col items-center justify-center p-6 bg-gray-50/50 rounded-xl border-2 border-green-500 duration-300 shadow-sm"
            >
              {/* Icon Container */}
              <div className="mb-3">
                {category.icon}
              </div>
              {/* Text */}
              <span className="text-sm font-semibold text-green-500">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="started py-16 px-4">
<div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          How to Get Started
        </h2>
        <p className="text-gray-500 mb-10 text-sm sm:text-base">
          Join our community in three simple steps and start sharing your ideas today!
        </p>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-6">
         {standardCategories.map((standard) => (
            <div
           key={standard.id}  
className="flex flex-col items-center justify-center p-6 bg-gray-50/50 rounded-xl border-2 border-green-500 duration-300 shadow-sm"
            >
              {/* Icon Container */}
              <div className="mb-3 text-2xl font-bold text-green-500">
                {standard.name}
              </div>
              {/* Text */}
              <span className="text-sm text-gray-500">
                {standard.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;