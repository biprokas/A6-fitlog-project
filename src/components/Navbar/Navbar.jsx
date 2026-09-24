import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const links = (
    <>
      <li>
        <button className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-[#C2F800] active:text-[#C2F800]">
          Workouts
        </button>
      </li>

      <li>
        <button className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-[#C2F800] active:text-[#C2F800]">
          My Plans
        </button>
      </li>
    </>
  );

  return (
    <nav className="container mx-auto px-4">
      <div className="navbar min-h-20 bg-transparent px-0">
        {/* Logo + Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost mr-2 px-2 lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-50 mt-3 w-48 rounded-2xl border border-white/5 bg-[#222630] p-2 shadow-xl"
            >
              {links}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="FitLog Logo" width={30} height={30} />

            <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">
            {links}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-3 sm:gap-5">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#C2F800]"
          >
            <span>Plan</span>

            <span className="flex min-w-7 items-center justify-center rounded-full bg-[#C2F800] px-2 py-1 text-xs font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#C2F800]"
          >
            <span>Saved</span>

            <span className="flex min-w-7 items-center justify-center rounded-full border border-gray-500 px-2 py-1 text-xs">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
