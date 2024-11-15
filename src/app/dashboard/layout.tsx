import type { Metadata } from "next";
// import AppProvider from "@/context/AppProvider";
import { Inter } from "next/font/google";
// import Navbar from "@/components/Navber";
// import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";
export const metadata: Metadata = {
  title: "MatchUp- Manage your event efficient way",
  description:
    "Manage your event efficient way, including the ability to manage events and events that are not related to the event.", // eslint-disable-line
};

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
