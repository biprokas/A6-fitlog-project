import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkoutCard = ({ item }) => {
  return (
    <Link href={`/workouts/${item.id}`}>
      <div className="bg-[#121418] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-zinc-700 transition-all duration-300">
        {/* Header */}
        <div>
          <div className="relative w-full h-52 bg-zinc-900 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={800}
              height={520}
              unoptimized
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Body */}
          <div className="p-5">
            {/* Muscle Group Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              {item.muscleGroups?.map((group, idx) => (
                <span
                  key={idx}
                  className="bg-[#cfff04] text-black font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Workout Title & Equipment */}
            <h3 className="text-white font-black text-xl uppercase tracking-wide mb-1 leading-snug">
              {item.name}
            </h3>
            <p className="text-zinc-400 text-sm font-medium">
              {item.equipment}
            </p>
          </div>
        </div>

        {/* Card Footer / Stats */}
        <div className="px-5 pb-5 pt-2 ">
          <div className="border-t border-zinc-800/80 pt-4 flex items-center justify-between text-zinc-400 text-sm font-medium">
            <div className="grid grid-cols-3 gap-4">
              {/* Duration */}
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 stroke-zinc-400 fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <span>{item.duration} min</span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 fill-zinc-400" viewBox="0 0 24 24">
                  <path d="M12 2c0 0-5 4-5 8.5C7 13.5 9.2 16 12 16s5-2.5 5-5.5C17 6 12 2 12 2zm0 12c-1.7 0-3-1.3-3-3 0-1.7 1.7-3.8 3-5 1.3 1.2 3 3.3 3 5 0 1.7-1.3 3-3 3z" />
                </svg>
                <span>{item.caloriesBurned} kcal</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 stroke-zinc-400 fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
