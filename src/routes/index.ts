import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [],
  },
]);

export default router;
