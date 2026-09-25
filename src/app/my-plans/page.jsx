"use client";

import { ItemsContext } from "@/context/ItemsContext";
import React, { useContext } from "react";

const MyPlannedItems = () => {
  const { planned , later } = useContext(ItemsContext);

        console.log(planned, "planned", later , "saved")

  return <div>my plans page is rendered</div>;
};

export default MyPlannedItems;
