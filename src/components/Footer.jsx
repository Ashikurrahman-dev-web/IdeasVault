import Image from "next/image";
import facebook from "@/image/facebook.png";
import twitter from "@/image/twitter.png";
import instagram from "@/image/instagram.png";


const Footer = () => {
  return (
    
      <footer className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-t border-outline-variant/10">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10">
    <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
       <div className="flex items-center gap-3 group">
<div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500 bg-black border border-outline-variant/20 dark:border-white/10">
           <Image
            src="/logo.jpg"
            alt="IdeasVault"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

      </div>

      {/* Copyright */}
      <p className="max-w-xl text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed text-on-surface-variant/80 px-2 sm:px-0">
        © 2026 IdeasVault. All rights reserved.
      </p>
    </div>

    {/* Right Side */}
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 font-heading text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">
      
<div className="bg-green-500 p-2 rounded-full text-white hover:bg-green-600 transition-all">
           <Image src={facebook} alt="Facebook" width={20} height={20} />
         </div>

       <div className="bg-green-500 p-2 rounded-full text-white hover:bg-green-600 transition-all">
            <Image src={twitter} alt="Twitter" width={20} height={20} />
       </div>

     <div className="bg-green-500 p-2 rounded-full text-white hover:bg-green-600 transition-all">
              <Image src={instagram} alt="Instagram" width={20} height={20} />
         </div>
      </div>
  </div>
</footer>
  );
};

export default Footer;