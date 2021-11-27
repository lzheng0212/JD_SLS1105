import React, { useState, useEffect } from "react";
import "./CreatePostPage.css";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../../component/Button";
import { useLocation } from "react-router";
import { Form, Input, Select, message, Row, Col, Upload } from 'antd';

import { reactQuillToolbarModules as toolbarModules } from "../../component/ReactQuillModules"
import {
  projectFirestore,
  timestamp,
} from "../../firebase/config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function AddTimelineEventPage() {

  const updateData = useLocation().state;
  const update = updateData.update;
  const [quill, setQuill] = useState(null)
  const [startdate, setStartDate] = useState(update ? updateData.date : new Date())

  
  const id = update ? updateData.id : null;

  const successEvent = () => {
    message.success('Create Successfully!');
  };
  const successUpdate = () => {
    message.success('Update Successfully!');
  };

  const sendTimeline = async (e) => {
    const timelineTitle = document.getElementById("timelineTitle").value;
    console.log(startdate)
    var data = {
      createdAt: timestamp(),
      date: startdate,
      title: timelineTitle,
      // content: JSON.stringify(quill.getContents()),
      content: quill.getText(),
    };
    console.log(data);
    document.getElementById("timelineTitle").value = "";
    quill.setText(" ")
    quill.placeholder = "Write your text!"
    
    
    setStartDate(new Date())
    if (update) {
      projectFirestore.collection("timeline").doc(id).update(data);
      successUpdate();
    } else {
      projectFirestore.collection("timeline").add(data);
      successEvent();
    }
   
  };


  useEffect(() => {
    
    let quill = new Quill(".ql-editor", {
      modules: {
        toolbar: toolbarModules.toolbar,
      },
      placeholder: "Write your text!",
      theme: "snow",
    });

    setQuill(quill)
    if (update) {
      quill.setText(updateData.content)
    }
  }, []);

  return (
    <div>
    <post-form>
      <div className = "title-author">
        <input
            placeholder="Title"
            type="text"
            id="timelineTitle"
            name="timelineTitle"
            style={{ width: "100%" }}
            defaultValue={update ? updateData.title : ""}
        />
        <br></br>
        
            <DatePicker dateFormat="yyyy-MM-dd" selected={startdate} onChange={(date) => setStartDate(date)} />
      </div>

      <div className="ql-editor" id="editor-container"></div>
      <div >
        <div style={{ marginTop: "30px", paddingLeft: "850px" }}>
          
         
            {!update && <Button
              style={{ paddingLeft: "300px" }}
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={sendTimeline}
            >
              Post
            </Button>}

            {update && <Button
              style={{ paddingLeft: "300px" }}
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={sendTimeline}
            >
              Update
            </Button>}
        
        </div>
      </div>
    </post-form>
    </div>
  );
}

export default AddTimelineEventPage;
