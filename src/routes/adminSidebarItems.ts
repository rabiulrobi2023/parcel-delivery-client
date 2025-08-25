import Parcels from "@/pages/Parcels";
import Users from "@/pages/Users";
import type { IRouteItems } from "@/utils/generateRoutes";

export const adminSidebarItems: IRouteItems[] = [
  {
    title: "Dashboard",
    url: "/dashboard/admin",
    items: [
      {
        title: "All Users",
        url: "all-users",
        component: Users,
      },
      {
        title: "All Parcels",
        url: "all-parcels",
        component: Parcels,
      },
    ],
  },
];
