import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-[#222630] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Content */}
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#C2F800] sm:text-sm">
              Workout Library
            </p>

            <h2 className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
              Train With Intent.
              <br />
              Log Every Set.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
              FitLog is a dark, no-nonsense gym companion. Pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <button className="mt-7 rounded-lg bg-[#C2F800] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4ff33] hover:shadow-lg hover:shadow-[#C2F800]/10 active:translate-y-0">
              Browse Workouts
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={bannerImg}
                alt="Workout training"
                className="block h-auto max-w-full transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
