
import CreateParcel from "@/pages/Sender/CreateParcel";
import type { IRouteItems } from "@/utils/generateRoutes";
import { lazy } from "react";
lazy(() => import("@/pages/Admin/Users"));
export const senderSidebarItems: IRouteItems[] = [
  {
    title: "Parcel Management",
    url: "/dashboard/sender",
    items: [
      {
        title: "Send a Parcel",
        url: "create-parcel",
        component: CreateParcel,
      },
    ],
  },
];

