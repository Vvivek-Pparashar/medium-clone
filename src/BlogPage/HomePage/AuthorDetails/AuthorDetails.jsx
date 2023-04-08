import React from "react";
import "./AuthorDetails.css"

const AuthorDetails = ({ img, name, Date }) => {
  return (
    <div className="mb-author">
      <img className="mb-author-img" src={img} alt="profile" />
      <p>{name}</p>
      <p>{Date}</p>
    </div>
  );
};

export default AuthorDetails;
