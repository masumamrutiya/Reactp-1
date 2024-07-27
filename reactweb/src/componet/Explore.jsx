import React from "react";
import eone from "../assets/e1.jpg";
import etwo from "../assets/e2.jpg";
import ethree from "../assets/e3.jpg";
import efour from "../assets/e4.jpg";
import efive from "../assets/e5.jpg";
import esix from "../assets/e6.jpg";

function Explore() {
  return (
    <>
      <div className="container my-5" style={{backgroundColor:"#EDE8F5", height:"1150px" ,borderRadius:"15px"}}>
        <h1 className="text-center pt-5">
          <i>EXPLORE</i>
        </h1>
        <h4 className="text-center">
          Explore New place, food, culture around the world and many more......
        </h4>
        <div className="row justify-content-around m-5 text-center">
          <div className="card" style={{ width: "22rem" }}>
            <img src={eone} className="card-img-top" alt="..." style={{}} />
            <div className="card-body">
              <h5 className="card-title">Tommy Hilfinger Bar</h5>
              <p className="card-text">
              10 Ratings  <br />Form 5$-300$ <br /> Resturent
              </p>
              <button type="button" class="btn btn-outline-secondary">Close Now</button>

            
            </div>
          </div>
          <div className="card" style={{ width: "22rem" }}>
            <img src={etwo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Swim And Dine Resort</h5>
              <p className="card-text">
              8 Ratings <br />Form 50$-300$ <br />Hotel

              </p>
              <button type="button" class="btn btn-outline-secondary">Open Now</button>
              
            </div>
          </div>

          <div className="card" style={{ width: "22rem" }}>
            <img src={ethree} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Europe Tour</h5>
              <p className="card-text">
              15 Ratings <br /> Form 5k$-10k$ <br />Destination
              </p>
              <button type="button" class="btn btn-outline-secondary">Close Now</button>
         
            </div>
          </div>
          <div className="card mt-5" style={{ width: "22rem" }}>
            <img src={efour} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bungalow With Swimming Pool</h5>
              <p className="card-text">
              10 Ratings <br /> Form 10k$-15k$ <br /> Real Estate
              </p>
              <button type="button" class="btn btn-outline-secondary">Open Now</button>

            
            </div>
          </div>
          <div className="card mt-5" style={{ width: "22rem" }}>
            <img src={efive} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Vintage Car Expo</h5>
              <p className="card-text">
              8 Ratings <br /> Form 500$-1200$ <br /> Automotion
              </p>
              <button type="button" class="btn btn-outline-secondary">Close Now</button>

            
            </div>
          </div>
          <div className="card mt-5" style={{ width: "22rem" }}>
            <img src={esix} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Thailand Tour</h5>
              <p className="card-text">
              15 Ratings <br /> Form 5k$-10k$ <br /> Destination
              </p>
              <button type="button" class="btn btn-outline-secondary">Open Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
