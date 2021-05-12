import "./form.css";
import React, { useState } from "react";
import cover from "../../assets/cover1.jpg";
import { Form, Modal } from "react-bootstrap";
import axios from 'axios';
export default function Welcome ({ history }) {
  const [age, setAge] = useState();
  const [index, setIndex] = useState(1);
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("");
  const [smoker, setSmoker] = useState("");
  const [diseases, setDiseases] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [race, setRace] = useState("");

  const calculateAge = (bDate) => {
    const now = new Date();
    const date = new Date(
      parseInt(bDate.substring(0, 4)),
      parseInt(bDate.substring(5, 7)),
      parseInt(bDate.substring(8, 10))
    );
    const diff = Math.abs(now - date);
    const myAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    return myAge;
  };

  const handleSubmit = () => {
    const data = {
      "Age": calculateAge(age.target.value),
      "Asthma": diseases.includes("asthma"),
      "Breathing difficulty": symptoms.includes("breathing_difficulty"),
      "Cardiovascular": diseases.includes("cardiovascular"),
      "Cough": symptoms.includes("cough"),
      "Diabetes": diseases.includes("diabetes"),
      "Diarrhea": symptoms.includes("Diarrhea"),
      "Down Syndrome": symptoms.includes("Down Syndrome"),
      "Fever": symptoms.includes("fever"),
      "Headache": symptoms.includes("headache"),
      "Hematologic (Blood Disease)": symptoms.includes("Blood disease"),
      "Hypertension": diseases.includes("hypertension"),
      "Immunosuppression": diseases.includes("immunosuppression"),
      "Kidney disease": diseases.includes("kidney_failue"),
      "Liver disease": symptoms.includes("Liver disease"),
      "Low oxygen levels": symptoms.includes("Low oxygen levels"),
      "Male": gender === "Male",
      "Myalgia": symptoms.includes("myalgia"),
      "Neurological": symptoms.includes("neurological"),
      "Obesity": diseases.includes("obesity"),
      "Other diseases": symptoms.includes("Other diseases"),
      "Pneumonia": symptoms.includes("pneumonia"),
      "Pregnant": symptoms.includes("Pregnant"),
      "Race": race /*- One of "White", "Black", "Asian", "Hispanic/Latino" */,
      "Respiratory": symptoms.includes("Respiratory"),
      "Sore throat": symptoms.includes("sore_throat"),
      "Throat infection": symptoms.includes("Throat infection"),
      "Tobacco": smoker === "Yes",
      "Vomiting": symptoms.includes("vomiting"),
    };

    setAge("");
    setIndex(1);
    setGender("");
    setSmoker("");
    setOpen(false);
    setSymptoms([]);
    setDiseases([]);

    try {
      axios.post('http://localhost:5000/data', data, 
      {
        headers: {'Content-Type': 'application/json',},
      }).then(res => {
        var arr = []
        for (var key in res['data']) {
          arr.push(res['data'][key])  
        }
        history.push("/result", arr);
      })
    }catch (error) {
      console.log(error);  
    }

    history.push('/loading')
  };

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
                  <span className="modalFooterspan">6</span>
                  <span className="modalFooterspan">7</span>
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
                  <span className="modalFooterspan">6</span>
                  <span className="modalFooterspan">7</span>
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
                  <span className="modalFooterspan">6</span>
                  <span className="modalFooterspan">7</span>
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
                    onClick={() => onChangeSymptoms("neurological")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("neurological") ? true : false}
                      onClick={() => onChangeSymptoms("neurological")}
                    />
                    Neurological Symptoms
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
                  <span className="modalFooterspan">6</span>
                  <span className="modalFooterspan">7</span>
                </div>
              </div>
            )}

            {index === 5 && (
              <div className="modaldiv">
                <h4>
                  Do you have any of these preconditions:(Select all that apply)
                </h4>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("Diarrhea")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("Diarrhea") ? true : false}
                      onClick={() => onChangeSymptoms("Diarrhea")}
                    />
                    Diarrhea
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("Down Syndrome")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("Down Syndrome") ? true : false}
                      onClick={() => onChangeSymptoms("Down Syndrome")}
                    />
                    Down Syndrome
                  </button>
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("Blood disease")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("Blood disease") ? true : false}
                      onClick={() => onChangeSymptoms("Blood disease")}
                    />
                    Blood disease
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("Liver disease")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("Liver disease") ? true : false}
                      onClick={() => onChangeSymptoms("Liver disease")}
                    />
                    Liver disease
                  </button>
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("Low oxygen levels")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={
                        symptoms.includes("Low oxygen levels") ? true : false
                      }
                      onClick={() => onChangeSymptoms("Low oxygen levels")}
                    />
                    Low oxygen levels
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("Pregnant")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("Pregnant") ? true : false}
                      onClick={() => onChangeSymptoms("Pregnant")}
                    />
                    Pregnant
                  </button>
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("Respiratory")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("Respiratory") ? true : false}
                      onClick={() => onChangeSymptoms("Respiratory")}
                    />
                    Respiratory disease
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("Vomiting")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("Vomiting") ? true : false}
                      onClick={() => onChangeSymptoms("Vomiting")}
                    />
                    Vomiting
                  </button>  
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("Throat infection")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("Throat infection") ? true : false}
                      onClick={() => onChangeSymptoms("Throat infection")}
                    />
                    Throat infection
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => onChangeSymptoms("Other diseases")}
                  >
                    <Form.Check
                      type="checkbox"
                      checked={symptoms.includes("Other diseases") ? true : false}
                      onClick={() => onChangeSymptoms("Other diseases")}
                    />
                    Other diseases
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
                  <span className="modalFooterspan">4</span>
                  <span className="modalFooterspanActive">5</span>
                  <span className="modalFooterspan">6</span>
                  <span className="modalFooterspan">7</span>
                </div>
              </div>
            )}        

            {index === 6 && (
              <div className="modaldiv">
                <h4>
                  Please select your race.
                </h4>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => setRace("White")}
                  >
                    <Form.Check
                      onClick={() => setRace("White")}
                      checked={race === "White" ? true : false}
                      type="checkbox"
                    />
                    White
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => setRace("Black")}
                  >
                    <Form.Check
                      onClick={() => setRace("Black")}
                      checked={race === "Black" ? true : false}
                      type="checkbox"
                    />
                    Black
                  </button>
                </div>
                <div className="modaldivRow">
                  <button
                    className="modalDivButton"
                    onClick={() => setRace("Asian")}
                  >
                    <Form.Check
                      onClick={() => setRace("Asian")}
                      checked={race === "Asian" ? true : false}
                      type="checkbox"
                    />
                    Asian
                  </button>
                  <button
                    className="modalDivButton"
                    onClick={() => setRace("Hispanic/Latino")}
                  >
                    <Form.Check
                      onClick={() => setRace("Hispanic/Latino")}
                      checked={race === "Hispanic/Latino" ? true : false}
                      type="checkbox"
                    />
                    Hispanic/Latino
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
                      if (race) setIndex(index + 1);
                      else alert("Please Select A Race");
                    }}
                  >
                    Next
                  </button>
                </div>
                <div className="modalFooterRow">
                  <span className="modalFooterspan">1</span>
                  <span className="modalFooterspan">2</span>
                  <span className="modalFooterspan">3</span>
                  <span className="modalFooterspan">4</span>
                  <span className="modalFooterspan">5</span>
                  <span className="modalFooterspanActive">6</span>
                  <span className="modalFooterspan">7</span>
                </div>
              </div>
            )}        




            {index === 7 && (
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
                    Kidney Failure
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

                </div>
                <div className="modalFootRow">
                  <button
                    className="footerButton"
                    onClick={() => setIndex(index - 1)}
                  >
                    Back
                  </button>
                  <button className="footerButton" onClick={handleSubmit}>
                    Finish
                  </button>
                </div>
                <div className="modalFooterRow">
                  <span className="modalFooterspan">1</span>
                  <span className="modalFooterspan">2</span>
                  <span className="modalFooterspan">3</span>
                  <span className="modalFooterspan">4</span>
                  <span className="modalFooterspan">5</span>
                  <span className="modalFooterspan">6</span>
                  <span className="modalFooterspanActive">7</span>
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
