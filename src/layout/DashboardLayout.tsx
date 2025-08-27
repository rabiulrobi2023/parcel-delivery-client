import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useLogutUser } from "@/hooks/useLogoutUser";
import { HomeIcon, LogOutIcon } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router";

export default function DashboardLayout() {
  const [expanded, setexpended] = useState(true);
  const handleLogout = useLogutUser();
  return (
    <SidebarProvider>
      <AppSidebar className="" />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6 bg-second justify-between">
          <div className="flex items-center">
            <SidebarTrigger
              onClick={() => setexpended(!expanded)}
              className=" text-gray-100 bg-second hover:bg-transparent hover:text-first "
            />
            <p className=" flex  text-xl md:text-3xl text-first font-bold">
              Delivera
            </p>
          </div>
          <div>
            <NavLink to={"/"}>
              {" "}
              <HomeIcon className="text-first text" width={30} height={30} />
            </NavLink>
          </div>

          <div
            onClick={handleLogout}
            className="flex gap-1 items-center cursor-pointer"
          >
            <LogOutIcon
              size={16}
              className=" text-first  h-5 w-5 font-extrabold"
              aria-hidden="true"
            />
            <span className="text-first font-bold">Logout</span>
          </div>
        </header>
        <div className="flex flex-1 flex-col p-6 bg-sec">
          <Outlet></Outlet>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
