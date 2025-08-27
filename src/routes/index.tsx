import DashboardLayout from "@/layout/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { senderSidebarItems } from "./senderSidebarItems";

import { superAdminSidebarItems } from "./superAdminSidebarItems ";
import checkAuth from "@/utils/checkAuth";
import About from "@/pages/About";
import { Role } from "@/constants/role";
import Unauthorized from "@/pages/Unauthorized";
import { receiverSidebarItems } from "./receiverSidebarItems";

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
    path: "/about",
    Component: About,
  },
  {
    path: "/unauthorized",
    Component: Unauthorized,
  },

  {
    Component: checkAuth(DashboardLayout, Role.superAdmin),
    path: superAdminRoutes.path,
    children: superAdminRoutes.children,
  },
  {
    Component: checkAuth(DashboardLayout, Role.admin),
    path: adminRoutes.path,
    children: adminRoutes.children,
  },
  {
    Component: checkAuth(DashboardLayout, Role.sender),
    path: senderRoutes.path,
    children: [
      { index: true, element: <Navigate to="/dashboard/sender/analytics" /> },
      ...senderRoutes.children,
    ],
  },
  {
    Component: checkAuth(DashboardLayout, Role.receiver),
    path: receiverRoutes.path,
    children: receiverRoutes.children,
  },
]);

export default router;
