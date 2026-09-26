"use client";

import React, { useContext } from "react";
import { ItemsContext } from "@/context/ItemsContext";

const PlanStats = ({ activeTab }) => {
  const { planned, later } = useContext(ItemsContext);

  const currentList = activeTab === "planned" ? planned : later;

  const totalExercises = currentList.length;

  const totalMinutes = currentList.reduce(
    (total, item) => total + item.duration,
    0
  );

  const totalCalories = currentList.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {/* Exercises */}
      <div className="rounded-2xl border border-zinc-800 bg-[#121418] p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          Exercises
        </p>

        <h2 className="mt-2 text-3xl font-black text-[#cfff04]">
          {totalExercises}
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          {activeTab === "planned"
            ? "exercises planned"
            : "exercises saved"}
        </p>
      </div>

      {/* Minutes */}
      <div className="rounded-2xl border border-zinc-800 bg-[#121418] p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          Minutes
        </p>

        <h2 className="mt-2 text-3xl font-black text-[#cfff04]">
          {totalMinutes}
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          total workout time
        </p>
      </div>

      {/* Calories */}
      <div className="rounded-2xl border border-zinc-800 bg-[#121418] p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          Calories
        </p>

        <h2 className="mt-2 text-3xl font-black text-[#cfff04]">
          {totalCalories}
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          calories to burn
        </p>
      </div>
    </div>
  );
};

export default PlanStats;