import React, { useState } from "react";
import cover from "../../assets/cover1.jpg";
import { Form, Modal } from "react-bootstrap";

export default function ({history}) {
  return (
    <div className="formContainer">
      <div className="formButtonView">
        <h1 style={{marginLeft:"2.5em", color: "white"}}>Completed</h1>
        <br />
        <br />
        <button className="sideButton" onClick={() => history.push("/")}>Back To Home</button>
      </div>
      <img src={cover} className="cover1" />
    </div>
  );
}
