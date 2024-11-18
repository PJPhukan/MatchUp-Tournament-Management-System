import React from "react";
import { Navigation, TabletSmartphone, Mail } from "lucide-react";
import Payment from "@/assets/payments.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-white">
      <div className="container mx-auto px-4 pt-10 flex flex-wrap gap-8 w-full flex-1 justify-between ">
        {/* About Section */}
        <div className="max-w-sm ">
          <div className="text-xl md:text-2xl font-medium mb-5">About</div>
          <p className="text-gray-300 text-sm">
            <b>MatchUp</b> is an innovative and user-friendly tournament
            management system designed to simplify the organization and
            participation of tournaments for any type of game or sport. Whether
            it's football, cricket, running, or other competitive events,
            MatchUp provides a centralized platform where committees can manage
            tournaments, and players or teams can participate seamlessly.
          </p>
        </div>

        {/* Contact Section */}
        <div className="max-w-sm">
          <div className="text-xl md:text-2xl font-medium mb-5">Contact</div>
          <div className="flex items-start gap-3 mb-4">
            <Navigation className="text-gray-300 mt-1" />
            <p className="text-gray-300 text-sm">
              Kamakya, Maligoan, Guwahati, Assam, 7002020
            </p>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <TabletSmartphone className="text-gray-300 mt-1" />
            <p className="text-gray-300 text-sm">Phone: +91 2839 2390 12</p>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-gray-300 mt-1" />
            <p className="text-gray-300 text-sm">Email: xyz2001@gmail.com</p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="max-w-sm">
          <div className="text-xl md:text-2xl font-medium mb-5">Services</div>
          <div className="flex flex-col space-y-2 text-sm text-gray-300">
            <span>Headphones</span>
            <span>Smart Watches</span>
            <span>Bluetooth Speakers</span>
            <span>Wireless Earbuds</span>
            <span>Home Theatre</span>
            <span>Projectors</span>
          </div>
        </div>

        {/* Pages Section */}
        <div className="max-w-sm">
          <div className="text-xl fmd:text-2xl font-medium mb-5">Pages</div>
          <div className="flex flex-col space-y-2 text-sm text-gray-300">
            <Link href='/' className="hover:text-gray-50">Home</Link>
            <Link href='/about' className="hover:text-gray-50" >About</Link>
            <Link href='/policy' className="hover:text-gray-50">Privacy Policy</Link>
            <Link href='/terms' className="hover:text-gray-50">Terms & Conditions</Link>
            <Link href='/contact' className="hover:text-gray-50">Contact Us</Link>
           
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 w-full">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-300 text-center sm:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            delectus.
          </p>
          <Image
            src={Payment}
            alt="Payment Methods"
            className="w-40 mt-4 sm:mt-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
