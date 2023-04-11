import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import LeftSideFeed from "../RightSideFeed";
import "./ArticleView.css";
import SkeletonArticleView from "./SkeletonArticleView";

const url = "https://server-gr8.vercel.app/api/blogs";

const ArticleView = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);

  async function getArticle() {
    try {
      const data1 = await axios.get(`${url}/${id}`);
      setData({ ...data1.data.blog });
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <div className="mb-l">
        <div className="articleview">
          {loader ? <SkeletonArticleView /> : <></>}
          <h1>{data.title}</h1>
          <img src={data.img} alt="vivek" />
          {<td dangerouslySetInnerHTML={{ __html: data.content }} />}
        </div>
      </div>
      <div className="mb-r" style={{ top: "-110%" }}>
        <div className="mb-r-author">
          <img src="../../../assests/BlogPage/Profile.png" alt="author" />
          <h2>Vivek Parashar</h2>
          <p>965 followers</p>
          <h4>
            Full Stack Web Developer | Enterpenour | Competitive programmer
          </h4>
        </div>
        <LeftSideFeed />
      </div>
    </>
  );
};

export default ArticleView;
