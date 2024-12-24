import React from "react";
import ProfileImg from "@/assets/me.jpg";
import Image from "next/image";
const EventDetailsMemebers = () => {
  const members = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <h2 className="text-3xl font-bold text-left text-gray-800 mb-5">Members</h2>
      <div className="flex justify-center items-center w-full  flex-row flex-wrap gap-2">
        {members.map((member) => (
          <div className=" w-[45vw] sm:w-64 bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="rounded-full overflow-hidden w-32 h-32 shadow-lg mb-4">
              <Image
                src={ProfileImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800">PJPhukan</h3>
            <p className="text-sm text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetailsMemebers;
