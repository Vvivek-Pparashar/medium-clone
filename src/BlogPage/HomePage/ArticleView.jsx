import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import LeftSideFeed from "../RightSideFeed";
const url = "http://localhost:3002/api/blogs";

async function getArticle(setData, id) {
  try {
    const data1 = await axios.get(`${url}/${id}`);
    setData({ ...data1.data.blog });
  } catch (error) {
    console.log(error);
  }
}

const ArticleView = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getArticle(setData, id);
  }, []);

  return (
    <>
      <div className="mb-l">
        <div
          className="articleview"
          style={{ width: "100%", padding: "20px 0" }}
        >
          <h1>{data.title}</h1>
          <img src={data.img} alt="vivek" style={{height:"400px", width:"100%"}}/>
          {<td dangerouslySetInnerHTML={{ __html: data.content }} />}
        </div>
      </div>
      <div className="mb-r" style={{top:"-110%"}}>
        <div className="mb-r-author">
          <img src="../../../assests/BlogPage/Profile.png" alt="author" />
          <h2>Vivek Parashar</h2>
          <p>965 followers</p>
          <h4>Full Stack Web Developer | Enterpenour | Competitive programmer</h4>
        </div>
        <LeftSideFeed />
      </div>
    </>
  );
};

export default ArticleView;
