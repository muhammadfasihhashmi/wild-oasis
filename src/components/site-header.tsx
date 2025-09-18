import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [mode, setMode] = useState(false);
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <img src="img/default-user.jpg" alt="user" className="h-8 " />
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setMode(!mode)}
            className="cursor-pointer"
          >
            {mode ? (
              <Moon className="size-6 " stroke="#4f46e5" />
            ) : (
              <Sun className="size-6 " stroke="#4f46e5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
