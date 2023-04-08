import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./HomePage.css";
import axios from "axios";
import LeftSideFeed from "../RightSideFeed";

const url = "http://localhost:3002/api/blogs";

async function getArticles(setData) {
  try {
    const data1 = await axios.get(url);
    setData(data1.data);
  } catch (error) {
    console.log(error);
  }
}

const OutletFeed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("logged");
    window.scrollTo(0, 0);
    getArticles(setData);
  }, []);

  return (
    <>
      <div className="mb-l">
        {data.map((e) => (
          <Card title={e.title} id={e._id} feed={e.feed} img={e.img}/>
        ))}
      </div>
      <div className="mb-r">
        <LeftSideFeed />
      </div>
    </>
  );
};

export default OutletFeed;
