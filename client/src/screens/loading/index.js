import React from "react";
import cover from "../../assets/cover1.jpg";

export default function Loading () {

  return (
    <div className="formContainer">
      <div className="formButtonView">
        <h1 style={{marginLeft:"2.5em", color: "white"}}>Loading... </h1>
        <br />
        <br />
      </div>
      <img src={cover} className="cover1" />
    </div>
  );
}