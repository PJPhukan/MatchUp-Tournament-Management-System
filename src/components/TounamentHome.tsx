"use client";

import {
  ArrowBigRight,
  Asterisk,
  Calendar,
  CalendarDays,
  Contact,
  Delete,
  Edit,
  Home,
  IndianRupee,
  LocateFixed,
  LocateIcon,
  Mail,
  MapPin,
  Pencil,
  Phone,
  PhoneCall,
  Settings,
  TrophyIcon,
  Users,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import poster from "@/assets/share.jpg";
import { Separator } from "@radix-ui/react-separator";
import EditContact from "./EditContact";

const TounamentHome = () => {
  const rules = [
    {
      id: 1,
      rule: "Participants must meet the age, skill level, or other requirements specified by the tournament organizers.",
    },
    {
      id: 2,
      rule: "All teams/players must complete the online registration process through MatchUp",
    },
    {
      id: 3,
      rule: "Teams must adhere to the maximum and minimum player count specified by the organizer",
    },
    {
      id: 4,
      rule: "A team can only field registered players for any match; substitutes must also be pre-registered",
    },
    {
      id: 5,
      rule: "Matches will follow the rules outlined in the tournament description (e.g., time limits, scoring methods, etc.).",
    },
    {
      id: 6,
      rule: "Any player or team exhibiting unsportsmanlike behavior, cheating, or violating rules will face penalties, including disqualification.",
    },
    {
      id: 7,
      rule: "Matches will be conducted as per the published schedule. Teams/players must be present at least 15 minutes before their match.",
    },
    {
      id: 8,
      rule: "All disputes must be reported to the organizer immediately after the match.",
    },
  ];

  const rulesParticipation = [
    {
      id: 1,
      rule: "All participants must complete the registration process through the MatchUp platform.",
    },
    {
      id: 2,
      rule: "Participants must meet the age, skill level, and eligibility criteria outlined by the tournament organizer.",
    },
    {
      id: 3,
      rule: "If the tournament requires an entry fee, it must be paid in full before the registration deadline.",
    },
    {
      id: 4,
      rule: "Participants must maintain a respectful attitude towards organizers, referees, and other players.",
    },
    {
      id: 5,
      rule: "Participants are responsible for bringing their own equipment unless otherwise stated by the organizer.",
    },
    {
      id: 6,
      rule: "Participants must arrive at the venue or virtual platform at least 15 minutes before the scheduled match.",
    },
    {
      id: 7,
      rule: "By registering, participants agree to abide by all tournament rules and accept the organizer’s decisions as final.",
    },
  ];

  const facilities = [
    {
      id: 1,
      facility:
        "Access to detailed player profiles and performance stats on the MatchUp platform.",
    },
    {
      id: 2,
      facility:
        "Real-time match updates, schedules, and notifications directly in the player dashboard.",
    },
    {
      id: 3,
      facility:
        "Practice sessions or warm-up slots before matches (if applicable).",
    },
    {
      id: 4,
      facility:
        "Guidelines and rulebooks provided in advance for better preparation.",
    },
    {
      id: 5,
      facility:
        "Dedicated support channels for resolving player queries or issues.",
    },
    {
      id: 6,
      facility:
        "Post-match feedback or analysis to help improve performance (if offered by organizers).",
    },
    {
      id: 7,
      facility: "Participation certificates or badges for all players.",
    },
    {
      id: 8,
      facility:
        "Opportunities to feature in leaderboards and earn recognition.",
    },
  ];

  return (
    <div>
      {/* top  */}
      <div className="w-full flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-2/3">
          <Image
            src={poster}
            alt="Event image"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <span className="flex justify-center items-center gap-2">
            <span className="font-semibold flex gap-1">
              <MapPin />
              Addrss:
            </span>
            Maligoan , Assam , India
          </span>
          <span className="flex justify-center items-center gap-2">
            <span className="font-semibold flex gap-1">
              <LocateFixed />
              Pincode:
            </span>
            123654
          </span>

          <span className="flex justify-center items-center gap-2">
            <span className="font-semibold flex gap-1">
              <CalendarDays />
              Date:
            </span>
            : 15/05/2025
          </span>
          <span className="flex justify-center items-center gap-2">
            <span className="font-semibold flex gap-1">
              <IndianRupee />
              Joining Fee :
            </span>
            99 only
          </span>

          <span className="flex justify-center items-center gap-2">
            <span className="font-semibold flex gap-1">
              <Calendar />
              Last date apply:
            </span>
            12/12/2025
          </span>
        </div>
      </div>

      <Separator />

      {/* Contact details rules  */}
      <div className="flex justify-start items-start flex-col my-4 bg-gray-100 rounded-md py-2 md:py-3 px-1 md:px-2">
        {/* top  */}
        <div className="flex justify-between w-full border-b-2 pb-1 mb-2">
          <h3 className="md:text-3xl text-xl font-medium">Contact Details </h3>
          <EditContact />
        </div>

        {/* contact phone number box  */}
        <div className="flex gap-2">
          <div className="flex gap-2">
            <Phone />
            <span className="font-semibold">Phone Number :</span>
          </div>
          <div className="flex flex-col">
            <span>+91 9876543210</span>
            <span>+91 9876543210</span>
          </div>
        </div>

        {/* contact mail box  */}
        <div className="flex gap-2">
          <div className="flex gap-2">
            <Mail />
            <span className="font-semibold">Email ID :</span>
          </div>
          <div className="flex flex-col">
            <span>xyzexample123@gmail.com</span>
            <span>abcexample123@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Tournamnet rules  */}
      <div className="flex justify-start items-start flex-col my-4 bg-gray-100 rounded-md py-2 md:py-3 px-1 md:px-2">
        {/* top  */}
        <div className="flex justify-between w-full border-b-2 pb-1 mb-2">
          <h3 className="md:text-3xl text-xl font-medium">Tournament Rules</h3>
          <EditContact />
        </div>
        {rules.map((rule) => (
          <div key={rule.id} className="flex gap-2">
            {/* <Asterisk width="20" /> */}
            <ArrowBigRight />
            <p>{rule.rule}</p>
          </div>
        ))}
      </div>

      {/* Rules for participations  */}
      <div className="flex justify-start items-start flex-col my-4 bg-gray-100 rounded-md py-2 md:py-3 px-1 md:px-2">
        {/* top  */}
        <div className="flex justify-between w-full border-b-2 pb-1 mb-2">
          <h3 className="md:text-3xl text-xl font-medium">
            Rules for participation{" "}
          </h3>
          <EditContact />
        </div>
        {rulesParticipation.map((rule) => (
          <div key={rule.id} className="flex gap-2">
            {/* <Asterisk width="20" /> */}
            <ArrowBigRight />
            <p>{rule.rule}</p>
          </div>
        ))}
      </div>

      {/* facilities  */}
      <div className="flex justify-start items-start flex-col my-4 bg-gray-100 rounded-md py-2 md:py-3 px-1 md:px-2">
        {/* top  */}
        <div className="flex justify-between w-full border-b-2 pb-1 mb-2">
          <h3 className="md:text-3xl text-xl font-medium">Facilities</h3>
          <EditContact />
        </div>
        {facilities.map((facilitie) => (
          <div key={facilitie.id} className="flex gap-2">
            {/* <Asterisk width="20" /> */}
            <ArrowBigRight />
            <p>{facilitie.facility}</p>
          </div>
        ))}
      </div>

      {/* footer text  */}
      <p className="text-base font-thin text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam molestias inventore sint nostrum. In expedita minima, dolores alias voluptatem repellat, laudantium fugit eveniet iste qui quos officia voluptatibus voluptate sit quibusdam magnam odit, placeat quasi. Sit officia labore fuga esse expedita rem obcaecati dicta odio ea maiores velit, deserunt voluptate? Quidem voluptatum eveniet sapiente in asperiores rem, iure voluptatem.</p>
    </div>
  );
};

export default TounamentHome;
