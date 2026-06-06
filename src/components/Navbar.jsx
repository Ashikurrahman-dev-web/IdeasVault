"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from "@/components/NavLink";
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="px-6 md:px-8 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between">
  <div className='flex items-center gap-3 group'>      
<div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20 border border-outline-variant/20 dark:border-white/10">
           <Image
            src="/logo.jpg"
            alt="Ideas Logo"
            fill
            className="object-cover"
            priority
            unoptimized
          />        
        </div>
<span className="block text-base sm:text-lg md:text-2xl font-black tracking-tight text-on-background transition-colors">
          Ideas<span className="text-green-500 -ml-[0.15em]">Vault</span>
        </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
         <NavLink href={"/home"}><button className="cursor-pointer">Home</button></NavLink>
    <NavLink href={"/ideas"}><button className="cursor-pointer">Ideas</button></NavLink>
    <NavLink href={"/addidea"}><button className="cursor-pointer">Add Idea</button></NavLink>
    <NavLink href={"/myideas"}><button className="cursor-pointer">My Ideas</button></NavLink>
<NavLink href={"/myinteractions"}> <button className="cursor-pointer">My Interactions</button></NavLink>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="md:flex items-center gap-3">
  <Link   href={"/login"}
className="cursor-pointer hidden md:block bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition shadow-sm">
             LogIn
          </Link>
  <Link   href={"/signup"}
className="cursor-pointer hidden md:block bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition shadow-sm">
             Sign Up
          </Link>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>
      {menuOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden text-gray-600 font-medium">
         <NavLink href={"/home"}> <button className="cursor-pointer">Home</button></NavLink>
        <NavLink href={"/ideas"}>  <button className="cursor-pointer">Ideas</button></NavLink>
        <NavLink href={"/add idea"}>  <button className="cursor-pointer">Add Idea</button></NavLink>
        <NavLink href={"/my ideas"}>  <button className="cursor-pointer">My Ideas</button></NavLink>
        <NavLink href={"/my interactions"}>  <button className="cursor-pointer">My Interactions</button></NavLink>

          <div className="border-t pt-4 flex flex-col space-y-3">
            
           <Link
href={"/"}  className="bg-green-500 text-white py-2 rounded-full cursor-pointer">
              
                LogIn</Link>
            </div>
           <Link
href={"/"}  className="bg-green-500 text-white py-2 rounded-full cursor-pointer">
              
                Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;