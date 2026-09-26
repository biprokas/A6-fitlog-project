import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0e12] border-t border-zinc-800/80 text-zinc-400">
      {/* Container aligned directly with your Navbar container */}
      <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="FitLog Logo" width={30} height={30} />
          <span className="text-white font-black text-lg uppercase tracking-wider">
            FITLOG
          </span>
        </Link>

        {/* Copyright Text */}
        <p className="text-xs sm:text-sm text-zinc-400 font-medium">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;