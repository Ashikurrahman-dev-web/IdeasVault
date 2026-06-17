"use client";

import dynamic from "next/dynamic";

// ১. ক্লায়েন্ট কম্পোনেন্টের ভেতর ssr: false দিয়ে ডায়নামিক ইম্পোর্ট ১০০% বৈধ
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function ClientWrapper({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}