import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import { supportedLngs, fallbackLng } from "../i18n";

export const router = createBrowserRouter([
  // редирект с корня на /en (или fallbackLng)
  { path: "/", element: <Navigate to={`/${fallbackLng}`} replace /> },

  // язык — часть URL: /en, /de, дальше любые сабстраницы
  {
    path: "/:lng",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      // примеры доп.секций
      // { path: "about", element: <About /> },
      // { path: "features", element: <Features /> },
    ]
  },

  // если кто-то ввёл неподдерживаемый язык — в fallback
  {
    path: "/:lng/*",
    element: <Navigate to={`/${fallbackLng}`} replace />
  }
]);
