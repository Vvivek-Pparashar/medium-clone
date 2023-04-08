import React from "react";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import './HotTopic.css'

const HotTopic = () => {
  return (
    <div className="mb-topics">
      <AuthorDetails
        img={"../../../../../assests/BlogPage/Profile.png"}
        name={"Vivek Parashar"}
        Date={"21 March, 2023"}
      />
      <h6 className="mb-topics-head">
        5 common mistakes by first time startup owner and how to avoid them
      </h6>
    </div>
  );
};

export default HotTopic;
