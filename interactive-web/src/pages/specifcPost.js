import React, { useEffect } from "react";
import FooterComponent from "../component/FooterComponent";
import "./specificPost.css";
import { useLocation } from "react-router-dom";
import Quill from "quill";
import { Layout } from "antd";
import NavigationBar from "../component/NavigationBar";
import { Content } from "antd/lib/layout/layout";

//rfc
//Collection on database must have a field named "createdAt"

export default function SpecifcPost() {

  const data = useLocation().state.props;

  useEffect(() => {
    let quill = new Quill('#quillPostContent', {
      modules: {
        toolbar: false,
      },
      theme: "snow",
      readOnly: true
    });
    let postContent = JSON.parse(data.description)
    quill.setContents(postContent)
  }, []);

  return (
    <Layout>
      <NavigationBar />
      <Content>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p id="specificPostBody"></p>
        <p>{data.title}</p>
        <p>{data.author}</p>
        <div id="quillPostContent"></div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
