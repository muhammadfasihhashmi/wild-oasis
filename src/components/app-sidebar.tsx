import * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  // SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Building2,
  CalendarDays,
  Home,
  Settings,
  User2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";

const data = {
  user: {
    name: "wild oasis",
    email: "oasis@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Bookings",
      url: "/bookings",
      icon: CalendarDays,
    },
    {
      title: "Cabins",
      url: "/cabins",
      icon: Building2,
    },
    {
      title: "Users",
      url: "/users",
      icon: User2Icon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="ml-8">
              <Link to={"/"}>
                <img src="img/logo-light.png" alt="logo" className="h-22 " />
              </Link>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

{
  /* <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
  <a href="#">
    <img src="img\logo-light.png" alt="logo" className=" h-20" />

    <span className="text-base font-semibold">The wild Oasis</span>
  </a>
</SidebarMenuButton>; */
}
