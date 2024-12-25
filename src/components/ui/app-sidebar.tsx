"use client";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Home,
  Inbox,
  Plus,
  Search,
  Settings,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
// import { DropdownMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

import Image from "next/image";
import logo from "../../assets/logo.png";
import avatar from "../../assets/me.jpg";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { useRouter } from "next/navigation";
// import { cookies } from 'next/headers'
// Menu items.
const items = [
  {
    _id: 1231243434234,
    title: "Pyro Kinesis",
    url: "#",
    icon: Home,
  },
];
const tournament = [
  {
    name: "Cricket",
  },
  {
    name: "Football",
  },
  {
    name: "Hockey",
  },
];

export async function AppSidebar() {
  const router = useRouter();

  const logOut = async () => {
    // const cookieStore = await cookies()
    // const token = cookieStore.delete('token')

    router.replace(`/`);
  };
  return (
    <Sidebar>
      {/* HEADER SECTION  */}
      <SidebarHeader>
        <Link href="/dashboard">
          <div className="flex-shrink-0 flex items-center gap-2 bg-gray-200 py-1 px-2 rounded">
            <Image src={logo} alt="" className="rounded-full w-10 " />
            <h1 className="text-black text-xl font-extrabold">MatchUp</h1>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {/* user create event  */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <Link href="/dashboard/events">Events</Link>
          </SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Plus /> <span className="sr-only">Add Event</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem key={item.title}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href={`/dashboard/event/${item._id}`}>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
            <SidebarMenu className="mt-4 bg-gray-100 rounded-md">
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="bg-blue-500 rounded-full hover:bg-blue-400 text-white ">
                  <Link href="/dashboard/c-tournament">
                    <Plus className="w-5" />
                    <span>Create Event</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* user joined event  */}
        <SidebarGroup>
          <SidebarGroupLabel>
            <Link href="/dashboard/events">Joined Events</Link>
          </SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Plus /> <span className="sr-only">Join event</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem key={item.title}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href={`/dashboard/event/${item._id}`}>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
            <SidebarMenu className="mt-4 bg-gray-100 rounded-md">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="bg-blue-500 rounded-full hover:bg-blue-400 text-white "
                >
                  <Link href="/dashboard/c-tournament">
                    <Plus className="w-5" />
                    <span>Join Event</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* user account (footer section ) */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-12 hover:bg-gray-200 bg-gray-100">
                  <div className="flex gap-1">
                    <Image
                      src={avatar}
                      alt=""
                      className="rounded-full w-10 h-10"
                    />
                    <div className="text-xs">
                      <h6 className="font-semibold text-sm">PJPhukan</h6>
                      <h6>pjphukan@gmail.com</h6>
                    </div>
                  </div>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span onClick={logOut}>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
