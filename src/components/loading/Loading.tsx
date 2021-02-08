import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Loading.style.scss";
function Loading() {
  return (
    <div className="loadingContainer">
      <div className="loadingContainer loadingContainer__innerDiv">
        <SkeletonTheme color='#fd9a7e' highlightColor='#fcb500'>
          <p>
            <Skeleton count={3} width={1000} height={40} />
            
          </p>
        </SkeletonTheme>
      </div>
    </div>
  );
}

export default Loading;
