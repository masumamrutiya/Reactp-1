import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./componet/Navbar";
import Container from "./componet/Container";
import Card from "./componet/Card";
import Slider from "./componet/slider";
import Service from "./componet/service";
import Works from "./componet/Works";
import Explore from "./componet/Explore";
import Counter from "./componet/Counter";
import Contact from "./componet/contact";


function App() {
  return (
    <>
      <Navbar />
  

    <Slider/>
    <Service/>
    <Container/>
    <Works/>
    <Explore/>
    <Counter/>
    <Contact/>
  

    </>
  );
}

export default App;
