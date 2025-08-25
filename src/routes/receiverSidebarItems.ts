import Parcels from "@/pages/Parcels";
import Users from "@/pages/Users";
import type { IRouteItems } from "@/utils/generateRoutes";

export const receiverSidebarItems: IRouteItems[] = [
  {
    title: "Dashboard",
    url: "/dashboard/receiver",
    items: [
      {
        title: "Upcoming Parcels",
        url: "upcoming-parcels",
        component: Users,
      },
      {
        title: "Received Parcels",
        url: "received-parcels",
        component: Parcels,
      },
    ],
  },
];
