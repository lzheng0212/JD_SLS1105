import React, { useState, useEffect } from "react";
import "./CreateMapElement.css"
import "react-quill/dist/quill.snow.css";
import { Button } from "../component/Button";
import { useLocation } from "react-router";
import DatePicker from "react-datepicker";
import FooterComponent from "../component/FooterComponent";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import {message} from 'antd';
import "react-datepicker/dist/react-datepicker.css";

function CreateMapElement() {

  //constructor and setters
  const [fileURL, setFileURL] = useState(null);
  const updateData = useLocation().state;
  const update = updateData.update; // detect for update
  const [date, setDate] = useState(new Date());

  const successEvent = () => {
    message.success('Create Successfully!');
  };
  
  const successUpdate = () => {
    message.success('Update Successfully!');
  };
  
    const sendEvent = async (e) => {
      const programName = document.getElementById("programName").value;
      const programLocation = document.getElementById("programLocation").value;
      const programDescription = document.getElementById("programDescription").value;
      const month = String(date.getUTCMonth() + 1);
      const year = String(date.getUTCFullYear());

      var data = {
        title: programName,
        location: programLocation,
        description: programDescription,
        date: Date.parse(date),
      };
  
      document.getElementById("programLocation").value = "";
      document.getElementById("programName").value = "";
      document.getElementById("programDescription").value = "";
      setFile(null);
      setFileURL(null);
      setDate(new Date());

      if (!update) {
        const docRef = projectFirestore.collection("map").doc(year);
        const doc = await docRef.get();
        const docData = doc.data();
        if (doc.get(month) === undefined) {
          const events = {events: [data,]};
          await docRef.update({
            [month]: events
          }); 
        } else {
          const events = docData[month].events;
          const updatedEvents = {events: [...events, data]};
          await docRef.update({
            [month]: updatedEvents
          })
        }
        successEvent();
      } else { 
        const docRef = projectFirestore.collection("Events").doc(year);
        const doc = await docRef.get();
        const docData = doc.data();
        const events = docData[month].events;
        const updatedEvents = events.map(program => {
          if (program.programName !== programName) {
            return program;
          } else {
            return data;
          }
        })
        await docRef.update({
          [month]: {events: updatedEvents}
        })
        successUpdate();
      }
    };
  
    const [file, setFile] = useState(null);
  
    return (
      <div>
      <post-form>
        <div className = "program">
        <input
          placeholder="Program Name"
          type="text"
          id="programName"
          name="programName"
          style={{ width: "100%" }}
          defaultValue={update ? updateData.title : ""}
        />
        <br></br>
        <input
          placeholder="Location"
          type="text"
          id="programLocation"
          name="programLocation"
          style={{ width: "100%"}}
          defaultValue={update ? updateData.location : ""}
        />
        </div>

        <div className="date">
          <h3>Date</h3>
          <DatePicker 
            selected={date} 
            onChange={(date) => setDate(date)} 
            showTimeSelect 
            dateFormat="Pp"
          />
        </div>
        
        <div className = "program">
        <input
          placeholder="program description"
          type="text"
          id="programDescription"
          name="programDescription"
          style={{ width: "100%"}}
          defaultValue={update ? updateData.location : ""}
        />
        </div>

        <div className="output">
          {file && <div> {file.name} </div>}
        </div>
        
        <div >
          <div style={{ marginTop: "30px", paddingLeft: "850px" }}>
            {update && (
              <Button
                style={{ paddingLeft: "300px" }}
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                onClick={sendEvent}
              >
                Update
              </Button>
            )}
            {!update && (
              <Button
                style={{ paddingLeft: "300px" }}
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                onClick={sendEvent}
              >
                Create
              </Button>
            )}
          </div>
        </div>
      </post-form>
      </div>
    );
  }
  
export default CreateMapElement;
  