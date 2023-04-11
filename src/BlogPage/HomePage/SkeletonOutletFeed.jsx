import React from "react";
import "./Card/Card.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonOutletFeed = () => {
  return (
    <div className="mb-card" key={98999}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Skeleton width={40} height={40} circle />
        <Skeleton width={90} height={10} />
        <Skeleton width={90} height={10} />
      </div>
      <div className="mb-card-c">
        <div
          className="mb-card-l"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton style={{ width: "100%" }} height={70} />
          <Skeleton style={{ width: "100%" }} height={70} />

          <div className="mb-card-l-bottom">
            <Skeleton width={90} height={10} />
            <Skeleton width={90} height={10} />
            <Skeleton width={90} height={10} />
          </div>
        </div>
        <div className="mb-card-r">
          <Skeleton className="mb-card-r-img" />
          <Skeleton width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonOutletFeed;
