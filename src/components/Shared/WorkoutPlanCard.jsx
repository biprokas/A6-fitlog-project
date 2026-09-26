import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkoutPlanCard = ({
  item,
  status,
  isDone,
  alreadyPlanned,
  onDone,
  onAdd,
  onRemove,
}) => {
  return (
    <div
      className={`group flex w-full overflow-hidden rounded-2xl border bg-[#121418] shadow-xl transition-all duration-300 ${
        isDone
          ? "border-[#cfff04]/40"
          : "border-zinc-800/80 hover:border-zinc-700"
      }`}
    >
      {/* Image */}
      <div className="relative hidden h-auto w-48 shrink-0 bg-zinc-900 sm:block">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={300}
          unoptimized
          className={`h-full w-full object-cover transition-all duration-300 ${
            isDone ? "opacity-50 grayscale" : ""
          }`}
        />
      </div>

      {/* Workout Info */}
      <div className="min-w-0 flex-1 p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {item.muscleGroups?.map((group, idx) => (
            <span
              key={idx}
              className="rounded-full bg-[#cfff04] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3
          className={`mb-2 text-xl font-black uppercase tracking-wide leading-snug ${
            isDone ? "text-zinc-500 line-through" : "text-white"
          }`}
        >
          {item.name}
        </h3>

        <p className="text-sm font-medium text-zinc-400">
          {item.equipment}
        </p>

        <div className="mt-5 flex flex-wrap gap-5 text-xs font-medium text-zinc-500">
          <span>⏱ {item.duration || "45 min"}</span>
          <span>🔥 {item.calories || "320 kcal"}</span>
          <span>★ {item.rating || "4.8"}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex w-36 shrink-0 flex-col justify-between border-l border-zinc-800/80 p-4 sm:w-44 sm:p-5">
        <div className="text-right">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${
              isDone ? "text-[#cfff04]" : "text-zinc-600"
            }`}
          >
            {status === "planned"
              ? isDone
                ? "Completed"
                : "Today's Plan"
              : "Saved"}
          </span>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          {/* View Details */}
          <Link
            href={`/workouts/${item.id}`}
            className="flex w-full items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-xs font-bold text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            View Details
          </Link>

          {/* Planned */}
          {status === "planned" && (
            <button
              onClick={() => onDone(item.id)}
              disabled={isDone}
              className={`flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold transition ${
                isDone
                  ? "cursor-default bg-[#cfff04]/20 text-[#cfff04]"
                  : "bg-[#cfff04] text-black hover:bg-[#bce600]"
              }`}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>

              {isDone ? "Done" : "Mark as Done"}
            </button>
          )}

          {/* Saved */}
          {status === "saved" && (
            <button
              onClick={() => onAdd(item)}
              disabled={alreadyPlanned}
              className={`w-full rounded-xl px-3 py-2.5 text-xs font-bold transition ${
                alreadyPlanned
                  ? "cursor-not-allowed bg-zinc-800 text-zinc-500"
                  : "bg-[#cfff04] text-black hover:bg-[#bce600]"
              }`}
            >
              {alreadyPlanned ? "Already Planned" : "Add to Plan"}
            </button>
          )}

          {/* Remove */}
          <button
            onClick={() => onRemove(item.id)}
            aria-label="Remove workout"
            className="flex w-full items-center justify-center rounded-xl border border-zinc-800 bg-transparent px-3 py-2.5 text-zinc-500 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;