"use client";

import { ItemsContext } from "@/context/ItemsContext";
import React, { useContext } from "react";

const MyPlannedItems = () => {
  const { planned } = useContext(ItemsContext);

        console.log(planned)

  return <div>my plans page is rendered</div>;
};

export default MyPlannedItems;
