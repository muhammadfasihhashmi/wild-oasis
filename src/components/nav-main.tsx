import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  // SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="mt-5">
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className="">
              <NavLink to={item.url}>
                {({ isActive }) => (
                  <div className="flex items-center gap-3 rounded-md px-3 py-3 text-sm transition-colors hover:bg-zinc-200">
                    {item.icon && (
                      <item.icon
                        className={`w-5 h-5 shrink-0 transition-colors ${
                          isActive ? "text-blue-600" : "text-zinc-500"
                        }`}
                      />
                    )}
                    <span
                      className={`text-zinc-700 text-[1.1rem] ${
                        isActive ? "font-semibold" : ""
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
// {({ isActive }) => (
//   <SidebarMenuButton
//     tooltip={item.title}
//     variant={"default"}
//     size={"lg"}
//     isActive={isActive}
//     className="hover:bg-zinc-200"
//   >
//     {item.icon && <item.icon />}
//     <span>{item.title}</span>
//   </SidebarMenuButton>
// )}
