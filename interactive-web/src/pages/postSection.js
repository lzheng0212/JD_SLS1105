import React, { useState, useEffect } from "react";
import { Col, Row } from 'antd';
import "./postStyle.css";
import FooterComponent from "../component/FooterComponent";
import "../component/Posts.css";
import { Content } from "antd/lib/layout/layout";
import { Layout, Input} from "antd";
import NavigationBar from "../component/NavigationBar";
import PostList from "../component/ListViews/PostList";

export default function PostSection() {

  return (
    <Layout>
      <NavigationBar/>
      <Content style={{margin: '24px 24px 0px', paddingBottom: '0px', backgroundColor:'white'}}>
          <Row justify="center"> 
            <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
              <PostList/>
            </Col>
          </Row>
      </Content>
      <FooterComponent/>
    </Layout>
  );
}