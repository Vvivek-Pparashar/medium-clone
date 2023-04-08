import React from "react";
import { Link } from "react-router-dom";
import HotTopic from "./HomePage/HotTopic/HotTopic";
import Tags from "./HomePage/Tags/Tags";

const LeftSideFeed = () => {
  return (
    <>
      <div className="mb-r-ht">
        <h5 className="mb-r-ht-head">Hot Topics :</h5>
        <div className="mb-r-ht-content">
          <HotTopic />
          <HotTopic />
          <HotTopic />
          <HotTopic />
        </div>
        <a href="/">See full list</a>
      </div>
      <div className="mb-r-c">
        <div className="mb-r-box">
          <h6 className="mb-r-box-h6">writing on starvest</h6>
          <ul className="mb-r-box-ul">
            <li>Be specific</li>
            <li>Spread Knowledge</li>
            <li>Be Helpful & have fun</li>
          </ul>
          <Link to={"/write"}>
            <button className="mb-r-box-button" style={{cursor:"pointer"}}>Start Writing</button>
          </Link>
        </div>

        <div className="mb-r-rec">
          <h5 className="mb-r-rec-head">Recommended :</h5>
          <div className="mb-r-rec-option">
            <Tags tag={"Startup"} />
            <Tags tag={"MVP"} />
            <Tags tag={"Market"} />
            <Tags tag={"Incubator"} />
            <Tags tag={"Funding"} />
            <Tags tag={"IPO"} />
            <Tags tag={"Growth"} />
            <Tags tag={"Vivekisgr8"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideFeed;
