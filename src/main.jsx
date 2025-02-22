import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Provider/AuthProvider.jsx";
import ThemeProvider from "./Provider/ThemeProvider.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
          <Toaster position="top-right" reverseOrder={false} />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
