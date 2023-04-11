// import { get } from "mongoose";
import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Outlet } from "react-router";
import "./HomePage.css";
import { ScrollRestoration } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="mb">
        <NavBar />
        <Outlet />
        <ScrollRestoration />
      </div>
    </>
  );
};

// export {articles};
export default HomePage;
