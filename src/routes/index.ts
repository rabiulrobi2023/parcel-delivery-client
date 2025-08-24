import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";

import { createBrowserRouter } from "react-router";

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
]);

export default router;
