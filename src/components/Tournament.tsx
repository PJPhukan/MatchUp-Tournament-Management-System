import React from "react";
import TournamentImg from "@/assets/tournamentImg.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Tournament = ({ isUser }: { isUser: Boolean }) => {
  return (
    <Link href={`/dashboard/tournament/123`} className="cursor-pointer">
      <div className="flex flex-col w-full border shadow-md py-2 px-2 rounded-md gap-1">
        <h1 className="font-semibold  text-base md:text-xl text-nowrap text-ellipsis overflow-hidden">
          Cricket
        </h1>
        <Image src={TournamentImg} alt="" className="rounded-sm" />
        <p className="text-nowrap text-ellipsis overflow-hidden font-thin text-base text-gray-500">
          Cricket is a bat-and-ball game played between two teams of eleven
          players using Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus, totam iusto eos culpa illum beatae itaque odit saepe pariatur
          quam.
        </p>
        <p>
          <span className="font-medium">Place:</span> Maligoan ,Ghy ,Assam
        </p>
        <p>
          <span className="font-medium">Last Date:</span>12/04/2005
        </p>
        <Button
          className={`bg-green-600 text-white ${isUser ? "hidden" : "block"} `}
        >
          Appply now
        </Button>
      </div>
    </Link>
  );
};

export default Tournament;
