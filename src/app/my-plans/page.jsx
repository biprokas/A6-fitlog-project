"use client";

import { ItemsContext } from "@/context/ItemsContext";
import WorkoutPlanCard from "@/components/Shared/WorkoutPlanCard";
import CustomToast from "@/components/Shared/CustomToast";
import Link from "next/link";
import React, { useContext, useMemo, useState } from "react";
import { toast } from "react-toastify";
import PlanStats from "@/components/Shared/PlanStats";

const toastConfig = {
  icon: false,
  style: {
    backgroundColor: "#121418",
    border: "1px solid #1f222a",
    borderRadius: "0.75rem",
    padding: "12px 16px",
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.5)",
  },
  hideProgressBar: true,
};

const MyPlannedItems = () => {
  const { planned, later, setPlanned, setLater } = useContext(ItemsContext);

  const [completedIds, setCompletedIds] = useState([]);

  // Sort state
  const [sortBy, setSortBy] = useState("duration");

  // Sort Today's Plan
  const sortedPlanned = useMemo(() => {
    const sorted = [...planned];

    sorted.sort((a, b) => {
      if (sortBy === "duration") {
        return parseInt(a.duration || 0) - parseInt(b.duration || 0);
      }

      if (sortBy === "calories") {
        return parseInt(a.calories || 0) - parseInt(b.calories || 0);
      }

      if (sortBy === "rating") {
        return parseFloat(b.rating || 0) - parseFloat(a.rating || 0);
      }

      return 0;
    });

    return sorted;
  }, [planned, sortBy]);

  // Remove from Today's Plan
  const handleRemovePlanned = (id) => {
    setPlanned(planned.filter((item) => item.id !== id));

    toast(
      <CustomToast type="error" message="Removed from today's plan" />,
      toastConfig,
    );
  };

  // Remove from Saved
  const handleRemoveSaved = (id) => {
    setLater(later.filter((item) => item.id !== id));

    toast(
      <CustomToast type="error" message="Removed from saved" />,
      toastConfig,
    );
  };

  // Add to Today's Plan
  const handleAddToPlan = (item) => {
    const alreadyPlanned = planned.some(
      (plannedItem) => plannedItem.id === item.id,
    );

    if (alreadyPlanned) return;

    setPlanned([...planned, item]);

    toast(<CustomToast message="Added to today's plan" />, toastConfig);
  };

  // Mark as Done
  const handleMarkDone = (id) => {
    if (completedIds.includes(id)) return;

    setCompletedIds([...completedIds, id]);

    toast(<CustomToast message="Workout marked as done" />, toastConfig);
  };

  return (
    <div className="container mx-auto mt-10">
      {/* Header */}
      <div className="mb-10">
        <h2 className="mb-2 text-4xl font-extrabold tracking-tight text-white">
          MY PLAN
        </h2>

        <p className="max-w-md text-sm leading-7 text-gray-400 sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <PlanStats />

      {/* Tabs */}
      <div className="tabs tabs-lift">
        {/* ================= TODAY'S PLAN ================= */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today’s Plan"
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          {/* Top Bar */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Today's Plan</h3>

            {/* Sort By */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-800 bg-[#121418] px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-zinc-700 hover:text-white"
              >
                <span>Sort By</span>

                {/* Chevron */}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="dropdown-content menu z-[1] mt-2 w-40 rounded-xl border border-zinc-800 bg-[#121418] p-2 shadow-2xl"
              >
                <li>
                  <button
                    onClick={() => setSortBy("duration")}
                    className={
                      sortBy === "duration"
                        ? "bg-[#cfff04] font-bold text-black"
                        : "text-zinc-300"
                    }
                  >
                    Duration
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSortBy("calories")}
                    className={
                      sortBy === "calories"
                        ? "bg-[#cfff04] font-bold text-black"
                        : "text-zinc-300"
                    }
                  >
                    Calories
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSortBy("rating")}
                    className={
                      sortBy === "rating"
                        ? "bg-[#cfff04] font-bold text-black"
                        : "text-zinc-300"
                    }
                  >
                    Rating
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Planned List */}
          {sortedPlanned.length > 0 ? (
            <div className="flex flex-col gap-4">
              {sortedPlanned.map((item) => (
                <WorkoutPlanCard
                  key={item.id}
                  item={item}
                  status="planned"
                  isDone={completedIds.includes(item.id)}
                  onDone={handleMarkDone}
                  onRemove={handleRemovePlanned}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <h2 className="text-2xl font-bold text-white">
                No workouts planned
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Add some workouts to build today's plan.
              </p>

              <Link
                href="/workouts"
                className="mt-5 rounded-xl bg-[#cfff04] px-5 py-3 text-sm font-bold text-black hover:bg-[#bce600]"
              >
                Browse Workouts
              </Link>
            </div>
          )}
        </div>

        {/* ================= SAVED ================= */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          {later.length > 0 ? (
            <div className="flex flex-col gap-4">
              {later.map((item) => (
                <WorkoutPlanCard
                  key={item.id}
                  item={item}
                  status="saved"
                  alreadyPlanned={planned.some(
                    (plannedItem) => plannedItem.id === item.id,
                  )}
                  onAdd={handleAddToPlan}
                  onRemove={handleRemoveSaved}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <h2 className="text-2xl font-bold text-white">
                No saved workouts
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Save workouts that you want to try later.
              </p>

              <Link
                href="/workouts"
                className="mt-5 rounded-xl bg-[#cfff04] px-5 py-3 text-sm font-bold text-black hover:bg-[#bce600]"
              >
                Browse Workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlannedItems;
