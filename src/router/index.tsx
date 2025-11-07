import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import { supportedLngs, fallbackLng } from "../i18n";

export const router = createBrowserRouter([
  
  { path: "/", element: <Navigate to={`/${fallbackLng}`} replace /> },
  {
    path: "/:lng",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      
    ]
  },
  {
    path: "/:lng/*",
    element: <Navigate to={`/${fallbackLng}`} replace />
  }
]);
