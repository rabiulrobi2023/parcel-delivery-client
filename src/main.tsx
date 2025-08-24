import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router";
import router from "./routes/index.ts";
import { ThemeProvider } from "./providers/theme.provider.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="light">
        <RouterProvider router={router} />
        <Toaster richColors position="top-center" duration={3000} className="w-[100px]"  />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>
);
