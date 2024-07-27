import React from "react";
import restarent from "../assets/rest.png";
import hotel from '../assets/hotel.png'
import mad from '../assets/mad.png'
import auto from '../assets/auto.png'
import destination from '../assets/destination.png'

function Card() {
  return (
    <>
      <div class="card  mt-5" style={{ width: "14rem", textAlign: "center" , backgroundColor: "whitesmoke",}} >
        <img
          src={restarent}
          class="card-img-top m-auto"
          alt="..."
          style={{ height: "90px", width: "90px" ,borderRadius:"20px",}}
        />
        <div class="card-body">
          <h5 class="card-title">Restaurant</h5>
          <p class="card-text">150 listings</p>
        </div>
      </div>
       

      <div class="card mt-5" style={{ width: "14rem", textAlign: "center" , backgroundColor: "whitesmoke"}}>
        <img
          src={destination}
          class="card-img-top m-auto"
          alt="..."
          style={{ height: "90px", width: "90px" }}
        />
        <div class="card-body">
          <h5 class="card-title">Destination</h5>
          <p class="card-text">239 listings</p>
        </div>
      </div>
      <div class="card mt-5" style={{ width: "14rem", textAlign: "center" , backgroundColor: "whitesmoke"}}>
        <img
          src={mad}
          class="card-img-top m-auto"
          alt="..."
          style={{ height: "90px", width: "90px" }}
        />
        <div class="card-body">
          <h5 class="card-title">Health-care</h5>
          <p class="card-text">200 listings</p>
        </div>
      </div>
      <div class="card mt-5" style={{ width: "14rem", textAlign: "center", backgroundColor: "whitesmoke" }}>
        <img
          src={hotel}
          class="card-img-top m-auto"
          alt="..."
          style={{ height: "90px", width: "90px" }}
        />
        <div class="card-body">
          <h5 class="card-title">Hotel</h5>
          <p class="card-text">185 listings</p>
        </div>
      </div>
      <div class="card mt-5" style={{ width: "14rem", textAlign: "center" , backgroundColor: "whitesmoke"}}>
        <img
          src={auto}
          class="card-img-top m-auto"
          alt="..."
          style={{ height: "90px", width: "90px" }}
        />
        <div class="card-body">
          <h5 class="card-title">Auto-mation</h5>
          <p class="card-text">150 listings</p>
        </div>
      </div>
    </>
  );
}

export default Card;
