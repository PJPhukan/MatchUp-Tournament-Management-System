"use client";

import { AppContext } from "@/types/AppContextType";
import { createContext } from "react";
const context = createContext<AppContext>({});

export default context;
