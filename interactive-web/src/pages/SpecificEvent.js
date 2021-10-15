import React, { useEffect } from "react";
import FooterComponent from "../component/FooterComponent";
import { useLocation } from "react-router-dom";
import { Layout } from "antd";
import NavigationBar from "../component/NavigationBar";
import { Content } from "antd/lib/layout/layout";

export default function SpecificEvent() {

  const {calendarEvent: event, date} = useLocation().state;
  console.log(useLocation().state)
  console.log(event)
  console.log(date)
  return (
    <Layout>
      <NavigationBar />
      <Content>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p id="specificPostBody"></p>
        <p>{date.toDateString()}</p>
        <p>{event.categories.join(", ")}</p>
        <p>HELLO</p>
        <p>{event.description}</p>
      </Content>
      <FooterComponent />
    </Layout>
  );
}
