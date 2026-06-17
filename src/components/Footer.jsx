"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from "react";
const Footer = () => {
const { data: userData } = authClient.useSession();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (userData?.user) {
      setUser(userData.user);
    } else {
      setUser(null);
    }
  }, [userData]);
  return (
    <footer className="border-t border-gray-800 text-gray-600 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl block font-black tracking-tight text-on-background transition-colors">
            Ideas<span className="text-green-500 -ml-[0.15em]">Vault</span>
          </h1>
          <p className="mt-4 max-w-xl">
            Your gateway to extraordinary ideas and inspiration around the world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black mb-3 font-bold tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer"><Link href="/">Home</Link></li>
              <li className="hover:text-white cursor-pointer"><Link href="/ideas">Ideas</Link></li>
             {user && (
                <>
                  <li className="hover:text-white cursor-pointer"><Link href="/addidea">Add Idea</Link></li>
                  <li className="hover:text-white cursor-pointer"><Link href="/myideas">My Ideas</Link></li>
                  <li className="hover:text-white cursor-pointer"><Link href="/myinteractions">My Interactions</Link></li>
                </>
              )}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-black mb-3 font-bold tracking-wide">CONTACT US</h3>
            <ul className="space-y-2">
              <li>865 901 2633</li>
              <li>info@ideasvault.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2026 IdeasVault. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-black text-lg">
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;