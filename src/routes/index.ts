import DashboardLayout from "@/layout/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { senderSidebarItems } from "./senderSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";
import { superAdminSidebarItems } from "./superAdminSidebarItems copy";

const superAdminRoutes = generateRoutes(superAdminSidebarItems);
const adminRoutes = generateRoutes(adminSidebarItems);
const senderRoutes = generateRoutes(senderSidebarItems);
const receiverRoutes = generateRoutes(receiverSidebarItems);
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [],
  },

  {
    path: "/login",
    Component: Login,
  },

  {
    path: "/registration",
    Component: Registration,
  },

  {
    Component: DashboardLayout,
    path: superAdminRoutes.path,
    children: superAdminRoutes.children,
  },
  {
    Component: DashboardLayout,
    path: adminRoutes.path,
    children: adminRoutes.children,
  },
  {
    Component: DashboardLayout,
    path: senderRoutes.path,
    children: senderRoutes.children,
  },
  {
    Component: DashboardLayout,
    path: receiverRoutes.path,
    children: receiverRoutes.children,
  },
]);

export default router;
