import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Games from "./Games";
import ErrorPage from "./ErrorPage";
import { SidebarProvider } from "./SidebarContext";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "games",
      element: <Games />,
    },
  ]);

  return (
    <SidebarProvider> {/* Provide Sidebar context */}
      <RouterProvider router={router} />
    </SidebarProvider>
  );
};

export default Router;