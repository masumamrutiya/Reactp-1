import React from "react";
import counter from "../assets/counter-banner.jpg";

function Counter() {
  return (
    <>
      <div className="container position-relative">
        <img src={counter} alt="" className="w-100" />
        <div
          className="row text-center position-absolute justify-content-between"
          style={{ top: "20%" }}
        >
          <div className="col-3 p-5">
            <h1>90K+</h1>
            <h4>Listings</h4>

          </div>
          <div className="col-3 p-5">
            <h1>40K +</h1>
            <h4>Listing Categories</h4>
          </div>
          <div className="col-3 p-5">
            <h1>65K+</h1>
            <h4>Visitors</h4>

          </div>
          <div className="col-3 p-5">
            <h1>50K+</h1>
            <h4>Happy Clients</h4>

          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
