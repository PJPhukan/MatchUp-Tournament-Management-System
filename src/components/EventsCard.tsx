"use client";
import Image from "next/image";
import React from "react";
import TournamentImg from "@/assets/tournamentImg.png";
import Link from "next/link";
const EventsCard = () => {
  return (
    <div className="border flex w-full justify-center flex-col py-3 px-2 rounded-md md:max-w-[300px] shadow-lg">
      <h1 className=" text-base md:text-xl mb-2 font-semibold overflow-hidden whitespace-nowrap text-ellipsis ">
        Lalit Chrandra College Student Union
      </h1>
      <Image
        src={TournamentImg}
        alt="Poster"
        className="rounded-lg overflow-hidden my-3"
      />
      <p className="font-medium">
        Address : <span className="font-normal">Maligoan,</span>
        <span className="font-normal">Assame,</span>
        <span className="font-normal">India</span>
      </p>
      <p className="font-medium">
        Pincode : <span className="font-normal">340977</span>
      </p>
      <p className="font-medium">
        Last Date : <span className="font-normal">12/12/2025</span>
      </p>
      <p className="font-medium">
        Joining fee: <span className="font-normal">500 only</span>
      </p>
      <Link href="/" className="w-full bg-green-500 p-2 rounded-lg text-center font-bold text-xl">View</Link>
    </div>
  );
};

export default EventsCard;
