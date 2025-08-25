import type { TRole } from "@/interfaces/role.interface";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { receiverSidebarItems } from "@/routes/receiverSidebarItems";
import { senderSidebarItems } from "@/routes/senderSidebarItems";

export const selectNavMenu = (role: TRole) => {
  switch (role) {
    case "superAdmin":
      return [...adminSidebarItems];
    case "admin":
      return [...adminSidebarItems];
    case "sender":
      return [...senderSidebarItems];
    case "receiver":
      return [...receiverSidebarItems];
    default:
      return [];
  }
};
