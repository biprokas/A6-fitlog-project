import Image from "next/image";
import React from "react";

const getSets = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const ItemDetailsPage = async ({ params }) => {
  const { Id } = await params;
  const itemsData = await getSets();
  const item = itemsData.find((item) => item.id === Number(Id));

  return (
   <div>
  <div className="card lg:card-side bg-[#121418] text-white shadow-2xl border border-zinc-800/80 rounded-2xl overflow-hidden max-w-5xl mx-auto my-8">
    {/* Left Image Section */}
    <figure className="lg:w-1/2 relative m-0 min-h-[350px] lg:min-h-full bg-zinc-900">
      <Image
        src={item.image}
        alt={item.name}
        width={800}
        height={520}
        unoptimized
        className="w-full h-full object-cover object-center"
      />
    </figure>

    {/* Right Content Section */}
    <div className="card-body lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
      <div>
        {/* Title & Description */}
        <h2 className="card-title text-2xl sm:text-3xl font-black uppercase tracking-wider text-white mb-2">
          {item.name}
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm mb-4 leading-relaxed font-normal flex-grow-0">
          {item.description}
        </p>

        {/* Muscle Group Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.muscleGroups?.map((group, idx) => (
            <div
              key={idx}
              className="badge bg-[#cfff04] text-black border-none font-extrabold text-[10px] sm:text-xs uppercase px-3 py-2 tracking-wider"
            >
              {group}
            </div>
          ))}
        </div>

        {/* Workout Stats List */}
        <div className="bg-[#181a20]/60 rounded-xl divide-y divide-zinc-800/60 border border-zinc-800/40 mb-6">
          {[
            { label: "EQUIPMENT", value: item.equipment },
            { label: "DIFFICULTY", value: item.difficulty },
            { label: "SETS", value: item.sets },
            { label: "REPS", value: item.reps },
            { label: "DURATION", value: `${item.duration} min` },
            { label: "CALORIES", value: `${item.caloriesBurned} kcal` },
            { label: "RATING", value: item.rating },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm"
            >
              <span className="text-zinc-500 font-bold uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="text-zinc-200 font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-white mb-3">
            INSTRUCTIONS
          </h3>
          <ol className="space-y-2">
            {item.instructions?.map((step, idx) => (
              <li
                key={idx}
                className="flex text-zinc-400 text-xs sm:text-sm leading-relaxed"
              >
                <span className="mr-2 font-semibold text-zinc-500 min-w-[18px]">
                  {idx + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="card-actions justify-start flex-col sm:flex-row gap-3 pt-2">
        <button className="btn bg-[#cfff04] hover:bg-[#bce600] text-black border-none flex-1 font-bold normal-case text-sm rounded-xl">
          <svg
            className="w-4 h-4 stroke-black fill-none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <line x1="12" y1="14" x2="12" y2="18" />
            <line x1="10" y1="16" x2="14" y2="16" />
          </svg>
          Add to today's plan
        </button>

        <button className="btn bg-[#1a1d24] hover:bg-[#222630] border-zinc-800 text-zinc-300 normal-case text-sm rounded-xl font-semibold">
          <svg
            className="w-4 h-4 stroke-zinc-400 fill-none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          Save for later
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default ItemDetailsPage;
