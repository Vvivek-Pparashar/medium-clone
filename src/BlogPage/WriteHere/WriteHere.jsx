import React, { useState } from "react";
import TextEditor from "./TextEditor/TextEditor";
import { Link } from "react-router-dom";
import "./WriteHere.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import SkeletonWriteHere from "./SkeletonWriteHere";
import { sentiment, classify, filter, filterTag } from "../Checker";
import ModelView from "./ModelView";
import { Button, Modal, Space } from "antd";

const url = "http://localhost:3002/api/blogs";

const WriteHere = () => {
  const [data, setData] = useState({ title: "", content: "", img: "" });
  const [preview, setPreview] = useState(false);
  const [loader, setLoader] = useState(true);
  const [open, setOpen] = useState(false);
  const [modelText, setModelText] = useState(1);

  const postArticle = async () => {
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
        console.log("publish clicked");
        const condata = filterTag(data.content);

        console.log(condata);

        setPreview(false);
        setOpen(true);
        setModelText(1);

        const clacont = filter(await classify(condata.slice(0, 420)));
        console.log("1", clacont);
        const claHead = filter(await classify(data.title));
        console.log("2", claHead);
        const senCont = filter(await sentiment(condata.slice(0, 420)));
        console.log("3", senCont);
        const senHead = filter(await sentiment(data.title));
        console.log("4", senHead);

        // setModelText(2);
        // setOpen(false);

        // && (senHead[0] !== "NEG" && senCont[0] !== "NEG"

        console.log(senCont, senHead);

        if (clacont[1] <= 0.75 && claHead[1] <= 0.75) {
          setModelText(3);
        } else if (
          ((senHead[0] === "NEG") && (senHead[1] >= 0.75)) ||
          ((senCont[0] === "NEG") && (senCont[1] >= 0.75))
        ) {
          console.log("vivekisgr888")
          setModelText(3);
        } else {
          axios({
            method: "post",
            url: url,
            data: {
              title: data.title,
              content: data.content,
              feed: condata.slice(0, 200) + "...",
              img: data.img,
            },
          });

          setModelText(2);
        }
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

  const handleCloseModel = () => {
    setOpen(false);
  };

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

      {open ? (
        <ModelView handleCloseModel={handleCloseModel} model={modelText} />
      ) : (
        <></>
      )}
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
            <h3 className="write-head">Title</h3>
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
            <h3 className="write-head">Image url</h3>
            <input
              type={"url"}
              value={data.img}
              onChange={(e) => setData({ ...data, img: e.target.value })}
              placeholder={"Image URL"}
            ></input>
          </form>

          {/* Text editor */}
          <h3 className="write-head">Content</h3>
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
