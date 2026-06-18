"use client";
import { useTheme } from "next-themes";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from "@/components/NavLink";
import Image from 'next/image';
import Link from 'next/link';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Avatar, Button, Dropdown, Select } from '@heroui/react';

const NavbarAuth = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
const { data: userData } = authClient.useSession();
const user = mounted ? userData?.user : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Logout successful");
      router.push("/");
    } catch (error) {
      toast.error("Logout failed!");
    }
  };
  return (
    <nav className="px-6 md:px-8 py-4 bg-white border-b border-gray-100 mb-4">
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
         <NavLink href={"/"}><button className="cursor-pointer">Home</button></NavLink>
     <NavLink href={"/ideas"}><button className="cursor-pointer">Ideas</button></NavLink>
 { user && (
          <>
            <NavLink href="/addidea"><button className="cursor-pointer">Add Idea</button></NavLink>
            <NavLink href="/myideas"><button className="cursor-pointer">My Ideas</button></NavLink>
            <NavLink href="/myinteractions"><button className="cursor-pointer">My Interactions</button></NavLink>
          </>
        )}
        </div> 
  <div className="theme-toggle-wrapper w-12 sm:w-14 h-8 flex items-center gap-3 justify-center">
        {mounted ? (
          <label className="theme-toggle" title="Toggle theme">
            <input
              type="checkbox"
              checked={theme === "light"}
              onChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            />

            <div className="toggle-track">
              <div className="toggle-thumb">
                {theme === "dark" ? "🌙" : "☀️"}
              </div>
            </div>
          </label>
        ) : (
          <div className="w-10 h-5 bg-surface-container-high rounded-full animate-pulse" />
        )}
         {user && (
  <div className="flex items-center gap-3">
  <div className="relative">
    <Avatar size="lg">
      <Avatar.Image
        alt={user?.name}
        src={user?.image}
        referrerPolicy="no-referrer"
      />
      <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
    </Avatar>

    {/* Small icon */}
    <div className="absolute -bottom-1 z-10">
      <Dropdown>
        <Button
          aria-label="Menu"
          variant="secondary"
          className="min-w-0 w-6 h-6 rounded-full p-0"
        >
          <Select.Indicator className="text-green-500 text-xs" />
        </Button>

        <Dropdown.Popover>
          <Dropdown.Menu>
            <Dropdown.Item id="profile">
              <Link href="/profile">Profile</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  </div>

  <span className="text-gray-700">{user?.name}</span>
</div>
)}
      </div> 
      <div className="flex items-center space-x-4 md:space-x-6">
        <div className="md:flex items-center gap-3">
 {!user && (
            <>
              <Link href={"/login"} className="cursor-pointer hidden md:block bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition shadow-sm">
                SignIn
              </Link>
              <Link href={"/signup"} className="cursor-pointer hidden md:block bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition shadow-sm">
                SignUp
              </Link>
            </>
          )}
           {user && (
            <div className="flex items-center space-x-4 md:space-x-6">
               <button
                onClick={handleLogout}
className="cursor-pointer hidden md:block bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition shadow-sm"
                >
              SignOut
              </button>
            </div>
          )}
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
        <>
          <div className="mt-4 flex flex-col space-y-4 md:hidden text-gray-600 font-medium">
            <NavLink href="/"> <button className="cursor-pointer">Home</button></NavLink>
            <NavLink href="/ideas">  <button className="cursor-pointer">Ideas</button></NavLink>
            {user && (
              <>
                <NavLink href="/addidea">  <button className="cursor-pointer">Add Idea</button></NavLink>
                <NavLink href="/myideas">  <button className="cursor-pointer">My Ideas</button></NavLink>
                <NavLink href="/myinteractions">  <button className="cursor-pointer">My Interactions</button></NavLink>
              </>
            )}

            {!user && (
              <>
                <div className="border-t pt-4 flex flex-col space-y-3">
                  <Link href="/login" className="bg-green-500 text-white py-2 rounded-full cursor-pointer">
                    SignIn
                  </Link>
                </div>
                <Link href="/signup" className="bg-green-500 text-white py-2 rounded-full cursor-pointer">
                  Sign Up
                </Link>
              </>
            )}

            {user && (
              <div className="border-t pt-4 flex flex-col space-y-3">
                <button
                  onClick={handleLogout}
                  className="bg-green-500 text-white py-2 rounded-full cursor-pointer hover:bg-green-600 transition"
                >
                 SignOut
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default NavbarAuth;