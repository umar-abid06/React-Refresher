import React from "react";
import Header from "./reactRouterComponents/Header/Header";
import Footer from "./reactRouterComponents/Footer/Footer";
import { Outlet } from "react-router-dom";

//Layout Component
const ReactRouter = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ReactRouter;
