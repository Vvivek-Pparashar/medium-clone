import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonArticleView = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Skeleton width="100%" height={100} />
      <Skeleton width="100%" height={400} />
      <Skeleton width="100%" height={700} />
    </div>
  );
};

export default SkeletonArticleView;
