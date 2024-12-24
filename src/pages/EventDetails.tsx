"use client";

import EditEvent from "@/components/EditEvent";
import {
  Home,
  Settings,
  UsersRound,
} from "lucide-react";
import React, { useState } from "react";

import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Tournament from "@/components/Tournament";
import CreateTournament from "@/components/CreateTournament";
import EventDetailsHome from "@/components/EventDetailsHome";
import EventDetailsMemebers from "@/components/EventDetailsMemebers";
import EventDetailsSetting from "@/components/EventDetailsSetting";
const EventDetails = () => {
  const [isActiveHome, setisActiveHome] = useState(true);
  const [isActiveMembers, setIsActiveMembers] = useState(false);
  const [isActiveSettings, setIsActiveSettings] = useState(false);

  const changeNav = (btn: string) => {
    if (btn === "home") {
      setisActiveHome(true);
      setIsActiveMembers(false);
      setIsActiveSettings(false);
    } else if (btn === "members") {
      setisActiveHome(false);
      setIsActiveMembers(true);
      setIsActiveSettings(false);
    } else if (btn === "settings") {
      setisActiveHome(false);
      setIsActiveMembers(false);
      setIsActiveSettings(true);
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
        <EditEvent />
      </div>
      <Separator />
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
              isActiveMembers ? "bg-gray-200" : ""
            } flex justify-center items-center gap-2 py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200 rounded transition-all `}
            onClick={() => changeNav("members")}
          >
            <UsersRound className="h-4" />
            <span>Members</span>
          </li>
          <li
            className={`${
              isActiveSettings ? "bg-gray-200" : ""
            } flex justify-center items-center gap-2 py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200 rounded transition-all `}
            onClick={() => changeNav("settings")}
          >
            <Settings className="h-4" />
            <span>Settings</span>
          </li>
        </ul>
      </nav>

      {isActiveHome && <EventDetailsHome />}
      {isActiveMembers && <EventDetailsMemebers />}
      {isActiveSettings && <EventDetailsSetting />}
    </div>
  );
};

export default EventDetails;
