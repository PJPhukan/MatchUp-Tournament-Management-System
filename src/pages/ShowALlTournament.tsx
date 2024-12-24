import Tournament from "@/components/Tournament";
import React from "react";

const ShowALlTournament = () => {
  return (
    <section className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col md:my-10 sm:my-4 my-2 -z-10">
      <div className="flex justify-between md:p-8 p-3 bg-gradient-to-bl rounded-lg shadow-lg w-full mx-auto h-full flex-col">
        <h1 className="md:text-5xl sm:text-4xl text-3xl text-center font-semibold">
          Upcomming Tournament
        </h1>
        <p className="text-center font-thin text-gray-600">
          Participate your favorite game & win the prize.
        </p>
        <div className=" mt-4 flex justify-center items-center gap-2 flex-wrap">
          <div className=" flex w-full justify-center flex-col  rounded-md md:max-w-[300px] shadow-lg">
            <Tournament isUser={false} />
          </div>
          <div className=" flex w-full justify-center flex-col  rounded-md md:max-w-[300px] shadow-lg">
            <Tournament isUser={false} />
          </div>
          <div className=" flex w-full justify-center flex-col  rounded-md md:max-w-[300px] shadow-lg">
            <Tournament isUser={false} />
          </div>
          <div className=" flex w-full justify-center flex-col  rounded-md md:max-w-[300px] shadow-lg">
            <Tournament isUser={false} />
          </div>
          <div className=" flex w-full justify-center flex-col  rounded-md md:max-w-[300px] shadow-lg">
            <Tournament isUser={false} />
          </div>
          <div className=" flex w-full justify-center flex-col  rounded-md md:max-w-[300px] shadow-lg">
            <Tournament isUser={false} />
          </div>
          <div className=" flex w-full justify-center flex-col  rounded-md md:max-w-[300px] shadow-lg">
            <Tournament isUser={false} />
          </div>
          <div className=" flex w-full justify-center flex-col  rounded-md md:max-w-[300px] shadow-lg">
            <Tournament isUser={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowALlTournament;
