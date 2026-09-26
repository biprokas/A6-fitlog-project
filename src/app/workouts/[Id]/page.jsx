import PlannedButton from "@/components/itemDetails/PlannedButton";
import SavedButton from "@/components/itemDetails/SavedButton";
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
                  <span className="text-zinc-200 font-semibold">
                    {stat.value}
                  </span>
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
            <PlannedButton item={item} />

            <SavedButton item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
