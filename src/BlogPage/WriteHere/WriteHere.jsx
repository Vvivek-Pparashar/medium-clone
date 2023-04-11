import React, { useState } from "react";
import TextEditor from "./TextEditor/TextEditor";
import { Link } from "react-router-dom";
import "./WriteHere.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import SkeletonWriteHere from "./SkeletonWriteHere";

const url = "http://localhost:3002/api/blogs";

const WriteHere = () => {
  const [data, setData] = useState({ title: "", content: "", img: "" });
  const [preview, setPreview] = useState(false);
  const [loader, setLoader] = useState(true);

  const postArticle = () => {
    if (!loader) {
      if (data.title <= 5) {
        alert("Heading Should Be More Than 5 Words");
      } else if (data.img <= 10) {
        alert("Insert Valid Image URL");
      } else if (data.content <= 1000) {
        alert(
          `content Should Be More Than 1000 Words, write ${
            1000 - data.content
          } more character to validate`
        );
      } else {
        axios({
          method: "post",
          url: url,
          data: {
            title: data.title,
            content: data.content,
            feed: "Education entails acquiring knowledge to have a greater understanding of the various disciplines that will be used in our everyday lives.",
            img: data.img,
          },
        });
      }
    }
  };

  const handleOpen = (e) => {
    if (!loader) {
      if (data.title <= 5) {
        alert("Heading Should Be More Than 5 Words");
      } else if (data.img <= 10) {
        alert("Insert Valid Image URL");
      } else if (data.content <= 1000) {
        alert(
          `content Should Be More Than 1000 Words, write ${
            1000 - data.content
          } more character to validate`
        );
      } else {
        setPreview(true);
      }
    }
  };

  const handleClose = () => {
    setPreview(false);
  };
  const handleLoader = () => {
    setLoader(false);
  };

  console.log(data);
  return (
    <div className={`wh`}>
      {/* Nav Bar for write page */}
      <nav>
        <Link to={"/"}>
          <img src="../../../assests/landingPage/darkLogo.png" alt="logo" />
        </Link>
        <div className="wh-n-b">
          <button onClick={handleOpen}>Preview</button>
          <button onClick={postArticle}>Publish</button>
        </div>
      </nav>

      {/* Preview page for preview the article, active when clicked on preview button */}
      {/* Close when clicked on close button and X button in preview page */}

      <div className={`preview ${preview ? "active" : ""}`}>
        {/* To close the preview page */}
        <CloseIcon className="closeButton" onClick={handleClose} />

        {/* Preview Page Data */}
        <h1>{data.title}</h1>
        <img src={data.img} alt={"headerImg"} />
        {<td dangerouslySetInnerHTML={{ __html: data.content }} />}

        {/* To close the preview page */}
        <button onClick={handleClose}>close</button>
      </div>

      <div className={`wh-c ${preview ? "active" : ""}`}>
        {/* Skeleton/ preview of data until data is loaded */}
        {loader ? <SkeletonWriteHere /> : <></>}

        {/* Main Write page with editor */}
        <div className={`content ${loader ? "loading" : ""}`}>
          {/* Note for publishers */}
          <p>
            <b>Note :</b>Your article will be published when our algorithm find
            it helpful for enterpenours
          </p>
          {/* Form for all content of article */}
          <form>
            {/* Input the title of  */}
            <h1>Title</h1>
            <input
              value={data.title}
              placeholder={"title"}
              onChange={(e) => {
                return setData({ ...data, title: e.target.value });
              }}
              required
              maxLength={"90"}
            />

            {/* To input image url */}
            <h1>Image url</h1>
            <input
              type={"url"}
              value={data.img}
              onChange={(e) => setData({ ...data, img: e.target.value })}
              placeholder={"Image URL"}
            ></input>
          </form>

          {/* Text editor */}
          <h1>Content</h1>
          <TextEditor
            data={data}
            setData={setData}
            handleLoader={handleLoader}
          />
        </div>
      </div>
    </div>
  );
};

export default WriteHere;
