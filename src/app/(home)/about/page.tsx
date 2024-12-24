import Navbar from "@/components/Navber";
import React from "react";
import OrgImg from "@/assets/aboutOrganizer.webp";
import PartImg from "@/assets/aboutParticipant.webp";
import Footer from "@/pages/Footer";
import Image from "next/image";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="bg-aboutBg bg-cover bg-center bg-no-repeat w-full">
        <div className="w-full min-h-screen flex items-center bg-blackOverlay text-white flex-col justify-center">
          <h4 className="text-3xl md:text-6xl text-left md:text-center font-extrabold ">
            WelCome To MatchUp
          </h4>
          <h4 className="text-xl text-center text-gray-300 mb-3 md:mt-5">
            Where Teams Compete, and Champions Rise!
          </h4>
          <p className="w-full md:w-2/3 text-center font-medium text-xl md:text-2xl ">
            At MatchUp, we’re passionate about bringing people together through
            the spirit of competition. Whether you’re organizing a thrilling
            football tournament, an intense cricket series, or a friendly
            running challenge, MatchUp is your ultimate partner in tournament
            management.
          </p>
          <div className=" flex w-full flex-col md:flex-row items-center justify-center gap-4 my-3 px-1">
            <div className="bg-gray-600 w-full h-full md:w-1/3 border shadow-lg rounded-lg px-4 py-5 flex justify-center flex-col items-center">
              <h3 className="text-2xl font-semibold text-center mb-2">
                For Organizers
              </h3>
              <Image src={OrgImg} alt="" className="w-[95%] rounded-xl " />
              <p className="text-lg text-center">
                Effortlessly create and manage tournaments. Customize
                participation rules, tournament rules, track team registrations,
                and ensure seamless communication—all from one platform.
              </p>
            </div>
            <div className="bg-gray-600 w-full h-full md:w-1/3 border shadow-lg rounded-lg px-4 py-5 flex justify-center flex-col items-center">
              <h3 className="text-2xl font-semibold text-center mb-2">
                For Participants
              </h3>
              <Image src={PartImg} alt="" className="w-[95%] rounded-xl " />
              <p className="text-lg text-center">
                Easily find and join tournaments that match your interests.
                Whether you’re a team of professionals or an individual looking
                to shine, MatchUp connects you with opportunities to showcase
                your talent.
              </p>
            </div>
          </div>
          <div className="bg-visionBg bg-cover bg-left min-h-[300px] bg-no-repeat w-full md:w-2/3 rounded-md mb-3 flex justify-end items-center">
            <p className="w-full md:w-1/2 font-semibold text-xl">
              &nbsp;&nbsp;&nbsp; We aim to make sports and games accessible,
              organized, and fun for everyone. By streamlining the management
              process, we help organizers focus on creating memorable events
              while giving participants a chance to shine.<br/>
              Join MatchUp today and experience the future of tournament management!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
