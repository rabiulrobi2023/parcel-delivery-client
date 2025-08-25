import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "./ui/logo";
import { Link } from "react-router";
import { selectNavMenu } from "@/utils/selectNavMenu";
import { useGetMeQuery } from "@/redux/features/auth/auth.api";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: user } = useGetMeQuery(undefined);
  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: selectNavMenu(user?.data?.role),
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader className="px-[16px]">
        <Logo></Logo>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
