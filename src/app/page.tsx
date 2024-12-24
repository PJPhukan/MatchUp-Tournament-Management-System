"use client";
import Image from "next/image";
import { useContext } from "react";
import context from "@/context/context";
import Header from "../pages/Header";
import Testimonial from "@/pages/Testimonial";
import Footer from "@/pages/Footer";
import Navbar from "@/components/Navber";
import ShowAllEvent from "@/pages/ShowAllEvent";
import ShowALlTournament from "@/pages/ShowALlTournament";
export default function Home() {
  const contextTest = useContext(context);
  const { name } = contextTest;
  let isLoggedin = false;
  return (
    <>
      <Navbar />
      {/* hero section  */}
      <Header />

      {/* event section  */}
      <ShowAllEvent />

      {/* tournament section  */}
      <ShowALlTournament />

      {/* how to use section  */}

      {/* testimonial section  */}
      <Testimonial />

      {/* Footer section  */}
      <Footer />
    </>
  );
}
