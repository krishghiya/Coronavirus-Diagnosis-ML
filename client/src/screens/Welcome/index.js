import "./form.css";
import React, { useState } from "react";
import cover from "../../assets/cover1.jpg";
import { Form, Modal } from "react-bootstrap";

export default function () {
  const [age, setAge] = useState();
  const [index, setIndex] = useState(1);
  const [open, setOpen] = useState(true);
  const [gender, setGender] = useState("");
  const [smoker, setSmoker] = useState("");
  const [diseases, setDiseases] = useState([]);
  const [symptoms, setSymptoms] = useState([]);

  const onChangeSymptoms = (txt) => {
    let check = symptoms.includes(txt);
    if (check) {
      let fil = symptoms.filter((e) => e !== txt);
      setSymptoms(fil);
    } else setSymptoms((e) => [...e, txt]);
  };

  const onChangeDiseases = (txt) => {
    let check = diseases.includes(txt);
    if (check) {
      let fil = diseases.filter((e) => e !== txt);
      setDiseases(fil);
    } else setDiseases((e) => [...e, txt]);
  };

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
                <div className="modalFootRow">
                  <button
                    className="modalDivButton"
                    onClick={() => setGender("Male")}
                  >
                    <Form.Check
                      onClick={() => setGender("Male")}
                      checked={gender === "Male" ? true : false}
                      type="checkbox"
                    />
                    Male
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => setGender("Female")}
                  >
                    <Form.Check
                      onClick={() => setGender("Female")}
                      checked={gender === "Female" ? true : false}
                      type="checkbox"
                    />
                    Female
                  </button>
                </div>
                <div className="modalFootRow">
                  <button className="footerButton" disabled>
                    Back
                  </button>
                  <button
                    className="footerButton"
                    onClick={() => {
                      if (gender) setIndex(index + 1);
                      else alert("please Select Gender To Continue");
                    }}
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
                <input
                  type="date"
                  className="inputDate"
                  onChange={(e) => setAge(e)}
                />
                <div className="modalFootRow">
                  <button
                    className="footerButton"
                    onClick={() => setIndex(index - 1)}
                  >
                    Back
                  </button>
                  <button
                    className="footerButton"
                    onClick={() => {
                      if (age) setIndex(index + 1);
                      else alert("Please Enter Your Date Of Birth To Continue");
                    }}
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
                  <button
                    className="modalDivButton"
                    onClick={() => setSmoker("Yes")}
                  >
                    <Form.Check
                      type="checkbox"
                      onClick={() => setSmoker("Yes")}
                      checked={smoker === "Yes" ? true : false}
                    />
                    Yes
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => setSmoker("No")}
                  >
                    <Form.Check
                      type="checkbox"
                      onClick={() => setSmoker("No")}
                      checked={smoker === "No" ? true : false}
                    />
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
                    onClick={() => {
                      if (smoker) setIndex(index + 1);
                      else alert("Please Select Your Answer To Continue");
                    }}
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
                <h4>
                  Do you have any of these sysmptoms:(Select all that apply)
                </h4>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("fever")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("fever") ? true : false}
                      onClick={() => onChangeSymptoms("fever")}
                    />
                    Fever
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("sore_throat")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("sore_throat") ? true : false}
                      onClick={() => onChangeSymptoms("sore_throat")}
                    />
                    Sore throat
                  </button>
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("cough")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("cough") ? true : false}
                      onClick={() => onChangeSymptoms("cough")}
                    />
                    Cough
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("pneumonia")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("pneumonia") ? true : false}
                      onClick={() => onChangeSymptoms("pneumonia")}
                    />
                    Pneumonia
                  </button>
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("breathing_difficulty")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={
                        symptoms.includes("breathing_difficulty") ? true : false
                      }
                      onClick={() => onChangeSymptoms("breathing_difficulty")}
                    />
                    Breathing Difficulty
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("headache")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("headache") ? true : false}
                      onClick={() => onChangeSymptoms("headache")}
                    />
                    Headache
                  </button>
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("myalgia")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("myalgia") ? true : false}
                      onClick={() => onChangeSymptoms("myalgia")}
                    />
                    Myalgia
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("fatigue")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("fatigue") ? true : false}
                      onClick={() => onChangeSymptoms("fatigue")}
                    />
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
                    onClick={() => {
                      if (symptoms) setIndex(index + 1);
                      else alert("Please Select Your Symptoms");
                    }}
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
                <h4>
                  Have you ever had or been diagnosed to have:(Select all that
                  apply)
                </h4>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeDiseases("diabetes")}
                  >
                    <Form.Check
                      type="checkbox"
                      onClick={() => onChangeDiseases("diabetes")}
                      checked={diseases.includes("diabetes") ? true : false}
                    />
                    Diabetes
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeDiseases("hypertension")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={diseases.includes("hypertension") ? true : false}
                      onClick={() => onChangeDiseases("hypertension")}
                    />
                    Hypertension
                  </button>
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeDiseases("kidney_failue")}
                  >
                    <Form.Check
                      type="checkbox"
                      onClick={() => onChangeDiseases("kidney_failue")}
                      checked={
                        diseases.includes("kidney_failue") ? true : false
                      }
                    />
                    Kidney Failue
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeDiseases("asthma")}
                  >
                    <Form.Check
                      type="checkbox"
                      onClick={() => onChangeDiseases("asthma")}
                      checked={diseases.includes("asthma") ? true : false}
                    />
                    Asthma
                  </button>
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeDiseases("cardiovascular")}
                  >
                    <Form.Check
                      type="checkbox"
                      onClick={() => onChangeDiseases("cardiovascular")}
                      checked={
                        diseases.includes("cardiovascular") ? true : false
                      }
                    />
                    Cardiovascular
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeDiseases("obesity")}
                  >
                    <Form.Check
                      type="checkbox"
                      onClick={() => onChangeDiseases("obesity")}
                      checked={diseases.includes("obesity") ? true : false}
                    />
                    Obesity
                  </button>
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeDiseases("immunosuppression")}
                  >
                    <Form.Check
                      type="checkbox"
                      onClick={() => onChangeDiseases("immunosuppression")}
                      checked={
                        diseases.includes("immunosuppression") ? true : false
                      }
                    />
                    Immunosuppression
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() =>
                      onChangeDiseases("chronic_obstructive_pulmonary")
                    }
                  >
                    <Form.Check
                      type="checkbox"
                      onClick={() =>
                        onChangeDiseases("chronic_obstructive_pulmonary")
                      }
                      checked={
                        diseases.includes("chronic_obstructive_pulmonary")
                          ? true
                          : false
                      }
                    />
                    Chronic_obstructive_pulmonary
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
                    onClick={() => {
                      setAge("")
                      setIndex(1);
                      setGender("")
                      setSmoker("")
                      setOpen(false);
                      setSymptoms([])
                      setDiseases([])
                    }}
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
            of coronavirus patients in the U.S. collected by various
            organizations. It estimates the probability of infection based on
            location and reported symptoms.
          </p>
          <p>
            This tool is not meant to take the place of consultation with your
            health care provider, to diagnose, or to treat conditions. If you're
            in an emergency medical situation, call 911 or your local emergency
            number.
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
