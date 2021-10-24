import React, { useState, useEffect } from "react";
import "./CreateEventPage.css"
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../component/Button";
import { reactQuillToolbarModules as toolbarModules } from "../component/ReactQuillModules"
import { useLocation } from "react-router";
import DatePicker from "react-datepicker";
import FooterComponent from "../component/FooterComponent";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import CategoryContainer from "../component/postComponents/CategoryContainer";
import {message} from 'antd';
import "react-datepicker/dist/react-datepicker.css";




// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function CreateEventPage() {

  const [fileURL, setFileURL] = useState(null);
  const updateData = useLocation().state;
  const update = updateData.update;
  const [quill, setQuill] = useState(null)
  const [selectedCategories, setCategory] = useState([])
  const [availableCategories, setAvailableCategories] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const successEvent = () => {
    message.success('Create Successfully!');
  };

  const successUpdate = () => {
    message.success('Update Successfully!');
  };

  const addToCategoryList = (categoryName) => {
    if (!selectedCategories.includes(categoryName)) {
      setCategory([...selectedCategories, categoryName])
    }
  }

  const removeFromCategoryList = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      const index = selectedCategories.indexOf(categoryName)
      selectedCategories.splice(index, 1)
      setCategory([...selectedCategories])
    }
  }

  const sendEvent = async (e) => {
    const eventTitle = document.getElementById("eventTitle").value;
    const location = document.getElementById("eventLocation").value;
    const month = String(startDate.getUTCMonth() + 1);
    const year = String(startDate.getUTCFullYear());

    var data = {
      location: location,
      title: eventTitle,
      content: JSON.stringify(quill.getContents()),
      categories: selectedCategories,
      startTime: Date.parse(startDate),
      endTime: Date.parse(endDate)
    };

    console.log(data);
    document.getElementById("eventLocation").value = "";
    document.getElementById("eventTitle").value = "";
    setStartDate(new Date());
    setEndDate(new Date());
    setFile(null);
    setFileURL(null);
    if (!update) {
      const docRef = projectFirestore.collection("Events").doc(year);
      const doc = await docRef.get();
      const docData = doc.data();
      if (docData[month] === undefined) {
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
      const updatedEvents = events.map(event => {
        if (event.title !== eventTitle) {
          return event;
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

  useEffect(() => {
    projectFirestore
      .collection("categories")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          setAvailableCategories([...doc.data().CategoryList])
        });
      });
    let quill = new Quill(".ql-editor", {
      modules: {
        toolbar: toolbarModules.toolbar,
      },
      placeholder: "Event Desrcription!",
      theme: "snow",
    });

    setQuill(quill)
    if (update) {
      let data = JSON.parse(updateData.content)
      quill.setContents(data)
      setCategory([...updateData.categories])
      setStartDate(new Date(updateData.startTime));
      setEndDate(new Date(updateData.endTime));
    }
  }, []);

  return (
    <div>
    <post-form>
      <div className = "title-event">
      <input
        placeholder="Title"
        type="text"
        id="eventTitle"
        name="eventTitle"
        style={{ width: "100%" }}
        defaultValue={update ? updateData.title : ""}
      />
       <br></br>
      <input
        placeholder="Location"
        type="text"
        id="eventLocation"
        name="eventLocation"
        style={{ width: "100%"}}
        defaultValue={update ? updateData.location : ""}
      />
      </div>
      <div className="time-event">
        <div className="start-date">
          <h3>Start Date</h3>
          <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            showTimeSelect 
            dateFormat="Pp"
          />
        </div>
        <div className="end-date">
          <h3>End Date</h3>
          <DatePicker 
            selected={endDate} 
            onChange={(date) => setEndDate(date)} 
            showTimeSelect 
            dateFormat="Pp"
          />
        </div>
      </div>
      <h3>Available Categories</h3>
      <CategoryContainer  id="availableCategories"icon="+" categoryList={availableCategories} callBackFunc={addToCategoryList} background = {true}/>
      {selectedCategories.length !== 0 && (<><h3>Selected Categories</h3>
        <CategoryContainer icon="x" categoryList={selectedCategories} callBackFunc={removeFromCategoryList} /></>)}
      <div className="output">
        {file && <div> {file.name} </div>}
      </div>
      <div className="ql-editor" id="editor-container"></div>
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

export default CreateEventPage;
