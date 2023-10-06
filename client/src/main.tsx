// react deps
import React from "react";
import ReactDOM from "react-dom/client";
// external deps
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// imported pages
import App from "./App";
import Blogs from "./pages/BlogsPage/Blogs";
// styles
import "./styles/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App className="App" />,
    children: [
      {
        path: "blog",
        element: <Blogs className="main_content" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
