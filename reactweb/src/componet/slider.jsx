import React from "react";

import sthree from "../assets/banner.jpg";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner position-relative">
          <div className="carousel-item active">
            <img
              src={sthree}
              className="d-block w-100 "
              alt="..."
              style={{ height: "92vh"}}
              
            />
          </div>

          {/* <div className="carousel-item">
      <img src="" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="" className="d-block w-100" alt="..."/>
    </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="text position-absolute text-white text-center" style={{top:"50%",paddingLeft:"23%",}}>

        <h1 style={{fontSize:"48px"}}>BEST PLACE TO FIND AND EXPLORE <br />
        THAT ALL YOU NEED.</h1>
        
        <h5 style={{fontSize:"20px"}}>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click...
        </h5>
      </div>
    </>
  );
}

export default Slider;
