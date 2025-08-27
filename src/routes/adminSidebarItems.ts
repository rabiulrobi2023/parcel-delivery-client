import Parcels from "@/pages/Parcels";
import Users from "@/pages/Admin/Users";
import type { IRouteItems } from "@/utils/generateRoutes";

export const adminSidebarItems: IRouteItems[] = [
  {
    title: "User Management",
    url: "/dashboard/admin",
    items: [
      {
        title: "Users",
        url: "all-users",
        component: Users,
      },
      {
        title: "Create Admin",
        url: "create-admin",
        component: Parcels,
      },
    ],
  },
  {
    title: "Parcel Management",
    url: "/dashboard/admin",
    items: [
      {
        title: "Users",
        url: "all-users",
        component: Users,
      },
      {
        title: "Create Admin",
        url: "create-admin",
        component: Parcels,
      },
    ],
  },
];
