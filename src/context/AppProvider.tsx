"use client";

import context from "./context";
import React, { ReactNode } from "react";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const name = "pjphukan";
  return <context.Provider value={{ name }}>{children}</context.Provider>;
};

export default AppProvider;
