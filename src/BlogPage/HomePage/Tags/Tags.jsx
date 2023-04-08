import React from "react";
import './Tags.css'

const Tags = ({ tag }) => {
  return (
    <div className="mb-tags">
      <p className="mb-tags-p">{tag}</p>
    </div>
  );
};

export default Tags;
