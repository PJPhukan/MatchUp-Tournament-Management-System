"use client";
import Image from "next/image";
import { useContext } from "react";
import context from "@/context/context";
import Navber from "@/components/Navber";
export default function Home() {
  const contextTest = useContext(context);
  const { name } = contextTest;
  let isLoggedin = false;
  return (
    <>
      {/* hero section  */}
      <section className="text-2xl">
        <div className="max-w-9xl"> Home page</div>
      </section>

      {/* event section  */}

      {/* tournament section  */}

      {/* how to use section  */}

      {/* testimonial section  */}

      {/* Footer section  */}
    </>
  );
}
