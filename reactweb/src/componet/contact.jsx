import React from "react";

function Contact() {
  return (
    <>
    <div className="container my-5" style={{height:"300px",width:"100%",backgroundColor:"black"}}>
      <h2 style={{ textAlign: "center", color:"white",paddingTop:"30px"}}>
       <i> DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?</i>
      </h2>
      <h5 style={{ textAlign: "center", marginTop: "70px",color:"white"  }}>
        Listrace offer you to list your business with us and we very much able
        to promote your Business.....
      </h5>

      <form className="row justify-content-center">
      
        <div className="col-auto" >
          <label for="Email2" className="visually-hidden">
            Password
          </label>
          <input
            type="Email"
            className="form-control"
            id="inputPassword2"
            placeholder="Enter Your Email Here"
            style={{ marginTop: "50px" }}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3" 
          style={{ marginTop: "50px" }}>
         Creat Account
          </button>
        </div>
      </form>
      </div>
    </>
  );
}

export default Contact;
