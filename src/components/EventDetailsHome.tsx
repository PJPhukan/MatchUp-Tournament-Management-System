import React from "react";
import CreateTournament from "./CreateTournament";
import { CalendarDays, LocateFixed, MapPin } from "lucide-react";
import Image from "next/image";
import poster from "@/assets/share.jpg";
import Tournament from "./Tournament";
const EventDetailsHome = () => {
  let isUser = true;
  return (
    <section className="z-10">
      {/* home section  */}
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
                Start Date :
              </span>
              12/05/2025
            </span>

            <span className="flex justify-center items-center gap-2">
              <span className="font-semibold flex gap-1">
                <CalendarDays />
                End Date :
              </span>
              12/05/2025
            </span>
          </div>
        </div>

        {/* show all events  */}
        <section className="mt-3 md:mt-4">
          <div className="flex justify-between mb-3 md:mb-4">
            <h1 className="text-2xl font-bold">All Events </h1>
            <CreateTournament />
          </div>
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            <Tournament isUser={isUser} />
            <Tournament isUser={isUser} />
            <Tournament isUser={isUser} />
            <Tournament isUser={isUser} />
            <Tournament isUser={isUser} />
            <Tournament isUser={isUser} />
            <Tournament isUser={isUser} />
            <Tournament isUser={isUser} />
            <Tournament isUser={isUser} />
            {/* <Tournament isUser={false} /> */}
          </div>
        </section>

        {/* footer text  */}
        <p>Write about your organizer team </p>
      </div>

      {/* memebers section  */}

      {/* settings sections  */}
    </section>
  );
};

export default EventDetailsHome;
