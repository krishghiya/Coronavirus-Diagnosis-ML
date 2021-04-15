import "./form.css";
import React, { useState } from "react";
import cover from "../../assets/cover1.jpg";
import { Form, Modal } from "react-bootstrap";

export default function ({history}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(1);
  if (open) {
    return (
      <div className="formContainer">
        <Modal
          show={open}
          onHide={() => setOpen(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            {index === 1 && (
              <div className="modaldiv">
                <h4>Select Your Gender</h4>
                <div className="modaldivRow">
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Male
                  </button>
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Female
                  </button>
                </div>
                <div className="modalFootRow">
                  <button
                    className="footerButton"
                    onClick={() => setOpen(false)}
                  >
                    Back
                  </button>
                  <button
                    className="footerButton"
                    onClick={() => setIndex(index + 1)}
                  >
                    Next
                  </button>
                </div>
                <div className="modalFooterRow">
                  <span className="modalFooterspanActive">1</span>
                  <span className="modalFooterspan">2</span>
                  <span className="modalFooterspan">3</span>
                  <span className="modalFooterspan">4</span>
                  <span className="modalFooterspan">5</span>
                </div>
              </div>
            )}
            {index === 2 && (
              <div className="modaldiv">
                <h4>What is your day of birth?</h4>
                <div className="modaldivRow">
                  <input type="date" className="inputDate" />
                </div>
                <div className="modalFootRow">
                  <button
                    className="footerButton"
                    onClick={() => setIndex(index - 1)}
                  >
                    Back
                  </button>
                  <button
                    className="footerButton"
                    onClick={() => setIndex(index + 1)}
                  >
                    Next
                  </button>
                </div>
                <div className="modalFooterRow">
                  <span className="modalFooterspan">1</span>
                  <span className="modalFooterspanActive">2</span>
                  <span className="modalFooterspan">3</span>
                  <span className="modalFooterspan">4</span>
                  <span className="modalFooterspan">5</span>
                </div>
              </div>
            )}
            {index === 3 && (
              <div className="modaldiv">
                <h4>Do you smoke?</h4>
                <div className="modaldivRow">
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Yes
                  </button>
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    No
                  </button>
                </div>
                <div className="modalFootRow">
                  <button
                    className="footerButton"
                    onClick={() => setIndex(index - 1)}
                  >
                    Back
                  </button>
                  <button
                    className="footerButton"
                    onClick={() => setIndex(index + 1)}
                  >
                    Next
                  </button>
                </div>
                <div className="modalFooterRow">
                  <span className="modalFooterspan">1</span>
                  <span className="modalFooterspan">2</span>
                  <span className="modalFooterspanActive">3</span>
                  <span className="modalFooterspan">4</span>
                  <span className="modalFooterspan">5</span>
                </div>
              </div>
            )}
            {index === 4 && (
              <div className="modaldiv">
                <h4>Do you have any of these sysmptoms:(Select all that apply)</h4>
                <div className="modaldivRow">
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Fever
                  </button>
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Sore throat
                  </button>
                </div>
                <div className="modaldivRow">
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Cough
                  </button>
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Pneumonia
                  </button>
                </div>
                <div className="modaldivRow">
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Breathing difficulty
                  </button>
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Headache
                  </button>
                </div>
                <div className="modaldivRow">
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Myalgia
                  </button>
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Fatigue
                  </button>
                </div>
                <div className="modalFootRow">
                  <button
                    className="footerButton"
                    onClick={() => setIndex(index - 1)}
                  >
                    Back
                  </button>
                  <button
                    className="footerButton"
                    onClick={() => setIndex(index + 1)}
                  >
                    Next
                  </button>
                </div>
                <div className="modalFooterRow">
                  <span className="modalFooterspan">1</span>
                  <span className="modalFooterspan">2</span>
                  <span className="modalFooterspan">3</span>
                  <span className="modalFooterspanActive">4</span>
                  <span className="modalFooterspan">5</span>
                </div>
              </div>
            )}
            {index === 5 && (
              <div className="modaldiv">
                <h4>Have you ever had or been diagnosed to have:(Select all that apply)</h4>
                <div className="modaldivRow">
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Diabetes
                  </button>
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Hypertension
                  </button>
                </div>
                <div className="modaldivRow">
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Kidney failue
                  </button>
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Asthma
                  </button>
                </div>
                <div className="modaldivRow">
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Cardiovascular
                  </button>
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Obesity
                  </button>
                </div>
                <div className="modaldivRow">
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Immunosuppression
                  </button>
                  <button className="modalDivButton">
                    <Form.Check type="checkbox" />
                    Chronic obstructive pulmonary
                  </button>
                </div>
                <div className="modalFootRow">
                  <button
                    className="footerButton"
                    onClick={() => setIndex(index - 1)}
                  >
                    Back
                  </button>
                  <button
                    className="footerButton"
                    onClick={() => history.push("/result")}
                  >
                    Finish
                  </button>
                </div>
                <div className="modalFooterRow">
                  <span className="modalFooterspan">1</span>
                  <span className="modalFooterspan">2</span>
                  <span className="modalFooterspan">3</span>
                  <span className="modalFooterspan">4</span>
                  <span className="modalFooterspanActive">5</span>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
        <img src={cover} className="cover1" />
      </div>
    );
  } else {
    return (
      <div className="formContainer">
        <div className="formmm">
          <h3 className="formHeading">Welcome</h3>
          <p>
            This tool aims to pre-screen concerned users so they can make an
            informed decision on whether to get tested.
          </p>
          <p>
            This tool uses a model based on assorted medical and population data
            of coronavirus patients in the U.S. collected by various organizations.
            It estimates the probability of infection based on location and reported
            symptoms.
          </p>
          <p>
            This tool is not meant to take the place of consultation with your health
            care provider, to diagnose, or to treat conditions. If you're in an emergency
            medical situation, call 911 or your local emergency number.
          </p>
          <button className="formButton" onClick={() => setOpen(true)}>
            BEGIN
          </button>
        </div>
        <div className="formButtonView">
          <button className="sideButton">Covid-19</button>
          <br />
          <br />
          <button className="sideButton">Statistics</button>
          <br />
          <br />
          <button className="sideButton">QA</button>
        </div>
        <img src={cover} className="cover1" />
      </div>
    );
  }
}
