"use client";

import EditTournament from "@/components/EditTournament";
import TounamentHome from "@/components/TounamentHome";
import TournamentApplication from "@/components/TournamentApplication";
import TournamentResult from "@/components/TournamentResult";
import TournamentSchedule from "@/components/TournamentSchedule";
import TournamentSettings from "@/components/TournamentSettings";
import { Separator } from "@radix-ui/react-separator";
import {
  Calendar,
  Home,
  Settings,
  TrophyIcon,
  Users,
  UsersRound,
} from "lucide-react";
import React, { useState } from "react";

const TournamentDetails = () => {
  const [isActiveHome, setisActiveHome] = useState(true);
  const [isActiveApplications, setisActiveApplications] = useState(false);
  const [isActiveShedule, setisActiveShedule] = useState(false);
  const [isActiveResult, setisActiveResult] = useState(false);
  const [isActiveSettings, setisActiveSettings] = useState(false);

  const changeNav = (btn: string) => {
    if (btn === "home") {
      setisActiveHome(true);
      setisActiveApplications(false);
      setisActiveShedule(false);
      setisActiveResult(false);
      setisActiveSettings(false);
    } else if (btn === "applications") {
      setisActiveHome(false);
      setisActiveApplications(true);
      setisActiveShedule(false);
      setisActiveResult(false);
      setisActiveSettings(false);
    } else if (btn === "shedule") {
      setisActiveHome(false);
      setisActiveApplications(false);
      setisActiveShedule(true);
      setisActiveResult(false);
      setisActiveSettings(false);
    } else if (btn === "result") {
      setisActiveHome(false);
      setisActiveApplications(false);
      setisActiveShedule(false);
      setisActiveResult(true);
      setisActiveSettings(false);
    } else if (btn === "setting") {
      setisActiveHome(false);
      setisActiveApplications(false);
      setisActiveShedule(false);
      setisActiveResult(false);
      setisActiveSettings(true);
    }
  };
  return (
    <div className="px-2 md:px-4 py-3 md:py-6  min-w-full">
      {/* top header  */}
      <div className="flex mb-3 md:mb-4 w-full justify-between">
        <div>
          <p className="font-semibold md:text-3xl text-2xl">College Week </p>
          <p className="font-thin text-gray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nisi odio assumenda voluptate laudantium, laboriosam consectetur
            quidem minus, dolor natus perspiciatis dolore ipsum illum eos. Quas
            laudantium repellendus minima officia.
          </p>
        </div>
        <EditTournament />
      </div>
      <Separator />
      {/* nav section  */}
      {/* nav section  */}
      <nav className="my-3 max-w-[100vw] sticky top-0 z-40 left-0 bg-white py-3">
        <ul className="flex w-full items-center gap-1 md:gap-3 overflow-x-scroll scrollbar-hide">
          <li
            className={`${
              isActiveHome ? "bg-gray-200" : ""
            } flex justify-center items-center gap-2 py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200 rounded transition-all `}
            onClick={() => changeNav("home")}
          >
            <Home className="h-4" />
            <span>Home</span>
          </li>

          <li
            className={`${
              isActiveApplications ? "bg-gray-200" : ""
            } flex justify-center items-center gap-2 py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200 rounded transition-all `}
            onClick={() => changeNav("applications")}
          >
            <Users className="h-4" />
            <span>Applications</span>
          </li>

          <li
            className={`${
              isActiveShedule ? "bg-gray-200" : ""
            } flex justify-center items-center gap-2 py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200 rounded transition-all `}
            onClick={() => changeNav("shedule")}
          >
            <Calendar className="h-4" />
            <span>Schedule</span>
          </li>
          <li
            className={`${
              isActiveResult ? "bg-gray-200" : ""
            } flex justify-center items-center gap-2 py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200 rounded transition-all `}
            onClick={() => changeNav("result")}
          >
            <TrophyIcon className="h-4" />
            <span>Result</span>
          </li>

          <li
            className={`${
              isActiveSettings ? "bg-gray-200" : ""
            } flex justify-center items-center gap-2 py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200 rounded transition-all `}
            onClick={() => changeNav("setting")}
          >
            <Settings className="h-4" />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
      {isActiveHome && <TounamentHome />}
      {isActiveApplications && <TournamentApplication />}
      {isActiveResult && <TournamentResult />}
      {isActiveShedule && <TournamentSchedule />}
      {isActiveSettings && <TournamentSettings />}
    </div>
  );
};

export default TournamentDetails;
