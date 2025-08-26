import Parcels from "@/pages/Parcels";
import type { IRouteItems } from "@/utils/generateRoutes";
import { lazy } from "react";
const Users = lazy(() => import("@/pages/Users"));
export const senderSidebarItems: IRouteItems[] = [
  {
    title: "Dashboard",
    url: "/dashboard/sender",
    items: [
      {
        title: "Create Parcel",
        url: "create-parcel",
        component: Users,
      },
      {
        title: "Update Parcel",
        url: "update-parcel",
        component: Parcels,
      },
      {
        title: "Analytics",
        url: "analytics",
        component: Parcels,
      },
    ],
  },
];
