import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./HomePage.css";
import axios from "axios";
import LeftSideFeed from "../RightSideFeed";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonOutletFeed from "./SkeletonOutletFeed";

const url = "https://server-gr8.vercel.app/api/blogs";

const OutletFeed = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  async function getArticles() {
    try {
      const data1 = await axios.get(url);
      setData(data1.data);
      setLoader(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="mb-l">
        {loader ? (
          <>
            <SkeletonOutletFeed />
            <SkeletonOutletFeed />
            <SkeletonOutletFeed />
          </>
        ) : (
          <></>
        )}

        {data.slice(0).reverse().map((e) => (
          <Card title={e.title} id={e._id} feed={e.feed} img={e.img} />
        ))}
      </div>
      <div className="mb-r">
        <LeftSideFeed />
      </div>
    </>
  );
};

export default OutletFeed;
