import React from "react";
import light from "../assets/light.jpg";
import game from "../assets/game.png";
import place from "../assets/place.png";

function Works() {
  return (
    <>
      <div className="container m-5">
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>
          HOW IT WORKS{" "}
        </h3>
        <p style={{ textAlign: "center" }}>
          lear more about how ouer website work{" "}
        </p>
        <div className="row justify-content-evenly mt-5">
          <div classname="card" style={{ width: " 18rem", backgroundColor: "whitesmoke", borderRadius: "15px" }}>
            <img
              src={light}
              classname="card-img-top "
              alt="..."
              style={{ width: "7rem", marginLeft: "25%" , borderRadius: "50%", marginTop:"20px"}}
            />
            <div classname="card-body">
              <h5 classname="card-title" style={{ textAlign: "center" }}>
                chosse what to do
              </h5>
              <p classname="card-text" style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore eaque optio aspernatur quasi quas voluptate facilis
                nihil ipsa magni perspiciatis.
              </p>

              <button
                type="button"
                class="btn btn-outline-primary "
                style={{ textAlign: "center", marginLeft: "25%",marginLeft: "33%" }}
              >
                Readmore
              </button>
            </div>
          </div>

          <div classname="card" style={{ width: " 18rem" ,backgroundColor: "whitesmoke", borderRadius: "15px"}}>
            <img
              src={game}
              classname="card-img-top "
              alt="..."
              style={{ width: "8rem", marginLeft: "25%" ,borderRadius: "20%",marginTop:"20px"}}
            />
            <div classname="card-body">
              <h5 classname="card-title" style={{ textAlign: "center" }}>
                find what you want
              </h5>
              <p classname="card-text" style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore eaque optio aspernatur quasi quas voluptate facilis
                nihil ipsa magni perspiciatis.
              </p>

              <button
                type="button"
                class="btn btn-outline-primary "
                style={{ textAlign: "center", marginLeft: "25%" }}
              >
                Readmore
              </button>
            </div>
          </div>

          <div classname="card" style={{ width: " 18rem",backgroundColor: "whitesmoke", borderRadius: "15px" }}>
            <img
              src={place}
              classname="card-img-top "
              alt="..."
              style={{ width: "8rem", marginLeft: "25%",borderRadius: "50%",marginTop:"20px" }}
            />
            <div classname="card-body">
              <h5 classname="card-title" style={{ textAlign: "center" }}>
                explore amazing place
              </h5>
              <p classname="card-textn" style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore eaque optio aspernatur quasi quas voluptate facilis
                nihil ipsa magni perspiciatis.
              </p>

              <button
                type="button"
                class="btn btn-outline-primary "
                style={{ textAlign: "center", marginLeft: "33%" ,marginLeft: "33%"}}
              >
                Readmore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
