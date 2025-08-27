import Parcels from "@/pages/Parcels";
import Users from "@/pages/Admin/Users";
import type { IRouteItems } from "@/utils/generateRoutes";

export const superAdminSidebarItems: IRouteItems[] = [
  {
    title: "Dashboard",
    url: "/dashboard/superAdmin",
    items: [
      {
        title: "All Users",
        url: "all-users",
        component: Users,
      },
      {
        title: "All Parcels ",
        url: "all-parcels",
        component: Parcels,
      },
      {
        title: "Create Admin",
        url: "create-admin",
        component: Parcels,
      },
    ],
  },
];
