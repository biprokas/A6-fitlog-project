"use client";

import React, { Children, createContext, useState } from "react";

export const ItemsContext = createContext( );

const ItemsProvider = ({ children  }) => {
  const [planned, setPlanned] = useState([]);
  const [later, setLater] = useState([]);

  const sharedData = {
    planned,
    setPlanned,
    later,
    setLater,
  };

  return (
    <ItemsContext.Provider value={sharedData}>{children}</ItemsContext.Provider>
  );
};

export default ItemsProvider;
