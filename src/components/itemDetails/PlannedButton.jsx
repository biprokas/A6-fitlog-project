"use client";

import ItemsProvider, { ItemsContext } from "@/context/ItemsContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const PlannedButton = ({ item }) => {
  const { planned, setPlanned } = useContext(ItemsContext);

  const handlePlanned = () => {
    const alreadyPlanned = planned.some(
      (plannedItem) => plannedItem.id === item.id,
    );

    if (alreadyPlanned) {
      toast("Already added to today's plan", {
        icon: false,
        style: {
          backgroundColor: "#121418",
          border: "1px solid #1f222a",
          borderRadius: "0.75rem",
          padding: "12px 16px",
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.5)",
        },
        hideProgressBar: true,
      });

      return;
    }
    setPlanned([...planned, item]);
    toast(
      <div className="flex items-center gap-2">
        {/* Green Circle with White Checkmark */}
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#4cd964] shrink-0">
          <svg
            className="w-3 h-3 stroke-white fill-none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Text */}
        <span className="text-sm font-medium text-zinc-100 tracking-wide">
          Added to today's plan
        </span>
      </div>,
      {
        icon: false, // Disables default toastify icon
        style: {
          backgroundColor: "#121418",
          border: "1px solid #1f222a",
          borderRadius: "0.75rem", // rounded-xl
          padding: "12px 16px",
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.5)",
        },
        hideProgressBar: true,
      },
    );
  };

  return (
    <div>
      <button
        onClick={() => handlePlanned()}
        className="btn bg-[#cfff04] hover:bg-[#bce600] text-black border-none flex-1 font-bold normal-case text-sm rounded-xl"
      >
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
    </div>
  );
};

export default PlannedButton;
