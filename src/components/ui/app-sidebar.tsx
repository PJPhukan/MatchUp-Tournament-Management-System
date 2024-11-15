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

// Menu items.
const items = [
  {
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
export function AppSidebar() {
  return (
    <Sidebar>
      {/* HEADER SECTION  */}
      <SidebarHeader>
        <Link href="/dashboard/event">
          <div className="flex-shrink-0 flex items-center gap-2 bg-gray-200 py-1 px-2 rounded">
            <Image src={logo} alt="" className="rounded-full w-10 " />
            <h1 className="text-black text-xl font-extrabold">MatchUp</h1>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Events</SidebarGroupLabel>
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
                        <Link href={item.url}>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <Collapsible className="group/collapsible">
                          <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton asChild>
                                <div className="flex justify-between items-center hover:bg-gray-100">
                                  <span>Sports</span>
                                  <span>
                                    <Plus className="w-5" />
                                  </span>
                                </div>
                              </SidebarMenuButton>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                              {tournament.map((item) => {
                                return (
                                  <SidebarMenuSub>
                                    <span>{item.name}</span>
                                    <SidebarMenuSubItem />
                                  </SidebarMenuSub>
                                );
                              })}
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                        <SidebarMenuSubItem />
                      </SidebarMenuSub>
                      <SidebarMenuSub>
                        <Collapsible className="group/collapsible">
                          <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton asChild>
                                <div className="flex justify-between items-center hover:bg-gray-100">
                                  <span>E-Sports</span>
                                  <span className="z-[100]">
                                    <Plus className="w-5" />
                                  </span>
                                </div>
                              </SidebarMenuButton>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                              {tournament.map((item) => {
                                return (
                                  <SidebarMenuSub>
                                    <span className="hover:bg-gray-100">
                                      {item.name}
                                    </span>
                                    <SidebarMenuSubItem />
                                  </SidebarMenuSub>
                                );
                              })}
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                        <SidebarMenuSubItem />
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
            <SidebarMenu className="mt-4 bg-gray-100 rounded-md">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/c-tournament">
                    <Plus className="w-5" />
                    <span>Add Event</span>
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
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
