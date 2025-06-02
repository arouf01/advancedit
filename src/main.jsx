import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Services from "./Components/Services.jsx";
import Faq from "./Components/Faq.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Root from "./Components/Root.jsx";
import BlogDetails from "./Components/BlogDetails.jsx";
import BlogList from "./Components/BlogList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <BlogList />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
