// import { get } from "mongoose";
import React, { useEffect, useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Outlet } from "react-router";
import "./HomePage.css";

// import axios from "axios";

// const url = "http://localhost:3002/api/blogs";

// let articles = [];
// async function getArticles(setData) {
//   try {
//     const data1 = await axios.get(url);
//     articles = data1.data;
//     console.log(articles)
//     setData(data1.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

const HomePage = () => {
//   let [data, setData] = useState([]);

//   useEffect(() => {
//     console.log("logged");
//     window.scrollTo(0, 0);
//     getArticles(setData);
//   }, []);

  return (
    <>
      <div className="mb">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

// export {articles}; 
export default HomePage;
