import React from "react";
import "./nofound.css";

export const NoFound = () => {
  return (
    <>
      <div className="container_nofound">
        <div>
          <h1>404 Not Found</h1>
          <h2>The page you are looking for is currently unavailable.</h2>
          <h4>
            The server may be down or there could be a network error. Please try
            again later.
          </h4>
        </div>
      </div>
    </>
  );
};
