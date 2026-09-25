"use client";

import ItemsProvider, { ItemsContext } from "@/context/ItemsContext";
import React, { useContext } from "react";

const PlannedButton = ({ item }) => {
  const { planned, setPlanned } = useContext(ItemsContext);



  const handlePlanned = () => {

    setPlanned([...planned, item]);
    alert(`added to my planned "${item.name}" `);
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
