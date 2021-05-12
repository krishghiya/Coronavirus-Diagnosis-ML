import React from "react";
import cover from "../../assets/cover1.jpg";

export default function Result ({history}) {

  var result = history.location.state

  return (
    <div className="formContainer">
      <div className="formButtonView">
        <h1 style={{marginLeft:"2.5em", color: "white"}}>Prediction: {result[1][0].toUpperCase() + 
                                                                      result[1].substring(1)}</h1>
        <h1 style={{marginLeft:"2.5em", color: "white"}}>Confidence: {result[0] * 100}%</h1>
        <br />
        <br />
        <button className="sideButton" onClick={() => history.push("/")}>Home</button>
      </div>
      <img src={cover} className="cover1" />
    </div>
  );
}