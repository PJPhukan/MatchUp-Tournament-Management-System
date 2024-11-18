import React from "react";
import FooterComponent from "@/components/Footer";
const Footer = () => {
  return (
    <section className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col md:mt-10 sm:mt-4 mt-2 -z-10 bg-black">
      <div className="flex justify-between md:p-8 p-3 w-full mx-auto h-full flex-col">
               <FooterComponent />
      </div>
    </section>
  );
};

export default Footer;
