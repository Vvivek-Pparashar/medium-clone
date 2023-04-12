import React from "react";
import { Link } from "react-router-dom";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import Tags from "../Tags/Tags";
import "./Card.css";

const Card = ({ title, id, feed, img }) => {
  feed = (feed.length >= 200 ? feed.slice(0, 100) : feed) + "...";

  return (
    <div className="mb-card" key={id}>
      <AuthorDetails
        img={"../../../../../assests/BlogPage/Profile.png"}
        name={"Vivek Parashar"}
        Date={"21 March, 2023"}
      />
      <div className="mb-card-c">
        <div className="mb-card-l">
          <Link className="router" to={`/${id}`}>
            <h5 className="mb-card-l-h3" style={{ textDecoration: "none" }}>
              {title}
            </h5>
          </Link>
          <Link className="router" to={`/${id}`}>
            <p className="mb-card-l-p">{feed}</p>
          </Link>
          <div className="mb-card-l-bottom">
            <Tags tag={"Startup"} />
            <p>6 min read</p>
            <p className="selectedforyou">•</p>
            <p className="selectedforyou">selected for you</p>
          </div>
        </div>
        <div className="mb-card-r">
        <Link className="router" to={`/${id}`}>
          <img className="mb-card-r-img" src={img} alt="blog_image" />
          </Link>
        </div>
      </div>
    </div>

    // <div>
    //   <></>
    // </div>
  );
};

export default Card;
