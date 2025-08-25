import Parcels from "@/pages/Parcels";
import Users from "@/pages/Users";
import type { IRouteItems } from "@/utils/generateRoutes";

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
    ],
  },
];
