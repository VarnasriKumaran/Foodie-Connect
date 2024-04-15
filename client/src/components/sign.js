import React from "react";
import foodimg1 from "../assests/food1.jpeg";
import foodimg3 from "../assests/food3.jpeg";
import foodimg4 from "../assests/food3.jpeg";
import './sign.css';
export default function Sign() {
  return (
  <div>
    <h1> Our Significant Dishes <br></br></h1>
    <img src={foodimg1}></img>
    <img src={foodimg3}></img>
    <img src={foodimg4}></img>
  </div>
  );
}
