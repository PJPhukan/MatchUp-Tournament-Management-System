"use client";
import Image from "next/image";
import { useContext } from "react";
import context from "@/context/context";
export default function Home() {
  const contextTest = useContext(context);
  const { name } = contextTest;
  return <div className="text-2xl">{name}</div>;
}
