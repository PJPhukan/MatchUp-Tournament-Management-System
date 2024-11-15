"use client";

import context from "./context";
import React, { ReactNode } from "react";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const name = "true";
  let isLoggedIn = true;
  return (
    <context.Provider value={{ name, isLoggedIn }}>{children}</context.Provider>
  );
};

export default AppProvider;
