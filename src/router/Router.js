import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Layout from "../navigation/Layout/Layout";
import About from "../views/about/form/About";
import Login from "../views/account/form/Login";
import Register from "../views/account/form/Register";
import Contact from "../views/contact/form/Contact";
import Error from "../views/error/form/Error";
import Home from "../views/home/form/Home";
import Project from "../views/project/list";

const Router = () => {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        // {
        //   path: "/product",
        //   element: <Product />,
        // },
        // {
        //   path: "/customer",
        //   element: <Customer />,
        // },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        { path: "*", element: <Error /> },
      ],
    },
  ];

  // // The useRoutes() hook allows you to define your routes as JavaScript objects
  // // instead of <Routes> and <Route> elements. This is really just a style
  // // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes);
  return <div>{element}</div>;
};

export default Router;
