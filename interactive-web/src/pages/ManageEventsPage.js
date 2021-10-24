import React, { useState, useEffect } from "react";
import "./postStyle.css";
import "../component/Posts.css";
import useFirestore from "../hooks/useFirestore";
// import PostSearchContainer from "../component/postComponents/postSearchContainer";
// import PostMoreButton from "../component/postComponents/PostMoreButton";
// import { Button } from "../component/Button";
// import { projectFirestore } from "../firebase/config";
// import { Link } from "react-router-dom";
import { Row, Col } from "antd";

import EventList from "../component/EventList";

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function ManageEventsPage() {

  const { docs } = useFirestore("posts");

  return (
    <Row justify="center"> 
      <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
        <EventList admin={true}/>
      </Col>
    </Row>
    
  );
}

export default ManageEventsPage;