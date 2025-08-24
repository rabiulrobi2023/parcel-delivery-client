import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router";
import router from "./routes/index.ts";
import { ThemeProvider } from "./providers/theme.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="light" >
        <RouterProvider router={router} />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>
);
